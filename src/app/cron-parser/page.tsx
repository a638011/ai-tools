'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const presetsI18n = {
  zh: [{ expr: '* * * * *', desc: '每分钟' }, { expr: '0 * * * *', desc: '每小时' }, { expr: '0 0 * * *', desc: '每天午夜' }, { expr: '0 9 * * 1-5', desc: '工作日早9点' }, { expr: '0 0 1 * *', desc: '每月1号' }, { expr: '*/5 * * * *', desc: '每5分钟' }, { expr: '0 0 * * 0', desc: '每周日午夜' }, { expr: '0 12 * * *', desc: '每天中午12点' }],
  en: [{ expr: '* * * * *', desc: 'Every minute' }, { expr: '0 * * * *', desc: 'Every hour' }, { expr: '0 0 * * *', desc: 'Daily at midnight' }, { expr: '0 9 * * 1-5', desc: 'Weekdays at 9am' }, { expr: '0 0 1 * *', desc: '1st of every month' }, { expr: '*/5 * * * *', desc: 'Every 5 minutes' }, { expr: '0 0 * * 0', desc: 'Every Sunday' }, { expr: '0 12 * * *', desc: 'Daily at noon' }],
  ja: [{ expr: '* * * * *', desc: '毎分' }, { expr: '0 * * * *', desc: '毎時' }, { expr: '0 0 * * *', desc: '毎日0時' }, { expr: '0 9 * * 1-5', desc: '平日9時' }, { expr: '0 0 1 * *', desc: '毎月1日' }, { expr: '*/5 * * * *', desc: '5分ごと' }, { expr: '0 0 * * 0', desc: '毎週日曜' }, { expr: '0 12 * * *', desc: '毎日12時' }],
  ko: [{ expr: '* * * * *', desc: '매분' }, { expr: '0 * * * *', desc: '매시' }, { expr: '0 0 * * *', desc: '매일 자정' }, { expr: '0 9 * * 1-5', desc: '평일 오전 9시' }, { expr: '0 0 1 * *', desc: '매월 1일' }, { expr: '*/5 * * * *', desc: '5분마다' }, { expr: '0 0 * * 0', desc: '매주 일요일' }, { expr: '0 12 * * *', desc: '매일 정오' }],
  es: [{ expr: '* * * * *', desc: 'Cada minuto' }, { expr: '0 * * * *', desc: 'Cada hora' }, { expr: '0 0 * * *', desc: 'Diario a medianoche' }, { expr: '0 9 * * 1-5', desc: 'Lun-Vie a las 9am' }, { expr: '0 0 1 * *', desc: '1ro de cada mes' }, { expr: '*/5 * * * *', desc: 'Cada 5 minutos' }, { expr: '0 0 * * 0', desc: 'Cada domingo' }, { expr: '0 12 * * *', desc: 'Diario al mediodía' }],
}

const fieldNames = {
  zh: ['分钟', '小时', '日', '月', '星期'],
  en: ['Minute', 'Hour', 'Day', 'Month', 'Weekday'],
  ja: ['分', '時', '日', '月', '曜日'],
  ko: ['분', '시', '일', '월', '요일'],
  es: ['Minuto', 'Hora', 'Día', 'Mes', 'Día semana'],
}

const fieldRanges = ['0-59', '0-23', '1-31', '1-12', '0-6 (Sun-Sat)']

function describeCronField(field: string, name: string, range: string): string {
  if (field === '*') return `${name}: every`
  if (field.startsWith('*/')) return `${name}: every ${field.slice(2)}`
  if (field.includes(',')) return `${name}: ${field}`
  if (field.includes('-')) return `${name}: ${field}`
  return `${name}: ${field}`
}

export default function CronParserPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const presets = presetsI18n[locale] || presetsI18n.zh
  const fields = fieldNames[locale] || fieldNames.zh
  const [expr, setExpr] = useState('0 9 * * 1-5')

  const parts = expr.trim().split(/\s+/)
  const valid = parts.length === 5

  const labelsI18n = { zh: { presets: '常用表达式', fields: '字段解析', format: '格式：分 时 日 月 周' }, en: { presets: 'Common Presets', fields: 'Field Breakdown', format: 'Format: min hour day month weekday' }, ja: { presets: 'プリセット', fields: 'フィールド解析', format: '形式: 分 時 日 月 曜日' }, ko: { presets: '프리셋', fields: '필드 분석', format: '형식: 분 시 일 월 요일' }, es: { presets: 'Presets', fields: 'Desglose', format: 'Formato: min hora día mes semana' } }
  const l = labelsI18n[locale] || labelsI18n.zh

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">⏲️ Cron {locale === 'zh' ? '表达式解析器' : locale === 'ja' ? '式パーサー' : locale === 'ko' ? '파서' : locale === 'es' ? 'Parser' : 'Expression Parser'}</h1>
      <p className="text-gray-500 mb-8">{l.format}</p>

      <input value={expr} onChange={e => setExpr(e.target.value)} placeholder="* * * * *"
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-mono text-lg text-center text-gray-700 mb-6" />

      {valid && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <span className="text-sm font-medium text-gray-700 block mb-3">{l.fields}</span>
          <div className="space-y-2">
            {parts.map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="w-16 text-gray-400">{fields[i]}</span>
                <code className="px-2 py-1 bg-blue-50 text-blue-700 rounded font-mono">{p}</code>
                <span className="text-gray-500 text-xs">({fieldRanges[i]})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <span className="text-sm font-medium text-gray-700 block mb-3">{l.presets}</span>
        <div className="grid grid-cols-2 gap-2">
          {presets.map(p => (
            <button key={p.expr} onClick={() => setExpr(p.expr)}
              className={`text-left px-4 py-3 rounded-xl border text-sm transition ${expr === p.expr ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-white hover:bg-gray-50'}`}>
              <code className="font-mono text-gray-700 block">{p.expr}</code>
              <span className="text-xs text-gray-400">{p.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
