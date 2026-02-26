'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Markdown表格生成器', desc: '可视化编辑表格，实时生成Markdown代码', copy: '📋 复制', copied: '✅ 已复制', output: 'Markdown代码', addRow: '➕ 添加行', addCol: '➕ 添加列', removeRow: '删除行', removeCol: '删除列', clear: '清空', alignLeft: '左对齐', alignCenter: '居中', alignRight: '右对齐', editor: '表格编辑', loadExample: '加载示例' },
  en: { title: 'Markdown Table Generator', desc: 'Visually edit tables and generate Markdown code in real time', copy: '📋 Copy', copied: '✅ Copied', output: 'Markdown Code', addRow: '➕ Add Row', addCol: '➕ Add Column', removeRow: 'Del Row', removeCol: 'Del Col', clear: 'Clear', alignLeft: 'Left', alignCenter: 'Center', alignRight: 'Right', editor: 'Table Editor', loadExample: 'Load Example' },
  ja: { title: 'Markdownテーブル生成', desc: 'テーブルを視覚的に編集してMarkdownコードを生成', copy: '📋 コピー', copied: '✅ コピー済', output: 'Markdownコード', addRow: '➕ 行追加', addCol: '➕ 列追加', removeRow: '行削除', removeCol: '列削除', clear: 'クリア', alignLeft: '左揃え', alignCenter: '中央', alignRight: '右揃え', editor: 'テーブル編集', loadExample: '例を読込' },
  ko: { title: 'Markdown 표 생성기', desc: '시각적으로 표를 편집하고 Markdown 코드 생성', copy: '📋 복사', copied: '✅ 복사됨', output: 'Markdown 코드', addRow: '➕ 행 추가', addCol: '➕ 열 추가', removeRow: '행 삭제', removeCol: '열 삭제', clear: '지우기', alignLeft: '왼쪽', alignCenter: '가운데', alignRight: '오른쪽', editor: '표 편집', loadExample: '예제 로드' },
  es: { title: 'Generador de Tablas Markdown', desc: 'Edita tablas visualmente y genera código Markdown en tiempo real', copy: '📋 Copiar', copied: '✅ Copiado', output: 'Código Markdown', addRow: '➕ Agregar Fila', addCol: '➕ Agregar Columna', removeRow: 'Eliminar Fila', removeCol: 'Eliminar Col', clear: 'Limpiar', alignLeft: 'Izquierda', alignCenter: 'Centro', alignRight: 'Derecha', editor: 'Editor de Tabla', loadExample: 'Cargar Ejemplo' },
}

type Align = 'left' | 'center' | 'right'

export default function MarkdownTablePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [headers, setHeaders] = useState<string[]>(['Header 1', 'Header 2', 'Header 3'])
  const [aligns, setAligns] = useState<Align[]>(['left', 'left', 'left'])
  const [rows, setRows] = useState<string[][]>([['', '', ''], ['', '', '']])
  const [copied, setCopied] = useState(false)

  const cols = headers.length

  const updateHeader = (ci: number, val: string) => { const h = [...headers]; h[ci] = val; setHeaders(h) }
  const updateCell = (ri: number, ci: number, val: string) => { const r = rows.map(r => [...r]); r[ri][ci] = val; setRows(r) }
  const toggleAlign = (ci: number) => {
    const order: Align[] = ['left', 'center', 'right']
    const next = [...aligns]; next[ci] = order[(order.indexOf(next[ci]) + 1) % 3]; setAligns(next)
  }

  const addRow = () => setRows([...rows, Array(cols).fill('')])
  const addCol = () => { setHeaders([...headers, `Header ${cols + 1}`]); setAligns([...aligns, 'left']); setRows(rows.map(r => [...r, ''])) }
  const removeRow = () => { if (rows.length > 1) setRows(rows.slice(0, -1)) }
  const removeCol = () => {
    if (cols > 1) { setHeaders(headers.slice(0, -1)); setAligns(aligns.slice(0, -1)); setRows(rows.map(r => r.slice(0, -1))) }
  }

  const loadExample = () => {
    setHeaders(['Name', 'Type', 'Description'])
    setAligns(['left', 'center', 'left'])
    setRows([['id', 'number', 'Unique identifier'], ['name', 'string', 'User display name'], ['email', 'string', 'Contact email'], ['active', 'boolean', 'Account status']])
  }

  const clearAll = () => { setHeaders(['Header 1', 'Header 2', 'Header 3']); setAligns(['left', 'left', 'left']); setRows([['', '', ''], ['', '', '']]) }

  const generateMarkdown = (): string => {
    const pad = (s: string, len: number) => s + ' '.repeat(Math.max(0, len - s.length))
    const colWidths = headers.map((h, ci) => Math.max(h.length, 3, ...rows.map(r => (r[ci] || '').length)))
    let md = '| ' + headers.map((h, i) => pad(h, colWidths[i])).join(' | ') + ' |\n'
    md += '| ' + aligns.map((a, i) => {
      const w = colWidths[i]
      if (a === 'center') return ':' + '-'.repeat(w - 2) + ':'
      if (a === 'right') return '-'.repeat(w - 1) + ':'
      return '-'.repeat(w)
    }).join(' | ') + ' |\n'
    for (const row of rows) {
      md += '| ' + row.map((c, i) => pad(c || '', colWidths[i])).join(' | ') + ' |\n'
    }
    return md.trim()
  }

  const markdown = generateMarkdown()
  const copy = () => { navigator.clipboard.writeText(markdown); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  const alignIcon = (a: Align) => a === 'left' ? '⬅' : a === 'center' ? '↔' : '➡'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📊 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={addRow} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-sm">{u.addRow}</button>
          <button onClick={addCol} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-sm">{u.addCol}</button>
          <button onClick={removeRow} className="px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition text-sm">{u.removeRow}</button>
          <button onClick={removeCol} className="px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition text-sm">{u.removeCol}</button>
          <button onClick={loadExample} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={clearAll} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.editor}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {headers.map((h, ci) => (
                      <th key={ci} className="border border-gray-200 p-0">
                        <input value={h} onChange={e => updateHeader(ci, e.target.value)} className="w-full p-2 text-sm font-semibold text-center bg-indigo-50 outline-none focus:bg-indigo-100 min-w-[100px]" />
                        <button onClick={() => toggleAlign(ci)} className="w-full text-xs py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-500 transition" title={u[`align${aligns[ci].charAt(0).toUpperCase() + aligns[ci].slice(1)}` as keyof typeof u]}>{alignIcon(aligns[ci])} {aligns[ci]}</button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="border border-gray-200 p-0">
                          <input value={cell} onChange={e => updateCell(ri, ci, e.target.value)} className="w-full p-2 text-sm outline-none focus:bg-blue-50 min-w-[100px]" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>
            </div>
            <textarea value={markdown} readOnly className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}
