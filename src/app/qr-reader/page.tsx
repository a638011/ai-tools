'use client'
import { useState, useRef } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '二维码识别', desc: '上传二维码图片，识别并显示内容', upload: '📤 上传图片', dragHint: '拖拽图片到此处或点击上传', result: '识别结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', noResult: '未识别到二维码内容', scanning: '识别中...', supported: '支持 PNG、JPG、GIF 格式', openLink: '🔗 打开链接', preview: '图片预览' },
  en: { title: 'QR Reader', desc: 'Upload a QR code image to decode its content', upload: '📤 Upload Image', dragHint: 'Drag image here or click to upload', result: 'Result', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', noResult: 'No QR code detected', scanning: 'Scanning...', supported: 'Supports PNG, JPG, GIF', openLink: '🔗 Open Link', preview: 'Preview' },
  ja: { title: 'QRコードリーダー', desc: 'QRコード画像をアップロードして内容を読み取り', upload: '📤 画像アップロード', dragHint: '画像をドラッグまたはクリックしてアップロード', result: '読取結果', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', noResult: 'QRコードが検出されません', scanning: '読取中...', supported: 'PNG、JPG、GIF対応', openLink: '🔗 リンクを開く', preview: 'プレビュー' },
  ko: { title: 'QR 리더', desc: 'QR 코드 이미지를 업로드하여 내용 확인', upload: '📤 이미지 업로드', dragHint: '이미지를 드래그하거나 클릭하여 업로드', result: '결과', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', noResult: 'QR 코드를 감지할 수 없습니다', scanning: '스캔 중...', supported: 'PNG, JPG, GIF 지원', openLink: '🔗 링크 열기', preview: '미리보기' },
  es: { title: 'Lector QR', desc: 'Sube una imagen de código QR para decodificar', upload: '📤 Subir Imagen', dragHint: 'Arrastra una imagen aquí o haz clic', result: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', noResult: 'No se detectó código QR', scanning: 'Escaneando...', supported: 'Soporta PNG, JPG, GIF', openLink: '🔗 Abrir enlace', preview: 'Vista previa' },
}

export default function QrReaderPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [imageUrl, setImageUrl] = useState('')
  const [result, setResult] = useState('')
  const [scanning, setScanning] = useState(false)
  const [copied, setCopied] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const processImage = (file: File) => {
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setResult('')
    setScanning(true)

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) { setScanning(false); setResult(u.noResult); return }
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

      // Simple QR detection attempt using canvas
      // For production, use jsQR library. Here we do basic detection.
      try {
        // @ts-expect-error - jsQR may not be loaded
        if (typeof window.jsQR === 'function') {
          // @ts-expect-error - jsQR dynamic
          const code = window.jsQR(imageData.data, imageData.width, imageData.height)
          if (code) { setResult(code.data); setScanning(false); return }
        }
      } catch { /* fallback */ }

      // Fallback: try to load jsQR dynamically
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js'
      script.onload = () => {
        try {
          // @ts-expect-error - jsQR loaded dynamically
          const code = window.jsQR(imageData.data, imageData.width, imageData.height)
          setResult(code ? code.data : u.noResult)
        } catch { setResult(u.noResult) }
        setScanning(false)
      }
      script.onerror = () => { setResult(u.noResult); setScanning(false) }
      document.head.appendChild(script)
    }
    img.src = url
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) processImage(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) processImage(file)
  }

  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 1500) }
  const isUrl = /^https?:\/\//i.test(result)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📱 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
          <div
            onClick={() => fileRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition"
          >
            <div className="text-4xl mb-3">📷</div>
            <p className="text-gray-600 font-medium">{u.dragHint}</p>
            <p className="text-gray-400 text-sm mt-1">{u.supported}</p>
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />

          {imageUrl && (
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">{u.preview}</h3>
              <img src={imageUrl} alt="QR" className="max-h-64 rounded-xl border mx-auto" />
            </div>
          )}
        </div>

        {(scanning || result) && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.result}</h3>
            {scanning ? (
              <p className="text-indigo-500 animate-pulse">{u.scanning}</p>
            ) : (
              <div>
                <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm break-all mb-3">{result}</div>
                <div className="flex gap-2">
                  <button onClick={copy} className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition text-sm">{copied ? u.copied : u.copy}</button>
                  {isUrl && <a href={result} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition text-sm">{u.openLink}</a>}
                  <button onClick={() => { setImageUrl(''); setResult(''); if (fileRef.current) fileRef.current.value = '' }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
