'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const bases = [
  { name: 'Decimal', base: 10, prefix: '' },
  { name: 'Hexadecimal', base: 16, prefix: '0x' },
  { name: 'Binary', base: 2, prefix: '0b' },
  { name: 'Octal', base: 8, prefix: '0o' },
]

const labelsI18n = {
  zh: { input: '输入数值', from: '输入进制', hint: '十进制/十六进制/二进制/八进制互转', names: ['十进制', '十六进制', '二进制', '八进制'] },
  en: { input: 'Input Value', from: 'Input Base', hint: 'Convert between Dec/Hex/Bin/Oct', names: ['Decimal', 'Hexadecimal', 'Binary', 'Octal'] },
  ja: { input: '入力値', from: '入力基数', hint: '10/16/2/8進数の相互変換', names: ['10進数', '16進数', '2進数', '8進数'] },
  ko: { input: '입력 값', from: '입력 진법', hint: '10/16/2/8진법 상호 변환', names: ['10진수', '16진수', '2진수', '8진수'] },
  es: { input: 'Valor', from: 'Base de entrada', hint: 'Convertir entre Dec/Hex/Bin/Oct', names: ['Decimal', 'Hexadecimal', 'Binario', 'Octal'] },
}

export default function NumberBasePage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [input, setInput] = useState('255')
  const [fromBase, setFromBase] = useState(10)

  let parsed = NaN
  try { parsed = parseInt(input.replace(/^0[xXbBoO]/, ''), fromBase) } catch {}

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔢 {locale === 'zh' ? '进制转换器' : locale === 'ja' ? '基数変換器' : locale === 'ko' ? '진법 변환기' : locale === 'es' ? 'Conversor de Base' : 'Number Base Converter'}</h1>
      <p className="text-gray-500 mb-8">{l.hint}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.input}</label>
          <input value={input} onChange={e => setInput(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.from}</label>
          <div className="flex gap-2">
            {bases.map((b, i) => (
              <button key={b.base} onClick={() => setFromBase(b.base)}
                className={`px-4 py-2 rounded-lg text-sm transition ${fromBase === b.base ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {l.names[i]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!isNaN(parsed) && (
        <div className="mt-6 space-y-3">
          {bases.map((b, i) => (
            <div key={b.base} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{l.names[i]}</span>
                <button onClick={() => navigator.clipboard.writeText(parsed.toString(b.base))} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
              </div>
              <p className="font-mono text-lg text-gray-800 break-all">{b.prefix}{parsed.toString(b.base).toUpperCase()}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
