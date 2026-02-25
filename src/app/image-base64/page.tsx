'use client'
import { useState, useRef } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { upload: '📁 选择图片或拖拽到此处', formats: '支持 PNG, JPG, GIF, SVG, WebP', toBase64: '图片 → Base64', toImage: 'Base64 → 图片', inputPh: '粘贴Base64字符串...', preview: '预览', fileInfo: '文件信息', name: '文件名', size: '大小', type: '类型', length: 'Base64长度' },
  en: { upload: '📁 Select image or drag & drop', formats: 'Supports PNG, JPG, GIF, SVG, WebP', toBase64: 'Image → Base64', toImage: 'Base64 → Image', inputPh: 'Paste Base64 string...', preview: 'Preview', fileInfo: 'File Info', name: 'Filename', size: 'Size', type: 'Type', length: 'Base64 Length' },
  ja: { upload: '📁 画像を選択またはドラッグ', formats: 'PNG, JPG, GIF, SVG, WebP対応', toBase64: '画像 → Base64', toImage: 'Base64 → 画像', inputPh: 'Base64文字列を貼り付け...', preview: 'プレビュー', fileInfo: 'ファイル情報', name: 'ファイル名', size: 'サイズ', type: 'タイプ', length: 'Base64長さ' },
  ko: { upload: '📁 이미지 선택 또는 드래그', formats: 'PNG, JPG, GIF, SVG, WebP 지원', toBase64: '이미지 → Base64', toImage: 'Base64 → 이미지', inputPh: 'Base64 문자열 붙여넣기...', preview: '미리보기', fileInfo: '파일 정보', name: '파일명', size: '크기', type: '유형', length: 'Base64 길이' },
  es: { upload: '📁 Seleccionar imagen o arrastrar', formats: 'Soporta PNG, JPG, GIF, SVG, WebP', toBase64: 'Imagen → Base64', toImage: 'Base64 → Imagen', inputPh: 'Pegar cadena Base64...', preview: 'Vista previa', fileInfo: 'Info del archivo', name: 'Nombre', size: 'Tamaño', type: 'Tipo', length: 'Longitud Base64' },
}

export default function ImageBase64Page() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const fileRef = useRef<HTMLInputElement>(null)
  const [mode, setMode] = useState<'toBase64'|'toImage'>('toBase64')
  const [base64, setBase64] = useState('')
  const [preview, setPreview] = useState('')
  const [fileInfo, setFileInfo] = useState<{name:string;size:string;type:string}|null>(null)

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setBase64(result)
      setPreview(result)
      setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) + ' KB', type: file.type })
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) handleFile(file)
  }

  const decodeBase64 = () => {
    try {
      const src = base64.startsWith('data:') ? base64 : `data:image/png;base64,${base64}`
      setPreview(src)
    } catch { setPreview('') }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🖼️ {locale === 'zh' ? '图片Base64转换' : locale === 'ja' ? '画像Base64変換' : locale === 'ko' ? '이미지 Base64 변환' : locale === 'es' ? 'Imagen Base64' : 'Image Base64 Converter'}</h1>
      <p className="text-gray-500 mb-8">{l.formats}</p>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setMode('toBase64')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${mode === 'toBase64' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{l.toBase64}</button>
        <button onClick={() => setMode('toImage')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${mode === 'toImage' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{l.toImage}</button>
      </div>

      {mode === 'toBase64' ? (
        <>
          <div onClick={() => fileRef.current?.click()} onDrop={handleDrop} onDragOver={e => e.preventDefault()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition mb-4">
            <p className="text-gray-500">{l.upload}</p>
            <p className="text-xs text-gray-400 mt-1">{l.formats}</p>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }} />
          </div>
          {fileInfo && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
              <span className="text-sm font-medium text-gray-700 block mb-2">{l.fileInfo}</span>
              <div className="text-sm text-gray-500 space-y-1">
                <p>{l.name}: {fileInfo.name}</p>
                <p>{l.size}: {fileInfo.size}</p>
                <p>{l.type}: {fileInfo.type}</p>
                <p>{l.length}: {base64.length.toLocaleString()}</p>
              </div>
            </div>
          )}
          {base64 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Base64</span>
                <button onClick={() => navigator.clipboard.writeText(base64)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
              </div>
              <textarea value={base64} readOnly rows={6} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 font-mono text-xs text-gray-700 resize-none" />
            </div>
          )}
        </>
      ) : (
        <>
          <textarea value={base64} onChange={e => setBase64(e.target.value)} rows={6} placeholder={l.inputPh}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none font-mono text-xs text-gray-700 mb-4" />
          <button onClick={decodeBase64} disabled={!base64.trim()} className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition mb-4">{ui.convert}</button>
        </>
      )}

      {preview && (
        <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-700 block mb-2">{l.preview}</span>
          <img src={preview} alt="preview" className="max-w-full max-h-80 mx-auto rounded-lg" />
        </div>
      )}
    </main>
  )
}
