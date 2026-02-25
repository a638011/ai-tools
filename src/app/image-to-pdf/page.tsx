'use client'
import { useState, useRef } from 'react'
import { PDFDocument } from 'pdf-lib'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const labelsI18n = {
  zh: { upload: '📁 选择图片文件', convert: '📄 生成PDF', download: '⬇️ 下载PDF', files: '已选择图片', remove: '移除', converting: '生成中...', hint: '将多张图片合并为一个PDF文件', formats: '支持 JPG, PNG' },
  en: { upload: '📁 Select images', convert: '📄 Generate PDF', download: '⬇️ Download PDF', files: 'Selected images', remove: 'Remove', converting: 'Generating...', hint: 'Combine multiple images into one PDF', formats: 'Supports JPG, PNG' },
  ja: { upload: '📁 画像を選択', convert: '📄 PDF生成', download: '⬇️ PDFをダウンロード', files: '選択済み画像', remove: '削除', converting: '生成中...', hint: '複数の画像を1つのPDFに結合', formats: 'JPG, PNG対応' },
  ko: { upload: '📁 이미지 선택', convert: '📄 PDF 생성', download: '⬇️ PDF 다운로드', files: '선택된 이미지', remove: '제거', converting: '생성 중...', hint: '여러 이미지를 하나의 PDF로 결합', formats: 'JPG, PNG 지원' },
  es: { upload: '📁 Seleccionar imágenes', convert: '📄 Generar PDF', download: '⬇️ Descargar PDF', files: 'Imágenes seleccionadas', remove: 'Quitar', converting: 'Generando...', hint: 'Combinar múltiples imágenes en un PDF', formats: 'Soporta JPG, PNG' },
}

type ImgInfo = { name: string; url: string; data: Uint8Array; type: string; w: number; h: number }

export default function ImageToPdfPage() {
  const { locale, t } = useLocale()
  const l = labelsI18n[locale] || labelsI18n.zh
  const fileRef = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<ImgInfo[]>([])
  const [pdfUrl, setPdfUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const addImages = async (fileList: FileList) => {
    const newImgs: ImgInfo[] = []
    for (const file of Array.from(fileList)) {
      if (!file.type.startsWith('image/')) continue
      const data = new Uint8Array(await file.arrayBuffer())
      const url = URL.createObjectURL(file)
      const dim = await new Promise<{ w: number; h: number }>(resolve => {
        const img = new Image()
        img.onload = () => resolve({ w: img.width, h: img.height })
        img.src = url
      })
      newImgs.push({ name: file.name, url, data, type: file.type, w: dim.w, h: dim.h })
    }
    setImages(prev => [...prev, ...newImgs])
    setPdfUrl('')
  }

  const convert = async () => {
    if (images.length === 0) return
    setLoading(true)
    try {
      const pdf = await PDFDocument.create()
      for (const img of images) {
        const embed = img.type === 'image/png'
          ? await pdf.embedPng(img.data)
          : await pdf.embedJpg(img.data)
        const page = pdf.addPage([img.w, img.h])
        page.drawImage(embed, { x: 0, y: 0, width: img.w, height: img.h })
      }
      const bytes = await pdf.save()
      const blob = new Blob([bytes], { type: 'application/pdf' })
      setPdfUrl(URL.createObjectURL(blob))
    } catch {}
    setLoading(false)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🖼️ {locale === 'zh' ? '图片转PDF' : locale === 'ja' ? '画像→PDF' : locale === 'ko' ? '이미지→PDF' : locale === 'es' ? 'Imagen a PDF' : 'Image to PDF'}</h1>
      <p className="text-gray-500 mb-8">{l.hint}</p>

      <div onClick={() => fileRef.current?.click()}
        onDrop={e => { e.preventDefault(); if (e.dataTransfer.files.length) addImages(e.dataTransfer.files) }}
        onDragOver={e => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition mb-6">
        <p className="text-gray-500 text-lg">{l.upload}</p>
        <p className="text-xs text-gray-400 mt-1">{l.formats}</p>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png" multiple className="hidden" onChange={e => { if (e.target.files) addImages(e.target.files) }} />
      </div>

      {images.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <span className="text-sm font-medium text-gray-700 block mb-3">{l.files} ({images.length})</span>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {images.map((img, i) => (
              <div key={i} className="relative group">
                <img src={img.url} alt={img.name} className="w-full h-20 object-cover rounded-lg" />
                <button onClick={() => { setImages(prev => prev.filter((_, idx) => idx !== i)); setPdfUrl('') }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs opacity-0 group-hover:opacity-100 transition">×</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {images.length > 0 && !pdfUrl && (
        <button onClick={convert} disabled={loading}
          className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 transition mb-4">
          {loading ? l.converting : l.convert}
        </button>
      )}

      {pdfUrl && (
        <a href={pdfUrl} download="images.pdf"
          className="block w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition text-center">
          {l.download}
        </a>
      )}
    </main>
  )
}
