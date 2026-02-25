'use client'
import { useState, useRef, useEffect } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { input: '输入内容', inputPh: '输入网址、文本或任意内容...', size: '尺寸', download: '⬇️ 下载PNG', hint: '支持网址、文本、WiFi信息等' },
  en: { input: 'Content', inputPh: 'Enter URL, text or any content...', size: 'Size', download: '⬇️ Download PNG', hint: 'Supports URLs, text, WiFi info, etc.' },
  ja: { input: '内容', inputPh: 'URL、テキストなどを入力...', size: 'サイズ', download: '⬇️ PNGダウンロード', hint: 'URL、テキスト、WiFi情報に対応' },
  ko: { input: '내용', inputPh: 'URL, 텍스트 등 입력...', size: '크기', download: '⬇️ PNG 다운로드', hint: 'URL, 텍스트, WiFi 정보 지원' },
  es: { input: 'Contenido', inputPh: 'Ingrese URL, texto o cualquier contenido...', size: 'Tamaño', download: '⬇️ Descargar PNG', hint: 'Soporta URLs, texto, info WiFi, etc.' },
}

// Simple QR code using Google Charts API (no dependencies)
function getQRUrl(text: string, size: number) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&format=png`
}

export default function QRCodePage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [input, setInput] = useState('')
  const [size, setSize] = useState(256)
  const [qrUrl, setQrUrl] = useState('')

  const generate = () => {
    if (!input.trim()) return
    setQrUrl(getQRUrl(input, size))
  }

  const download = () => {
    if (!qrUrl) return
    const a = document.createElement('a')
    a.href = qrUrl
    a.download = 'qrcode.png'
    a.target = '_blank'
    a.click()
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📱 {locale === 'zh' ? '二维码生成器' : locale === 'ja' ? 'QRコード生成器' : locale === 'ko' ? 'QR코드 생성기' : locale === 'es' ? 'Generador QR' : 'QR Code Generator'}</h1>
      <p className="text-gray-500 mb-8">{l.hint}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.input}</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={3} placeholder={l.inputPh}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm text-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.size}: {size}px</label>
          <input type="range" min={128} max={512} step={64} value={size} onChange={e => setSize(+e.target.value)} className="w-full" />
        </div>
        <button onClick={generate} disabled={!input.trim()}
          className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{ui.generate}</button>
      </div>

      {qrUrl && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <img src={qrUrl} alt="QR Code" className="mx-auto rounded-lg mb-4" width={size} height={size} />
          <button onClick={download} className="px-6 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">{l.download}</button>
        </div>
      )}
    </main>
  )
}
