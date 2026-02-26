import Link from 'next/link'

export default function PomodoroTechnique() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">番茄工作法完全指南：提升专注力的科学方法</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">总是忍不住刷手机？工作一会儿就走神？番茄工作法（Pomodoro Technique）是一种简单却极其有效的时间管理方法，被全球数百万人验证有效。这篇文章带你从原理到实践，彻底掌握它。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">番茄工作法的起源</h2>
        <p className="text-gray-700 leading-relaxed">1987年，意大利大学生弗朗切斯科·西里洛（Francesco Cirillo）发明了这个方法。他用厨房里一个番茄形状的计时器来计时，因此得名"番茄工作法"。Pomodoro在意大利语中就是"番茄"的意思。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基本规则</h2>
        <p className="text-gray-700 leading-relaxed">番茄工作法的核心流程非常简单：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <p>🍅 <span className="font-medium">第1步：</span>选择一个待完成的任务</p>
          <p>⏱️ <span className="font-medium">第2步：</span>设定25分钟倒计时（一个"番茄钟"）</p>
          <p>💪 <span className="font-medium">第3步：</span>专注工作，直到计时器响起</p>
          <p>✅ <span className="font-medium">第4步：</span>短休息5分钟</p>
          <p>🔄 <span className="font-medium">第5步：</span>每完成4个番茄钟，长休息15-30分钟</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-500">
          <p>[工作25min] → [休息5min] → [工作25min] → [休息5min]</p>
          <p>→ [工作25min] → [休息5min] → [工作25min] → [长休息15-30min]</p>
          <p className="mt-2 text-gray-400">↑ 这是一个完整的循环（4个番茄钟）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么25分钟？</h2>
        <p className="text-gray-700 leading-relaxed">25分钟不是随意选的。研究表明，人的注意力集中时间通常在20-45分钟之间。25分钟是一个"甜蜜点"：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 足够短 — 心理压力小，容易开始</p>
          <p>• 足够长 — 能进入深度工作状态，产出有意义的成果</p>
          <p>• 有紧迫感 — 知道时间有限，减少拖延</p>
          <p>• 可量化 — 一天完成了几个番茄钟，一目了然</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">科学原理</h2>
        <p className="text-gray-700 leading-relaxed">番茄工作法的有效性有多个心理学原理支撑：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">1. 帕金森定律</p>
            <p className="text-gray-600">工作会膨胀到填满可用时间。设定25分钟限制，迫使你高效利用每一分钟。</p>
          </div>
          <div>
            <p className="font-medium">2. 蔡格尼克效应</p>
            <p className="text-gray-600">未完成的任务比已完成的更容易被记住。番茄钟中断时，大脑会保持对任务的关注。</p>
          </div>
          <div>
            <p className="font-medium">3. 心流状态</p>
            <p className="text-gray-600">排除干扰的25分钟更容易进入心流，这是效率最高的工作状态。</p>
          </div>
          <div>
            <p className="font-medium">4. 间隔休息</p>
            <p className="text-gray-600">定期休息防止认知疲劳，保持全天的工作质量。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实践技巧</h2>

        <p className="text-gray-700 leading-relaxed font-medium">处理干扰</p>
        <p className="text-gray-700 leading-relaxed">番茄钟进行中遇到干扰怎么办？</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>📝 内部干扰（突然想到要做的事）→ 记在纸上，继续工作</p>
          <p>🚫 外部干扰（有人找你）→ 告知稍后回复，记录下来</p>
          <p>❌ 不可避免的中断 → 这个番茄钟作废，重新开始</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">任务拆分</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 预估超过5个番茄钟的任务 → 拆分成更小的子任务</p>
          <p>• 不到1个番茄钟的小任务 → 合并几个小任务一起做</p>
          <p>• 不确定需要多久 → 先用1个番茄钟试试，再调整</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">休息时做什么？</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p className="text-green-600">✅ 站起来走动、伸展身体</p>
          <p className="text-green-600">✅ 喝水、看看窗外</p>
          <p className="text-green-600">✅ 闭眼休息、深呼吸</p>
          <p className="text-red-600">❌ 刷社交媒体（容易超时）</p>
          <p className="text-red-600">❌ 开始新的复杂任务</p>
          <p className="text-red-600">❌ 回复长邮件</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">一天能完成多少个番茄钟？</h2>
        <p className="text-gray-700 leading-relaxed">对于知识工作者，一天的参考值：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>新手</span><span>4-6个番茄钟</span>
            <span>熟练者</span><span>8-10个番茄钟</span>
            <span>高手</span><span>12-14个番茄钟</span>
            <span>理论上限</span><span>约16个（8小时纯工作）</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">不要追求数量。8个高质量的番茄钟，胜过12个心不在焉的番茄钟。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">进阶变体</h2>
        <p className="text-gray-700 leading-relaxed">经典的25/5分钟不适合所有人，可以尝试这些变体：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>变体</span><span>工作/休息</span><span>适合场景</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>经典番茄</span><span>25/5分钟</span><span>通用</span>
            <span>短番茄</span><span>15/3分钟</span><span>注意力较差时</span>
            <span>长番茄</span><span>50/10分钟</span><span>深度编程、写作</span>
            <span>52/17法则</span><span>52/17分钟</span><span>研究表明最高效</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想现在就开始？试试我们的 <Link href="/pomodoro" className="text-blue-500 hover:underline font-medium">免费在线番茄钟</Link>，无需安装，打开即用，支持自定义时长和提醒音。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多效率工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
