import Link from 'next/link'

export default function TextSortingTechniques() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">文本排序技巧：按字母、数字、自定义规则排序</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">整理名单、排列数据、清理日志……文本排序是日常工作中高频出现的需求。看似简单的"排个序"，其实有不少门道。这篇文章带你掌握各种文本排序的方法和技巧。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基本排序：字母顺序</h2>
        <p className="text-gray-700 leading-relaxed">最常见的排序是按字母（字典序）排列。计算机比较字符串时，逐个字符比较其Unicode编码值：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// JavaScript 默认排序</p>
          <p>{`const fruits = ['banana', 'apple', 'cherry', 'date'];`}</p>
          <p>{`fruits.sort();`}</p>
          <p className="text-green-600">// ['apple', 'banana', 'cherry', 'date']</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 默认排序是区分大小写的！大写字母排在小写前面：</p>
          <p className="font-mono mt-1">[&apos;banana&apos;, &apos;Apple&apos;, &apos;cherry&apos;].sort()</p>
          <p className="font-mono">→ [&apos;Apple&apos;, &apos;banana&apos;, &apos;cherry&apos;]</p>
          <p className="mt-1">因为 A(65) &lt; a(97) &lt; b(98)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">不区分大小写排序</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 方法1：转小写比较</p>
          <p>{`arr.sort((a, b) =>`}</p>
          <p>{`  a.toLowerCase().localeCompare(`}</p>
          <p>{`    b.toLowerCase()));`}</p>
          <p className="text-gray-500 mt-3">// 方法2：使用localeCompare选项</p>
          <p>{`arr.sort((a, b) =>`}</p>
          <p>{`  a.localeCompare(b, undefined,`}</p>
          <p>{`    { sensitivity: 'base' }));`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">数字排序的陷阱</h2>
        <p className="text-gray-700 leading-relaxed">JavaScript的sort()默认按字符串排序，数字排序会出问题：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-red-600">// ❌ 错误：按字符串排序</p>
          <p className="text-gray-700">[10, 9, 2, 100, 21].sort()</p>
          <p className="text-red-600">// [10, 100, 2, 21, 9]  ← 不对！</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-green-600">// ✅ 正确：数值比较</p>
          <p className="text-gray-700">[10, 9, 2, 100, 21].sort((a, b) =&gt; a - b)</p>
          <p className="text-green-600">// [2, 9, 10, 21, 100]  ← 正确！</p>
          <p className="text-gray-500 mt-2">// 降序</p>
          <p className="text-gray-700">[10, 9, 2, 100, 21].sort((a, b) =&gt; b - a)</p>
          <p className="text-green-600">// [100, 21, 10, 9, 2]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">自然排序（Natural Sort）</h2>
        <p className="text-gray-700 leading-relaxed">文件名排序时，我们希望"file2"排在"file10"前面，而不是按字典序把"file10"排在"file2"前面。这就是自然排序：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 字典序 vs 自然排序</p>
          <p className="text-red-600">字典序: file1, file10, file11, file2, file3</p>
          <p className="text-green-600">自然序: file1, file2, file3, file10, file11</p>
          <p className="mt-3 text-gray-500">// JavaScript实现自然排序</p>
          <p>{`const files = ['file10', 'file2', 'file1', 'file11'];`}</p>
          <p>{`files.sort((a, b) =>`}</p>
          <p>{`  a.localeCompare(b, undefined,`}</p>
          <p>{`    { numeric: true }));`}</p>
          <p className="text-green-600">// ['file1', 'file2', 'file10', 'file11']</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">中文排序</h2>
        <p className="text-gray-700 leading-relaxed">中文排序通常按拼音顺序，JavaScript的localeCompare支持中文：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>{`const names = ['张三', '李四', '王五', '赵六', '陈七'];`}</p>
          <p>{`names.sort((a, b) =>`}</p>
          <p>{`  a.localeCompare(b, 'zh-CN'));`}</p>
          <p className="text-green-600">// ['陈七', '李四', '王五', '张三', '赵六']</p>
          <p className="text-gray-500">// 按拼音：chen, li, wang, zhang, zhao</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">多条件排序</h2>
        <p className="text-gray-700 leading-relaxed">先按一个字段排，相同时再按另一个字段排：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 先按部门排序，同部门按姓名排序</p>
          <p>{`const employees = [`}</p>
          <p>{`  { name: '张三', dept: '技术部' },`}</p>
          <p>{`  { name: '李四', dept: '市场部' },`}</p>
          <p>{`  { name: '王五', dept: '技术部' },`}</p>
          <p>{`];`}</p>
          <p className="mt-2">{`employees.sort((a, b) => {`}</p>
          <p>{`  const deptCmp = a.dept.localeCompare(`}</p>
          <p>{`    b.dept, 'zh-CN');`}</p>
          <p>{`  if (deptCmp !== 0) return deptCmp;`}</p>
          <p>{`  return a.name.localeCompare(`}</p>
          <p>{`    b.name, 'zh-CN');`}</p>
          <p>{`});`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">文本行排序实用技巧</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">去重并排序</p>
            <p className="font-mono text-gray-600">{`[...new Set(lines)].sort()`}</p>
          </div>
          <div>
            <p className="font-medium">随机打乱顺序</p>
            <p className="font-mono text-gray-600">{`arr.sort(() => Math.random() - 0.5)`}</p>
            <p className="text-gray-500 text-xs mt-1">注意：这种方法不是完全均匀的随机，严格场景用Fisher-Yates洗牌算法</p>
          </div>
          <div>
            <p className="font-medium">反转顺序</p>
            <p className="font-mono text-gray-600">{`arr.reverse()`}</p>
          </div>
          <div>
            <p className="font-medium">按行长度排序</p>
            <p className="font-mono text-gray-600">{`lines.sort((a, b) => a.length - b.length)`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">命令行排序</h2>
        <p className="text-gray-700 leading-relaxed">Linux/macOS的sort命令非常强大：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p><span className="text-gray-500"># 基本排序</span></p>
          <p>sort file.txt</p>
          <p><span className="text-gray-500"># 数字排序</span></p>
          <p>sort -n numbers.txt</p>
          <p><span className="text-gray-500"># 反向排序</span></p>
          <p>sort -r file.txt</p>
          <p><span className="text-gray-500"># 去重排序</span></p>
          <p>sort -u file.txt</p>
          <p><span className="text-gray-500"># 按第2列排序（逗号分隔）</span></p>
          <p>sort -t, -k2 data.csv</p>
          <p><span className="text-gray-500"># 按第3列数字降序</span></p>
          <p>sort -t, -k3 -n -r data.csv</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">不想写代码？试试我们的 <Link href="/text-sort" className="text-blue-500 hover:underline font-medium">免费文本排序工具</Link>，粘贴文本即可按字母、数字、长度等多种方式排序，支持去重和自然排序。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多文本处理工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
