'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

export default function RegexPage() {
  const { locale, t } = useLocale()
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState('g')
  const [text, setText] = useState('')

  const labels = { zh: { pattern: '正则表达式', flags: '标志', testText: '测试文本', matches: '匹配结果', noMatch: '无匹配' }, en: { pattern: 'Regular Expression', flags: 'Flags', testText: 'Test Text', matches: 'Matches', noMatch: 'No match' }, ja: { pattern: '正規表現', flags: 'フラグ', testText: 'テスト文字列', matches: 'マッチ結果', noMatch: 'マッチなし' }, ko: { pattern: '정규식', flags: '플래그', testText: '테스트 텍스트', matches: '매칭 결과', noMatch: '매칭 없음' }, es: { pattern: 'Expresión Regular', flags: 'Flags', testText: 'Texto de prueba', matches: 'Coincidencias', noMatch: 'Sin coincidencias' } }
  const l = labels[locale] || labels.zh

  let matches: string[] = []
  try {
    if (pattern && text) {
      const re = new RegExp(pattern, flags)
      matches = text.match(re) || []
    }
  } catch {}

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔍 {t.tools.regex.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.regex.desc}</p>

      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.pattern}</label>
          <div className="flex gap-2">
            <input value={pattern} onChange={e => setPattern(e.target.value)} placeholder="[a-z]+" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
            <input value={flags} onChange={e => setFlags(e.target.value)} placeholder="g" className="w-16 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.testText}</label>
          <textarea value={text} onChange={e => setText(e.target.value)} rows={5} placeholder={l.testText}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-700 block mb-2">{l.matches} ({matches.length})</span>
          {matches.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {matches.map((m, i) => <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-mono">{m}</span>)}
            </div>
          ) : <p className="text-sm text-gray-400">{l.noMatch}</p>}
        </div>
      </div>
    </main>
  )
}
