import Link from 'next/link'

export default function WebAccessibilityGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">网页无障碍设计指南：让所有人都能使用你的网站</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">全球约有13亿人（占总人口16%）存在某种形式的残障。网页无障碍（Web Accessibility，简称 a11y）不仅是社会责任，也是法律要求和商业机会。一个无障碍的网站能覆盖更多用户，提升SEO表现，并避免法律风险。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是网页无障碍？</h2>
        <p className="text-gray-700 leading-relaxed">网页无障碍是指让所有人——包括视觉、听觉、运动和认知障碍的用户——都能感知、理解、导航和与网页交互。核心标准是 W3C 制定的 WCAG（Web Content Accessibility Guidelines）。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">可感知</code><span className="text-gray-600">信息和界面组件必须以用户能感知的方式呈现</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">可操作</code><span className="text-gray-600">界面组件和导航必须可操作（键盘、语音等）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">可理解</code><span className="text-gray-600">信息和操作方式必须可理解</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">健壮性</code><span className="text-gray-600">内容必须能被各种用户代理（包括辅助技术）可靠解析</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见的无障碍问题</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p className="text-red-600 font-medium">❌ 最常见的无障碍错误：</p>
          <p>• 图片没有 alt 属性 — 屏幕阅读器无法描述图片内容</p>
          <p>• 颜色对比度不足 — 低视力用户看不清文字</p>
          <p>• 表单没有 label — 屏幕阅读器不知道输入框的用途</p>
          <p>• 只能用鼠标操作 — 键盘用户无法使用</p>
          <p>• 缺少页面标题和标题层级 — 导航困难</p>
          <p>• 动态内容更新没有通知 — 屏幕阅读器不知道页面变化</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">图片替代文本</h2>
        <p className="text-gray-700 leading-relaxed">每张有意义的图片都需要 alt 属性。好的 alt 文本应该描述图片的内容和功能，而不是外观。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-red-600">❌ &lt;img src=&quot;chart.png&quot; /&gt;</p>
          <p className="text-red-600">❌ &lt;img src=&quot;chart.png&quot; alt=&quot;图片&quot; /&gt;</p>
          <p className="text-green-600">✅ &lt;img src=&quot;chart.png&quot; alt=&quot;2025年销售额柱状图，Q4最高达500万&quot; /&gt;</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">// 装饰性图片使用空 alt</p>
          <p className="text-green-600">✅ &lt;img src=&quot;divider.png&quot; alt=&quot;&quot; role=&quot;presentation&quot; /&gt;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">颜色对比度</h2>
        <p className="text-gray-700 leading-relaxed">WCAG 要求文本和背景之间有足够的对比度：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>级别</span><span>普通文本</span><span>大文本（18px+粗体）</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>AA（最低要求）</span><span>4.5:1</span><span>3:1</span>
            <span>AAA（推荐）</span><span>7:1</span><span>4.5:1</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">💡 不要仅用颜色传达信息。</p>
          <p className="mt-1">比如表单验证错误，不要只把边框变红，还要加上文字提示和图标。色盲用户可能无法区分红色和绿色。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">键盘可访问性</h2>
        <p className="text-gray-700 leading-relaxed">所有交互功能都必须支持键盘操作。很多运动障碍用户无法使用鼠标。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500">/* 永远不要移除 focus 样式 */</p>
          <p className="text-red-600">❌ *:focus &#123; outline: none; &#125;</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">/* 自定义 focus 样式 */</p>
          <p className="text-green-600">✅ *:focus-visible &#123;</p>
          <p className="text-green-600">     outline: 2px solid #4A90D9;</p>
          <p className="text-green-600">     outline-offset: 2px;</p>
          <p className="text-green-600">   &#125;</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p className="font-medium">键盘导航基本操作：</p>
          <p>Tab — 在可交互元素间前进</p>
          <p>Shift+Tab — 后退</p>
          <p>Enter/Space — 激活按钮和链接</p>
          <p>方向键 — 在菜单、选项卡中导航</p>
          <p>Escape — 关闭弹窗和下拉菜单</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">语义化 HTML</h2>
        <p className="text-gray-700 leading-relaxed">使用正确的 HTML 元素是无障碍的基础。屏幕阅读器依赖语义化标签来理解页面结构。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-red-600">❌ &lt;div onclick=&quot;submit()&quot;&gt;提交&lt;/div&gt;</p>
          <p className="text-green-600">✅ &lt;button type=&quot;submit&quot;&gt;提交&lt;/button&gt;</p>
          <p>&nbsp;</p>
          <p className="text-red-600">❌ &lt;div class=&quot;nav&quot;&gt;...&lt;/div&gt;</p>
          <p className="text-green-600">✅ &lt;nav aria-label=&quot;主导航&quot;&gt;...&lt;/nav&gt;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ARIA 属性</h2>
        <p className="text-gray-700 leading-relaxed">当原生 HTML 无法满足需求时，使用 ARIA（Accessible Rich Internet Applications）属性补充语义信息：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">&lt;!-- 动态内容区域 --&gt;</p>
          <p>&lt;div aria-live=&quot;polite&quot;&gt;搜索到 42 条结果&lt;/div&gt;</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">&lt;!-- 展开/折叠 --&gt;</p>
          <p>&lt;button aria-expanded=&quot;false&quot;&gt;显示详情&lt;/button&gt;</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">&lt;!-- 加载状态 --&gt;</p>
          <p>&lt;div aria-busy=&quot;true&quot;&gt;加载中...&lt;/div&gt;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">测试工具</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Lighthouse</code><span className="text-gray-600">Chrome内置，自动检测常见无障碍问题</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">axe DevTools</code><span className="text-gray-600">浏览器扩展，详细的无障碍审计报告</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">WAVE</code><span className="text-gray-600">在线检测工具，可视化标注问题位置</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">屏幕阅读器</code><span className="text-gray-600">VoiceOver(Mac)、NVDA(Windows) 实际体验</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">我们的所有工具都遵循无障碍设计原则，支持键盘操作和屏幕阅读器。访问 <Link href="/" className="text-blue-500 hover:underline font-medium">www.cyunyun.com</Link> 体验对所有人友好的在线工具。</p>
      </article>
    </main>
  )
}
