'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

function renderMd(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>')
    .replace(/^\- (.+)$/gm, '<li class="ml-4">• $1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/\n/g, '<br/>')
}

export default function MarkdownPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const labels = { zh: { editor: '编辑区', preview: '预览区' }, en: { editor: 'Editor', preview: 'Preview' }, ja: { editor: 'エディタ', preview: 'プレビュー' }, ko: { editor: '편집기', preview: '미리보기' }, es: { editor: 'Editor', preview: 'Vista previa' } }
  const l = labels[locale] || labels.zh

  const [md, setMd] = useState('# Hello\n\n**Bold** and *italic*\n\n- Item 1\n- Item 2\n\n`code here`')

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📄 {t.tools.markdown.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.markdown.desc}</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-700 mb-2 block">{l.editor}</span>
          <textarea value={md} onChange={e => setMd(e.target.value)} rows={18}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-700 mb-2 block">{l.preview}</span>
          <div className="prose prose-sm max-w-none px-3 py-2 min-h-[300px] text-gray-700" dangerouslySetInnerHTML={{ __html: renderMd(md) }} />
        </div>
      </div>
    </main>
  )
}
