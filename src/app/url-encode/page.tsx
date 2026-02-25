'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function UrlEncodePage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const encode = () => { try { setOutput(encodeURIComponent(input)) } catch { setOutput('❌ Error') } }
  const decode = () => { try { setOutput(decodeURIComponent(input)) } catch { setOutput('❌ Error') } }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔗 {t.tools['url-encode'].name}</h1>
      <p className="text-gray-500 mb-8">{t.tools['url-encode'].desc}</p>

      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={ui.placeholder} rows={5}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none font-mono text-sm text-gray-700 mb-4" />
      <div className="flex gap-3 mb-4">
        <button onClick={encode} disabled={!input.trim()} className="flex-1 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{ui.encode}</button>
        <button onClick={decode} disabled={!input.trim()} className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{ui.decode}</button>
      </div>
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
