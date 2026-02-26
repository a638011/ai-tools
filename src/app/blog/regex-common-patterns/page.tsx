import Link from 'next/link'

export default function RegexCommonPatterns() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">20个最常用的正则表达式：邮箱、手机号、URL验证</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">正则表达式是开发者的瑞士军刀，但每次都要从头写太浪费时间。本文整理了20个最实用的正则表达式，覆盖日常开发中最常见的验证和匹配场景，直接复制使用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 邮箱地址</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{'{2,}'}$</p>
        </div>
        <p className="text-gray-700 leading-relaxed">匹配标准邮箱格式。注意：完全符合RFC 5322的邮箱正则极其复杂，上面的版本覆盖99%的常见邮箱。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 中国大陆手机号</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>^1[3-9]\d{'{9}'}$</p>
        </div>
        <p className="text-gray-700 leading-relaxed">匹配1开头、第二位3-9、共11位数字的手机号。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. URL地址</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{'{1,256}'}\.[a-zA-Z0-9()]{'{1,6}'}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. IPv4地址</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){'{3}'}(25[0-5]|2[0-4]\d|[01]?\d\d?)$</p>
        </div>
        <p className="text-gray-700 leading-relaxed">精确匹配0.0.0.0到255.255.255.255范围内的IP地址。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 中国身份证号（18位）</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>^\d{'{6}'}(19|20)\d{'{2}'}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{'{3}'}[\dXx]$</p>
        </div>
        <p className="text-gray-700 leading-relaxed">验证18位身份证号，包含地区码、出生日期和校验位。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. 强密码</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{'{8,}'}$</p>
        </div>
        <p className="text-gray-700 leading-relaxed">至少8位，包含大小写字母、数字和特殊字符。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7-12. 数字相关</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-gray-500 font-medium">7. 纯数字</p>
            <p className="font-mono text-gray-700">^\d+$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">8. 整数（含负数）</p>
            <p className="font-mono text-gray-700">^-?\d+$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">9. 浮点数</p>
            <p className="font-mono text-gray-700">^-?\d+(\.\d+)?$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">10. 金额（两位小数）</p>
            <p className="font-mono text-gray-700">^\d+(\.\d{'{1,2}'})?$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">11. 十六进制颜色值</p>
            <p className="font-mono text-gray-700">^#([0-9a-fA-F]{'{3}'}|[0-9a-fA-F]{'{6}'})$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">12. 百分比（0-100）</p>
            <p className="font-mono text-gray-700">^(100|[1-9]?\d)(\.\d{'{1,2}'})?%$</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13-16. 字符串相关</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-gray-500 font-medium">13. 中文字符</p>
            <p className="font-mono text-gray-700">^[\u4e00-\u9fa5]+$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">14. 英文用户名（字母数字下划线，3-16位）</p>
            <p className="font-mono text-gray-700">^[a-zA-Z0-9_]{'{3,16}'}$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">15. 不含空格的字符串</p>
            <p className="font-mono text-gray-700">^\S+$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">16. HTML标签</p>
            <p className="font-mono text-gray-700">{`<[^>]+>`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17-20. 日期和时间</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-gray-500 font-medium">17. 日期 YYYY-MM-DD</p>
            <p className="font-mono text-gray-700">^\d{'{4}'}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">18. 时间 HH:MM:SS（24小时制）</p>
            <p className="font-mono text-gray-700">^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">19. 邮政编码（中国6位）</p>
            <p className="font-mono text-gray-700">^[1-9]\d{'{5}'}$</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">20. 车牌号（中国大陆）</p>
            <p className="font-mono text-gray-700">^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁][A-Z][A-HJ-NP-Z0-9]{'{4}'}[A-HJ-NP-Z0-9挂学警港澳]$</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript使用示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 验证邮箱</p>
          <p>{`const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;`}</p>
          <p>{`emailRegex.test('user@example.com'); // true`}</p>
          <p></p>
          <p className="text-gray-500">// 提取所有URL</p>
          <p>{`const text = '访问 https://example.com 和 http://test.org';`}</p>
          <p>{`const urls = text.match(/https?:\\/\\/[^\\s]+/g);`}</p>
          <p className="text-green-600">// ["https://example.com", "http://test.org"]</p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 正则表达式的注意事项：</p>
          <p>• 正则验证只是前端的第一道防线，后端务必再次验证</p>
          <p>• 复杂的正则可能有性能问题（回溯灾难），注意测试</p>
          <p>• 邮箱、URL等建议用成熟的库验证，而非纯正则</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想在线测试和调试正则表达式？试试我们的 <Link href="/regex" className="text-blue-500 hover:underline font-medium">正则表达式测试工具</Link>，实时高亮匹配结果，支持多种语言风格。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
