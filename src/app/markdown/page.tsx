'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState } from 'react'
import Link from 'next/link'

function parseMarkdown(md: string): string {
  let html = md
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // headers
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-5 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-6 mb-3">$1</h1>')
    // bold & italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // strikethrough
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
    // inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm text-red-600">$1</code>')
    // links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-500 underline" target="_blank">$1</a>')
    // unordered list
    .replace(/^[*-] (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    // ordered list
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
    // blockquote
    .replace(/^&gt; (.+)$/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 text-gray-600 italic">$1</blockquote>')
    // hr
    .replace(/^---$/gm, '<hr class="my-4 border-gray-300"/>')
    // paragraphs
    .replace(/\n\n/g, '</p><p class="mb-3">')
    .replace(/\n/g, '<br/>')
  return '<p class="mb-3">' + html + '</p>'
}

const sample = `# Markdown预览器

## 功能介绍

这是一个**实时预览**的Markdown编辑器，支持常见语法：

### 文本格式
- **粗体文本**
- *斜体文本*
- ~~删除线~~
- \`行内代码\`

### 列表
1. 第一项
2. 第二项
3. 第三项

> 这是一段引用文字

---

[访问AI Tools](https://www.cyunyun.com)

开始编辑左侧内容，右侧实时预览！`

export default function MarkdownPage() {
  const [text, setText] = useState(sample)

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6"><Link href="/" className="text-sm text-blue-500 hover:underline">← Back</Link><LangSwitcher /></div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📝 Markdown预览器</h1>
      <p className="text-gray-500 mb-6">实时编辑预览Markdown · 免费使用</p>

      <div className="grid md:grid-cols-2 gap-4 h-[600px]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col">
          <span className="text-sm font-medium text-gray-700 mb-2">编辑</span>
          <textarea value={text} onChange={e => setText(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">预览</span>
            <button onClick={() => navigator.clipboard.writeText(text)}
              className="text-xs text-blue-500 hover:underline">📋 复制Markdown</button>
          </div>
          <div className="flex-1 overflow-auto prose prose-sm max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }} />
        </div>
      </div>
    </main>
  )
}
