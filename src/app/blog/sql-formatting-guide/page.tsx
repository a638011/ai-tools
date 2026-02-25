import Link from 'next/link'

export default function SqlFormattingGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SQL格式化最佳实践：写出可读性强的SQL语句</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">你有没有接手过别人写的SQL，一行几百个字符，完全看不懂？SQL格式化不只是美观问题，更是团队协作和代码维护的基础。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么要格式化SQL？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>可读性</strong> — 格式化的SQL一眼就能看出查询逻辑</li>
          <li><strong>可维护性</strong> — 修改条件、添加字段更方便</li>
          <li><strong>Code Review</strong> — 团队审查代码时效率更高</li>
          <li><strong>调试效率</strong> — 快速定位问题所在的子句</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">❌ 反面示例</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-xs text-gray-700 overflow-x-auto">
          select u.id,u.name,u.email,o.order_id,o.amount,o.created_at from users u inner join orders o on u.id=o.user_id where u.status='active' and o.amount&gt;100 and o.created_at&gt;'2026-01-01' order by o.created_at desc limit 50;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">✅ 格式化后</h2>
        <div className="bg-green-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 whitespace-pre">{`SELECT
  u.id,
  u.name,
  u.email,
  o.order_id,
  o.amount,
  o.created_at
FROM users u
INNER JOIN orders o
  ON u.id = o.user_id
WHERE u.status = 'active'
  AND o.amount > 100
  AND o.created_at > '2026-01-01'
ORDER BY o.created_at DESC
LIMIT 50;`}</div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">格式化规则</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1️⃣ <strong>关键词大写</strong> — SELECT, FROM, WHERE, JOIN 等用大写</p>
          <p>2️⃣ <strong>每个子句换行</strong> — SELECT, FROM, WHERE, ORDER BY 各占一行</p>
          <p>3️⃣ <strong>字段列表缩进</strong> — SELECT后的字段每个一行，缩进2空格</p>
          <p>4️⃣ <strong>条件对齐</strong> — AND/OR 缩进对齐，逻辑一目了然</p>
          <p>5️⃣ <strong>JOIN单独一行</strong> — ON条件缩进</p>
          <p>6️⃣ <strong>子查询额外缩进</strong> — 嵌套查询增加一级缩进</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">命名约定</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>表名和字段名用 <code className="bg-gray-100 px-1 rounded">snake_case</code>（user_name, order_id）</li>
          <li>表别名简短有意义（users → u, orders → o）</li>
          <li>避免使用保留字作为字段名（如 order, select, group）</li>
          <li>布尔字段用 is_ 或 has_ 前缀（is_active, has_paid）</li>
          <li>时间字段用 _at 后缀（created_at, updated_at）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见错误</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>❌ SELECT * — 明确列出需要的字段</li>
          <li>❌ 不加表别名 — 多表查询时字段来源不明</li>
          <li>❌ WHERE 1=1 — 虽然方便拼接但不够优雅</li>
          <li>❌ 混用大小写关键词 — Select ... From ... where — 保持一致</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线格式化工具</h2>
        <p className="text-gray-700 leading-relaxed">手动格式化太麻烦？用我们的 <Link href="/sql-formatter" className="text-blue-500 hover:underline font-medium">SQL在线格式化工具</Link>，一键完成：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>自动格式化和缩进</li>
          <li>关键词自动大写</li>
          <li>SQL压缩（去除多余空白）</li>
          <li>支持复杂查询（JOIN、子查询、UNION）</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
