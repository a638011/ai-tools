import Link from 'next/link'

export default function FlexboxVsGrid() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Flexbox vs Grid：什么时候用哪个？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">CSS布局经历了从table到float，再到Flexbox和Grid的演变。如今Flexbox和Grid是现代CSS布局的两大支柱，但很多开发者分不清什么场景该用哪个。本文帮你彻底搞清楚。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">核心区别：一维 vs 二维</h2>
        <p className="text-gray-700 leading-relaxed">最根本的区别在于维度：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">Flexbox</code><span className="text-gray-600">一维布局 — 沿一个方向（行或列）排列元素</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">Grid</code><span className="text-gray-600">二维布局 — 同时控制行和列</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Flexbox 最佳场景</h2>
        <p className="text-gray-700 leading-relaxed">Flexbox适合处理单行或单列的元素排列：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 导航栏 — 水平排列菜单项 */</p>
            <p>{`.nav { display: flex; gap: 16px; align-items: center; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 卡片内部 — 垂直排列标题、内容、按钮 */</p>
            <p>{`.card { display: flex; flex-direction: column; justify-content: space-between; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 居中 — 最简单的居中方案 */</p>
            <p>{`.center { display: flex; justify-content: center; align-items: center; }`}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">典型用例：导航栏、工具栏、表单行、卡片内部布局、垂直居中。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Grid 最佳场景</h2>
        <p className="text-gray-700 leading-relaxed">Grid适合需要同时控制行列的复杂布局：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 页面整体布局 */</p>
            <p>{`.page { display: grid; grid-template-columns: 240px 1fr; grid-template-rows: 60px 1fr 40px; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 响应式卡片网格 */</p>
            <p>{`.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 仪表盘布局 — 不同大小的区块 */</p>
            <p>{`.dashboard { display: grid; grid-template-columns: repeat(4, 1fr); }`}</p>
            <p>{`.widget-large { grid-column: span 2; grid-row: span 2; }`}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">典型用例：页面骨架、图片画廊、仪表盘、杂志式排版、等高卡片网格。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">对照表：快速决策</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>场景</span><span>推荐</span><span>原因</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>导航栏</span><span className="text-blue-600 font-medium">Flexbox</span><span>单行水平排列</span>
            <span>页面骨架</span><span className="text-green-600 font-medium">Grid</span><span>需要行列同时控制</span>
            <span>卡片内部</span><span className="text-blue-600 font-medium">Flexbox</span><span>单列垂直排列</span>
            <span>卡片网格</span><span className="text-green-600 font-medium">Grid</span><span>等宽等高的网格</span>
            <span>居中元素</span><span className="text-blue-600 font-medium">Flexbox</span><span>两行代码搞定</span>
            <span>仪表盘</span><span className="text-green-600 font-medium">Grid</span><span>不规则区块布局</span>
            <span>表单行</span><span className="text-blue-600 font-medium">Flexbox</span><span>标签+输入框一行</span>
            <span>图片画廊</span><span className="text-green-600 font-medium">Grid</span><span>整齐的网格排列</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">组合使用才是王道</h2>
        <p className="text-gray-700 leading-relaxed">实际项目中，Flexbox和Grid经常一起用。Grid负责页面大框架，Flexbox处理组件内部细节：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* Grid做整体布局 */</p>
            <p>{`.page { display: grid; grid-template-columns: 1fr 3fr; gap: 20px; }`}</p>
            <p className="text-gray-500 mt-2">/* Flexbox做导航栏内部 */</p>
            <p>{`.nav { display: flex; justify-content: space-between; align-items: center; }`}</p>
            <p className="text-gray-500 mt-2">/* Flexbox做卡片内部 */</p>
            <p>{`.card { display: flex; flex-direction: column; gap: 12px; }`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见误区</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ 误区1：Grid比Flexbox更高级，应该全用Grid → 错！各有所长，简单场景用Flexbox更简洁。</p>
          <p>⚠️ 误区2：Flexbox不能做网格 → 可以用flex-wrap，但不如Grid精确控制。</p>
          <p>⚠️ 误区3：Grid兼容性不好 → 2026年所有现代浏览器都完美支持Grid。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">一句话总结</h2>
        <p className="text-gray-700 leading-relaxed">排一行东西用Flexbox，排一个网格用Grid，复杂页面两个一起用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想快速生成Flexbox或Grid布局代码？试试我们的 <Link href="/css-generator" className="text-blue-500 hover:underline font-medium">CSS生成器工具</Link>，可视化调整参数一键生成代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
