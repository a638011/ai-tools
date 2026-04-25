import Link from 'next/link'

export default function DateCalculatorGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">在线日期计算器完全指南：日期差、日期加减、工作日计算</h1>
        <p className="text-gray-400 text-sm mb-8">2026年4月25日 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">
          项目排期、合同到期计算、工时统计——这些都离不开日期计算。手算容易出错，用 Excel 公式又太麻烦。<strong>在线日期计算器</strong>只需两步就能得出精确结果，还支持多语言，是程序员、项目经理和日常办公的必备工具。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">日期计算器能做什么</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. 计算两个日期之间的差值</h3>
        <p className="text-gray-700 leading-relaxed">
          输入开始日期和结束日期，一键算出相差多少天。同时自动换算周、月、年，一目了然。比如从 <code className="font-mono text-blue-600">2026-01-01</code> 到 <code className="font-mono text-blue-600">2026-04-25</code>：
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>相差 <strong>114 天</strong></li>
          <li>约 16 周零 2 天</li>
          <li>约 3 个月零 24 天</li>
          <li>约 0.31 年</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. 从指定日期加减天数</h3>
        <p className="text-gray-700 leading-relaxed">
          已知基准日期，计算 N 天后（或 N 天前）是哪一天。常用于：
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>计算项目截止日期（基准日期 + 开发天数）</li>
          <li>计算保险、合同、租约到期日</li>
          <li>倒推某个重要事件的发生日期</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. 支持多语言</h3>
        <p className="text-gray-700 leading-relaxed">
          中文、英文、日文、韩文、西班牙语界面一键切换，适合跨国团队协作。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见使用场景</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">软件开发项目排期</h3>
        <p className="text-gray-700 leading-relaxed">
          假设 4 月 1 日开始开发，预计 60 个工作日后交付。用日期计算器算出自然日截止日期，再结合节假日日历规划里程碑节点，比凭感觉估算准确得多。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">HR 计算员工在职天数</h3>
        <p className="text-gray-700 leading-relaxed">
          入职日期到离职日期之间有多少天？年假折算、工龄计算都依赖精确的日差统计。在线工具无需 Excel，打开网页就能用，数据不出本地浏览器。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">法律与合同场景</h3>
        <p className="text-gray-700 leading-relaxed">
          租赁合同三年到期、保密协议六个月后失效、试用期三个月——这些日期边界用手算容易出错。用工具精确算出起止日期，避免因计算失误导致的合规风险。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">日期计算原理科普</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">为什么月和年的换算会有零头？</h3>
        <p className="text-gray-700 leading-relaxed">
          月份天数不固定（28-31天），年份有平年闰年之分。计算月数时通常按 <code className="font-mono text-blue-600">平均每月30.44天</code> 计算，年数按 <code className="font-mono text-blue-600">每年365.25天</code> 计算。这是国际通用的近似算法，适合日常使用。精确到具体日期时，建议直接看"相差天数"这个原始数据。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">跨时区日期怎么处理？</h3>
        <p className="text-gray-700 leading-relaxed">
          所有日期计算默认使用本地时间（浏览器时区）。如果涉及跨国日期，建议统一使用 UTC 或北京时间，避免夏令时切换导致的 1 小时偏差。对于产品经理和技术负责人来说，在项目文档中明确时区约定是最佳实践。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">使用小技巧</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>快速选"今天"</strong>：点击工具内的"今天"按钮，自动填入当前日期，无需手动输入</li>
          <li><strong>支持负数天数</strong>：在"加减天数"模式下输入负数，等同于往回算日期</li>
          <li><strong>结果保留完整精度</strong>：天数精确到整数，周/月/年是辅助换算，可按需参考</li>
          <li><strong>手机端同样可用</strong>：工具支持响应式布局，手机浏览器直接打开使用</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">总结</h2>
        <p className="text-gray-700 leading-relaxed">
          日期计算器是一个看起来简单、实际上使用频率极高的工具。从项目排期到合同管理，从工龄统计到倒计时制作，一台离不开它。<strong>在线日期计算器</strong>无需下载安装，打开浏览器就能用，支持多语言，结果精确，是每个职场人数字工具箱里必备的一员。
        </p>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            💡 <strong>工具推荐</strong>：除了日期计算器，云云工具集还提供<a href="/timestamp-converter" className="underline">时间戳转换器</a>、<a href="/percentage-calc" className="underline">百分比计算器</a>、<a href="/loan-calculator" className="underline">贷款计算器</a>等多个实用工具，欢迎探索！
          </p>
        </div>
      </article>
    </main>
  )
}