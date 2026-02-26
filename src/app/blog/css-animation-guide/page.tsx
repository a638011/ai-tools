import Link from 'next/link'

export default function CssAnimationGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS动画完全指南：@keyframes从零开始</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">CSS动画能让网页从静态变得生动。按钮悬停时的颜色渐变、加载中的旋转图标、页面滚动时的淡入效果——这些都可以用纯CSS实现，不需要JavaScript。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Transition vs Animation</h2>
        <p className="text-gray-700 leading-relaxed">CSS有两种动画方式，适用场景不同：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>transition</span><span>animation</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>触发方式</span><span>需要状态变化（hover等）</span><span>自动播放或事件触发</span>
            <span>关键帧</span><span>只有起点和终点</span><span>可定义多个关键帧</span>
            <span>循环</span><span>不支持</span><span>支持无限循环</span>
            <span>复杂度</span><span>简单过渡</span><span>复杂动画序列</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Transition基础</h2>
        <p className="text-gray-700 leading-relaxed">transition是最简单的动画方式，让属性变化变得平滑：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>.button {'{'}</p>
          <p>  background: #3b82f6;</p>
          <p>  color: white;</p>
          <p>  padding: 12px 24px;</p>
          <p>  border-radius: 8px;</p>
          <p>  transition: all 0.3s ease;</p>
          <p>{'}'}</p>
          <p></p>
          <p>.button:hover {'{'}</p>
          <p>  background: #1d4ed8;</p>
          <p>  transform: translateY(-2px);</p>
          <p>  box-shadow: 0 4px 12px rgba(0,0,0,0.15);</p>
          <p>{'}'}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* transition简写语法 */</p>
          <p>transition: property duration timing-function delay;</p>
          <p></p>
          <p className="text-gray-500">/* 示例 */</p>
          <p>transition: opacity 0.3s ease-in-out;</p>
          <p>transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);</p>
          <p>transition: all 0.3s ease;  /* 所有属性 */</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">@keyframes动画</h2>
        <p className="text-gray-700 leading-relaxed">@keyframes让你定义动画的每一步，实现复杂的动画效果：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 定义动画 */</p>
          <p>@keyframes fadeIn {'{'}</p>
          <p>  from {'{'}</p>
          <p>    opacity: 0;</p>
          <p>    transform: translateY(20px);</p>
          <p>  {'}'}</p>
          <p>  to {'{'}</p>
          <p>    opacity: 1;</p>
          <p>    transform: translateY(0);</p>
          <p>  {'}'}</p>
          <p>{'}'}</p>
          <p></p>
          <p className="text-gray-500">/* 使用动画 */</p>
          <p>.element {'{'}</p>
          <p>  animation: fadeIn 0.6s ease-out;</p>
          <p>{'}'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">多步骤关键帧</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 弹跳效果 */</p>
          <p>@keyframes bounce {'{'}</p>
          <p>  0%, 100% {'{'} transform: translateY(0); {'}'}</p>
          <p>  25% {'{'} transform: translateY(-30px); {'}'}</p>
          <p>  50% {'{'} transform: translateY(0); {'}'}</p>
          <p>  75% {'{'} transform: translateY(-15px); {'}'}</p>
          <p>{'}'}</p>
          <p></p>
          <p className="text-gray-500">/* 旋转加载图标 */</p>
          <p>@keyframes spin {'{'}</p>
          <p>  from {'{'} transform: rotate(0deg); {'}'}</p>
          <p>  to {'{'} transform: rotate(360deg); {'}'}</p>
          <p>{'}'}</p>
          <p></p>
          <p>.spinner {'{'}</p>
          <p>  animation: spin 1s linear infinite;</p>
          <p>{'}'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">animation属性详解</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>属性</span><span>值</span><span>说明</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">animation-name</span><span>keyframes名称</span><span>要使用的动画</span>
            <span className="font-mono">animation-duration</span><span>0.5s, 200ms</span><span>动画时长</span>
            <span className="font-mono">animation-timing-function</span><span>ease, linear等</span><span>速度曲线</span>
            <span className="font-mono">animation-delay</span><span>0s, 0.3s</span><span>延迟开始</span>
            <span className="font-mono">animation-iteration-count</span><span>1, 3, infinite</span><span>播放次数</span>
            <span className="font-mono">animation-direction</span><span>normal, reverse, alternate</span><span>播放方向</span>
            <span className="font-mono">animation-fill-mode</span><span>forwards, backwards, both</span><span>动画前后状态</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用缓动函数</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p><code className="bg-gray-100 px-1 rounded font-mono">ease</code> — 默认，慢→快→慢（最常用）</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">linear</code> — 匀速（适合旋转动画）</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">ease-in</code> — 慢→快（元素离开时）</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">ease-out</code> — 快→慢（元素进入时，最自然）</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">ease-in-out</code> — 慢→快→慢</p>
          <p><code className="bg-gray-100 px-1 rounded font-mono">cubic-bezier()</code> — 自定义曲线</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">性能优化技巧</h2>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 只动画 <code className="bg-gray-100 px-1 rounded">transform</code> 和 <code className="bg-gray-100 px-1 rounded">opacity</code> — 这两个属性由GPU加速，性能最好</p>
          <p>✅ 用 <code className="bg-gray-100 px-1 rounded">will-change: transform</code> 提示浏览器优化</p>
          <p>✅ 避免动画 <code className="bg-gray-100 px-1 rounded">width/height/margin/padding</code> — 会触发重排，性能差</p>
          <p>✅ 用 <code className="bg-gray-100 px-1 rounded">transform: translateX()</code> 代替 <code className="bg-gray-100 px-1 rounded">left/right</code></p>
          <p>✅ 尊重 <code className="bg-gray-100 px-1 rounded">prefers-reduced-motion</code> 媒体查询</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 尊重用户的动画偏好 */</p>
          <p>@media (prefers-reduced-motion: reduce) {'{'}</p>
          <p>  * {'{'}</p>
          <p>    animation-duration: 0.01ms !important;</p>
          <p>    transition-duration: 0.01ms !important;</p>
          <p>  {'}'}</p>
          <p>{'}'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想快速生成CSS动画代码？试试我们的 <Link href="/css-animation-generator" className="text-blue-500 hover:underline font-medium">CSS动画生成器</Link>，可视化调整参数，实时预览效果。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
