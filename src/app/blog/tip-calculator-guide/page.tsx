import Link from 'next/link'

export default function TipCalculatorGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">小费计算指南：各国小费文化和计算方法</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">出国旅行或在国际餐厅用餐时，小费问题常常让人困惑：该给多少？什么场合需要给？给少了会不会失礼？本文整理了全球主要国家的小费文化和计算方法，让你出行不再尴尬。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">小费的基本计算</h2>
        <p className="text-gray-700 leading-relaxed">小费通常按消费金额的百分比计算：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>小费 = 消费金额 × 小费比例</p>
          <p></p>
          <p className="text-gray-500">// 例：餐费$80，给15%小费</p>
          <p>$80 × 15% = $12</p>
          <p>总计：$80 + $12 = $92</p>
        </div>
        <p className="text-gray-700 leading-relaxed">多人AA时，先算总金额（含小费），再除以人数：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 4人用餐，餐费$200，小费18%</p>
          <p>小费：$200 × 18% = $36</p>
          <p>总计：$200 + $36 = $236</p>
          <p>每人：$236 ÷ 4 = $59</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">各国小费文化一览</h2>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">🇺🇸 美国 — 小费文化最浓</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">餐厅</span><span className="text-gray-600">15-20%，高档餐厅20-25%</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">酒吧</span><span className="text-gray-600">每杯$1-2，或消费额的15-20%</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">出租车</span><span className="text-gray-600">15-20%</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">酒店行李</span><span className="text-gray-600">每件$1-2</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">客房清洁</span><span className="text-gray-600">每晚$2-5</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">理发</span><span className="text-gray-600">15-20%</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">在美国，服务员的基本工资很低（有些州低至$2.13/小时），小费是他们的主要收入来源。不给小费被视为非常不礼貌。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">🇬🇧 英国</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">餐厅</span><span className="text-gray-600">10-15%，很多餐厅已含服务费</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">出租车</span><span className="text-gray-600">凑整即可</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">酒吧</span><span className="text-gray-600">通常不给小费</span></div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">🇯🇵 日本 — 不需要小费</h2>
        <p className="text-gray-700 leading-relaxed">日本是不给小费的国家。给小费可能被视为侮辱，暗示对方需要施舍。优质服务被认为是理所当然的。唯一例外是高级旅馆（旅館），可以在信封中放入"心付け"。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">🇨🇳 中国大陆</h2>
        <p className="text-gray-700 leading-relaxed">中国大陆没有小费文化。高档酒店和餐厅通常已在账单中包含10-15%的服务费。普通餐厅不需要给小费。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">更多国家参考</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>国家</span><span>餐厅小费</span><span>备注</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>🇫🇷 法国</span><span>5-10%</span><span>服务费通常已含</span>
            <span>🇩🇪 德国</span><span>5-10%</span><span>凑整为主</span>
            <span>🇮🇹 意大利</span><span>5-10%</span><span>有coperto（座位费）</span>
            <span>🇦🇺 澳大利亚</span><span>10%</span><span>非必须但受欢迎</span>
            <span>🇰🇷 韩国</span><span>不需要</span><span>高档餐厅含服务费</span>
            <span>🇹🇭 泰国</span><span>10%</span><span>高档场所给，路边摊不用</span>
            <span>🇸🇬 新加坡</span><span>不需要</span><span>已含10%服务费</span>
            <span>🇦🇪 迪拜</span><span>10-15%</span><span>账单可能已含</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">快速心算小费</h2>
        <p className="text-gray-700 leading-relaxed">不想掏手机算？这些心算技巧很实用：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>💡 算10%：直接移动小数点。$85 → $8.5</p>
          <p>💡 算15%：先算10%，再加一半。$8.5 + $4.25 = $12.75</p>
          <p>💡 算20%：算10%后翻倍。$8.5 × 2 = $17</p>
          <p>💡 算25%：算10%后×2.5，或先算20%再加5%</p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 小费注意事项：</p>
          <p>• 检查账单是否已含服务费（Service Charge / Gratuity Included）</p>
          <p>• 小费通常按税前金额计算</p>
          <p>• 团体用餐（6人以上）很多餐厅会自动加18-20%小费</p>
          <p>• 外卖和自取通常不需要给小费，但疫情后给10%已成趋势</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">不想心算？试试我们的 <Link href="/tip-calculator" className="text-blue-500 hover:underline font-medium">在线小费计算器</Link>，输入金额和比例，自动计算小费和AA金额。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
