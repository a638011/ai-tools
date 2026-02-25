'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function TimestampPage() {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000))
  const [tsInput, setTsInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [tsResult, setTsResult] = useState('')
  const [dateResult, setDateResult] = useState('')

  useEffect(() => {
    const timer = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000)
    return () => clearInterval(timer)
  }, [])

  const tsToDate = () => {
    try {
      const ts = parseInt(tsInput.trim())
      const ms = ts > 1e12 ? ts : ts * 1000
      const d = new Date(ms)
      setTsResult(
        `本地时间：${d.toLocaleString('zh-CN')}\nUTC时间：${d.toUTCString()}\nISO格式：${d.toISOString()}`
      )
    } catch { setTsResult('❌ 无效的时间戳') }
  }

  const dateToTs = () => {
    try {
      const d = new Date(dateInput.trim())
      if (isNaN(d.getTime())) throw new Error()
      setDateResult(
        `秒级时间戳：${Math.floor(d.getTime() / 1000)}\n毫秒时间戳：${d.getTime()}`
      )
    } catch { setDateResult('❌ 无效的日期格式') }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6"><Link href="/" className="text-sm text-blue-500 hover:underline">← Back</Link><LangSwitcher /></div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">⏰ 时间戳转换</h1>
      <p className="text-gray-500 mb-8">Unix时间戳与日期互转 · 免费使用</p>

      <div className="bg-blue-50 rounded-xl p-4 mb-6 text-center">
        <p className="text-sm text-gray-500">当前时间戳（秒）</p>
        <p className="text-3xl font-bold text-blue-600 font-mono">{now}</p>
        <p className="text-sm text-gray-500 mt-1">{new Date(now * 1000).toLocaleString('zh-CN')}</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-medium text-gray-900">时间戳 → 日期</h2>
          <div className="flex gap-2">
            <input type="text" value={tsInput} onChange={e => setTsInput(e.target.value)}
              placeholder="输入时间戳，如 1672531200"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-mono" />
            <button onClick={tsToDate} disabled={!tsInput.trim()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 transition">
              转换
            </button>
          </div>
          {tsResult && <div className="p-3 bg-gray-50 rounded-lg text-sm font-mono whitespace-pre-wrap">{tsResult}</div>}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-medium text-gray-900">日期 → 时间戳</h2>
          <div className="flex gap-2">
            <input type="text" value={dateInput} onChange={e => setDateInput(e.target.value)}
              placeholder="输入日期，如 2026-02-25 12:00:00"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-mono" />
            <button onClick={dateToTs} disabled={!dateInput.trim()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 transition">
              转换
            </button>
          </div>
          {dateResult && <div className="p-3 bg-gray-50 rounded-lg text-sm font-mono whitespace-pre-wrap">{dateResult}</div>}
        </div>
      </div>
    </main>
  )
}
