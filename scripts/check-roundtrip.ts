/**
 * 案例导出/导入往返测试（schema v2 修订包）：
 *  - 修订（含轮廓）经 JSON 序列化往返后 digest 自洽、轮廓点数/面积不变；
 *  - 重载轮廓在严格相位下可直接用于 Clipper 求交（标准安装无干涉 / 小中心距检出干涉）；
 *  - 篡改轮廓/参数后校验必须拒绝（不得冒充同一修订）。
 */
import 'fake-indexeddb/auto'
import { buildGear, DEG, transformOutline, polygonArea } from '../src/geometry/gear.ts'
import { analyzeMesh, mateAngle } from '../src/geometry/mesh.ts'
import {
  makeRevision,
  verifyRevision,
  expectedOutlines,
  type RevisionParams
} from '../src/revision-model.ts'
import { serializeBundle, importJson, exportProjectBundle, listRevisions, getOutlines, _resetDbConnectionForTests } from '../src/store.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

const params: RevisionParams = {
  gear1: { z: 20, module: 2, alphaDeg: 20, faceWidth: 10 },
  gear2: { z: 40, module: 2, alphaDeg: 20, faceWidth: 10 },
  centerDistance: null,
  unit: 'mm'
}
const { g1, g2, mesh } = (() => {
  const gg1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const gg2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  return {
    g1: gg1,
    g2: gg2,
    mesh: analyzeMesh({ g1: gg1, g2: gg2, centerDistance: gg1.pitchR + gg2.pitchR })
  }
})()

const { revision, outlines } = makeRevision({
  parentDigest: null,
  projectId: 'proj-roundtrip',
  projectName: undefined,
  params,
  note: '往返样本',
  includeOutlines: true,
  interference: { phi1: 0.37, areaMm2: 0, intersects: false },
  creator: 'test'
})

ok(!!outlines, '修订携带轮廓')
ok(verifyRevision(revision, outlines).ok, '新建修订完整性校验通过（digest/指纹自洽）')
ok(outlines!.gear1.length === g1.outline.length, '轮1 轮廓点数一致')
ok(outlines!.gear2.length === g2.outline.length, '轮2 轮廓点数一致')
ok(Math.abs(polygonArea(outlines!.gear1) - polygonArea(g1.outline)) < 1e-6, '轮1 轮廓面积一致')
ok(Math.abs(polygonArea(outlines!.gear2) - polygonArea(g2.outline)) < 1e-6, '轮2 轮廓面积一致')

// 导入修订包，再导出做 JSON 往返
let res = await importJson(
  JSON.stringify({
    schemaVersion: 2,
    kind: 'revision-bundle',
    exportedAt: 1,
    project: { id: 'proj-roundtrip', name: '往返样本' },
    revisions: [revision],
    outlines: [{ digest: revision.digest, gear1: outlines!.gear1, gear2: outlines!.gear2 }]
  })
)
ok(res.outcomes[0].kind === 'imported', `导入成功（${res.outcomes[0].kind}）`)

const stored = (await listRevisions()).find((r) => r.digest === revision.digest)!
ok(!!stored, '修订已落库')
ok(stored.digest === revision.digest, 'digest 往返不变')
const storedOuts = await getOutlines(revision.digest)
ok(!!storedOuts, '轮廓随修订落库')

const bundle = await exportProjectBundle('proj-roundtrip', '往返样本')
const text = serializeBundle(bundle)
const back = JSON.parse(text)
const revBack = back.revisions[0]
const outsBack = back.outlines[0]
ok(revBack.digest === revision.digest, 'JSON 往返后 digest 一致')
ok(outsBack.gear1.length === g1.outline.length && outsBack.gear2.length === g2.outline.length, 'JSON 往返轮廓点数一致')
ok(Math.abs(polygonArea(outsBack.gear1) - polygonArea(g1.outline)) < 1e-6, '往返轮廓面积一致')

// 重新导入同一文件 → 幂等去重
res = await importJson(text)
ok(res.outcomes[0].kind === 'dedup', `重复导入同修订去重（${res.outcomes[0].kind}）`)
ok((await listRevisions()).length === 1, '库中仍只有一条修订（无副本）')

// 重载轮廓用于 Clipper 求交：严格相位标准安装 → 无干涉
const p1 = 0.37
const p2 = mateAngle(g1, g2, mesh, p1)
const r0 = await intersectOutlines(
  [transformOutline(outsBack.gear1, 0, 0, p1)],
  [transformOutline(outsBack.gear2, mesh.a, 0, p2)]
)
ok(!r0.intersects, `标准安装严格相位无实体干涉（面积 ${r0.area.toExponential(2)}）`)

// 小中心距 → 必须检出干涉
const bad = analyzeMesh({ g1, g2, centerDistance: g1.pitchR + g2.pitchR - 3 })
const b2 = mateAngle(g1, g2, bad, p1)
const rBad = await intersectOutlines(
  [transformOutline(outsBack.gear1, 0, 0, p1)],
  [transformOutline(outsBack.gear2, bad.a, 0, b2)]
)
ok(rBad.intersects && rBad.area > 1, `小中心距检出干涉（面积 ${rBad.area.toFixed(2)} mm²）`)

// 篡改轮廓（挪动一个点）必须无法冒充
const tamperedOuts = { gear1: outsBack.gear1.map((p: { x: number; y: number }, i: number) => (i === 0 ? { x: p.x + 5, y: p.y } : p)), gear2: outsBack.gear2 }
ok(!verifyRevision(revBack, tamperedOuts).ok, '轮廓被篡改后校验拒绝（outline-hash-mismatch）')

// 篡改 digest 字段（内容不匹配）必须拒绝
const last = revBack.digest.slice(-1)
const flipped = (parseInt(last, 16) + 1).toString(16)
const tamperedRev = { ...revBack, digest: revBack.digest.slice(0, -1) + flipped }
ok(tamperedRev.digest !== revBack.digest, '测试构造：digest 确实被改')
ok(!verifyRevision(tamperedRev, outsBack).ok, 'digest 被篡改后校验拒绝（digest-mismatch）')

// 参数-only 导出（outlines 数组为空）仍可导入，轮廓按参数确定性重建
const paramOnly = JSON.stringify({ ...back, outlines: [] })
// 先删掉库里这条，制造全新导入环境
await _resetDbConnectionForTests()
await new Promise<void>((resolve, reject) => {
  const r = indexedDB.deleteDatabase('spur-gear-lab')
  r.onsuccess = () => resolve()
  r.onerror = () => reject(r.error)
  r.onblocked = () => reject(new Error('deleteDatabase blocked'))
})
await _resetDbConnectionForTests()
const res2 = await importJson(paramOnly)
ok(['imported', 'conflict'].includes(res2.outcomes[0].kind), '参数-only 包（无轮廓数组）可导入')
const rebuilt = await getOutlines(revBack.digest)
ok(!!rebuilt && Math.abs(polygonArea(rebuilt.gear1) - polygonArea(g1.outline)) < 1e-6, '缺失轮廓按参数重建且面积一致')
void expectedOutlines

console.log(fails ? `\n${fails} 项失败 ❌` : '\n往返、去重与防篡改全部通过 ✅')
process.exit(fails ? 1 : 0)
