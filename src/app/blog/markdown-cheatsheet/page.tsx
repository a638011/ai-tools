import Link from 'next/link'

export default function MarkdownCheatsheet() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Markdown语法速查表：5分钟掌握Markdown写作</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">Markdown是程序员和写作者最爱的轻量级标记语言。GitHub、Notion、飞书、语雀都支持Markdown。学会它，写文档效率翻倍。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">标题</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p># 一级标题</p>
          <p>## 二级标题</p>
          <p>### 三级标题</p>
          <p>#### 四级标题</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">文本样式</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>**粗体文本**</p>
          <p>*斜体文本*</p>
          <p>***粗斜体***</p>
          <p>~~删除线~~</p>
          <p>`行内代码`</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">列表</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500">无序列表：</p>
          <p>- 项目一</p>
          <p>- 项目二</p>
          <p>  - 子项目</p>
          <p className="text-gray-500 mt-2">有序列表：</p>
          <p>1. 第一步</p>
          <p>2. 第二步</p>
          <p>3. 第三步</p>
          <p className="text-gray-500 mt-2">任务列表：</p>
          <p>- [x] 已完成</p>
          <p>- [ ] 未完成</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">链接和图片</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>[链接文字](https://example.com)</p>
          <p>![图片描述](https://example.com/image.jpg)</p>
          <p>[带标题的链接](https://example.com &quot;标题&quot;)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">引用</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>&gt; 这是一段引用</p>
          <p>&gt; 可以多行</p>
          <p>&gt;&gt; 嵌套引用</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">代码</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>行内代码：`const x = 1`</p>
          <p className="mt-2">代码块：</p>
          <p>```javascript</p>
          <p>function hello() {'{'}</p>
          <p>  console.log(&quot;Hello!&quot;)</p>
          <p>{'}'}</p>
          <p>```</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">表格</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>| 列1 | 列2 | 列3 |</p>
          <p>|------|------|------|</p>
          <p>| 数据 | 数据 | 数据 |</p>
          <p>| 数据 | 数据 | 数据 |</p>
        </div>
        <p className="text-gray-700 leading-relaxed">对齐方式：<code className="bg-gray-100 px-1 rounded">:---</code> 左对齐，<code className="bg-gray-100 px-1 rounded">:---:</code> 居中，<code className="bg-gray-100 px-1 rounded">---:</code> 右对齐。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">分隔线</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>---</p>
          <p>***</p>
          <p>___</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用技巧</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>💡 两个空格+回车 = 换行</p>
          <p>💡 空行 = 新段落</p>
          <p>💡 反斜杠 \ 转义特殊字符</p>
          <p>💡 HTML标签在大多数Markdown解析器中可用</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想实时预览Markdown效果？试试我们的工具：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><Link href="/markdown" className="text-blue-500 hover:underline font-medium">Markdown在线预览器</Link> — 实时编辑和预览</li>
          <li><Link href="/md-to-html" className="text-blue-500 hover:underline font-medium">Markdown转HTML</Link> — 转换为HTML代码</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">更多工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
