'use client'
import { useState, useRef } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const labelsI18n = {
  zh: { upload: '📁 选择图片或拖拽到此处', quality: '压缩质量', compress: '🗜️ 压缩', download: '⬇️ 下载', original: '原始大小', compressed: '压缩后', saved: '节省', formats: '支持 JPG, PNG, WebP' },
  en: { upload: '📁 Select image or drag & drop', quality: 'Quality', compress: '🗜️ Compress', download: '⬇️ Download', original: 'Original', compressed: 'Compressed', saved: 'Saved', formats: 'Supports JPG, PNG, WebP' },
  ja: { upload: '📁 画像を選択またはドラッグ', quality: '品質', compress: '🗜️ 圧縮', download: '⬇️ ダウンロード', original: '元のサイズ', compressed: '圧縮後', saved: '削減', formats: 'JPG, PNG, WebP対応' },
  ko: { upload: '📁 이미지 선택 또는 드래그', quality: '품질', compress: '🗜️ 압축', download: '⬇️ 다운로드', original: '원본 크기', compressed: '압축 후', saved: '절약', formats: 'JPG, PNG, WebP 지원' },
  es: { upload: '📁 Seleccionar imagen o arrastrar', quality: 'Calidad', compress: '🗜️ Comprimir', download: '⬇️ Descargar', original: 'Original', compressed: 'Comprimido', saved: 'Ahorrado', formats: 'Soporta JPG, PNG, WebP' },
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

export default function ImageCompressPage() {
  const { locale, t } = useLocale()
  const l = labelsI18n[locale] || labelsI18n.zh
  const fileRef = useRef<HTMLInputElement>(null)
  const [quality, setQuality] = useState(0.7)
  const [original, setOriginal] = useState<{ url: string; size: number; name: string } | null>(null)
  const [compressed, setCompressed] = useState<{ url: string; size: number } | null>(null)

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file)
    setOriginal({ url, size: file.size, name: file.name })
    setCompressed(null)
  }

  const compress = () => {
    if (!original) return
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      canvas.toBlob(blob => {
        if (blob) setCompressed({ url: URL.createObjectURL(blob), size: blob.size })
      }, 'image/jpeg', quality)
    }
    img.src = original.url
  }

  const download = () => {
    if (!compressed) return
    const a = document.createElement('a')
    a.href = compressed.url
    a.download = `compressed_${original?.name || 'image.jpg'}`
    a.click()
  }

  const saved = original && compressed ? Math.round((1 - compressed.size / original.size) * 100) : 0

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🗜️ {locale === 'zh' ? '图片压缩工具' : locale === 'ja' ? '画像圧縮ツール' : locale === 'ko' ? '이미지 압축' : locale === 'es' ? 'Compresor de Imágenes' : 'Image Compressor'}</h1>
      <p className="text-gray-500 mb-8">{l.formats}</p>

      <div onClick={() => fileRef.current?.click()}
        onDrop={e => { e.preventDefault(); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]) }}
        onDragOver={e => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition mb-6">
        <p className="text-gray-500">{l.upload}</p>
        <p className="text-xs text-gray-400 mt-1">{l.formats}</p>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }} />
      </div>

      {original && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{l.quality}: {Math.round(quality * 100)}%</label>
            <input type="range" min={0.1} max={1} step={0.05} value={quality} onChange={e => setQuality(+e.target.value)} className="w-full" />
          </div>
          <button onClick={compress} className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition">{l.compress}</button>

          {compressed && (
            <>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">{l.original}</p>
                  <p className="font-medium text-gray-700">{formatSize(original.size)}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">{l.compressed}</p>
                  <p className="font-medium text-green-600">{formatSize(compressed.size)}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">{l.saved}</p>
                  <p className="font-medium text-blue-600">{saved}%</p>
                </div>
              </div>
              <button onClick={download} className="w-full py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 transition">{l.download}</button>
            </>
          )}
        </div>
      )}
    </main>
  )
}
