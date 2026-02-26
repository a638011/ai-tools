import Link from 'next/link'

export default function YamlVsJson() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">YAML和JSON的区别：什么时候用哪个？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">YAML和JSON是开发中最常用的两种数据序列化格式。Docker Compose用YAML，API返回JSON，Kubernetes配置用YAML……到底什么时候该用哪个？这篇文章帮你彻底搞清楚。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON是什么？</h2>
        <p className="text-gray-700 leading-relaxed">JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，源自JavaScript，但已成为语言无关的标准。它使用花括号、方括号、冒号和逗号来组织数据。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>{'{'}</p>
          <p>  "name": "张三",</p>
          <p>  "age": 28,</p>
          <p>  "skills": ["Python", "Docker", "K8s"],</p>
          <p>  "employed": true</p>
          <p>{'}'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">YAML是什么？</h2>
        <p className="text-gray-700 leading-relaxed">YAML（YAML Ain't Markup Language）是一种以可读性为核心设计的数据格式。它用缩进表示层级关系，不需要花括号和引号，看起来更像自然语言。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>name: 张三</p>
          <p>age: 28</p>
          <p>skills:</p>
          <p>  - Python</p>
          <p>  - Docker</p>
          <p>  - K8s</p>
          <p>employed: true</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">核心区别对照表</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>JSON</span><span>YAML</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>可读性</span><span>中等</span><span>优秀</span>
            <span>注释支持</span><span>❌ 不支持</span><span>✅ 用 # 注释</span>
            <span>数据类型</span><span>字符串/数字/布尔/null/数组/对象</span><span>同JSON + 日期/多行文本等</span>
            <span>文件大小</span><span>较大（引号、括号）</span><span>较小</span>
            <span>解析速度</span><span>快</span><span>较慢</span>
            <span>缩进敏感</span><span>否</span><span>是（空格敏感）</span>
            <span>多文档</span><span>不支持</span><span>支持（用 --- 分隔）</span>
            <span>引用/锚点</span><span>不支持</span><span>支持（&amp; 和 *）</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么时候用JSON？</h2>
        <p className="text-gray-700 leading-relaxed">JSON适合以下场景：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• API数据传输 — 几乎所有REST API都用JSON</p>
          <p>• 前后端通信 — 浏览器原生支持JSON.parse()</p>
          <p>• 数据存储 — MongoDB等NoSQL数据库使用JSON格式</p>
          <p>• package.json — Node.js项目配置</p>
          <p>• 需要严格数据格式验证的场景</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么时候用YAML？</h2>
        <p className="text-gray-700 leading-relaxed">YAML适合以下场景：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 配置文件 — Docker Compose、Kubernetes、GitHub Actions</p>
          <p>• 需要写注释的场景 — 解释每个配置项的含义</p>
          <p>• 人工编辑频繁的文件 — 可读性更好</p>
          <p>• CI/CD流水线配置</p>
          <p>• Ansible playbook</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">YAML的常见坑</h2>
        <p className="text-gray-700 leading-relaxed">YAML虽然好读，但有一些容易踩的坑：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ <strong>缩进必须用空格</strong>，不能用Tab，否则解析报错</p>
          <p>⚠️ <strong>Norway问题</strong>：<code className="bg-gray-100 px-1 rounded">NO</code> 会被解析为布尔值 false，国家代码要加引号</p>
          <p>⚠️ <strong>版本号问题</strong>：<code className="bg-gray-100 px-1 rounded">version: 3.10</code> 会被解析为 3.1（浮点数），应写成 <code className="bg-gray-100 px-1 rounded">"3.10"</code></p>
          <p>⚠️ <strong>时间戳自动转换</strong>：<code className="bg-gray-100 px-1 rounded">2026-02-01</code> 会被解析为日期对象</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">互相转换</h2>
        <p className="text-gray-700 leading-relaxed">YAML是JSON的超集——所有合法的JSON都是合法的YAML。你可以用工具在两者之间自由转换：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500"># Python转换示例</p>
          <p>import yaml, json</p>
          <p></p>
          <p className="text-gray-500"># YAML → JSON</p>
          <p>with open("config.yaml") as f:</p>
          <p>    data = yaml.safe_load(f)</p>
          <p>    print(json.dumps(data, indent=2))</p>
          <p></p>
          <p className="text-gray-500"># JSON → YAML</p>
          <p>with open("data.json") as f:</p>
          <p>    data = json.load(f)</p>
          <p>    print(yaml.dump(data, allow_unicode=True))</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">总结</h2>
        <p className="text-gray-700 leading-relaxed">简单记忆：<strong>机器间通信用JSON，人工编辑配置用YAML</strong>。JSON胜在通用性和解析速度，YAML胜在可读性和注释支持。两者可以互相转换，选择取决于具体使用场景。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要格式化或转换JSON？试试我们的 <Link href="/json-formatter" className="text-blue-500 hover:underline font-medium">JSON格式化工具</Link>，支持美化、压缩和语法校验。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
