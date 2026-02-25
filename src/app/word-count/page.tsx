'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

export default function WordCountPage() {
  const { locale, t } = useLocale()
  const [text, setText] = useState('')

  const labels = { zh: { chars: '字符数', charsNoSpace: '不含空格', words: '单词数', lines: '行数', cn: '中文字数', en: '英文单词' }, en: { chars: 'Characters', charsNoSpace: 'No spaces', words: 'Words', lines: 'Lines', cn: 'Chinese chars', en: 'English words' }, ja: { chars: '文字数', charsNoSpace: 'スペースなし', words: '単語数', lines: '行数', cn: '中国語文字', en: '英単語' }, ko: { chars: '문자 수', charsNoSpace: '공백 제외', words: '단어 수', lines: '줄 수', cn: '중국어 글자', en: '영어 단어' }, es: { chars: 'Caracteres', charsNoSpace: 'Sin espacios', words: 'Palabras', lines: 'Líneas', cn: 'Caracteres chinos', en: 'Palabras inglesas' } }
  const l = labels[locale] || labels.zh

  const chars = text.length
  const charsNoSpace = text.replace(/\s/g, '').length
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const lines = text ? text.split('\n').length : 0
  const cn = (text.match(/[\u4e00-\u9fff]/g) || []).length
  const en = (text.match(/[a-zA-Z]+/g) || []).length

  const stats = [
    { v: chars, l: l.chars }, { v: charsNoSpace, l: l.charsNoSpace },
    { v: words, l: l.words }, { v: lines, l: l.lines },
    { v: cn, l: l.cn }, { v: en, l: l.en },
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📝 {t.tools['word-count'].name}</h1>
      <p className="text-gray-500 mb-8">{t.tools['word-count'].desc}</p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map(s => (
          <div key={s.l} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{s.v}</div>
            <div className="text-xs text-gray-400">{s.l}</div>
          </div>
        ))}
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} rows={12}
        placeholder={locale === 'zh' ? '在此输入或粘贴文本...' : locale === 'ja' ? 'テキストを入力...' : locale === 'ko' ? '텍스트를 입력...' : locale === 'es' ? 'Ingrese texto...' : 'Type or paste text...'}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-sm text-gray-700" />
    </main>
  )
}
