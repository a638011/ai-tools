import Link from 'next/link'

export default function DateCalculationTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">日期计算技巧：怎么快速算两个日期之间的天数？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">计算两个日期之间相差多少天，是工作和生活中经常遇到的需求。项目倒计时、合同期限、怀孕周数、年假计算……这篇文章教你几种实用的日期计算方法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">手动计算的基本思路</h2>
        <p className="text-gray-700 leading-relaxed">最直接的方法是逐月累加天数。但要注意每月天数不同，还有闰年的影响：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>月份</span><span>天数</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>1月、3月、5月、7月、8月、10月、12月</span><span>31天</span>
            <span>4月、6月、9月、11月</span><span>30天</span>
            <span>2月（平年）</span><span>28天</span>
            <span>2月（闰年）</span><span>29天</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">闰年判断规则</h2>
        <p className="text-gray-700 leading-relaxed">闰年的判断经常搞混，记住这个优先级：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>1. 能被400整除 → 闰年（如2000年）</p>
          <p>2. 能被100整除 → 平年（如1900年）</p>
          <p>3. 能被4整除 → 闰年（如2024年）</p>
          <p>4. 其他 → 平年</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// JavaScript 判断闰年</p>
          <p>{`function isLeapYear(year) {`}</p>
          <p>{`  return (year % 4 === 0 && year % 100 !== 0)`}</p>
          <p>{`    || (year % 400 === 0);`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用JavaScript计算日期差</h2>
        <p className="text-gray-700 leading-relaxed">编程计算是最准确的方式。JavaScript的Date对象可以轻松处理：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 计算两个日期之间的天数</p>
            <p>{`function daysBetween(date1, date2) {`}</p>
            <p>{`  const d1 = new Date(date1);`}</p>
            <p>{`  const d2 = new Date(date2);`}</p>
            <p>{`  const diffMs = Math.abs(d2 - d1);`}</p>
            <p>{`  return Math.floor(diffMs / (1000 * 60 * 60 * 24));`}</p>
            <p>{`}`}</p>
            <p className="mt-2 text-green-600">{`// daysBetween('2026-01-01', '2026-12-31') → 364`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见日期计算场景</h2>

        <p className="text-gray-700 leading-relaxed font-medium">1. 计算工作日天数</p>
        <p className="text-gray-700 leading-relaxed">排除周末的工作日计算在项目管理中很常用：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 计算工作日（不含周末）</p>
          <p>{`function workdaysBetween(start, end) {`}</p>
          <p>{`  let count = 0;`}</p>
          <p>{`  let current = new Date(start);`}</p>
          <p>{`  const endDate = new Date(end);`}</p>
          <p>{`  while (current <= endDate) {`}</p>
          <p>{`    const day = current.getDay();`}</p>
          <p>{`    if (day !== 0 && day !== 6) count++;`}</p>
          <p>{`    current.setDate(current.getDate() + 1);`}</p>
          <p>{`  }`}</p>
          <p>{`  return count;`}</p>
          <p>{`}`}</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">2. 计算年龄</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 根据生日计算周岁</p>
          <p>{`function calculateAge(birthday) {`}</p>
          <p>{`  const today = new Date();`}</p>
          <p>{`  const birth = new Date(birthday);`}</p>
          <p>{`  let age = today.getFullYear() - birth.getFullYear();`}</p>
          <p>{`  const monthDiff = today.getMonth() - birth.getMonth();`}</p>
          <p>{`  if (monthDiff < 0 || (monthDiff === 0`}</p>
          <p>{`    && today.getDate() < birth.getDate())) {`}</p>
          <p>{`    age--;`}</p>
          <p>{`  }`}</p>
          <p>{`  return age;`}</p>
          <p>{`}`}</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-6">3. 日期加减</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 在日期上加N天</p>
          <p>{`function addDays(dateStr, days) {`}</p>
          <p>{`  const date = new Date(dateStr);`}</p>
          <p>{`  date.setDate(date.getDate() + days);`}</p>
          <p>{`  return date.toISOString().split('T')[0];`}</p>
          <p>{`}`}</p>
          <p className="text-green-600">{`// addDays('2026-02-01', 30) → '2026-03-03'`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">注意时区陷阱</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ <code className="bg-yellow-100 px-1 rounded">new Date(&apos;2026-01-01&apos;)</code> 在不同时区可能解析为不同日期</p>
          <p>⚠️ 建议使用 <code className="bg-yellow-100 px-1 rounded">new Date(2026, 0, 1)</code> 明确指定年月日（月份从0开始）</p>
          <p>⚠️ 跨时区场景建议使用UTC方法：<code className="bg-yellow-100 px-1 rounded">Date.UTC()</code></p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用速查：常见时间跨度</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>1周</span><span>7天</span>
            <span>1个月（平均）</span><span>30.44天</span>
            <span>1季度</span><span>约91天</span>
            <span>半年</span><span>约182天</span>
            <span>1年（平年）</span><span>365天</span>
            <span>1年（闰年）</span><span>366天</span>
            <span>10000小时</span><span>约416.7天</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线计算</h2>
        <p className="text-gray-700 leading-relaxed">不想写代码？试试我们的 <Link href="/date-calculator" className="text-blue-500 hover:underline font-medium">免费日期计算器</Link>，选择两个日期即可算出天数差、工作日数等。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
