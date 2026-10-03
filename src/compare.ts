/**
 * 两个修订之间的差异计算：参数、解析尺寸、中心距与啮合检查指标。
 * 纯函数，UI 与测试共用。
 */
import { buildGear } from './geometry/gear'
import { analyzeMesh } from './geometry/mesh'
import { paramsToGearInput, type Revision } from './revisions'

export interface GearDims {
  z: number
  module: number
  alphaDeg: number
  faceWidth: number
  pitchD: number
  baseD: number
  tipD: number
  rootD: number
  undercut: boolean
}

export interface RevisionDims {
  g1: GearDims
  g2: GearDims
  /** 实际中心距 a（mm） */
  centerDistance: number
  /** 标准中心距 a0（mm） */
  standardCenter: number
  deltaA: number
  alphaPrimeDeg: number
  contactRatio: number
  backlashTangential: number
  clearanceMin: number
  basePitchMatch: boolean
}

function gearDims(rev: Revision, which: 'gear1' | 'gear2'): GearDims {
  const p = rev.params[which]
  const g = buildGear(paramsToGearInput(p))
  return {
    z: p.z,
    module: p.module,
    alphaDeg: p.alphaDeg,
    faceWidth: p.faceWidth,
    pitchD: g.pitchR * 2,
    baseD: g.baseR * 2,
    tipD: g.addendumR * 2,
    rootD: g.dedendumR * 2,
    undercut: g.undercut
  }
}

/** 由修订的参数快照重建解析尺寸与啮合指标 */
export function revisionDims(rev: Revision): RevisionDims {
  const g1 = buildGear(paramsToGearInput(rev.params.gear1))
  const g2 = buildGear(paramsToGearInput(rev.params.gear2))
  const a = rev.params.centerDistance ?? g1.pitchR + g2.pitchR
  const mesh = analyzeMesh({ g1, g2, centerDistance: a })
  return {
    g1: gearDims(rev, 'gear1'),
    g2: gearDims(rev, 'gear2'),
    centerDistance: a,
    standardCenter: mesh.a0,
    deltaA: mesh.deltaA,
    alphaPrimeDeg: (mesh.alphaPrime * 180) / Math.PI,
    contactRatio: mesh.contactRatio,
    backlashTangential: mesh.backlashTangential,
    clearanceMin: Math.min(mesh.clearance12, mesh.clearance21),
    basePitchMatch: mesh.basePitchMatch
  }
}

export interface DiffRow {
  label: string
  a: number | string
  b: number | string
  /** 数值差 b−a；非数值行为 null */
  delta: number | null
  changed: boolean
}

function row(label: string, a: number | string, b: number | string, eps = 1e-9): DiffRow {
  const numeric = typeof a === 'number' && typeof b === 'number'
  const delta = numeric ? (b as number) - (a as number) : null
  const changed = numeric ? Math.abs(delta!) > eps : a !== b
  return { label, a, b, delta, changed }
}

/** 逐行对比两版修订（参数 + 尺寸 + 中心距 + 啮合指标） */
export function diffRevisions(ra: Revision, rb: Revision): DiffRow[] {
  const da = revisionDims(ra)
  const db = revisionDims(rb)
  const rows: DiffRow[] = [
    row('齿数 z₁', da.g1.z, db.g1.z, 0),
    row('齿数 z₂', da.g2.z, db.g2.z, 0),
    row('模数 m (mm)', da.g1.module, db.g1.module),
    row('压力角 α (°)', da.g1.alphaDeg, db.g1.alphaDeg),
    row('齿宽 b (mm)', da.g1.faceWidth, db.g1.faceWidth),
    row(
      '中心距设定',
      ra.params.centerDistance == null ? '标准' : ra.params.centerDistance,
      rb.params.centerDistance == null ? '标准' : rb.params.centerDistance
    ),
    row('分度圆直径 d₁ (mm)', da.g1.pitchD, db.g1.pitchD),
    row('分度圆直径 d₂ (mm)', da.g2.pitchD, db.g2.pitchD),
    row('基圆直径 d_b1 (mm)', da.g1.baseD, db.g1.baseD),
    row('基圆直径 d_b2 (mm)', da.g2.baseD, db.g2.baseD),
    row('齿顶圆 d_a1 (mm)', da.g1.tipD, db.g1.tipD),
    row('齿顶圆 d_a2 (mm)', da.g2.tipD, db.g2.tipD),
    row('齿根圆 d_f1 (mm)', da.g1.rootD, db.g1.rootD),
    row('齿根圆 d_f2 (mm)', da.g2.rootD, db.g2.rootD),
    row('标准中心距 a₀ (mm)', da.standardCenter, db.standardCenter),
    row('实际中心距 a (mm)', da.centerDistance, db.centerDistance),
    row('中心距偏差 Δa (mm)', da.deltaA, db.deltaA),
    row('啮合角 α′ (°)', da.alphaPrimeDeg, db.alphaPrimeDeg),
    row('重合度 ε_α', da.contactRatio, db.contactRatio),
    row('圆周侧隙 j_t (mm)', da.backlashTangential, db.backlashTangential),
    row('最小顶隙 c (mm)', da.clearanceMin, db.clearanceMin),
    row('基节一致', da.basePitchMatch ? '是' : '否', db.basePitchMatch ? '是' : '否')
  ]
  return rows
}

/** 两版保存时的干涉结论对比（来自检查摘要） */
export function interferenceDiff(ra: Revision, rb: Revision) {
  const ia = ra.check?.interference ?? null
  const ib = rb.check?.interference ?? null
  return {
    a: ia,
    b: ib,
    deltaArea: ia && ib ? ib.area - ia.area : null
  }
}
