'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '字体预览器', desc: '输入文本，选择不同字体预览效果，可调字号、颜色、行高', inputText: '预览文本', font: '字体', size: '字号', color: '颜色', lineHeight: '行高', webSafe: 'Web安全字体', google: 'Google字体', preview: '预览效果' },
  en: { title: 'Font Preview', desc: 'Preview text with different fonts, adjustable size, color and line-height', inputText: 'Preview Text', font: 'Font', size: 'Size', color: 'Color', lineHeight: 'Line Height', webSafe: 'Web Safe Fonts', google: 'Google Fonts', preview: 'Preview' },
  ja: { title: 'フォントプレビュー', desc: 'テキストを入力し、フォント・サイズ・色・行間を調整してプレビュー', inputText: 'プレビューテキスト', font: 'フォント', size: 'サイズ', color: '色', lineHeight: '行間', webSafe: 'Webセーフフォント', google: 'Googleフォント', preview: 'プレビュー' },
  ko: { title: '글꼴 미리보기', desc: '텍스트를 입력하고 다양한 글꼴, 크기, 색상, 줄 높이로 미리보기', inputText: '미리보기 텍스트', font: '글꼴', size: '크기', color: '색상', lineHeight: '줄 높이', webSafe: '웹 안전 글꼴', google: 'Google 글꼴', preview: '미리보기' },
  es: { title: 'Vista Previa de Fuentes', desc: 'Previsualiza texto con diferentes fuentes, tamaño, color y altura de línea', inputText: 'Texto de Vista Previa', font: 'Fuente', size: 'Tamaño', color: 'Color', lineHeight: 'Altura de Línea', webSafe: 'Fuentes Web Safe', google: 'Google Fonts', preview: 'Vista Previa' },
}

const webSafeFonts = ['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Courier New', 'Verdana', 'Trebuchet MS', 'Impact', 'Comic Sans MS', 'Palatino Linotype']
const googleFonts = ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 'Inter', 'Nunito', 'Playfair Display', 'Merriweather', 'Fira Code']

export default function FontPreviewPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog. 你好世界 🌍')
  const [selectedFont, setSelectedFont] = useState('Arial')
  const [fontSize, setFontSize] = useState(24)
  const [fontColor, setFontColor] = useState('#1F2937')
  const [lineHeight, setLineHeight] = useState(1.5)
  const [loadedGoogleFonts, setLoadedGoogleFonts] = useState<Set<string>>(new Set())

  const loadGoogleFont = (font: string) => {
    if (loadedGoogleFonts.has(font)) return
    const link = document.createElement('link')
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}&display=swap`
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    setLoadedGoogleFonts(prev => new Set(prev).add(font))
  }

  const selectFont = (font: string, isGoogle: boolean) => {
    if (isGoogle) loadGoogleFont(font)
    setSelectedFont(font)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔤 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">{u.inputText}</label>
          <textarea value={text} onChange={e => setText(e.target.value)} className="w-full border rounded-xl p-3 text-sm resize-none h-20 focus:ring-2 focus:ring-indigo-300 outline-none" />
          <div className="flex flex-wrap gap-4 mt-3 items-center">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">{u.size}:</label>
              <input type="range" min={10} max={72} value={fontSize} onChange={e => setFontSize(+e.target.value)} className="w-28" />
              <span className="text-sm font-mono w-10">{fontSize}px</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">{u.lineHeight}:</label>
              <input type="range" min={1} max={3} step={0.1} value={lineHeight} onChange={e => setLineHeight(+e.target.value)} className="w-28" />
              <span className="text-sm font-mono w-8">{lineHeight}</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">{u.color}:</label>
              <input type="color" value={fontColor} onChange={e => setFontColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.webSafe}</h3>
            <div className="flex flex-col gap-1">
              {webSafeFonts.map(f => (
                <button key={f} onClick={() => selectFont(f, false)} className={`text-left px-3 py-2 rounded-lg text-sm transition ${selectedFont === f ? 'bg-indigo-50 text-indigo-700 font-medium' : 'hover:bg-gray-50 text-gray-600'}`} style={{ fontFamily: f }}>{f}</button>
              ))}
            </div>
            <h3 className="font-semibold text-gray-800 mb-3 mt-5">{u.google}</h3>
            <div className="flex flex-col gap-1">
              {googleFonts.map(f => (
                <button key={f} onClick={() => selectFont(f, true)} className={`text-left px-3 py-2 rounded-lg text-sm transition ${selectedFont === f ? 'bg-indigo-50 text-indigo-700 font-medium' : 'hover:bg-gray-50 text-gray-600'}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-1">{u.preview}</h3>
            <p className="text-xs text-gray-400 mb-3">{selectedFont} · {fontSize}px · {lineHeight}</p>
            <div className="border rounded-xl p-6 min-h-[300px] break-words" style={{ fontFamily: `'${selectedFont}', sans-serif`, fontSize: `${fontSize}px`, color: fontColor, lineHeight }}>
              {text || '...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
