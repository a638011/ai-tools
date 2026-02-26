'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '宽高比计算器', desc: '输入宽度和比例，自动计算高度。支持常见比例', width: '宽度', height: '高度', ratio: '比例', calculate: '计算', result: '计算结果', common: '常见比例', custom: '自定义比例', ratioW: '比例宽', ratioH: '比例高', calcFromWidth: '由宽度计算高度', calcFromHeight: '由高度计算宽度', px: '像素' },
  en: { title: 'Aspect Ratio Calculator', desc: 'Enter width and ratio to auto-calculate height. Common ratios supported', width: 'Width', height: 'Height', ratio: 'Ratio', calculate: 'Calculate', result: 'Result', common: 'Common Ratios', custom: 'Custom Ratio', ratioW: 'Ratio W', ratioH: 'Ratio H', calcFromWidth: 'Height from Width', calcFromHeight: 'Width from Height', px: 'px' },
  ja: { title: 'アスペクト比計算機', desc: '幅と比率を入力して高さを自動計算。一般的な比率に対応', width: '幅', height: '高さ', ratio: '比率', calculate: '計算', result: '計算結果', common: '一般的な比率', custom: 'カスタム比率', ratioW: '比率 幅', ratioH: '比率 高', calcFromWidth: '幅から高さを計算', calcFromHeight: '高さから幅を計算', px: 'px' },
  ko: { title: '화면비 계산기', desc: '너비와 비율을 입력하면 높이를 자동 계산. 일반 비율 지원', width: '너비', height: '높이', ratio: '비율', calculate: '계산', result: '계산 결과', common: '일반 비율', custom: '사용자 정의 비율', ratioW: '비율 W', ratioH: '비율 H', calcFromWidth: '너비로 높이 계산', calcFromHeight: '높이로 너비 계산', px: 'px' },
  es: { title: 'Calculadora de Relación de Aspecto', desc: 'Ingresa ancho y proporción para calcular la altura automáticamente', width: 'Ancho', height: 'Alto', ratio: 'Proporción', calculate: 'Calcular', result: 'Resultado', common: 'Proporciones Comunes', custom: 'Proporción Personalizada', ratioW: 'Proporción W', ratioH: 'Proporción H', calcFromWidth: 'Alto desde Ancho', calcFromHeight: 'Ancho desde Alto', px: 'px' },
}

const commonRatios = [
  { label: '16:9', w: 16, h: 9 },
  { label: '4:3', w: 4, h: 3 },
  { label: '1:1', w: 1, h: 1 },
  { label: '21:9', w: 21, h: 9 },
  { label: '3:2', w: 3, h: 2 },
  { label: '9:16', w: 9, h: 16 },
  { label: '2:3', w: 2, h: 3 },
  { label: '5:4', w: 5, h: 4 },
  { label: '3:4', w: 3, h: 4 },
  { label: '1:2', w: 1, h: 2 },
]

export default function AspectRatioPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [ratioW, setRatioW] = useState(16)
  const [ratioH, setRatioH] = useState(9)

  const calcHeight = () => setHeight(Math.round(width * ratioH / ratioW))
  const calcWidth = () => setWidth(Math.round(height * ratioW / ratioH))
  const selectRatio = (w: number, h: number) => {
    setRatioW(w); setRatioH(h)
    setHeight(Math.round(width * h / w))
  }

  const previewW = 240
  const previewH = Math.round(previewW * ratioH / ratioW)
  const clampedH = Math.min(previewH, 300)
  const clampedW = previewH > 300 ? Math.round(300 * ratioW / ratioH) : previewW

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.common}</h3>
            <div className="grid grid-cols-2 gap-2">
              {commonRatios.map(r => (
                <button key={r.label} onClick={() => selectRatio(r.w, r.h)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition ${ratioW === r.w && ratioH === r.h ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.custom}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 w-16">{u.ratioW}:</label>
                <input type="number" min={1} value={ratioW} onChange={e => setRatioW(Math.max(1, +e.target.value))} className="flex-1 border rounded-lg px-3 py-2 text-sm text-center" />
                <span className="text-gray-400 font-bold">:</span>
                <input type="number" min={1} value={ratioH} onChange={e => setRatioH(Math.max(1, +e.target.value))} className="flex-1 border rounded-lg px-3 py-2 text-sm text-center" />
              </div>
              <hr className="my-2" />
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 w-16">{u.width}:</label>
                <input type="number" min={1} value={width} onChange={e => setWidth(+e.target.value)} className="flex-1 border rounded-lg px-3 py-2 text-sm text-center" />
                <span className="text-xs text-gray-400">{u.px}</span>
              </div>
              <button onClick={calcHeight} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-sm font-medium">{u.calcFromWidth}</button>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 w-16">{u.height}:</label>
                <input type="number" min={1} value={height} onChange={e => setHeight(+e.target.value)} className="flex-1 border rounded-lg px-3 py-2 text-sm text-center" />
                <span className="text-xs text-gray-400">{u.px}</span>
              </div>
              <button onClick={calcWidth} className="w-full px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition text-sm font-medium">{u.calcFromHeight}</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.result}</h3>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-indigo-600">{width} × {height}</div>
              <div className="text-sm text-gray-500 mt-1">{ratioW}:{ratioH}</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="border-2 border-dashed border-indigo-300 rounded-lg flex items-center justify-center bg-indigo-50 transition-all"
                style={{ width: clampedW, height: clampedH }}>
                <span className="text-xs text-indigo-400 font-mono">{ratioW}:{ratioH}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
