import Link from 'next/link'

export default function HashAlgorithmGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hash加密算法详解：MD5、SHA-1、SHA-256有什么区别？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">Hash（哈希/散列）算法是信息安全的基石。从密码存储到文件校验，从区块链到数字签名，Hash无处不在。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是Hash？</h2>
        <p className="text-gray-700 leading-relaxed">Hash算法将任意长度的输入转换为固定长度的输出（哈希值/摘要）。好的Hash算法有以下特性：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>确定性</strong> — 相同输入永远产生相同输出</li>
          <li><strong>单向性</strong> — 无法从哈希值反推原始数据</li>
          <li><strong>雪崩效应</strong> — 输入微小变化导致输出完全不同</li>
          <li><strong>抗碰撞</strong> — 极难找到两个不同输入产生相同输出</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见Hash算法对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>算法</span><span>输出长度</span><span>安全性</span><span>速度</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>MD5</span><span>128位(32字符)</span><span>❌ 已破解</span><span>⚡ 最快</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>SHA-1</span><span>160位(40字符)</span><span>⚠️ 不推荐</span><span>⚡ 快</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>SHA-256</span><span>256位(64字符)</span><span>✅ 安全</span><span>中等</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>SHA-512</span><span>512位(128字符)</span><span>✅ 安全</span><span>中等</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>SHA-3</span><span>可变</span><span>✅ 最安全</span><span>较慢</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">MD5 — 已经不安全</h2>
        <p className="text-gray-700 leading-relaxed">MD5曾经是最流行的Hash算法，但2004年被证明存在碰撞漏洞。现在可以在几秒内找到MD5碰撞。</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>❌ 不要用MD5存储密码</p>
          <p>❌ 不要用MD5做安全校验</p>
          <p>✅ 可以用于非安全场景的快速校验（如文件去重）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SHA-256 — 当前推荐</h2>
        <p className="text-gray-700 leading-relaxed">SHA-256是SHA-2家族的成员，目前被广泛使用：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>比特币区块链使用SHA-256</li>
          <li>SSL/TLS证书使用SHA-256签名</li>
          <li>Git使用SHA-1（正在迁移到SHA-256）</li>
          <li>大多数安全应用的首选</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际应用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>密码存储</strong> — 数据库存Hash值而非明文（应配合盐值和bcrypt/scrypt）</li>
          <li><strong>文件完整性校验</strong> — 下载文件后对比Hash确认未被篡改</li>
          <li><strong>数字签名</strong> — 先Hash再用私钥加密，验证数据来源和完整性</li>
          <li><strong>区块链</strong> — 每个区块包含前一个区块的Hash，形成链式结构</li>
          <li><strong>缓存键</strong> — 用内容的Hash作为缓存的唯一标识</li>
          <li><strong>数据去重</strong> — 通过Hash快速判断文件是否重复</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">密码存储的正确方式</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>❌ 明文存储：<code className="bg-white px-1 rounded">password123</code></p>
          <p>❌ 直接Hash：<code className="bg-white px-1 rounded">SHA256(password123)</code></p>
          <p>⚠️ 加盐Hash：<code className="bg-white px-1 rounded">SHA256(salt + password123)</code></p>
          <p>✅ 专用算法：<code className="bg-white px-1 rounded">bcrypt(password123, cost=12)</code></p>
        </div>
        <p className="text-gray-700 leading-relaxed">bcrypt、scrypt、Argon2等算法专为密码设计，内置盐值和可调节的计算成本，能有效抵抗暴力破解。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线Hash工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速计算Hash值？试试我们的 <Link href="/hash" className="text-blue-500 hover:underline font-medium">免费Hash生成器</Link>，支持MD5、SHA-1、SHA-256、SHA-512等多种算法，实时计算。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
