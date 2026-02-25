import Link from 'next/link'

export default function JsonFormatterGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">在线JSON格式化工具使用指南：格式化、压缩、校验</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">JSON（JavaScript Object Notation）是当今最流行的数据交换格式。无论是前端开发、后端API、还是配置文件，JSON无处不在。但是，当你面对一大段压缩的JSON字符串时，阅读和调试就变得非常困难。</p>
        <p className="text-gray-700 leading-relaxed">这时候，一个好用的JSON格式化工具就是你的救星。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是JSON格式化？</h2>
        <p className="text-gray-700 leading-relaxed">JSON格式化就是将压缩的JSON字符串转换为带缩进的、易于阅读的格式。例如：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4">
          <p className="text-sm text-gray-500 mb-2">格式化前（压缩）：</p>
          <code className="text-sm text-gray-700">{`{"name":"张三","age":25,"skills":["JavaScript","Python"]}`}</code>
          <p className="text-sm text-gray-500 mt-4 mb-2">格式化后：</p>
          <pre className="text-sm text-gray-700">{`{
  "name": "张三",
  "age": 25,
  "skills": [
    "JavaScript",
    "Python"
  ]
}`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSON格式化工具能做什么？</h2>
        <p className="text-gray-700 leading-relaxed">我们的 <Link href="/json-formatter" className="text-blue-500 hover:underline">免费JSON格式化工具</Link> 提供三大核心功能：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>格式化（Format）</strong>— 将压缩JSON转为带缩进的可读格式，默认2空格缩进</li>
          <li><strong>压缩（Minify）</strong>— 去除所有空格和换行，减小JSON体积，适合传输和存储</li>
          <li><strong>校验（Validate）</strong>— 自动检测JSON语法错误，精确定位错误位置</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见JSON错误及解决方法</h2>
        <p className="text-gray-700 leading-relaxed">在日常开发中，最常遇到的JSON错误有：</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. 尾部多余逗号</h3>
        <div className="bg-red-50 rounded-lg p-3 my-2">
          <code className="text-sm text-red-600">{`{"name": "test", "age": 25,}`}</code>
          <p className="text-xs text-red-500 mt-1">❌ 最后一个属性后面不能有逗号</p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. 使用单引号</h3>
        <div className="bg-red-50 rounded-lg p-3 my-2">
          <code className="text-sm text-red-600">{`{'name': 'test'}`}</code>
          <p className="text-xs text-red-500 mt-1">❌ JSON必须使用双引号，不能用单引号</p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. 键名没有引号</h3>
        <div className="bg-red-50 rounded-lg p-3 my-2">
          <code className="text-sm text-red-600">{`{name: "test"}`}</code>
          <p className="text-xs text-red-500 mt-1">❌ JSON的键名必须用双引号包裹</p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. 注释</h3>
        <div className="bg-red-50 rounded-lg p-3 my-2">
          <code className="text-sm text-red-600">{`{"name": "test" // 这是注释}`}</code>
          <p className="text-xs text-red-500 mt-1">❌ 标准JSON不支持注释</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">使用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>API调试</strong>— 格式化接口返回的JSON数据，快速定位字段</li>
          <li><strong>配置文件编辑</strong>— 检查package.json、tsconfig.json等配置文件的语法</li>
          <li><strong>数据分析</strong>— 将数据库导出的JSON数据格式化后分析</li>
          <li><strong>前后端联调</strong>— 对比请求和响应的JSON结构</li>
          <li><strong>文档编写</strong>— 将格式化后的JSON作为API文档示例</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么选择在线工具？</h2>
        <p className="text-gray-700 leading-relaxed">相比VS Code插件或命令行工具，在线JSON格式化工具的优势在于：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>无需安装，打开浏览器就能用</li>
          <li>跨平台，Windows/Mac/Linux都能用</li>
          <li>数据不上传服务器，完全在浏览器本地处理</li>
          <li>分享方便，发个链接给同事就行</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-6">立即试试我们的 <Link href="/json-formatter" className="text-blue-500 hover:underline font-medium">免费JSON格式化工具</Link>，让你的JSON数据一目了然。</p>
        <p className="text-gray-700 leading-relaxed">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
