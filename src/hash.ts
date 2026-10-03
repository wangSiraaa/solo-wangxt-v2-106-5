/**
 * 确定性指纹哈希。
 *
 * 设计修订系统用哈希做两件事：
 *  1. 轮廓指纹（outlineFingerprint）：证明某个修订携带的轮廓就是由其参数生成的那一份，
 *     导入时若哈希对不上，绝不允许冒充同一修订；
 *  2. 修订内容摘要（digest）：把"父修订 + 参数快照 + 轮廓指纹 + 检查摘要 + 备注"
 *     归一化为 128 位指纹，用于
 *      - 幂等去重（重复导入同一修订不产生副本）；
 *      - 冲突识别（相同 revId 但内容不同 → 分叉/冲突）。
 *
 * 这里采用 cyrb128（公有领域；D. Lemire 等人在 c-smhasher 中推荐）的同步 TypeScript
 * 实现：无外部依赖、可在浏览器主线程、IndexedDB 升级回调与 Node 测试脚本中确定性运行
 * （IndexedDB 的 onupgradeneeded 迁移不能 await 异步 API，这一点很关键）。
 * cyrb128 为 128 位指纹，碰撞概率对教学数据量可忽略；它不是抗碰撞的加密哈希，
 * 系统的安全性不依赖它——防的是"最后写入者静默覆盖"与"导错文件"，不是恶意对抗。
 *
 * 数值序列化使用最短往返字符串（V8/SpiderMonkey/JavaScriptCore 均为最短十进制往返），
 * 同一组 IEEE-754 double 在所有运行时产生相同文本。
 */

/** 确定性 JSON 序列化：对象键排序，输出无空白；与 JSON.parse 可逆对应 */
export function canonicalJson(value: unknown): string {
  return canon(value)
}

function canon(value: unknown): string {
  if (value === null) return 'null'
  const t = typeof value
  if (t === 'number') {
    const n = value as number
    if (!Number.isFinite(n)) throw new Error('指纹输入含非有限数值（NaN/Infinity）')
    return JSON.stringify(n) // 最短往返十进制
  }
  if (t === 'boolean' || t === 'string') return JSON.stringify(value)
  if (Array.isArray(value)) {
    // 以 null 保持空洞位置，避免 [1,,3] 与 [1,null,3] 指纹相同
    return '[' + value.map((v) => (v === undefined ? 'null' : canon(v))).join(',') + ']'
  }
  if (t === 'object') {
    const obj = value as Record<string, unknown>
    const keys = Object.keys(obj).sort()
    return (
      '{' +
      keys
        .filter((k) => obj[k] !== undefined)
        .map((k) => JSON.stringify(k) + ':' + canon(obj[k]))
        .join(',') +
      '}'
    )
  }
  throw new Error(`指纹输入含不支持的类型：${t}`)
}

/** cyrb128（v1 变体），返回 4 个无符号 32 位整数 */
export function cyrb128(str: string): [number, number, number, number] {
  let h1 = 0xdeadbeef,
    h2 = 0x41c6ce57,
    h3 = 0x9a475223,
    h4 = 0xc2d39a8d
  for (let i = 0; i < str.length; i++) {
    const k = str.charCodeAt(i)
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067)
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233)
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213)
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179)
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067)
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233)
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213)
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179)
  h1 ^= h2 ^ h3 ^ h4
  h2 ^= h1
  h3 ^= h1
  h4 ^= h1
  return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0]
}

function hex8(n: number): string {
  return n.toString(16).padStart(8, '0')
}

/** 128 位指纹（32 位十六进制小写），形如 cyrb128:ab12… */
export function fingerprint(value: unknown): string {
  const [a, b, c, d] = cyrb128(canonicalJson(value))
  return `cyrb128:${hex8(a)}${hex8(b)}${hex8(c)}${hex8(d)}`
}

/** 直接对字符串取指纹 */
export function fingerprintText(text: string): string {
  const [a, b, c, d] = cyrb128(text)
  return `cyrb128:${hex8(a)}${hex8(b)}${hex8(c)}${hex8(d)}`
}
