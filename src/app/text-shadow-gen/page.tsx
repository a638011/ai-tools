'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Text Shadow生成器', desc: '可视化调节文字阴影效果，实时预览，生成CSS代码', offsetX: 'X偏移(px)', offsetY: 'Y偏移(px)', blur: '模糊(px)', color: '阴影颜色', textColor: '文字颜色', bgColor: '背景颜色', previewText: '预览文本', preview: '预览', code: '生成代码', copy: '📋 复制', copied: '✅ 已复制', addLayer: '➕ 添加阴影层', removeLayer: '🗑️ 删除', layer: '阴影层' },
  en: { title: 'Text Shadow Generator', desc: 'Visually adjust text shadow, live preview, generate CSS code', offsetX: 'X Offset(px)', offsetY: 'Y Offset(px)', blur: 'Blur(px)', color: 'Shadow Color', textColor: 'Text Color', bgColor: 'Background', previewText: 'Preview Text', preview: 'Preview', code: 'Generated Code', copy: '📋 Copy', copied: '✅ Copied', addLayer: '➕ Add Layer', removeLayer: '🗑️ Remove', layer: 'Layer' },
  ja: { title: 'Text Shadowジェネレーター', desc: 'テキストシャドウを視覚的に調整、リアルタイムプレビュー', offsetX: 'Xオフセット(px)', offsetY: 'Yオフセット(px)', blur: 'ぼかし(px)', color: '影の色', textColor: '文字色', bgColor: '背景色', previewText: 'プレビューテキスト', preview: 'プレビュー', code: '生成コード', copy: '📋 コピー', copied: '✅ コピー済', addLayer: '➕ レイヤー追加', removeLayer: '🗑️ 削除', layer: 'レイヤー' },
  ko: { title: 'Text Shadow 생성기', desc: '텍스트 그림자를 시각적으로 조정하고 CSS 코드 생성', offsetX: 'X 오프셋(px)', offsetY: 'Y 오프셋(px)', blur: '블러(px)', color: '그림자 색상', textColor: '텍스트 색상', bgColor: '배경색', previewText: '미리보기 텍스트', preview: '미리보기', code: '생성된 코드', copy: '📋 복사', copied: '✅ 복사됨', addLayer: '➕ 레이어 추가', removeLayer: '🗑️ 삭제', layer: '레이어' },
  es: { title: 'Generador Text Shadow', desc: 'Ajusta visualmente la sombra de texto, vista previa en vivo, genera CSS', offsetX: 'X Offset(px)', offsetY: 'Y Offset(px)', blur: 'Desenfoque(px)', color: 'Color Sombra', textColor: 'Color Texto', bgColor: 'Fondo', previewText: 'Texto de Vista Previa', preview: 'Vista Previa', code: 'Código Generado', copy: '📋 Copiar', copied: '✅ Copiado', addLayer: '➕ Añadir Capa', removeLayer: '🗑️ Eliminar', layer: 'Capa' },
}

interface ShadowLayer { x: number; y: number; blur: number; color: string }

export default function TextShadowGenPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [layers, setLayers] = useState<ShadowLayer[]>([{ x: 2, y: 2, blur: 4, color: '#000000' }])
  const [textColor, setTextColor] = useState('#FFFFFF')
  const [bgColor, setBgColor] = useState('#1F2937')
  const [previewText, setPreviewText] = useState('Hello Shadow')
  const [copied, setCopied] = useState(false)

  const updateLayer = (i: number, field: keyof ShadowLayer, value: number | string) => {
    const next = [...layers]; next[i] = { ...next[i], [field]: value }; setLayers(next)
  }
  const addLayer = () => setLayers([...layers, { x: 2, y: 2, blur: 4, color: '#3B82F6' }])
  const removeLayer = (i: number) => { if (layers.length > 1) setLayers(layers.filter((_, j) => j !== i)) }

  const shadowValue = layers.map(l => `${l.x}px ${l.y}px ${l.blur}px ${l.color}`).join(', ')
  const cssCode = `text-shadow: ${shadowValue};`

  const copy = () => { navigator.clipboard.writeText(cssCode); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">💫 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.previewText}:</label><input type="text" value={previewText} onChange={e => setPreviewText(e.target.value)} className="border rounded-lg px-3 py-1 text-sm w-48" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.textColor}:</label><input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.bgColor}:</label><input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" /></div>
          </div>
          {layers.map((l, i) => (
            <div key={i} className="flex flex-wrap gap-3 items-center mb-2 p-2 bg-gray-50 rounded-lg">
              <span className="text-xs font-medium text-gray-500">{u.layer} {i + 1}</span>
              <div className="flex items-center gap-1"><label className="text-xs text-gray-500">X:</label><input type="range" min={-50} max={50} value={l.x} onChange={e => updateLayer(i, 'x', +e.target.value)} className="w-20" /><span className="text-xs font-mono w-8">{l.x}</span></div>
              <div className="flex items-center gap-1"><label className="text-xs text-gray-500">Y:</label><input type="range" min={-50} max={50} value={l.y} onChange={e => updateLayer(i, 'y', +e.target.value)} className="w-20" /><span className="text-xs font-mono w-8">{l.y}</span></div>
              <div className="flex items-center gap-1"><label className="text-xs text-gray-500">{u.blur}:</label><input type="range" min={0} max={50} value={l.blur} onChange={e => updateLayer(i, 'blur', +e.target.value)} className="w-20" /><span className="text-xs font-mono w-8">{l.blur}</span></div>
              <input type="color" value={l.color} onChange={e => updateLayer(i, 'color', e.target.value)} className="w-7 h-7 rounded cursor-pointer border-0" />
              {layers.length > 1 && <button onClick={() => removeLayer(i)} className="text-xs text-red-500 hover:text-red-700">{u.removeLayer}</button>}
            </div>
          ))}
          <button onClick={addLayer} className="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.addLayer}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.preview}</h3>
            <div className="border rounded-xl flex items-center justify-center min-h-[200px] p-8" style={{ backgroundColor: bgColor }}>
              <span className="text-5xl font-bold" style={{ color: textColor, textShadow: shadowValue }}>{previewText || '...'}</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">{u.code}</h3>
              <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>
            </div>
            <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm font-mono overflow-auto whitespace-pre-wrap">{cssCode}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
