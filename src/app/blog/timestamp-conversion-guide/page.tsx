import Link from 'next/link'

export default function TimestampGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unix时间戳是什么？时间戳转换完全指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">在API返回的数据里，你经常会看到类似 <code className="bg-gray-100 px-1 rounded">1709078400</code> 这样的数字。这就是Unix时间戳——计算机世界里最通用的时间表示方式。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是Unix时间戳？</h2>
        <p className="text-gray-700 leading-relaxed">Unix时间戳是从1970年1月1日00:00:00 UTC（称为"Unix纪元"）到某一时刻经过的秒数。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500">1970-01-01 00:00:00 UTC → 0</p>
          <p className="text-gray-500">2000-01-01 00:00:00 UTC → 946684800</p>
          <p className="text-gray-500">2026-02-26 00:00:00 UTC → 1772006400</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么用时间戳？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>无时区歧义</strong> — 全球统一，不受时区影响</li>
          <li><strong>易于计算</strong> — 两个时间戳相减就是时间差（秒）</li>
          <li><strong>存储高效</strong> — 一个整数比日期字符串占用更少空间</li>
          <li><strong>排序简单</strong> — 数字大小直接对应时间先后</li>
          <li><strong>跨语言通用</strong> — 所有编程语言都支持</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">秒级 vs 毫秒级</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 注意区分：</p>
          <p>秒级时间戳：<code className="bg-white px-1 rounded">1709078400</code>（10位数字）</p>
          <p>毫秒级时间戳：<code className="bg-white px-1 rounded">1709078400000</code>（13位数字）</p>
          <p className="mt-1">JavaScript的 Date.now() 返回毫秒级，大多数后端API用秒级。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">各语言获取时间戳</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// JavaScript（毫秒）</p>
            <p>Date.now()  // 1709078400000</p>
            <p>Math.floor(Date.now() / 1000)  // 秒级</p>
          </div>
          <div>
            <p className="text-gray-500"># Python</p>
            <p>import time</p>
            <p>int(time.time())  # 1709078400</p>
          </div>
          <div>
            <p className="text-gray-500">// Java</p>
            <p>System.currentTimeMillis() / 1000</p>
          </div>
          <div>
            <p className="text-gray-500">// PHP</p>
            <p>time()  // 1709078400</p>
          </div>
          <div>
            <p className="text-gray-500"># Shell</p>
            <p>date +%s</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2038年问题</h2>
        <p className="text-gray-700 leading-relaxed">32位系统用有符号整数存储时间戳，最大值是2,147,483,647，对应2038年1月19日03:14:07 UTC。届时会溢出回到1970年。现代64位系统已解决此问题。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线转换工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速转换时间戳？试试我们的 <Link href="/timestamp" className="text-blue-500 hover:underline font-medium">免费时间戳转换工具</Link>，支持秒级/毫秒级时间戳与日期互转，显示多个时区。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
