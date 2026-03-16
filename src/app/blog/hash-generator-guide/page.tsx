import Link from 'next/link'

export default function HashGeneratorGuidePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hash生成器使用指南：在线生成 MD5、SHA-1、SHA-256、SHA-512</h1>
        <p className="text-gray-400 text-sm mb-8">2026年3月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">
          Hash 生成器是开发者、运维和安全从业者经常会用到的小工具。无论你是想校验文件完整性、验证接口签名，还是快速生成字符串摘要，
          一个顺手的在线 Hash 工具都能省下不少时间。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hash生成器是什么？</h2>
        <p className="text-gray-700 leading-relaxed">
          Hash 生成器可以把一段文本转换成固定长度的摘要值。不同算法会生成不同长度、不同安全级别的结果，比如 MD5、SHA-1、SHA-256、SHA-512。
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>输入相同，输出一定相同</strong></li>
          <li><strong>输入哪怕只改一个字符，结果也会完全不同</strong></li>
          <li><strong>通常无法从 Hash 结果反推出原文</strong></li>
          <li><strong>适合校验、比对、签名，不适合当作“可逆加密”理解</strong></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么时候会用到 Hash 生成器？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>文件完整性校验</strong>：下载文件后，比对官方提供的 SHA-256 值</li>
          <li><strong>接口开发与调试</strong>：快速生成签名串，检查后端验签逻辑</li>
          <li><strong>密码学学习</strong>：观察不同算法的输出格式和长度</li>
          <li><strong>数据去重</strong>：对文本内容生成摘要，快速判断是否一致</li>
          <li><strong>日志与排错</strong>：在不暴露原始数据的情况下保留标识</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">如何使用在线 Hash 生成器？</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>打开 <Link href="/hash" className="text-blue-500 hover:underline font-medium">Hash 哈希生成器</Link></li>
          <li>在输入框中粘贴要处理的文本</li>
          <li>选择需要的算法：MD5、SHA-1、SHA-256 或 SHA-512</li>
          <li>查看系统实时生成的摘要结果</li>
          <li>一键复制输出内容，用于校验、调试或记录</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mt-4">
          如果你只是想确认两段文本是否完全一致，可以分别生成 Hash 后进行对比，通常比肉眼逐字检查快得多。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">MD5、SHA-1、SHA-256、SHA-512 有什么区别？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>MD5</strong>：速度快，但安全性已经不足，适合非安全场景的快速校验。</p>
          <p><strong>SHA-1</strong>：比 MD5 更强，但也已不推荐用于高安全需求。</p>
          <p><strong>SHA-256</strong>：目前最常见、最稳妥的选择，广泛用于签名与完整性校验。</p>
          <p><strong>SHA-512</strong>：输出更长，安全性更高，适合更高强度的摘要需求。</p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          如果你不确定选哪个，优先用 <strong>SHA-256</strong>。这是大多数现代开发和安全场景下的默认安全选项。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际示例</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>原文：</strong><code className="bg-white px-1 rounded">hello world</code></p>
          <p><strong>MD5：</strong><code className="bg-white px-1 rounded">5eb63bbbe01eeed093cb22bb8f5acdc3</code></p>
          <p><strong>SHA-1：</strong><code className="bg-white px-1 rounded">2aae6c35c94fcfb415dbe95f408b9ce91ee846ed</code></p>
          <p><strong>SHA-256：</strong><code className="bg-white px-1 rounded">b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9</code></p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          你会发现，同一段文本在不同算法下会得到完全不同的输出，而且长度也不一样。这正是 Hash 算法的典型特征。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见误区</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>误区 1：</strong>Hash = 加密。其实 Hash 通常是不可逆的，更准确地说是摘要。</li>
          <li><strong>误区 2：</strong>MD5 还能安全存密码。现在不建议这么做，密码应使用 bcrypt、scrypt、Argon2 这类专用算法。</li>
          <li><strong>误区 3：</strong>结果越长就一定越适合所有场景。并不是，关键还是看用途和兼容性。</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">使用在线 Hash 工具时要注意什么？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>不要把真实密码、密钥、Token 直接粘贴到不可信网站</li>
          <li>处理敏感数据时，优先使用本地工具或自行部署的页面</li>
          <li>用于文件校验时，尽量选择 SHA-256 或 SHA-512</li>
          <li>如果只是做普通内容比对，MD5 也可以满足效率需求</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">结语</h2>
        <p className="text-gray-700 leading-relaxed">
          一个好用的 Hash 生成器，本质上是开发过程里的高频小助手。看似简单，但在调试接口、检查文件、验证结果时特别省事。
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          现在就试试我们的 <Link href="/hash" className="text-blue-500 hover:underline font-medium">免费在线 Hash 生成器</Link>。如果你还需要别的开发者工具，
          也可以继续逛逛 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。
        </p>
      </article>
    </main>
  )
}
