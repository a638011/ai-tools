'use client'
import { useState } from 'react'
import Link from 'next/link'

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace('#', '').match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  if (!m) return null
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
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

export default function ColorConverterPage() {
  const [hex, setHex] = useState('#3B82F6')
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 })

  const updateFromHex = (v: string) => {
    setHex(v)
    const result = hexToRgb(v)
    if (result) setRgb({ r: result[0], g: result[1], b: result[2] })
  }

  const updateFromRgb = (key: 'r' | 'g' | 'b', val: number) => {
    const newRgb = { ...rgb, [key]: Math.min(255, Math.max(0, val)) }
    setRgb(newRgb)
    setHex(`#${[newRgb.r, newRgb.g, newRgb.b].map(c => c.toString(16).padStart(2, '0')).join('')}`.toUpperCase())
  }

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
  const cssRgb = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  const cssHsl = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🎨 颜色转换器</h1>
      <p className="text-gray-500 mb-8">HEX/RGB/HSL颜色互转 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div className="h-32 rounded-xl border-2 border-gray-200" style={{ backgroundColor: hex }} />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">HEX</label>
            <div className="flex gap-2">
              <input type="color" value={hex} onChange={e => updateFromHex(e.target.value)}
                className="w-12 h-12 rounded cursor-pointer border-0" />
              <input type="text" value={hex} onChange={e => updateFromHex(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">HSL</label>
            <input type="text" value={cssHsl} readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-lg font-mono bg-gray-50" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">RGB</label>
          <div className="grid grid-cols-3 gap-3">
            {(['r', 'g', 'b'] as const).map(c => (
              <div key={c}>
                <label className="text-xs text-gray-500 uppercase">{c}</label>
                <input type="number" min={0} max={255} value={rgb[c]}
                  onChange={e => updateFromRgb(c, parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg font-mono text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">CSS代码（点击复制）</p>
          {[hex, cssRgb, cssHsl].map(v => (
            <div key={v} onClick={() => navigator.clipboard.writeText(v)}
              className="p-3 bg-gray-50 rounded-lg font-mono text-sm cursor-pointer hover:bg-blue-50 transition">
              {v}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
