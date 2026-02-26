import Link from 'next/link'

export default function PercentageCalculation() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">百分比计算方法大全：涨幅、折扣、占比怎么算？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">打折多少钱？涨了百分之几？这个数占总数的多少？百分比计算看似简单，但很多人在实际场景中还是会搞混。这篇文章整理了最常用的百分比计算方法，配合公式和例子，一看就懂。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">百分比的本质</h2>
        <p className="text-gray-700 leading-relaxed">百分比就是"每一百份中占多少份"。50%就是50/100 = 0.5，也就是一半。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>百分比 = 部分 ÷ 整体 × 100%</p>
          <p className="text-gray-500 mt-1">25% = 25/100 = 0.25 = 1/4</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">六种最常见的百分比计算</h2>

        <p className="text-gray-700 leading-relaxed font-medium">1. 求某个数的百分之几</p>
        <p className="text-gray-700 leading-relaxed">问题：200的30%是多少？</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-700">200 × 30% = 200 × 0.3 = <span className="text-green-600 font-bold">60</span></p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">2. 求一个数占另一个数的百分比</p>
        <p className="text-gray-700 leading-relaxed">问题：班级50人，有15人戴眼镜，占比多少？</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-700">15 ÷ 50 × 100% = <span className="text-green-600 font-bold">30%</span></p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">3. 已知百分比求原数</p>
        <p className="text-gray-700 leading-relaxed">问题：某数的25%是80，求这个数。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-700">80 ÷ 25% = 80 ÷ 0.25 = <span className="text-green-600 font-bold">320</span></p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">4. 计算涨幅/跌幅</p>
        <p className="text-gray-700 leading-relaxed">问题：股价从80元涨到100元，涨幅是多少？</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-700">涨幅 = (新值 - 旧值) ÷ 旧值 × 100%</p>
          <p className="text-gray-700">= (100 - 80) ÷ 80 × 100%</p>
          <p className="text-gray-700">= <span className="text-green-600 font-bold">25%</span></p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 注意：从80涨到100是涨25%，但从100跌到80是跌20%！涨跌幅的基数不同，百分比也不同。</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">5. 计算折扣价</p>
        <p className="text-gray-700 leading-relaxed">问题：原价500元，打7折（30% off），实付多少？</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500">// 中国说法：打7折 = 付原价的70%</p>
          <p className="text-gray-700">500 × 70% = <span className="text-green-600 font-bold">350元</span></p>
          <p className="text-gray-500 mt-2">// 英文说法：30% off = 减去30%</p>
          <p className="text-gray-700">500 × (1 - 30%) = 500 × 0.7 = <span className="text-green-600 font-bold">350元</span></p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">6. 连续百分比变化</p>
        <p className="text-gray-700 leading-relaxed">问题：先涨20%再跌20%，回到原价了吗？</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-700">100 × 1.2 × 0.8 = <span className="text-red-600 font-bold">96</span>（不是100！）</p>
          <p className="text-gray-500 mt-1">先涨20%再跌20%，实际亏了4%</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">百分比 vs 百分点</h2>
        <p className="text-gray-700 leading-relaxed">这两个概念经常被混淆：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 利率从3%升到5%，升了 <span className="font-medium">2个百分点</span></p>
          <p>• 利率从3%升到5%，涨幅是 <span className="font-medium">66.7%</span>（(5-3)÷3×100%）</p>
          <p>• 百分点是绝对差值，百分比是相对变化</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用百分比速算表</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>百分比</span><span>分数</span><span>小数</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600 font-mono">
            <span>10%</span><span>1/10</span><span>0.1</span>
            <span>12.5%</span><span>1/8</span><span>0.125</span>
            <span>20%</span><span>1/5</span><span>0.2</span>
            <span>25%</span><span>1/4</span><span>0.25</span>
            <span>33.3%</span><span>1/3</span><span>0.333</span>
            <span>50%</span><span>1/2</span><span>0.5</span>
            <span>66.7%</span><span>2/3</span><span>0.667</span>
            <span>75%</span><span>3/4</span><span>0.75</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">代码实现</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 常用百分比计算函数</p>
            <p>{`const pct = {`}</p>
            <p>{`  // 求value的percent%`}</p>
            <p>{`  of: (value, percent) =>`}</p>
            <p>{`    value * percent / 100,`}</p>
            <p>{`  // part占whole的百分比`}</p>
            <p>{`  ratio: (part, whole) =>`}</p>
            <p>{`    (part / whole * 100).toFixed(2) + '%',`}</p>
            <p>{`  // 从oldVal到newVal的变化率`}</p>
            <p>{`  change: (oldVal, newVal) =>`}</p>
            <p>{`    ((newVal - oldVal) / oldVal * 100)`}</p>
            <p>{`      .toFixed(2) + '%',`}</p>
            <p>{`  // 折扣价（discount为折扣比例如0.3）`}</p>
            <p>{`  discount: (price, off) =>`}</p>
            <p>{`    price * (1 - off),`}</p>
            <p>{`};`}</p>
            <p className="text-green-600 mt-1">// pct.of(200, 30) → 60</p>
            <p className="text-green-600">// pct.ratio(15, 50) → '30.00%'</p>
            <p className="text-green-600">// pct.change(80, 100) → '25.00%'</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线计算</h2>
        <p className="text-gray-700 leading-relaxed">需要快速算百分比？试试我们的 <Link href="/percentage-calculator" className="text-blue-500 hover:underline font-medium">免费百分比计算器</Link>，支持占比、涨跌幅、折扣等多种计算模式。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
