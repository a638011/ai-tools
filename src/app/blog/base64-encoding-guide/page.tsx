import Link from 'next/link'

export default function Base64Guide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Base64编码是什么？原理、用途与在线工具</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">Base64是开发中最常见的编码方式之一。你可能在JWT Token、邮件附件、Data URL中都见过它，但你真的了解它的原理吗？</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是Base64？</h2>
        <p className="text-gray-700 leading-relaxed">Base64是一种将二进制数据转换为ASCII文本的编码方式。它使用64个可打印字符（A-Z、a-z、0-9、+、/）来表示任意二进制数据。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500">原文：Hello World</p>
          <p className="text-blue-600">Base64：SGVsbG8gV29ybGQ=</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">编码原理</h2>
        <p className="text-gray-700 leading-relaxed">Base64的编码过程：</p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>将原始数据转换为二进制比特流</li>
          <li>每6个比特为一组（因为2⁶ = 64）</li>
          <li>每组映射到Base64字符表中的一个字符</li>
          <li>如果最后不足6位，用0补齐，输出用 = 填充</li>
        </ol>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <p className="text-gray-500 mb-2">示例：编码 "Hi"</p>
          <p className="text-gray-700">H = 01001000, i = 01101001</p>
          <p className="text-gray-700">拼接：010010 000110 1001<span className="text-red-500">00</span>（补2个0）</p>
          <p className="text-gray-700">查表：S(18) G(6) k(36) <span className="text-red-500">=</span>（填充）</p>
          <p className="text-blue-600 font-medium">结果：SGk=</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么需要Base64？</h2>
        <p className="text-gray-700 leading-relaxed">很多传输协议（如HTTP、SMTP、JSON）只支持文本数据。Base64让我们可以：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>在文本中嵌入二进制</strong> — 图片、文件、加密数据都可以变成文本</li>
          <li><strong>避免特殊字符问题</strong> — 不会被URL编码、XML解析等破坏</li>
          <li><strong>跨平台兼容</strong> — 纯ASCII字符，任何系统都能处理</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见使用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Data URL</strong> — 在CSS/HTML中直接嵌入小图片：<code className="bg-gray-100 px-1 rounded text-xs">data:image/png;base64,iVBOR...</code></li>
          <li><strong>JWT Token</strong> — Header和Payload都是Base64编码的JSON</li>
          <li><strong>邮件附件</strong> — MIME协议用Base64传输附件</li>
          <li><strong>API传输</strong> — 在JSON中传递文件或图片数据</li>
          <li><strong>Basic认证</strong> — HTTP Basic Auth将用户名:密码做Base64编码</li>
          <li><strong>加密数据存储</strong> — 加密后的二进制数据用Base64存为文本</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">注意事项</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ Base64不是加密！它只是编码，任何人都能解码</p>
          <p>⚠️ 编码后体积增大约33%（3字节变4字符）</p>
          <p>⚠️ 大文件不适合Base64（会显著增大体积和内存占用）</p>
          <p>⚠️ URL安全的Base64用 - 和 _ 替代 + 和 /</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">各语言实现</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm space-y-3">
          <div>
            <p className="text-gray-500">// JavaScript</p>
            <p className="text-gray-700">btoa('Hello')  // 编码 → "SGVsbG8="</p>
            <p className="text-gray-700">atob('SGVsbG8=')  // 解码 → "Hello"</p>
          </div>
          <div>
            <p className="text-gray-500"># Python</p>
            <p className="text-gray-700">import base64</p>
            <p className="text-gray-700">base64.b64encode(b'Hello')  # b'SGVsbG8='</p>
          </div>
          <div>
            <p className="text-gray-500">// Java</p>
            <p className="text-gray-700">Base64.getEncoder().encodeToString("Hello".getBytes())</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速编解码？我们提供两个免费工具：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><Link href="/base64" className="text-blue-500 hover:underline font-medium">Base64文本编解码</Link> — 文本与Base64互转</li>
          <li><Link href="/image-base64" className="text-blue-500 hover:underline font-medium">图片Base64转换</Link> — 图片与Base64 Data URL互转</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
