'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '图片水印', desc: '上传图片，添加文字水印，预览并下载', upload: '📤 上传图片', dragHint: '拖拽图片到此处或点击上传', text: '水印文字', fontSize: '字体大小', opacity: '透明度', color: '颜色', position: '位置', download: '💾 下载', clear: '清空', preview: '预览', posCenter: '居中', posTopLeft: '左上', posTopRight: '右上', posBottomLeft: '左下', posBottomRight: '右下', posTile: '平铺', rotation: '旋转角度' },
  en: { title: 'Image Watermark', desc: 'Upload image, add text watermark, preview and download', upload: '📤 Upload Image', dragHint: 'Drag image here or click to upload', text: 'Watermark Text', fontSize: 'Font Size', opacity: 'Opacity', color: 'Color', position: 'Position', download: '💾 Download', clear: 'Clear', preview: 'Preview', posCenter: 'Center', posTopLeft: 'Top Left', posTopRight: 'Top Right', posBottomLeft: 'Bottom Left', posBottomRight: 'Bottom Right', posTile: 'Tile', rotation: 'Rotation' },
  ja: { title: '画像透かし', desc: '画像をアップロードしてテキスト透かしを追加', upload: '📤 画像アップロード', dragHint: '画像をドラッグまたはクリック', text: '透かしテキスト', fontSize: 'フォントサイズ', opacity: '透明度', color: '色', position: '位置', download: '💾 ダウンロード', clear: 'クリア', preview: 'プレビュー', posCenter: '中央', posTopLeft: '左上', posTopRight: '右上', posBottomLeft: '左下', posBottomRight: '右下', posTile: 'タイル', rotation: '回転角度' },
  ko: { title: '이미지 워터마크', desc: '이미지에 텍스트 워터마크 추가, 미리보기 및 다운로드', upload: '📤 이미지 업로드', dragHint: '이미지를 드래그하거나 클릭', text: '워터마크 텍스트', fontSize: '글꼴 크기', opacity: '투명도', color: '색상', position: '위치', download: '💾 다운로드', clear: '지우기', preview: '미리보기', posCenter: '중앙', posTopLeft: '좌상', posTopRight: '우상', posBottomLeft: '좌하', posBottomRight: '우하', posTile: '타일', rotation: '회전' },
  es: { title: 'Marca de Agua', desc: 'Sube imagen, añade marca de agua de texto, previsualiza y descarga', upload: '📤 Subir Imagen', dragHint: 'Arrastra imagen aquí o haz clic', text: 'Texto', fontSize: 'Tamaño', opacity: 'Opacidad', color: 'Color', position: 'Posición', download: '💾 Descargar', clear: 'Limpiar', preview: 'Vista previa', posCenter: 'Centro', posTopLeft: 'Sup Izq', posTopRight: 'Sup Der', posBottomLeft: 'Inf Izq', posBottomRight: 'Inf Der', posTile: 'Mosaico', rotation: 'Rotación' },
}

type Pos = 'center' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'tile'

export default function ImageWatermarkPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [text, setText] = useState('Watermark')
  const [fontSize, setFontSize] = useState(48)
  const [opacity, setOpacity] = useState(0.3)
  const [color, setColor] = useState('#ffffff')
  const [position, setPosition] = useState<Pos>('center')
  const [rotation, setRotation] = useState(-30)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const drawWatermark = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.drawImage(image, 0, 0)
    ctx.globalAlpha = opacity
    ctx.fillStyle = color
    ctx.font = `bold ${fontSize}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    if (position === 'tile') {
      const gap = fontSize * 4
      for (let y = -image.height; y < image.height * 2; y += gap) {
        for (let x = -image.width; x < image.width * 2; x += gap) {
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate((rotation * Math.PI) / 180)
          ctx.fillText(text, 0, 0)
          ctx.restore()
        }
      }
    } else {
      let x = image.width / 2, y = image.height / 2
      if (position === 'topLeft') { x = fontSize * 2; y = fontSize }
      else if (position === 'topRight') { x = image.width - fontSize * 2; y = fontSize }
      else if (position === 'bottomLeft') { x = fontSize * 2; y = image.height - fontSize }
      else if (position === 'bottomRight') { x = image.width - fontSize * 2; y = image.height - fontSize }
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.fillText(text, 0, 0)
      ctx.restore()
    }
    ctx.globalAlpha = 1
  }, [image, text, fontSize, opacity, color, position, rotation])

  useEffect(() => { drawWatermark() }, [drawWatermark])

  const loadImage = (file: File) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => setImage(img)
    img.src = url
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) loadImage(e.target.files[0]) }
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); if (e.dataTransfer.files?.[0]) loadImage(e.dataTransfer.files[0]) }

  const download = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'watermarked.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const posOptions: { v: Pos; l: string }[] = [
    { v: 'center', l: u.posCenter }, { v: 'topLeft', l: u.posTopLeft }, { v: 'topRight', l: u.posTopRight },
    { v: 'bottomLeft', l: u.posBottomLeft }, { v: 'bottomRight', l: u.posBottomRight }, { v: 'tile', l: u.posTile },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🖼️ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        {!image ? (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div onClick={() => fileRef.current?.click()} onDrop={handleDrop} onDragOver={e => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition">
              <div className="text-4xl mb-3">🖼️</div>
              <p className="text-gray-600 font-medium">{u.dragHint}</p>
            </div>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">{u.text}</label>
                <input value={text} onChange={e => setText(e.target.value)} className="w-full border rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">{u.fontSize}: {fontSize}px</label>
                <input type="range" min="12" max="200" value={fontSize} onChange={e => setFontSize(+e.target.value)} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">{u.opacity}: {Math.round(opacity * 100)}%</label>
                <input type="range" min="0.05" max="1" step="0.05" value={opacity} onChange={e => setOpacity(+e.target.value)} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">{u.rotation}: {rotation}°</label>
                <input type="range" min="-180" max="180" value={rotation} onChange={e => setRotation(+e.target.value)} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">{u.color}</label>
                <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">{u.position}</label>
                <div className="grid grid-cols-2 gap-1">
                  {posOptions.map(o => (
                    <button key={o.v} onClick={() => setPosition(o.v)}
                      className={`px-2 py-1.5 rounded-lg text-xs transition ${position === o.v ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>{o.l}</button>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={download} className="flex-1 px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.download}</button>
                <button onClick={() => { setImage(null); if (fileRef.current) fileRef.current.value = '' }} className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
              </div>
              <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
            </div>
            <div className="md:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">{u.preview}</h3>
              <canvas ref={canvasRef} className="max-w-full h-auto rounded-xl border" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
