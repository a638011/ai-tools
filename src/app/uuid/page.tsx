'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { count: '生成数量', version: '版本', uppercase: '大写', noDash: '去掉横线', batch: '批量生成' },
  en: { count: 'Count', version: 'Version', uppercase: 'Uppercase', noDash: 'No dashes', batch: 'Batch Generate' },
  ja: { count: '生成数', version: 'バージョン', uppercase: '大文字', noDash: 'ハイフンなし', batch: '一括生成' },
  ko: { count: '생성 수', version: '버전', uppercase: '대문자', noDash: '대시 제거', batch: '일괄 생성' },
  es: { count: 'Cantidad', version: 'Versión', uppercase: 'Mayúsculas', noDash: 'Sin guiones', batch: 'Generar lote' },
}

function uuidv4() {
  const arr = new Uint8Array(16)
  crypto.getRandomValues(arr)
  arr[6] = (arr[6] & 0x0f) | 0x40
  arr[8] = (arr[8] & 0x3f) | 0x80
  const hex = Array.from(arr, b => b.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`
}

export default function UuidPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [count, setCount] = useState(5)
  const [upper, setUpper] = useState(false)
  const [noDash, setNoDash] = useState(false)
  const [results, setResults] = useState<string[]>([])

  const generate = () => {
    const uuids = Array.from({ length: count }, () => {
      let u = uuidv4()
      if (noDash) u = u.replace(/-/g, '')
      if (upper) u = u.toUpperCase()
      return u
    })
    setResults(uuids)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🆔 UUID {locale === 'zh' ? '生成器' : locale === 'ja' ? '生成器' : locale === 'ko' ? '생성기' : locale === 'es' ? 'Generador' : 'Generator'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '在线生成UUID v4，支持批量生成' : 'Generate UUID v4 online, batch support'}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{l.count}</label>
            <input type="number" min={1} max={100} value={count} onChange={e => setCount(+e.target.value)}
              className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-700 mt-5">
            <input type="checkbox" checked={upper} onChange={e => setUpper(e.target.checked)} className="rounded" />{l.uppercase}
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 mt-5">
            <input type="checkbox" checked={noDash} onChange={e => setNoDash(e.target.checked)} className="rounded" />{l.noDash}
          </label>
        </div>
        <button onClick={generate} className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition">{ui.generate}</button>
      </div>

      {results.length > 0 && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">{ui.result} ({results.length})</span>
            <button onClick={() => navigator.clipboard.writeText(results.join('\n'))} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
          </div>
          <div className="space-y-1">
            {results.map((u, i) => (
              <div key={i} className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 rounded">
                <code className="text-sm font-mono text-gray-700">{u}</code>
                <button onClick={() => navigator.clipboard.writeText(u)} className="text-xs text-gray-400 hover:text-blue-500">📋</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
