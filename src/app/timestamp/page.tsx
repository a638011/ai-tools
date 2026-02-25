'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function TimestampPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [ts, setTs] = useState('')
  const [date, setDate] = useState('')
  const [result, setResult] = useState('')

  const tsToDate = () => {
    const n = Number(ts)
    if (isNaN(n)) { setResult('❌ Invalid'); return }
    const d = new Date(ts.length <= 10 ? n * 1000 : n)
    setResult(d.toLocaleString() + ` (Unix: ${Math.floor(d.getTime()/1000)})`)
  }
  const dateToTs = () => {
    const d = new Date(date)
    if (isNaN(d.getTime())) { setResult('❌ Invalid'); return }
    setResult(`Unix: ${Math.floor(d.getTime()/1000)}\nms: ${d.getTime()}`)
  }
  const now = () => {
    const d = new Date()
    setResult(`${d.toLocaleString()}\nUnix: ${Math.floor(d.getTime()/1000)}\nms: ${d.getTime()}`)
  }

  const labels = { zh: { tsInput: '时间戳', dateInput: '日期时间', now: '⏱ 当前时间', tsBtn: '时间戳→日期', dateBtn: '日期→时间戳' }, en: { tsInput: 'Timestamp', dateInput: 'Date/Time', now: '⏱ Now', tsBtn: 'Timestamp→Date', dateBtn: 'Date→Timestamp' }, ja: { tsInput: 'タイムスタンプ', dateInput: '日時', now: '⏱ 現在', tsBtn: 'タイムスタンプ→日付', dateBtn: '日付→タイムスタンプ' }, ko: { tsInput: '타임스탬프', dateInput: '날짜/시간', now: '⏱ 현재', tsBtn: '타임스탬프→날짜', dateBtn: '날짜→타임스탬프' }, es: { tsInput: 'Timestamp', dateInput: 'Fecha/Hora', now: '⏱ Ahora', tsBtn: 'Timestamp→Fecha', dateBtn: 'Fecha→Timestamp' } }
  const l = labels[locale] || labels.zh

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">⏰ {t.tools.timestamp.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.timestamp.desc}</p>

      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.tsInput}</label>
          <div className="flex gap-2">
            <input value={ts} onChange={e => setTs(e.target.value)} placeholder="1708876800" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={tsToDate} className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition">{l.tsBtn}</button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.dateInput}</label>
          <div className="flex gap-2">
            <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={dateToTs} className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition">{l.dateBtn}</button>
          </div>
        </div>
        <button onClick={now} className="w-full py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 transition">{l.now}</button>
        {result && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{ui.result}</span>
              <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
            </div>
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">{result}</pre>
          </div>
        )}
      </div>
    </main>
  )
}
