import Link from 'next/link'

export default function JsonComparisonTools() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JSON对比工具：快速找出两段JSON的差异</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">API返回的数据和预期不一样？配置文件改了但不确定改了哪里？两个环境的JSON配置需要同步？JSON对比（JSON Diff）工具能帮你快速定位两段JSON之间的每一处差异。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么需要JSON对比？</h2>
        <p className="text-gray-700 leading-relaxed">直接用肉眼对比两段JSON几乎不可能，尤其当数据量大、嵌套深时。常见场景包括：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>🔍 调试API——对比请求前后的响应数据变化</p>
          <p>🔧 配置管理——对比开发/测试/生产环境的配置差异</p>
          <p>📦 版本对比——对比不同版本的package.json</p>
          <p>🧪 测试验证——对比实际输出和期望输出</p>
          <p>📋 数据迁移——验证迁移前后数据一致性</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON对比的三种差异类型</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-green-600 font-medium">➕ 新增（Added）</p>
            <p className="text-gray-600">右侧JSON中有，左侧没有的字段</p>
          </div>
          <div>
            <p className="text-red-600 font-medium">➖ 删除（Removed）</p>
            <p className="text-gray-600">左侧JSON中有，右侧没有的字段</p>
          </div>
          <div>
            <p className="text-yellow-600 font-medium">✏️ 修改（Modified）</p>
            <p className="text-gray-600">两侧都有但值不同的字段</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">对比示例</h2>
        <p className="text-gray-700 leading-relaxed">左侧（旧版本）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{"{"}</p>
          <p className="pl-4">{`"name": "my-app",`}</p>
          <p className="pl-4">{`"version": "1.0.0",`}</p>
          <p className="pl-4">{`"port": 3000,`}</p>
          <p className="pl-4">{`"debug": true`}</p>
          <p>{"}"}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">右侧（新版本）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{"{"}</p>
          <p className="pl-4">{`"name": "my-app",`}</p>
          <p className="pl-4 text-yellow-600">{`"version": "2.0.0",`}</p>
          <p className="pl-4">{`"port": 3000,`}</p>
          <p className="pl-4 text-green-600">{`"database": "mongodb://localhost"`}</p>
          <p>{"}"}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">差异结果：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p className="text-yellow-600">✏️ version: "1.0.0" → "2.0.0"</p>
          <p className="text-red-600">➖ debug: true（已删除）</p>
          <p className="text-green-600">➕ database: "mongodb://localhost"（新增）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON对比的注意事项</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>📌 键的顺序不影响对比——JSON规范中对象的键是无序的</p>
          <p>📌 数组顺序很重要——[1,2,3]和[3,2,1]是不同的</p>
          <p>📌 类型差异要注意——"123"（字符串）和123（数字）是不同的</p>
          <p>📌 null vs undefined——JSON中null是有效值，缺失字段则是undefined</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript实现JSON对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 简单的深度对比函数</p>
          <p>{`function jsonDiff(obj1, obj2, path = '') {`}</p>
          <p className="pl-4">{`const diffs = [];`}</p>
          <p className="pl-4">{`const allKeys = new Set([`}</p>
          <p className="pl-8">{`...Object.keys(obj1 || {}),`}</p>
          <p className="pl-8">{`...Object.keys(obj2 || {})`}</p>
          <p className="pl-4">{`]);`}</p>
          <p></p>
          <p className="pl-4">{`for (const key of allKeys) {`}</p>
          <p className="pl-8">{`const p = path ? \`\${path}.\${key}\` : key;`}</p>
          <p className="pl-8">{`if (!(key in obj1)) {`}</p>
          <p className="pl-12">{`diffs.push({ type: 'added', path: p });`}</p>
          <p className="pl-8">{`} else if (!(key in obj2)) {`}</p>
          <p className="pl-12">{`diffs.push({ type: 'removed', path: p });`}</p>
          <p className="pl-8">{`} else if (typeof obj1[key] === 'object') {`}</p>
          <p className="pl-12">{`diffs.push(...jsonDiff(obj1[key], obj2[key], p));`}</p>
          <p className="pl-8">{`} else if (obj1[key] !== obj2[key]) {`}</p>
          <p className="pl-12">{`diffs.push({ type: 'modified', path: p,`}</p>
          <p className="pl-16">{`old: obj1[key], new: obj2[key] });`}</p>
          <p className="pl-8">{`}`}</p>
          <p className="pl-4">{`}`}</p>
          <p className="pl-4">{`return diffs;`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">命令行JSON对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <div>
            <p className="text-gray-500"># 使用jq格式化后用diff对比</p>
            <p>{`diff <(jq -S . a.json) <(jq -S . b.json)`}</p>
          </div>
          <div>
            <p className="text-gray-500"># 使用json-diff（npm包）</p>
            <p>npx json-diff a.json b.json</p>
          </div>
          <div>
            <p className="text-gray-500"># 使用Python的jsondiff</p>
            <p>python -m jsondiff a.json b.json</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON Patch标准（RFC 6902）</h2>
        <p className="text-gray-700 leading-relaxed">JSON Patch是描述JSON文档变更的标准格式，常用于API的部分更新：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>[</p>
          <p className="pl-4">{`{ "op": "replace", "path": "/version", "value": "2.0.0" },`}</p>
          <p className="pl-4">{`{ "op": "remove", "path": "/debug" },`}</p>
          <p className="pl-4">{`{ "op": "add", "path": "/database", "value": "mongodb://localhost" }`}</p>
          <p>]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速对比两段JSON？试试我们的 <Link href="/json-diff" className="text-blue-500 hover:underline font-medium">JSON对比工具</Link>，粘贴两段JSON即可高亮显示所有差异，支持树形视图和并排对比。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
