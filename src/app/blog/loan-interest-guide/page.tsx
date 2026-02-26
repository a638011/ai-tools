import Link from 'next/link'

export default function LoanInterestGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">房贷计算指南：等额本息vs等额本金哪个划算？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">买房贷款时，银行会问你选"等额本息"还是"等额本金"。这两种还款方式到底有什么区别？哪种更省钱？哪种更适合你？这篇文章用真实数字帮你算清楚。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">两种还款方式的区别</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-4">
          <div>
            <p className="font-medium text-blue-600">等额本息（Equal Installment）</p>
            <p>每月还款金额固定不变。前期还的利息多、本金少，后期还的本金多、利息少。</p>
            <p className="text-gray-500 mt-1">特点：月供稳定，便于规划，但总利息较多。</p>
          </div>
          <div>
            <p className="font-medium text-green-600">等额本金（Equal Principal）</p>
            <p>每月还的本金固定，利息逐月递减，所以月供逐月减少。</p>
            <p className="text-gray-500 mt-1">特点：前期压力大，但总利息较少。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">计算公式</h2>
        <p className="text-gray-700 leading-relaxed font-medium">等额本息月供公式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>月供 = P × r × (1+r)^n ÷ [(1+r)^n - 1]</p>
          <p className="text-gray-500 mt-2">P = 贷款本金</p>
          <p className="text-gray-500">r = 月利率（年利率÷12）</p>
          <p className="text-gray-500">n = 还款总月数</p>
        </div>
        <p className="text-gray-700 leading-relaxed font-medium mt-4">等额本金月供公式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>第m个月月供 = P÷n + (P - P×(m-1)÷n) × r</p>
          <p className="text-gray-500 mt-2">每月本金固定 = P ÷ n</p>
          <p className="text-gray-500">每月利息 = 剩余本金 × 月利率</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实例对比：100万贷款30年</h2>
        <p className="text-gray-700 leading-relaxed">假设贷款100万元，年利率4.2%，期限30年（360个月）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>对比项</span><span>等额本息</span><span>等额本金</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>首月月供</span><span>4,890元</span><span>6,278元</span>
            <span>末月月供</span><span>4,890元</span><span>2,787元</span>
            <span>总还款额</span><span>约176.0万</span><span>约163.2万</span>
            <span>总利息</span><span className="text-red-600 font-medium">约76.0万</span><span className="text-green-600 font-medium">约63.2万</span>
            <span>利息差额</span><span className="text-blue-600 font-medium">等额本金少付约12.8万</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">月供变化趋势</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p className="font-medium">等额本息（始终不变）：</p>
          <p className="font-mono text-gray-500">第1月: 4,890 → 第180月: 4,890 → 第360月: 4,890</p>
          <p className="font-medium mt-3">等额本金（逐月递减）：</p>
          <p className="font-mono text-gray-500">第1月: 6,278 → 第180月: 4,522 → 第360月: 2,787</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">怎么选？看你的情况</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">选等额本息的情况：</p>
            <p className="text-gray-600">• 月收入稳定，希望每月还款额固定好规划</p>
            <p className="text-gray-600">• 当前收入不算高，无法承受较高的前期月供</p>
            <p className="text-gray-600">• 计划提前还款（两种方式差异会缩小）</p>
            <p className="text-gray-600">• 有其他投资渠道，收益率高于贷款利率</p>
          </div>
          <div>
            <p className="font-medium">选等额本金的情况：</p>
            <p className="text-gray-600">• 当前收入较高，能承受前期较高月供</p>
            <p className="text-gray-600">• 想少付利息，追求总成本最低</p>
            <p className="text-gray-600">• 预期未来收入可能下降（如临近退休）</p>
            <p className="text-gray-600">• 不打算提前还款</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">提前还款划算吗？</h2>
        <p className="text-gray-700 leading-relaxed">这取决于你已经还了多久：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• <span className="font-medium">等额本息</span>：前1/3期限内提前还款比较划算（利息占比高）</p>
          <p>• <span className="font-medium">等额本金</span>：前1/4期限内提前还款比较划算</p>
          <p>• 已还超过一半：大部分利息已经付了，提前还款意义不大</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 提前还款前注意：部分银行对提前还款收取违约金（通常还款不满1-3年），还款前先咨询银行。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">代码实现</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 等额本息月供计算</p>
            <p>{`function equalInstallment(principal, yearRate, years) {`}</p>
            <p>{`  const r = yearRate / 100 / 12;`}</p>
            <p>{`  const n = years * 12;`}</p>
            <p>{`  const monthly = principal * r`}</p>
            <p>{`    * Math.pow(1+r, n)`}</p>
            <p>{`    / (Math.pow(1+r, n) - 1);`}</p>
            <p>{`  return {`}</p>
            <p>{`    monthly: Math.round(monthly * 100) / 100,`}</p>
            <p>{`    total: Math.round(monthly * n * 100) / 100,`}</p>
            <p>{`    interest: Math.round((monthly*n - principal) * 100) / 100`}</p>
            <p>{`  };`}</p>
            <p>{`}`}</p>
          </div>
          <div>
            <p className="text-gray-500">// 等额本金总利息计算</p>
            <p>{`function equalPrincipal(principal, yearRate, years) {`}</p>
            <p>{`  const r = yearRate / 100 / 12;`}</p>
            <p>{`  const n = years * 12;`}</p>
            <p>{`  const monthlyPrincipal = principal / n;`}</p>
            <p>{`  const totalInterest = (n + 1)`}</p>
            <p>{`    * principal * r / 2;`}</p>
            <p>{`  return {`}</p>
            <p>{`    firstMonth: Math.round(`}</p>
            <p>{`      (monthlyPrincipal + principal * r) * 100) / 100,`}</p>
            <p>{`    total: Math.round((principal + totalInterest) * 100) / 100,`}</p>
            <p>{`    interest: Math.round(totalInterest * 100) / 100`}</p>
            <p>{`  };`}</p>
            <p>{`}`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线计算</h2>
        <p className="text-gray-700 leading-relaxed">想快速算出你的月供？试试我们的 <Link href="/loan-calculator" className="text-blue-500 hover:underline font-medium">免费房贷计算器</Link>，支持等额本息和等额本金对比，还能模拟提前还款。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
