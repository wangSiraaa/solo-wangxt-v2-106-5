<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { buildGear, validateGearInput, DEG, transformOutline, type GearGeometry, type Pt } from './geometry/gear'
import { analyzeMesh, gearAnglesAt, mateAngle, type MeshInfo } from './geometry/mesh'
import { intersectOutlines } from './geometry/clipper'
import { GearViewer, type ViewerOptions } from './viewer'
import { UNITS, fromMm, toMm, fmtLen, type LengthUnit } from './units'
import {
  deleteCaseDeep,
  downloadJson,
  importCase,
  listCasesWithHeads,
  listConflicts,
  listRevisions,
  mergeHeads,
  clearConflict,
  saveRevision,
  type CaseWithHeads
} from './store'
import {
  hashOutlines,
  paramsToGearInput,
  serializeExport,
  type CheckSummary,
  type ConflictRecord,
  type ParamsSnapshot,
  type Revision
} from './revisions'
import { diffRevisions, interferenceDiff } from './compare'

// ------- 参数（内部全部 mm / 度） -------
const unit = ref<LengthUnit>('mm')

const gearParams = reactive({
  z1: 20,
  z2: 40,
  m: 2, // mm
  alphaDeg: 20,
  faceWidth: 10,
  centerDistance: 60, // mm
  useStandardCenter: true
})

const g1 = shallowRef<GearGeometry>()
const g2 = shallowRef<GearGeometry>()
const mesh = shallowRef<MeshInfo>()

const errors = reactive({ g1: [] as string[], g2: [] as string[] })

function rebuild() {
  const in1 = { z: Math.round(gearParams.z1), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  const in2 = { z: Math.round(gearParams.z2), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  errors.g1 = validateGearInput(in1)
  errors.g2 = validateGearInput(in2)
  if (errors.g1.length || errors.g2.length) return
  g1.value = buildGear(in1)
  g2.value = buildGear(in2)
  const a = gearParams.useStandardCenter
    ? g1.value.pitchR + g2.value.pitchR
    : gearParams.centerDistance
  mesh.value = analyzeMesh({ g1: g1.value, g2: g2.value, centerDistance: a })
}

// ------- 单位输入辅助（数值随单位换算；内部 mm 不变） -------
const mInput = computed({
  get: () => fromMm(gearParams.m, unit.value),
  set: (v: number) => (gearParams.m = toMm(v, unit.value))
})
const faceInput = computed({
  get: () => fromMm(gearParams.faceWidth, unit.value),
  set: (v: number) => (gearParams.faceWidth = toMm(v, unit.value))
})
const centerInput = computed({
  get: () => fromMm(gearParams.centerDistance, unit.value),
  set: (v: number) => (gearParams.centerDistance = toMm(v, unit.value))
})

watch(unit, () => {})

// ------- 动画 -------
const playing = ref(true)
const phi1 = ref(0)
const speed = ref(0.25) // rad/s（轮1）
let lastT = 0
const contactS = ref(0)

const showOpts = reactive<ViewerOptions>({
  showPitchCircle: true,
  showBaseCircle: true,
  showAddendumCircle: false,
  showDedendumCircle: false,
  showActionLine: true,
  showContact: true,
  contactS: 0
})

// ------- 干涉 -------
const interferenceArea = ref<number | null>(null)
const interferenceRegions = shallowRef<Pt[][]>([])
const interferenceBusy = ref(false)
let interfereReq = 0
/** 最近一次干涉检查的结论（随修订保存） */
const lastInterference = shallowRef<CheckSummary['interference']>(null)

async function checkInterference(currentPhi1: number) {
  if (!g1.value || !g2.value || !mesh.value) return
  const p1 = currentPhi1
  const p2 = mateAngle(g1.value, g2.value, mesh.value, p1)
  const o1 = [transformOutline(g1.value.outline, 0, 0, p1)]
  const o2 = [transformOutline(g2.value.outline, mesh.value.a, 0, p2)]
  const req = ++interfereReq
  interferenceBusy.value = true
  try {
    const res = await intersectOutlines(o1, o2)
    if (req !== interfereReq) return
    interferenceArea.value = res.area
    interferenceRegions.value = res.regions
    lastInterference.value = { phi1: p1, contactS: contactS.value, area: res.area, regions: res.regions }
  } finally {
    if (req === interfereReq) interferenceBusy.value = false
  }
}

// ------- 视图 -------
const host = ref<HTMLDivElement>()
let viewer: GearViewer | null = null

function pushOverlay() {
  if (!viewer || !mesh.value) return
  viewer.setMeshOverlay(mesh.value, {
    ...showOpts,
    contactS: contactS.value,
    contactRegions: [interferenceRegions.value]
  })
}

onMounted(() => {
  rebuild()
  viewer = new GearViewer(host.value!)
  if (g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)

  const loop = (t: number) => {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0)
    lastT = t
    if (playing.value && g1.value && g2.value && mesh.value) {
      phi1.value += speed.value * dt
      // 归一到一个齿距周期，避免数值增长
      const period = (2 * Math.PI) / g1.value.input.z
      phi1.value = ((phi1.value % period) + period) % period
      // 接触点 s 随 φ1 同步：dφ1/ds = 1/rb1，相位常量按节点对齐
      const s = (phi1.value - (gearAnglesAt(mesh.value, g1.value, g2.value, 0).phi1)) * g1.value.baseR
      contactS.value = clampS(s)
    }
    if (g1.value && g2.value && mesh.value) {
      const p2 = mateAngle(g1.value, g2.value, mesh.value, phi1.value)
      viewer!.setAngles(phi1.value, p2)
      showOpts.contactS = contactS.value
      pushOverlay()
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})

function clampS(s: number) {
  if (!mesh.value) return 0
  const a = mesh.value.actionLine
  const ap = mesh.value.alphaPrime
  const nx = Math.sin(ap),
    ny = Math.cos(ap)
  const sLo =
    (a.p0.x - mesh.value.pitchPoint.x) * nx + (a.p0.y - mesh.value.pitchPoint.y) * ny
  const sHi =
    (a.p1.x - mesh.value.pitchPoint.x) * nx + (a.p1.y - mesh.value.pitchPoint.y) * ny
  // 超出区间则循环到下一齿（让接触点重新进入）
  if (s < sLo) return sHi - ((sLo - s) % (sHi - sLo))
  if (s > sHi) return sLo + ((s - sHi) % (sHi - sLo))
  return s
}

// 参数被修改 → 工作状态偏离已载入修订（下次保存将形成新修订）
const paramsDirty = ref(false)

watch(
  () => [gearParams.z1, gearParams.z2, gearParams.m, gearParams.alphaDeg, gearParams.faceWidth, gearParams.useStandardCenter, gearParams.centerDistance],
  () => {
    rebuild()
    if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
    phi1.value = 0
    contactS.value = 0
    interferenceArea.value = null
    interferenceRegions.value = []
    lastInterference.value = null
    paramsDirty.value = true
  }
)

watch(showOpts, pushOverlay)
watch(contactS, () => (showOpts.contactS = contactS.value))

// ------- 暂停时手动检查 -------
function pause() {
  playing.value = false
}
function resume() {
  playing.value = true
}

/** 暂停时手动拖动接触点：把轮1 转到与该 s 严格对应的相位（同一条渐开线接触） */
function scrubContact() {
  if (playing.value || !g1.value || !g2.value || !mesh.value) return
  phi1.value = gearAnglesAt(mesh.value, g1.value, g2.value, contactS.value).phi1
}

// ------- 修订工作流（不可变修订 / 分支 / 合并 / 冲突） -------
const cases = shallowRef<CaseWithHeads[]>([])
const conflicts = shallowRef<ConflictRecord[]>([])
const selectedCaseId = ref<string | null>(null)
const selectedRevisions = shallowRef<Revision[]>([])
const caseName = ref('未命名案例')
const caseNote = ref('')
const saveMsg = ref('')
/** 当前工作状态所属案例与所基于的修订（下次保存的父修订） */
const currentCaseId = ref<string | null>(null)
const currentRevisionId = ref<string | null>(null)

const selectedCase = computed(() => cases.value.find((c) => c.meta.id === selectedCaseId.value) ?? null)

async function refreshCases(keepSelection = true) {
  cases.value = await listCasesWithHeads()
  conflicts.value = await listConflicts()
  if (!keepSelection) selectedCaseId.value = null
  if (selectedCaseId.value) {
    if (cases.value.some((c) => c.meta.id === selectedCaseId.value)) {
      selectedRevisions.value = await listRevisions(selectedCaseId.value)
    } else {
      selectedCaseId.value = null
      selectedRevisions.value = []
    }
  }
}
onMounted(refreshCases)

async function selectCase(id: string) {
  selectedCaseId.value = id
  selectedRevisions.value = await listRevisions(id)
  compareAId.value = ''
  compareBId.value = ''
  interferenceRecalc.value = null
}

function currentParamsSnapshot(): ParamsSnapshot {
  return {
    gear1: {
      z: Math.round(gearParams.z1),
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    gear2: {
      z: Math.round(gearParams.z2),
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    centerDistance: gearParams.useStandardCenter ? null : gearParams.centerDistance
  }
}

function buildCheckSummary(): CheckSummary | null {
  if (!g1.value || !g2.value || !mesh.value) return null
  const m = mesh.value
  return {
    checkedAt: Date.now(),
    centerDistance: m.a,
    standardCenter: m.a0,
    alphaPrimeDeg: m.alphaPrime / DEG,
    contactRatio: m.contactRatio,
    backlashTangential: m.backlashTangential,
    clearanceMin: Math.min(m.clearance12, m.clearance21),
    basePitchMatch: m.basePitchMatch,
    undercut: [g1.value.undercut, g2.value.undercut],
    warnings: [...m.warnings],
    interference: lastInterference.value
  }
}

const shortId = (id: string) => (id.length > 18 ? id.slice(0, 12) + '…' + id.slice(-4) : id)
const fmtTime = (ts: number) => new Date(ts).toLocaleString()

/** 保存新修订；runCheckFirst=true 时先对当前帧做一次干涉求交再保存 */
async function saveRevisionNow(runCheckFirst: boolean) {
  if (!g1.value || !g2.value || !mesh.value) {
    alert('当前参数不合法，无法保存')
    return
  }
  if (runCheckFirst) await checkInterference(phi1.value)
  try {
    const res = await saveRevision({
      caseId: currentCaseId.value,
      caseName: caseName.value,
      unit: unit.value,
      parentIds: currentRevisionId.value ? [currentRevisionId.value] : [],
      note: caseNote.value,
      params: currentParamsSnapshot(),
      outlines: { gear1: g1.value.outline, gear2: g2.value.outline },
      check: buildCheckSummary()
    })
    currentCaseId.value = res.caseId
    currentRevisionId.value = res.revision.id
    paramsDirty.value = false
    saveMsg.value = res.created
      ? `已保存修订 ${shortId(res.revision.id)}${res.branched ? '；检测到并行分支（已保留全部头）' : ''}`
      : `内容与修订 ${shortId(res.revision.id)} 完全相同，未新建`
    selectedCaseId.value = res.caseId
    await refreshCases()
  } catch (e) {
    alert('保存失败：' + (e as Error).message)
  }
}

/** 分叉为新案例：以当前工作状态为内容、以当前修订为父，落到一个新案例里 */
async function forkAsNewCase() {
  if (!g1.value || !g2.value || !mesh.value) return
  const parent = currentRevisionId.value
  currentCaseId.value = null
  await saveRevisionNow(false)
  saveMsg.value = `已分叉为新案例（父修订 ${parent ? shortId(parent) : '无'}）`
}

/** 载入任一历史修订：几何/参数恢复，下次保存即以它为父（分叉实验） */
async function loadRevision(rev: Revision) {
  gearParams.z1 = rev.params.gear1.z
  gearParams.z2 = rev.params.gear2.z
  gearParams.m = rev.params.gear1.module
  gearParams.alphaDeg = rev.params.gear1.alphaDeg
  gearParams.faceWidth = rev.params.gear1.faceWidth
  if (rev.params.centerDistance == null) {
    gearParams.useStandardCenter = true
  } else {
    gearParams.useStandardCenter = false
    gearParams.centerDistance = rev.params.centerDistance
  }
  caseNote.value = rev.note
  const meta = cases.value.find((c) => c.meta.id === rev.caseId)?.meta
  if (meta) {
    caseName.value = meta.name
    unit.value = meta.unit
  }
  currentCaseId.value = rev.caseId
  currentRevisionId.value = rev.id
  rebuild()
  if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
  // 等参数 watch 刷新完再清除"已修改"标记（watch 是异步的，否则会覆盖）
  await nextTick()
  paramsDirty.value = false
  // 完整性提示：重建几何应与修订指纹一致
  const okHash =
    g1.value && g2.value
      ? hashOutlines({ gear1: g1.value.outline, gear2: g2.value.outline }) === rev.outlineHash
      : false
  saveMsg.value = okHash
    ? `已载入 ${shortId(rev.id)}，几何指纹一致 ✅（修改参数后保存将形成它的后继/分支）`
    : `已载入 ${shortId(rev.id)}，⚠️ 重建几何与修订指纹不一致（数据可能损坏）`
}

async function removeCase(id: string) {
  if (!confirm('删除该案例及其全部修订？此操作不可恢复。')) return
  await deleteCaseDeep(id)
  if (currentCaseId.value === id) {
    currentCaseId.value = null
    currentRevisionId.value = null
  }
  await refreshCases()
}

async function exportCase(c: CaseWithHeads) {
  const revs = await listRevisions(c.meta.id)
  downloadJson(serializeExport(c.meta, revs), c.meta.name)
}

async function exportRevision(rev: Revision) {
  const meta = cases.value.find((c) => c.meta.id === rev.caseId)?.meta
  downloadJson(
    serializeExport(meta ?? { id: rev.caseId, name: '导出的修订', unit: unit.value }, [rev]),
    `修订-${shortId(rev.id)}`
  )
}

async function importFile(ev: Event) {
  const input = ev.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = async () => {
    try {
      const rep = await importCase(String(reader.result))
      if (!rep.ok) {
        saveMsg.value = `导入被拒绝：${rep.error}`
        alert('导入失败：' + rep.error)
      } else {
        const parts = [`新存 ${rep.stored.length} 个修订`]
        if (rep.duplicates.length) parts.push(`${rep.duplicates.length} 个重复已去重`)
        if (rep.conflicts.length) parts.push(`⚠️ ${rep.conflicts.length} 个冲突（见下方冲突列表）`)
        if (rep.migratedFromV1) parts.push('旧版案例已自动迁移')
        if (rep.rebuiltOutlines) parts.push(`${rep.rebuiltOutlines} 个修订的轮廓由参数重建`)
        saveMsg.value = '导入完成：' + parts.join('，')
        if (rep.caseId) selectedCaseId.value = rep.caseId
      }
      await refreshCases()
    } catch (e) {
      alert('导入失败：' + (e as Error).message)
    }
  }
  reader.readAsText(file)
  input.value = ''
}

async function dismissConflict(id: number) {
  await clearConflict(id)
  conflicts.value = await listConflicts()
}

// ------- 分支合并 -------
const mergeBaseId = ref('')
const mergeNote = ref('')

async function doMerge() {
  if (!selectedCaseId.value || !mergeBaseId.value) return
  try {
    const res = await mergeHeads(selectedCaseId.value, mergeBaseId.value, mergeNote.value)
    saveMsg.value = `已合并为修订 ${shortId(res.revision.id)}，分支收敛为单头`
    mergeBaseId.value = ''
    mergeNote.value = ''
    await refreshCases()
  } catch (e) {
    alert('合并失败：' + (e as Error).message)
  }
}

// ------- 修订对比 -------
const compareAId = ref('')
const compareBId = ref('')
const interferenceRecalc = shallowRef<{ a: number; b: number } | null>(null)
const recalcBusy = ref(false)

const compareA = computed(() => selectedRevisions.value.find((r) => r.id === compareAId.value) ?? null)
const compareB = computed(() => selectedRevisions.value.find((r) => r.id === compareBId.value) ?? null)

const compareRows = computed(() => (compareA.value && compareB.value ? diffRevisions(compareA.value, compareB.value) : []))
const compareInterference = computed(() =>
  compareA.value && compareB.value ? interferenceDiff(compareA.value, compareB.value) : null
)

/** 以当前接触点 s 重新计算两版干涉（用各自保存的轮廓，几何不可变） */
async function recalcInterference() {
  if (!compareA.value || !compareB.value || !mesh.value) return
  recalcBusy.value = true
  interferenceRecalc.value = null
  try {
    const run = async (rev: Revision) => {
      const ga = buildGear(paramsToGearInput(rev.params.gear1))
      const gb = buildGear(paramsToGearInput(rev.params.gear2))
      const a = rev.params.centerDistance ?? ga.pitchR + gb.pitchR
      const m = analyzeMesh({ g1: ga, g2: gb, centerDistance: a })
      const p1 = gearAnglesAt(m, ga, gb, contactS.value).phi1
      const p2 = mateAngle(ga, gb, m, p1)
      const res = await intersectOutlines(
        [transformOutline(rev.outlines.gear1, 0, 0, p1)],
        [transformOutline(rev.outlines.gear2, a, 0, p2)]
      )
      return res.area
    }
    const [a, b] = await Promise.all([run(compareA.value), run(compareB.value)])
    interferenceRecalc.value = { a, b }
  } finally {
    recalcBusy.value = false
  }
}

// ------- 派生显示 -------
const dims = computed(() => {
  if (!g1.value || !g2.value || !mesh.value) return null
  return { g1: g1.value, g2: g2.value, mesh: mesh.value }
})

/** 实际啮合线参数 s 的两端（用于接触点滑块） */
const sBounds = computed<[number, number]>(() => {
  if (!mesh.value) return [-30, 30]
  const m = mesh.value
  const nx = Math.sin(m.alphaPrime),
    ny = Math.cos(m.alphaPrime)
  const lo = (m.actionLine.p0.x - m.pitchPoint.x) * nx + (m.actionLine.p0.y - m.pitchPoint.y) * ny
  const hi = (m.actionLine.p1.x - m.pitchPoint.x) * nx + (m.actionLine.p1.y - m.pitchPoint.y) * ny
  return [Math.floor(lo * 10) / 10, Math.ceil(hi * 10) / 10]
})

function fmt(mm: number) {
  return fmtLen(mm, unit.value)
}

/** 对比表数值格式化（mm 量随显示单位换算） */
function fmtDiff(v: number | string) {
  return typeof v === 'number' ? fmt(v) : v
}

function revisionLabel(r: Revision) {
  return `${shortId(r.id)} · ${r.params.gear1.z}/${r.params.gear2.z} m=${r.params.gear1.module} · ${fmtTime(r.createdAt)}`
}

// 预设样本：标准齿数与极少齿数，便于核对
function preset(z1: number, z2: number, m = 2, alphaDeg = 20) {
  gearParams.z1 = z1
  gearParams.z2 = z2
  gearParams.m = m
  gearParams.alphaDeg = alphaDeg
  gearParams.useStandardCenter = true
}
</script>

<template>
  <div class="app">
    <header>
      <h1>直齿圆柱齿轮参数化实验室</h1>
      <div class="sub">外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）· 不可变修订</div>
    </header>

    <main>
      <aside class="panel">
        <section>
          <h2>显示单位（不改变实际尺寸）</h2>
          <div class="units">
            <button v-for="u in Object.keys(UNITS)" :key="u" :class="{ active: unit === u }" @click="unit = u as LengthUnit">
              {{ UNITS[u as LengthUnit].label }}
            </button>
          </div>
        </section>

        <section>
          <h2>齿轮参数</h2>
          <label>压力角 α（度）
            <input type="number" v-model.number="gearParams.alphaDeg" min="1" max="45" step="0.5" />
          </label>
          <label>模数 m（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="mInput" :step="UNITS[unit].step" />
          </label>
          <label>齿宽 b（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="faceInput" :step="UNITS[unit].step" />
          </label>
          <div class="two">
            <label>齿数 z₁
              <input type="number" v-model.number="gearParams.z1" min="4" step="1" />
            </label>
            <label>齿数 z₂
              <input type="number" v-model.number="gearParams.z2" min="4" step="1" />
            </label>
          </div>
          <div v-if="errors.g1.length" class="err">{{ errors.g1.join('；') }}</div>
          <div v-if="errors.g2.length" class="err">{{ errors.g2.join('；') }}</div>
        </section>

        <section>
          <h2>中心距</h2>
          <label class="row">
            <input type="checkbox" v-model="gearParams.useStandardCenter" /> 使用标准中心距 a₀ = m(z₁+z₂)/2
          </label>
          <label v-if="!gearParams.useStandardCenter">实际中心距 a（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="centerInput" :step="UNITS[unit].step" />
          </label>
        </section>

        <section>
          <h2>运动 / 检查</h2>
          <div class="row">
            <button @click="pause" :disabled="!playing">暂停</button>
            <button @click="resume" :disabled="playing">继续</button>
          </div>
          <label>轮1 角速度（rad/s）
            <input type="range" v-model.number="speed" min="0" max="1.5" step="0.01" />
          </label>
          <label>接触点沿啮合线 s（mm，暂停可拖动）
            <input type="range" :disabled="playing" v-model.number="contactS" :min="sBounds[0]" :max="sBounds[1]" step="0.05" @input="scrubContact" />
          </label>
          <button class="wide" @click="checkInterference(phi1)" :disabled="playing || interferenceBusy">
            {{ interferenceBusy ? 'Clipper 求交中…' : '在当前帧做局部干涉求交（Clipper2 WASM）' }}
          </button>
          <div v-if="interferenceArea !== null" class="report">
            重叠面积 = {{ interferenceArea.toExponential(3) }} mm²
            <b :class="interferenceArea > 1e-6 ? 'bad' : 'good'">
              {{ interferenceArea > 1e-6 ? '存在实体干涉 ❗' : '当前帧无干涉 ✅' }}
            </b>
          </div>
        </section>

        <section>
          <h2>显示选项</h2>
          <label class="row"><input type="checkbox" v-model="showOpts.showPitchCircle" /> 节圆/分度圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showBaseCircle" /> 基圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showAddendumCircle" /> 齿顶圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showDedendumCircle" /> 齿根圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showActionLine" /> 啮合线（理论/实际）</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showContact" /> 接触点</label>
        </section>

        <section>
          <h2>核对样本</h2>
          <div class="samples">
            <button @click="preset(20,40)">20/40 标准</button>
            <button @click="preset(17,17)">17/17 临界</button>
            <button @click="preset(16,40)">16/40 根切</button>
            <button @click="preset(12,40)">12/40 极少齿</button>
          </div>
        </section>
      </aside>

      <section class="viewport">
        <div ref="host" class="canvas-host"></div>

        <div class="readouts">
          <div v-if="dims" class="dim-grid">
            <table>
              <thead><tr><th></th><th>齿轮 1（z₁={{ gearParams.z1 }}）</th><th>齿轮 2（z₂={{ gearParams.z2 }}）</th></tr></thead>
              <tbody>
                <tr><td>分度圆直径 d</td><td>{{ fmt(dims.g1.pitchR * 2) }}</td><td>{{ fmt(dims.g2.pitchR * 2) }}</td></tr>
                <tr><td>基圆直径 d_b</td><td>{{ fmt(dims.g1.baseR * 2) }}</td><td>{{ fmt(dims.g2.baseR * 2) }}</td></tr>
                <tr><td>齿顶圆 d_a</td><td>{{ fmt(dims.g1.addendumR * 2) }}</td><td>{{ fmt(dims.g2.addendumR * 2) }}</td></tr>
                <tr><td>齿根圆 d_f</td><td>{{ fmt(dims.g1.dedendumR * 2) }}</td><td>{{ fmt(dims.g2.dedendumR * 2) }}</td></tr>
                <tr><td>齿距 p = πm</td><td>{{ fmt(dims.g1.circularPitch) }}</td><td>{{ fmt(dims.g2.circularPitch) }}</td></tr>
                <tr><td>基节 p_b</td><td>{{ fmt(dims.g1.basePitch) }}</td><td>{{ fmt(dims.g2.basePitch) }}</td></tr>
                <tr><td>齿顶压力角 α_a</td><td>{{ (dims.g1.alphaTip / DEG).toFixed(2) }}°</td><td>{{ (dims.g2.alphaTip / DEG).toFixed(2) }}°</td></tr>
                <tr><td>根切风险 (z&lt;{{ dims.g1.zMinValue.toFixed(1) }})</td>
                  <td :class="dims.g1.undercut ? 'bad' : 'good'">{{ dims.g1.undercut ? '根切 ❗' : '安全' }}</td>
                  <td :class="dims.g2.undercut ? 'bad' : 'good'">{{ dims.g2.undercut ? '根切 ❗' : '安全' }}</td></tr>
              </tbody>
            </table>

            <div class="mesh-report">
              <h3>啮合检查</h3>
              <div>标准中心距 a₀：<b>{{ fmt(dims.mesh.a0) }}</b></div>
              <div>实际中心距 a：<b>{{ fmt(dims.mesh.a) }}</b>（Δa = {{ fmt(dims.mesh.deltaA) }}）</div>
              <div>啮合角 α′：<b>{{ (dims.mesh.alphaPrime / DEG).toFixed(3) }}°</b></div>
              <div>节圆半径 r₁′/r₂′：<b>{{ fmt(dims.mesh.pitchR1) }} / {{ fmt(dims.mesh.pitchR2) }}</b></div>
              <div>实际啮合线长度 g_α：<b>{{ fmt(dims.mesh.pathOfContact) }}</b></div>
              <div>重合度 ε_α = g_α/p_b：<b :class="dims.mesh.contactRatio < 1 ? 'bad' : 'good'">{{ dims.mesh.contactRatio.toFixed(3) }}</b></div>
              <div>圆周/法向侧隙：<b>{{ fmt(dims.mesh.backlashTangential) }} / {{ fmt(dims.mesh.backlashNormal) }}</b></div>
              <div>顶隙 c：<b>{{ fmt(dims.mesh.clearance12) }}</b></div>
              <div>基节一致：<b :class="dims.mesh.basePitchMatch ? 'good' : 'bad'">{{ dims.mesh.basePitchMatch ? '是 ✅' : '否 ❌' }}</b></div>
              <ul v-if="dims.mesh.warnings.length" class="warns">
                <li v-for="(w, i) in dims.mesh.warnings" :key="i">⚠️ {{ w }}</li>
              </ul>
              <div class="formula">
                渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α；
                啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside class="panel right">
        <section>
          <h2>保存修订（不可变）</h2>
          <input v-model="caseName" placeholder="案例名称" />
          <textarea v-model="caseNote" placeholder="本次修订备注（可选）" rows="2"></textarea>
          <div class="row">
            <button @click="saveRevisionNow(false)">保存新修订</button>
            <button @click="saveRevisionNow(true)" :disabled="interferenceBusy">干涉检查后保存</button>
          </div>
          <div class="row">
            <button @click="forkAsNewCase" title="以当前修订为父，把当前工作状态存到一个新案例">另存为新案例（分叉）</button>
          </div>
          <div class="row">
            <label class="wide filebtn">导入 JSON（v1 旧案例自动迁移）
              <input type="file" accept="application/json,.json" @change="importFile" hidden />
            </label>
          </div>
          <div class="revstate">
            <template v-if="currentRevisionId">
              当前基于 <code>{{ shortId(currentRevisionId) }}</code>
              <span v-if="paramsDirty" class="bad">· 参数已修改（保存将产生新修订）</span>
              <span v-else class="good">· 与已存修订一致</span>
            </template>
            <template v-else>尚未保存：首次保存将创建新案例与根修订</template>
          </div>
          <div v-if="saveMsg" class="report">{{ saveMsg }}</div>
        </section>

        <section v-if="conflicts.length">
          <h2>⚠️ 导入冲突（{{ conflicts.length }}）</h2>
          <ul class="caselist">
            <li v-for="c in conflicts" :key="c.id">
              <div class="ci">
                <b>{{ c.type === 'id-mismatch' ? '修订 id 与内容不符' : '轮廓指纹不一致' }}</b>
                <span>{{ c.detail }}</span>
                <span class="dim">{{ fmtTime(c.detectedAt) }}</span>
              </div>
              <div class="ca"><button class="del" @click="dismissConflict(c.id!)">知道了</button></div>
            </li>
          </ul>
        </section>

        <section>
          <h2>案例库</h2>
          <ul class="caselist">
            <li v-for="c in cases" :key="c.meta.id" :class="{ selected: c.meta.id === selectedCaseId }">
              <div class="ci clickable" @click="selectCase(c.meta.id)">
                <b>{{ c.meta.name }}</b>
                <span>
                  {{ c.revisionCount }} 个修订
                  <template v-if="c.meta.headIds.length > 1"> · <b class="bad">🔀 {{ c.meta.headIds.length }} 个并行分支</b></template>
                </span>
              </div>
              <div class="ca">
                <button v-if="c.heads.length" @click="loadRevision(c.heads[c.heads.length - 1])" title="载入最新分支头">载入</button>
                <button @click="exportCase(c)" title="导出全部修订为 JSON">导出</button>
                <button class="del" @click="removeCase(c.meta.id)">删</button>
              </div>
            </li>
            <li v-if="!cases.length" class="empty">暂无案例</li>
          </ul>
        </section>

        <section v-if="selectedCase">
          <h2>修订历史（{{ selectedRevisions.length }}）</h2>
          <div v-if="selectedCase.meta.headIds.length > 1" class="report branchbox">
            🔀 该案例有 {{ selectedCase.meta.headIds.length }} 个并行分支头（来自并发保存或导入），均已保留。
            <div class="row">
              <select v-model="mergeBaseId">
                <option value="" disabled>选择合并后采用的内容…</option>
                <option v-for="h in selectedCase.heads" :key="h.id" :value="h.id">{{ revisionLabel(h) }}</option>
              </select>
            </div>
            <input v-model="mergeNote" placeholder="合并备注（可选）" />
            <button class="wide" :disabled="!mergeBaseId" @click="doMerge">合并分支（保留全部历史）</button>
          </div>
          <ul class="revlist">
            <li v-for="r in [...selectedRevisions].reverse()" :key="r.id" :class="{ current: r.id === currentRevisionId }">
              <div class="rv-head">
                <code>{{ shortId(r.id) }}</code>
                <span class="badges">
                  <b v-if="selectedCase.meta.headIds.includes(r.id)" class="badge head">头</b>
                  <b v-if="r.id === currentRevisionId" class="badge cur">当前</b>
                  <b v-if="r.parentIds.length > 1" class="badge merge">合并</b>
                  <b v-if="r.parentIds.length === 0" class="badge">根</b>
                  <b v-if="r.migratedFrom" class="badge">v{{ r.migratedFrom }}迁移</b>
                </span>
              </div>
              <div class="rv-meta">
                {{ fmtTime(r.createdAt) }} · z {{ r.params.gear1.z }}/{{ r.params.gear2.z }} · m={{ r.params.gear1.module }} · α={{ r.params.gear1.alphaDeg }}°
                · a={{ r.params.centerDistance == null ? '标准' : fmt(r.params.centerDistance) }}
              </div>
              <div class="rv-meta" v-if="r.check">
                检查：ε={{ r.check.contactRatio.toFixed(3) }}，j_t={{ fmt(r.check.backlashTangential) }}
                <template v-if="r.check.interference">
                  · 干涉面积 <b :class="r.check.interference.area > 1e-6 ? 'bad' : 'good'">{{ r.check.interference.area.toExponential(2) }} mm²</b>
                </template>
                <template v-else> · 未做干涉求交</template>
              </div>
              <div class="rv-meta note" v-if="r.note">📝 {{ r.note }}</div>
              <div class="rv-meta dim">
                父：<template v-if="r.parentIds.length">{{ r.parentIds.map(shortId).join('、') }}</template><template v-else>（根修订）</template>
              </div>
              <div class="ca">
                <button @click="loadRevision(r)" title="载入该修订；之后保存即以它为父（分叉实验）">载入/分叉</button>
                <button @click="compareAId = r.id" :class="{ active: compareAId === r.id }">对比A</button>
                <button @click="compareBId = r.id" :class="{ active: compareBId === r.id }">对比B</button>
                <button @click="exportRevision(r)" title="仅导出此修订">导出</button>
              </div>
            </li>
          </ul>
        </section>

        <section v-if="compareA && compareB">
          <h2>修订对比</h2>
          <div class="rv-meta dim">A = {{ revisionLabel(compareA) }}</div>
          <div class="rv-meta dim">B = {{ revisionLabel(compareB) }}</div>
          <table class="difftable">
            <thead><tr><th>项目</th><th>A</th><th>B</th><th>Δ(B−A)</th></tr></thead>
            <tbody>
              <tr v-for="row in compareRows" :key="row.label" :class="{ changed: row.changed }">
                <td>{{ row.label }}</td>
                <td>{{ fmtDiff(row.a) }}</td>
                <td>{{ fmtDiff(row.b) }}</td>
                <td>{{ row.delta !== null ? fmtDiff(row.delta) : (row.changed ? '不同' : '—') }}</td>
              </tr>
            </tbody>
          </table>
          <div class="report">
            <div>保存时的干涉结论：</div>
            <div>A：
              <template v-if="compareInterference?.a">面积 {{ compareInterference.a.area.toExponential(3) }} mm²（φ₁={{ compareInterference.a.phi1.toFixed(3) }}）</template>
              <template v-else>未做求交</template>
            </div>
            <div>B：
              <template v-if="compareInterference?.b">面积 {{ compareInterference.b.area.toExponential(3) }} mm²（φ₁={{ compareInterference.b.phi1.toFixed(3) }}）</template>
              <template v-else>未做求交</template>
            </div>
            <div v-if="compareInterference?.deltaArea !== null && compareInterference?.deltaArea !== undefined">
              Δ面积 = {{ compareInterference.deltaArea.toExponential(3) }} mm²
            </div>
          </div>
          <button class="wide" :disabled="recalcBusy" @click="recalcInterference">
            {{ recalcBusy ? '求交中…' : `以当前接触点 s=${contactS.toFixed(2)} mm 重算两版干涉` }}
          </button>
          <div v-if="interferenceRecalc" class="report">
            当前帧重算（用各自保存的轮廓）：<br />
            A：{{ interferenceRecalc.a.toExponential(3) }} mm²
            <b :class="interferenceRecalc.a > 1e-6 ? 'bad' : 'good'">{{ interferenceRecalc.a > 1e-6 ? '干涉' : '无干涉' }}</b><br />
            B：{{ interferenceRecalc.b.toExponential(3) }} mm²
            <b :class="interferenceRecalc.b > 1e-6 ? 'bad' : 'good'">{{ interferenceRecalc.b > 1e-6 ? '干涉' : '无干涉' }}</b><br />
            Δ = {{ (interferenceRecalc.b - interferenceRecalc.a).toExponential(3) }} mm²
          </div>
        </section>
      </aside>
    </main>
  </div>
</template>
