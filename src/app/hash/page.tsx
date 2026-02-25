'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { input: '输入文本', inputPh: '输入要计算哈希的文本...', algos: '哈希算法', all: '全部计算' },
  en: { input: 'Input Text', inputPh: 'Enter text to hash...', algos: 'Hash Algorithms', all: 'Calculate All' },
  ja: { input: '入力テキスト', inputPh: 'ハッシュ化するテキストを入力...', algos: 'ハッシュアルゴリズム', all: 'すべて計算' },
  ko: { input: '입력 텍스트', inputPh: '해시할 텍스트 입력...', algos: '해시 알고리즘', all: '모두 계산' },
  es: { input: 'Texto de entrada', inputPh: 'Ingrese texto para hash...', algos: 'Algoritmos Hash', all: 'Calcular Todo' },
}

const algos = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'] as const

async function computeHash(algo: string, text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const buf = await crypto.subtle.digest(algo, data)
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export default function HashPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [input, setInput] = useState('')
  const [results, setResults] = useState<Record<string, string>>({})

  const hashAll = async () => {
    if (!input.trim()) return
    const r: Record<string, string> = {}
    for (const algo of algos) {
      r[algo] = await computeHash(algo, input)
    }
    // MD5 not in SubtleCrypto, compute simple version note
    r['MD5'] = '(MD5 not available in browser SubtleCrypto)'
    setResults(r)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔒 {locale === 'zh' ? 'Hash哈希生成器' : locale === 'ja' ? 'ハッシュ生成器' : locale === 'ko' ? '해시 생성기' : locale === 'es' ? 'Generador Hash' : 'Hash Generator'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? 'SHA-1/SHA-256/SHA-384/SHA-512 在线计算' : 'SHA-1/SHA-256/SHA-384/SHA-512 online calculator'}</p>

      <textarea value={input} onChange={e => setInput(e.target.value)} rows={4} placeholder={l.inputPh}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm text-gray-700 mb-4" />
      <button onClick={hashAll} disabled={!input.trim()}
        className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition mb-6">{l.all}</button>

      {Object.keys(results).length > 0 && (
        <div className="space-y-3">
          {algos.map(algo => (
            <div key={algo} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700">{algo}</span>
                <button onClick={() => navigator.clipboard.writeText(results[algo] || '')} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
              </div>
              <p className="font-mono text-xs text-gray-600 break-all">{results[algo]}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
