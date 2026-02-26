import Link from 'next/link'

export default function SvgBasicsTutorial() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SVG入门教程：矢量图形从零开始</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">SVG（Scalable Vector Graphics）是一种基于XML的矢量图形格式。与PNG、JPG等位图不同，SVG无论放大多少倍都不会模糊。它是图标、Logo、图表和动画的理想选择。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SVG vs 位图：什么时候用SVG？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>SVG</span><span>PNG/JPG</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>缩放</span><span className="text-green-600">无损缩放</span><span className="text-red-600">放大模糊</span>
            <span>文件大小</span><span>简单图形极小</span><span>照片更小</span>
            <span>可编辑</span><span className="text-green-600">代码可编辑</span><span className="text-red-600">需要图形软件</span>
            <span>动画</span><span className="text-green-600">CSS/JS动画</span><span className="text-red-600">需要GIF/视频</span>
            <span>适合</span><span>图标、Logo、图表</span><span>照片、截图</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SVG基础结构</h2>
        <p className="text-gray-700 leading-relaxed">一个最简单的SVG文件：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'}</p>
          <p>{'  <circle cx="50" cy="50" r="40" fill="#3B82F6" />'}</p>
          <p>{'</svg>'}</p>
        </div>
        <p className="text-gray-700 leading-relaxed"><code className="bg-gray-100 px-1 rounded text-sm">viewBox="0 0 100 100"</code> 定义了画布坐标系：起点(0,0)，宽100，高100。实际显示大小由CSS控制。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用基础图形</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">{'<!-- 矩形 -->'}</p>
            <p>{'<rect x="10" y="10" width="80" height="60" rx="8" fill="#EF4444" />'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- 圆形 -->'}</p>
            <p>{'<circle cx="50" cy="50" r="40" fill="#3B82F6" />'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- 椭圆 -->'}</p>
            <p>{'<ellipse cx="50" cy="50" rx="40" ry="25" fill="#10B981" />'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- 线段 -->'}</p>
            <p>{'<line x1="10" y1="10" x2="90" y2="90" stroke="#000" stroke-width="2" />'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- 多边形（三角形） -->'}</p>
            <p>{'<polygon points="50,10 90,90 10,90" fill="#F59E0B" />'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- 文本 -->'}</p>
            <p>{'<text x="50" y="55" text-anchor="middle" font-size="20">Hello</text>'}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Path路径：SVG的灵魂</h2>
        <p className="text-gray-700 leading-relaxed">path元素可以绘制任意形状，是SVG最强大的元素。它通过d属性中的命令来描述路径：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">M</code><span className="text-gray-600">Move to — 移动到指定点（起点）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">L</code><span className="text-gray-600">Line to — 画直线到指定点</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">H</code><span className="text-gray-600">Horizontal — 画水平线</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">V</code><span className="text-gray-600">Vertical — 画垂直线</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">C</code><span className="text-gray-600">Curve — 三次贝塞尔曲线</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">Q</code><span className="text-gray-600">Quadratic — 二次贝塞尔曲线</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">A</code><span className="text-gray-600">Arc — 弧线</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-8">Z</code><span className="text-gray-600">Close — 闭合路径</span></div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">{'<!-- 画一个简单的心形 -->'}</p>
          <p>{'<path d="M50,30 A20,20,0,0,1,90,30 A20,20,0,0,1,50,70 A20,20,0,0,1,10,30 A20,20,0,0,1,50,30Z" fill="red"/>'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用CSS控制SVG样式</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 改变颜色 */</p>
            <p>{`svg { fill: currentColor; color: #3B82F6; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 悬停变色 */</p>
            <p>{`svg:hover { fill: #EF4444; transition: fill 0.3s; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 控制大小 */</p>
            <p>{`svg { width: 24px; height: 24px; }`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SVG优化技巧</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>💡 删除编辑器元数据 — Illustrator/Figma导出的SVG包含大量无用信息</p>
          <p>💡 简化path数据 — 减少小数位数，合并相近的点</p>
          <p>💡 使用SVGO工具 — 自动优化SVG，通常能减少30-60%体积</p>
          <p>💡 用symbol+use复用 — 多次使用同一图标时避免重复代码</p>
          <p>💡 内联小SVG — 小图标直接内联到HTML中，减少HTTP请求</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要查看或编辑SVG？试试我们的 <Link href="/svg-viewer" className="text-blue-500 hover:underline font-medium">SVG查看器</Link>，在线预览和编辑SVG代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
