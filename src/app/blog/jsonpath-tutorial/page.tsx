import Link from 'next/link'

export default function JsonpathTutorial() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JSONPath教程：像XPath一样查询JSON数据</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">处理复杂的JSON数据时，你是否经常需要从嵌套很深的结构中提取某个字段？JSONPath就是为此而生的——它让你用简洁的表达式从JSON中精确提取数据，就像XPath查询XML一样。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是JSONPath？</h2>
        <p className="text-gray-700 leading-relaxed">JSONPath是Stefan Goessner在2007年提出的JSON查询语言。它使用路径表达式从JSON文档中选取数据节点。几乎所有主流编程语言都有JSONPath的实现库。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础语法</h2>
        <p className="text-gray-700 leading-relaxed">假设我们有以下JSON数据：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{"{"}</p>
          <p className="pl-4">{'"store": {'}</p>
          <p className="pl-8">{'"book": ['}</p>
          <p className="pl-12">{`{ "category": "fiction", "author": "Herman Melville",`}</p>
          <p className="pl-14">{`"title": "Moby Dick", "price": 8.99 },`}</p>
          <p className="pl-12">{`{ "category": "fiction", "author": "J.R.R. Tolkien",`}</p>
          <p className="pl-14">{`"title": "The Lord of the Rings", "price": 22.99 }`}</p>
          <p className="pl-8">{"],"}</p>
          <p className="pl-8">{'"bicycle": { "color": "red", "price": 19.95 }'}</p>
          <p className="pl-4">{"}"}</p>
          <p>{"}"}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSONPath符号对照表</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>符号</span><span>含义</span><span>示例</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <code className="font-mono">$</code><span>根节点</span><code className="font-mono">$</code>
            <code className="font-mono">.</code><span>子节点</span><code className="font-mono">$.store</code>
            <code className="font-mono">..</code><span>递归搜索</span><code className="font-mono">$..price</code>
            <code className="font-mono">*</code><span>通配符</span><code className="font-mono">$.store.*</code>
            <code className="font-mono">[]</code><span>下标/属性</span><code className="font-mono">$.store.book[0]</code>
            <code className="font-mono">[,]</code><span>多选</span><code className="font-mono">$.book[0,1]</code>
            <code className="font-mono">[start:end]</code><span>切片</span><code className="font-mono">$.book[0:2]</code>
            <code className="font-mono">[?()]</code><span>过滤器</span><code className="font-mono">$.book[?(@.price&lt;10)]</code>
            <code className="font-mono">@</code><span>当前节点</span><span>用在过滤器中</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用查询示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-gray-500 font-mono">$.store.book[*].author</p>
            <p className="text-gray-700">→ 所有书的作者：["Herman Melville", "J.R.R. Tolkien"]</p>
          </div>
          <div>
            <p className="text-gray-500 font-mono">$..price</p>
            <p className="text-gray-700">→ 所有价格：[8.99, 22.99, 19.95]</p>
          </div>
          <div>
            <p className="text-gray-500 font-mono">$.store.book[-1]</p>
            <p className="text-gray-700">→ 最后一本书的信息</p>
          </div>
          <div>
            <p className="text-gray-500 font-mono">$.store.book[?(@.price &lt; 10)]</p>
            <p className="text-gray-700">→ 价格低于10的书</p>
          </div>
          <div>
            <p className="text-gray-500 font-mono">$.store.book[?(@.category == &apos;fiction&apos;)]</p>
            <p className="text-gray-700">→ 分类为fiction的书</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JSONPath vs XPath对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>功能</span><span>XPath</span><span>JSONPath</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>根节点</span><code className="font-mono">/</code><code className="font-mono">$</code>
            <span>子节点</span><code className="font-mono">/store</code><code className="font-mono">$.store</code>
            <span>递归</span><code className="font-mono">//price</code><code className="font-mono">$..price</code>
            <span>通配符</span><code className="font-mono">*</code><code className="font-mono">*</code>
            <span>当前节点</span><code className="font-mono">.</code><code className="font-mono">@</code>
            <span>过滤</span><code className="font-mono">[price&lt;10]</code><code className="font-mono">[?(@.price&lt;10)]</code>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在JavaScript中使用JSONPath</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 安装：npm install jsonpath-plus</p>
          <p>{`import { JSONPath } from 'jsonpath-plus';`}</p>
          <p></p>
          <p>{`const data = { store: { book: [...] } };`}</p>
          <p></p>
          <p className="text-gray-500">// 查询所有书的标题</p>
          <p>{`const titles = JSONPath({`}</p>
          <p className="pl-4">{`path: '$.store.book[*].title',`}</p>
          <p className="pl-4">{`json: data`}</p>
          <p>{`});`}</p>
          <p className="text-green-600">// ["Moby Dick", "The Lord of the Rings"]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在Python中使用JSONPath</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 安装：pip install jsonpath-ng</p>
          <p>{`from jsonpath_ng import parse`}</p>
          <p></p>
          <p>{`expr = parse('$.store.book[*].author')`}</p>
          <p>{`matches = expr.find(data)`}</p>
          <p>{`authors = [m.value for m in matches]`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见使用场景</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>🔍 API响应数据提取——从复杂的API返回中快速取值</p>
          <p>🧪 自动化测试——验证API返回的特定字段</p>
          <p>📊 数据转换——ETL流程中的数据映射</p>
          <p>📋 配置文件——在配置中引用JSON数据路径</p>
          <p>🔧 调试工具——快速定位JSON中的特定数据</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想在线测试JSONPath表达式？试试我们的 <Link href="/jsonpath" className="text-blue-500 hover:underline font-medium">JSONPath在线测试工具</Link>，粘贴JSON数据，输入表达式即可实时查看结果。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
