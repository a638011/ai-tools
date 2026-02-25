'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { value: '数值', from: '从', to: '到', baseFontSize: '基准字号 (px)', hint: 'px/rem/em/vw/vh 在线互转' },
  en: { value: 'Value', from: 'From', to: 'To', baseFontSize: 'Base Font Size (px)', hint: 'Convert between px/rem/em/vw/vh' },
  ja: { value: '値', from: '変換元', to: '変換先', baseFontSize: '基準フォントサイズ (px)', hint: 'px/rem/em/vw/vh 相互変換' },
  ko: { value: '값', from: '변환 전', to: '변환 후', baseFontSize: '기본 글꼴 크기 (px)', hint: 'px/rem/em/vw/vh 상호 변환' },
  es: { value: 'Valor', from: 'De', to: 'A', baseFontSize: 'Tamaño base (px)', hint: 'Convertir entre px/rem/em/vw/vh' },
}

const units = ['px', 'rem', 'em', 'vw', 'vh', 'pt', '%']

function convert(value: number, from: string, to: string, base: number, vw: number, vh: number): string {
  // First convert to px
  let px = value
  if (from === 'rem' || from === 'em') px = value * base
  else if (from === 'vw') px = value * vw / 100
  else if (from === 'vh') px = value * vh / 100
  else if (from === 'pt') px = value * 1.333
  else if (from === '%') px = value * base / 100

  // Then convert from px to target
  if (to === 'px') return px.toFixed(2)
  if (to === 'rem' || to === 'em') return (px / base).toFixed(4)
  if (to === 'vw') return (px / vw * 100).toFixed(4)
  if (to === 'vh') return (px / vh * 100).toFixed(4)
  if (to === 'pt') return (px / 1.333).toFixed(2)
  if (to === '%') return (px / base * 100).toFixed(2)
  return px.toFixed(2)
}

export default function CssUnitsPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [value, setValue] = useState(16)
  const [from, setFrom] = useState('px')
  const [to, setTo] = useState('rem')
  const [base, setBase] = useState(16)

  const result = convert(value, from, to, base, 1920, 1080)

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📐 {locale === 'zh' ? 'CSS单位转换器' : locale === 'ja' ? 'CSS単位変換' : locale === 'ko' ? 'CSS 단위 변환기' : locale === 'es' ? 'Conversor CSS' : 'CSS Unit Converter'}</h1>
      <p className="text-gray-500 mb-8">{l.hint}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{l.value}</label>
            <input type="number" value={value} onChange={e => setValue(+e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 font-mono" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{l.from}</label>
            <select value={from} onChange={e => setFrom(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{l.to}</label>
            <select value={to} onChange={e => setTo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.baseFontSize}</label>
          <input type="number" value={base} onChange={e => setBase(+e.target.value)}
            className="w-32 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 font-mono" />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-500 mb-1">{value} {from} =</p>
          <p className="text-4xl font-bold text-indigo-600 font-mono">{result} <span className="text-lg">{to}</span></p>
        </div>

        {/* Quick reference table */}
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">{locale === 'zh' ? '快速参考' : 'Quick Reference'}</p>
          <div className="grid grid-cols-4 gap-2 text-xs">
            {[8, 12, 14, 16, 18, 20, 24, 32].map(px => (
              <div key={px} className="bg-gray-50 rounded-lg p-2 text-center">
                <span className="font-mono text-gray-700">{px}px</span>
                <span className="text-gray-400 mx-1">=</span>
                <span className="font-mono text-indigo-600">{(px / base).toFixed(3)}rem</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
