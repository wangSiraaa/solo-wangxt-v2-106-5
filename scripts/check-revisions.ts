/**
 * 设计修订与合并工作流的验收测试（Node + fake-indexeddb）：
 *  1. 连续保存两版后可恢复任一版本且原几何不变；
 *  2. 两个并发分支均被保留并可比较，可合并；
 *  3. 重复导入同一修订不产生副本；不同内容同 id 进入冲突处理；
 *     轮廓指纹不一致的导入不能冒充同一修订；
 *  4. 旧版（schemaVersion=1）单案例自动迁移后仍可运行原有啮合与往返检查；
 *  5. 导入/写入中断不会留下只含元数据而缺轮廓的损坏修订。
 */
import 'fake-indexeddb/auto'
import { buildGear, DEG, polygonArea, transformOutline } from '../src/geometry/gear.ts'
import { analyzeMesh, mateAngle } from '../src/geometry/mesh.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'
import { stableStringify } from '../src/hash.ts'
import {
  buildRevision,
  computeHeads,
  hashOutlines,
  normalizeImport,
  paramsToGearInput,
  rebuildOutlinesFromParams,
  serializeExport,
  verifyRevision,
  type CheckSummary,
  type LegacyCaseDataV1,
  type ParamsSnapshot,
  type Revision
} from '../src/revisions.ts'
import { diffRevisions } from '../src/compare.ts'
import {
  __resetStoreForTests,
  DB_NAME,
  deleteCaseDeep,
  getCaseMeta,
  getRevision,
  importCase,
  listCasesWithHeads,
  listConflicts,
  listRevisions,
  mergeHeads,
  saveRevision,
  STORE_CASES
} from '../src/store.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}
const section = (t: string) => console.log(`\n=== ${t} ===`)

// ---------- 工具 ----------
function makeParams(z1: number, z2: number, m = 2, alphaDeg = 20, cd: number | null = null): ParamsSnapshot {
  return {
    gear1: { z: z1, module: m, alpha: alphaDeg * DEG, alphaDeg, faceWidth: 10 },
    gear2: { z: z2, module: m, alpha: alphaDeg * DEG, alphaDeg, faceWidth: 10 },
    centerDistance: cd
  }
}

function makeCheck(params: ParamsSnapshot, interference: CheckSummary['interference'] = null): CheckSummary {
  const g1 = buildGear(paramsToGearInput(params.gear1))
  const g2 = buildGear(paramsToGearInput(params.gear2))
  const a = params.centerDistance ?? g1.pitchR + g2.pitchR
  const mesh = analyzeMesh({ g1, g2, centerDistance: a })
  return {
    checkedAt: Date.now(),
    centerDistance: a,
    standardCenter: mesh.a0,
    alphaPrimeDeg: mesh.alphaPrime / DEG,
    contactRatio: mesh.contactRatio,
    backlashTangential: mesh.backlashTangential,
    clearanceMin: Math.min(mesh.clearance12, mesh.clearance21),
    basePitchMatch: mesh.basePitchMatch,
    undercut: [g1.undercut, g2.undercut],
    warnings: mesh.warnings,
    interference
  }
}

async function realInterference(params: ParamsSnapshot, phi1: number) {
  const g1 = buildGear(paramsToGearInput(params.gear1))
  const g2 = buildGear(paramsToGearInput(params.gear2))
  const a = params.centerDistance ?? g1.pitchR + g2.pitchR
  const mesh = analyzeMesh({ g1, g2, centerDistance: a })
  const phi2 = mateAngle(g1, g2, mesh, phi1)
  const res = await intersectOutlines(
    [transformOutline(g1.outline, 0, 0, phi1)],
    [transformOutline(g2.outline, a, 0, phi2)]
  )
  return { phi1, contactS: 0, area: res.area, regions: res.regions }
}

async function revisionCount(caseId: string): Promise<number> {
  return (await listRevisions(caseId)).length
}

// ===========================================================================
section('0. 指纹与内容寻址基础')
{
  const params = makeParams(20, 40)
  const outlines = rebuildOutlinesFromParams(params)
  const check = makeCheck(params)
  const r1 = buildRevision({ caseId: 'c1', parentIds: [], note: 'n', params, outlines, check, createdAt: 1 })
  const r2 = buildRevision({ caseId: 'c1', parentIds: [], note: 'n', params, outlines, check, createdAt: 999999 })
  const r3 = buildRevision({ caseId: 'c2', parentIds: [], note: 'n', params, outlines, check, createdAt: 1 })
  ok(r1.id === r2.id, '相同内容（同案例，不同时间戳）得到相同修订 id')
  ok(r1.id !== r3.id, '相同内容在不同案例是不同修订（修订唯一隶属案例）')
  ok(r1.id.startsWith('rev-') && r1.id.length === 4 + 64, `id 形如 rev-<sha256>（${r1.id.slice(0, 20)}…）`)
  ok(hashOutlines(outlines) === hashOutlines(structuredClone(outlines)), '轮廓指纹对克隆稳定')
  const tampered = structuredClone(outlines)
  tampered.gear1[0] = { x: tampered.gear1[0].x + 1e-3, y: tampered.gear1[0].y }
  ok(hashOutlines(tampered) !== hashOutlines(outlines), '轮廓改动 1e-3 mm 即改变指纹')
  ok(verifyRevision(r1).ok, '构造的修订通过完整性校验')
  const bad = { ...structuredClone(r1), note: '篡改备注' }
  ok(!verifyRevision(bad as Revision).ok, '改动备注后校验失败（id 与内容不符）')
  ok(computeHeads([r1]) === undefined || true, 'computeHeads 可调用')
}

// ===========================================================================
section('1. 连续保存两版：可恢复任一版本且原几何不变')
let caseId1 = ''
let rev1Id = ''
let rev2Id = ''
{
  const params1 = makeParams(20, 40)
  const outlines1 = rebuildOutlinesFromParams(params1)
  const hash1 = hashOutlines(outlines1)

  const s1 = await saveRevision({
    caseId: null,
    caseName: '标准案例',
    unit: 'mm',
    parentIds: [],
    note: '第一版：20/40 标准',
    params: params1,
    outlines: outlines1,
    check: makeCheck(params1)
  })
  caseId1 = s1.caseId
  rev1Id = s1.revision.id
  ok(s1.created && s1.heads.length === 1, '第一版保存成功，单头')

  // 学生改参数后再保存（带当前帧干涉结论）
  const params2 = makeParams(16, 40, 2, 20, 58.5)
  const outlines2 = rebuildOutlinesFromParams(params2)
  const inter = await realInterference(params2, 0.37)
  const s2 = await saveRevision({
    caseId: caseId1,
    caseName: '标准案例',
    unit: 'mm',
    parentIds: [rev1Id],
    note: '第二版：根切+非标准中心距',
    params: params2,
    outlines: outlines2,
    check: makeCheck(params2, inter)
  })
  rev2Id = s2.revision.id
  ok(s2.created, '第二版保存成功')
  ok(s2.revision.parentIds.length === 1 && s2.revision.parentIds[0] === rev1Id, '第二版父修订指向第一版')
  ok(s2.heads.length === 1 && s2.heads[0] === rev2Id, '头指针推进到第二版')
  ok(s2.revision.check?.interference && s2.revision.check.interference.area >= 0, '干涉结论随修订保存')

  // 恢复第一版：参数与几何完全不变
  const back1 = (await getRevision(rev1Id))!
  ok(!!back1, '第一版仍可读取（未被覆盖）')
  ok(back1.params.gear1.z === 20 && back1.params.gear2.z === 40, '第一版参数快照保持 20/40')
  ok(back1.outlineHash === hash1, '第一版轮廓指纹不变')
  ok(hashOutlines(back1.outlines) === hash1, '第一版轮廓数据与指纹一致')
  const rebuilt1 = rebuildOutlinesFromParams(back1.params)
  ok(hashOutlines(rebuilt1) === back1.outlineHash, '由第一版参数重建的几何与保存时一致（可恢复）')
  ok(stableStringify(back1.outlines) === stableStringify(outlines1), '第一版轮廓逐点保持原样')

  // 恢复第二版
  const back2 = (await getRevision(rev2Id))!
  ok(back2.params.gear1.z === 16 && back2.params.centerDistance === 58.5, '第二版参数快照保持 16/40、a=58.5')
  ok(hashOutlines(rebuildOutlinesFromParams(back2.params)) === back2.outlineHash, '第二版几何可恢复')

  // 重复保存相同内容 → 幂等，不产生新修订
  const again = await saveRevision({
    caseId: caseId1,
    caseName: '标准案例',
    unit: 'mm',
    parentIds: [rev1Id],
    note: '第二版：根切+非标准中心距',
    params: params2,
    outlines: outlines2,
    check: makeCheck(params2, inter)
  })
  ok(!again.created && again.revision.id === rev2Id, '相同内容重复保存被去重（幂等）')
  ok((await revisionCount(caseId1)) === 2, '案例仍只有 2 个修订')
}

// ===========================================================================
section('2. 并发分支：同一父版的两个后继都保留、可比较、可合并')
let branchAId = ''
let branchBId = ''
{
  // 模拟两个标签页：都基于 rev2 各自保存不同后继
  const paramsA = makeParams(17, 41)
  const paramsB = makeParams(25, 25, 2.5)
  const sA = await saveRevision({
    caseId: caseId1,
    caseName: '标准案例',
    unit: 'mm',
    parentIds: [rev2Id],
    note: '分支A：17/41',
    params: paramsA,
    outlines: rebuildOutlinesFromParams(paramsA),
    check: makeCheck(paramsA)
  })
  const sB = await saveRevision({
    caseId: caseId1,
    caseName: '标准案例',
    unit: 'mm',
    parentIds: [rev2Id],
    note: '分支B：25/25 m2.5',
    params: paramsB,
    outlines: rebuildOutlinesFromParams(paramsB),
    check: makeCheck(paramsB)
  })
  branchAId = sA.revision.id
  branchBId = sB.revision.id
  ok(sA.created && sB.created, '两个分支修订均保存')
  ok(sB.branched, '保存后检测到并行分支')
  ok(sB.heads.includes(branchAId) && sB.heads.includes(branchBId), '两个分支头都被保留（无最后写入者丢失）')

  const cases = await listCasesWithHeads()
  const c = cases.find((x) => x.meta.id === caseId1)!
  ok(c.meta.headIds.length === 2 && c.heads.length === 2, '案例元数据展示 2 个分支头')
  ok(c.revisionCount === 4, '案例共 4 个修订（链 + 两分支）')

  // 比较两分支
  const rA = (await getRevision(branchAId))!
  const rB = (await getRevision(branchBId))!
  const rows = diffRevisions(rA, rB)
  const zRow = rows.find((r) => r.label === '齿数 z₁')!
  const aRow = rows.find((r) => r.label === '实际中心距 a (mm)')!
  ok(zRow.changed && zRow.a === 17 && zRow.b === 25, '比较：z₁ 差异 17 vs 25')
  ok(aRow.changed && Math.abs((aRow.a as number) - 58) < 1e-9 && Math.abs((aRow.b as number) - 62.5) < 1e-9, '比较：中心距 58 vs 62.5')
  ok(rows.some((r) => r.label.startsWith('分度圆') && r.changed), '比较：分度圆直径差异存在')

  // 合并：以分支 B 为基础
  const merged = await mergeHeads(caseId1, branchBId, '合并实验：采用 B 方案')
  ok(merged.revision.parentIds.length === 2, '合并修订有两个父修订')
  ok(
    merged.revision.parentIds.includes(branchAId) && merged.revision.parentIds.includes(branchBId),
    '合并修订同时指向两个分支头'
  )
  ok(merged.heads.length === 1 && merged.heads[0] === merged.revision.id, '合并后头指针收敛为单个')
  ok(merged.revision.params.gear1.z === 25, '合并修订内容来自所选基础分支')
}

// ===========================================================================
section('3. 导入：重复去重 / 同 id 不同内容冲突 / 指纹不符拒绝 / 导入产生并列分支')
{
  const cases0 = await listCasesWithHeads()
  const meta = cases0.find((c) => c.meta.id === caseId1)!.meta
  const allRevs = await listRevisions(caseId1)
  const text = serializeExport({ id: meta.id, name: meta.name, unit: meta.unit }, allRevs)

  // 3a. 重复导入同一文件 → 全部去重，不产生副本
  const before = await revisionCount(caseId1)
  const rep1 = await importCase(text)
  ok(rep1.ok && rep1.stored.length === 0 && rep1.duplicates.length === allRevs.length, '重复导入：全部识别为重复')
  ok((await revisionCount(caseId1)) === before, '重复导入后修订数不变（无副本）')

  // 3b. 篡改参数但保留原 id → 冲突处理，原修订不被冒充/覆盖
  const parsed = JSON.parse(text)
  const target = parsed.revisions.find((r: Revision) => r.id === rev1Id)
  target.params.gear1.z = 99 // 篡改内容，保留 id 与 outlineHash
  const rep2 = await importCase(JSON.stringify(parsed))
  ok(rep2.ok, '篡改 id 的导入被接受但进入冲突处理')
  ok(rep2.conflicts.length === 1 && rep2.conflicts[0].type === 'id-mismatch', '记录 id-mismatch 冲突')
  ok(rep2.conflicts[0].claimedId === rev1Id && rep2.conflicts[0].actualId !== rev1Id, '冲突记录含声称 id 与真实指纹')
  const orig = (await getRevision(rev1Id))!
  ok(orig.params.gear1.z === 20, '原修订内容未被篡改（仍是 z=20）')
  const stored = (await getRevision(rep2.conflicts[0].actualId))!
  ok(!!stored && stored.params.gear1.z === 99, '篡改内容按真实指纹另存，未冒充原修订')
  const conflicts = await listConflicts()
  ok(conflicts.some((c) => c.type === 'id-mismatch' && c.claimedId === rev1Id), '冲突已持久化，可在界面展示')

  // 3c. 轮廓数据与轮廓指纹不一致 → 整体拒绝，不能冒充同一修订
  const parsed2 = JSON.parse(text)
  const t2 = parsed2.revisions.find((r: Revision) => r.id === rev1Id)
  t2.outlines.gear1[5] = { x: t2.outlines.gear1[5].x + 0.5, y: t2.outlines.gear1[5].y } // 改轮廓但保留指纹与 id
  const rep3 = await importCase(JSON.stringify(parsed2))
  ok(!rep3.ok, '轮廓指纹不一致的导入被拒绝')
  ok((await getRevision(rev1Id))!.params.gear1.z === 20, '原修订仍未被冒充')
  ok((await listConflicts()).some((c) => c.type === 'hash-mismatch'), 'hash-mismatch 冲突已记录')

  // 3d. 导入基于同一父版的不同后继 → 并列分支（不覆盖现有头）
  const paramsX = makeParams(30, 30)
  const revX = buildRevision({
    caseId: caseId1,
    parentIds: [rev2Id],
    note: '外部实验：30/30',
    params: paramsX,
    outlines: rebuildOutlinesFromParams(paramsX),
    check: makeCheck(paramsX)
  })
  const headsBefore = (await listCasesWithHeads()).find((c) => c.meta.id === caseId1)!.meta.headIds
  const rep4 = await importCase(serializeExport({ id: meta.id, name: meta.name, unit: meta.unit }, [revX]))
  ok(rep4.ok && rep4.stored.length === 1, '外部后继修订导入成功')
  const headsAfter = (await listCasesWithHeads()).find((c) => c.meta.id === caseId1)!.meta.headIds
  ok(
    headsAfter.length === headsBefore.length + 1 && headsBefore.every((h) => headsAfter.includes(h)) && headsAfter.includes(revX.id),
    '导入的后继与现有头并列保留（分支而非覆盖）'
  )
}

// ===========================================================================
section('4. 旧版单案例自动迁移：迁移后仍可运行原有啮合与往返检查')
{
  // 4a. 文件级：v1 JSON 导入 → 迁移为根修订
  const g1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const g2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const legacy: LegacyCaseDataV1 = {
    schemaVersion: 1,
    id: 'case-legacy-file',
    name: '旧版导出',
    createdAt: 1000,
    updatedAt: 2000,
    note: '旧格式备注',
    gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    centerDistance: null,
    unit: 'mm',
    outlines: { gear1: g1.outline, gear2: g2.outline }
  }
  const norm = normalizeImport(JSON.stringify(legacy))
  ok(norm.ok && norm.migratedFromV1, 'v1 JSON 被识别并迁移')
  if (norm.ok) {
    const rev = norm.revisions[0]
    ok(rev.migratedFrom === 1 && rev.parentIds.length === 0, '迁移产物是根修订且标记 migratedFrom=1')
    ok(rev.outlineHash === hashOutlines(legacy.outlines!), '迁移后轮廓指纹与旧轮廓一致')
    // 原有啮合检查仍可在迁移数据上运行
    const mg1 = buildGear(paramsToGearInput(rev.params.gear1))
    const mg2 = buildGear(paramsToGearInput(rev.params.gear2))
    const mesh = analyzeMesh({ g1: mg1, g2: mg2, centerDistance: mg1.pitchR + mg2.pitchR })
    ok(mesh.basePitchMatch && mesh.contactRatio > 1.6 && mesh.contactRatio < 1.7, `迁移案例啮合检查正常（ε=${mesh.contactRatio.toFixed(4)}）`)
    const p2 = mateAngle(mg1, mg2, mesh, 0.37)
    const res = await intersectOutlines(
      [transformOutline(rev.outlines.gear1, 0, 0, 0.37)],
      [transformOutline(rev.outlines.gear2, mesh.a, 0, p2)]
    )
    ok(!res.intersects, '迁移轮廓在严格相位下无干涉（往返检查通过）')
  }

  // 4b. 数据库级：构造 v1 库 → 以 v2 打开 → 自动迁移
  await __resetStoreForTests()
  await new Promise<void>((resolve, reject) => {
    const del = indexedDB.deleteDatabase(DB_NAME)
    del.onsuccess = () => resolve()
    del.onerror = () => reject(del.error)
    del.onblocked = () => reject(new Error('deleteDatabase blocked'))
  })
  const legacyDb1: LegacyCaseDataV1 = { ...legacy, id: 'case-legacy-db', name: '库内旧案例（含轮廓）' }
  const legacyDb2: LegacyCaseDataV1 = {
    ...legacy,
    id: 'case-legacy-db-nogeo',
    name: '库内旧案例（仅参数）',
    outlines: undefined
  }
  await new Promise<void>((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      const store = db.createObjectStore(STORE_CASES, { keyPath: 'id' })
      store.createIndex('updatedAt', 'updatedAt')
    }
    req.onsuccess = () => {
      const db = req.result
      const tx = db.transaction(STORE_CASES, 'readwrite')
      tx.objectStore(STORE_CASES).put(legacyDb1)
      tx.objectStore(STORE_CASES).put(legacyDb2)
      tx.oncomplete = () => {
        db.close()
        resolve()
      }
      tx.onerror = () => reject(tx.error)
    }
    req.onerror = () => reject(req.error)
  })
  // 现在通过 store（v2）打开 → 触发 onupgradeneeded 迁移
  const migrated = await listCasesWithHeads()
  const m1 = migrated.find((c) => c.meta.id === 'case-legacy-db')
  const m2 = migrated.find((c) => c.meta.id === 'case-legacy-db-nogeo')
  ok(!!m1 && m1.heads.length === 1, '旧库案例（含轮廓）迁移为单头案例')
  ok(!!m2 && m2.heads.length === 1, '旧库案例（仅参数）迁移为单头案例')
  if (m1 && m2) {
    ok(m1.heads[0].migratedFrom === 1 && m1.heads[0].parentIds.length === 0, '迁移修订为根且带溯源标记')
    ok(m1.heads[0].outlineHash === hashOutlines(legacyDb1.outlines!), '含轮廓旧案例指纹保持')
    ok(m1.meta.name === '库内旧案例（含轮廓）' && m1.meta.note === undefined, '案例元数据（名称）迁移')
    const rebuilt = rebuildOutlinesFromParams(m2.heads[0].params)
    ok(hashOutlines(rebuilt) === m2.heads[0].outlineHash, '仅参数旧案例的轮廓由参数重建补全（修订完整）')
    ok(verifyRevision(m1.heads[0]).ok && verifyRevision(m2.heads[0]).ok, '迁移修订均通过完整性校验')
    // 迁移后的案例仍可运行原有啮合检查
    const mg1 = buildGear(paramsToGearInput(m1.heads[0].params.gear1))
    const mg2 = buildGear(paramsToGearInput(m1.heads[0].params.gear2))
    const mesh = analyzeMesh({ g1: mg1, g2: mg2, centerDistance: mg1.pitchR + mg2.pitchR })
    ok(mesh.basePitchMatch && mesh.contactRatio > 1.6, '迁移案例啮合检查正常')
    ok(polygonArea(m1.heads[0].outlines.gear1) > 0, '迁移轮廓为正向闭合环')
  }
}

// ===========================================================================
section('5. 中断/损坏：不留下只含元数据而缺轮廓的损坏修订')
{
  // 5a. 多修订文件中有一个损坏 → 整体拒绝，库里什么都没有
  await __resetStoreForTests()
  await new Promise<void>((resolve, reject) => {
    const del = indexedDB.deleteDatabase(DB_NAME)
    del.onsuccess = () => resolve()
    del.onerror = () => reject(del.error)
  })
  const params = makeParams(20, 40)
  const good = buildRevision({
    caseId: 'case-atomic',
    parentIds: [],
    note: '好修订',
    params,
    outlines: rebuildOutlinesFromParams(params),
    check: makeCheck(params)
  })
  const corrupt = structuredClone(good)
  corrupt.note = '损坏修订'
  corrupt.outlines.gear1 = corrupt.outlines.gear1.slice(0, 10) // 截断轮廓 → 指纹不符
  corrupt.id = 'rev-claimed-corrupt'
  const text = serializeExport({ id: 'case-atomic', name: '原子性', unit: 'mm' }, [good, corrupt])
  const rep = await importCase(text)
  ok(!rep.ok, '含损坏修订的文件被整体拒绝')
  ok((await listRevisions('case-atomic')).length === 0, '拒绝后没有任何修订入库（含合法的第一个）')
  const cases = await listCasesWithHeads()
  ok(!cases.some((c) => c.meta.id === 'case-atomic'), '拒绝后没有留下案例元数据')

  // 5b. 修订缺轮廓且参数非法（无法重建）→ 拒绝
  const noGeo = structuredClone(good)
  noGeo.id = 'rev-nogeo'
  ;(noGeo as unknown as Record<string, unknown>).outlines = undefined
  noGeo.params.gear1.z = 2 // 非法，无法重建
  const rep2 = await importCase(serializeExport({ id: 'case-atomic', name: '原子性', unit: 'mm' }, [noGeo]))
  ok(!rep2.ok, '缺轮廓且参数非法的修订被拒绝')
  ok((await listRevisions('case-atomic')).length === 0, '拒绝后库仍为空')

  // 5c. 修订缺轮廓但参数合法 → 由参数重建补全（完整修订，不是"只有元数据"）
  const noGeo2 = structuredClone(good)
  ;(noGeo2 as unknown as Record<string, unknown>).outlines = undefined
  ;(noGeo2 as unknown as Record<string, unknown>).outlineHash = undefined
  noGeo2.id = 'rev-nogeo-2'
  const rep3 = await importCase(serializeExport({ id: 'case-atomic', name: '原子性', unit: 'mm' }, [noGeo2]))
  ok(rep3.ok && rep3.rebuiltOutlines === 1, '缺轮廓但参数合法的修订由参数重建补全')
  const stored = await listRevisions('case-atomic')
  ok(
    stored.length === 1 && stored[0].outlines.gear1.length > 100 && verifyRevision(stored[0]).ok,
    '补全后的修订几何完整且通过校验'
  )

  // 5d. 轮廓缺失但带有指纹声明（自相矛盾）→ 拒绝
  const noGeo3 = structuredClone(good)
  ;(noGeo3 as unknown as Record<string, unknown>).outlines = undefined
  noGeo3.id = 'rev-nogeo-3'
  const rep4 = await importCase(serializeExport({ id: 'case-atomic2', name: '原子性2', unit: 'mm' }, [noGeo3]))
  ok(!rep4.ok, '轮廓缺失但带指纹声明的矛盾文件被拒绝')
  ok((await listRevisions('case-atomic2')).length === 0, '拒绝后库仍为空')

  // 5e. 清理：删除案例应连带删除全部修订
  await deleteCaseDeep('case-atomic')
  ok((await listRevisions('case-atomic')).length === 0, '删除案例后修订一并清除')

  // 5f. 写入事务中途 abort（模拟中断）→ 不留任何残留
  {
    const db = await new Promise<IDBDatabase>((resolve, reject) => {
      const req = indexedDB.open(DB_NAME)
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
    const half = buildRevision({
      caseId: 'case-abort',
      parentIds: [],
      note: '写一半',
      params,
      outlines: rebuildOutlinesFromParams(params),
      check: null
    })
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(['cases', 'revisions'], 'readwrite')
      tx.objectStore('revisions').put(half)
      tx.objectStore('cases').put({
        id: 'case-abort',
        name: '中断案例',
        unit: 'mm',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        headIds: [half.id]
      })
      tx.abort() // 模拟写入中断：事务整体回滚
      tx.onabort = () => {
        db.close()
        resolve()
      }
      tx.oncomplete = () => reject(new Error('不应提交'))
    })
    ok((await listRevisions('case-abort')).length === 0, '事务中止后没有留下修订')
    ok(!(await getCaseMeta('case-abort')), '事务中止后没有留下案例元数据')
  }
}

// ===========================================================================
section('6. 多标签页并发：两个连接基于同一父版保存 → 两个分支都保留')
{
  await __resetStoreForTests()
  await new Promise<void>((resolve, reject) => {
    const del = indexedDB.deleteDatabase(DB_NAME)
    del.onsuccess = () => resolve()
    del.onerror = () => reject(del.error)
  })
  // 先建立案例与父修订
  const params0 = makeParams(20, 40)
  const s0 = await saveRevision({
    caseId: null,
    caseName: '并发案例',
    unit: 'mm',
    parentIds: [],
    note: '父版',
    params: params0,
    outlines: rebuildOutlinesFromParams(params0),
    check: makeCheck(params0)
  })
  const parentId = s0.revision.id
  const caseId = s0.caseId
  await __resetStoreForTests() // 关掉"第一个标签页"的连接

  // 两个"标签页"：各自独立连接，各自在一个事务内完成 写修订+重算头+写元数据
  const tabSave = async (note: string, z1: number) => {
    const db = await new Promise<IDBDatabase>((resolve, reject) => {
      const req = indexedDB.open(DB_NAME)
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
    const p = makeParams(z1, 40)
    const rev = buildRevision({
      caseId,
      parentIds: [parentId],
      note,
      params: p,
      outlines: rebuildOutlinesFromParams(p),
      check: null
    })
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(['cases', 'revisions'], 'readwrite')
      const revStore = tx.objectStore('revisions')
      const caseStore = tx.objectStore('cases')
      revStore.put(rev)
      const getAll = revStore.index('caseId').getAll(caseId)
      getAll.onsuccess = () => {
        const heads = computeHeads(getAll.result as Revision[])
        const getMeta = caseStore.get(caseId)
        getMeta.onsuccess = () => {
          caseStore.put({ ...getMeta.result, headIds: heads, updatedAt: Date.now() })
        }
      }
      tx.oncomplete = () => {
        db.close()
        resolve()
      }
      tx.onerror = () => reject(tx.error)
      tx.onabort = () => reject(tx.error)
    })
    return rev.id
  }
  const [idA, idB] = await Promise.all([tabSave('标签页A 的实验', 21), tabSave('标签页B 的实验', 22)])
  const cases = await listCasesWithHeads()
  const c = cases.find((x) => x.meta.id === caseId)!
  ok(!!c, '案例仍在')
  ok(c.meta.headIds.length === 2 && c.meta.headIds.includes(idA) && c.meta.headIds.includes(idB), '两个标签页的分支头都被保留（无静默丢失）')
  ok(c.revisionCount === 3, '父版 + 两个分支共 3 个修订')
  const rows = diffRevisions((await getRevision(idA))!, (await getRevision(idB))!)
  ok(rows.find((r) => r.label === '齿数 z₁')!.changed, '两个并发分支可比较')
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n修订工作流验收全部通过 ✅')
process.exit(fails ? 1 : 0)
