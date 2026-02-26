'use client'
import { useState, useRef, useCallback } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '图片滤镜', desc: '上传图片，应用CSS滤镜效果，预览并下载', upload: '📁 上传图片', download: '💾 下载', reset: '重置', clear: '清空', preview: '预览', filters: '滤镜调整', brightness: '亮度', contrast: '对比度', saturate: '饱和度', blur: '模糊', grayscale: '灰度', sepia: '复古', hueRotate: '色相旋转', invert: '反色', opacity: '透明度', dragHint: '拖拽或点击上传图片', presets: '预设滤镜', presetNone: '原图', presetVintage: '复古', presetBW: '黑白', presetWarm: '暖色', presetCool: '冷色', presetDramatic: '戏剧', presetFaded: '褪色', presetVivid: '鲜艳' },
  en: { title: 'Image Filter', desc: 'Upload an image, apply CSS filters, preview and download', upload: '📁 Upload Image', download: '💾 Download', reset: 'Reset', clear: 'Clear', preview: 'Preview', filters: 'Filter Adjustments', brightness: 'Brightness', contrast: 'Contrast', saturate: 'Saturation', blur: 'Blur', grayscale: 'Grayscale', sepia: 'Sepia', hueRotate: 'Hue Rotate', invert: 'Invert', opacity: 'Opacity', dragHint: 'Drag & drop or click to upload', presets: 'Filter Presets', presetNone: 'Original', presetVintage: 'Vintage', presetBW: 'B&W', presetWarm: 'Warm', presetCool: 'Cool', presetDramatic: 'Dramatic', presetFaded: 'Faded', presetVivid: 'Vivid' },
  ja: { title: '画像フィルター', desc: '画像をアップロードしてCSSフィルターを適用、プレビュー＆ダウンロード', upload: '📁 画像アップロード', download: '💾 ダウンロード', reset: 'リセット', clear: 'クリア', preview: 'プレビュー', filters: 'フィルター調整', brightness: '明るさ', contrast: 'コントラスト', saturate: '彩度', blur: 'ぼかし', grayscale: 'グレースケール', sepia: 'セピア', hueRotate: '色相回転', invert: '反転', opacity: '不透明度', dragHint: 'ドラッグ＆ドロップまたはクリック', presets: 'プリセット', presetNone: 'オリジナル', presetVintage: 'ヴィンテージ', presetBW: '白黒', presetWarm: '暖色', presetCool: '寒色', presetDramatic: 'ドラマチック', presetFaded: 'フェード', presetVivid: 'ビビッド' },
  ko: { title: '이미지 필터', desc: '이미지를 업로드하고 CSS 필터를 적용하여 미리보기 및 다운로드', upload: '📁 이미지 업로드', download: '💾 다운로드', reset: '초기화', clear: '지우기', preview: '미리보기', filters: '필터 조정', brightness: '밝기', contrast: '대비', saturate: '채도', blur: '흐림', grayscale: '회색조', sepia: '세피아', hueRotate: '색조 회전', invert: '반전', opacity: '불투명도', dragHint: '드래그 앤 드롭 또는 클릭하여 업로드', presets: '프리셋', presetNone: '원본', presetVintage: '빈티지', presetBW: '흑백', presetWarm: '따뜻한', presetCool: '차가운', presetDramatic: '드라마틱', presetFaded: '페이드', presetVivid: '비비드' },
  es: { title: 'Filtro de Imagen', desc: 'Sube una imagen, aplica filtros CSS, previsualiza y descarga', upload: '📁 Subir Imagen', download: '💾 Descargar', reset: 'Restablecer', clear: 'Limpiar', preview: 'Vista previa', filters: 'Ajustes de Filtro', brightness: 'Brillo', contrast: 'Contraste', saturate: 'Saturación', blur: 'Desenfoque', grayscale: 'Escala de grises', sepia: 'Sepia', hueRotate: 'Rotación de tono', invert: 'Invertir', opacity: 'Opacidad', dragHint: 'Arrastra o haz clic para subir', presets: 'Presets', presetNone: 'Original', presetVintage: 'Vintage', presetBW: 'B&N', presetWarm: 'Cálido', presetCool: 'Frío', presetDramatic: 'Dramático', presetFaded: 'Desvanecido', presetVivid: 'Vívido' },
}

interface Filters { brightness: number; contrast: number; saturate: number; blur: number; grayscale: number; sepia: number; hueRotate: number; invert: number; opacity: number }

const defaultFilters: Filters = { brightness: 100, contrast: 100, saturate: 100, blur: 0, grayscale: 0, sepia: 0, hueRotate: 0, invert: 0, opacity: 100 }

const filterPresets: { key: string; filters: Filters }[] = [
  { key: 'presetNone', filters: { ...defaultFilters } },
  { key: 'presetVintage', filters: { ...defaultFilters, sepia: 60, contrast: 110, brightness: 90, saturate: 80 } },
  { key: 'presetBW', filters: { ...defaultFilters, grayscale: 100 } },
  { key: 'presetWarm', filters: { ...defaultFilters, sepia: 30, saturate: 120, brightness: 105 } },
  { key: 'presetCool', filters: { ...defaultFilters, saturate: 80, brightness: 105, hueRotate: 180 } },
  { key: 'presetDramatic', filters: { ...defaultFilters, contrast: 150, brightness: 90, saturate: 130 } },
  { key: 'presetFaded', filters: { ...defaultFilters, brightness: 120, contrast: 80, saturate: 60 } },
  { key: 'presetVivid', filters: { ...defaultFilters, saturate: 180, contrast: 120, brightness: 105 } },
]

function buildFilterCSS(f: Filters): string {
  return `brightness(${f.brightness}%) contrast(${f.contrast}%) saturate(${f.saturate}%) blur(${f.blur}px) grayscale(${f.grayscale}%) sepia(${f.sepia}%) hue-rotate(${f.hueRotate}deg) invert(${f.invert}%) opacity(${f.opacity}%)`
}

export default function ImageFilterPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const fileRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [imgW, setImgW] = useState(0)
  const [imgH, setImgH] = useState(0)
  const [filters, setFilters] = useState<Filters>({ ...defaultFilters })
  const [fileName, setFileName] = useState('')

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = (e) => {
      const src = e.target?.result as string
      setImgSrc(src)
      const img = new Image()
      img.onload = () => { setImgW(img.width); setImgH(img.height) }
      img.src = src
    }
    reader.readAsDataURL(file)
  }, [])

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]) }

  const updateFilter = (key: keyof Filters, val: number) => setFilters(prev => ({ ...prev, [key]: val }))

  const download = () => {
    if (!imgSrc) return
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = imgW; canvas.height = imgH
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.filter = buildFilterCSS(filters)
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, imgW, imgH)
      const url = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      const base = fileName.replace(/\.[^.]+$/, '') || 'filtered'
      a.href = url; a.download = `${base}_filtered.png`; a.click()
    }
    img.src = imgSrc
  }

  const clear = () => { setImgSrc(null); setImgW(0); setImgH(0); setFilters({ ...defaultFilters }); setFileName('') }

  const filterCSS = buildFilterCSS(filters)

  const sliders: { key: keyof Filters; min: number; max: number; unit: string }[] = [
    { key: 'brightness', min: 0, max: 200, unit: '%' },
    { key: 'contrast', min: 0, max: 200, unit: '%' },
    { key: 'saturate', min: 0, max: 300, unit: '%' },
    { key: 'blur', min: 0, max: 20, unit: 'px' },
    { key: 'grayscale', min: 0, max: 100, unit: '%' },
    { key: 'sepia', min: 0, max: 100, unit: '%' },
    { key: 'hueRotate', min: 0, max: 360, unit: '°' },
    { key: 'invert', min: 0, max: 100, unit: '%' },
    { key: 'opacity', min: 0, max: 100, unit: '%' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🎨 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>
        <canvas ref={canvasRef} className="hidden" />
        <input ref={fileRef} type="file" accept="image/*" onChange={onFileChange} className="hidden" />

        {!imgSrc ? (
          <div onClick={() => fileRef.current?.click()} onDrop={onDrop} onDragOver={e => e.preventDefault()}
            className="bg-white rounded-2xl p-16 shadow-sm border-2 border-dashed border-gray-300 hover:border-indigo-400 transition cursor-pointer text-center">
            <p className="text-4xl mb-3">🎨</p>
            <p className="text-gray-500">{u.dragHint}</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              <button onClick={download} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.download}</button>
              <button onClick={() => setFilters({ ...defaultFilters })} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.reset}</button>
              <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
              <button onClick={() => fileRef.current?.click()} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.upload}</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{u.presets}</h3>
                  <div className="grid grid-cols-2 gap-1">
                    {filterPresets.map(p => (
                      <button key={p.key} onClick={() => setFilters({ ...p.filters })} className="text-xs px-2 py-1.5 bg-gray-50 hover:bg-indigo-50 rounded-lg transition text-gray-600 hover:text-indigo-600">{u[p.key as keyof typeof u]}</button>
                    ))}
                  </div>
                </div>
                <hr className="border-gray-100" />
                <h3 className="font-semibold text-gray-800">{u.filters}</h3>
                {sliders.map(s => (
                  <div key={s.key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{u[s.key as keyof typeof u]}</span>
                      <span className="text-gray-400 font-mono text-xs">{filters[s.key]}{s.unit}</span>
                    </div>
                    <input type="range" min={s.min} max={s.max} value={filters[s.key]} onChange={e => updateFilter(s.key, +e.target.value)} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3">{u.preview}</h3>
                <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4 min-h-[300px] overflow-auto" style={{ backgroundImage: 'linear-gradient(45deg, #e5e7eb 25%, transparent 25%), linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e7eb 75%), linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}>
                  <img src={imgSrc} alt="Preview" style={{ filter: filterCSS }} className="max-w-full max-h-[500px] object-contain rounded shadow-sm" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
