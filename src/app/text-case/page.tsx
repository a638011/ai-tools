'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const transformsI18n = {
  zh: ['全部大写', '全部小写', '首字母大写', '句首大写', '大小写互换', '交替大小写'],
  en: ['UPPERCASE', 'lowercase', 'Title Case', 'Sentence case', 'tOGGLE cASE', 'aLtErNaTe'],
  ja: ['大文字', '小文字', 'タイトルケース', '文頭大文字', '大小文字反転', '交互大小文字'],
  ko: ['대문자', '소문자', '제목 형식', '문장 형식', '대소문자 전환', '교대 대소문자'],
  es: ['MAYÚSCULAS', 'minúsculas', 'Título', 'Oración', 'iNVERTIR', 'aLtErNaR'],
}

const fns = [
  (s: string) => s.toUpperCase(),
  (s: string) => s.toLowerCase(),
  (s: string) => s.replace(/\b\w/g, c => c.toUpperCase()),
  (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(),
  (s: string) => s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''),
  (s: string) => s.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(''),
]

export default function TextCasePage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const labels = transformsI18n[locale] || transformsI18n.zh
  const [input, setInput] = useState('')

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔠 {locale === 'zh' ? '文本大小写转换' : locale === 'ja' ? 'テキスト大小文字変換' : locale === 'ko' ? '텍스트 대소문자 변환' : locale === 'es' ? 'Conversor de Mayúsculas' : 'Text Case Converter'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '大写/小写/首字母大写/句首大写 一键转换' : 'Convert text between UPPER, lower, Title, Sentence case'}</p>

      <textarea value={input} onChange={e => setInput(e.target.value)} rows={4} placeholder={ui.placeholder}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm text-gray-700 mb-6" />

      {input.trim() && (
        <div className="space-y-3">
          {labels.map((label, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between items-center">
              <div className="flex-1 mr-4">
                <span className="text-xs text-gray-400 block mb-1">{label}</span>
                <p className="text-sm text-gray-800">{fns[i](input)}</p>
              </div>
              <button onClick={() => navigator.clipboard.writeText(fns[i](input))} className="text-xs text-blue-500 hover:underline shrink-0">{ui.copy}</button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
