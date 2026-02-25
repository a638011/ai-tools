'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

function toWords(s: string): string[] {
  return s.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[_\-./]+/g, ' ').trim().split(/\s+/).filter(Boolean)
}
const converters = [
  { id: 'camel', name: 'camelCase', fn: (w: string[]) => w.map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join('') },
  { id: 'pascal', name: 'PascalCase', fn: (w: string[]) => w.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join('') },
  { id: 'snake', name: 'snake_case', fn: (w: string[]) => w.map(s => s.toLowerCase()).join('_') },
  { id: 'kebab', name: 'kebab-case', fn: (w: string[]) => w.map(s => s.toLowerCase()).join('-') },
  { id: 'constant', name: 'CONSTANT_CASE', fn: (w: string[]) => w.map(s => s.toUpperCase()).join('_') },
  { id: 'dot', name: 'dot.case', fn: (w: string[]) => w.map(s => s.toLowerCase()).join('.') },
  { id: 'path', name: 'path/case', fn: (w: string[]) => w.map(s => s.toLowerCase()).join('/') },
  { id: 'title', name: 'Title Case', fn: (w: string[]) => w.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ') },
]

export default function StringCasePage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [input, setInput] = useState('')

  const words = toWords(input)

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔤 {locale === 'zh' ? '字符串格式转换' : locale === 'ja' ? '文字列ケース変換' : locale === 'ko' ? '문자열 케이스 변환' : locale === 'es' ? 'Conversor de Caso' : 'String Case Converter'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? 'camelCase/snake_case/kebab-case/PascalCase 一键互转' : 'Convert between camelCase, snake_case, kebab-case, PascalCase'}</p>

      <textarea value={input} onChange={e => setInput(e.target.value)} rows={3}
        placeholder={locale === 'zh' ? '输入变量名或文本，如 hello world 或 helloWorld' : 'Enter text, e.g. hello world or helloWorld'}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm font-mono text-gray-700 mb-6" />

      {input.trim() && (
        <div className="space-y-3">
          {converters.map(c => (
            <div key={c.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-400 block">{c.name}</span>
                <code className="text-sm font-mono text-gray-800">{c.fn(words)}</code>
              </div>
              <button onClick={() => navigator.clipboard.writeText(c.fn(words))} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
