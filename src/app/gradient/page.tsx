'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function GradientGenPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [color1, setColor1] = useState('#667eea')
  const [color2, setColor2] = useState('#764ba2')
  const [angle, setAngle] = useState(135)
  const [type, setType] = useState<'linear' | 'radial'>('linear')

  const gradient = type === 'linear'
    ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
    : `radial-gradient(circle, ${color1}, ${color2})`
  const css = `background: ${gradient};`

  const presets = [
    ['#667eea', '#764ba2'], ['#f093fb', '#f5576c'], ['#4facfe', '#00f2fe'],
    ['#43e97b', '#38f9d7'], ['#fa709a', '#fee140'], ['#a18cd1', '#fbc2eb'],
    ['#ffecd2', '#fcb69f'], ['#ff9a9e', '#fecfef'], ['#667db6', '#0082c8'],
    ['#00c6fb', '#005bea'], ['#f83600', '#f9d423'], ['#e8198b', '#c7eafd'],
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🎨 CSS {locale === 'zh' ? '渐变生成器' : locale === 'ja' ? 'グラデーション生成' : locale === 'ko' ? '그라디언트 생성기' : locale === 'es' ? 'Generador de Gradiente' : 'Gradient Generator'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '可视化生成CSS渐变代码，支持线性和径向渐变' : 'Generate CSS gradient code visually'}</p>

      <div className="rounded-2xl h-48 mb-6 shadow-lg" style={{ background: gradient }} />

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="flex gap-3">
          <button onClick={() => setType('linear')} className={`px-4 py-2 rounded-lg text-sm transition ${type === 'linear' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}>Linear</button>
          <button onClick={() => setType('radial')} className={`px-4 py-2 rounded-lg text-sm transition ${type === 'radial' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}>Radial</button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
            <input value={color1} onChange={e => setColor1(e.target.value)} className="w-24 px-2 py-1 border border-gray-200 rounded text-sm font-mono text-gray-700" />
          </div>
          <div className="flex items-center gap-2">
            <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
            <input value={color2} onChange={e => setColor2(e.target.value)} className="w-24 px-2 py-1 border border-gray-200 rounded text-sm font-mono text-gray-700" />
          </div>
        </div>
        {type === 'linear' && (
          <div>
            <label className="text-sm text-gray-500">{locale === 'zh' ? '角度' : 'Angle'}: {angle}°</label>
            <input type="range" min={0} max={360} value={angle} onChange={e => setAngle(+e.target.value)} className="w-full" />
          </div>
        )}
      </div>

      <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">CSS</span>
          <button onClick={() => navigator.clipboard.writeText(css)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
        </div>
        <code className="text-sm font-mono text-gray-700 block bg-gray-50 rounded-lg p-3">{css}</code>
      </div>

      <div className="mt-6">
        <span className="text-sm font-medium text-gray-700 block mb-3">{locale === 'zh' ? '预设渐变' : 'Presets'}</span>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {presets.map(([c1, c2], i) => (
            <button key={i} onClick={() => { setColor1(c1); setColor2(c2) }}
              className="h-12 rounded-xl shadow-sm hover:scale-105 transition"
              style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} />
          ))}
        </div>
      </div>
    </main>
  )
}
