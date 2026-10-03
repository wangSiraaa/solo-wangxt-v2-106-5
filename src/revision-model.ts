/**
 * 修订领域模型（与持久化无关）：
 *  - RevisionParams  参数快照（不可变修订的一部分）
 *  - 轮廓指纹        对参数生成的（或随修订携带的）轮廓多边形取指纹
 *  - CheckSummary    检查摘要（尺寸/啮合/当前帧干涉）
 *  - Revision        带父修订链的不可变修订，digest 为内容指纹
 *  - 校验            重算 digest / 轮廓指纹，防止导入文件冒充同一修订
 *  - 迁移            旧版（schemaVersion=1）单案例 → 单个根修订
 *
 * 身份模型（兼顾幂等与冲突检测）：
 *  - revId：修订被创建时分配的 UUID（"声明身份"），父引用在 UI 层以 digest 为准；
 *  - digest：对 {revId, parentDigest, 参数快照, 轮廓指纹, 检查摘要, 备注} 的规范哈希
 *            （内容身份）。持久层以 digest 为键，因此：
 *              * 重复导入同一修订（digest 相同）天然幂等，不产生副本；
 *              * 同 revId 但内容不同（digest 不同）→ 双胞胎并存，标记冲突，
 *                谁也不能覆盖谁；
 *  - createdAt 等"元数据时间戳"不进入 digest（否则同内容永远无法判等）。
 */
import { buildGear, DEG, transformOutline, type Pt, type GearGeometry } from './geometry/gear'
import { analyzeMesh, mateAngle, type MeshInfo } from './geometry/mesh'
import { intersectOutlines } from './geometry/clipper'
import { fingerprint, canonicalJson } from './hash'
import type { LengthUnit } from './units'

export const REVISION_SCHEMA_VERSION = 2 as const

// ---------------------------------------------------------------- 参数快照

export interface GearParams {
  z: number
  module: number
  alphaDeg: number
  faceWidth: number
}

export interface RevisionParams {
  gear1: GearParams
  gear2: GearParams
  /** 实际中心距 mm；null = 标准中心距 */
  centerDistance: number | null
  /** 显示单位（只影响显示，记入快照便于恢复界面） */
  unit: LengthUnit
}

// ---------------------------------------------------------------- 轮廓指纹

export interface OutlineHashes {
  algo: 'cyrb128'
  gear1: string
  gear2: string
}

export interface OutlinePayload {
  gear1: Pt[]
  gear2: Pt[]
}

/** 轮廓离散化固定使用 16 段渐开线，保证跨版本指纹稳定 */
export const OUTLINE_INVOLUTE_STEPS = 16

export function gearInputOf(p: GearParams) {
  return { z: Math.round(p.z), module: p.module, alpha: p.alphaDeg * DEG, faceWidth: p.faceWidth }
}

/** 由参数确定性地生成一对几何（轮廓指纹的"真值来源"） */
export function buildPairFromParams(params: RevisionParams): {
  g1: GearGeometry
  g2: GearGeometry
  mesh: MeshInfo
  centerDistance: number
} {
  const g1 = buildGear(gearInputOf(params.gear1), OUTLINE_INVOLUTE_STEPS)
  const g2 = buildGear(gearInputOf(params.gear2), OUTLINE_INVOLUTE_STEPS)
  const centerDistance =
    params.centerDistance == null ? g1.pitchR + g2.pitchR : params.centerDistance
  const mesh = analyzeMesh({ g1, g2, centerDistance })
  return { g1, g2, mesh, centerDistance }
}

export function expectedOutlines(params: RevisionParams): OutlinePayload {
  const { g1, g2 } = buildPairFromParams(params)
  return { gear1: g1.outline, gear2: g2.outline }
}

export function hashOutlines(outlines: OutlinePayload): OutlineHashes {
  return {
    algo: 'cyrb128',
    gear1: fingerprint(outlines.gear1),
    gear2: fingerprint(outlines.gear2)
  }
}

// ---------------------------------------------------------------- 检查摘要

export interface InterferenceSnapshot {
  /** 做求交时轮1 的本体转角（当前帧） */
  phi1: number
  /** 重叠面积 mm² */
  areaMm2: number
  intersects: boolean
}

export interface CheckSummary {
  /** 每轮关键尺寸（mm），供两版直接比较而无需重放几何 */
  dims: {
    z: number
    module: number
    alphaDeg: number
    pitchD: number
    baseD: number
    addendumD: number
    dedendumD: number
    undercut: boolean
  }[]
  a0: number
  a: number
  alphaPrimeDeg: number
  pitchR1: number
  pitchR2: number
  contactRatio: number
  basePitchMatch: boolean
  basePitchDiff: number
  backlashTangential: number
  backlashNormal: number
  clearance12: number
  clearance21: number
  addendumOverlap: boolean
  warnings: string[]
  /** 当前帧干涉；仅参数保存（未触发求交）时为 null */
  interference: InterferenceSnapshot | null
}

export function summarizeChecks(
  g1: GearGeometry,
  g2: GearGeometry,
  mesh: MeshInfo,
  interference: InterferenceSnapshot | null
): CheckSummary {
  const dimOf = (g: GearGeometry) => ({
    z: g.input.z,
    module: g.input.module,
    alphaDeg: g.input.alpha / DEG,
    pitchD: g.pitchR * 2,
    baseD: g.baseR * 2,
    addendumD: g.addendumR * 2,
    dedendumD: g.dedendumR * 2,
    undercut: g.undercut
  })
  return {
    dims: [dimOf(g1), dimOf(g2)],
    a0: mesh.a0,
    a: mesh.a,
    alphaPrimeDeg: mesh.alphaPrime / DEG,
    pitchR1: mesh.pitchR1,
    pitchR2: mesh.pitchR2,
    contactRatio: mesh.contactRatio,
    basePitchMatch: mesh.basePitchMatch,
    basePitchDiff: mesh.basePitchDiff,
    backlashTangential: mesh.backlashTangential,
    backlashNormal: mesh.backlashNormal,
    clearance12: mesh.clearance12,
    clearance21: mesh.clearance21,
    addendumOverlap: mesh.addendumOverlap,
    warnings: [...mesh.warnings],
    interference
  }
}

/** 在给定帧对一对参数做 Clipper 求交（轮廓优先用随修订携带的，否则现场生成） */
export async function interferenceAtFrame(
  params: RevisionParams,
  phi1: number,
  carriedOutlines?: OutlinePayload | null
): Promise<InterferenceSnapshot> {
  const { g1, g2, mesh } = buildPairFromParams(params)
  const p2 = mateAngle(g1, g2, mesh, phi1)
  const o: OutlinePayload = carriedOutlines ?? { gear1: g1.outline, gear2: g2.outline }
  const res = await intersectOutlines(
    [transformOutline(o.gear1, 0, 0, phi1)],
    [transformOutline(o.gear2, mesh.a, 0, p2)]
  )
  return { phi1, areaMm2: res.area, intersects: res.intersects }
}

// ---------------------------------------------------------------- 修订

export interface Revision {
  schemaVersion: 2
  /** 创建时分配的身份（声明身份；进入 digest） */
  revId: string
  /** 内容指纹（持久层主键） */
  digest: string
  /** 父修订内容指纹；根修订为 null */
  parentDigest: string | null
  projectId: string
  /** 参数快照 */
  params: RevisionParams
  /** 本修订是否携带轮廓负载（参数-only 修订为 false） */
  hasOutlines: boolean
  /** 轮廓指纹（始终存在；由参数几何确定） */
  outlineHashes: OutlineHashes
  checks: CheckSummary
  note: string
  // ---- 以下字段不进入 digest（纯元数据） ----
  /**
   * 语义内容键（忽略 revId/创建时间）：用于"同一父版重复保存相同内容"幂等去重。
   */
  contentKey: string
  createdAt: number
  /** 产生该修订的标签页实例（排查并列分支用） */
  creator: string
}

/** 进入内容指纹的字段（顺序无所谓——canonicalJson 会排序键） */
type DigestContent = Omit<Revision, 'digest' | 'contentKey' | 'createdAt' | 'creator'>

function digestPayload(rev: DigestContent): unknown {
  return {
    v: 2,
    kind: 'revision',
    revId: rev.revId,
    parentDigest: rev.parentDigest,
    projectId: rev.projectId,
    params: rev.params,
    hasOutlines: rev.hasOutlines,
    outlineHashes: rev.outlineHashes,
    checks: rev.checks,
    note: rev.note
  }
}

export function computeDigest(rev: DigestContent): string {
  return fingerprint(digestPayload(rev))
}

/**
 * 语义内容键：忽略 revId（声明身份）与创建时间，仅由
 * {父修订, 项目, 参数, 是否含轮廓, 轮廓指纹, 检查摘要, 备注} 决定。
 * 同一父版下重复保存完全相同的内容时命中同一键 → 幂等，不产生副本；
 * 改任何一个参数或备注都会得到不同的键（成为新的并列后继）。
 */
export function contentKey(rev: Revision): string {
  return fingerprint({
    parentDigest: rev.parentDigest,
    projectId: rev.projectId,
    params: rev.params,
    hasOutlines: rev.hasOutlines,
    outlineHashes: rev.outlineHashes,
    checks: rev.checks,
    note: rev.note
  })
}

export function newRevisionId(): string {
  const rnd =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID().replace(/-/g, '')
      : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`
  return `rev-${rnd}`
}

/** 本机标签页实例（区分并发分支来源） */
export function newTabCreatorId(): string {
  try {
    const KEY = 'sgl.creator'
    const kept = sessionStorage.getItem(KEY)
    if (kept) return kept
    const id = `tab-${Math.random().toString(36).slice(2, 10)}`
    sessionStorage.setItem(KEY, id)
    return id
  } catch {
    return `tab-${Math.random().toString(36).slice(2, 10)}`
  }
}

export interface MakeRevisionOptions {
  revId?: string
  parentDigest: string | null
  projectId: string
  params: RevisionParams
  note?: string
  /** 当前帧干涉；保存前在界面侧求出 */
  interference?: InterferenceSnapshot | null
  /** 是否把轮廓多边形随修订一起保存 */
  includeOutlines: boolean
  createdAt?: number
  creator: string
}

/** 构造一条内容完整、指纹自洽的修订（返回值可直接持久化） */
export function makeRevision(opts: MakeRevisionOptions): {
  revision: Revision
  outlines: OutlinePayload | null
} {
  const { g1, g2, mesh } = buildPairFromParams(opts.params)
  const outlines = expectedOutlines(opts.params)
  const checks = summarizeChecks(g1, g2, mesh, opts.interference ?? null)
  const base: DigestContent = {
    schemaVersion: REVISION_SCHEMA_VERSION,
    revId: opts.revId ?? newRevisionId(),
    parentDigest: opts.parentDigest,
    projectId: opts.projectId,
    params: opts.params,
    hasOutlines: opts.includeOutlines,
    outlineHashes: hashOutlines(outlines),
    checks,
    note: opts.note ?? ''
  }
  const createdAt = opts.createdAt ?? Date.now()
  const revision: Revision = {
    ...base,
    digest: computeDigest(base),
    contentKey: '', // 先占位，下面拿到完整 revision 后重算
    createdAt,
    creator: opts.creator
  }
  revision.contentKey = contentKey(revision)
  return { revision, outlines: opts.includeOutlines ? outlines : null }
}

// ---------------------------------------------------------------- 校验

export type IntegrityProblem =
  | 'schema'
  | 'digest-mismatch'
  | 'missing-outlines'
  | 'outline-hash-mismatch'
  | 'bad-params'

export interface IntegrityResult {
  ok: boolean
  problems: IntegrityProblem[]
}

/**
 * 修订完整性校验。导入、读取与迁移后都要过这一关：
 *  - digest 必须能由内容重算复现（文件被截断/篡改 → 失败）；
 *  - 轮廓指纹必须与【按参数重算】的轮廓一致（轮廓是参数的确定函数），
 *    因此即使导入文件不带轮廓负载，也能判断参数与指纹是否被人动过；
 *  - 如果随修订携带了轮廓负载，其哈希必须与指纹一致，否则不许冒充；
 *  - requirePayload=true（本地库读取）时，hasOutlines 的修订必须真带着两份轮廓，
 *    防止"只有元数据、轮廓缺失"的损坏修订被当成正常修订使用；
 *  - 参数本身要可生成合法几何。
 */
export function verifyRevision(
  rev: Revision,
  outlines: OutlinePayload | null | undefined,
  requirePayload = false
): IntegrityResult {
  const problems: IntegrityProblem[] = []
  if (!rev || rev.schemaVersion !== 2 || typeof rev.revId !== 'string') problems.push('schema')
  if (outlines) {
    if (fingerprint(outlines.gear1) !== rev.outlineHashes.gear1) problems.push('outline-hash-mismatch')
    if (fingerprint(outlines.gear2) !== rev.outlineHashes.gear2) problems.push('outline-hash-mismatch')
  }
  if (requirePayload && rev.hasOutlines && !outlines) problems.push('missing-outlines')
  try {
    const { g1, g2 } = buildPairFromParams(rev.params)
    if (!(g1.outline.length > 3) || !(g2.outline.length > 3)) problems.push('bad-params')
    // 参数期望指纹与记录不符（轮廓对不上参数）——同样不许冒充
    const expected = hashOutlines(expectedOutlines(rev.params))
    if (
      expected.gear1 !== rev.outlineHashes.gear1 ||
      expected.gear2 !== rev.outlineHashes.gear2
    ) {
      problems.push('outline-hash-mismatch')
    }
  } catch {
    problems.push('bad-params')
  }
  const { digest: _d, contentKey: _ck, createdAt: _c, creator: _cr, ...content } = rev
  void _d
  void _ck
  void _c
  void _cr
  if (computeDigest(content as DigestContent) !== rev.digest) {
    problems.push('digest-mismatch')
  }
  return { ok: problems.length === 0, problems }
}

// ---------------------------------------------------------------- 两版比较

export interface FieldDelta {
  label: string
  a: number
  b: number
  delta: number
  unit?: string
  worse?: boolean
}

export interface RevisionDiff {
  same: boolean
  paramsDiffer: boolean
  noteA: string
  noteB: string
  fields: FieldDelta[]
  interferenceA: InterferenceSnapshot | null
  interferenceB: InterferenceSnapshot | null
  /** 两版各自在同一指定帧上的干涉（按需重算后填入） */
  liveInterference?: {
    phi1: number
    a: InterferenceSnapshot
    b: InterferenceSnapshot
    deltaArea: number
  } | null
}

function pushDim(
  out: FieldDelta[],
  label: string,
  a: number,
  b: number,
  unit = 'mm',
  isWorse?: (delta: number, next: number) => boolean
) {
  const delta = b - a
  out.push({ label, a, b, delta, unit, worse: isWorse ? isWorse(delta, b) : undefined })
}

/** 比较两版尺寸、中心距与（保存时记录的）当前帧干涉 */
export function diffRevisions(a: Revision, b: Revision): RevisionDiff {
  const fields: FieldDelta[] = []
  for (const i of [0, 1]) {
    const tag = `轮${i + 1}`
    const da = a.checks.dims[i],
      db = b.checks.dims[i]
    pushDim(fields, `${tag} 齿数 z`, da.z, db.z, '', (d) => d !== 0)
    pushDim(fields, `${tag} 模数 m`, da.module, db.module)
    pushDim(fields, `${tag} 压力角 α`, da.alphaDeg, db.alphaDeg, '°', (d) => d !== 0)
    pushDim(fields, `${tag} 分度圆 d`, da.pitchD, db.pitchD)
    pushDim(fields, `${tag} 基圆 d_b`, da.baseD, db.baseD)
    pushDim(fields, `${tag} 齿顶圆 d_a`, da.addendumD, db.addendumD)
    pushDim(fields, `${tag} 齿根圆 d_f`, da.dedendumD, db.dedendumD)
  }
  pushDim(fields, '标准中心距 a₀', a.checks.a0, b.checks.a0)
  pushDim(fields, '实际中心距 a', a.checks.a, b.checks.a, 'mm', (d) => Math.abs(d) > 1e-9)
  pushDim(fields, '啮合角 α′', a.checks.alphaPrimeDeg, b.checks.alphaPrimeDeg, '°')
  pushDim(fields, '节圆 r₁′', a.checks.pitchR1, b.checks.pitchR1)
  pushDim(fields, '节圆 r₂′', a.checks.pitchR2, b.checks.pitchR2)
  pushDim(fields, '重合度 ε_α', a.checks.contactRatio, b.checks.contactRatio, '', (_d, next) => next < 1)
  pushDim(fields, '法向侧隙 j_n', a.checks.backlashNormal, b.checks.backlashNormal)
  pushDim(fields, '顶隙 c₁₂', a.checks.clearance12, b.checks.clearance12, 'mm', (_d, next) => next < 0)
  pushDim(fields, '基节差 |Δp_b|', a.checks.basePitchDiff, b.checks.basePitchDiff, 'mm', (_d) => !b.checks.basePitchMatch)

  return {
    same: a.digest === b.digest,
    paramsDiffer:
      canonicalJson(a.params) !== canonicalJson(b.params) ||
      a.parentDigest !== b.parentDigest,
    noteA: a.note,
    noteB: b.note,
    fields,
    interferenceA: a.checks.interference,
    interferenceB: b.checks.interference,
    liveInterference: null
  }
}

// ---------------------------------------------------------------- v1 迁移

/**
 * 旧版（schemaVersion=1）单案例迁移为"一个项目 + 一个根修订"。
 * 纯同步（IndexedDB versionchange 事务里不能 await 异步），几何/检查都可同步重算；
 * 干涉帧在旧格式中不存在，留 null（旧版本就不持久化检查结果）。
 */
export function migrateV1Case(raw: unknown): { revision: Revision; outlines: OutlinePayload | null } {
  const c = raw as {
    id?: string
    name?: string
    note?: string
    unit?: LengthUnit
    gear1?: GearParams
    gear2?: GearParams
    centerDistance?: number | null
    outlines?: OutlinePayload
    createdAt?: number
  }
  if (!c || !c.gear1 || !c.gear2) throw new Error('旧案例缺少齿轮参数，无法迁移')
  const checkGear = (g: GearParams, tag: string) => {
    if (!(g.z >= 4) || !(g.module > 0) || !(g.alphaDeg > 0) || !(g.faceWidth > 0)) {
      throw new Error(`旧案例${tag}参数不合法（z≥4, m>0, α>0, b>0），无法迁移`)
    }
  }
  checkGear(c.gear1, '轮1')
  checkGear(c.gear2, '轮2')
  if (c.centerDistance != null && !(c.centerDistance > 0)) {
    throw new Error('旧案例中心距不合法，无法迁移')
  }
  const params: RevisionParams = {
    gear1: {
      z: c.gear1.z,
      module: c.gear1.module,
      alphaDeg: c.gear1.alphaDeg,
      faceWidth: c.gear1.faceWidth
    },
    gear2: {
      z: c.gear2.z,
      module: c.gear2.module,
      alphaDeg: c.gear2.alphaDeg,
      faceWidth: c.gear2.faceWidth
    },
    centerDistance: c.centerDistance == null ? null : c.centerDistance,
    unit: c.unit ?? 'mm'
  }
  const projectId = `proj-${c.id ?? 'migrated'}`
  const expected = expectedOutlines(params)
  // 旧文件可能带轮廓：先对参数重算指纹，旧轮廓只作为负载保留；
  // 若旧轮廓与参数不符（例如旧版本离散差异），则不带负载（参数仍可现场重建几何）。
  let carry: OutlinePayload | null = null
  if (c.outlines && Array.isArray(c.outlines.gear1) && Array.isArray(c.outlines.gear2)) {
    const h = hashOutlines(c.outlines)
    const eh = hashOutlines(expected)
    if (h.gear1 === eh.gear1 && h.gear2 === eh.gear2) carry = c.outlines
  }
  const { revision } = makeRevision({
    revId: `rev-migrated-${c.id ?? 'unknown'}`,
    parentDigest: null,
    projectId,
    params,
    note: c.note ? `（迁移自旧版）${c.note}` : '迁移自旧版单案例',
    includeOutlines: carry !== null,
    interference: null,
    createdAt: c.createdAt ?? Date.now(),
    creator: 'migration-v1'
  })
  // makeRevision 用新生成的 expected 轮廓；携带旧轮廓时负载用旧的（指纹已验证一致）
  return { revision, outlines: carry }
}
