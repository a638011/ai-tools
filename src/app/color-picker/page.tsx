'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '取色器', desc: '选择颜色并获取HEX/RGB/HSL值', hex: 'HEX', rgb: 'RGB', hsl: 'HSL', copy: '📋 复制', copied: '✅ 已复制', inputHex: '输入HEX值跳转', preview: '颜色预览' },
  en: { title: 'Color Picker', desc: 'Pick a color and get HEX/RGB/HSL values', hex: 'HEX', rgb: 'RGB', hsl: 'HSL', copy: '📋 Copy', copied: '✅ Copied', inputHex: 'Enter HEX to jump', preview: 'Color Preview' },
  ja: { title: 'カラーピッカー', desc: '色を選択してHEX/RGB/HSL値を取得', hex: 'HEX', rgb: 'RGB', hsl: 'HSL', copy: '📋 コピー', copied: '✅ コピー済', inputHex: 'HEX値を入力', preview: 'カラープレビュー' },
  ko: { title: '색상 선택기', desc: '색상을 선택하고 HEX/RGB/HSL 값을 확인', hex: 'HEX', rgb: 'RGB', hsl: 'HSL', copy: '📋 복사', copied: '✅ 복사됨', inputHex: 'HEX 값 입력', preview: '색상 미리보기' },
  es: { title: 'Selector de Color', desc: 'Selecciona un color y obtén valores HEX/RGB/HSL', hex: 'HEX', rgb: 'RGB', hsl: 'HSL', copy: '📋 Copiar', copied: '✅ Copiado', inputHex: 'Ingresa HEX', preview: 'Vista previa' },
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return [r, g, b]
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, Math.round(l * 100)]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

export default function ColorPickerPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [color, setColor] = useState('#6366f1')
  const [hexInput, setHexInput] = useState('#6366f1')
  const [copiedField, setCopiedField] = useState('')

  const [r, g, b] = hexToRgb(color)
  const [h, s, l] = rgbToHsl(r, g, b)
  const rgbStr = `rgb(${r}, ${g}, ${b})`
  const hslStr = `hsl(${h}, ${s}%, ${l}%)`

  const handleHexInput = (val: string) => {
    setHexInput(val)
    if (/^#[0-9a-fA-F]{6}$/.test(val)) setColor(val)
  }

  const copyVal = (val: string, field: string) => {
    navigator.clipboard.writeText(val)
    setCopiedField(field)
    setTimeout(() => setCopiedField(''), 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🎨 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center gap-4">
              <input type="color" value={color} onChange={e => { setColor(e.target.value); setHexInput(e.target.value) }}
                className="w-48 h-48 cursor-pointer rounded-xl border-0 p-0" style={{ background: 'none' }} />
              <div className="w-48 h-24 rounded-xl border-2 border-gray-200" style={{ backgroundColor: color }} />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600 mb-1 block">{u.inputHex}</label>
                <input value={hexInput} onChange={e => handleHexInput(e.target.value)} placeholder="#6366f1"
                  className="w-full border rounded-xl px-4 py-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
              </div>
              {[
                { label: u.hex, value: color.toUpperCase(), key: 'hex' },
                { label: u.rgb, value: rgbStr, key: 'rgb' },
                { label: u.hsl, value: hslStr, key: 'hsl' },
              ].map(item => (
                <div key={item.key} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                  <div>
                    <span className="text-xs text-gray-400 block">{item.label}</span>
                    <span className="font-mono text-sm">{item.value}</span>
                  </div>
                  <button onClick={() => copyVal(item.value, item.key)}
                    className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">
                    {copiedField === item.key ? u.copied : u.copy}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
