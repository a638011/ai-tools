'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function BorderRadiusPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [tl, setTl] = useState(16)
  const [tr, setTr] = useState(16)
  const [br, setBr] = useState(16)
  const [bl, setBl] = useState(16)
  const [linked, setLinked] = useState(true)

  const setAll = (v: number) => { setTl(v); setTr(v); setBr(v); setBl(v) }
  const radius = tl === tr && tr === br && br === bl ? `${tl}px` : `${tl}px ${tr}px ${br}px ${bl}px`
  const css = `border-radius: ${radius};`

  const presets = [
    { name: 'None', v: [0, 0, 0, 0] },
    { name: 'Small', v: [4, 4, 4, 4] },
    { name: 'Medium', v: [8, 8, 8, 8] },
    { name: 'Large', v: [16, 16, 16, 16] },
    { name: 'XL', v: [24, 24, 24, 24] },
    { name: 'Full', v: [9999, 9999, 9999, 9999] },
    { name: 'Pill', v: [9999, 9999, 9999, 9999] },
    { name: 'Blob', v: [30, 70, 70, 30] },
    { name: 'Leaf', v: [0, 50, 0, 50] },
    { name: 'Drop', v: [50, 50, 0, 50] },
    { name: 'Ticket', v: [16, 16, 0, 0] },
    { name: 'Badge', v: [4, 16, 16, 4] },
  ]

  const corners = [
    { label: '↖ TL', value: tl, set: linked ? setAll : setTl },
    { label: '↗ TR', value: tr, set: linked ? setAll : setTr },
    { label: '↘ BR', value: br, set: linked ? setAll : setBr },
    { label: '↙ BL', value: bl, set: linked ? setAll : setBl },
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">⬜ Border Radius {locale === 'zh' ? '生成器' : locale === 'ja' ? 'ジェネレーター' : locale === 'ko' ? '생성기' : locale === 'es' ? 'Generador' : 'Generator'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '可视化调节CSS圆角，实时预览' : 'Visually generate CSS border-radius'}</p>

      <div className="bg-gray-100 rounded-2xl p-12 flex items-center justify-center mb-6">
        <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg transition-all duration-200"
          style={{ borderRadius: radius }} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input type="checkbox" checked={linked} onChange={e => setLinked(e.target.checked)} className="rounded" />
          {locale === 'zh' ? '四角联动' : 'Link corners'}
        </label>
        <div className="grid grid-cols-2 gap-4">
          {corners.map(c => (
            <div key={c.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{c.label}</span>
                <span className="font-mono text-gray-700">{c.value}px</span>
              </div>
              <input type="range" min={0} max={100} value={c.value} onChange={e => c.set(+e.target.value)} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">CSS</span>
          <button onClick={() => navigator.clipboard.writeText(css)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
        </div>
        <code className="text-sm font-mono text-gray-700 block bg-gray-50 rounded-lg p-3">{css}</code>
      </div>

      <div className="mt-6">
        <span className="text-sm font-medium text-gray-700 block mb-3">{locale === 'zh' ? '预设样式' : 'Presets'}</span>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {presets.map(p => (
            <button key={p.name} onClick={() => { setTl(p.v[0]); setTr(p.v[1]); setBr(p.v[2]); setBl(p.v[3]); setLinked(false) }}
              className="bg-gray-50 rounded-xl p-3 text-center hover:bg-gray-100 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 mx-auto mb-2"
                style={{ borderRadius: `${p.v[0]}px ${p.v[1]}px ${p.v[2]}px ${p.v[3]}px` }} />
              <span className="text-xs text-gray-500">{p.name}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
