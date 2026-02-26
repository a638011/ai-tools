import Link from 'next/link'

export default function TextShadowCss() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS text-shadow属性详解：文字阴影效果大全</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">text-shadow是CSS中一个简单但效果惊艳的属性。从微妙的立体感到霓虹灯发光效果，只需一行CSS就能让文字变得与众不同。这篇文章带你掌握text-shadow的所有用法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基本语法</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>text-shadow: offset-x offset-y blur-radius color;</p>
          <p></p>
          <p className="text-gray-500">/* 各参数说明 */</p>
          <p className="text-gray-500">/* offset-x  — 水平偏移（正值向右，负值向左） */</p>
          <p className="text-gray-500">/* offset-y  — 垂直偏移（正值向下，负值向上） */</p>
          <p className="text-gray-500">/* blur-radius — 模糊半径（可选，默认0，值越大越模糊） */</p>
          <p className="text-gray-500">/* color — 阴影颜色（可选，默认继承文字颜色） */</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础效果示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 简单投影 */</p>
            <p>text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);</p>
          </div>
          <div>
            <p className="text-gray-500">/* 硬阴影（无模糊） */</p>
            <p>text-shadow: 3px 3px 0 #333;</p>
          </div>
          <div>
            <p className="text-gray-500">/* 柔和阴影 */</p>
            <p>text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);</p>
          </div>
          <div>
            <p className="text-gray-500">/* 内凹效果（白色文字+深色背景） */</p>
            <p>text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">多重阴影</h2>
        <p className="text-gray-700 leading-relaxed">text-shadow支持用逗号分隔多个阴影，叠加出丰富的效果：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 3D立体文字 */</p>
            <p>text-shadow:</p>
            <p>  1px 1px 0 #ccc,</p>
            <p>  2px 2px 0 #bbb,</p>
            <p>  3px 3px 0 #aaa,</p>
            <p>  4px 4px 0 #999;</p>
          </div>
          <div>
            <p className="text-gray-500">/* 复古长阴影 */</p>
            <p>text-shadow:</p>
            <p>  1px 1px 0 #e74c3c,</p>
            <p>  2px 2px 0 #e74c3c,</p>
            <p>  3px 3px 0 #e74c3c,</p>
            <p>  4px 4px 0 #e74c3c,</p>
            <p>  5px 5px 0 #c0392b;</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">霓虹灯发光效果</h2>
        <p className="text-gray-700 leading-relaxed">利用多重模糊阴影，可以模拟霓虹灯的发光效果：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 蓝色霓虹灯 */</p>
            <p>.neon-blue {'{'}</p>
            <p>  color: #fff;</p>
            <p>  text-shadow:</p>
            <p>    0 0 7px #fff,</p>
            <p>    0 0 10px #fff,</p>
            <p>    0 0 21px #fff,</p>
            <p>    0 0 42px #0fa,</p>
            <p>    0 0 82px #0fa,</p>
            <p>    0 0 92px #0fa;</p>
            <p>{'}'}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 红色霓虹灯 */</p>
            <p>.neon-red {'{'}</p>
            <p>  color: #fff;</p>
            <p>  text-shadow:</p>
            <p>    0 0 7px #fff,</p>
            <p>    0 0 10px #fff,</p>
            <p>    0 0 21px #fff,</p>
            <p>    0 0 42px #f00,</p>
            <p>    0 0 82px #f00,</p>
            <p>    0 0 92px #f00;</p>
            <p>{'}'}</p>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 霓虹灯效果最好搭配深色背景使用，浅色背景上效果不明显。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用效果集合</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 描边/描边效果 */</p>
            <p>text-shadow:</p>
            <p>  -1px -1px 0 #000,</p>
            <p>   1px -1px 0 #000,</p>
            <p>  -1px  1px 0 #000,</p>
            <p>   1px  1px 0 #000;</p>
          </div>
          <div>
            <p className="text-gray-500">/* 浮雕效果 */</p>
            <p>color: #ccc;</p>
            <p>text-shadow: -1px -1px 0 #fff, 1px 1px 0 #333;</p>
          </div>
          <div>
            <p className="text-gray-500">/* 火焰效果 */</p>
            <p>text-shadow:</p>
            <p>  0 0 4px #fff,</p>
            <p>  0 -5px 4px #ff3,</p>
            <p>  2px -10px 6px #fd3,</p>
            <p>  -2px -15px 11px #f80,</p>
            <p>  2px -25px 18px #f20;</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">text-shadow vs box-shadow</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>text-shadow</span><span>box-shadow</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>作用对象</span><span>文字</span><span>元素盒子</span>
            <span>扩展半径</span><span>不支持</span><span>支持（spread）</span>
            <span>内阴影</span><span>不支持</span><span>支持（inset）</span>
            <span>多重阴影</span><span>支持</span><span>支持</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">性能注意事项</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>⚠️ 大量模糊阴影会影响渲染性能，尤其在移动设备上</p>
          <p>⚠️ 避免在大段正文上使用复杂的text-shadow</p>
          <p>⚠️ 动画text-shadow时性能较差，考虑用opacity或filter替代</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想可视化调整文字阴影效果？试试我们的 <Link href="/text-shadow-generator" className="text-blue-500 hover:underline font-medium">CSS text-shadow生成器</Link>，实时预览效果并生成CSS代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
