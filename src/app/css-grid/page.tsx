'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'CSS Grid布局生成器', desc: '可视化设置Grid布局，实时预览，生成CSS代码', columns: '列数', rows: '行数', gap: '间距(px)', colTemplate: '列模板', rowTemplate: '行模板', preview: '预览', code: '生成代码', copy: '📋 复制', copied: '✅ 已复制', items: '子项数', unit: '单位', fr: 'fr', px: 'px', pct: '%' },
  en: { title: 'CSS Grid Generator', desc: 'Visually configure Grid layout, live preview, generate CSS code', columns: 'Columns', rows: 'Rows', gap: 'Gap (px)', colTemplate: 'Column Template', rowTemplate: 'Row Template', preview: 'Preview', code: 'Generated Code', copy: '📋 Copy', copied: '✅ Copied', items: 'Items', unit: 'Unit', fr: 'fr', px: 'px', pct: '%' },
  ja: { title: 'CSS Gridジェネレーター', desc: 'Gridレイアウトを視覚的に設定、リアルタイムプレビュー、CSSコード生成', columns: '列数', rows: '行数', gap: 'ギャップ(px)', colTemplate: '列テンプレート', rowTemplate: '行テンプレート', preview: 'プレビュー', code: '生成コード', copy: '📋 コピー', copied: '✅ コピー済', items: 'アイテム数', unit: '単位', fr: 'fr', px: 'px', pct: '%' },
  ko: { title: 'CSS Grid 생성기', desc: 'Grid 레이아웃을 시각적으로 설정하고 CSS 코드 생성', columns: '열 수', rows: '행 수', gap: '간격(px)', colTemplate: '열 템플릿', rowTemplate: '행 템플릿', preview: '미리보기', code: '생성된 코드', copy: '📋 복사', copied: '✅ 복사됨', items: '아이템 수', unit: '단위', fr: 'fr', px: 'px', pct: '%' },
  es: { title: 'Generador CSS Grid', desc: 'Configura visualmente el layout Grid, vista previa en vivo, genera código CSS', columns: 'Columnas', rows: 'Filas', gap: 'Gap (px)', colTemplate: 'Plantilla Columnas', rowTemplate: 'Plantilla Filas', preview: 'Vista Previa', code: 'Código Generado', copy: '📋 Copiar', copied: '✅ Copiado', items: 'Elementos', unit: 'Unidad', fr: 'fr', px: 'px', pct: '%' },
}

export default function CssGridPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [cols, setCols] = useState(3)
  const [rows, setRows] = useState(2)
  const [gap, setGap] = useState(10)
  const [colSizes, setColSizes] = useState<string[]>(['1fr', '1fr', '1fr'])
  const [rowSizes, setRowSizes] = useState<string[]>(['1fr', '1fr'])
  const [items, setItems] = useState(6)
  const [copied, setCopied] = useState(false)

  const updateCols = (n: number) => {
    setCols(n)
    setColSizes(Array.from({ length: n }, (_, i) => colSizes[i] || '1fr'))
    if (items < n * rows) setItems(n * rows)
  }
  const updateRows = (n: number) => {
    setRows(n)
    setRowSizes(Array.from({ length: n }, (_, i) => rowSizes[i] || '1fr'))
    if (items < cols * n) setItems(cols * n)
  }
  const setColSize = (i: number, v: string) => { const a = [...colSizes]; a[i] = v; setColSizes(a) }
  const setRowSize = (i: number, v: string) => { const a = [...rowSizes]; a[i] = v; setRowSizes(a) }

  const gridCss = `.container {
  display: grid;
  grid-template-columns: ${colSizes.slice(0, cols).join(' ')};
  grid-template-rows: ${rowSizes.slice(0, rows).join(' ')};
  gap: ${gap}px;
}`

  const copy = () => { navigator.clipboard.writeText(gridCss); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  const colors = ['#818CF8', '#34D399', '#F472B6', '#FBBF24', '#60A5FA', '#A78BFA', '#F87171', '#2DD4BF', '#FB923C', '#A3E635', '#E879F9', '#38BDF8']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.columns}:</label><input type="number" min={1} max={12} value={cols} onChange={e => updateCols(Math.max(1, +e.target.value))} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.rows}:</label><input type="number" min={1} max={12} value={rows} onChange={e => updateRows(Math.max(1, +e.target.value))} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.gap}:</label><input type="number" min={0} max={50} value={gap} onChange={e => setGap(+e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" /></div>
            <div className="flex items-center gap-2"><label className="text-sm text-gray-600">{u.items}:</label><input type="number" min={1} max={24} value={items} onChange={e => setItems(+e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-sm text-center" /></div>
          </div>
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="text-sm text-gray-600">{u.colTemplate}:</span>
            {Array.from({ length: cols }).map((_, i) => (
              <input key={`c${i}`} value={colSizes[i] || '1fr'} onChange={e => setColSize(i, e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-xs text-center font-mono" />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm text-gray-600">{u.rowTemplate}:</span>
            {Array.from({ length: rows }).map((_, i) => (
              <input key={`r${i}`} value={rowSizes[i] || '1fr'} onChange={e => setRowSize(i, e.target.value)} className="w-16 border rounded-lg px-2 py-1 text-xs text-center font-mono" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.preview}</h3>
            <div className="border rounded-xl p-4 bg-gray-50 min-h-[250px]" style={{ display: 'grid', gridTemplateColumns: colSizes.slice(0, cols).join(' '), gridTemplateRows: rowSizes.slice(0, rows).join(' '), gap: `${gap}px` }}>
              {Array.from({ length: items }).map((_, i) => (
                <div key={i} className="rounded-lg flex items-center justify-center text-white font-bold text-sm min-h-[50px]" style={{ backgroundColor: colors[i % colors.length] }}>{i + 1}</div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">{u.code}</h3>
              <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>
            </div>
            <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm font-mono overflow-auto whitespace-pre-wrap">{gridCss}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
