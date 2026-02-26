import Link from 'next/link'

export default function CssGridTutorial() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS Grid布局教程：从入门到实战</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">CSS Grid是目前最强大的CSS布局系统，专为二维布局设计。如果说Flexbox擅长一维排列（一行或一列），Grid则能同时控制行和列，轻松实现复杂的页面布局。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Grid vs Flexbox</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>Grid</span><span>Flexbox</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>维度</span><span>二维（行+列）</span><span>一维（行或列）</span>
            <span>适用场景</span><span>整体页面布局</span><span>组件内部排列</span>
            <span>对齐方式</span><span>行列同时对齐</span><span>主轴/交叉轴</span>
            <span>内容驱动</span><span>布局驱动（先定义网格）</span><span>内容驱动（根据内容排列）</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 实际开发中Grid和Flexbox经常配合使用：Grid做页面大布局，Flexbox做组件内部排列。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础概念</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 创建一个Grid容器 */</p>
          <p>.container {'{'}</p>
          <p>  display: grid;</p>
          <p>  grid-template-columns: 200px 1fr 200px;</p>
          <p>  grid-template-rows: 80px 1fr 60px;</p>
          <p>  gap: 16px;</p>
          <p>{'}'}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">这段代码创建了一个3列3行的网格：左右两列固定200px，中间列自适应；顶部80px，底部60px，中间自适应。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">核心属性速查</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>容器属性</span><span>说明</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span className="font-mono">grid-template-columns</span><span>定义列的数量和宽度</span>
            <span className="font-mono">grid-template-rows</span><span>定义行的数量和高度</span>
            <span className="font-mono">gap</span><span>网格间距（行列统一）</span>
            <span className="font-mono">grid-template-areas</span><span>用名称定义区域布局</span>
            <span className="font-mono">justify-items</span><span>单元格内水平对齐</span>
            <span className="font-mono">align-items</span><span>单元格内垂直对齐</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>子项属性</span><span>说明</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span className="font-mono">grid-column</span><span>指定占据哪些列</span>
            <span className="font-mono">grid-row</span><span>指定占据哪些行</span>
            <span className="font-mono">grid-area</span><span>指定所属区域名称</span>
            <span className="font-mono">justify-self</span><span>单个项目水平对齐</span>
            <span className="font-mono">align-self</span><span>单个项目垂直对齐</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">fr单位和repeat()</h2>
        <p className="text-gray-700 leading-relaxed"><code className="bg-gray-100 px-1 rounded text-sm">fr</code>（fraction）是Grid专用的弹性单位，表示剩余空间的比例：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500">/* 三等分 */</p>
          <p>grid-template-columns: 1fr 1fr 1fr;</p>
          <p></p>
          <p className="text-gray-500">/* 等价写法 */</p>
          <p>grid-template-columns: repeat(3, 1fr);</p>
          <p></p>
          <p className="text-gray-500">/* 左侧固定，右侧自适应 */</p>
          <p>grid-template-columns: 250px 1fr;</p>
          <p></p>
          <p className="text-gray-500">/* 1:2:1 比例 */</p>
          <p>grid-template-columns: 1fr 2fr 1fr;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实战：经典页面布局</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* Header + Sidebar + Main + Footer */</p>
          <p>.layout {'{'}</p>
          <p>  display: grid;</p>
          <p>  grid-template-areas:</p>
          <p>    &quot;header  header  header&quot;</p>
          <p>    &quot;sidebar main    main&quot;</p>
          <p>    &quot;footer  footer  footer&quot;;</p>
          <p>  grid-template-columns: 250px 1fr;</p>
          <p>  grid-template-rows: 60px 1fr 40px;</p>
          <p>  min-height: 100vh;</p>
          <p>{'}'}</p>
          <p></p>
          <p>.header  {'{'} grid-area: header; {'}'}</p>
          <p>.sidebar {'{'} grid-area: sidebar; {'}'}</p>
          <p>.main    {'{'} grid-area: main; {'}'}</p>
          <p>.footer  {'{'} grid-area: footer; {'}'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">响应式Grid：auto-fit和minmax()</h2>
        <p className="text-gray-700 leading-relaxed">不用写媒体查询就能实现响应式卡片布局：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 自动响应式卡片网格 */</p>
          <p>.cards {'{'}</p>
          <p>  display: grid;</p>
          <p>  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));</p>
          <p>  gap: 24px;</p>
          <p>{'}'}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">这行代码的意思是：每张卡片最小280px，自动填充可用空间，放不下就换行。屏幕宽时显示4列，窄时自动变成1列。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p><strong>auto-fit</strong> — 尽可能多地放置列，空余空间分配给现有列</p>
          <p><strong>auto-fill</strong> — 尽可能多地放置列，空余空间保留为空列</p>
          <p><strong>minmax(min, max)</strong> — 定义列宽的最小值和最大值</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">跨行跨列</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 让某个元素跨越多列或多行 */</p>
          <p>.featured {'{'}</p>
          <p>  grid-column: 1 / 3;    /* 从第1列到第3列（跨2列） */</p>
          <p>  grid-row: 1 / 3;       /* 从第1行到第3行（跨2行） */</p>
          <p>{'}'}</p>
          <p></p>
          <p className="text-gray-500">/* 简写：跨2列 */</p>
          <p>.wide {'{'}</p>
          <p>  grid-column: span 2;</p>
          <p>{'}'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想可视化生成Grid布局代码？试试我们的 <Link href="/css-grid-generator" className="text-blue-500 hover:underline font-medium">CSS Grid生成器</Link>，拖拽设置行列，自动生成CSS代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
