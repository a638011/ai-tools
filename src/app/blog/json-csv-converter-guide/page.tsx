import Link from 'next/link'

export default function JsonCsvConverterGuidePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JSON转CSV教程：接口数据如何快速整理成表格</h1>
        <p className="text-gray-400 text-sm mb-8">2026年3月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">
          JSON 转 CSV 是开发、测试、运营和数据分析里非常高频的小需求。接口返回的原始数据通常适合机器读取，
          但一旦要发给同事、导入 Excel、做简单统计，CSV 这种表格格式就会顺手得多。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON 转 CSV 能解决什么问题？</h2>
        <p className="text-gray-700 leading-relaxed">
          JSON 更适合接口传输和程序处理，CSV 更适合表格查看和批量整理。把 JSON 转成 CSV 后，数据会按列展开，
          方便你在 Excel、Google Sheets 或其他表格工具里直接打开。
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>接口返回结果整理成表格</strong></li>
          <li><strong>把数组数据导入 Excel 做筛选和统计</strong></li>
          <li><strong>给非技术同事共享更易读的数据格式</strong></li>
          <li><strong>做简单报表、名单导出、订单整理</strong></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">哪些场景最常见？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>接口调试</strong>：把 API 返回的用户列表、订单列表快速转成表格</li>
          <li><strong>数据运营</strong>：导出商品、活动、注册用户等列表做分析</li>
          <li><strong>测试排查</strong>：核对批量数据时，CSV 比 JSON 更直观</li>
          <li><strong>跨团队协作</strong>：技术同学给运营/产品同步数据时更省解释成本</li>
          <li><strong>低代码处理</strong>：很多 BI、表格、自动化工具都更容易接收 CSV</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">如何使用 JSON 转 CSV 工具？</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>打开 <Link href="/json-csv" className="text-blue-500 hover:underline font-medium">JSON↔CSV 转换工具</Link></li>
          <li>把 JSON 数据粘贴到输入框中</li>
          <li>确认 JSON 结构有效，尤其是数组对象格式是否一致</li>
          <li>点击转换，生成 CSV 结果</li>
          <li>复制结果或下载后，用 Excel / Sheets 打开</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mt-4">
          最适合转换的格式通常是“对象数组”，也就是每一项都拥有相同字段。比如用户列表、订单列表、评论列表。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么样的 JSON 最适合转 CSV？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>最理想：</strong>由多个对象组成的数组，例如用户列表、商品列表。</p>
          <p><strong>字段一致：</strong>每个对象里都有 name、email、createdAt 这类统一字段。</p>
          <p><strong>层级不要太深：</strong>如果 JSON 嵌套很多层，转换后列名会更复杂，需要先展开。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际示例</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-semibold">JSON：</p>
            <pre className="bg-white p-3 rounded overflow-x-auto text-xs">{`[
  {"name":"Alice","age":28,"city":"Shanghai"},
  {"name":"Bob","age":31,"city":"Beijing"}
]`}</pre>
          </div>
          <div>
            <p className="font-semibold">CSV：</p>
            <pre className="bg-white p-3 rounded overflow-x-auto text-xs">{`name,age,city
Alice,28,Shanghai
Bob,31,Beijing`}</pre>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          这样一转，原本更偏程序结构的数据，就变成了人人都能直接读懂的表格格式。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">转换时最容易踩的坑</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>字段不统一</strong>：有些对象缺字段，导出的 CSV 会出现空列</li>
          <li><strong>嵌套结构过深</strong>：对象里再套对象、数组，处理起来会复杂很多</li>
          <li><strong>特殊字符未转义</strong>：逗号、换行、双引号可能影响 CSV 格式</li>
          <li><strong>编码问题</strong>：如果要给 Excel 打开，最好确认 UTF-8 编码是否兼容</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么时候该用 CSV，什么时候该保留 JSON？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>给程序继续处理</strong>：优先保留 JSON</li>
          <li><strong>给人查看、筛选、做报表</strong>：优先转 CSV</li>
          <li><strong>只是一层列表数据</strong>：CSV 很适合</li>
          <li><strong>数据结构复杂、嵌套很多</strong>：JSON 更完整稳定</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">结语</h2>
        <p className="text-gray-700 leading-relaxed">
          JSON 转 CSV 不是复杂技术，但它特别实用。尤其在接口联调、数据整理、导表协作这些高频场景里，
          一个顺手的转换工具能省掉很多手工整理时间。
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          现在就试试我们的 <Link href="/json-csv" className="text-blue-500 hover:underline font-medium">免费 JSON↔CSV 转换工具</Link>。
          如果你还需要更多开发者和数据处理工具，也可以继续逛逛 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。
        </p>
      </article>
    </main>
  )
}
