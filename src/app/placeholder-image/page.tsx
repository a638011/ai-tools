'use client'
import { useState, useRef, useCallback } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '占位图生成器', desc: '设置宽高、背景色、文字、格式，生成占位图片并下载', width: '宽度(px)', height: '高度(px)', bgColor: '背景色', textColor: '文字颜色', text: '文字', fontSize: '字号(px)', generate: '🖼️ 生成', download: '⬇️ 下载', preview: '预览', format: '格式' },
  en: { title: 'Placeholder Image', desc: 'Set dimensions, colors, text and format to generate placeholder images', width: 'Width(px)', height: 'Height(px)', bgColor: 'Background', textColor: 'Text Color', text: 'Text', fontSize: 'Font Size(px)', generate: '🖼️ Generate', download: '⬇️ Download', preview: 'Preview', format: 'Format' },
  ja: { title: 'プレースホルダー画像', desc: 'サイズ・色・テキスト・形式を設定してプレースホルダー画像を生成', width: '幅(px)', height: '高さ(px)', bgColor: '背景色', textColor: '文字色', text: 'テキスト', fontSize: 'フォントサイズ(px)', generate: '🖼️ 生成', download: '⬇️ ダウンロード', preview: 'プレビュー', format: '形式' },
  ko: { title: '플레이스홀더 이미지', desc: '크기, 색상, 텍스트, 형식을 설정하여 플레이스홀더 이미지 생성', width: '너비(px)', height: '높이(px)', bgColor: '배경색', textColor: '텍스트 색상', text: '텍스트', fontSize: '글꼴 크기(px)', generate: '🖼️ 생성', download: '⬇️ 다운로드', preview: '미리보기', format: '형식' },
  es: { title: 'Imagen Placeholder', desc: 'Configura dimensiones, colores, texto y formato para generar imágenes placeholder', width: 'Ancho(px)', height: 'Alto(px)', bgColor: 'Fondo', textColor: 'Color Texto', text: 'Texto', fontSize: 'Tamaño Fuente(px)', generate: '🖼️ Generar', download: '⬇️ Descargar', preview: 'Vista Previa', format: 'Formato' },
}

export default function PlaceholderImagePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [width, setWidth] = useState(640)
  const [height, setHeight] = useState(480)
  const [bgColor, setBgColor] = useState('#CCCCCC')
  const [textColor, setTextColor] = useState('#666666')
  const [text, setText] = useState('')
  const [fontSize, setFontSize] = useState(32)
  const [format, setFormat] = useState<'png' | 'jpeg' | 'webp'>('png')
  const [dataUrl, setDataUrl] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)
    const displayText = text || `${width} × ${height}`
    ctx.fillStyle = textColor
    ctx.font = `bold ${fontSize}px Arial, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(displayText, width / 2, height / 2)
    const mimeMap = { png: 'image/png', jpeg: 'image/jpeg', webp: 'image/webp' }
    setDataUrl(canvas.toDataURL(mimeMap[format], 0.9))
  }, [width, height, bgColor, textColor, text, fontSize, format])

  const download = () => {
    if (!dataUrl) return
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `placeholder-${width}x${height}.${format}`
    a.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🖼️ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex flex-wrap gap-4 items-center mb-3">
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.width}:</label><input type="number" min={1} max={4096} value={width} onChange={e => setWidth(+e.target.value)} className="w-20 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.height}:</label><input type="number" min={1} max={4096} value={height} onChange={e => setHeight(+e.target.value)} className="w-20 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.fontSize}:</label><input type="number" min={8} max={200} value={fontSize} onChange={e => setFontSize(+e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.format}:</label>
              <select value={format} onChange={e => setFormat(e.target.value as 'png' | 'jpeg' | 'webp')} className="border rounded-lg px-2 py-1 text-sm">
                <option value="png">PNG</option><option value="jpeg">JPEG</option><option value="webp">WebP</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center mb-3">
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.bgColor}:</label><input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.textColor}:</label><input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.text}:</label><input type="text" value={text} onChange={e => setText(e.target.value)} placeholder={`${width} × ${height}`} className="border rounded-lg px-3 py-1 text-sm w-48" /></div>
          </div>
          <div className="flex gap-2">
            <button onClick={generate} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.generate}</button>
            {dataUrl && <button onClick={download} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.download}</button>}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">{u.preview}</h3>
          <canvas ref={canvasRef} className="hidden" />
          {dataUrl ? (
            <div className="border rounded-xl p-4 bg-gray-50 flex items-center justify-center overflow-auto">
              <img src={dataUrl} alt="placeholder" className="max-w-full rounded shadow" style={{ maxHeight: 400 }} />
            </div>
          ) : (
            <div className="border rounded-xl p-8 bg-gray-50 flex items-center justify-center text-gray-400 min-h-[200px]">
              {u.generate}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
