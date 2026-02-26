'use client'
import { useState, useRef } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'SVG编辑器', desc: '在线编辑SVG代码并实时预览', code: 'SVG代码', preview: '预览', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', download: '⬇ 下载SVG', downloadPng: '⬇ 下载PNG', loadExample: '加载示例', presets: '预设图形', size: '画布大小' },
  en: { title: 'SVG Editor', desc: 'Edit SVG code online with live preview', code: 'SVG Code', preview: 'Preview', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', download: '⬇ Download SVG', downloadPng: '⬇ Download PNG', loadExample: 'Load Example', presets: 'Presets', size: 'Canvas Size' },
  ja: { title: 'SVGエディタ', desc: 'SVGコードをオンラインで編集・プレビュー', code: 'SVGコード', preview: 'プレビュー', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', download: '⬇ SVGダウンロード', downloadPng: '⬇ PNGダウンロード', loadExample: '例を読込', presets: 'プリセット', size: 'キャンバスサイズ' },
  ko: { title: 'SVG 편집기', desc: 'SVG 코드 온라인 편집 및 실시간 미리보기', code: 'SVG 코드', preview: '미리보기', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', download: '⬇ SVG 다운로드', downloadPng: '⬇ PNG 다운로드', loadExample: '예제 로드', presets: '프리셋', size: '캔버스 크기' },
  es: { title: 'Editor SVG', desc: 'Edita código SVG en línea con vista previa', code: 'Código SVG', preview: 'Vista Previa', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', download: '⬇ Descargar SVG', downloadPng: '⬇ Descargar PNG', loadExample: 'Cargar Ejemplo', presets: 'Presets', size: 'Tamaño' },
}

const presets: Record<string, string> = {
  circle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea"/>
      <stop offset="100%" style="stop-color:#764ba2"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="80" fill="url(#g1)" />
  <circle cx="100" cy="100" r="60" fill="none" stroke="white" stroke-width="3" opacity="0.5"/>
</svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <polygon points="100,20 120,75 180,75 130,110 150,170 100,135 50,170 70,110 20,75 80,75"
    fill="#fbbf24" stroke="#f59e0b" stroke-width="3" stroke-linejoin="round"/>
</svg>`,
  logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <rect x="20" y="20" width="160" height="160" rx="30" fill="#4f46e5"/>
  <text x="100" y="115" text-anchor="middle" font-size="72" font-weight="bold" fill="white" font-family="sans-serif">AI</text>
</svg>`,
  wave: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <linearGradient id="wg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#3b82f6"/>
    </linearGradient>
  </defs>
  <path d="M0,100 C50,50 100,150 150,100 C200,50 250,150 300,100 C350,50 400,150 400,100 L400,200 L0,200 Z" fill="url(#wg)" opacity="0.8"/>
  <path d="M0,120 C60,80 120,160 180,120 C240,80 300,160 360,120 L400,120 L400,200 L0,200 Z" fill="url(#wg)" opacity="0.5"/>
</svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M100,180 C60,140 10,110 10,70 C10,40 35,20 65,20 C85,20 95,35 100,45 C105,35 115,20 135,20 C165,20 190,40 190,70 C190,110 140,140 100,180Z"
    fill="#ef4444"/>
</svg>`,
}

export default function SvgEditorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [code, setCode] = useState(presets.circle)
  const [copied, setCopied] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  const downloadSVG = () => {
    const blob = new Blob([code], { type: 'image/svg+xml' })
    const link = document.createElement('a')
    link.download = 'image.svg'
    link.href = URL.createObjectURL(blob)
    link.click()
    URL.revokeObjectURL(link.href)
  }

  const downloadPNG = () => {
    const svgBlob = new Blob([code], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 512; canvas.height = 512
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, 512, 512)
      const link = document.createElement('a')
      link.download = 'image.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🎨 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={downloadSVG} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-sm">{u.download}</button>
          <button onClick={downloadPNG} className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition text-sm">{u.downloadPng}</button>
          <button onClick={copy} className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition text-sm">{copied ? u.copied : u.copy}</button>
          <button onClick={() => { setCode(''); }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">{u.presets}</div>
          <div className="flex gap-2">
            {Object.entries(presets).map(([name, svg]) => (
              <button key={name} onClick={() => setCode(svg)}
                className="w-12 h-12 rounded-xl border border-gray-200 hover:border-indigo-300 transition overflow-hidden bg-white p-1"
                title={name}>
                <div dangerouslySetInnerHTML={{ __html: svg }} className="w-full h-full [&>svg]:w-full [&>svg]:h-full" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.code}</h3>
            <textarea value={code} onChange={e => setCode(e.target.value)} placeholder='<svg>...</svg>'
              className="w-full h-[400px] border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.preview}</h3>
            <div ref={previewRef} className="border-2 border-dashed border-gray-200 rounded-xl p-4 min-h-[400px] flex items-center justify-center bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23f0f0f0%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23f0f0f0%22%2F%3E%3C%2Fsvg%3E')]">
              <div dangerouslySetInnerHTML={{ __html: code }} className="max-w-full max-h-[380px] [&>svg]:max-w-full [&>svg]:max-h-[380px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
