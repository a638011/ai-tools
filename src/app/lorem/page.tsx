'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const labelsI18n = {
  zh: { count: '数量', unit: '单位', units: ['段落', '句子', '单词'], startWith: '以 "Lorem ipsum..." 开头', hint: '生成占位文本，用于设计和排版' },
  en: { count: 'Count', unit: 'Unit', units: ['Paragraphs', 'Sentences', 'Words'], startWith: 'Start with "Lorem ipsum..."', hint: 'Generate placeholder text for design and layout' },
  ja: { count: '数量', unit: '単位', units: ['段落', '文', '単語'], startWith: '"Lorem ipsum..." で開始', hint: 'デザインやレイアウト用のダミーテキスト生成' },
  ko: { count: '수량', unit: '단위', units: ['단락', '문장', '단어'], startWith: '"Lorem ipsum..."으로 시작', hint: '디자인과 레이아웃용 더미 텍스트 생성' },
  es: { count: 'Cantidad', unit: 'Unidad', units: ['Párrafos', 'Oraciones', 'Palabras'], startWith: 'Empezar con "Lorem ipsum..."', hint: 'Generar texto de relleno para diseño' },
}

const sentences = LOREM.split('. ').map(s => s.endsWith('.') ? s : s + '.')
const words = LOREM.split(/\s+/)

export default function LoremPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [count, setCount] = useState(3)
  const [unit, setUnit] = useState(0) // 0=paragraphs, 1=sentences, 2=words
  const [startLorem, setStartLorem] = useState(true)
  const [result, setResult] = useState('')

  const generate = () => {
    let out = ''
    if (unit === 0) {
      const paras = []
      for (let i = 0; i < count; i++) {
        const shuffled = [...sentences].sort(() => Math.random() - 0.5)
        paras.push(shuffled.slice(0, 3 + Math.floor(Math.random() * 3)).join(' '))
      }
      if (startLorem && paras.length > 0) paras[0] = LOREM
      out = paras.join('\n\n')
    } else if (unit === 1) {
      const picked = []
      for (let i = 0; i < count; i++) picked.push(sentences[i % sentences.length])
      if (startLorem) picked[0] = sentences[0]
      out = picked.join(' ')
    } else {
      const picked = []
      for (let i = 0; i < count; i++) picked.push(words[i % words.length])
      out = picked.join(' ') + '.'
    }
    setResult(out)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📜 Lorem Ipsum</h1>
      <p className="text-gray-500 mb-8">{l.hint}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{l.count}</label>
            <input type="number" min={1} max={50} value={count} onChange={e => setCount(+e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{l.unit}</label>
            <div className="flex gap-2">
              {l.units.map((u, i) => (
                <button key={u} onClick={() => setUnit(i)} className={`px-3 py-2 rounded-lg text-sm transition ${unit === i ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{u}</button>
              ))}
            </div>
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={startLorem} onChange={e => setStartLorem(e.target.checked)} className="rounded" />
          {l.startWith}
        </label>
        <button onClick={generate} className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition">{ui.generate}</button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">{ui.result}</span>
            <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
          </div>
          <div className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">{result}</div>
        </div>
      )}
    </main>
  )
}
