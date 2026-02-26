import Link from 'next/link'

export default function MarkdownToHtmlGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Markdown转HTML：原理和常用工具</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">Markdown是程序员最爱的写作格式——语法简洁、纯文本可读、版本控制友好。但最终展示给用户时，需要将Markdown转换为HTML。本文介绍转换原理、常用工具和注意事项。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Markdown语法速查</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>Markdown</span><span>HTML输出</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600 font-mono">
            <span># 标题</span><span>{'<h1>标题</h1>'}</span>
            <span>## 二级标题</span><span>{'<h2>二级标题</h2>'}</span>
            <span>**粗体**</span><span>{'<strong>粗体</strong>'}</span>
            <span>*斜体*</span><span>{'<em>斜体</em>'}</span>
            <span>[链接](url)</span><span>{'<a href="url">链接</a>'}</span>
            <span>![图片](url)</span><span>{'<img src="url" alt="图片">'}</span>
            <span>`代码`</span><span>{'<code>代码</code>'}</span>
            <span>- 列表项</span><span>{'<ul><li>列表项</li></ul>'}</span>
            <span>&gt; 引用</span><span>{'<blockquote>引用</blockquote>'}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">转换原理</h2>
        <p className="text-gray-700 leading-relaxed">Markdown转HTML的过程分为两步：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 解析（Parse） — 将Markdown文本解析为抽象语法树（AST），识别标题、段落、列表等结构</p>
          <p>2. 渲染（Render） — 遍历AST，将每个节点转换为对应的HTML标签</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 简化的转换流程</p>
          <p>{`"## Hello **world**"`}</p>
          <p className="text-gray-500">↓ 解析为AST</p>
          <p>{`{ type: "heading", level: 2, children: [`}</p>
          <p>{`  { type: "text", value: "Hello " },`}</p>
          <p>{`  { type: "bold", children: [{ type: "text", value: "world" }] }`}</p>
          <p>{`]}`}</p>
          <p className="text-gray-500">↓ 渲染为HTML</p>
          <p>{`<h2>Hello <strong>world</strong></h2>`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">主流转换库对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>库</span><span>语言</span><span>特点</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>marked</span><span>JavaScript</span><span>轻量快速，最流行</span>
            <span>markdown-it</span><span>JavaScript</span><span>插件丰富，可扩展</span>
            <span>remark</span><span>JavaScript</span><span>AST驱动，生态强大</span>
            <span>Python-Markdown</span><span>Python</span><span>Python标准选择</span>
            <span>goldmark</span><span>Go</span><span>Hugo默认引擎</span>
            <span>pulldown-cmark</span><span>Rust</span><span>性能极高</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript中使用marked</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`import { marked } from 'marked';`}</p>
          <p>{``}</p>
          <p>{`const markdown = '# Hello\\n\\nThis is **bold** text.';`}</p>
          <p>{`const html = marked.parse(markdown);`}</p>
          <p className="text-green-600">{`// <h1>Hello</h1>\\n<p>This is <strong>bold</strong> text.</p>`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">安全问题：XSS防护</h2>
        <p className="text-gray-700 leading-relaxed">Markdown允许内嵌原始HTML，这带来了XSS风险：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-red-600">{'❌ 恶意Markdown输入：'}</p>
          <p className="text-red-600">{'点击<a href="javascript:alert(1)">这里</a>'}</p>
          <p className="text-red-600">{'<img src=x onerror="alert(1)">'}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">解决方案：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 方案1：使用DOMPurify清理输出</p>
          <p>{`import DOMPurify from 'dompurify';`}</p>
          <p>{`const safeHtml = DOMPurify.sanitize(marked.parse(userInput));`}</p>
          <p>{``}</p>
          <p className="text-gray-500">// 方案2：marked配置禁用HTML</p>
          <p>{`marked.setOptions({ sanitize: true });`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">扩展语法</h2>
        <p className="text-gray-700 leading-relaxed">标准Markdown功能有限，各种扩展语法（GFM等）补充了常用功能：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 表格 — 用 | 和 - 绘制表格（GFM）</p>
          <p>• 任务列表 — [ ] 和 [x] 创建复选框（GFM）</p>
          <p>• 删除线 — ~~删除线~~（GFM）</p>
          <p>• 脚注 — [^1] 添加脚注</p>
          <p>• 数学公式 — $E=mc^2$ 内联公式（需要KaTeX/MathJax）</p>
          <p>• 代码高亮 — ```js 指定语言的代码块</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速将Markdown转为HTML？试试我们的 <Link href="/markdown-to-html" className="text-blue-500 hover:underline font-medium">Markdown转HTML工具</Link>，实时预览转换效果。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
