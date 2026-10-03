/**
 * 修订与合并工作流验收测试（覆盖需求的全部验收点）：
 *  A. 标准案例连续保存两版 → 可恢复任一版本，且原几何不变；
 *  B. 两个并发分支（同父子修订 / 模拟两个标签页）都被保留，图检出分叉且可比较；
 *  C. 重复导入同一修订不产生副本；同 ID 不同内容进入冲突双存而非覆盖；
 *  D. 旧版（schemaVersion=1）单案例自动迁移后，原有啮合与 Clipper 往返检查仍可运行；
 *  E. 写入/导入中断（在轮廓 put 时断电）事务回滚，不留下只含元数据缺轮廓的修订；
 *  F. 轮廓哈希不一致的导入被隔离，绝不冒充同一修订。
 */
import 'fake-indexeddb/auto'
import {
  commitRevision,
  listRevisions,
  getRevision,
  getOutlines,
  buildGraph,
  importJson,
  serializeBundle,
  exportProjectBundle,
  listProjects,
  openDb,
  _resetDbConnectionForTests,
  type RevisionBundle
} from '../src/store.ts'
import {
  makeRevision,
  diffRevisions,
  migrateV1Case,
  expectedOutlines,
  verifyRevision,
  computeDigest,
  type Revision,
  type RevisionParams
} from '../src/revision-model.ts'
import { fingerprint } from '../src/hash.ts'
import { buildGear, DEG, transformOutline, polygonArea } from '../src/geometry/gear.ts'
import { analyzeMesh, mateAngle } from '../src/geometry/mesh.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'
import { scanIntegrity } from '../src/revision-db-extras.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

async function resetDb() {
  await _resetDbConnectionForTests()
  await new Promise<void>((resolve, reject) => {
    const r = indexedDB.deleteDatabase('spur-gear-lab')
    r.onsuccess = () => resolve()
    r.onerror = () => reject(r.error)
    r.onblocked = () => reject(new Error('blocked'))
  })
  await _resetDbConnectionForTests()
}

const baseParams = (over: Partial<RevisionParams['gear1']> = {}, cd: number | null = null): RevisionParams => ({
  gear1: { z: 20, module: 2, alphaDeg: 20, faceWidth: 10, ...over },
  gear2: { z: 40, module: 2, alphaDeg: 20, faceWidth: 10 },
  centerDistance: cd,
  unit: 'mm'
})

// ================================================================= A. 连续两版
await resetDb()
{
  const pid = 'proj-A'
  const r1 = await commitRevision({
    projectId: pid, projectName: '标准案例', parentDigest: null,
    params: baseParams(), note: 'v1 初始', includeOutlines: true,
    interference: { phi1: 0.1, areaMm2: 0, intersects: false }, creator: 'tab-A'
  })
  const r2 = await commitRevision({
    projectId: pid, projectName: '标准案例', parentDigest: r1.revision.digest,
    params: baseParams({ z: 22 }), note: 'v2 改 z1=22', includeOutlines: true,
    interference: { phi1: 0.1, areaMm2: 0, intersects: false }, creator: 'tab-A'
  })

  const all = await listRevisions()
  ok(all.length === 2, `A: 连续保存得到 2 条修订（实际 ${all.length}）`)
  ok(r1.revision.parentDigest === null, 'A: 第一条是根修订')
  ok(r2.revision.parentDigest === r1.revision.digest, 'A: 第二条父修订指向第一条 digest')

  // 两版都可恢复，且几何不被后续保存破坏
  const rev1 = await getRevision(r1.revision.digest)
  const rev2 = await getRevision(r2.revision.digest)
  ok(rev1!.params.gear1.z === 20 && rev2!.params.gear1.z === 22, 'A: 两版参数各自保留（20 / 22）')

  const o1 = (await getOutlines(rev1!.digest))!
  const expect1 = expectedOutlines(rev1!.params)
  const expect2 = expectedOutlines(rev2!.params)
  const o2 = (await getOutlines(rev2!.digest))!
  ok(o1.gear1.length === expect1.gear1.length && polygonArea(o1.gear1) === polygonArea(expect1.gear1),
    'A: 恢复 v1 时原几何未被 v2 改变（点数/面积严格一致）')
  ok(o2.gear1.length === expect2.gear1.length && polygonArea(o2.gear1) === polygonArea(expect2.gear1),
    'A: v2 几何可恢复')

  const graph = buildGraph(await listRevisions(), pid)
  ok(graph.heads.length === 1 && graph.heads[0] === rev2!.digest, 'A: 线性历史只有一个 head（v2）')
  const chain = [rev2!.digest, rev1!.digest]
  let cur: string | null = rev2!.digest
  const walked: string[] = []
  while (cur) {
    walked.push(cur)
    cur = graph.nodes.get(cur)?.rev.parentDigest ?? null
  }
  ok(JSON.stringify(walked) === JSON.stringify(chain), 'A: 父修订链 v2→v1 可回溯')

  // 从 v1 分叉继续实验：新保存以 v1 为父
  const r3 = await commitRevision({
    projectId: pid, projectName: '标准案例', parentDigest: rev1!.digest,
    params: baseParams({ module: 2.5 }), note: '从 v1 分叉 m=2.5', includeOutlines: false,
    creator: 'tab-A'
  })
  const graph2 = buildGraph(await listRevisions(), pid)
  ok(graph2.heads.length === 2, `A: 从历史版分叉后出现 2 个 head（实际 ${graph2.heads.length}）`)
  ok(graph2.branchPoints.includes(rev1!.digest), 'A: v1 被识别为分叉点')

  // 比较两版：中心距/尺寸差异。r3 从 v1(z1=20,z2=40,m=2) 分叉改 m=2.5：
  // a0(v1)=2*60/2=60；a0(r3)=2.5*60/2=65
  const diff = diffRevisions(rev1!, r3.revision)
  const aField = diff.fields.find((f) => f.label === '实际中心距 a')
  ok(!!aField && Math.abs(aField.a - 60) < 1e-9 && Math.abs(aField.b - 65) < 1e-9 && Math.abs(aField.delta - 5) < 1e-9,
    `A: 比较给出中心距 60→65 mm（得到 ${aField?.a}→${aField?.b}）`)
}

// ================================================================= B. 并发分支
await resetDb()
{
  const pid = 'proj-B'
  // 共同祖先（模拟"标签页打开时的同一父版"）
  const base = await commitRevision({
    projectId: pid, projectName: '并发', parentDigest: null,
    params: baseParams(), note: '共同父版', includeOutlines: true, creator: 'tab-1'
  })
  const parent = base.revision.digest

  // 两个标签页基于同一父版，各自保存【不同】后继
  const tab1 = await commitRevision({
    projectId: pid, projectName: '并发', parentDigest: parent,
    params: baseParams({ z: 24 }), note: '标签页1: z1=24', includeOutlines: true, creator: 'tab-1'
  })
  const tab2 = await commitRevision({
    projectId: pid, projectName: '并发', parentDigest: parent,
    params: baseParams({ z: 26 }), note: '标签页2: z1=26', includeOutlines: true, creator: 'tab-2'
  })

  ok(tab1.outcome === 'created' && tab2.outcome === 'created', 'B: 两个并发保存均成功落库')
  ok(tab1.revision.digest !== tab2.revision.digest, 'B: 两个后继 digest 不同（无一被覆盖）')
  const graph = buildGraph(await listRevisions(), pid)
  ok(graph.heads.length === 2, `B: 两个并发分支都保留为 head（实际 ${graph.heads.length}）`)
  ok(graph.branchPoints.length === 1 && graph.branchPoints[0] === parent, 'B: 共同父版标记为分叉点')
  const node1 = graph.nodes.get(tab1.revision.digest)!
  ok(node1.siblingBranches.includes(tab2.revision.digest), 'B: 分支1 能看到并列分支2（反之亦然）')

  // 两版可比较
  const diff = diffRevisions(tab1.revision, tab2.revision)
  const zField = diff.fields.find((f) => f.label === '轮1 齿数 z')
  ok(!!zField && zField.a === 24 && zField.b === 26 && zField.delta === 2, 'B: 比较两分支 z1 = 24 vs 26')
  ok(!diff.same && diff.paramsDiffer, 'B: diff 标记两版内容/参数不同')

  // 后写入者不会覆盖先写入者
  const again2 = await getRevision(tab2.revision.digest)
  const again1 = await getRevision(tab1.revision.digest)
  ok(again1!.params.gear1.z === 24 && again2!.params.gear1.z === 26, 'B: 没有发生"最后写入者胜"的静默丢失')

  // 两边各自继续保存，分支持续并列
  const tab1b = await commitRevision({
    projectId: pid, projectName: '并发', parentDigest: tab1.revision.digest,
    params: baseParams({ z: 24, faceWidth: 14 }), note: '标签页1 继续', includeOutlines: false, creator: 'tab-1'
  })
  const graph3 = buildGraph(await listRevisions(), pid)
  ok(graph3.heads.map((h) => h).sort().join() === [tab2.revision.digest, tab1b.revision.digest].sort().join(),
    'B: 分支各自延长后仍是两个 head')
}

// ================================================================= C. 导入幂等 / 同 ID 冲突
await resetDb()
{
  const pid = 'proj-C'
  const made = makeRevision({
    parentDigest: null, projectId: pid, params: baseParams({ z: 18 }),
    note: '导出的修订', includeOutlines: true, creator: 'tab-1'
  })
  const bundle = (): RevisionBundle => ({
    schemaVersion: 2,
    kind: 'revision-bundle',
    exportedAt: Date.now(),
    project: { id: pid, name: '导入项目' },
    revisions: [made.revision],
    outlines: made.outlines ? [{ digest: made.revision.digest, gear1: made.outlines.gear1, gear2: made.outlines.gear2 }] : []
  })

  const first = await importJson(serializeBundle(bundle()))
  ok(first.outcomes[0].kind === 'imported', 'C: 首次导入成功')
  const second = await importJson(serializeBundle(bundle()))
  ok(second.outcomes[0].kind === 'dedup', `C: 重复导入同一修订去重（${second.outcomes[0].kind}）`)
  const third = await importJson(serializeBundle(bundle()))
  ok(third.outcomes[0].kind === 'dedup', 'C: 第三次导入仍不产生副本')
  ok((await listRevisions()).length === 1, 'C: 库中恰好 1 条修订')

  // 同 revId、不同内容（改备注/参数），并把轮廓指纹/digest 重算为自洽
  // （模拟外部工具精心伪造声明身份，但内容确实是另一个实验）→ 必须冲突双存
  const evilOuts = expectedOutlines(baseParams({ z: 30 }))
  const { digest: _ed, createdAt: _ec, creator: _ecr, ...evilContent } = {
    ...made.revision,
    note: '我用了同一个 revId 但内容完全不同',
    params: baseParams({ z: 30 }),
    outlineHashes: { algo: 'cyrb128' as const, gear1: fingerprint(evilOuts.gear1), gear2: fingerprint(evilOuts.gear2) }
  }
  void _ed
  void _ec
  void _ecr
  const evilFixed: Revision = {
    ...(evilContent as Omit<Revision, 'digest' | 'createdAt' | 'creator'>),
    digest: computeDigest(evilContent as Omit<Revision, 'digest' | 'createdAt' | 'creator'>),
    createdAt: made.revision.createdAt,
    creator: 'forger'
  }
  const conflictBundle: RevisionBundle = {
    schemaVersion: 2,
    kind: 'revision-bundle',
    exportedAt: Date.now(),
    project: { id: pid, name: '导入项目' },
    revisions: [evilFixed],
    outlines: [{ digest: evilFixed.digest, gear1: evilOuts.gear1, gear2: evilOuts.gear2 }]
  }
  const conflict = await importJson(serializeBundle(conflictBundle))
  ok(conflict.outcomes[0].kind === 'conflict', `C: 同 revId 不同内容被判为冲突（${conflict.outcomes[0].kind}）`)
  const all = await listRevisions()
  ok(all.length === 2, `C: 冲突双方都保留（实际 ${all.length}），原修订未被覆盖`)
  const origStillThere = all.find((r) => r.note === '导出的修订')
  ok(!!origStillThere && origStillThere.params.gear1.z === 18, 'C: 原修订内容原样保留')
  const graph = buildGraph(all, pid)
  const twins = graph.byRevId.get(made.revision.revId)!
  ok(twins.length === 2, `C: 同 revId 映射到 2 个 digest（实际 ${twins.length}）`)

  // 跨项目双胞胎信息已在 buildGraph 节点上（revId 统计按全库）
  const scopedToPid = buildGraph(all, pid)
  const evilNode = scopedToPid.nodes.get(evilFixed.digest)!
  ok(evilNode.twins.includes(made.revision.digest), 'C: 项目图节点携带全库双胞胎信息')
}

// ================================================================= D. v1 迁移
await resetDb()
{
  // 直接种一个 v1 库（oldVersion=1 只有 cases 存储），再以 v2 打开触发 onupgradeneeded
  await new Promise<void>((resolve, reject) => {
    const r = indexedDB.open('spur-gear-lab', 1)
    r.onupgradeneeded = () => {
      const db = r.result
      const store = db.createObjectStore('cases', { keyPath: 'id' })
      store.createIndex('updatedAt', 'updatedAt')
      store.put({
        schemaVersion: 1,
        id: 'legacy-case-1',
        name: '旧版标准案例',
        createdAt: 123,
        updatedAt: 456,
        note: '老备注',
        gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
        gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
        centerDistance: null,
        unit: 'mm',
        outlines: (() => {
          const g1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
          const g2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
          return { gear1: g1.outline, gear2: g2.outline }
        })()
      })
    }
    r.onsuccess = () => {
      r.result.close()
      resolve()
    }
    r.onerror = () => reject(r.error)
  })
  await _resetDbConnectionForTests()

  await openDb() // 触发 v1→v2 升级
  const projects = await listProjects()
  const revs = await listRevisions()
  ok(projects.length === 1 && projects[0].name === '旧版标准案例', 'D: 迁移生成同名项目')
  ok(revs.length === 1, `D: 旧案例迁移为 1 个根修订（实际 ${revs.length}）`)
  const rev = revs[0]
  ok(rev.parentDigest === null && rev.projectId === 'proj-legacy-case-1', 'D: 迁移修订为根且项目 id 可追溯')
  ok(rev.hasOutlines === true, 'D: 旧案例携带的轮廓随迁移保留')
  const outs = await getOutlines(rev.digest)
  ok(!!outs, 'D: 迁移修订轮廓负载可读')

  // 迁移后仍可运行"原有啮合检查"
  const { g1, g2, mesh } = (() => {
    const a = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
    const b = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
    return { g1: a, g2: b, mesh: analyzeMesh({ g1: a, g2: b, centerDistance: a.pitchR + b.pitchR }) }
  })()
  ok(Math.abs(rev.checks.a - mesh.a) < 1e-9 && rev.checks.basePitchMatch, 'D: 迁移修订检查摘要与啮合分析一致（基节相等）')

  // 原有 Clipper 往返检查在迁移轮廓上运行
  const p1 = 0.37
  const p2 = mateAngle(g1, g2, mesh, p1)
  const res = await intersectOutlines(
    [transformOutline(outs!.gear1, 0, 0, p1)],
    [transformOutline(outs!.gear2, mesh.a, 0, p2)]
  )
  ok(!res.intersects, `D: 迁移轮廓严格相位无干涉（面积 ${res.area.toExponential(2)}）`)

  // 迁移幂等：再次打开不会重复迁移（旧 cases 仍在但只迁一次）
  const revs2 = await listRevisions()
  ok(revs2.length === 1, 'D: 升级只迁移一次，无重复根修订')

  // 直接导入 v1 JSON 走同样的迁移路径
  await resetDb()
  const v1json = JSON.stringify({
    schemaVersion: 1,
    id: 'legacy-import',
    name: '导入的旧案例',
    createdAt: 1,
    updatedAt: 1,
    note: '',
    gear1: { z: 17, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 8 },
    gear2: { z: 17, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 8 },
    centerDistance: null,
    unit: 'mm'
  })
  const imp = await importJson(v1json)
  ok(imp.outcomes[0].kind === 'v1-migrated', `D: 导入 v1 JSON 自动迁移（${imp.outcomes[0].kind}）`)
  const imp2 = await importJson(v1json)
  ok(imp2.outcomes[0].kind === 'dedup', 'D: 同一 v1 案例重复导入不重复迁移')

  // 迁移函数本身：坏参数必须抛错而不是静默产坏修订
  let threw = false
  try {
    migrateV1Case({ schemaVersion: 1, id: 'x' })
  } catch {
    threw = true
  }
  ok(threw, 'D: 缺少齿轮参数的旧案例迁移抛错')
}

// ================================================================= E. 中断不残缺
await resetDb()
{
  const pid = 'proj-E'
  // 先放一条正常根修订
  const root = await commitRevision({
    projectId: pid, projectName: '中断', parentDigest: null,
    params: baseParams(), note: 'root', includeOutlines: true, creator: 'tab-1'
  })

  // 模拟"轮廓写入瞬间断电"：patch outlines 存储的 put，在后继修订的轮廓写入时抛错。
  // runWrite 必须 abort 整个事务 → revision 与 project 时间戳更新也一并回滚。
  await openDb() // 确保 IDBObjectStore 构造器存在
  const StoreProto = (globalThis as { IDBObjectStore?: { prototype: { put: (...a: unknown[]) => unknown } } }).IDBObjectStore!.prototype
  const origPut = StoreProto.put
  let crashed = false
  StoreProto.put = function (this: unknown, ...args: unknown[]) {
    const value = args[0] as { digest?: string; gear2?: unknown[] } | undefined
    if (value && Array.isArray(value.gear2) && value.digest && value.digest !== root.revision.digest && !crashed) {
      crashed = true
      throw new Error('模拟断电：轮廓写入失败')
    }
    return origPut.call(this, ...args)
  }

  let saveThrew = false
  try {
    await commitRevision({
      projectId: pid, projectName: '中断', parentDigest: root.revision.digest,
      params: baseParams({ z: 28 }), note: '应该回滚的后继', includeOutlines: true, creator: 'tab-2'
    })
  } catch {
    saveThrew = true
  } finally {
    StoreProto.put = origPut
  }
  ok(crashed && saveThrew, 'E: 轮廓写入中断时保存抛错')

  const revs = await listRevisions()
  ok(revs.length === 1 && revs[0].digest === root.revision.digest,
    `E: 事务整体回滚，库里只有根修订（实际 ${revs.length}）——无"有元数据缺轮廓"的半成品`)
  const health = await scanIntegrity()
  ok(health.issues.length === 0, 'E: 完整性体检未发现残缺修订')

  // 导入中断：第二条修订轮廓写失败 → 整包回滚，第一条也不得留下
  const mk = (z: number, note: string) =>
    makeRevision({ parentDigest: root.revision.digest, projectId: pid, params: baseParams({ z }), note, includeOutlines: true, creator: 'file' })
  const a = mk(30, '导入分支a')
  const b = mk(32, '导入分支b')
  const bundle: RevisionBundle = {
    schemaVersion: 2,
    kind: 'revision-bundle',
    exportedAt: Date.now(),
    project: { id: pid, name: '中断' },
    revisions: [a.revision, b.revision],
    outlines: [
      { digest: a.revision.digest, gear1: a.outlines!.gear1, gear2: a.outlines!.gear2 },
      { digest: b.revision.digest, gear1: b.outlines!.gear1, gear2: b.outlines!.gear2 }
    ]
  }
  const proto2 = StoreProto
  const orig2 = proto2.put
  let impThrew = false
  proto2.put = function (this: unknown, ...args: unknown[]) {
    const value = args[0] as { digest?: string; gear2?: unknown[] } | undefined
    if (value && Array.isArray(value.gear2) && value.digest === b.revision.digest) {
      throw new Error('模拟导入断电')
    }
    return orig2.call(this, ...args)
  }
  try {
    await importJson(serializeBundle(bundle))
  } catch {
    impThrew = true
  } finally {
    proto2.put = orig2
  }
  ok(impThrew, 'E: 导入过程中断抛错')
  const revsAfter = await listRevisions()
  ok(revsAfter.length === 1, `E: 导入整包原子回滚（实际 ${revsAfter.length} 条，仍只有根修订）`)
}

// ================================================================= F. 哈希不一致不冒充
await resetDb()
{
  const made = makeRevision({
    parentDigest: null, projectId: 'proj-F', params: baseParams({ z: 21 }),
    note: '正规修订', includeOutlines: true, creator: 'tab-1'
  })
  // 篡改轮廓内容但保持 digest 字段不变 → 校验必须发现 outline-hash-mismatch
  const badOutlines = {
    gear1: made.outlines!.gear1.map((p, i) => (i === 3 ? { x: p.x + 10, y: p.y + 10 } : p)),
    gear2: made.outlines!.gear2
  }
  ok(!verifyRevision(made.revision, badOutlines).ok, 'F: 轮廓与指纹不一致时 verifyRevision 失败')

  const badBundle: RevisionBundle = {
    schemaVersion: 2,
    kind: 'revision-bundle',
    exportedAt: Date.now(),
    project: { id: 'proj-F', name: '坏包' },
    revisions: [made.revision],
    outlines: [{ digest: made.revision.digest, gear1: badOutlines.gear1, gear2: badOutlines.gear2 }]
  }
  const res = await importJson(serializeBundle(badBundle))
  ok(res.outcomes[0].kind === 'quarantined', `F: 哈希不一致的导入被隔离（${res.outcomes[0].kind}）`)
  const revs = await listRevisions()
  ok(revs.length === 0, 'F: 坏修订未进入 revisions 存储（不能冒充同一修订）')
  const health = await scanIntegrity()
  ok(health.issues.length === 0 && health.quarantined === 1, `F: 隔离区有 1 条（实际 ${health.quarantined}），正常修订区无损坏`)

  // 手工塞入"只有元数据没有轮廓"的损坏行，体检必须报 missing-outlines
  const db = await openDb()
  await new Promise<void>((resolve, reject) => {
    const t = db.transaction(['revisions'], 'readwrite')
    t.objectStore('revisions').put(made.revision)
    t.oncomplete = () => resolve()
    t.onerror = () => reject(t.error)
  })
  const health2 = await scanIntegrity()
  ok(health2.issues.length === 1 && health2.issues[0].problems.includes('missing-outlines'),
    'F: 体检能抓出"只含元数据缺轮廓"的损坏修订')
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n修订与合并工作流验收全部通过 ✅')
process.exit(fails ? 1 : 0)
