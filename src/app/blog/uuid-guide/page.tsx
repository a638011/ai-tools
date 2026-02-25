import Link from 'next/link'

export default function UuidGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">什么是UUID？UUID v4生成原理与使用场景</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">UUID（Universally Unique Identifier，通用唯一标识符）是一种128位的标识符，几乎可以保证全球唯一。在分布式系统、数据库设计中被广泛使用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">UUID长什么样？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          550e8400-e29b-41d4-a716-446655440000
        </div>
        <p className="text-gray-700 leading-relaxed">标准格式是32个十六进制字符，用4个横线分成5组：8-4-4-4-12。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">UUID的版本</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>v1</strong> — 基于时间戳和MAC地址，可以追溯生成时间和机器</li>
          <li><strong>v3</strong> — 基于命名空间和名称的MD5哈希</li>
          <li><strong>v4</strong> — 完全随机生成（最常用）</li>
          <li><strong>v5</strong> — 基于命名空间和名称的SHA-1哈希</li>
          <li><strong>v7</strong> — 基于时间戳的有序UUID（2024年新标准）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么v4最流行？</h2>
        <p className="text-gray-700 leading-relaxed">UUID v4使用加密安全的随机数生成，有122位随机数据。碰撞概率极低——生成10万亿个UUID后，碰撞概率才达到十亿分之一。</p>
        <p className="text-gray-700 leading-relaxed">v4的优势：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>不泄露任何信息（不像v1会暴露MAC地址和时间）</li>
          <li>无需中心化协调，任何节点都能独立生成</li>
          <li>实现简单，所有编程语言都有现成库</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际使用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>数据库主键</strong> — 替代自增ID，避免分库分表时的ID冲突</li>
          <li><strong>API请求追踪</strong> — 每个请求分配唯一ID，方便日志排查</li>
          <li><strong>文件命名</strong> — 上传文件用UUID重命名，避免冲突</li>
          <li><strong>会话标识</strong> — Session ID、Token生成</li>
          <li><strong>消息队列</strong> — 消息去重的唯一标识</li>
          <li><strong>分布式系统</strong> — 跨服务的唯一标识符</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">UUID vs 自增ID</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>对比项</span><span>UUID</span><span>自增ID</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600 space-y-1">
            <span>唯一性</span><span>全局唯一</span><span>单表唯一</span>
            <span>分布式</span><span>✅ 天然支持</span><span>❌ 需要协调</span>
            <span>安全性</span><span>✅ 不可预测</span><span>❌ 可枚举</span>
            <span>存储空间</span><span>16字节</span><span>4-8字节</span>
            <span>索引性能</span><span>较差（随机）</span><span>✅ 有序高效</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线生成UUID</h2>
        <p className="text-gray-700 leading-relaxed">需要快速生成UUID？试试我们的 <Link href="/uuid" className="text-blue-500 hover:underline font-medium">免费UUID生成器</Link>，支持：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>批量生成（1-100个）</li>
          <li>大写/小写切换</li>
          <li>带横线/去横线格式</li>
          <li>一键复制</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
