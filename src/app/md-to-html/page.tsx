'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

function md2html(md: string): string {
  let html = md
  // headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')
  // bold & italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  // strikethrough
  html = html.replace(/~~(.+?)~~/g, '<del>$1</del>')
  // code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
  // inline code
  html = html.replace(/`(.+?)`/g, '<code>$1</code>')
  // links & images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  // blockquote
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
  // unordered list
  html = html.replace(/^[*-] (.+)$/gm, '<li>$1</li>')
  // ordered list
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
  // hr
  html = html.replace(/^---$/gm, '<hr />')
  // paragraphs
  html = html.replace(/\n\n/g, '</p><p>')
  html = '<p>' + html + '</p>'
  html = html.replace(/<p><(h[1-3]|pre|blockquote|hr|li)/g, '<$1')
  html = html.replace(/<\/(h[1-3]|pre|blockquote|li)><\/p>/g, '</$1>')
  html = html.replace(/<p><\/p>/g, '')
  return html.trim()
}

export default function Md2HtmlPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [input, setInput] = useState('')

  const output = input.trim() ? md2html(input) : ''

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📝 Markdown → HTML</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '将Markdown文本转换为HTML代码' : 'Convert Markdown text to HTML code'}</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Markdown</span>
            <button onClick={() => setInput('')} className="text-xs text-gray-400 hover:text-gray-600">{ui.clear}</button>
          </div>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={16}
            placeholder={locale === 'zh' ? '# 标题\n\n**粗体** *斜体*\n\n- 列表项\n- 列表项\n\n[链接](https://example.com)' : '# Heading\n\n**bold** *italic*\n\n- list item\n\n[link](https://example.com)'}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg font-mono text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">HTML</span>
            {output && <button onClick={() => navigator.clipboard.writeText(output)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>}
          </div>
          <textarea value={output} readOnly rows={16}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 font-mono text-sm text-gray-700 resize-none" />
        </div>
      </div>

      {output && (
        <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-700 block mb-2">{locale === 'zh' ? '渲染预览' : 'Rendered Preview'}</span>
          <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: output }} />
        </div>
      )}
    </main>
  )
}
