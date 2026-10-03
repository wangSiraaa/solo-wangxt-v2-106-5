/**
 * 设计修订（不可变）与分支/合并的纯逻辑层。
 *
 * 设计要点：
 *  - 修订不可变：每次保存生成新修订，记录父修订、参数快照、轮廓指纹、检查摘要与备注；
 *  - 内容寻址：修订 id = 内容（案例 + 父链 + 参数 + 备注 + 轮廓指纹 + 检查摘要）的 SHA-256，
 *    同一案例内同一内容无论保存/导入多少次都得到同一 id（天然去重）；
 *    内容不同却声称同一 id 的文件无法冒充（指纹对不上 → 进入冲突处理）；
 *  - 分支：同一父修订的不同后继是并列分支，全部保留（案例的 headIds 可能有多个）；
 *  - 本文件不依赖 IndexedDB / DOM，可在 Node 中直接测试；持久化见 store.ts。
 */
import { buildGear, type GearInput, type Pt } from './geometry/gear'
import type { LengthUnit } from './units'
import { canonNum, sha256Hex, stableStringify } from './hash'

export const SCHEMA_VERSION = 2
export const EXPORT_KIND = 'spur-gear-lab/case'

// ---------------------------------------------------------------------------
// 类型
// ---------------------------------------------------------------------------

export interface GearParamsSnapshot {
  z: number
  module: number
  /** 压力角，弧度 */
  alpha: number
  alphaDeg: number
  faceWidth: number
}

/** 参数快照（内部恒为 mm） */
export interface ParamsSnapshot {
  gear1: GearParamsSnapshot
  gear2: GearParamsSnapshot
  /** 实际中心距（mm）；null = 标准中心距 a0 */
  centerDistance: number | null
}

/** 保存时当前帧的干涉检查结论 */
export interface InterferenceSummary {
  /** 检查帧轮 1 转角（rad） */
  phi1: number
  /** 接触点参数 s（mm） */
  contactS: number
  /** 重叠面积 mm² */
  area: number
  /** 重叠区域（世界坐标多边形），可用于重新高亮 */
  regions: Pt[][]
}

/** 保存修订时的检查摘要（啮合检查 + 当前帧干涉结论） */
export interface CheckSummary {
  /** 摘要生成时间（不参与修订指纹） */
  checkedAt: number
  /** 实际中心距 a（mm） */
  centerDistance: number
  /** 标准中心距 a0（mm） */
  standardCenter: number
  alphaPrimeDeg: number
  contactRatio: number
  backlashTangential: number
  clearanceMin: number
  basePitchMatch: boolean
  undercut: [boolean, boolean]
  warnings: string[]
  /** 当前帧干涉结论；保存前未做求交则为 null */
  interference: InterferenceSummary | null
}

/** 不可变修订（schema v2） */
export interface Revision {
  schemaVersion: 2
  /** 内容寻址 id：rev-<sha256>，由案例+父链+参数+备注+轮廓指纹+检查摘要推出 */
  id: string
  caseId: string
  /** 父修订 id（0 个=根，1 个=普通后继，2 个=合并）；可能指向未导入的外部修订 */
  parentIds: string[]
  /** 创建时间（不参与指纹） */
  createdAt: number
  note: string
  params: ParamsSnapshot
  /** 轮廓（局部坐标，mm）。修订必须完整：指纹对应的轮廓不可缺失 */
  outlines: { gear1: Pt[]; gear2: Pt[] }
  /** 轮廓指纹 sha256:…（对 outlines 内容计算） */
  outlineHash: string
  check: CheckSummary | null
  /** 由 v1 旧案例迁移而来（溯源信息，不参与指纹） */
  migratedFrom?: number
}

/** 案例元数据（可变的只有名称/单位/头指针；历史修订不可变） */
export interface CaseMeta {
  id: string
  name: string
  unit: LengthUnit
  createdAt: number
  updatedAt: number
  /** 叶节点修订 id；>1 表示存在并行分支 */
  headIds: string[]
}

/** 冲突记录（导入/写入时检测到的不一致） */
export interface ConflictRecord {
  /** 自增主键（IndexedDB 分配） */
  id?: number
  /** id-mismatch：内容指纹与声称的修订 id 不符；hash-mismatch：轮廓指纹与轮廓数据不符 */
  type: 'id-mismatch' | 'hash-mismatch'
  caseId: string | null
  claimedId: string
  actualId: string
  detail: string
  detectedAt: number
  resolved: boolean
}

/** v1 旧案例格式（迁移用） */
export interface LegacyCaseDataV1 {
  schemaVersion: 1
  id: string
  name: string
  createdAt: number
  updatedAt: number
  note: string
  gear1: GearParamsSnapshot
  gear2: GearParamsSnapshot
  centerDistance: number | null
  unit: LengthUnit
  outlines?: { gear1: Pt[]; gear2: Pt[] }
}

/** v2 导出信封 */
export interface CaseExport {
  schemaVersion: 2
  kind: typeof EXPORT_KIND
  exportedAt: number
  case: { id: string; name: string; unit: LengthUnit }
  revisions: Revision[]
}

// ---------------------------------------------------------------------------
// 指纹与 id
// ---------------------------------------------------------------------------

/** 轮廓指纹：坐标规范化到 1e-9 mm 后取 SHA-256 */
export function hashOutlines(o: { gear1: Pt[]; gear2: Pt[] }): string {
  const flat = (pts: Pt[]) => pts.map((p) => [canonNum(p.x), canonNum(p.y)])
  return 'sha256:' + sha256Hex(stableStringify([flat(o.gear1), flat(o.gear2)]))
}

/** 检查摘要中参与指纹的部分（去掉时间戳；浮点规范化） */
function checkIdContent(check: CheckSummary): unknown {
  const i = check.interference
  return {
    centerDistance: canonNum(check.centerDistance),
    standardCenter: canonNum(check.standardCenter),
    alphaPrimeDeg: canonNum(check.alphaPrimeDeg),
    contactRatio: canonNum(check.contactRatio),
    backlashTangential: canonNum(check.backlashTangential),
    clearanceMin: canonNum(check.clearanceMin),
    basePitchMatch: check.basePitchMatch,
    undercut: check.undercut,
    warnings: check.warnings,
    interference: i
      ? {
          phi1: canonNum(i.phi1),
          contactS: canonNum(i.contactS),
          area: canonNum(i.area),
          regions: i.regions.map((r) => r.map((p) => [canonNum(p.x), canonNum(p.y)]))
        }
      : null
  }
}

/** 参与修订 id 的内容（不含 createdAt / migratedFrom 等元数据） */
function revisionIdContent(rev: Omit<Revision, 'id'>): unknown {
  return {
    v: 2,
    caseId: rev.caseId, // 修订唯一隶属于一个案例：同内容在不同案例是不同修订
    parents: [...rev.parentIds].sort(),
    note: rev.note,
    params: rev.params,
    outlineHash: rev.outlineHash,
    check: rev.check ? checkIdContent(rev.check) : null
  }
}

/** 由内容计算修订 id */
export function computeRevisionId(rev: Omit<Revision, 'id'>): string {
  return 'rev-' + sha256Hex(stableStringify(revisionIdContent(rev)))
}

/**
 * 两个修订的"身份内容"是否一致（即指纹覆盖的部分：案例/父链/参数/备注/轮廓指纹/检查摘要）。
 * createdAt、migratedFrom 等元数据不影响身份。
 */
export function sameRevisionContent(a: Revision, b: Revision): boolean {
  return stableStringify(revisionIdContent(a)) === stableStringify(revisionIdContent(b))
}

// ---------------------------------------------------------------------------
// 构造与校验
// ---------------------------------------------------------------------------

export function buildRevision(input: {
  caseId: string
  parentIds: string[]
  note: string
  params: ParamsSnapshot
  outlines: { gear1: Pt[]; gear2: Pt[] }
  check: CheckSummary | null
  createdAt?: number
  migratedFrom?: number
}): Revision {
  const base: Omit<Revision, 'id'> = {
    schemaVersion: 2,
    caseId: input.caseId,
    parentIds: [...new Set(input.parentIds)].sort(),
    createdAt: input.createdAt ?? Date.now(),
    note: input.note ?? '',
    params: structuredClone(input.params),
    outlines: input.outlines,
    outlineHash: hashOutlines(input.outlines),
    check: input.check ? structuredClone(input.check) : null,
    migratedFrom: input.migratedFrom
  }
  return { ...base, id: computeRevisionId(base) }
}

/** 结构校验：返回错误信息列表（空数组 = 通过） */
export function validateRevisionShape(rev: unknown): string[] {
  const errs: string[] = []
  const r = rev as Revision
  if (!r || typeof r !== 'object') return ['修订不是对象']
  if (r.schemaVersion !== 2) errs.push('schemaVersion 必须为 2')
  if (typeof r.caseId !== 'string' || !r.caseId) errs.push('缺少 caseId')
  if (!Array.isArray(r.parentIds) || r.parentIds.some((p) => typeof p !== 'string'))
    errs.push('parentIds 必须是字符串数组')
  if (typeof r.note !== 'string') errs.push('缺少备注字段 note')
  const p = r.params
  if (!p || typeof p !== 'object') errs.push('缺少参数快照 params')
  else {
    for (const [label, g] of [
      ['gear1', p.gear1],
      ['gear2', p.gear2]
    ] as const) {
      if (!g || typeof g !== 'object') {
        errs.push(`缺少 ${label} 参数`)
        continue
      }
      if (!(g.z >= 4) || Math.abs(g.z - Math.round(g.z)) > 1e-9) errs.push(`${label}.z 必须为 ≥4 的整数`)
      if (!(g.module > 0)) errs.push(`${label}.module 必须 > 0`)
      if (!(g.alphaDeg > 0 && g.alphaDeg < 90)) errs.push(`${label}.alphaDeg 必须在 (0,90) 内`)
      if (!(g.faceWidth > 0)) errs.push(`${label}.faceWidth 必须 > 0`)
    }
    if (!(p.centerDistance === null || (typeof p.centerDistance === 'number' && p.centerDistance > 0)))
      errs.push('centerDistance 必须为 null 或正数')
  }
  const o = r.outlines
  const validPts = (pts: unknown): pts is Pt[] =>
    Array.isArray(pts) &&
    pts.length >= 3 &&
    pts.every((q) => q && Number.isFinite(q.x) && Number.isFinite(q.y))
  if (!o || !validPts(o.gear1) || !validPts(o.gear2)) errs.push('轮廓缺失或点数据非法（修订必须包含完整轮廓）')
  if (typeof r.outlineHash !== 'string' || !r.outlineHash.startsWith('sha256:')) errs.push('缺少轮廓指纹')
  return errs
}

/**
 * 完整性校验：轮廓指纹与轮廓一致，且修订 id 与内容一致。
 * 用于写入前自检与导入校验——指纹对不上就绝不能按该 id 入库。
 */
export function verifyRevision(rev: Revision): { ok: true } | { ok: false; reason: string } {
  const shapeErrs = validateRevisionShape(rev)
  if (shapeErrs.length) return { ok: false, reason: shapeErrs.join('；') }
  const oh = hashOutlines(rev.outlines)
  if (oh !== rev.outlineHash) return { ok: false, reason: '轮廓指纹与轮廓数据不一致' }
  const id = computeRevisionId(rev)
  if (id !== rev.id) return { ok: false, reason: `修订 id 与内容不符（声称 ${rev.id.slice(0, 16)}…，实为 ${id.slice(0, 16)}…）` }
  return { ok: true }
}

// ---------------------------------------------------------------------------
// 分支（头计算）
// ---------------------------------------------------------------------------

/**
 * 由案例的全部修订计算叶节点（头）：没有任何其他修订以它为父的修订。
 * 同一父的多个后继会全部保留为并列头（分支），绝不按最后写入者丢弃。
 */
export function computeHeads(revisions: Revision[]): string[] {
  const parented = new Set<string>()
  for (const r of revisions) for (const p of r.parentIds) parented.add(p)
  const ids = revisions.map((r) => r.id).filter((id) => !parented.has(id))
  return [...new Set(ids)].sort()
}

/** 导出时按父先子后的拓扑序排列（便于阅读与导入） */
export function topoSortRevisions(revisions: Revision[]): Revision[] {
  const byId = new Map(revisions.map((r) => [r.id, r]))
  const done = new Set<string>()
  const out: Revision[] = []
  let rest = [...revisions]
  while (rest.length) {
    const ready = rest.filter((r) => r.parentIds.every((p) => !byId.has(p) || done.has(p)))
    if (!ready.length) {
      out.push(...rest) // 有环（损坏数据）——按原序附加，不丢数据
      break
    }
    ready.sort((a, b) => a.createdAt - b.createdAt)
    for (const r of ready) {
      out.push(r)
      done.add(r.id)
    }
    rest = rest.filter((r) => !done.has(r.id))
  }
  return out
}

// ---------------------------------------------------------------------------
// 参数 ↔ 几何
// ---------------------------------------------------------------------------

export function paramsToGearInput(g: GearParamsSnapshot): GearInput {
  return { z: Math.round(g.z), module: g.module, alpha: g.alpha, faceWidth: g.faceWidth }
}

/** 由参数快照重建轮廓（用于旧格式/仅参数导入时补全修订几何） */
export function rebuildOutlinesFromParams(params: ParamsSnapshot): { gear1: Pt[]; gear2: Pt[] } {
  const g1 = buildGear(paramsToGearInput(params.gear1))
  const g2 = buildGear(paramsToGearInput(params.gear2))
  return { gear1: g1.outline, gear2: g2.outline }
}

// ---------------------------------------------------------------------------
// v1 迁移
// ---------------------------------------------------------------------------

/**
 * 旧版（schemaVersion=1）单案例 → v2 案例元数据 + 根修订。
 * 旧案例若没有附带轮廓，则由参数重建（保证迁移后的修订几何完整）。
 */
export function migrateV1CaseData(old: LegacyCaseDataV1): { meta: CaseMeta; revision: Revision } {
  const params: ParamsSnapshot = {
    gear1: { ...old.gear1 },
    gear2: { ...old.gear2 },
    centerDistance: old.centerDistance ?? null
  }
  const outlines = old.outlines ?? rebuildOutlinesFromParams(params)
  const revision = buildRevision({
    caseId: old.id,
    parentIds: [],
    note: old.note ?? '',
    params,
    outlines,
    check: null,
    createdAt: old.createdAt || Date.now(),
    migratedFrom: 1
  })
  const meta: CaseMeta = {
    id: old.id,
    name: old.name || '未命名案例',
    unit: old.unit || 'mm',
    createdAt: old.createdAt || Date.now(),
    updatedAt: old.updatedAt || Date.now(),
    headIds: [revision.id]
  }
  return { meta, revision }
}

// ---------------------------------------------------------------------------
// 导出 / 导入（纯函数部分；IndexedDB 落库见 store.ts）
// ---------------------------------------------------------------------------

export function serializeExport(
  caseInfo: { id: string; name: string; unit: LengthUnit },
  revisions: Revision[]
): string {
  const payload: CaseExport = {
    schemaVersion: 2,
    kind: EXPORT_KIND,
    exportedAt: Date.now(),
    case: { id: caseInfo.id, name: caseInfo.name, unit: caseInfo.unit },
    revisions: topoSortRevisions(revisions)
  }
  return JSON.stringify(payload, null, 2)
}

export interface NormalizedImport {
  ok: true
  caseInfo: { id: string; name: string; unit: LengthUnit }
  /** 通过校验、可入库的修订（id 已按内容校正） */
  revisions: Revision[]
  /** 内容相同无需入库（文件内重复） */
  duplicates: string[]
  /** 需要记录的冲突（如 id 与内容不符） */
  conflicts: ConflictRecord[]
  migratedFromV1: boolean
  /** 轮廓由参数重建的修订数 */
  rebuiltOutlines: number
}

export interface RejectedImport {
  ok: false
  error: string
  /** 拒绝原因也应留痕（如轮廓指纹不符），调用方可选择落库 */
  conflict?: ConflictRecord
}

export type ImportNormalization = NormalizedImport | RejectedImport

const VALID_UNITS: LengthUnit[] = ['mm', 'cm', 'm', 'in']

/** 清洗导入文件中的检查摘要：只保留类型正确的已知字段（防止损坏文件带坏 UI） */
function sanitizeCheck(raw: unknown): CheckSummary | null {
  if (!raw || typeof raw !== 'object') return null
  const c = raw as Partial<CheckSummary>
  const num = (v: unknown): number => (typeof v === 'number' && Number.isFinite(v) ? v : 0)
  const validPts = (pts: unknown): pts is Pt[] =>
    Array.isArray(pts) && pts.every((q) => q && Number.isFinite(q.x) && Number.isFinite(q.y))
  let interference: InterferenceSummary | null = null
  const i = c.interference
  if (i && typeof i === 'object' && Number.isFinite(i.area)) {
    interference = {
      phi1: num(i.phi1),
      contactS: num(i.contactS),
      area: num(i.area),
      regions: Array.isArray(i.regions) ? i.regions.filter(validPts) : []
    }
  }
  return {
    checkedAt: num(c.checkedAt),
    centerDistance: num(c.centerDistance),
    standardCenter: num(c.standardCenter),
    alphaPrimeDeg: num(c.alphaPrimeDeg),
    contactRatio: num(c.contactRatio),
    backlashTangential: num(c.backlashTangential),
    clearanceMin: num(c.clearanceMin),
    basePitchMatch: c.basePitchMatch === true,
    undercut: Array.isArray(c.undercut) ? [c.undercut[0] === true, c.undercut[1] === true] : [false, false],
    warnings: Array.isArray(c.warnings) ? c.warnings.filter((w) => typeof w === 'string') : [],
    interference
  }
}

function normalizeOneRevision(
  raw: unknown,
  caseId: string,
  conflicts: ConflictRecord[]
): { revision?: Revision; error?: string; rebuilt: boolean } {
  const r = raw as Revision
  if (!r || typeof r !== 'object') return { error: '修订不是对象', rebuilt: false }
  const params = r.params as ParamsSnapshot | undefined
  if (!params || typeof params !== 'object') return { error: '修订缺少参数快照', rebuilt: false }

  // 轮廓：缺失时由参数重建补全（但文件若已带有轮廓指纹，则内容自相矛盾，拒绝）；
  // 存在则必须与声明的指纹一致
  let outlines = r.outlines
  let rebuilt = false
  const hasOutlines =
    outlines && Array.isArray(outlines.gear1) && Array.isArray(outlines.gear2)
  if (!hasOutlines) {
    if (typeof r.outlineHash === 'string' && r.outlineHash.startsWith('sha256:')) {
      return { error: '轮廓缺失但文件带有轮廓指纹（内容不一致，可能已损坏或被截断）', rebuilt: false }
    }
    try {
      outlines = rebuildOutlinesFromParams(params)
      rebuilt = true
    } catch (e) {
      return { error: `轮廓缺失且无法由参数重建：${(e as Error).message}`, rebuilt: false }
    }
  }

  const candidate: Revision = {
    schemaVersion: 2,
    id: String(r.id ?? ''),
    caseId,
    parentIds: Array.isArray(r.parentIds) ? r.parentIds.filter((p) => typeof p === 'string') : [],
    createdAt: Number.isFinite(r.createdAt) ? r.createdAt : Date.now(),
    note: typeof r.note === 'string' ? r.note : '',
    params,
    outlines,
    outlineHash: hasOutlines ? String(r.outlineHash ?? '') : hashOutlines(outlines),
    check: sanitizeCheck(r.check),
    migratedFrom: r.migratedFrom === 1 ? 1 : undefined
  }

  const shapeErrs = validateRevisionShape(candidate)
  if (shapeErrs.length) return { error: shapeErrs.join('；'), rebuilt }

  // 轮廓指纹必须与轮廓一致——不一致的文件视为损坏/被篡改，整体拒绝
  const actualOutlineHash = hashOutlines(candidate.outlines)
  if (actualOutlineHash !== candidate.outlineHash) {
    return {
      error: `轮廓指纹与轮廓数据不一致（文件可能已损坏或被篡改）`,
      rebuilt
    }
  }

  // 修订 id 必须与内容一致——不一致不拒绝，但绝不能按声称的 id 冒充：
  // 按真实指纹校正 id 并记录冲突
  const trueId = computeRevisionId(candidate)
  if (candidate.id !== trueId) {
    conflicts.push({
      type: 'id-mismatch',
      caseId,
      claimedId: candidate.id || '(缺失)',
      actualId: trueId,
      detail: `导入文件声称修订 ${candidate.id.slice(0, 18)}…，但其内容指纹为 ${trueId.slice(0, 18)}…；已按真实指纹保存，不会覆盖同 id 的既有修订`,
      detectedAt: Date.now(),
      resolved: false
    })
    candidate.id = trueId
  }
  return { revision: candidate, rebuilt }
}

/**
 * 解析并规范化导入文本（v1 单案例 JSON 或 v2 导出信封）。
 * 纯函数：不触碰存储；要么全部通过，要么整体拒绝（不会产出半个案例）。
 */
export function normalizeImport(text: string): ImportNormalization {
  let obj: unknown
  try {
    obj = JSON.parse(text)
  } catch {
    return { ok: false, error: '不是合法的 JSON 文件' }
  }
  if (!obj || typeof obj !== 'object') return { ok: false, error: '文件内容不是对象' }
  const root = obj as Record<string, unknown>

  // ---- v1 旧格式：单案例对象 → 迁移为根修订 ----
  if (root.schemaVersion === 1) {
    try {
      const { meta, revision } = migrateV1CaseData(root as unknown as LegacyCaseDataV1)
      const errs = validateRevisionShape(revision)
      if (errs.length) return { ok: false, error: '旧案例迁移后校验失败：' + errs.join('；') }
      return {
        ok: true,
        caseInfo: { id: meta.id, name: meta.name, unit: meta.unit },
        revisions: [revision],
        duplicates: [],
        conflicts: [],
        migratedFromV1: true,
        rebuiltOutlines: (root.outlines ? 0 : 1) as number
      }
    } catch (e) {
      return { ok: false, error: '旧版案例迁移失败：' + (e as Error).message }
    }
  }

  // ---- v2 导出信封 ----
  if (root.schemaVersion === 2 && root.kind === EXPORT_KIND) {
    const caseRaw = (root.case ?? {}) as { id?: unknown; name?: unknown; unit?: unknown }
    const caseId = typeof caseRaw.id === 'string' && caseRaw.id ? caseRaw.id : `case-import-${Date.now().toString(36)}`
    const caseInfo = {
      id: caseId,
      name: typeof caseRaw.name === 'string' && caseRaw.name ? caseRaw.name : '导入的案例',
      unit: (VALID_UNITS.includes(caseRaw.unit as LengthUnit) ? caseRaw.unit : 'mm') as LengthUnit
    }
    const rawRevisions = root.revisions
    if (!Array.isArray(rawRevisions) || !rawRevisions.length) {
      return { ok: false, error: '导出文件不包含任何修订' }
    }
    const conflicts: ConflictRecord[] = []
    const revisions: Revision[] = []
    const duplicates: string[] = []
    const seen = new Set<string>()
    let rebuiltOutlines = 0
    for (const raw of rawRevisions) {
      const { revision, error, rebuilt } = normalizeOneRevision(raw, caseId, conflicts)
      if (error || !revision) {
        // 任一修订损坏 → 整体拒绝，绝不留下半个案例
        const claimed = (raw as Revision)?.id
        return {
          ok: false,
          error: `修订 ${typeof claimed === 'string' ? claimed.slice(0, 18) : '?'} 校验失败：${error}`,
          conflict: {
            type: 'hash-mismatch',
            caseId,
            claimedId: typeof claimed === 'string' ? claimed : '(未知)',
            actualId: '',
            detail: `导入被拒绝：${error}。文件未写入任何内容`,
            detectedAt: Date.now(),
            resolved: false
          }
        }
      }
      if (rebuilt) rebuiltOutlines++
      if (seen.has(revision.id)) {
        duplicates.push(revision.id)
        continue
      }
      seen.add(revision.id)
      revisions.push(revision)
    }
    return {
      ok: true,
      caseInfo,
      revisions,
      duplicates,
      conflicts,
      migratedFromV1: false,
      rebuiltOutlines
    }
  }

  return { ok: false, error: `不支持的文件格式（需要 schemaVersion 1 旧案例或 ${SCHEMA_VERSION} 导出文件）` }
}
