import Link from 'next/link'

export default function MarkdownTableSyntax() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Markdown表格语法详解：对齐、合并、美化技巧</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">Markdown表格是技术文档中展示结构化数据的利器。虽然语法简单，但很多人只会最基础的用法。本文从入门到进阶，带你掌握Markdown表格的所有技巧。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础语法</h2>
        <p className="text-gray-700 leading-relaxed">Markdown表格由管道符 <code className="bg-gray-100 px-1 rounded text-sm">|</code> 和连字符 <code className="bg-gray-100 px-1 rounded text-sm">-</code> 组成：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>| 姓名 | 年龄 | 城市 |</p>
          <p>| ---- | ---- | ---- |</p>
          <p>| 张三 | 25   | 北京 |</p>
          <p>| 李四 | 30   | 上海 |</p>
        </div>
        <p className="text-gray-700 leading-relaxed">渲染效果就是一个标准的三列表格。第二行是分隔行，至少需要三个连字符。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">对齐方式</h2>
        <p className="text-gray-700 leading-relaxed">通过在分隔行添加冒号 <code className="bg-gray-100 px-1 rounded text-sm">:</code> 来控制对齐：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>| 左对齐 | 居中对齐 | 右对齐 |</p>
          <p>| :----- | :------: | -----: |</p>
          <p>| 内容   |   内容   |   内容 |</p>
          <p>| 文本   |   文本   |   文本 |</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">:---</code><span className="text-gray-600">左对齐（默认）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">:---:</code><span className="text-gray-600">居中对齐</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">---:</code><span className="text-gray-600">右对齐</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">数字列通常右对齐，文本列左对齐，标题列居中——这是排版的基本原则。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">表格内使用格式</h2>
        <p className="text-gray-700 leading-relaxed">表格单元格内可以使用大部分行内Markdown语法：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>| 格式 | 语法 | 效果 |</p>
          <p>| ---- | ---- | ---- |</p>
          <p>| 粗体 | `**文字**` | **文字** |</p>
          <p>| 斜体 | `*文字*` | *文字* |</p>
          <p>| 代码 | `` `code` `` | `code` |</p>
          <p>| 链接 | `[文字](url)` | [文字](url) |</p>
          <p>| 图片 | `![alt](url)` | 显示图片 |</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">转义管道符</h2>
        <p className="text-gray-700 leading-relaxed">如果单元格内容包含管道符 <code className="bg-gray-100 px-1 rounded text-sm">|</code>，需要用反斜杠转义：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>| 表达式 | 含义 |</p>
          <p>| ------ | ---- |</p>
          <p>| a \| b | a或b |</p>
          <p>{`| x \\| y | x或y |`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">美化技巧：对齐源码</h2>
        <p className="text-gray-700 leading-relaxed">虽然Markdown不要求列宽对齐，但对齐源码可读性更好：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500 mb-1">❌ 不对齐（能用但难读）：</p>
          <p className="text-red-600">|名字|分数|等级|</p>
          <p className="text-red-600">|-|-|-|</p>
          <p className="text-red-600">|张三|95|A|</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 my-4 font-mono text-sm">
          <p className="text-gray-500 mb-1">✅ 对齐（清晰美观）：</p>
          <p className="text-green-700">| 名字 | 分数 | 等级 |</p>
          <p className="text-green-700">| ---- | ---- | ---- |</p>
          <p className="text-green-700">| 张三 |   95 | A    |</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Markdown表格的局限</h2>
        <p className="text-gray-700 leading-relaxed">标准Markdown表格有一些限制：</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>❌ 不支持单元格合并（rowspan/colspan）</p>
          <p>❌ 不支持多行内容（单元格内换行）</p>
          <p>❌ 不支持表格标题（caption）</p>
          <p>❌ 不支持嵌套表格</p>
        </div>
        <p className="text-gray-700 leading-relaxed">遇到这些需求时，可以直接在Markdown中写HTML表格：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`<table>`}</p>
          <p className="pl-4">{`<tr>`}</p>
          <p className="pl-8">{`<th colspan="2">合并标题</th>`}</p>
          <p className="pl-4">{`</tr>`}</p>
          <p className="pl-4">{`<tr>`}</p>
          <p className="pl-8">{`<td>单元格1</td>`}</p>
          <p className="pl-8">{`<td>单元格2</td>`}</p>
          <p className="pl-4">{`</tr>`}</p>
          <p>{`</table>`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">单元格内换行</h2>
        <p className="text-gray-700 leading-relaxed">标准语法不支持，但可以用HTML的 <code className="bg-gray-100 px-1 rounded text-sm">&lt;br&gt;</code> 标签：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`| 项目 | 说明 |`}</p>
          <p>{`| ---- | ---- |`}</p>
          <p>{`| 功能A | 第一行<br>第二行 |`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用工具推荐</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <p className="text-gray-700">📋 从Excel/CSV粘贴数据，自动转为Markdown表格</p>
          <p className="text-gray-700">🔄 Markdown表格与HTML表格互转</p>
          <p className="text-gray-700">📐 自动对齐表格源码，让源码更美观</p>
          <p className="text-gray-700">📊 可视化编辑器，所见即所得编辑表格</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速创建和编辑Markdown表格？试试我们的 <Link href="/markdown-editor" className="text-blue-500 hover:underline font-medium">Markdown编辑器</Link>，实时预览表格效果，支持从CSV导入。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
