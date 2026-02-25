'use client'
import { useState, useRef } from 'react'
import { PDFDocument } from 'pdf-lib'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const labelsI18n = {
  zh: { upload: '📁 选择PDF文件', compress: '🗜️ 压缩', download: '⬇️ 下载压缩后的PDF', original: '原始大小', compressed: '压缩后', saved: '节省', compressing: '压缩中...', hint: '在线压缩PDF文件，减小文件体积', pages: '页' },
  en: { upload: '📁 Select PDF file', compress: '🗜️ Compress', download: '⬇️ Download compressed PDF', original: 'Original', compressed: 'Compressed', saved: 'Saved', compressing: 'Compressing...', hint: 'Compress PDF files online to reduce size', pages: 'pages' },
  ja: { upload: '📁 PDFファイルを選択', compress: '🗜️ 圧縮', download: '⬇️ 圧縮PDFをダウンロード', original: '元のサイズ', compressed: '圧縮後', saved: '削減', compressing: '圧縮中...', hint: 'PDFファイルをオンラインで圧縮', pages: 'ページ' },
  ko: { upload: '📁 PDF 파일 선택', compress: '🗜️ 압축', download: '⬇️ 압축된 PDF 다운로드', original: '원본 크기', compressed: '압축 후', saved: '절약', compressing: '압축 중...', hint: 'PDF 파일을 온라인으로 압축', pages: '페이지' },
  es: { upload: '📁 Seleccionar PDF', compress: '🗜️ Comprimir', download: '⬇️ Descargar PDF comprimido', original: 'Original', compressed: 'Comprimido', saved: 'Ahorrado', compressing: 'Comprimiendo...', hint: 'Comprimir archivos PDF en línea', pages: 'páginas' },
}

const formatSize = (b: number) => b < 1024 * 1024 ? (b / 1024).toFixed(1) + ' KB' : (b / 1024 / 1024).toFixed(2) + ' MB'

export default function PdfCompressPage() {
  const { locale, t } = useLocale()
  const l = labelsI18n[locale] || labelsI18n.zh
  const fileRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<{ name: string; size: number; data: ArrayBuffer; pages: number } | null>(null)
  const [result, setResult] = useState<{ url: string; size: number } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleFile = async (f: File) => {
    const data = await f.arrayBuffer()
    try {
      const pdf = await PDFDocument.load(data)
      setFile({ name: f.name, size: f.size, data, pages: pdf.getPageCount() })
      setResult(null)
    } catch {}
  }

  const compress = async () => {
    if (!file) return
    setLoading(true)
    try {
      const src = await PDFDocument.load(file.data)
      const compressed = await PDFDocument.create()
      const pages = await compressed.copyPages(src, src.getPageIndices())
      pages.forEach(p => compressed.addPage(p))
      // Strip metadata to reduce size
      compressed.setTitle('')
      compressed.setAuthor('')
      compressed.setSubject('')
      compressed.setKeywords([])
      compressed.setProducer('')
      compressed.setCreator('')
      const bytes = await compressed.save({ useObjectStreams: true })
      const blob = new Blob([bytes], { type: 'application/pdf' })
      setResult({ url: URL.createObjectURL(blob), size: blob.size })
    } catch {}
    setLoading(false)
  }

  const saved = file && result ? Math.max(0, Math.round((1 - result.size / file.size) * 100)) : 0

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🗜️ PDF {locale === 'zh' ? '压缩工具' : locale === 'ja' ? '圧縮ツール' : locale === 'ko' ? '압축 도구' : locale === 'es' ? 'Compresor' : 'Compressor'}</h1>
      <p className="text-gray-500 mb-8">{l.hint}</p>

      <div onClick={() => fileRef.current?.click()}
        onDrop={e => { e.preventDefault(); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]) }}
        onDragOver={e => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition mb-6">
        <p className="text-gray-500 text-lg">{l.upload}</p>
        <input ref={fileRef} type="file" accept=".pdf" className="hidden" onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }} />
      </div>

      {file && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-700">{file.name}</p>
              <p className="text-xs text-gray-400">{file.pages} {l.pages} · {formatSize(file.size)}</p>
            </div>
          </div>

          {!result && (
            <button onClick={compress} disabled={loading}
              className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 transition">
              {loading ? l.compressing : l.compress}
            </button>
          )}

          {result && (
            <>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">{l.original}</p>
                  <p className="font-medium text-gray-700">{formatSize(file.size)}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">{l.compressed}</p>
                  <p className="font-medium text-green-600">{formatSize(result.size)}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">{l.saved}</p>
                  <p className="font-medium text-blue-600">{saved}%</p>
                </div>
              </div>
              <a href={result.url} download={`compressed_${file.name}`}
                className="block w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition text-center">
                {l.download}
              </a>
            </>
          )}
        </div>
      )}
    </main>
  )
}
