/**
 * 持久化层（IndexedDB）：不可变修订 + 案例元数据 + 冲突记录。
 *
 *  - DB 版本 2：cases（案例元数据）、revisions（不可变修订，caseId 索引）、conflicts（冲突记录）；
 *  - 从版本 1 自动迁移：旧单案例记录 → 案例元数据 + 根修订（缺轮廓时由参数重建补全）；
 *  - 每次"保存修订"在【同一个事务】内写入修订并更新案例头指针：
 *    要么全部成功，要么整体回滚——不会留下只有元数据、缺轮廓的损坏修订；
 *  - 并发（多标签页/导入）基于同一父修订产生的不同后继全部保留为并列分支头，
 *    绝不按最后写入者静默覆盖；
 *  - 内容寻址 id：重复导入同一修订自动去重；id 与内容不符的导入进入冲突记录。
 */
import type { Pt } from './geometry/gear'
import type { LengthUnit } from './units'
import {
  buildRevision,
  computeHeads,
  migrateV1CaseData,
  normalizeImport,
  sameRevisionContent,
  verifyRevision,
  type CaseMeta,
  type CheckSummary,
  type ConflictRecord,
  type LegacyCaseDataV1,
  type ParamsSnapshot,
  type Revision
} from './revisions'

export const DB_NAME = 'spur-gear-lab'
export const DB_VERSION = 2
export const STORE_CASES = 'cases'
export const STORE_REVISIONS = 'revisions'
export const STORE_CONFLICTS = 'conflicts'

let dbPromise: Promise<IDBDatabase> | null = null

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = (ev) => {
      const db = req.result
      const oldVersion = ev.oldVersion
      const tx = req.transaction!
      if (oldVersion < 1) {
        const cases = db.createObjectStore(STORE_CASES, { keyPath: 'id' })
        cases.createIndex('updatedAt', 'updatedAt')
      }
      if (oldVersion < 2) {
        const revisions = db.createObjectStore(STORE_REVISIONS, { keyPath: 'id' })
        revisions.createIndex('caseId', 'caseId')
        db.createObjectStore(STORE_CONFLICTS, { keyPath: 'id', autoIncrement: true })
        if (oldVersion === 1) {
          // 迁移 v1 单案例记录 → 案例元数据 + 根修订（同一升级事务内完成）
          const casesStore = tx.objectStore(STORE_CASES)
          const getAll = casesStore.getAll()
          getAll.onsuccess = () => {
            for (const old of getAll.result as LegacyCaseDataV1[]) {
              if (!old || old.schemaVersion !== 1) continue
              try {
                const { meta, revision } = migrateV1CaseData(old)
                casesStore.put(meta)
                tx.objectStore(STORE_REVISIONS).put(revision)
              } catch (e) {
                console.error('旧案例迁移失败（保留原记录）', old.id, e)
              }
            }
          }
        }
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbPromise
}

/** 测试专用：关闭并丢弃缓存的连接 */
export async function __resetStoreForTests() {
  if (dbPromise) {
    const p = dbPromise
    dbPromise = null
    try {
      ;(await p).close()
    } catch {
      /* 忽略 */
    }
  }
}

function idbReq<T>(r: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    r.onsuccess = () => resolve(r.result)
    r.onerror = () => reject(r.error)
  })
}

/**
 * 在单个事务内执行 fn；fn 抛错则中止事务（整体回滚）。
 * fn 内只允许 await IndexedDB 请求（事务在微任务内保持存活）。
 */
async function inTx<T>(stores: string[], mode: IDBTransactionMode, fn: (tx: IDBTransaction) => Promise<T>): Promise<T> {
  const db = await openDb()
  const tx = db.transaction(stores, mode)
  const done = new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error ?? new Error('事务失败'))
    tx.onabort = () => reject(tx.error ?? new Error('事务被中止'))
  })
  let result: T
  try {
    result = await fn(tx)
  } catch (e) {
    try {
      tx.abort()
    } catch {
      /* 事务可能已结束 */
    }
    done.catch(() => {})
    throw e
  }
  await done
  return result
}

// ---------------------------------------------------------------------------
// 读取
// ---------------------------------------------------------------------------

export async function getCaseMeta(id: string): Promise<CaseMeta | undefined> {
  return inTx([STORE_CASES], 'readonly', (tx) => idbReq(tx.objectStore(STORE_CASES).get(id)))
}

export async function getRevision(id: string): Promise<Revision | undefined> {
  return inTx([STORE_REVISIONS], 'readonly', (tx) => idbReq(tx.objectStore(STORE_REVISIONS).get(id)))
}

export async function listRevisions(caseId: string): Promise<Revision[]> {
  const all = await inTx([STORE_REVISIONS], 'readonly', (tx) =>
    idbReq(tx.objectStore(STORE_REVISIONS).index('caseId').getAll(caseId)) as Promise<Revision[]>
  )
  return all.sort((a, b) => a.createdAt - b.createdAt || a.id.localeCompare(b.id))
}

export interface CaseWithHeads {
  meta: CaseMeta
  heads: Revision[]
  revisionCount: number
}

export async function listCasesWithHeads(): Promise<CaseWithHeads[]> {
  return inTx([STORE_CASES, STORE_REVISIONS], 'readonly', async (tx) => {
    const metas = (await idbReq(tx.objectStore(STORE_CASES).getAll())) as CaseMeta[]
    const revisions = (await idbReq(tx.objectStore(STORE_REVISIONS).getAll())) as Revision[]
    const byCase = new Map<string, Revision[]>()
    for (const r of revisions) {
      const arr = byCase.get(r.caseId) ?? []
      arr.push(r)
      byCase.set(r.caseId, arr)
    }
    return metas
      .map((rawMeta) => {
        // 防御：迁移失败的旧记录可能没有 headIds
        const meta: CaseMeta = { ...rawMeta, headIds: Array.isArray(rawMeta.headIds) ? rawMeta.headIds : [] }
        const all = byCase.get(meta.id) ?? []
        const byId = new Map(all.map((r) => [r.id, r]))
        const heads = meta.headIds
          .map((id) => byId.get(id))
          .filter((r): r is Revision => !!r)
          .sort((a, b) => a.createdAt - b.createdAt) // 末位为最新头
        return { meta, heads, revisionCount: all.length }
      })
      .sort((a, b) => b.meta.updatedAt - a.meta.updatedAt)
  })
}

export async function listConflicts(): Promise<ConflictRecord[]> {
  const all = await inTx([STORE_CONFLICTS], 'readonly', (tx) =>
    idbReq(tx.objectStore(STORE_CONFLICTS).getAll()) as Promise<ConflictRecord[]>
  )
  return all.sort((a, b) => b.detectedAt - a.detectedAt)
}

export async function clearConflict(id: number): Promise<void> {
  await inTx([STORE_CONFLICTS], 'readwrite', (tx) => idbReq(tx.objectStore(STORE_CONFLICTS).delete(id)))
}

async function addConflict(c: ConflictRecord): Promise<void> {
  await inTx([STORE_CONFLICTS], 'readwrite', (tx) => idbReq(tx.objectStore(STORE_CONFLICTS).add(c)))
}

// ---------------------------------------------------------------------------
// 写入（保存 / 合并 / 导入 / 删除）
// ---------------------------------------------------------------------------

export interface SaveRevisionInput {
  /** null = 新建案例 */
  caseId: string | null
  caseName: string
  unit: LengthUnit
  /** 父修订（通常为当前载入的修订；根修订为 []） */
  parentIds: string[]
  note: string
  params: ParamsSnapshot
  outlines: { gear1: Pt[]; gear2: Pt[] }
  check: CheckSummary | null
}

export interface SaveRevisionResult {
  revision: Revision
  caseId: string
  /** false = 内容与已有修订完全相同（未新建） */
  created: boolean
  heads: string[]
  /** 保存后案例存在多个头（并行分支） */
  branched: boolean
}

export function newCaseId(): string {
  return `case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/**
 * 提交一个已构造的修订：单事务内完成 修订写入 + 案例头指针更新。
 * 完整性校验失败或 id 冲突（同 id 不同内容）会中止事务，不留任何写入。
 */
async function commitRevision(
  rev: Revision,
  metaInput: { caseName?: string; unit?: LengthUnit }
): Promise<SaveRevisionResult> {
  const v = verifyRevision(rev)
  if (!v.ok) throw new Error('修订完整性校验失败：' + v.reason)
  return inTx([STORE_CASES, STORE_REVISIONS], 'readwrite', async (tx) => {
    const revStore = tx.objectStore(STORE_REVISIONS)
    const caseStore = tx.objectStore(STORE_CASES)

    let created = true
    const existing = (await idbReq(revStore.get(rev.id))) as Revision | undefined
    if (existing) {
      // 同 id 必须同"身份内容"（防哈希碰撞/数据损坏）；
      // 一致则是幂等重复保存——保留先写入的记录（时间戳等元数据不覆盖）
      if (!sameRevisionContent(existing, rev)) {
        throw new Error(`修订 id 冲突：${rev.id.slice(0, 18)}… 已存在但内容不同，拒绝覆盖`)
      }
      created = false
    } else {
      revStore.put(rev)
    }

    // 头指针由案例全部修订重算（同事务内能看到刚写入的修订）：
    // 基于同一父的并发后继都会保留为并列头
    const all = (await idbReq(revStore.index('caseId').getAll(rev.caseId))) as Revision[]
    const heads = computeHeads(all)
    const oldMeta = (await idbReq(caseStore.get(rev.caseId))) as CaseMeta | undefined
    const meta: CaseMeta = {
      id: rev.caseId,
      name: metaInput.caseName ?? oldMeta?.name ?? '未命名案例',
      unit: metaInput.unit ?? oldMeta?.unit ?? 'mm',
      createdAt: oldMeta?.createdAt ?? Date.now(),
      updatedAt: Date.now(),
      headIds: heads
    }
    caseStore.put(meta)
    return { revision: rev, caseId: rev.caseId, created, heads, branched: heads.length > 1 }
  })
}

/** 保存当前工作状态为新修订（不可变；父修订永不被修改） */
export async function saveRevision(input: SaveRevisionInput): Promise<SaveRevisionResult> {
  const caseId = input.caseId ?? newCaseId()
  const rev = buildRevision({
    caseId,
    parentIds: input.parentIds, // 父指针由调用方决定；可指向其他案例的修订（分叉）
    note: input.note,
    params: input.params,
    outlines: input.outlines,
    check: input.check
  })
  return commitRevision(rev, { caseName: input.caseName, unit: input.unit })
}

/**
 * 合并案例的并行分支头：以 baseRevision 的内容为基础，生成一个
 * 以所有当前头为父的新修订，头指针随之收敛为单个。
 */
export async function mergeHeads(caseId: string, baseRevisionId: string, note: string): Promise<SaveRevisionResult> {
  const meta = await getCaseMeta(caseId)
  if (!meta) throw new Error('案例不存在')
  if (meta.headIds.length < 2) throw new Error('当前没有并行分支需要合并')
  const base = await getRevision(baseRevisionId)
  if (!base) throw new Error('基础修订不存在')
  const rev = buildRevision({
    caseId,
    parentIds: [...meta.headIds].sort(),
    note: note || `合并 ${meta.headIds.length} 个分支（基于 ${baseRevisionId.slice(0, 12)}…）`,
    params: base.params,
    outlines: base.outlines,
    check: base.check
  })
  return commitRevision(rev, {})
}

export interface ImportReport {
  ok: boolean
  error?: string
  caseId?: string
  /** 新入库的修订 id */
  stored: string[]
  /** 内容相同被去重的修订 id */
  duplicates: string[]
  /** 检测到的冲突（已写入冲突记录） */
  conflicts: ConflictRecord[]
  heads?: string[]
  migratedFromV1?: boolean
  rebuiltOutlines?: number
}

/**
 * 导入 JSON（v1 旧案例或 v2 导出文件）。
 * 全部修订 + 冲突记录 + 案例元数据在【一个事务】内写入：
 * 文件损坏/校验失败 → 整体不写入（只留冲突记录），不会留下半个案例。
 */
export async function importCase(text: string): Promise<ImportReport> {
  const norm = normalizeImport(text)
  if (!norm.ok) {
    if (norm.conflict) {
      try {
        await addConflict(norm.conflict)
      } catch {
        /* 冲突记录失败不影响主流程 */
      }
    }
    return {
      ok: false,
      error: norm.error,
      stored: [],
      duplicates: [],
      conflicts: norm.conflict ? [norm.conflict] : []
    }
  }
  return inTx([STORE_CASES, STORE_REVISIONS, STORE_CONFLICTS], 'readwrite', async (tx) => {
    const revStore = tx.objectStore(STORE_REVISIONS)
    const caseStore = tx.objectStore(STORE_CASES)
    const conflictStore = tx.objectStore(STORE_CONFLICTS)

    const stored: string[] = []
    const duplicates: string[] = [...norm.duplicates]
    for (const rev of norm.revisions) {
      const existing = (await idbReq(revStore.get(rev.id))) as Revision | undefined
      if (existing) {
        // 库中同 id 记录必须同身份内容，否则说明数据损坏，整体中止
        if (!sameRevisionContent(existing, rev)) {
          throw new Error(`库中已存在 id 相同但内容不同的修订 ${rev.id.slice(0, 18)}…，导入中止`)
        }
        duplicates.push(rev.id) // 重复导入同一修订：不产生副本
        continue
      }
      const v = verifyRevision(rev)
      if (!v.ok) throw new Error('修订完整性校验失败：' + v.reason)
      revStore.put(rev)
      stored.push(rev.id)
    }
    for (const c of norm.conflicts) conflictStore.add(c)

    const caseId = norm.caseInfo.id
    const all = (await idbReq(revStore.index('caseId').getAll(caseId))) as Revision[]
    const heads = computeHeads(all)
    const oldMeta = (await idbReq(caseStore.get(caseId))) as CaseMeta | undefined
    const meta: CaseMeta = {
      id: caseId,
      name: oldMeta?.name ?? norm.caseInfo.name,
      unit: oldMeta?.unit ?? norm.caseInfo.unit,
      createdAt: oldMeta?.createdAt ?? Date.now(),
      updatedAt: Date.now(),
      headIds: heads
    }
    caseStore.put(meta)

    const report: ImportReport = {
      ok: true,
      caseId,
      stored,
      duplicates,
      conflicts: norm.conflicts,
      heads,
      migratedFromV1: norm.migratedFromV1,
      rebuiltOutlines: norm.rebuiltOutlines
    }
    return report
  })
}

/** 删除案例及其全部修订（单事务） */
export async function deleteCaseDeep(caseId: string): Promise<void> {
  await inTx([STORE_CASES, STORE_REVISIONS], 'readwrite', async (tx) => {
    const revStore = tx.objectStore(STORE_REVISIONS)
    const ids = (await idbReq(revStore.index('caseId').getAllKeys(caseId))) as string[]
    for (const id of ids) revStore.delete(id)
    tx.objectStore(STORE_CASES).delete(caseId)
  })
}

/** 触发浏览器下载 */
export function downloadJson(text: string, name: string) {
  const blob = new Blob([text], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const safe = (name || 'gear-case').replace(/[^\w一-龥-]+/g, '_')
  a.download = `${safe}.json`
  a.click()
  URL.revokeObjectURL(url)
}
