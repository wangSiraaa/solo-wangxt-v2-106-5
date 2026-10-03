/**
 * 持久化层：不可变"设计修订与合并"工作流。
 *
 * IndexedDB（DB 版本 2，schemaVersion=2）：
 *   revisions  keyPath = digest    不可变修订内容（以内容指纹为主键）
 *   outlines   keyPath = digest    随修订携带的轮廓负载（{digest, gear1, gear2}）
 *   projects   keyPath = id        项目（实验线）元数据
 *   quarantine keyPath = digest    校验未通过的可疑记录（永不冒充正常修订）
 *   cases      （旧 DB v1 遗留，升级后保留不动）
 *
 * 关键保证：
 *  1. 修订以 digest 内容寻址 —— 重复写入/导入同一修订是幂等 no-op；
 *  2. revId 相同但 digest 不同的两条修订都会落库（双胞胎），永不互相覆盖；
 *     读取时检出并以 conflicts 标记展示，绝不"最后写入者静默丢失"；
 *  3. revision 与轮廓在【同一个 readwrite 事务】内提交：写入中断只会整体不存在，
 *     不会留下"只有元数据没有轮廓"的半条修订；
 *  4. 打开旧 DB（v1）时在 onupgradeneeded 中同步把每个旧案例迁移为
 *     项目 + 根修订（迁移代码无 await）；
 *  5. 两个标签页（或两次导入）基于同一父版各自保存时，二者 head 并列，
 *     图算法识别为分叉（branch），UI 可比较两版并从任一版继续实验。
 */
import {
  REVISION_SCHEMA_VERSION,
  makeRevision,
  verifyRevision,
  migrateV1Case,
  expectedOutlines,
  contentKey,
  type OutlinePayload,
  type Revision,
  type RevisionParams
} from './revision-model'
import { fingerprintText } from './hash'

export const SCHEMA_VERSION = REVISION_SCHEMA_VERSION // JSON 文件 schema（=2）
export const DB_NAME = 'spur-gear-lab'
/**
 * IndexedDB 结构版本（独立于 JSON schemaVersion 演进）：
 *  v1：旧版单案例 cases 存储；
 *  v2：revisions/outlines/projects/quarantine + 旧案例迁移；
 *  v3：revisions 增加 contentKey 索引（重复保存去重），并回填旧修订。
 */
export const DB_VERSION = 3
const STORE = 'cases' // 旧版 v1 遗留存储名（升级迁移用）
const REV_STORE = 'revisions'
const OUT_STORE = 'outlines'
const PROJ_STORE = 'projects'
const QUAR_STORE = 'quarantine'

// ---------------------------------------------------------------- 项目（实验线）

export interface ProjectMeta {
  id: string
  name: string
  createdAt: number
  updatedAt: number
  /** 分叉来源项目（fork 出新实验线时记录） */
  forkedFromProjectId?: string
  forkedFromDigest?: string
}

export interface QuarantineEntry {
  digest: string
  reason: string
  receivedAt: number
  raw: unknown
}

// ---------------------------------------------------------------- DB 打开 / 迁移

let dbPromise: Promise<IDBDatabase> | null = null

/** 仅供测试：关闭并遗忘当前连接（配合 indexedDB.deleteDatabase 重置环境） */
export async function _resetDbConnectionForTests(): Promise<void> {
  if (dbPromise) {
    try {
      ;(await dbPromise).close()
    } catch {
      /* 忽略 */
    }
  }
  dbPromise = null
}

export function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = (ev) => {
      const db = req.result
      if (!db.objectStoreNames.contains(REV_STORE)) {
        const rs = db.createObjectStore(REV_STORE, { keyPath: 'digest' })
        rs.createIndex('projectId', 'projectId')
        rs.createIndex('parentDigest', 'parentDigest')
        rs.createIndex('revId', 'revId') // 非唯一：双胞胎必须允许共存
        rs.createIndex('contentKey', 'contentKey') // 非唯一：重复保存去重
      }
      if (!db.objectStoreNames.contains(OUT_STORE)) {
        db.createObjectStore(OUT_STORE, { keyPath: 'digest' })
      }
      if (!db.objectStoreNames.contains(PROJ_STORE)) {
        const ps = db.createObjectStore(PROJ_STORE, { keyPath: 'id' })
        ps.createIndex('updatedAt', 'updatedAt')
      }
      if (!db.objectStoreNames.contains(QUAR_STORE)) {
        db.createObjectStore(QUAR_STORE, { keyPath: 'digest' })
      }
      // DB v2 → v3：给既有 revisions 补 contentKey 索引与字段（JSON schema 仍是 2）
      if (ev.oldVersion >= 2 && ev.oldVersion < 3) {
        const rs = req.transaction!.objectStore(REV_STORE)
        if (!rs.indexNames.contains('contentKey')) rs.createIndex('contentKey', 'contentKey')
        backfillContentKey(req.transaction!)
      }
      // 旧版 v1 → v2：同事务内同步迁移（onupgradeneeded 不允许 await）
      if (ev.oldVersion < 2 && db.objectStoreNames.contains(STORE)) {
        migrateLegacyStore(req.transaction!)
      }
    }
    req.onsuccess = () => {
      const db = req.result
      // 其他标签页把 DB 升到更新版本时，本连接会被关闭；丢弃缓存以便重开
      db.onversionchange = () => db.close()
      resolve(db)
    }
    req.onerror = () => reject(req.error)
    req.onblocked = () =>
      reject(new Error('数据库被其他标签页占用，请关闭旧标签页后重试'))
  })
  return dbPromise
}

/** 升级事务内把旧 cases 存储的每条案例迁移成项目+根修订 */
function migrateLegacyStore(tx: IDBTransaction) {
  const old = tx.objectStore(STORE)
  const revs = tx.objectStore(REV_STORE)
  const outs = tx.objectStore(OUT_STORE)
  const projs = tx.objectStore(PROJ_STORE)
  const getAll = old.getAll()
  getAll.onsuccess = () => {
    const rows = getAll.result as Record<string, unknown>[]
    for (const raw of rows) {
      try {
        const { revision, outlines } = migrateV1Case(raw)
        const oldRow = raw as { id?: string; name?: string; updatedAt?: number }
        const pid = revision.projectId
        projs.put({
          id: pid,
          name: oldRow.name ?? '迁移案例',
          createdAt: revision.createdAt,
          updatedAt: oldRow.updatedAt ?? revision.createdAt
        } satisfies ProjectMeta)
        revs.put(revision)
        if (revision.hasOutlines && outlines) {
          outs.put({ digest: revision.digest, gear1: outlines.gear1, gear2: outlines.gear2 })
        }
      } catch (e) {
        // 单条坏数据不能让整个升级失败：隔离之
        const q = tx.objectStore(QUAR_STORE)
        q.put({
          digest: `mig-fail-${fingerprintText(JSON.stringify(raw))}`,
          reason: `v1 迁移失败：${(e as Error).message}`,
          receivedAt: Date.now(),
          raw
        } satisfies QuarantineEntry)
      }
    }
  }
}

/** DB v2→v3：给旧修订补 contentKey 字段（digest 不变，其余内容原样保留） */
function backfillContentKey(tx: IDBTransaction) {
  const revs = tx.objectStore(REV_STORE)
  const getAll = revs.getAll()
  getAll.onsuccess = () => {
    for (const raw of getAll.result as Revision[]) {
      if (raw && typeof raw.digest === 'string' && typeof (raw as { contentKey?: unknown }).contentKey !== 'string') {
        revs.put({ ...raw, contentKey: contentKey(raw) })
      }
    }
  }
}

interface Stores {
  db: IDBDatabase
  tx: IDBTransaction
  revs: IDBObjectStore
  outs: IDBObjectStore
  projs: IDBObjectStore
  quar: IDBObjectStore
}

function storesFor(mode: IDBTransactionMode): Promise<Stores> {
  return openDb().then(
    (db) =>
      new Promise<Stores>((resolve, reject) => {
        const tx = db.transaction([REV_STORE, OUT_STORE, PROJ_STORE, QUAR_STORE], mode)
        tx.onerror = () => reject(tx.error)
        tx.onabort = () => reject(tx.error ?? new Error('事务中止'))
        resolve({
          db,
          tx,
          revs: tx.objectStore(REV_STORE),
          outs: tx.objectStore(OUT_STORE),
          projs: tx.objectStore(PROJ_STORE),
          quar: tx.objectStore(QUAR_STORE)
        })
      })
  )
}

function txDone(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(tx.error ?? new Error('事务中止'))
  })
}

function reqAs<T>(r: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    r.onsuccess = () => resolve(r.result)
    r.onerror = () => reject(r.error)
  })
}

/**
 * 在单个 readwrite 事务内执行一系列读写。
 * 关键点：body 内【任何同步抛出】（例如磁盘配额/结构化克隆失败/模拟断电）
 * 都立即 abort 事务——IndexedDB 不会自动回滚已成功排队的 put，
 * 若不显式 abort，就可能留下"修订已在、轮廓缺失"的半成品。
 */
async function runWrite<T>(
  body: (s: Stores) => Promise<T>
): Promise<T> {
  const s = await storesFor('readwrite')
  try {
    const result = await body(s)
    await txDone(s.tx)
    return result
  } catch (e) {
    try {
      s.tx.abort()
    } catch {
      /* 事务可能已提交/已结束 */
    }
    throw e
  }
}

// ---------------------------------------------------------------- 读取

export async function getRevision(digest: string): Promise<Revision | undefined> {
  const s = await storesFor('readonly')
  return reqAs<Revision | undefined>(s.revs.get(digest) as IDBRequest<Revision | undefined>)
}

export async function getOutlines(digest: string): Promise<OutlinePayload | undefined> {
  const s = await storesFor('readonly')
  const row = await reqAs<
    { digest: string; gear1: OutlinePayload['gear1']; gear2: OutlinePayload['gear2'] } | undefined
  >(s.outs.get(digest) as IDBRequest)
  return row ? { gear1: row.gear1, gear2: row.gear2 } : undefined
}

export async function listRevisions(): Promise<Revision[]> {
  const s = await storesFor('readonly')
  return reqAs<Revision[]>(s.revs.getAll() as IDBRequest<Revision[]>)
}

export async function listProjects(): Promise<ProjectMeta[]> {
  const s = await storesFor('readonly')
  const all = await reqAs<ProjectMeta[]>(s.projs.getAll() as IDBRequest<ProjectMeta[]>)
  return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
}

export async function listQuarantine(): Promise<QuarantineEntry[]> {
  const s = await storesFor('readonly')
  return reqAs<QuarantineEntry[]>(s.quar.getAll() as IDBRequest<QuarantineEntry[]>)
}

// ---------------------------------------------------------------- 图 / 分支 / 冲突

export interface RevisionNode {
  rev: Revision
  children: string[] // digest 列表
  depth: number
  isHead: boolean
  isRoot: boolean
  /** 同一 revId 的另一条内容（revId 冲突双胞胎） */
  twins: string[]
  /** 同父并列分支：有兄弟 head 时该父节点构成分叉点 */
  siblingBranches: string[]
}

export interface RevisionGraph {
  /** digest → 节点 */
  nodes: Map<string, RevisionNode>
  /** 拓扑序（时间优先） */
  order: string[]
  /** 当前 head（没有任何后继的修订） */
  heads: string[]
  /** revId → digests，长度>1 即声明身份冲突 */
  byRevId: Map<string, string[]>
  /** 被分叉的父 digest（有 ≥2 个后继） */
  branchPoints: string[]
}

export function buildGraph(all: Revision[], projectId?: string): RevisionGraph {
  const revs = projectId ? all.filter((r) => r.projectId === projectId) : all
  const nodes = new Map<string, RevisionNode>()
  const byRevId = new Map<string, string[]>()
  // 双胞胎按【全库】revId 统计：跨项目导入的同 ID 修订也必须互相看见
  const globalById = new Map<string, string[]>()
  for (const rev of all) {
    const l = globalById.get(rev.revId) ?? []
    l.push(rev.digest)
    globalById.set(rev.revId, l)
  }
  for (const rev of revs) {
    nodes.set(rev.digest, {
      rev,
      children: [],
      depth: 0,
      isHead: true,
      isRoot: rev.parentDigest === null,
      twins: (globalById.get(rev.revId) ?? []).filter((d) => d !== rev.digest),
      siblingBranches: []
    })
    const list = byRevId.get(rev.revId) ?? []
    list.push(rev.digest)
    byRevId.set(rev.revId, list)
  }
  // 连边（父缺失也不崩：视为悬挂根，仍保留）
  for (const [digest, node] of nodes) {
    const p = node.rev.parentDigest
    if (p !== null && nodes.has(p)) nodes.get(p)!.children.push(digest)
    else if (p !== null) node.isRoot = true
  }
  // 深度（悬挂/环保护）
  const depthOf = (d: string, seen = new Set<string>()): number => {
    const n = nodes.get(d)!
    if (n.depth || seen.has(d)) return n.depth
    seen.add(d)
    const p = n.rev.parentDigest
    n.depth = p === null || !nodes.has(p) ? 0 : depthOf(p, seen) + 1
    return n.depth
  }
  for (const d of nodes.keys()) depthOf(d)

  const heads: string[] = []
  const branchPoints: string[] = []
  for (const [digest, node] of nodes) {
    if (node.children.length === 0) heads.push(digest)
    else node.isHead = false
    if (node.children.length >= 2) {
      branchPoints.push(digest)
      for (const ch of node.children) nodes.get(ch)!.siblingBranches = node.children.filter((x) => x !== ch)
    }
  }
  const order = [...nodes.keys()].sort((x, y) => {
    const nx = nodes.get(x)!,
      ny = nodes.get(y)!
    if (nx.depth !== ny.depth) return nx.depth - ny.depth
    return nx.rev.createdAt - ny.rev.createdAt
  })
  heads.sort((a, b) => nodes.get(b)!.rev.createdAt - nodes.get(a)!.rev.createdAt)
  return { nodes, order, heads, byRevId, branchPoints }
}

/** 从某修订回溯到根的链（digest，近→远） */
export function ancestorChain(graph: RevisionGraph, digest: string): string[] {
  const out: string[] = []
  let cur: string | null = digest
  const seen = new Set<string>()
  while (cur && graph.nodes.has(cur) && !seen.has(cur)) {
    seen.add(cur)
    out.push(cur)
    cur = graph.nodes.get(cur)!.rev.parentDigest
  }
  return out
}

/** 两版最近共同祖先 digest（无则 null） */
export function commonAncestor(graph: RevisionGraph, a: string, b: string): string | null {
  const ca = new Set(ancestorChain(graph, a))
  for (const d of ancestorChain(graph, b)) if (ca.has(d)) return d
  return null
}

// ---------------------------------------------------------------- 写入

export interface SaveRevisionInput {
  projectId: string
  projectName?: string
  parentDigest: string | null
  params: RevisionParams
  note?: string
  includeOutlines: boolean
  /** 当前帧干涉（已由界面求出） */
  interference?: Revision['checks']['interference']
  creator: string
  createdAt?: number
  /** 该项目是从另一项目的某修订分叉而来（仅根修订记录一次） */
  forkedFrom?: { projectId: string; digest: string }
}

export interface SaveResult {
  revision: Revision
  /** 'created' 新建；'exists' 相同内容已存在（幂等） */
  outcome: 'created' | 'exists'
  /** 写入后该项目上检测到的并列分叉 head（含本修订） */
  branchHeads: string[]
  /** 与本修订 revId 相同但内容不同的双胞胎 */
  twins: Revision[]
}

/**
 * 原子保存一条修订（含轮廓与项目元数据，同一事务提交）。
 * 并发安全依赖 IndexedDB 同范围事务串行化：两个标签页/两次导入即便同时发起，
 * 后到的事务也能读到先提交的修订，因此分叉双方都会被保留。
 */
export async function commitRevision(input: SaveRevisionInput): Promise<SaveResult> {
  const { revision, outlines } = makeRevision({
    parentDigest: input.parentDigest,
    projectId: input.projectId,
    params: input.params,
    note: input.note,
    includeOutlines: input.includeOutlines,
    interference: input.interference ?? null,
    creator: input.creator,
    createdAt: input.createdAt
  })

  const outcome: { kind: 'created' | 'exists'; existing?: Revision } = { kind: 'exists' }
  await runWrite(async (s) => {
    // 1) 精确 digest 命中（导入后再次保存同内容）
    const exact = await reqAs<Revision | undefined>(
      s.revs.get(revision.digest) as IDBRequest<Revision | undefined>
    )
    if (exact) {
      outcome.existing = exact
      return
    }
    // 2) 语义内容键命中：同一父版下重复保存完全相同的内容（不同 revId/时间）→ 幂等
    const same = await new Promise<Revision[]>((resolve, reject) => {
      const r = s.revs.index('contentKey').getAll(revision.contentKey)
      r.onsuccess = () => resolve(r.result as Revision[])
      r.onerror = () => reject(r.error)
    })
    const match = (same ?? []).find(
      (r) => r.parentDigest === revision.parentDigest && r.projectId === revision.projectId
    )
    if (match) {
      outcome.existing = match
      return
    }

    s.revs.put(revision)
    if (revision.hasOutlines && outlines) {
      // 与 revision 同一事务：要么都在，要么都不在
      s.outs.put({ digest: revision.digest, gear1: outlines.gear1, gear2: outlines.gear2 })
    }
    outcome.kind = 'created'

    const proj = await reqAs<ProjectMeta | undefined>(
      s.projs.get(input.projectId) as IDBRequest<ProjectMeta | undefined>
    )
    const now = revision.createdAt
    if (!proj) {
      const meta: ProjectMeta = {
        id: input.projectId,
        name: input.projectName ?? '未命名实验',
        createdAt: now,
        updatedAt: now
      }
      if (input.forkedFrom) {
        meta.forkedFromProjectId = input.forkedFrom.projectId
        meta.forkedFromDigest = input.forkedFrom.digest
      }
      s.projs.put(meta)
    } else {
      s.projs.put({
        ...proj,
        updatedAt: Math.max(proj.updatedAt, now),
        name: input.projectName ?? proj.name
      })
    }
  })

  const finalRev = outcome.existing ?? revision
  // 提交后读图：分叉按项目统计；同 revId 双胞胎已按全库计算（跨项目导入也认得）
  const all = await listRevisions()
  const graph = buildGraph(all, input.projectId)
  const twins = graph.nodes.get(finalRev.digest)?.twins
    .map((d) => all.find((r) => r.digest === d)!)
    .filter(Boolean) ?? []
  return { revision: finalRev, outcome: outcome.kind, branchHeads: graph.heads, twins }
}

export async function deleteProject(projectId: string): Promise<void> {
  await runWrite(async (s) => {
    const all = await reqAs<Revision[]>(s.revs.getAll() as IDBRequest<Revision[]>)
    for (const rev of all) {
      if (rev.projectId !== projectId) continue
      s.revs.delete(rev.digest)
      if (rev.hasOutlines) s.outs.delete(rev.digest)
    }
    s.projs.delete(projectId)
  })
}

/** 删除单条 head 修订（不可变历史不允许在中间打洞） */
export async function deleteHeadRevision(digest: string): Promise<void> {
  await runWrite(async (s) => {
    const rev = await reqAs<Revision | undefined>(s.revs.get(digest) as IDBRequest<Revision | undefined>)
    if (!rev) return
    const idx = s.revs.index('parentDigest')
    const kidKeys: IDBValidKey[] = await new Promise((res, rej) => {
      const r = idx.getAllKeys(digest)
      r.onsuccess = () => res(r.result)
      r.onerror = () => rej(r.error)
    })
    if (kidKeys.length > 0) throw new Error('该修订已有后继，不能删除（历史不可变）')
    s.revs.delete(digest)
    s.outs.delete(digest)
  })
}

// ---------------------------------------------------------------- JSON 导入/导出

export interface RevisionBundle {
  schemaVersion: 2
  kind: 'revision-bundle'
  exportedAt: number
  project: { id: string; name: string }
  revisions: Revision[]
  outlines: { digest: string; gear1: Pt2[]; gear2: Pt2[] }[]
}

type Pt2 = { x: number; y: number }

export function serializeBundle(b: RevisionBundle): string {
  return JSON.stringify(b, null, 2)
}

export type ImportOutcome =
  | { kind: 'dedup'; revision: Revision; message: string }
  | { kind: 'imported'; revision: Revision; branchHeads: string[]; twins: Revision[]; message: string }
  | {
      kind: 'conflict'
      revision: Revision
      twins: Revision[]
      branchHeads: string[]
      message: string
    }
  | { kind: 'v1-migrated'; revision: Revision; message: string }
  | { kind: 'quarantined'; reason: string; message: string }

export type ImportResult = {
  outcomes: ImportOutcome[]
}

/**
 * 导入 JSON。
 *  - schemaVersion=1（旧单案例）：走 v1 迁移；
 *  - schemaVersion=2 但非 bundle：兼容直接导出的单修订；
 *  - 同一 digest：幂等去重；同一 revId 不同 digest：并存并报告冲突；
 *  - digest 自洽性 / 轮廓哈希：任何一项不符 → 隔离，绝不冒充。
 */
export async function importJson(text: string): Promise<ImportResult> {
  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch (e) {
    throw new Error(`JSON 解析失败：${(e as Error).message}`)
  }
  const obj = parsed as { schemaVersion?: number; kind?: string }

  // ---- 旧版单案例 ----
  if (obj && obj.schemaVersion === 1) {
    return { outcomes: [await importV1Object(parsed)] }
  }
  if (!obj || obj.schemaVersion !== 2) {
    throw new Error(`不支持的文件版本（schemaVersion=${String((obj as { schemaVersion?: unknown })?.schemaVersion)}，支持 1/2）`)
  }

  const bundle = obj as RevisionBundle
  if (bundle.kind !== 'revision-bundle' || !bundle.project) {
    throw new Error('不是有效的修订包（缺少 kind="revision-bundle" 或 project）')
  }
  if (!Array.isArray(bundle.revisions) || bundle.revisions.length === 0) {
    throw new Error('修订包为空或缺少 revisions')
  }

  // 归一为 {rev, outlines} 列表；轮廓按 digest 关联
  type Item = { rev: Revision; outs?: OutlinePayload }
  const project = bundle.project
  const outMap = new Map<string, OutlinePayload>()
  for (const o of bundle.outlines ?? []) outMap.set(o.digest, { gear1: o.gear1, gear2: o.gear2 })
  const items: Item[] = bundle.revisions.map((rev) => ({ rev, outs: outMap.get(rev.digest) }))

  // 先整包校验，任何硬错误都在写入前抛出 → 中断不留残数据
  const projectNames = new Map<string, string>()
  for (const it of items) {
    const rev = it.rev
    if (!rev || rev.schemaVersion !== 2 || typeof rev.digest !== 'string') {
      throw new Error('包内存在 schemaVersion≠2 的修订，已整包拒绝')
    }
    // 携带了轮廓就必须与指纹一致；未携带轮廓（参数-only 导出）时由参数确定性重算
    const result = verifyRevision(rev, it.outs ?? null, false)
    if (!result.ok) {
      // 隔离而不是冒充
      await quarantine(rev.digest, `导入校验未通过：${result.problems.join(',')}`, { rev: it.rev, outs: it.outs })
      return {
        outcomes: [
          {
            kind: 'quarantined',
            reason: result.problems.join(','),
            message: `修订 ${rev.revId} 校验未通过（${result.problems.join(',')}），轮廓/指纹不一致，已隔离，未冒充为同一修订`
          }
        ]
      }
    }
    projectNames.set(rev.projectId, project.name)
  }

  // 全部通过后，在一个事务内顺序提交（原子：中断则整包回滚，见 runWrite 的 abort）
  const outcomes: ImportOutcome[] = []
  await runWrite(async (s) => {
    for (const it of items) {
      const rev = it.rev
      const existing = await reqAs<Revision | undefined>(s.revs.get(rev.digest) as IDBRequest<Revision | undefined>)
      if (existing) {
        // 内容完全一致（digest 相同即内容相同）——幂等，无副本
        outcomes.push({
          kind: 'dedup',
          revision: existing,
          message: `修订 ${rev.revId} 已存在且内容一致，跳过（不产生副本）`
        })
        continue
      }
      let outsForStore: OutlinePayload | undefined = it.outs
      if (rev.hasOutlines && !outsForStore) {
        // 参数-only 导出：轮廓是参数的确定函数，重算后指纹已在上方校验一致
        outsForStore = expectedOutlines(rev.params)
      }
      s.revs.put(rev)
      if (rev.hasOutlines && outsForStore) {
        s.outs.put({ digest: rev.digest, gear1: outsForStore.gear1, gear2: outsForStore.gear2 })
      }
      const p = await reqAs<ProjectMeta | undefined>(
        s.projs.get(rev.projectId) as IDBRequest<ProjectMeta | undefined>
      )
      if (!p) {
        s.projs.put({
          id: rev.projectId,
          name: projectNames.get(rev.projectId) ?? '导入的实验',
          createdAt: rev.createdAt,
          updatedAt: rev.createdAt
        })
      }
      outcomes.push({ kind: 'imported', revision: rev, branchHeads: [], twins: [], message: '' })
    }
  })

  // 提交后读图，标注分叉（项目内）/ 冲突（revId 双胞胎，buildGraph 按全库统计）
  const all = await listRevisions()
  for (let i = 0; i < outcomes.length; i++) {
    const o = outcomes[i]
    if (o.kind !== 'imported') continue
    const graph = buildGraph(all, o.revision.projectId)
    const twins = graph.nodes.get(o.revision.digest)?.twins
      .map((d) => all.find((r) => r.digest === d)!)
      .filter(Boolean) ?? []
    o.branchHeads = graph.heads
    o.twins = twins
    o.message =
      twins.length > 0
        ? `修订 ${o.revision.revId} 与已有修订同 ID 但内容不同：已作为并列修订保留（冲突双存），未覆盖任何一方`
        : graph.heads.length > 1
          ? `已导入并保留为并列分支（该实验现有 ${graph.heads.length} 个 head），可与同父子修订比较`
          : `修订 ${o.revision.revId} 已导入`
    if (twins.length > 0) {
      outcomes[i] = { ...o, kind: 'conflict', message: o.message }
    }
  }
  return { outcomes }
}

async function importV1Object(raw: unknown): Promise<ImportOutcome> {
  const { revision, outlines } = migrateV1Case(raw)
  const outcome: ImportOutcome = await runWrite(async (s) => {
    const existing = await reqAs<Revision | undefined>(
      s.revs.get(revision.digest) as IDBRequest<Revision | undefined>
    )
    if (existing) {
      return { kind: 'dedup', revision: existing, message: '该旧案例此前已迁移，跳过（不产生副本）' } as ImportOutcome
    }
    const old = raw as { name?: string }
    s.revs.put(revision)
    if (revision.hasOutlines && outlines) {
      s.outs.put({ digest: revision.digest, gear1: outlines.gear1, gear2: outlines.gear2 })
    }
    s.projs.put({
      id: revision.projectId,
      name: old.name ?? '迁移案例',
      createdAt: revision.createdAt,
      updatedAt: revision.createdAt
    })
    return {
      kind: 'v1-migrated',
      revision,
      message: `旧版单案例已自动迁移为根修订 ${revision.revId}`
    } as ImportOutcome
  })
  return outcome
}

async function quarantine(digest: string, reason: string, raw: unknown): Promise<void> {
  await runWrite(async (s) => {
    s.quar.put({ digest, reason, receivedAt: Date.now(), raw } satisfies QuarantineEntry)
  })
}

/** 导出一个项目（实验线）的全部修订与轮廓为自描述 JSON */
export async function exportProjectBundle(
  projectId: string,
  projectName: string,
  { includeOutlines = true }: { includeOutlines?: boolean } = {}
): Promise<RevisionBundle> {
  const s = await storesFor('readonly')
  const idx = s.revs.index('projectId')
  const revs = await new Promise<Revision[]>((resolve, reject) => {
    const r = idx.getAll(projectId)
    r.onsuccess = () => resolve(r.result as Revision[])
    r.onerror = () => reject(r.error)
  })
  revs.sort((a, b) => a.createdAt - b.createdAt)
  const outlines: RevisionBundle['outlines'] = []
  if (includeOutlines) {
    for (const rev of revs) {
      if (!rev.hasOutlines) continue
      const row = await reqAs<{ gear1: Pt2[]; gear2: Pt2[] } | undefined>(
        s.outs.get(rev.digest) as IDBRequest
      )
      if (!row) {
        // 绝不能导出"声明有轮廓但负载缺失"的修订
        throw new Error(`修订 ${rev.revId} 的轮廓缺失，导出中止（完整性保护）`)
      }
      outlines.push({ digest: rev.digest, gear1: row.gear1, gear2: row.gear2 })
    }
  }
  return {
    schemaVersion: SCHEMA_VERSION,
    kind: 'revision-bundle',
    exportedAt: Date.now(),
    project: { id: projectId, name: projectName },
    // 修订内容（含 hasOutlines 标记与 digest）保持原样；仅参数导出时省略轮廓数组
    revisions: revs,
    outlines
  }
}

// ---------------------------------------------------------------- 浏览器下载辅助

export function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function newProjectId(): string {
  return `proj-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}
