import Link from 'next/link'

export default function CssUnitsGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS中px、rem、em、vw有什么区别？前端单位完全指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">CSS单位是前端开发的基础知识，但很多开发者对各种单位的区别和使用场景并不清楚。这篇文章帮你彻底搞懂。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">px — 像素（绝对单位）</h2>
        <p className="text-gray-700 leading-relaxed">px是最常用的CSS单位，1px对应屏幕上的一个物理像素（在标准DPI下）。</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>优点：精确控制，所见即所得</li>
          <li>缺点：不响应用户的字体大小设置，不利于无障碍访问</li>
          <li>适用：边框、阴影、固定尺寸图标</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">rem — 根元素相对单位</h2>
        <p className="text-gray-700 leading-relaxed">rem相对于根元素（html）的font-size。默认情况下，浏览器的根字号是16px，所以1rem = 16px。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          html {'{'} font-size: 16px; {'}'}<br/>
          /* 1rem = 16px, 1.5rem = 24px, 0.875rem = 14px */
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>优点：响应用户字体偏好，全局统一缩放</li>
          <li>缺点：需要心算转换（可以用 <Link href="/css-units" className="text-blue-500 hover:underline">CSS单位转换器</Link>）</li>
          <li>适用：字体大小、间距、布局尺寸（推荐首选）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">em — 父元素相对单位</h2>
        <p className="text-gray-700 leading-relaxed">em相对于当前元素的font-size（如果用于font-size属性，则相对于父元素）。</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>优点：组件内部自适应缩放</li>
          <li>缺点：嵌套时会产生复合效应（1.2em × 1.2em = 1.44em）</li>
          <li>适用：组件内的padding、margin（相对于自身字号）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">vw / vh — 视口单位</h2>
        <p className="text-gray-700 leading-relaxed">vw和vh分别是视口宽度和高度的1%。100vw = 视口全宽，100vh = 视口全高。</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>优点：完美适配不同屏幕尺寸</li>
          <li>缺点：在移动端vh可能受地址栏影响</li>
          <li>适用：全屏布局、响应式字体、hero区域</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">% — 百分比</h2>
        <p className="text-gray-700 leading-relaxed">百分比相对于父元素的对应属性。width: 50% 表示父元素宽度的一半。</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>适用：流式布局、响应式宽度</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际开发建议</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 字体大小 → 用 <strong>rem</strong></p>
          <p>✅ 间距和内边距 → 用 <strong>rem</strong> 或 <strong>em</strong></p>
          <p>✅ 边框和阴影 → 用 <strong>px</strong></p>
          <p>✅ 全屏布局 → 用 <strong>vh/vw</strong></p>
          <p>✅ 响应式宽度 → 用 <strong>%</strong></p>
          <p>❌ 避免全部用px → 不利于无障碍和响应式</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">快速转换参考</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm font-mono">
          <p>12px = 0.75rem</p>
          <p>14px = 0.875rem</p>
          <p>16px = 1rem（默认）</p>
          <p>18px = 1.125rem</p>
          <p>20px = 1.25rem</p>
          <p>24px = 1.5rem</p>
          <p>32px = 2rem</p>
        </div>
        <p className="text-gray-700 leading-relaxed">需要更多转换？试试我们的 <Link href="/css-units" className="text-blue-500 hover:underline font-medium">CSS单位在线转换器</Link>，支持px/rem/em/vw/vh/pt/%一键互转。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
