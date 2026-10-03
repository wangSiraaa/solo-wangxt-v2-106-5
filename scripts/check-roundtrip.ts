/**
 * 案例导出/导入往返测试：
 *  1. v2 修订导出为 JSON 后必须能重新解析，重载的轮廓与原轮廓数值一致、仍可用于 Clipper 求交；
 *  2. 修订 id / 轮廓指纹在往返后保持不变（内容寻址稳定）；
 *  3. 旧版（schemaVersion=1）单案例 JSON 自动迁移后，仍可运行原有啮合与往返检查。
 */
import { buildGear, DEG, transformOutline, polygonArea } from '../src/geometry/gear.ts'
import { analyzeMesh, mateAngle } from '../src/geometry/mesh.ts'
import {
  buildRevision,
  hashOutlines,
  normalizeImport,
  rebuildOutlinesFromParams,
  serializeExport,
  type LegacyCaseDataV1,
  type ParamsSnapshot
} from '../src/revisions.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

const g1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
const g2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
const mesh = analyzeMesh({ g1, g2, centerDistance: g1.pitchR + g2.pitchR })

const params: ParamsSnapshot = {
  gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  centerDistance: null
}

console.log('=== v2 修订导出/导入往返 ===')
const rev = buildRevision({
  caseId: 'case-roundtrip',
  parentIds: [],
  note: '往返样本',
  params,
  outlines: { gear1: g1.outline, gear2: g2.outline },
  check: null,
  createdAt: 1
})
const text = serializeExport({ id: 'case-roundtrip', name: '往返样本', unit: 'mm' }, [rev])
const norm = normalizeImport(text)
ok(norm.ok, 'v2 导出文件可解析')
if (!norm.ok) process.exit(1)
const back = norm.revisions[0]

ok(back.id === rev.id, '修订 id 往返不变（内容寻址）')
ok(back.outlineHash === rev.outlineHash, '轮廓指纹往返不变')
ok(back.params.gear1.z === 20 && back.params.gear2.z === 40, '参数往返一致')
ok(back.outlines.gear1.length === g1.outline.length, '轮1 轮廓点数一致')
ok(back.outlines.gear2.length === g2.outline.length, '轮2 轮廓点数一致')

// 重载轮廓面积与原轮廓一致（闭合性不因序列化破坏）
const a1 = polygonArea(back.outlines.gear1)
const a2 = polygonArea(back.outlines.gear2)
ok(Math.abs(a1 - polygonArea(g1.outline)) < 1e-6, '轮1 轮廓面积往返一致')
ok(Math.abs(a2 - polygonArea(g2.outline)) < 1e-6, '轮2 轮廓面积往返一致')
ok(a1 > 0 && a2 > 0, '重载轮廓仍为正向闭合环')

// 重载轮廓在严格相位下可直接用于 Clipper 求交（标准安装无干涉 → 面积 0）
const p1 = 0.37
const p2 = mateAngle(g1, g2, mesh, p1)
const o1 = [transformOutline(back.outlines.gear1, 0, 0, p1)]
const o2 = [transformOutline(back.outlines.gear2, mesh.a, 0, p2)]
const res = await intersectOutlines(o1, o2)
ok(!res.intersects, `标准安装严格相位无实体干涉（重叠面积 ${res.area.toExponential(2)}）`)

// 人为错位中心距（齿顶交叉）→ 重载轮廓求交必须报干涉
const bad = analyzeMesh({ g1, g2, centerDistance: g1.pitchR + g2.pitchR - 3 })
const b2 = mateAngle(g1, g2, bad, p1)
const resBad = await intersectOutlines(
  [transformOutline(back.outlines.gear1, 0, 0, p1)],
  [transformOutline(back.outlines.gear2, bad.a, 0, b2)]
)
ok(resBad.intersects && resBad.area > 1, `中心距过小时 Clipper 检出干涉（面积 ${resBad.area.toFixed(2)} mm²）`)

console.log('=== 旧版（v1）单案例迁移后往返 ===')
const legacy: LegacyCaseDataV1 = {
  schemaVersion: 1,
  id: 'case-legacy-rt',
  name: '旧版往返',
  createdAt: 1,
  updatedAt: 1,
  note: '',
  gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  centerDistance: null,
  unit: 'mm',
  outlines: { gear1: g1.outline, gear2: g2.outline }
}
const normV1 = normalizeImport(JSON.stringify(legacy))
ok(normV1.ok && normV1.migratedFromV1, '旧版 v1 JSON 自动迁移')
if (normV1.ok) {
  const mr = normV1.revisions[0]
  ok(mr.outlineHash === hashOutlines(legacy.outlines!), '迁移后轮廓指纹与旧轮廓一致')
  const resV1 = await intersectOutlines(
    [transformOutline(mr.outlines.gear1, 0, 0, p1)],
    [transformOutline(mr.outlines.gear2, mesh.a, 0, p2)]
  )
  ok(!resV1.intersects, '迁移轮廓仍可用于 Clipper 求交（无干涉）')

  // 旧版"仅参数"（无轮廓）导出 → 迁移时由参数重建轮廓，且几何与原版一致
  const legacyNoGeo = { ...legacy, id: 'case-legacy-rt2', outlines: undefined }
  const normNoGeo = normalizeImport(JSON.stringify(legacyNoGeo))
  ok(normNoGeo.ok && normNoGeo.rebuiltOutlines === 1, '旧版仅参数导出迁移时重建轮廓')
  if (normNoGeo.ok) {
    ok(
      normNoGeo.revisions[0].outlineHash === hashOutlines(rebuildOutlinesFromParams(params)),
      '重建轮廓指纹与参数重建结果一致'
    )
    ok(polygonArea(normNoGeo.revisions[0].outlines.gear1) > 0, '重建轮廓为正向闭合环')
  }
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n往返与求交全部通过 ✅')
process.exit(fails ? 1 : 0)
