'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function BoxShadowPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [x, setX] = useState(4)
  const [y, setY] = useState(4)
  const [blur, setBlur] = useState(10)
  const [spread, setSpread] = useState(0)
  const [color, setColor] = useState('#00000040')
  const [inset, setInset] = useState(false)

  const shadow = `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`
  const css = `box-shadow: ${shadow};`

  const presets = [
    { name: 'Subtle', v: '0 1px 3px 0 #0000001a' },
    { name: 'Medium', v: '0 4px 6px -1px #0000001a' },
    { name: 'Large', v: '0 10px 15px -3px #0000001a' },
    { name: 'XL', v: '0 20px 25px -5px #0000001a' },
    { name: '2XL', v: '0 25px 50px -12px #00000040' },
    { name: 'Inner', v: 'inset 0 2px 4px 0 #0000000d' },
    { name: 'Colored', v: '0 4px 14px 0 #667eea66' },
    { name: 'Sharp', v: '4px 4px 0 0 #000000' },
  ]

  const sliders = [
    { label: 'X', value: x, set: setX, min: -50, max: 50 },
    { label: 'Y', value: y, set: setY, min: -50, max: 50 },
    { label: locale === 'zh' ? '模糊' : 'Blur', value: blur, set: setBlur, min: 0, max: 100 },
    { label: locale === 'zh' ? '扩展' : 'Spread', value: spread, set: setSpread, min: -50, max: 50 },
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔲 Box Shadow {locale === 'zh' ? '生成器' : locale === 'ja' ? 'ジェネレーター' : locale === 'ko' ? '생성기' : locale === 'es' ? 'Generador' : 'Generator'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '可视化调节CSS box-shadow，实时预览效果' : 'Visually generate CSS box-shadow with live preview'}</p>

      <div className="bg-gray-100 rounded-2xl p-12 flex items-center justify-center mb-6">
        <div className="w-48 h-48 bg-white rounded-2xl" style={{ boxShadow: shadow }} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        {sliders.map(s => (
          <div key={s.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">{s.label}</span>
              <span className="font-mono text-gray-700">{s.value}px</span>
            </div>
            <input type="range" min={s.min} max={s.max} value={s.value} onChange={e => s.set(+e.target.value)} className="w-full" />
          </div>
        ))}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input type="color" value={color.slice(0, 7)} onChange={e => setColor(e.target.value + '40')} className="w-10 h-10 rounded cursor-pointer" />
            <input value={color} onChange={e => setColor(e.target.value)} className="w-28 px-2 py-1 border border-gray-200 rounded text-sm font-mono text-gray-700" />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} className="rounded" />
            Inset
          </label>
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
        <div className="grid grid-cols-4 gap-3">
          {presets.map(p => (
            <button key={p.name} onClick={() => {
              const parts = p.v.replace('inset ', '').split(' ')
              const isInset = p.v.startsWith('inset')
              const offset = isInset ? 0 : 0
              setX(parseInt(parts[0])); setY(parseInt(parts[1])); setBlur(parseInt(parts[2])); setSpread(parseInt(parts[3])); setColor(parts[4]); setInset(isInset)
            }} className="bg-gray-50 rounded-xl p-3 text-center hover:bg-gray-100 transition">
              <div className="w-10 h-10 bg-white rounded-lg mx-auto mb-2" style={{ boxShadow: p.v }} />
              <span className="text-xs text-gray-500">{p.name}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
