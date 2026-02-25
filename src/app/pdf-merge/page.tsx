'use client'
import { useState, useRef } from 'react'
import { PDFDocument } from 'pdf-lib'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const labelsI18n = {
  zh: { upload: '📁 选择多个PDF文件', merge: '🔗 合并PDF', download: '⬇️ 下载合并后的PDF', files: '已选择文件', remove: '移除', total: '总页数', merging: '合并中...', hint: '拖拽或点击选择多个PDF文件，按顺序合并为一个' },
  en: { upload: '📁 Select PDF files', merge: '🔗 Merge PDFs', download: '⬇️ Download merged PDF', files: 'Selected files', remove: 'Remove', total: 'Total pages', merging: 'Merging...', hint: 'Drag or select multiple PDF files to merge in order' },
  ja: { upload: '📁 PDFファイルを選択', merge: '🔗 PDF結合', download: '⬇️ 結合PDFをダウンロード', files: '選択済みファイル', remove: '削除', total: '総ページ数', merging: '結合中...', hint: '複数のPDFを選択して順番に結合' },
  ko: { upload: '📁 PDF 파일 선택', merge: '🔗 PDF 병합', download: '⬇️ 병합된 PDF 다운로드', files: '선택된 파일', remove: '제거', total: '총 페이지', merging: '병합 중...', hint: '여러 PDF를 선택하여 순서대로 병합' },
  es: { upload: '📁 Seleccionar PDFs', merge: '🔗 Fusionar PDFs', download: '⬇️ Descargar PDF fusionado', files: 'Archivos seleccionados', remove: 'Quitar', total: 'Páginas totales', merging: 'Fusionando...', hint: 'Selecciona múltiples PDFs para fusionar en orden' },
}

type FileInfo = { name: string; size: number; data: ArrayBuffer; pages: number }

export default function PdfMergePage() {
  const { locale, t } = useLocale()
  const l = labelsI18n[locale] || labelsI18n.zh
  const fileRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileInfo[]>([])
  const [mergedUrl, setMergedUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const addFiles = async (fileList: FileList) => {
    const newFiles: FileInfo[] = []
    for (const file of Array.from(fileList)) {
      if (file.type !== 'application/pdf') continue
      const data = await file.arrayBuffer()
      try {
        const pdf = await PDFDocument.load(data)
        newFiles.push({ name: file.name, size: file.size, data, pages: pdf.getPageCount() })
      } catch { /* skip invalid */ }
    }
    setFiles(prev => [...prev, ...newFiles])
    setMergedUrl('')
  }

  const removeFile = (i: number) => {
    setFiles(prev => prev.filter((_, idx) => idx !== i))
    setMergedUrl('')
  }

  const merge = async () => {
    if (files.length < 2) return
    setLoading(true)
    try {
      const merged = await PDFDocument.create()
      for (const f of files) {
        const src = await PDFDocument.load(f.data)
        const pages = await merged.copyPages(src, src.getPageIndices())
        pages.forEach(p => merged.addPage(p))
      }
      const bytes = await merged.save()
      const blob = new Blob([bytes], { type: 'application/pdf' })
      setMergedUrl(URL.createObjectURL(blob))
    } catch {}
    setLoading(false)
  }

  const totalPages = files.reduce((s, f) => s + f.pages, 0)
  const formatSize = (b: number) => b < 1024 * 1024 ? (b / 1024).toFixed(1) + ' KB' : (b / 1024 / 1024).toFixed(2) + ' MB'

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔗 PDF {locale === 'zh' ? '合并工具' : locale === 'ja' ? '結合ツール' : locale === 'ko' ? '병합 도구' : locale === 'es' ? 'Fusionar' : 'Merge Tool'}</h1>
      <p className="text-gray-500 mb-8">{l.hint}</p>

      <div onClick={() => fileRef.current?.click()}
        onDrop={e => { e.preventDefault(); if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files) }}
        onDragOver={e => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition mb-6">
        <p className="text-gray-500 text-lg">{l.upload}</p>
        <p className="text-xs text-gray-400 mt-1">PDF</p>
        <input ref={fileRef} type="file" accept=".pdf" multiple className="hidden" onChange={e => { if (e.target.files) addFiles(e.target.files) }} />
      </div>

      {files.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">{l.files} ({files.length})</span>
            <span className="text-xs text-gray-400">{l.total}: {totalPages}</span>
          </div>
          <div className="space-y-2">
            {files.map((f, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 truncate">{f.name}</p>
                  <p className="text-xs text-gray-400">{f.pages} pages · {formatSize(f.size)}</p>
                </div>
                <button onClick={() => removeFile(i)} className="text-xs text-red-400 hover:text-red-600 ml-2">{l.remove}</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {files.length >= 2 && !mergedUrl && (
        <button onClick={merge} disabled={loading}
          className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 transition mb-4">
          {loading ? l.merging : l.merge}
        </button>
      )}

      {mergedUrl && (
        <a href={mergedUrl} download="merged.pdf"
          className="block w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition text-center">
          {l.download}
        </a>
      )}
    </main>
  )
}
