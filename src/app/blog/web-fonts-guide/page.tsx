import Link from 'next/link'

export default function WebFontsGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">网页字体完全指南：Google Fonts使用教程</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">字体是网页设计中最容易被忽视但影响最大的元素之一。选对字体能让页面专业感提升一个档次。这篇文章教你如何使用Google Fonts和其他网页字体方案，让你的网站告别"默认字体"。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">网页字体的演变</h2>
        <p className="text-gray-700 leading-relaxed">早期网页只能使用用户电脑上已安装的字体（系统字体），选择非常有限。2010年左右，CSS3的<code className="bg-gray-100 px-1 rounded text-sm">@font-face</code>规则和Google Fonts的推出彻底改变了这一局面——你可以在网页中加载任何字体。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">字体分类</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>类型</span><span>特点</span><span>适用场景</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>Serif（衬线）</span><span>笔画末端有装饰线</span><span>正文、印刷品、传统风格</span>
            <span>Sans-serif（无衬线）</span><span>笔画干净无装饰</span><span>屏幕显示、现代UI、标题</span>
            <span>Monospace（等宽）</span><span>每个字符宽度相同</span><span>代码编辑器、终端、技术文档</span>
            <span>Display（展示）</span><span>装饰性强</span><span>大标题、Logo、海报</span>
            <span>Handwriting（手写）</span><span>模拟手写效果</span><span>个人博客、创意设计</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Fonts使用方法</h2>
        <p className="text-gray-700 leading-relaxed">Google Fonts提供1500+免费开源字体，是最流行的网页字体服务。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">方法一：HTML链接引入</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">&lt;!-- 在&lt;head&gt;中添加 --&gt;</p>
          <p>&lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot;&gt;</p>
          <p>&lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin&gt;</p>
          <p>&lt;link href=&quot;https://fonts.googleapis.com/css2?</p>
          <p>  family=Inter:wght@400;500;700&amp;display=swap&quot;</p>
          <p>  rel=&quot;stylesheet&quot;&gt;</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">方法二：CSS @import</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 在CSS文件顶部 */</p>
          <p>@import url(&apos;https://fonts.googleapis.com/css2?family=Inter:wght@400;700&amp;display=swap&apos;);</p>
          <p></p>
          <p>body {'{'}</p>
          <p>  font-family: &apos;Inter&apos;, sans-serif;</p>
          <p>{'}'}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">方法三：Next.js内置方案（推荐）</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// Next.js 13+ 自动优化字体加载</p>
          <p>import {'{ Inter }'} from &apos;next/font/google&apos;</p>
          <p></p>
          <p>const inter = Inter({'{'} subsets: [&apos;latin&apos;] {'}'})</p>
          <p></p>
          <p>export default function Layout({'{ children }'}) {'{'}</p>
          <p>  return (</p>
          <p>    &lt;html className={'{'}inter.className{'}'}&gt;</p>
          <p>      &lt;body&gt;{'{'}children{'}'}&lt;/body&gt;</p>
          <p>    &lt;/html&gt;</p>
          <p>  )</p>
          <p>{'}'}</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 Next.js的方案会在构建时下载字体文件并自托管，避免了对Google服务器的依赖，加载速度更快，也没有隐私问题。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">中文字体方案</h2>
        <p className="text-gray-700 leading-relaxed">中文字体文件通常很大（5-20MB），不适合直接加载。常见解决方案：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>1. 系统字体栈</strong> — 使用用户设备上的字体，零加载时间</p>
          <p><strong>2. 字体子集化</strong> — 只打包页面用到的字符</p>
          <p><strong>3. CDN服务</strong> — 使用字体CDN按需加载</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 推荐的中文系统字体栈 */</p>
          <p>font-family:</p>
          <p>  -apple-system, BlinkMacSystemFont,</p>
          <p>  &quot;Segoe UI&quot;, Roboto,</p>
          <p>  &quot;PingFang SC&quot;,      /* macOS/iOS */</p>
          <p>  &quot;Microsoft YaHei&quot;,  /* Windows */</p>
          <p>  &quot;Noto Sans SC&quot;,     /* Android/Linux */</p>
          <p>  sans-serif;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">字体性能优化</h2>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ <strong>font-display: swap</strong> — 先显示后备字体，加载完再切换</p>
          <p>✅ <strong>preconnect</strong> — 提前建立与字体服务器的连接</p>
          <p>✅ <strong>只加载需要的字重</strong> — 不要加载全部字重（400和700通常够用）</p>
          <p>✅ <strong>使用WOFF2格式</strong> — 压缩率最高的字体格式</p>
          <p>✅ <strong>自托管字体</strong> — 避免第三方依赖，减少DNS查询</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">推荐字体组合</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>现代简洁：</strong>Inter（正文）+ Inter（标题）— 万能选择</p>
          <p><strong>专业商务：</strong>Merriweather（标题）+ Open Sans（正文）</p>
          <p><strong>技术博客：</strong>JetBrains Mono（代码）+ Inter（正文）</p>
          <p><strong>创意设计：</strong>Playfair Display（标题）+ Lato（正文）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想预览不同字体的效果？试试我们的 <Link href="/font-preview" className="text-blue-500 hover:underline font-medium">字体预览工具</Link>，支持实时预览Google Fonts中的字体效果。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
