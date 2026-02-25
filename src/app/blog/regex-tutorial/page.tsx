import Link from 'next/link'

export default function RegexTutorial() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">正则表达式入门教程：从零开始学Regex</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">正则表达式（Regular Expression，简称Regex）是处理文本的瑞士军刀。无论是表单验证、日志分析、数据清洗，还是代码搜索替换，都离不开它。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础语法</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">字符匹配</h3>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">.</code><span className="text-gray-600">匹配任意单个字符（换行符除外）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">\d</code><span className="text-gray-600">匹配数字 [0-9]</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">\w</code><span className="text-gray-600">匹配字母数字下划线 [a-zA-Z0-9_]</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">\s</code><span className="text-gray-600">匹配空白字符（空格、Tab、换行）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">\D</code><span className="text-gray-600">匹配非数字（\d的反义）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">\W</code><span className="text-gray-600">匹配非字母数字（\w的反义）</span></div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">量词</h3>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">*</code><span className="text-gray-600">0次或多次</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">+</code><span className="text-gray-600">1次或多次</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">?</code><span className="text-gray-600">0次或1次</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">{'{n}'}</code><span className="text-gray-600">恰好n次</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">{'{n,m}'}</code><span className="text-gray-600">n到m次</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">{'{n,}'}</code><span className="text-gray-600">至少n次</span></div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">位置锚点</h3>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">^</code><span className="text-gray-600">字符串开头</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">$</code><span className="text-gray-600">字符串结尾</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">\b</code><span className="text-gray-600">单词边界</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用正则模式</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div><span className="text-gray-500">手机号（中国）：</span><code className="font-mono text-blue-600">^1[3-9]\d{'{9}'}$</code></div>
          <div><span className="text-gray-500">邮箱：</span><code className="font-mono text-blue-600">^[\w.-]+@[\w.-]+\.\w+$</code></div>
          <div><span className="text-gray-500">URL：</span><code className="font-mono text-blue-600">^https?:\/\/[\w.-]+\.\w+</code></div>
          <div><span className="text-gray-500">身份证号：</span><code className="font-mono text-blue-600">^\d{'{17}'}[\dXx]$</code></div>
          <div><span className="text-gray-500">IPv4地址：</span><code className="font-mono text-blue-600">\d{'{1,3}'}\.\d{'{1,3}'}\.\d{'{1,3}'}\.\d{'{1,3}'}</code></div>
          <div><span className="text-gray-500">日期（YYYY-MM-DD）：</span><code className="font-mono text-blue-600">^\d{'{4}'}-\d{'{2}'}-\d{'{2}'}$</code></div>
          <div><span className="text-gray-500">中文字符：</span><code className="font-mono text-blue-600">[\u4e00-\u9fa5]+</code></div>
          <div><span className="text-gray-500">HTML标签：</span><code className="font-mono text-blue-600">{'<[^>]+>'}</code></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实战示例</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">提取所有数字</h3>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500">// JavaScript</p>
          <p className="text-gray-700">{`"价格是99.5元，共3件".match(/\\d+\\.?\\d*/g)`}</p>
          <p className="text-green-600">// 结果: ["99.5", "3"]</p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">替换敏感信息</h3>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500">// 手机号脱敏</p>
          <p className="text-gray-700">{`"13812345678".replace(/(\\d{3})\\d{4}(\\d{4})/, "$1****$2")`}</p>
          <p className="text-green-600">// 结果: "138****5678"</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见陷阱</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ <strong>贪婪匹配</strong> — <code>.*</code> 默认尽可能多匹配，用 <code>.*?</code> 改为非贪婪</p>
          <p>⚠️ <strong>转义字符</strong> — <code>.</code> <code>*</code> <code>+</code> <code>?</code> 等特殊字符需要用 <code>\</code> 转义</p>
          <p>⚠️ <strong>性能问题</strong> — 避免嵌套量词如 <code>(a+)+</code>，可能导致灾难性回溯</p>
          <p>⚠️ <strong>多行模式</strong> — 默认 <code>^$</code> 匹配整个字符串，加 <code>m</code> 标志匹配每行</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线测试工具</h2>
        <p className="text-gray-700 leading-relaxed">学正则最好的方式就是动手练。用我们的 <Link href="/regex" className="text-blue-500 hover:underline font-medium">正则表达式在线测试工具</Link>，实时高亮匹配结果，支持常用标志（g/i/m），还有常用模板一键使用。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
