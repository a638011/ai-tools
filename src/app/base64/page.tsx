'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function Base64Page() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'encode'|'decode'>('encode')

  const convert = () => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(unescape(encodeURIComponent(input))))
      } else {
        setOutput(decodeURIComponent(escape(atob(input.trim()))))
      }
    } catch { setOutput('❌ Error') }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔐 {t.tools.base64.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.base64.desc}</p>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode('encode')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${mode === 'encode' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          {ui.encode}
        </button>
        <button onClick={() => setMode('decode')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${mode === 'decode' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          {ui.decode}
        </button>
      </div>

      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={ui.placeholder} rows={6}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none font-mono text-sm text-gray-700 mb-4" />

      <button onClick={convert} disabled={!input.trim()}
        className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition mb-4">
        {mode === 'encode' ? ui.encode : ui.decode}
      </button>

      {output && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">{ui.result}</span>
            <button onClick={() => navigator.clipboard.writeText(output)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
          </div>
          <pre className="whitespace-pre-wrap break-all text-sm text-gray-700 font-mono">{output}</pre>
        </div>
      )}
    </main>
  )
}
