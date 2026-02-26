import Link from 'next/link'

export default function JsonSchemaTutorial() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JSON Schema入门：数据验证的标准方法</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">JSON灵活好用，但灵活也意味着混乱。当你的API接收到一个JSON请求，怎么确保字段类型正确、必填项不缺、值在合理范围内？JSON Schema就是解决这个问题的标准方案。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是JSON Schema？</h2>
        <p className="text-gray-700 leading-relaxed">JSON Schema是一种用JSON格式编写的"规则文档"，用来描述JSON数据应该长什么样。它可以验证数据类型、必填字段、值范围、字符串格式等。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 一个简单的JSON Schema</p>
            <p>{'{'}</p>
            <p>{'  "$schema": "https://json-schema.org/draft/2020-12/schema",'}</p>
            <p>{'  "type": "object",'}</p>
            <p>{'  "properties": {'}</p>
            <p>{'    "name": { "type": "string", "minLength": 1 },'}</p>
            <p>{'    "age": { "type": "integer", "minimum": 0, "maximum": 150 },'}</p>
            <p>{'    "email": { "type": "string", "format": "email" }'}</p>
            <p>{'  },'}</p>
            <p>{'  "required": ["name", "email"]'}</p>
            <p>{'}'}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">核心关键字</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>关键字</span><span>作用</span><span>示例</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600 font-mono">
            <span>type</span><span className="font-sans">数据类型</span><span>"string" / "number" / "object"</span>
            <span>required</span><span className="font-sans">必填字段</span><span>["name", "email"]</span>
            <span>properties</span><span className="font-sans">对象属性定义</span><span>{'{ "name": {...} }'}</span>
            <span>items</span><span className="font-sans">数组元素定义</span><span>{'{ "type": "string" }'}</span>
            <span>enum</span><span className="font-sans">枚举值</span><span>["active", "inactive"]</span>
            <span>minimum</span><span className="font-sans">最小值</span><span>0</span>
            <span>maxLength</span><span className="font-sans">最大长度</span><span>100</span>
            <span>pattern</span><span className="font-sans">正则匹配</span><span>"^[A-Z]"</span>
            <span>format</span><span className="font-sans">预定义格式</span><span>"email" / "uri" / "date"</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实战：用户注册API验证</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{'{'}</p>
          <p>{'  "type": "object",'}</p>
          <p>{'  "properties": {'}</p>
          <p>{'    "username": {'}</p>
          <p>{'      "type": "string",'}</p>
          <p>{'      "minLength": 3,'}</p>
          <p>{'      "maxLength": 20,'}</p>
          <p>{'      "pattern": "^[a-zA-Z0-9_]+$"'}</p>
          <p>{'    },'}</p>
          <p>{'    "password": { "type": "string", "minLength": 8 },'}</p>
          <p>{'    "age": { "type": "integer", "minimum": 18 },'}</p>
          <p>{'    "role": { "type": "string", "enum": ["user", "admin"] },'}</p>
          <p>{'    "tags": {'}</p>
          <p>{'      "type": "array",'}</p>
          <p>{'      "items": { "type": "string" },'}</p>
          <p>{'      "maxItems": 5'}</p>
          <p>{'    }'}</p>
          <p>{'  },'}</p>
          <p>{'  "required": ["username", "password"],'}</p>
          <p>{'  "additionalProperties": false'}</p>
          <p>{'}'}</p>
        </div>
        <p className="text-gray-700 leading-relaxed"><code className="bg-gray-100 px-1 rounded text-sm">additionalProperties: false</code> 表示不允许Schema中未定义的字段，防止客户端传入意外数据。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在JavaScript中使用</h2>
        <p className="text-gray-700 leading-relaxed">最流行的JS验证库是Ajv：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`import Ajv from 'ajv';`}</p>
          <p>{`import addFormats from 'ajv-formats';`}</p>
          <p>{``}</p>
          <p>{`const ajv = new Ajv();`}</p>
          <p>{`addFormats(ajv); // 支持email、uri等format`}</p>
          <p>{``}</p>
          <p>{`const validate = ajv.compile(schema);`}</p>
          <p>{`const valid = validate(data);`}</p>
          <p>{``}</p>
          <p>{`if (!valid) {`}</p>
          <p>{`  console.log(validate.errors);`}</p>
          <p>{`  // [{ keyword: "required", params: { missingProperty: "email" } }]`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">高级特性</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 条件验证：如果role是admin，则需要adminCode</p>
            <p>{'{'}</p>
            <p>{'  "if": { "properties": { "role": { "const": "admin" } } },'}</p>
            <p>{'  "then": { "required": ["adminCode"] }'}</p>
            <p>{'}'}</p>
          </div>
          <div>
            <p className="text-gray-500">// 引用复用：$ref</p>
            <p>{'{'}</p>
            <p>{'  "$defs": {'}</p>
            <p>{'    "address": { "type": "object", "properties": { "city": { "type": "string" } } }'}</p>
            <p>{'  },'}</p>
            <p>{'  "properties": {'}</p>
            <p>{'    "homeAddress": { "$ref": "#/$defs/address" },'}</p>
            <p>{'    "workAddress": { "$ref": "#/$defs/address" }'}</p>
            <p>{'  }'}</p>
            <p>{'}'}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON Schema的应用场景</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>💡 API请求/响应验证 — 确保前后端数据格式一致</p>
          <p>💡 表单验证 — 根据Schema自动生成前端表单和验证规则</p>
          <p>💡 配置文件验证 — VS Code的settings.json就用JSON Schema提供智能提示</p>
          <p>💡 API文档 — OpenAPI/Swagger使用JSON Schema描述数据模型</p>
          <p>💡 代码生成 — 根据Schema自动生成TypeScript类型定义</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要格式化或验证JSON数据？试试我们的 <Link href="/json-formatter" className="text-blue-500 hover:underline font-medium">JSON格式化工具</Link>，支持语法高亮和错误检测。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
