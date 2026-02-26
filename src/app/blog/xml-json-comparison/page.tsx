import Link from 'next/link'

export default function XmlJsonComparison() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">XML vs JSON：数据格式选择指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">XML和JSON是最常用的两种数据交换格式。XML曾经统治Web服务领域，而JSON凭借简洁性在REST API时代成为主流。但XML并没有消亡，在很多场景下它仍然是更好的选择。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">同一数据的两种表达</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">{'<!-- XML格式 -->'}</p>
            <p>{'<user>'}</p>
            <p>{'  <name>张三</name>'}</p>
            <p>{'  <age>28</age>'}</p>
            <p>{'  <skills>'}</p>
            <p>{'    <skill>JavaScript</skill>'}</p>
            <p>{'    <skill>Python</skill>'}</p>
            <p>{'  </skills>'}</p>
            <p>{'</user>'}</p>
          </div>
          <div>
            <p className="text-gray-500">// JSON格式</p>
            <p>{'{'}</p>
            <p>{'  "name": "张三",'}</p>
            <p>{'  "age": 28,'}</p>
            <p>{'  "skills": ["JavaScript", "Python"]'}</p>
            <p>{'}'}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">同样的数据，XML用了约150字节，JSON只需约80字节。JSON更紧凑，但XML携带了更多结构信息。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">核心对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>XML</span><span>JSON</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>可读性</span><span>标签冗长但清晰</span><span>简洁直观</span>
            <span>数据类型</span><span>全是字符串</span><span>支持数字、布尔、null</span>
            <span>数组</span><span>无原生数组</span><span>原生支持</span>
            <span>注释</span><span className="text-green-600">支持</span><span className="text-red-600">不支持</span>
            <span>命名空间</span><span className="text-green-600">支持</span><span className="text-red-600">不支持</span>
            <span>Schema验证</span><span>XSD/DTD，非常成熟</span><span>JSON Schema</span>
            <span>解析速度</span><span>较慢</span><span>快</span>
            <span>文件大小</span><span>较大</span><span>较小</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么时候用JSON？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ REST API数据交换 — 几乎所有现代API都用JSON</p>
          <p>✅ 前端与后端通信 — JavaScript原生支持JSON.parse/stringify</p>
          <p>✅ 配置文件 — package.json、tsconfig.json等</p>
          <p>✅ NoSQL数据库 — MongoDB等文档数据库原生存储JSON</p>
          <p>✅ 移动端API — 体积小，解析快，节省流量</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么时候用XML？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ SOAP Web服务 — 企业级服务接口标准</p>
          <p>✅ 文档标记 — HTML、SVG、RSS都是XML的变体</p>
          <p>✅ 需要Schema严格验证 — 金融、医疗等对数据格式要求严格的行业</p>
          <p>✅ 需要命名空间 — 多个系统的数据混合时避免命名冲突</p>
          <p>✅ 需要XSLT转换 — 将数据转换为不同格式的展示</p>
          <p>✅ Android布局文件 — Android UI用XML描述</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">解析方式对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// JSON解析 — 一行代码</p>
            <p>{`const data = JSON.parse('{"name":"张三","age":28}');`}</p>
            <p>{`console.log(data.name); // "张三"`}</p>
          </div>
          <div>
            <p className="text-gray-500">// XML解析 — 需要DOM操作</p>
            <p>{`const parser = new DOMParser();`}</p>
            <p>{`const doc = parser.parseFromString(xmlString, 'text/xml');`}</p>
            <p>{`const name = doc.querySelector('name').textContent;`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">XML和JSON互转</h2>
        <p className="text-gray-700 leading-relaxed">实际项目中经常需要在两种格式间转换。需要注意的陷阱：</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ XML属性没有JSON对应物 — {'<user id="1">'} 中的id属性需要特殊处理</p>
          <p>⚠️ XML单元素数组歧义 — {'<items><item>A</item></items>'} 转JSON时，item是字符串还是数组？</p>
          <p>⚠️ XML混合内容 — {'<p>Hello <b>world</b></p>'} 这种文本和标签混合的结构JSON无法表达</p>
          <p>⚠️ JSON数字精度 — XML中的数字是字符串，转JSON时大数字可能丢失精度</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2026年的趋势</h2>
        <p className="text-gray-700 leading-relaxed">JSON在Web开发中的主导地位已经稳固。但XML在企业集成、文档处理、配置管理等领域依然不可替代。选择哪个取决于你的具体场景，而不是哪个更"现代"。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要格式化或转换XML/JSON？试试我们的 <Link href="/json-formatter" className="text-blue-500 hover:underline font-medium">JSON格式化工具</Link> 和 <Link href="/xml-formatter" className="text-blue-500 hover:underline font-medium">XML格式化工具</Link>。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
