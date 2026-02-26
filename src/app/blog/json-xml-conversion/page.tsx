import Link from 'next/link'

export default function JsonXmlConversion() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JSON和XML互转：格式转换完全指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">JSON和XML是两种最主流的数据交换格式。现代API大多使用JSON，但很多企业系统、SOAP服务、配置文件仍在使用XML。当你需要在两者之间转换时，了解它们的差异和转换规则至关重要。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON vs XML 对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>JSON</span><span>XML</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>可读性</span><span>简洁直观</span><span>标签冗长</span>
            <span>数据类型</span><span>字符串、数字、布尔、null、数组、对象</span><span>全部是文本</span>
            <span>数组支持</span><span>原生支持</span><span>需要重复元素</span>
            <span>属性</span><span>不支持</span><span>支持元素属性</span>
            <span>注释</span><span>不支持</span><span>支持</span>
            <span>命名空间</span><span>不支持</span><span>支持</span>
            <span>Schema验证</span><span>JSON Schema</span><span>XSD / DTD</span>
            <span>文件大小</span><span>较小</span><span>较大（标签开销）</span>
            <span>解析速度</span><span>快</span><span>较慢</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">同一数据的两种表示</h2>
        <p className="text-gray-700 leading-relaxed">JSON格式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{"{"}</p>
          <p className="pl-4">{`"users": [`}</p>
          <p className="pl-8">{`{`}</p>
          <p className="pl-12">{`"id": 1,`}</p>
          <p className="pl-12">{`"name": "张三",`}</p>
          <p className="pl-12">{`"email": "zhangsan@example.com",`}</p>
          <p className="pl-12">{`"active": true`}</p>
          <p className="pl-8">{`},`}</p>
          <p className="pl-8">{`{`}</p>
          <p className="pl-12">{`"id": 2,`}</p>
          <p className="pl-12">{`"name": "李四",`}</p>
          <p className="pl-12">{`"email": "lisi@example.com",`}</p>
          <p className="pl-12">{`"active": false`}</p>
          <p className="pl-8">{`}`}</p>
          <p className="pl-4">{`]`}</p>
          <p>{"}"}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">等价的XML格式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
          <p>{`<root>`}</p>
          <p className="pl-4">{`<users>`}</p>
          <p className="pl-8">{`<user>`}</p>
          <p className="pl-12">{`<id>1</id>`}</p>
          <p className="pl-12">{`<name>张三</name>`}</p>
          <p className="pl-12">{`<email>zhangsan@example.com</email>`}</p>
          <p className="pl-12">{`<active>true</active>`}</p>
          <p className="pl-8">{`</user>`}</p>
          <p className="pl-8">{`<user>`}</p>
          <p className="pl-12">{`<id>2</id>`}</p>
          <p className="pl-12">{`<name>李四</name>`}</p>
          <p className="pl-12">{`<email>lisi@example.com</email>`}</p>
          <p className="pl-12">{`<active>false</active>`}</p>
          <p className="pl-8">{`</user>`}</p>
          <p className="pl-4">{`</users>`}</p>
          <p>{`</root>`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">转换中的难点</h2>
        <p className="text-gray-700 leading-relaxed">JSON和XML并非完全等价，转换时需要处理以下问题：</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ XML属性——JSON没有属性概念，通常转为带@前缀的字段</p>
          <p>⚠️ 数据类型——XML中所有值都是字符串，转JSON时需要推断类型</p>
          <p>⚠️ 数组识别——XML中重复元素需要识别为数组</p>
          <p>⚠️ 混合内容——XML元素可以同时包含文本和子元素</p>
          <p>⚠️ 命名空间——XML命名空间在JSON中没有对应概念</p>
          <p>⚠️ CDATA——XML的CDATA段需要特殊处理</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">XML属性的转换约定</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">{`<!-- XML带属性 -->`}</p>
          <p>{`<user id="1" role="admin">`}</p>
          <p className="pl-4">{`<name>张三</name>`}</p>
          <p>{`</user>`}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 转为JSON（常见约定）</p>
          <p>{"{"}</p>
          <p className="pl-4">{`"user": {`}</p>
          <p className="pl-8">{`"@id": "1",`}</p>
          <p className="pl-8">{`"@role": "admin",`}</p>
          <p className="pl-8">{`"name": "张三"`}</p>
          <p className="pl-4">{`}`}</p>
          <p>{"}"}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript转换示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 使用 fast-xml-parser（推荐）</p>
          <p>{`import { XMLParser, XMLBuilder } from 'fast-xml-parser';`}</p>
          <p></p>
          <p className="text-gray-500">// XML → JSON</p>
          <p>{`const parser = new XMLParser({ ignoreAttributes: false });`}</p>
          <p>{`const json = parser.parse(xmlString);`}</p>
          <p></p>
          <p className="text-gray-500">// JSON → XML</p>
          <p>{`const builder = new XMLBuilder({ ignoreAttributes: false });`}</p>
          <p>{`const xml = builder.build(jsonObject);`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Python转换示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 使用 xmltodict</p>
          <p>import xmltodict, json</p>
          <p></p>
          <p className="text-gray-500"># XML → JSON</p>
          <p>{`data = xmltodict.parse(xml_string)`}</p>
          <p>{`json_str = json.dumps(data, ensure_ascii=False, indent=2)`}</p>
          <p></p>
          <p className="text-gray-500"># JSON → XML</p>
          <p>{`data = json.loads(json_string)`}</p>
          <p>{`xml_str = xmltodict.unparse(data, pretty=True)`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么时候用JSON，什么时候用XML？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-20">用JSON</span><span className="text-gray-600">REST API、前端数据交互、配置文件、NoSQL数据库</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-20">用XML</span><span className="text-gray-600">SOAP服务、Office文档、SVG图形、RSS/Atom、Android布局</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速转换JSON和XML？试试我们的 <Link href="/json-to-xml" className="text-blue-500 hover:underline font-medium">JSON/XML互转工具</Link>，粘贴数据一键转换，支持格式化输出。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
