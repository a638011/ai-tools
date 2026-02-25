'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

export default function ColorConverterPage() {
  const { locale, t } = useLocale()
  const [hex, setHex] = useState('#6366f1')
  const [r, setR] = useState(99); const [g, setG] = useState(102); const [b, setB] = useState(241)

  const hexToRgb = (h: string) => {
    const m = h.replace('#','').match(/.{2}/g)
    if (m) { setR(parseInt(m[0],16)); setG(parseInt(m[1],16)); setB(parseInt(m[2],16)) }
  }
  const rgbToHex = () => setHex(`#${[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('')}`)

  const labels = { zh: { hex: 'HEX颜色值', rgb: 'RGB值', preview: '颜色预览', toRgb: 'HEX→RGB', toHex: 'RGB→HEX' }, en: { hex: 'HEX Color', rgb: 'RGB Values', preview: 'Preview', toRgb: 'HEX→RGB', toHex: 'RGB→HEX' }, ja: { hex: 'HEXカラー', rgb: 'RGB値', preview: 'プレビュー', toRgb: 'HEX→RGB', toHex: 'RGB→HEX' }, ko: { hex: 'HEX 색상', rgb: 'RGB 값', preview: '미리보기', toRgb: 'HEX→RGB', toHex: 'RGB→HEX' }, es: { hex: 'Color HEX', rgb: 'Valores RGB', preview: 'Vista previa', toRgb: 'HEX→RGB', toHex: 'RGB→HEX' } }
  const l = labels[locale] || labels.zh

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🎨 {t.tools['color-converter'].name}</h1>
      <p className="text-gray-500 mb-8">{t.tools['color-converter'].desc}</p>

      <div className="w-full h-24 rounded-xl mb-6 border border-gray-200" style={{ backgroundColor: hex }} />
      <p className="text-sm text-gray-500 mb-4 text-center">{l.preview}: {hex} / rgb({r},{g},{b})</p>

      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.hex}</label>
          <div className="flex gap-2">
            <input value={hex} onChange={e => setHex(e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={() => hexToRgb(hex)} className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition">{l.toRgb}</button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">{l.rgb}</label>
          <div className="flex gap-2">
            <input type="number" min={0} max={255} value={r} onChange={e => setR(+e.target.value)} className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-sm text-center text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" placeholder="R" />
            <input type="number" min={0} max={255} value={g} onChange={e => setG(+e.target.value)} className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-sm text-center text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" placeholder="G" />
            <input type="number" min={0} max={255} value={b} onChange={e => setB(+e.target.value)} className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-sm text-center text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" placeholder="B" />
            <button onClick={rgbToHex} className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition">{l.toHex}</button>
          </div>
        </div>
      </div>
    </main>
  )
}
