'use client'
import { useState, useRef, useEffect } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Favicon生成器', desc: '在线生成网站Favicon图标，支持文字/Emoji/上传图片', text: '文字/Emoji', bgColor: '背景色', textColor: '文字颜色', fontSize: '字号', borderRadius: '圆角', size: '尺寸', download: '⬇ 下载', downloadAll: '⬇ 下载全部尺寸', preview: '预览', upload: '上传图片', uploadHint: '点击或拖拽上传图片', tab_text: '文字', tab_upload: '上传图片', code: 'HTML代码', copy: '📋 复制', copied: '✅ 已复制', reset: '重置', presets: '快速选择', shape: '形状', circle: '圆形', rounded: '圆角', square: '方形' },
  en: { title: 'Favicon Generator', desc: 'Generate website favicons online with text, emoji, or image upload', text: 'Text/Emoji', bgColor: 'Background', textColor: 'Text Color', fontSize: 'Font Size', borderRadius: 'Radius', size: 'Size', download: '⬇ Download', downloadAll: '⬇ Download All Sizes', preview: 'Preview', upload: 'Upload Image', uploadHint: 'Click or drag to upload', tab_text: 'Text', tab_upload: 'Upload', code: 'HTML Code', copy: '📋 Copy', copied: '✅ Copied', reset: 'Reset', presets: 'Quick Pick', shape: 'Shape', circle: 'Circle', rounded: 'Rounded', square: 'Square' },
  ja: { title: 'Favicon生成器', desc: 'テキスト・絵文字・画像からFaviconを生成', text: 'テキスト/絵文字', bgColor: '背景色', textColor: '文字色', fontSize: 'フォントサイズ', borderRadius: '角丸', size: 'サイズ', download: '⬇ ダウンロード', downloadAll: '⬇ 全サイズダウンロード', preview: 'プレビュー', upload: '画像アップロード', uploadHint: 'クリックまたはドラッグ', tab_text: 'テキスト', tab_upload: 'アップロード', code: 'HTMLコード', copy: '📋 コピー', copied: '✅ コピー済', reset: 'リセット', presets: 'クイック選択', shape: '形状', circle: '円形', rounded: '角丸', square: '四角' },
  ko: { title: 'Favicon 생성기', desc: '텍스트, 이모지, 이미지로 Favicon 생성', text: '텍스트/이모지', bgColor: '배경색', textColor: '글자색', fontSize: '글자 크기', borderRadius: '둥글기', size: '크기', download: '⬇ 다운로드', downloadAll: '⬇ 전체 크기 다운로드', preview: '미리보기', upload: '이미지 업로드', uploadHint: '클릭 또는 드래그', tab_text: '텍스트', tab_upload: '업로드', code: 'HTML 코드', copy: '📋 복사', copied: '✅ 복사됨', reset: '초기화', presets: '빠른 선택', shape: '모양', circle: '원형', rounded: '둥근', square: '사각' },
  es: { title: 'Generador Favicon', desc: 'Genera favicons con texto, emoji o imagen', text: 'Texto/Emoji', bgColor: 'Fondo', textColor: 'Color Texto', fontSize: 'Tamaño', borderRadius: 'Radio', size: 'Tamaño', download: '⬇ Descargar', downloadAll: '⬇ Descargar Todos', preview: 'Vista Previa', upload: 'Subir Imagen', uploadHint: 'Clic o arrastra para subir', tab_text: 'Texto', tab_upload: 'Subir', code: 'Código HTML', copy: '📋 Copiar', copied: '✅ Copiado', reset: 'Reiniciar', presets: 'Selección Rápida', shape: 'Forma', circle: 'Círculo', rounded: 'Redondeado', square: 'Cuadrado' },
}

const emojiPresets = ['🚀','⚡','🔥','💎','🎯','🌟','💡','🎨','🛠️','📱','🤖','🧠','❤️','🌈','🍀','👾']
const sizes = [16, 32, 48, 64, 128, 192, 512]

export default function FaviconPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [tab, setTab] = useState<'text' | 'upload'>('text')
  const [text, setText] = useState('🚀')
  const [bg, setBg] = useState('#4f46e5')
  const [fg, setFg] = useState('#ffffff')
  const [fsize, setFsize] = useState(64)
  const [radius, setRadius] = useState(20)
  const [selSize, setSelSize] = useState(64)
  const [uploadImg, setUploadImg] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const draw = (size: number, canvas?: HTMLCanvasElement) => {
    const c = canvas || canvasRef.current
    if (!c) return
    c.width = size; c.height = size
    const ctx = c.getContext('2d')!
    ctx.clearRect(0, 0, size, size)

    // Background with radius
    const r = (radius / 100) * (size / 2)
    ctx.beginPath()
    ctx.moveTo(r, 0)
    ctx.lineTo(size - r, 0); ctx.quadraticCurveTo(size, 0, size, r)
    ctx.lineTo(size, size - r); ctx.quadraticCurveTo(size, size, size - r, size)
    ctx.lineTo(r, size); ctx.quadraticCurveTo(0, size, 0, size - r)
    ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0)
    ctx.closePath()
    ctx.fillStyle = bg
    ctx.fill()
    ctx.clip()

    if (tab === 'upload' && uploadImg) {
      const img = new Image()
      img.onload = () => { ctx.drawImage(img, 0, 0, size, size) }
      img.src = uploadImg
    } else {
      ctx.fillStyle = fg
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const fs = (fsize / 100) * size
      ctx.font = `bold ${fs}px sans-serif`
      ctx.fillText(text || '?', size / 2, size / 2 + fs * 0.05)
    }
  }

  useEffect(() => { draw(selSize) }, [text, bg, fg, fsize, radius, selSize, tab, uploadImg])

  const downloadFavicon = (size: number) => {
    const c = document.createElement('canvas')
    draw(size, c)
    setTimeout(() => {
      const link = document.createElement('a')
      link.download = `favicon-${size}x${size}.png`
      link.href = c.toDataURL('image/png')
      link.click()
    }, 100)
  }

  const downloadAll = () => { sizes.forEach((s, i) => setTimeout(() => downloadFavicon(s), i * 200)) }

  const handleUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = e => { setUploadImg(e.target?.result as string); setTab('upload') }
    reader.readAsDataURL(file)
  }

  const htmlCode = `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n<link rel="apple-touch-icon" sizes="192x192" href="/favicon-192x192.png">`

  const copyCode = () => { navigator.clipboard.writeText(htmlCode); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🎨 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex gap-2 mb-4">
                <button onClick={() => setTab('text')} className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${tab === 'text' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{u.tab_text}</button>
                <button onClick={() => setTab('upload')} className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${tab === 'upload' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{u.tab_upload}</button>
              </div>

              {tab === 'text' ? (
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{u.text}</div>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} maxLength={4} className="w-full border rounded-lg px-3 py-2 text-center text-2xl" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2">{u.presets}</div>
                    <div className="grid grid-cols-8 gap-1">
                      {emojiPresets.map(e => (
                        <button key={e} onClick={() => setText(e)} className={`text-xl p-1 rounded-lg hover:bg-indigo-50 transition ${text === e ? 'bg-indigo-100 ring-1 ring-indigo-300' : ''}`}>{e}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{u.fontSize}</span><span>{fsize}%</span></div>
                    <input type="range" min={20} max={100} value={fsize} onChange={e => setFsize(+e.target.value)} className="w-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{u.bgColor}</div>
                      <div className="flex items-center gap-2">
                        <input type="color" value={bg} onChange={e => setBg(e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                        <input type="text" value={bg} onChange={e => setBg(e.target.value)} className="flex-1 border rounded-lg px-2 py-1 text-xs font-mono" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{u.textColor}</div>
                      <div className="flex items-center gap-2">
                        <input type="color" value={fg} onChange={e => setFg(e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                        <input type="text" value={fg} onChange={e => setFg(e.target.value)} className="flex-1 border rounded-lg px-2 py-1 text-xs font-mono" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div onClick={() => fileRef.current?.click()}
                    onDragOver={e => e.preventDefault()} onDrop={e => { e.preventDefault(); if (e.dataTransfer.files[0]) handleUpload(e.dataTransfer.files[0]) }}
                    className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-300 hover:bg-indigo-50/50 transition">
                    {uploadImg ? <img src={uploadImg} alt="" className="w-20 h-20 mx-auto rounded-xl object-cover" /> : <div className="text-gray-400 text-sm">{u.uploadHint}</div>}
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => { if (e.target.files?.[0]) handleUpload(e.target.files[0]) }} />
                </div>
              )}

              <div className="mt-4">
                <div className="text-xs text-gray-500 mb-2">{u.shape}</div>
                <div className="flex gap-2">
                  {[{ l: u.square, v: 0 }, { l: u.rounded, v: 20 }, { l: u.circle, v: 100 }].map(s => (
                    <button key={s.v} onClick={() => setRadius(s.v)} className={`flex-1 py-1.5 rounded-lg text-xs transition ${radius === s.v ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{s.l}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview + Download */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">{u.preview}</h3>
              <div className="flex items-end gap-6 justify-center mb-6">
                {[16, 32, 48, 64, 128].map(s => (
                  <div key={s} className="text-center">
                    <canvas ref={s === selSize ? canvasRef : undefined} width={s} height={s}
                      className="mx-auto border border-gray-100 rounded" style={{ width: s > 64 ? 64 : s, height: s > 64 ? 64 : s }} />
                    <div className="text-[10px] text-gray-400 mt-1">{s}px</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {sizes.map(s => (
                  <button key={s} onClick={() => downloadFavicon(s)} className="px-3 py-1.5 bg-gray-100 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 rounded-lg text-xs transition">{s}x{s}</button>
                ))}
                <button onClick={downloadAll} className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-xs hover:bg-indigo-700 transition">{u.downloadAll}</button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{u.code}</h3>
                <button onClick={copyCode} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>
              </div>
              <pre className="bg-gray-50 rounded-xl p-4 text-xs overflow-x-auto whitespace-pre-wrap font-mono text-gray-700">{htmlCode}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
