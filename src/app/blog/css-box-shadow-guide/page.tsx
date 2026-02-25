import Link from 'next/link'

export default function BoxShadowGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS Box Shadow完全指南：从基础到高级阴影效果</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">Box Shadow是CSS中最常用的视觉效果之一。一个好的阴影能让卡片、按钮、弹窗看起来更有层次感和质感。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础语法</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          box-shadow: [x偏移] [y偏移] [模糊半径] [扩展半径] [颜色] [inset];
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>x偏移</strong> — 水平方向，正值向右，负值向左</li>
          <li><strong>y偏移</strong> — 垂直方向，正值向下，负值向上</li>
          <li><strong>模糊半径</strong> — 值越大阴影越模糊柔和（默认0，锐利边缘）</li>
          <li><strong>扩展半径</strong> — 阴影大小，正值扩大，负值缩小（可选）</li>
          <li><strong>颜色</strong> — 推荐用rgba或hsla带透明度</li>
          <li><strong>inset</strong> — 内阴影（可选）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用阴影效果</h2>
        <div className="space-y-4 my-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }} />
            <div><p className="text-sm font-medium text-gray-700">Subtle</p><code className="text-xs font-mono text-gray-500">0 1px 3px rgba(0,0,0,0.12)</code></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
            <div><p className="text-sm font-medium text-gray-700">Medium</p><code className="text-xs font-mono text-gray-500">0 4px 6px -1px rgba(0,0,0,0.1)</code></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl" style={{ boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
            <div><p className="text-sm font-medium text-gray-700">Large</p><code className="text-xs font-mono text-gray-500">0 10px 25px -5px rgba(0,0,0,0.1)</code></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl" style={{ boxShadow: '0 20px 50px -12px rgba(0,0,0,0.25)' }} />
            <div><p className="text-sm font-medium text-gray-700">Elevated</p><code className="text-xs font-mono text-gray-500">0 20px 50px -12px rgba(0,0,0,0.25)</code></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">高级技巧</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">多层阴影</h3>
        <p className="text-gray-700 leading-relaxed">用逗号分隔多个阴影，创造更自然的效果：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-xs text-gray-700">
          box-shadow:<br/>
          {'  '}0 1px 2px rgba(0,0,0,0.07),<br/>
          {'  '}0 2px 4px rgba(0,0,0,0.07),<br/>
          {'  '}0 4px 8px rgba(0,0,0,0.07),<br/>
          {'  '}0 8px 16px rgba(0,0,0,0.07);
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">彩色阴影</h3>
        <p className="text-gray-700 leading-relaxed">用元素本身的颜色做阴影，效果更生动：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">内阴影（Inset）</h3>
        <p className="text-gray-700 leading-relaxed">创造凹陷效果，常用于输入框和按钮按下状态：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">性能注意事项</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ box-shadow会触发重绘（repaint），大量使用可能影响性能</p>
          <p>⚠️ 模糊半径越大，渲染成本越高</p>
          <p>💡 动画阴影时，考虑用伪元素+opacity代替直接动画box-shadow</p>
          <p>💡 Tailwind CSS提供了优化好的阴影类：shadow-sm/md/lg/xl/2xl</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线生成器</h2>
        <p className="text-gray-700 leading-relaxed">手写box-shadow参数太麻烦？用我们的 <Link href="/box-shadow" className="text-blue-500 hover:underline font-medium">Box Shadow可视化生成器</Link>，拖动滑块实时预览效果，一键复制CSS代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多设计工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
