'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '配色方案生成器', desc: '输入基础颜色，生成互补色、类似色、三角色等配色方案', base: '基础颜色', complementary: '互补色', analogous: '类似色', triadic: '三角色', splitComp: '分裂互补', tetradic: '四角色', copy: '📋 复制', copied: '✅ 已复制' },
  en: { title: 'Color Palette Generator', desc: 'Enter a base color to generate complementary, analogous, triadic palettes', base: 'Base Color', complementary: 'Complementary', analogous: 'Analogous', triadic: 'Triadic', splitComp: 'Split Complementary', tetradic: 'Tetradic', copy: '📋 Copy', copied: '✅ Copied' },
  ja: { title: '配色パレット生成', desc: 'ベースカラーから補色・類似色・トライアドなどを生成', base: 'ベースカラー', complementary: '補色', analogous: '類似色', triadic: 'トライアド', splitComp: 'スプリット補色', tetradic: 'テトラード', copy: '📋 コピー', copied: '✅ コピー済' },
  ko: { title: '배색 팔레트 생성기', desc: '기본 색상으로 보색, 유사색, 삼각 배색 등 생성', base: '기본 색상', complementary: '보색', analogous: '유사색', triadic: '삼각 배색', splitComp: '분할 보색', tetradic: '사각 배색', copy: '📋 복사', copied: '✅ 복사됨' },
  es: { title: 'Generador de Paletas', desc: 'Genera esquemas complementarios, análogos y triádicos desde un color base', base: 'Color Base', complementary: 'Complementario', analogous: 'Análogo', triadic: 'Triádico', splitComp: 'Complementario Dividido', tetradic: 'Tetrádico', copy: '📋 Copiar', copied: '✅ Copiado' },
}

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l * 100]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return [h * 360, s * 100, l * 100]
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360
  s /= 100; l /= 100
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => { const k = (n + h / 30) % 12; return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1) }
  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0')
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`
}

function genPalettes(hex: string) {
  const [h, s, l] = hexToHsl(hex)
  return {
    complementary: [hslToHex(h + 180, s, l)],
    analogous: [hslToHex(h - 30, s, l), hex, hslToHex(h + 30, s, l)],
    triadic: [hex, hslToHex(h + 120, s, l), hslToHex(h + 240, s, l)],
    splitComp: [hex, hslToHex(h + 150, s, l), hslToHex(h + 210, s, l)],
    tetradic: [hex, hslToHex(h + 90, s, l), hslToHex(h + 180, s, l), hslToHex(h + 270, s, l)],
  }
}

export default function ColorPalettePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [color, setColor] = useState('#3B82F6')
  const [copiedHex, setCopiedHex] = useState('')
  const palettes = genPalettes(color)

  const copyHex = (hex: string) => { navigator.clipboard.writeText(hex); setCopiedHex(hex); setTimeout(() => setCopiedHex(''), 1500) }

  const renderPalette = (label: string, colors: string[]) => (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-gray-800 mb-3">{label}</h3>
      <div className="flex gap-3 flex-wrap">
        {colors.map((c, i) => (
          <button key={i} onClick={() => copyHex(c)} className="group flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-xl shadow-sm border border-gray-200 transition group-hover:scale-110" style={{ backgroundColor: c }} />
            <span className="text-xs font-mono text-gray-600">{c.toUpperCase()}</span>
            <span className="text-xs text-indigo-500 opacity-0 group-hover:opacity-100 transition">{copiedHex === c ? u.copied : u.copy}</span>
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🎨 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex items-center gap-4 mb-6">
          <label className="text-sm font-medium text-gray-700">{u.base}:</label>
          <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-12 h-10 rounded-lg cursor-pointer border-0" />
          <input type="text" value={color.toUpperCase()} onChange={e => /^#[0-9A-Fa-f]{6}$/.test(e.target.value) && setColor(e.target.value)}
            className="w-28 border rounded-lg px-3 py-2 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
          <div className="w-20 h-10 rounded-xl shadow-sm border" style={{ backgroundColor: color }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderPalette(u.complementary, palettes.complementary)}
          {renderPalette(u.analogous, palettes.analogous)}
          {renderPalette(u.triadic, palettes.triadic)}
          {renderPalette(u.splitComp, palettes.splitComp)}
          {renderPalette(u.tetradic, palettes.tetradic)}
        </div>
      </div>
    </div>
  )
}
