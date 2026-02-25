import Link from 'next/link'

export default function GradientDesignTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS渐变设计技巧：打造专业级渐变背景</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">渐变是现代UI设计中最常用的视觉元素之一。一个好的渐变能让页面瞬间提升档次，但用不好就会显得廉价。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">渐变类型</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>线性渐变</strong> — <code className="bg-gray-100 px-1 rounded text-sm">linear-gradient()</code> 沿直线方向过渡</li>
          <li><strong>径向渐变</strong> — <code className="bg-gray-100 px-1 rounded text-sm">radial-gradient()</code> 从中心向外扩散</li>
          <li><strong>锥形渐变</strong> — <code className="bg-gray-100 px-1 rounded text-sm">conic-gradient()</code> 围绕中心点旋转</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">配色原则</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 使用相邻色（色轮上相近的颜色）— 最安全，如蓝→紫、橙→红</p>
          <p>✅ 控制色相跨度在60°以内 — 避免"彩虹效果"</p>
          <p>✅ 保持相近的饱和度和亮度 — 过渡更自然</p>
          <p>❌ 避免互补色直接渐变 — 中间会出现灰色/脏色</p>
          <p>❌ 避免纯黑到纯白 — 太生硬，用深灰到浅灰更柔和</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">经典渐变配色</h2>
        <div className="space-y-3 my-4">
          <div className="flex items-center gap-3">
            <div className="w-full h-12 rounded-xl" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }} />
            <code className="text-xs font-mono text-gray-500 w-48 shrink-0">#667eea → #764ba2</code>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-full h-12 rounded-xl" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }} />
            <code className="text-xs font-mono text-gray-500 w-48 shrink-0">#f093fb → #f5576c</code>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-full h-12 rounded-xl" style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }} />
            <code className="text-xs font-mono text-gray-500 w-48 shrink-0">#4facfe → #00f2fe</code>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-full h-12 rounded-xl" style={{ background: 'linear-gradient(135deg, #43e97b, #38f9d7)' }} />
            <code className="text-xs font-mono text-gray-500 w-48 shrink-0">#43e97b → #38f9d7</code>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用技巧</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. 用角度创造动感</h3>
        <p className="text-gray-700 leading-relaxed">135°和45°的对角线渐变比水平/垂直渐变更有活力。</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. 多色渐变加中间色</h3>
        <p className="text-gray-700 leading-relaxed">两个颜色之间加一个中间色可以避免脏色问题：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          linear-gradient(135deg, #ff6b6b, #ffa06b, #ffd93d)
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. 渐变叠加</h3>
        <p className="text-gray-700 leading-relaxed">在图片上叠加半透明渐变，创造高级感：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(photo.jpg);
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. 渐变文字</h3>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          background: linear-gradient(135deg, #667eea, #764ba2);<br/>
          -webkit-background-clip: text;<br/>
          -webkit-text-fill-color: transparent;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">性能提示</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>💡 CSS渐变比图片更高效（无HTTP请求，可缩放）</p>
          <p>💡 避免在大面积元素上使用复杂的多色渐变</p>
          <p>💡 动画渐变时用opacity或transform，不要直接动画background</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线生成器</h2>
        <p className="text-gray-700 leading-relaxed">用我们的 <Link href="/gradient" className="text-blue-500 hover:underline font-medium">CSS渐变在线生成器</Link>，可视化选色、调角度、预设模板，一键复制CSS代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多设计工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
