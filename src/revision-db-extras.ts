/**
 * 本地修订库健康检查与跨标签页通知。
 */
import { verifyRevision, type Revision } from './revision-model'
import { getOutlines, listRevisions, listQuarantine } from './store'

export interface IntegrityIssue {
  digest: string
  revId: string
  problems: string[]
}

/**
 * 扫描全部本地修订：digest 自洽 + 参数指纹 + 轮廓负载存在性。
 * hasOutlines=true 却读不到轮廓（例如外部工具半写入、磁盘异常）的修订会被列为
 * “只含元数据缺轮廓”的损坏修订，界面禁止基于它做干涉判断。
 */
export async function scanIntegrity(): Promise<{
  issues: IntegrityIssue[]
  quarantined: number
}> {
  const all: Revision[] = await listRevisions()
  const issues: IntegrityIssue[] = []
  for (const rev of all) {
    const outs = rev.hasOutlines ? await getOutlines(rev.digest) : null
    const res = verifyRevision(rev, outs ?? null, true)
    if (!res.ok) issues.push({ digest: rev.digest, revId: rev.revId, problems: res.problems })
  }
  const quar = await listQuarantine()
  return { issues, quarantined: quar.length }
}

// --------------------------------------------------------------- 跨标签页

/**
 * 修订库变更通知：同机多标签页之间用 BroadcastChannel（不支持时退化为 storage 事件）。
 * 它不承担正确性——并发安全本身由 IndexedDB 事务保证——只用于及时刷新界面，
 * 让另一个标签页保存产生的并列分支/冲突立即可见。
 */
export interface RevisionChangeEvent {
  type: 'committed' | 'deleted' | 'imported'
  projectId?: string
  at: number
}

const CHANNEL = 'spur-gear-lab-revisions'
const STORAGE_KEY = 'sgl.rev-tick'

export class RevisionChannel {
  private ch: BroadcastChannel | null = null
  private storageHandler: (e: StorageEvent) => void

  constructor(onMsg: (e: RevisionChangeEvent) => void) {
    if (typeof BroadcastChannel !== 'undefined') {
      this.ch = new BroadcastChannel(CHANNEL)
      this.ch.onmessage = (ev) => onMsg(ev.data as RevisionChangeEvent)
      this.storageHandler = () => {}
    } else {
      this.storageHandler = (e: StorageEvent) => {
        if (e.key === STORAGE_KEY) onMsg({ type: 'committed', at: Date.now() })
      }
      window.addEventListener('storage', this.storageHandler)
    }
  }

  post(e: RevisionChangeEvent) {
    if (this.ch) this.ch.postMessage(e)
    else {
      try {
        localStorage.setItem(STORAGE_KEY, String(e.at))
      } catch {
        /* 忽略 */
      }
    }
  }

  close() {
    this.ch?.close()
    if (!this.ch) window.removeEventListener('storage', this.storageHandler)
  }
}
