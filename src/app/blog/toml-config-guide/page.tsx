import Link from 'next/link'

export default function TomlConfigGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">TOML配置文件格式详解：比YAML更简单的选择</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">TOML（Tom&apos;s Obvious, Minimal Language）是一种配置文件格式，由GitHub联合创始人Tom Preston-Werner创建。它的设计目标是成为一种最小化的、易于阅读的配置格式。如果你觉得YAML的缩进规则太容易出错，TOML可能是更好的选择。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">TOML vs YAML vs JSON</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>TOML</span><span>YAML</span><span>JSON</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>注释</span><span>✅ #</span><span>✅ #</span><span>❌</span>
            <span>缩进敏感</span><span>❌</span><span>✅</span><span>❌</span>
            <span>数据类型</span><span>丰富</span><span>丰富</span><span>基础</span>
            <span>日期时间</span><span>✅ 原生</span><span>✅</span><span>❌</span>
            <span>多行字符串</span><span>✅</span><span>✅</span><span>❌</span>
            <span>学习曲线</span><span>低</span><span>中</span><span>低</span>
            <span>嵌套深度</span><span>适合浅层</span><span>适合深层</span><span>都行</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础语法</h2>
        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">键值对</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 字符串</p>
          <p>name = &quot;my-project&quot;</p>
          <p>description = &apos;单引号也可以，不转义&apos;</p>
          <p></p>
          <p className="text-gray-500"># 数字</p>
          <p>port = 8080</p>
          <p>pi = 3.14159</p>
          <p>large_number = 1_000_000  # 下划线分隔，提高可读性</p>
          <p></p>
          <p className="text-gray-500"># 布尔值</p>
          <p>debug = true</p>
          <p>verbose = false</p>
          <p></p>
          <p className="text-gray-500"># 日期时间（原生支持！）</p>
          <p>created = 2026-02-15T10:30:00Z</p>
          <p>date_only = 2026-02-15</p>
          <p>time_only = 10:30:00</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">表（Table）— 相当于对象</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>[database]</p>
          <p>host = &quot;localhost&quot;</p>
          <p>port = 5432</p>
          <p>name = &quot;mydb&quot;</p>
          <p></p>
          <p>[database.connection_pool]</p>
          <p>min = 5</p>
          <p>max = 20</p>
        </div>
        <p className="text-gray-700 leading-relaxed">等价的JSON：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`{ "database": { "host": "localhost", "port": 5432,`}</p>
          <p>{`    "name": "mydb",`}</p>
          <p>{`    "connection_pool": { "min": 5, "max": 20 } } }`}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">数组</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 行内数组</p>
          <p>ports = [8080, 8081, 8082]</p>
          <p>tags = [&quot;web&quot;, &quot;api&quot;, &quot;production&quot;]</p>
          <p></p>
          <p className="text-gray-500"># 多行数组</p>
          <p>allowed_origins = [</p>
          <p className="pl-4">&quot;https://example.com&quot;,</p>
          <p className="pl-4">&quot;https://app.example.com&quot;,</p>
          <p className="pl-4">&quot;http://localhost:3000&quot;,</p>
          <p>]</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">表数组（Array of Tables）</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 双括号表示数组中的对象</p>
          <p>[[servers]]</p>
          <p>name = &quot;web-1&quot;</p>
          <p>ip = &quot;10.0.0.1&quot;</p>
          <p></p>
          <p>[[servers]]</p>
          <p>name = &quot;web-2&quot;</p>
          <p>ip = &quot;10.0.0.2&quot;</p>
        </div>
        <p className="text-gray-700 leading-relaxed">等价JSON：<code className="bg-gray-100 px-1 rounded text-sm">{`{"servers": [{"name":"web-1","ip":"10.0.0.1"}, {"name":"web-2","ip":"10.0.0.2"}]}`}</code></p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">多行字符串</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 基本多行字符串（保留换行）</p>
          <p>bio = &quot;&quot;&quot;</p>
          <p>这是第一行</p>
          <p>这是第二行</p>
          <p>&quot;&quot;&quot;</p>
          <p></p>
          <p className="text-gray-500"># 字面量字符串（不转义）</p>
          <p>regex = &apos;\\d+\\.\\d+&apos;</p>
          <p>path = &apos;C:\\Users\\admin&apos;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">谁在用TOML？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-32">Rust / Cargo</span><span className="text-gray-600">Cargo.toml 是Rust项目的核心配置</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-32">Python / PEP 518</span><span className="text-gray-600">pyproject.toml 已成为Python项目标准</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-32">Hugo</span><span className="text-gray-600">静态网站生成器的默认配置格式</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-32">Deno</span><span className="text-gray-600">deno.toml 配置文件</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-32">Git</span><span className="text-gray-600">.gitconfig 使用类TOML格式</span></div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 选择建议：</p>
          <p>• 简单配置（扁平结构）→ TOML</p>
          <p>• 复杂嵌套配置 → YAML</p>
          <p>• 数据交换 → JSON</p>
          <p>• 需要注释的配置 → TOML 或 YAML</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要验证或转换TOML？试试我们的 <Link href="/toml-to-json" className="text-blue-500 hover:underline font-medium">TOML/JSON转换工具</Link>，支持TOML语法验证和格式转换。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
