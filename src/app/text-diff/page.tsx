'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function TextDiffPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [textA, setTextA] = useState('')
  const [textB, setTextB] = useState('')
  const [diff, setDiff] = useState<{type:string;line:string}[]>([])

  const labels = { zh: { original: '原始文本', modified: '修改后文本', added: '新增', removed: '删除', same: '相同' }, en: { original: 'Original', modified: 'Modified', added: 'Added', removed: 'Removed', same: 'Same' }, ja: { original: '元のテキスト', modified: '変更後', added: '追加', removed: '削除', same: '同じ' }, ko: { original: '원본', modified: '수정본', added: '추가', removed: '삭제', same: '동일' }, es: { original: 'Original', modified: 'Modificado', added: 'Añadido', removed: 'Eliminado', same: 'Igual' } }
  const l = labels[locale] || labels.zh

  const compare = () => {
    const a = textA.split('\n'), b = textB.split('\n')
    const result: {type:string;line:string}[] = []
    const max = Math.max(a.length, b.length)
    for (let i = 0; i < max; i++) {
      if (i >= a.length) result.push({ type: 'add', line: b[i] })
      else if (i >= b.length) result.push({ type: 'del', line: a[i] })
      else if (a[i] === b[i]) result.push({ type: 'same', line: a[i] })
      else { result.push({ type: 'del', line: a[i] }); result.push({ type: 'add', line: b[i] }) }
    }
    setDiff(result)
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📋 {t.tools['text-diff'].name}</h1>
      <p className="text-gray-500 mb-8">{t.tools['text-diff'].desc}</p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.original}</label>
          <textarea value={textA} onChange={e => setTextA(e.target.value)} rows={10} placeholder={ui.placeholder}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-mono text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.modified}</label>
          <textarea value={textB} onChange={e => setTextB(e.target.value)} rows={10} placeholder={ui.placeholder}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-mono text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
      </div>
      <button onClick={compare} disabled={!textA.trim() && !textB.trim()}
        className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition mb-4">{ui.compare}</button>

      {diff.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex gap-4 mb-3 text-xs">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-100 border border-green-300 rounded" /> {l.added}</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-100 border border-red-300 rounded" /> {l.removed}</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-50 border border-gray-200 rounded" /> {l.same}</span>
          </div>
          <div className="font-mono text-sm space-y-0.5">
            {diff.map((d, i) => (
              <div key={i} className={`px-2 py-0.5 rounded ${d.type === 'add' ? 'bg-green-50 text-green-700' : d.type === 'del' ? 'bg-red-50 text-red-700' : 'text-gray-600'}`}>
                <span className="mr-2">{d.type === 'add' ? '+' : d.type === 'del' ? '-' : ' '}</span>{d.line}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
