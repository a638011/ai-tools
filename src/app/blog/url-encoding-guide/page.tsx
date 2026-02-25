import Link from 'next/link'

export default function UrlEncodingGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">URL编码是什么？为什么链接里有%20？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">你一定见过这样的链接：<code className="bg-gray-100 px-1 rounded text-sm">https://example.com/search?q=%E4%BD%A0%E5%A5%BD</code>。那些%开头的字符是什么？为什么不能直接写中文？</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是URL编码？</h2>
        <p className="text-gray-700 leading-relaxed">URL编码（也叫百分号编码/Percent-encoding）是将URL中的特殊字符转换为 <code className="bg-gray-100 px-1 rounded">%XX</code> 格式的过程，其中XX是字符的十六进制ASCII/UTF-8值。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500">空格 → %20</p>
          <p className="text-gray-500">你好 → %E4%BD%A0%E5%A5%BD</p>
          <p className="text-gray-500">hello world → hello%20world</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么需要URL编码？</h2>
        <p className="text-gray-700 leading-relaxed">URL只能包含ASCII字符的一个子集。以下字符在URL中有特殊含义：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">?</code><span className="text-gray-600">查询字符串开始</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">&</code><span className="text-gray-600">参数分隔符</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">=</code><span className="text-gray-600">键值对分隔</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">#</code><span className="text-gray-600">锚点/片段标识</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">/</code><span className="text-gray-600">路径分隔符</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">空格</code><span className="text-gray-600">不允许出现在URL中</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">如果参数值中包含这些字符，不编码就会破坏URL结构。比如搜索"C++ & Java"：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-red-600">❌ ?q=C++ & Java — 浏览器会把&当成参数分隔符</p>
          <p className="text-green-600">✅ ?q=C%2B%2B%20%26%20Java — 正确编码</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见编码对照表</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>字符</span><span>编码</span><span>说明</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600 font-mono">
            <span>空格</span><span>%20 或 +</span><span className="font-sans">最常见</span>
            <span>!</span><span>%21</span><span className="font-sans">感叹号</span>
            <span>#</span><span>%23</span><span className="font-sans">井号</span>
            <span>&</span><span>%26</span><span className="font-sans">和号</span>
            <span>+</span><span>%2B</span><span className="font-sans">加号</span>
            <span>=</span><span>%3D</span><span className="font-sans">等号</span>
            <span>?</span><span>%3F</span><span className="font-sans">问号</span>
            <span>@</span><span>%40</span><span className="font-sans">at符号</span>
            <span>/</span><span>%2F</span><span className="font-sans">斜杠</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript中的URL编码</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 编码整个URI组件（推荐）</p>
            <p>encodeURIComponent("你好 world")</p>
            <p className="text-green-600">// "%E4%BD%A0%E5%A5%BD%20world"</p>
          </div>
          <div>
            <p className="text-gray-500">// 编码整个URI（保留 :/?#[]@ 等）</p>
            <p>encodeURI("https://example.com/你好")</p>
            <p className="text-green-600">// "https://example.com/%E4%BD%A0%E5%A5%BD"</p>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ encodeURI vs encodeURIComponent 的区别：</p>
          <p>encodeURI — 编码整个URL，保留URL结构字符</p>
          <p>encodeURIComponent — 编码参数值，所有特殊字符都编码</p>
          <p className="font-medium mt-1">一般用 encodeURIComponent 编码参数值更安全。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速编解码URL？试试我们的 <Link href="/url-encode" className="text-blue-500 hover:underline font-medium">免费URL编解码工具</Link>，粘贴文本一键编码或解码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
