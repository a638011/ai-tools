'use client'
import { useState, useRef, useCallback } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '图片尺寸调整', desc: '上传图片，调整宽高并下载', upload: '📁 上传图片', download: '💾 下载', apply: '🔄 应用调整', width: '宽度', height: '高度', lockRatio: '🔒 锁定比例', unlockRatio: '🔓 解锁比例', original: '原始尺寸', current: '当前尺寸', preview: '预览', format: '格式', quality: '质量', reset: '重置', clear: '清空', dragHint: '拖拽或点击上传图片', presets: '预设尺寸' },
  en: { title: 'Image Resizer', desc: 'Upload an image, resize and download', upload: '📁 Upload Image', download: '💾 Download', apply: '🔄 Apply Resize', width: 'Width', height: 'Height', lockRatio: '🔒 Lock Ratio', unlockRatio: '🔓 Unlock Ratio', original: 'Original Size', current: 'Current Size', preview: 'Preview', format: 'Format', quality: 'Quality', reset: 'Reset', clear: 'Clear', dragHint: 'Drag & drop or click to upload', presets: 'Presets' },
  ja: { title: '画像リサイズ', desc: '画像をアップロードしてサイズ変更＆ダウンロード', upload: '📁 画像アップロード', download: '💾 ダウンロード', apply: '🔄 リサイズ適用', width: '幅', height: '高さ', lockRatio: '🔒 比率固定', unlockRatio: '🔓 比率解除', original: '元のサイズ', current: '現在のサイズ', preview: 'プレビュー', format: 'フォーマット', quality: '品質', reset: 'リセット', clear: 'クリア', dragHint: 'ドラッグ＆ドロップまたはクリック', presets: 'プリセット' },
  ko: { title: '이미지 크기 조정', desc: '이미지를 업로드하고 크기를 조정하여 다운로드', upload: '📁 이미지 업로드', download: '💾 다운로드', apply: '🔄 크기 조정 적용', width: '너비', height: '높이', lockRatio: '🔒 비율 고정', unlockRatio: '🔓 비율 해제', original: '원본 크기', current: '현재 크기', preview: '미리보기', format: '형식', quality: '품질', reset: '초기화', clear: '지우기', dragHint: '드래그 앤 드롭 또는 클릭하여 업로드', presets: '프리셋' },
  es: { title: 'Redimensionar Imagen', desc: 'Sube una imagen, cambia el tamaño y descarga', upload: '📁 Subir Imagen', download: '💾 Descargar', apply: '🔄 Aplicar Redimensión', width: 'Ancho', height: 'Alto', lockRatio: '🔒 Bloquear Proporción', unlockRatio: '🔓 Desbloquear', original: 'Tamaño Original', current: 'Tamaño Actual', preview: 'Vista previa', format: 'Formato', quality: 'Calidad', reset: 'Restablecer', clear: 'Limpiar', dragHint: 'Arrastra o haz clic para subir', presets: 'Presets' },
}

const presets = [
  { label: '16:9 HD', w: 1920, h: 1080 },
  { label: '16:9 4K', w: 3840, h: 2160 },
  { label: 'Square', w: 1080, h: 1080 },
  { label: 'Avatar', w: 256, h: 256 },
  { label: 'Favicon', w: 64, h: 64 },
  { label: 'OG Image', w: 1200, h: 630 },
]

export default function ImageResizePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const fileRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [origW, setOrigW] = useState(0)
  const [origH, setOrigH] = useState(0)
  const [newW, setNewW] = useState(0)
  const [newH, setNewH] = useState(0)
  const [lockRatio, setLockRatio] = useState(true)
  const [format, setFormat] = useState('image/png')
  const [quality, setQuality] = useState(92)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fileName, setFileName] = useState('')

  const ratio = origW && origH ? origW / origH : 1

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = (e) => {
      const src = e.target?.result as string
      setImgSrc(src)
      const img = new Image()
      img.onload = () => { setOrigW(img.width); setOrigH(img.height); setNewW(img.width); setNewH(img.height); setPreviewUrl(src) }
      img.src = src
    }
    reader.readAsDataURL(file)
  }, [])

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]) }

  const setWidth = (w: number) => { setNewW(w); if (lockRatio && origH) setNewH(Math.round(w / ratio)) }
  const setHeight = (h: number) => { setNewH(h); if (lockRatio && origW) setNewW(Math.round(h * ratio)) }

  const applyResize = () => {
    if (!imgSrc || !newW || !newH) return
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = newW; canvas.height = newH
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, newW, newH)
      const url = canvas.toDataURL(format, quality / 100)
      setPreviewUrl(url)
    }
    img.src = imgSrc
  }

  const download = () => {
    if (!previewUrl) return
    const a = document.createElement('a')
    const ext = format === 'image/png' ? 'png' : format === 'image/webp' ? 'webp' : 'jpg'
    const base = fileName.replace(/\.[^.]+$/, '') || 'resized'
    a.href = previewUrl; a.download = `${base}_${newW}x${newH}.${ext}`; a.click()
  }

  const clear = () => { setImgSrc(null); setPreviewUrl(null); setOrigW(0); setOrigH(0); setNewW(0); setNewH(0); setFileName('') }
  const reset = () => { setNewW(origW); setNewH(origH); if (imgSrc) setPreviewUrl(imgSrc) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>
        <canvas ref={canvasRef} className="hidden" />
        <input ref={fileRef} type="file" accept="image/*" onChange={onFileChange} className="hidden" />

        {!imgSrc ? (
          <div onClick={() => fileRef.current?.click()} onDrop={onDrop} onDragOver={e => e.preventDefault()}
            className="bg-white rounded-2xl p-16 shadow-sm border-2 border-dashed border-gray-300 hover:border-indigo-400 transition cursor-pointer text-center">
            <p className="text-4xl mb-3">📁</p>
            <p className="text-gray-500">{u.dragHint}</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              <button onClick={applyResize} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.apply}</button>
              <button onClick={download} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.download}</button>
              <button onClick={reset} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.reset}</button>
              <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
              <button onClick={() => fileRef.current?.click()} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.upload}</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">{u.original}: {origW} × {origH}</p>
                  <p className="text-xs text-gray-500">{u.current}: {newW} × {newH}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{u.width} (px)</label>
                  <input type="number" value={newW} onChange={e => setWidth(+e.target.value)} min={1} className="w-full border rounded-xl p-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{u.height} (px)</label>
                  <input type="number" value={newH} onChange={e => setHeight(+e.target.value)} min={1} className="w-full border rounded-xl p-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
                </div>
                <button onClick={() => setLockRatio(!lockRatio)} className={`w-full py-2 rounded-xl text-sm transition ${lockRatio ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}>{lockRatio ? u.lockRatio : u.unlockRatio}</button>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{u.format}</label>
                  <select value={format} onChange={e => setFormat(e.target.value)} className="w-full border rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-indigo-300 outline-none">
                    <option value="image/png">PNG</option>
                    <option value="image/jpeg">JPEG</option>
                    <option value="image/webp">WebP</option>
                  </select>
                </div>
                {format !== 'image/png' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{u.quality}: {quality}%</label>
                    <input type="range" min={10} max={100} value={quality} onChange={e => setQuality(+e.target.value)} className="w-full" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{u.presets}</label>
                  <div className="grid grid-cols-2 gap-1">
                    {presets.map(p => (
                      <button key={p.label} onClick={() => { setNewW(p.w); setNewH(p.h) }} className="text-xs px-2 py-1.5 bg-gray-50 hover:bg-indigo-50 rounded-lg transition text-gray-600 hover:text-indigo-600">{p.label} ({p.w}×{p.h})</button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3">{u.preview}</h3>
                <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4 min-h-[300px] overflow-auto">
                  {previewUrl && <img src={previewUrl} alt="Preview" className="max-w-full max-h-[500px] object-contain rounded shadow-sm" />}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
