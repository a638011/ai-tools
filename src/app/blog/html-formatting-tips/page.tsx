import Link from 'next/link'

export default function HtmlFormattingTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">HTML代码格式化最佳实践：写出整洁的HTML</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">整洁的HTML代码不仅让团队协作更顺畅，也让调试和维护变得轻松。然而很多项目中的HTML代码缩进混乱、标签嵌套不规范、属性顺序随意。本文分享HTML格式化的最佳实践，帮你写出专业级的HTML。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么HTML格式化很重要？</h2>
        <p className="text-gray-700 leading-relaxed">压缩后的HTML对浏览器来说没有区别，但对开发者来说差别巨大。格式良好的HTML能让你一眼看出DOM结构、快速定位问题、减少合并冲突。</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500 mb-2">❌ 难以阅读的HTML：</p>
          <p className="text-red-600">{`<div class="container"><div class="row"><div class="col"><h1>标题</h1><p>内容</p></div></div></div>`}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500 mb-2">✅ 格式化后的HTML：</p>
          <p className="text-green-700">{`<div class="container">`}</p>
          <p className="text-green-700 pl-4">{`<div class="row">`}</p>
          <p className="text-green-700 pl-8">{`<div class="col">`}</p>
          <p className="text-green-700 pl-12">{`<h1>标题</h1>`}</p>
          <p className="text-green-700 pl-12">{`<p>内容</p>`}</p>
          <p className="text-green-700 pl-8">{`</div>`}</p>
          <p className="text-green-700 pl-4">{`</div>`}</p>
          <p className="text-green-700">{`</div>`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">缩进规范</h2>
        <p className="text-gray-700 leading-relaxed">缩进是HTML格式化的基础。业界主流有两种选择：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-32">2个空格</span><span className="text-gray-600">Google、Airbnb推荐，适合嵌套较深的HTML</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-32">4个空格/Tab</span><span className="text-gray-600">WordPress等项目使用，层次更明显</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">关键是团队统一。用 <code className="bg-gray-100 px-1 rounded text-sm">.editorconfig</code> 文件锁定配置：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>[*.html]</p>
          <p>indent_style = space</p>
          <p>indent_size = 2</p>
          <p>end_of_line = lf</p>
          <p>trim_trailing_whitespace = true</p>
          <p>insert_final_newline = true</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">属性排列顺序</h2>
        <p className="text-gray-700 leading-relaxed">HTML属性建议按以下顺序排列，便于快速扫读：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>1. <code className="bg-gray-100 px-1 rounded">class</code> — 最常用，放最前</p>
          <p>2. <code className="bg-gray-100 px-1 rounded">id</code>、<code className="bg-gray-100 px-1 rounded">name</code> — 标识符</p>
          <p>3. <code className="bg-gray-100 px-1 rounded">data-*</code> — 自定义数据属性</p>
          <p>4. <code className="bg-gray-100 px-1 rounded">src</code>、<code className="bg-gray-100 px-1 rounded">href</code>、<code className="bg-gray-100 px-1 rounded">type</code> — 资源相关</p>
          <p>5. <code className="bg-gray-100 px-1 rounded">alt</code>、<code className="bg-gray-100 px-1 rounded">title</code> — 辅助信息</p>
          <p>6. <code className="bg-gray-100 px-1 rounded">aria-*</code>、<code className="bg-gray-100 px-1 rounded">role</code> — 无障碍属性</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">多属性换行</h2>
        <p className="text-gray-700 leading-relaxed">当一个标签的属性过多时，建议每个属性单独一行：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`<input`}</p>
          <p className="pl-4">{`class="form-control"`}</p>
          <p className="pl-4">{`id="username"`}</p>
          <p className="pl-4">{`type="text"`}</p>
          <p className="pl-4">{`placeholder="请输入用户名"`}</p>
          <p className="pl-4">{`aria-label="用户名"`}</p>
          <p className="pl-4">{`required`}</p>
          <p>{`/>`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">自闭合标签</h2>
        <p className="text-gray-700 leading-relaxed">HTML5中，void元素不需要闭合斜杠，但加上也不会报错：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm space-y-1">
          <p className="text-gray-600">{`<br>      <!-- HTML5推荐 -->`}</p>
          <p className="text-gray-600">{`<br />    <!-- XHTML风格，React/JSX中必须 -->`}</p>
          <p className="text-gray-600">{`<img src="photo.jpg" alt="照片">`}</p>
          <p className="text-gray-600">{`<input type="text">`}</p>
          <p className="text-gray-600">{`<meta charset="utf-8">`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">语义化标签</h2>
        <p className="text-gray-700 leading-relaxed">用语义化标签替代无意义的div，代码更清晰，SEO和无障碍也更好：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>❌ 避免</span><span>✅ 推荐</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600 font-mono">
            <span>{`<div class="header">`}</span><span>{`<header>`}</span>
            <span>{`<div class="nav">`}</span><span>{`<nav>`}</span>
            <span>{`<div class="main">`}</span><span>{`<main>`}</span>
            <span>{`<div class="footer">`}</span><span>{`<footer>`}</span>
            <span>{`<div class="article">`}</span><span>{`<article>`}</span>
            <span>{`<div class="sidebar">`}</span><span>{`<aside>`}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用格式化工具</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">Prettier</span><span className="text-gray-600">最流行的代码格式化工具，支持HTML/CSS/JS</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">HTMLHint</span><span className="text-gray-600">HTML代码检查工具，发现潜在问题</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">VS Code</span><span className="text-gray-600">内置HTML格式化，Shift+Alt+F一键格式化</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">js-beautify</span><span className="text-gray-600">经典的HTML/CSS/JS美化库</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prettier配置示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// .prettierrc</p>
          <p>{"{"}</p>
          <p className="pl-4">{`"printWidth": 100,`}</p>
          <p className="pl-4">{`"tabWidth": 2,`}</p>
          <p className="pl-4">{`"useTabs": false,`}</p>
          <p className="pl-4">{`"htmlWhitespaceSensitivity": "css",`}</p>
          <p className="pl-4">{`"singleAttributePerLine": true`}</p>
          <p>{"}"}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速格式化HTML代码？试试我们的 <Link href="/html-formatter" className="text-blue-500 hover:underline font-medium">在线HTML格式化工具</Link>，粘贴代码一键美化，支持自定义缩进。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
