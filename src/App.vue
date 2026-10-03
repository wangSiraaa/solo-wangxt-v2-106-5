<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, reactive, ref, shallowRef, watch } from 'vue'
import { buildGear, validateGearInput, DEG, transformOutline, type GearGeometry, type Pt } from './geometry/gear'
import { analyzeMesh, gearAnglesAt, mateAngle, type MeshInfo } from './geometry/mesh'
import { intersectOutlines } from './geometry/clipper'
import { GearViewer, type ViewerOptions } from './viewer'
import { UNITS, fromMm, toMm, fmtLen, type LengthUnit } from './units'
import {
  commitRevision,
  exportProjectBundle,
  downloadText,
  importJson,
  listProjects,
  listRevisions,
  getOutlines,
  deleteProject,
  deleteHeadRevision,
  newProjectId,
  serializeBundle,
  buildGraph,
  commonAncestor,
  type ProjectMeta,
  type RevisionGraph,
  type ImportOutcome
} from './store'
import {
  interferenceAtFrame,
  diffRevisions,
  expectedOutlines,
  newTabCreatorId,
  type InterferenceSnapshot,
  type Revision,
  type RevisionDiff,
  type RevisionParams
} from './revision-model'
import { RevisionChannel, scanIntegrity, type IntegrityIssue } from './revision-db-extras'

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
      const s = (phi1.value - gearAnglesAt(mesh.value, g1.value, g2.value, 0).phi1) * g1.value.baseR
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

watch(
  () => [gearParams.z1, gearParams.z2, gearParams.m, gearParams.alphaDeg, gearParams.faceWidth, gearParams.useStandardCenter, gearParams.centerDistance],
  () => {
    rebuild()
    if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
    phi1.value = 0
    contactS.value = 0
    interferenceArea.value = null
    interferenceRegions.value = []
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

// =====================================================================
// 修订与合并工作流（不可变历史 + 分叉 + 冲突检测）
// =====================================================================

const projects = ref<ProjectMeta[]>([])
const allRevisions = ref<Revision[]>([])
const activeProjectId = ref<string | null>(null)
/** 当前工作所基于的父修订 digest；新实验（无根）为 null */
const parentDigest = ref<string | null>(null)
const projectName = ref('未命名实验')
const revisionNote = ref('')
const creatorId = newTabCreatorId()

const statusMessages = ref<string[]>([])
function pushStatus(m: string) {
  statusMessages.value.unshift(`[${new Date().toLocaleTimeString()}] ${m}`)
  statusMessages.value = statusMessages.value.slice(0, 8)
}

const graph = computed<RevisionGraph | null>(() =>
  activeProjectId.value ? buildGraph(allRevisions.value, activeProjectId.value) : null
)

/** 全库 digest→修订（同 revId 双胞胎可能位于别的实验线，展示冲突要用） */
const revByDigest = computed(() => {
  const m = new Map<string, Revision>()
  for (const r of allRevisions.value) m.set(r.digest, r)
  return m
})

/** 当前项目的修订，按链深度/时间排序，含分支标注 */
const projectRevisions = computed(() => {
  if (!graph.value) return []
  return graph.value.order.map((d) => {
    const n = graph.value!.nodes.get(d)!
    return {
      digest: d,
      node: n,
      rev: n.rev,
      depth: n.depth,
      isHead: n.isHead,
      isRoot: n.isRoot,
      // buildGraph 的 twins 已按全库 revId 统计（跨项目双胞胎也能显示）
      twins: n.twins.map((t) => revByDigest.value.get(t)).filter(Boolean) as Revision[],
      siblings: n.siblingBranches.map((t) => graph.value!.nodes.get(t)?.rev).filter(Boolean) as Revision[],
      active: d === parentDigest.value
    }
  })
})

const activeProject = computed(() => projects.value.find((p) => p.id === activeProjectId.value) ?? null)

async function refreshStore() {
  projects.value = await listProjects()
  allRevisions.value = await listRevisions()
  if (activeProjectId.value && !projects.value.some((p) => p.id === activeProjectId.value)) {
    activeProjectId.value = null
    parentDigest.value = null
  }
}

function currentParams(): RevisionParams {
  return {
    gear1: {
      z: Math.round(gearParams.z1),
      module: gearParams.m,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    gear2: {
      z: Math.round(gearParams.z2),
      module: gearParams.m,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    centerDistance: gearParams.useStandardCenter ? null : gearParams.centerDistance,
    unit: unit.value
  }
}

const saveBusy = ref(false)

/**
 * 保存为新的不可变修订。
 *  - includeOutlines=true：先在当前帧做 Clipper 干涉，把面积记入检查摘要，并随存轮廓；
 *  - includeOutlines=false：仅参数修订（轮廓仍可由参数确定性重建）。
 * 父修订相同时若另一个标签页/导入已写入不同后继，IndexedDB 事务保证双方都保留。
 */
async function saveRevisionNow(includeOutlines: boolean) {
  if (errors.g1.length || errors.g2.length) {
    alert('参数不合法，无法保存修订')
    return
  }
  saveBusy.value = true
  try {
    let interference: InterferenceSnapshot | null = null
    if (includeOutlines) {
      interference = await interferenceAtFrame(currentParams(), phi1.value)
      // 同步画面高亮
      interferenceArea.value = interference.areaMm2
    }
    let pid = activeProjectId.value
    if (!pid) {
      pid = newProjectId()
      activeProjectId.value = pid
    }
    const result = await commitRevision({
      projectId: pid,
      projectName: projectName.value,
      parentDigest: parentDigest.value,
      params: currentParams(),
      note: revisionNote.value,
      includeOutlines,
      interference,
      creator: creatorId
    })
    parentDigest.value = result.revision.digest
    revisionNote.value = ''
    await refreshStore()
    channel?.post({ type: 'committed', projectId: pid, at: Date.now() })
    if (result.outcome === 'exists') {
      pushStatus(`内容与已有修订 ${result.revision.revId} 完全相同，未产生重复修订（幂等）`)
    } else if (result.twins.length > 0) {
      pushStatus(`⚠ 修订 ID ${result.revision.revId} 已被不同内容占用：双方并列保留（冲突），未覆盖`)
    } else if (result.branchHeads.length > 1) {
      pushStatus(`已保存为并列分支（本实验现有 ${result.branchHeads.length} 个 head），可在下方比较`)
    } else {
      pushStatus(`已保存修订 ${result.revision.revId}（${includeOutlines ? '含轮廓+当前帧干涉' : '仅参数'}）`)
    }
  } catch (e) {
    alert('保存失败（修订与轮廓在同一事务，未留下半成品）：' + (e as Error).message)
  } finally {
    saveBusy.value = false
  }
}

/** 把某历史修订的参数恢复到工作台；下一次保存即成为它的后继 */
function checkoutRevision(rev: Revision) {
  applyParams(rev.params)
  activeProjectId.value = rev.projectId
  projectName.value = projects.value.find((p) => p.id === rev.projectId)?.name ?? '实验'
  parentDigest.value = rev.digest
  pushStatus(`已恢复修订 ${rev.revId} 的几何；再次保存将从该版本继续（原几何保持不变）`)
}

/** 从任一历史版分叉为一条新的实验线（新项目，根修订记录 fork 来源） */
const forkBusy = ref(false)
async function forkFromRevision(rev: Revision) {
  if (forkBusy.value) return
  forkBusy.value = true
  try {
    applyParams(rev.params)
    const newPid = newProjectId()
    const name = `${projects.value.find((p) => p.id === rev.projectId)?.name ?? '实验'} · 分叉自 ${rev.revId.slice(0, 10)}`
    projectName.value = name
    activeProjectId.value = newPid
    // 分叉的新实验线第一个修订：parentDigest=null（另起 DAG），项目元数据记录来源
    const result = await commitRevision({
      projectId: newPid,
      projectName: name,
      parentDigest: null,
      params: rev.params,
      note: `分叉自 ${rev.revId}（${rev.note || '无备注'}）`,
      includeOutlines: true,
      interference: rev.checks.interference,
      creator: creatorId,
      forkedFrom: { projectId: rev.projectId, digest: rev.digest }
    })
    parentDigest.value = result.revision.digest
    await refreshStore()
    channel?.post({ type: 'committed', projectId: newPid, at: Date.now() })
    pushStatus(`已从修订 ${rev.revId} 分叉出新实验线（原实验线完整保留）`)
  } finally {
    forkBusy.value = false
  }
}

function applyParams(p: RevisionParams) {
  gearParams.z1 = p.gear1.z
  gearParams.z2 = p.gear2.z
  gearParams.m = p.gear1.module
  gearParams.alphaDeg = p.gear1.alphaDeg
  gearParams.faceWidth = p.gear1.faceWidth
  if (p.centerDistance == null) {
    gearParams.useStandardCenter = true
  } else {
    gearParams.useStandardCenter = false
    gearParams.centerDistance = p.centerDistance
  }
  unit.value = p.unit ?? 'mm'
  rebuild()
  if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
  phi1.value = 0
  contactS.value = 0
  interferenceArea.value = null
  interferenceRegions.value = []
}

function selectProject(p: ProjectMeta) {
  activeProjectId.value = p.id
  projectName.value = p.name
  const g = buildGraph(allRevisions.value, p.id)
  const head = g.heads[0]
  parentDigest.value = head ?? null
  if (head) {
    const rev = g.nodes.get(head)!.rev
    applyParams(rev.params)
    revisionNote.value = ''
  }
}

function newExperiment() {
  activeProjectId.value = null
  parentDigest.value = null
  projectName.value = '未命名实验'
  revisionNote.value = ''
  pushStatus('已开始新实验线：下次保存将成为新项目的根修订')
}

async function removeProject(p: ProjectMeta) {
  if (!confirm(`删除整个实验线「${p.name}」及其全部修订？此操作不可恢复。`)) return
  await deleteProject(p.id)
  if (activeProjectId.value === p.id) {
    activeProjectId.value = null
    parentDigest.value = null
  }
  await refreshStore()
  channel?.post({ type: 'deleted', projectId: p.id, at: Date.now() })
  pushStatus(`已删除实验线 ${p.name}`)
}

async function removeHead(rev: Revision) {
  try {
    await deleteHeadRevision(rev.digest)
    if (parentDigest.value === rev.digest) parentDigest.value = null
    await refreshStore()
    pushStatus(`已删除 head 修订 ${rev.revId}`)
  } catch (e) {
    alert((e as Error).message)
  }
}

// ------- 导入 / 导出 -------
async function importFile(ev: Event) {
  const input = ev.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const text = await file.text()
  try {
    const result = await importJson(text)
    await refreshStore()
    channel?.post({ type: 'imported', at: Date.now() })
    for (const o of result.outcomes as ImportOutcome[]) {
      pushStatus(describeOutcome(o))
      if ((o.kind === 'imported' || o.kind === 'conflict' || o.kind === 'v1-migrated') && !activeProjectId.value) {
        activeProjectId.value = o.revision.projectId
        parentDigest.value = o.revision.digest
      }
    }
    if (!activeProjectId.value && result.outcomes[0]) {
      const o0 = result.outcomes[0]
      if ('revision' in o0) {
        activeProjectId.value = o0.revision.projectId
        parentDigest.value = o0.revision.digest
      }
    }
  } catch (e) {
    alert('导入失败（未写入任何修订）：' + (e as Error).message)
  }
  input.value = ''
}

function describeOutcome(o: ImportOutcome): string {
  switch (o.kind) {
    case 'dedup':
      return `重复导入：修订 ${o.revision.revId} 内容一致，已跳过，不产生副本`
    case 'imported':
      return o.message
    case 'conflict':
      return `⚠ ${o.message}`
    case 'v1-migrated':
      return `旧版案例自动迁移：${o.message}`
    case 'quarantined':
      return `✋ ${o.message}`
  }
}

async function exportBundle(withOutlines: boolean) {
  if (!activeProject.value) {
    alert('请先选择一个实验线')
    return
  }
  try {
    const bundle = await exportProjectBundle(activeProject.value.id, activeProject.value.name, {
      includeOutlines: withOutlines
    })
    const safe = activeProject.value.name.replace(/[^\w一-龥-]+/g, '_')
    downloadText(`${safe}.r${bundle.revisions.length}.json`, serializeBundle(bundle))
    pushStatus(`已导出 ${bundle.revisions.length} 个修订（${withOutlines ? '含轮廓' : '仅参数，轮廓可重建'}）`)
  } catch (e) {
    alert('导出中止：' + (e as Error).message)
  }
}

// ------- 两版比较 -------
const compareA = ref<string>('')
const compareB = ref<string>('')
const compareDiff = shallowRef<RevisionDiff | null>(null)
const compareLiveBusy = ref(false)

const comparableRevisions = computed(() =>
  [...allRevisions.value].sort((a, b) => a.createdAt - b.createdAt)
)

function runCompare() {
  const a = allRevisions.value.find((r) => r.digest === compareA.value)
  const b = allRevisions.value.find((r) => r.digest === compareB.value)
  compareDiff.value = a && b ? diffRevisions(a, b) : null
  if (a && b) {
    const ca = commonAncestor(buildGraph(allRevisions.value), a.digest, b.digest)
    pushStatus(
      ca
        ? `比较 ${a.revId.slice(0, 8)} ↔ ${b.revId.slice(0, 8)}；共同祖先 ${ca.slice(12, 20)}…`
        : `比较 ${a.revId.slice(0, 8)} ↔ ${b.revId.slice(0, 8)}；两条无共同祖先的实验线`
    )
  }
}

/** 在【同一个当前帧】对两版各做一次 Clipper 求交（轮廓缺失时由参数重建） */
async function compareLiveFrame() {
  const a = allRevisions.value.find((r) => r.digest === compareA.value)
  const b = allRevisions.value.find((r) => r.digest === compareB.value)
  if (!a || !b) return
  compareLiveBusy.value = true
  try {
    const frame = phi1.value
    const [ra, rb] = await Promise.all([
      interferenceAtFrame(a.params, frame, a.hasOutlines ? await outlinesOrNull(a) : null),
      interferenceAtFrame(b.params, frame, b.hasOutlines ? await outlinesOrNull(b) : null)
    ])
    if (compareDiff.value) {
      compareDiff.value = {
        ...compareDiff.value,
        liveInterference: { phi1: frame, a: ra, b: rb, deltaArea: rb.areaMm2 - ra.areaMm2 }
      }
    }
  } finally {
    compareLiveBusy.value = false
  }
}

async function outlinesOrNull(rev: Revision) {
  const o = await getOutlines(rev.digest)
  return o ?? expectedOutlines(rev.params)
}

// ------- 完整性体检 -------
const integrityIssues = ref<IntegrityIssue[]>([])
const quarantinedCount = ref(0)
async function runIntegrityScan() {
  const r = await scanIntegrity()
  integrityIssues.value = r.issues
  quarantinedCount.value = r.quarantined
  if (!r.issues.length) pushStatus('完整性体检通过：所有修订 digest/轮廓指纹一致，无残缺修订')
  else pushStatus(`⚠ 发现 ${r.issues.length} 个损坏修订（只含元数据/哈希不符），已在列表中标红`)
}

// ------- 跨标签页 -------
let channel: RevisionChannel | null = null
onMounted(() => {
  channel = new RevisionChannel(() => {
    refreshStore()
    pushStatus('检测到其他标签页的修订变更，已刷新（并列分支/冲突不会被覆盖）')
  })
  refreshStore().then(async () => {
    // 自动选中最近更新的实验线及其 head
    if (projects.value.length) selectProject(projects.value[0])
    await runIntegrityScan()
  })
})
onBeforeUnmount(() => channel?.close())

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

function fmtTime(t: number) {
  return new Date(t).toLocaleString()
}

// 预设样本：标准齿数与极少齿数，便于核对
function preset(z1: number, z2: number, m = 2, alphaDeg = 20) {
  gearParams.z1 = z1
  gearParams.z2 = z2
  gearParams.m = m
  gearParams.alphaDeg = alphaDeg
  gearParams.useStandardCenter = true
}

// ------- 比较表展示辅助 -------
function fmtField(v: number, unit?: string) {
  if (unit === '°') return `${v.toFixed(3)}°`
  if (unit === '') return Number.isInteger(v) ? String(v) : v.toFixed(4)
  return `${v.toFixed(3)} mm`
}
function fmtSigned(d: number, unit?: string) {
  const sign = d > 0 ? '+' : ''
  if (unit === '°') return `${sign}${d.toFixed(3)}°`
  if (unit === '') return `${sign}${Number.isInteger(d) ? d : d.toFixed(4)}`
  return `${sign}${d.toFixed(3)} mm`
}
function interfText(s: { areaMm2: number; intersects: boolean } | null) {
  if (!s) return '未记录'
  return s.intersects ? `${s.areaMm2.toExponential(2)} mm² ❗` : `${s.areaMm2.toExponential(2)} mm² ✅`
}
function interfClass(s: { intersects: boolean } | null) {
  return s && s.intersects ? 'bad' : 'good'
}
</script>

<template>
  <div class="app">
    <header>
      <h1>直齿圆柱齿轮参数化实验室 · 修订与合并工作流</h1>
      <div class="sub">外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）｜每次保存为不可变修订，支持分叉、比较与冲突检测</div>
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
          <h2>设计修订（不可变历史）</h2>
          <input v-model="projectName" placeholder="实验线名称" />
          <textarea v-model="revisionNote" placeholder="本修订备注（可选，会进入修订指纹）" rows="2"></textarea>
          <div class="basis">
            基于父修订：
            <b v-if="parentDigest" :title="parentDigest">{{ parentDigest.slice(0, 16) }}…</b>
            <b v-else>（新实验线根修订）</b>
          </div>
          <div class="row">
            <button @click="saveRevisionNow(true)" :disabled="saveBusy">保存修订（含轮廓+当前帧干涉）</button>
          </div>
          <div class="row">
            <button @click="saveRevisionNow(false)" :disabled="saveBusy">仅参数修订</button>
            <button @click="newExperiment">新实验线</button>
          </div>
          <div class="row">
            <button @click="exportBundle(true)">导出 JSON+轮廓</button>
            <button @click="exportBundle(false)">导出参数</button>
          </div>
          <label class="wide filebtn">导入修订 JSON（v1/v2，自动检测冲突）
            <input type="file" accept="application/json,.json" @change="importFile" hidden />
          </label>
        </section>

        <section>
          <h2>实验线</h2>
          <ul class="projlist">
            <li v-for="p in projects" :key="p.id" :class="{ active: p.id === activeProjectId }">
              <div class="ci" @click="selectProject(p)">
                <b>{{ p.name }}</b>
                <span>{{ fmtTime(p.updatedAt) }}<template v-if="p.forkedFromProjectId"> · 🌱 分叉</template></span>
              </div>
              <button class="del" @click.stop="removeProject(p)">删</button>
            </li>
            <li v-if="!projects.length" class="empty">尚无实验线（保存第一条修订即创建）</li>
          </ul>
        </section>

        <section v-if="projectRevisions.length">
          <h2>修订历史（{{ activeProject?.name }}）</h2>
          <ul class="revlist">
            <li v-for="r in projectRevisions" :key="r.digest"
                class="rev"
                :class="{
                  head: r.isHead,
                  root: r.isRoot,
                  active: r.active,
                  branch: r.siblings.length > 0,
                  conflict: r.twins.length > 0
                }"
                :style="{ marginLeft: Math.min(r.depth, 6) * 12 + 'px' }">
              <div class="rev-main">
                <div>
                  <b>{{ r.rev.note || r.rev.revId.slice(0, 12) }}</b>
                  <div class="rev-meta">
                    {{ r.rev.params.gear1.z }}/{{ r.rev.params.gear2.z }} · m={{ r.rev.params.gear1.module }} · α={{ r.rev.params.gear1.alphaDeg }}°
                    · a={{ r.rev.checks.a.toFixed(2) }}
                    <template v-if="r.rev.hasOutlines"> · 轮廓✓</template>
                    <template v-if="r.rev.checks.interference">
                      · 帧干涉 {{ r.rev.checks.interference.areaMm2.toExponential(2) }}
                    </template>
                  </div>
                  <div class="rev-tags">
                    <span v-if="r.isRoot" class="tag root-tag">根</span>
                    <span v-if="r.isHead" class="tag head-tag">head</span>
                    <span v-if="r.siblings.length" class="tag branch-tag">⑂ 并列分支 ×{{ r.siblings.length + 1 }}</span>
                    <span v-for="t in r.twins" :key="t.digest" class="tag conflict-tag">⚠ 同ID不同内容</span>
                  </div>
                </div>
                <div class="rev-actions">
                  <button @click="checkoutRevision(r.rev)" title="恢复该版几何，下一次保存成为其后继">恢复</button>
                  <button @click="forkFromRevision(r.rev)" :disabled="forkBusy" title="从此版分叉为新实验线">分叉</button>
                  <button class="del" @click="removeHead(r.rev)" :disabled="!r.isHead" title="仅可删除 head">删</button>
                </div>
              </div>
              <div v-if="r.twins.length" class="conflict-box">
                冲突：revId「{{ r.rev.revId }}」存在 {{ r.twins.length + 1 }} 份不同内容，已全部保留。
                <div v-for="t in r.twins" :key="t.digest">
                  · {{ t.note || t.digest.slice(0, 16) }}（{{ t.creator }}，{{ fmtTime(t.createdAt) }}）
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2>比较两版</h2>
          <div class="two">
            <label>A
              <select v-model="compareA" @change="compareDiff = null">
                <option value="" disabled>选择修订…</option>
                <option v-for="r in comparableRevisions" :key="r.digest" :value="r.digest">
                  {{ r.revId.slice(0, 10) }} · {{ r.params.gear1.z }}/{{ r.params.gear2.z }} · a={{ r.checks.a.toFixed(1) }}
                </option>
              </select>
            </label>
            <label>B
              <select v-model="compareB" @change="compareDiff = null">
                <option value="" disabled>选择修订…</option>
                <option v-for="r in comparableRevisions" :key="r.digest" :value="r.digest">
                  {{ r.revId.slice(0, 10) }} · {{ r.params.gear1.z }}/{{ r.params.gear2.z }} · a={{ r.checks.a.toFixed(1) }}
                </option>
              </select>
            </label>
          </div>
          <button class="wide" @click="runCompare" :disabled="!compareA || !compareB || compareA === compareB">比较尺寸 / 中心距 / 干涉</button>

          <div v-if="compareDiff" class="diff-box">
            <div v-if="compareDiff.same" class="good">两版内容完全相同（digest 一致）</div>
            <table class="diff-table">
              <thead><tr><th></th><th>A</th><th>B</th><th>Δ(B−A)</th></tr></thead>
              <tbody>
                <tr v-for="(f, i) in compareDiff.fields" :key="i" :class="{ changed: Math.abs(f.delta) > 1e-9 }">
                  <td>{{ f.label }}</td>
                  <td>{{ fmtField(f.a, f.unit) }}</td>
                  <td>{{ fmtField(f.b, f.unit) }}</td>
                  <td :class="f.worse ? 'bad' : ''">{{ fmtSigned(f.delta, f.unit) }}</td>
                </tr>
              </tbody>
            </table>
            <div class="iface-row">
              <div>保存时帧干涉 A：<b :class="interfClass(compareDiff.interferenceA)">{{ interfText(compareDiff.interferenceA) }}</b></div>
              <div>保存时帧干涉 B：<b :class="interfClass(compareDiff.interferenceB)">{{ interfText(compareDiff.interferenceB) }}</b></div>
            </div>
            <button class="wide" @click="compareLiveFrame" :disabled="compareLiveBusy">
              {{ compareLiveBusy ? '求交中…' : `在当前帧（φ₁=${phi1.toFixed(3)}）重放两版干涉` }}
            </button>
            <div v-if="compareDiff.liveInterference" class="iface-row">
              <div>当前帧 A：<b :class="interfClass(compareDiff.liveInterference.a)">{{ interfText(compareDiff.liveInterference.a) }}</b></div>
              <div>当前帧 B：<b :class="interfClass(compareDiff.liveInterference.b)">{{ interfText(compareDiff.liveInterference.b) }}</b></div>
              <div>面积差 Δ：<b>{{ compareDiff.liveInterference.deltaArea.toExponential(2) }} mm²</b></div>
            </div>
          </div>
        </section>

        <section>
          <h2>完整性 / 状态</h2>
          <button class="wide" @click="runIntegrityScan">修订库完整性体检</button>
          <div v-if="quarantinedCount" class="conflict-box">已隔离可疑修订：{{ quarantinedCount }} 条（哈希/digest 不符的导入不会冒充）</div>
          <div v-for="(iss, i) in integrityIssues" :key="i" class="conflict-box">
            ⚠ 损坏修订 {{ iss.revId }}：{{ iss.problems.join(', ') }}
          </div>
          <ul class="status">
            <li v-for="(m, i) in statusMessages" :key="i">{{ m }}</li>
          </ul>
        </section>
      </aside>
    </main>
  </div>
</template>
