'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'CSV查看器', desc: '粘贴CSV文本，解析为表格显示', input: '输入CSV', parse: '📊 解析', clear: '清空', loadExample: '加载示例', rows: '行', cols: '列', sortAsc: '↑ 升序', sortDesc: '↓ 降序', noData: '请输入CSV数据并点击解析', delimiter: '分隔符', comma: '逗号', tab: 'Tab', semicolon: '分号' },
  en: { title: 'CSV Viewer', desc: 'Paste CSV text and view as a table', input: 'Input CSV', parse: '📊 Parse', clear: 'Clear', loadExample: 'Load Example', rows: 'rows', cols: 'cols', sortAsc: '↑ Asc', sortDesc: '↓ Desc', noData: 'Enter CSV data and click Parse', delimiter: 'Delimiter', comma: 'Comma', tab: 'Tab', semicolon: 'Semicolon' },
  ja: { title: 'CSVビューア', desc: 'CSVテキストを貼り付けてテーブル表示', input: 'CSV入力', parse: '📊 解析', clear: 'クリア', loadExample: '例を読込', rows: '行', cols: '列', sortAsc: '↑ 昇順', sortDesc: '↓ 降順', noData: 'CSVデータを入力して解析をクリック', delimiter: '区切り文字', comma: 'カンマ', tab: 'Tab', semicolon: 'セミコロン' },
  ko: { title: 'CSV 뷰어', desc: 'CSV 텍스트를 붙여넣고 테이블로 보기', input: 'CSV 입력', parse: '📊 파싱', clear: '지우기', loadExample: '예제 로드', rows: '행', cols: '열', sortAsc: '↑ 오름차순', sortDesc: '↓ 내림차순', noData: 'CSV 데이터를 입력하고 파싱을 클릭하세요', delimiter: '구분자', comma: '쉼표', tab: 'Tab', semicolon: '세미콜론' },
  es: { title: 'Visor CSV', desc: 'Pega texto CSV y visualiza como tabla', input: 'Entrada CSV', parse: '📊 Analizar', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', rows: 'filas', cols: 'cols', sortAsc: '↑ Asc', sortDesc: '↓ Desc', noData: 'Ingresa datos CSV y haz clic en Analizar', delimiter: 'Delimitador', comma: 'Coma', tab: 'Tab', semicolon: 'Punto y coma' },
}

const exampleCSV = `Name,Age,City,Score
Alice,28,New York,95
Bob,35,London,87
Charlie,22,Tokyo,92
Diana,31,Paris,88
Eve,27,Berlin,91
Frank,40,Sydney,85`

function parseCSV(text: string, delim: string): string[][] {
  const rows: string[][] = []
  const lines = text.split('\n')
  for (const line of lines) {
    if (!line.trim()) continue
    const cells: string[] = []
    let current = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const ch = line[i]
      if (inQuotes) {
        if (ch === '"' && line[i + 1] === '"') { current += '"'; i++ }
        else if (ch === '"') inQuotes = false
        else current += ch
      } else {
        if (ch === '"') inQuotes = true
        else if (ch === delim) { cells.push(current.trim()); current = '' }
        else current += ch
      }
    }
    cells.push(current.trim())
    rows.push(cells)
  }
  return rows
}

export default function CsvViewerPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [headers, setHeaders] = useState<string[]>([])
  const [data, setData] = useState<string[][]>([])
  const [sortCol, setSortCol] = useState(-1)
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [delim, setDelim] = useState(',')

  const doParse = () => {
    const rows = parseCSV(input, delim)
    if (rows.length > 0) {
      setHeaders(rows[0])
      setData(rows.slice(1))
      setSortCol(-1)
    }
  }

  const doSort = (col: number) => {
    const newDir = sortCol === col && sortDir === 'asc' ? 'desc' : 'asc'
    setSortCol(col)
    setSortDir(newDir)
    const sorted = [...data].sort((a, b) => {
      const va = a[col] || '', vb = b[col] || ''
      const na = Number(va), nb = Number(vb)
      if (!isNaN(na) && !isNaN(nb)) return newDir === 'asc' ? na - nb : nb - na
      return newDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va)
    })
    setData(sorted)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📊 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Name,Age,City" className="w-full h-40 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none mb-3" />
          <div className="flex flex-wrap gap-2">
            <button onClick={doParse} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.parse}</button>
            <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              {[{ v: ',', l: u.comma }, { v: '\t', l: u.tab }, { v: ';', l: u.semicolon }].map(o => (
                <button key={o.l} onClick={() => setDelim(o.v)} className={`px-3 py-1.5 rounded-lg text-xs transition ${delim === o.v ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>{o.l}</button>
              ))}
            </div>
            <button onClick={() => { setInput(exampleCSV); setHeaders([]); setData([]) }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
            <button onClick={() => { setInput(''); setHeaders([]); setData([]); setSortCol(-1) }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {headers.length > 0 ? (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-500 mb-3">{data.length} {u.rows} × {headers.length} {u.cols}</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    {headers.map((h, i) => (
                      <th key={i} className="text-left p-3 cursor-pointer hover:bg-gray-50 transition select-none" onClick={() => doSort(i)}>
                        <span className="font-semibold">{h}</span>
                        {sortCol === i && <span className="ml-1 text-indigo-500">{sortDir === 'asc' ? '↑' : '↓'}</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, ri) => (
                    <tr key={ri} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      {headers.map((_, ci) => (
                        <td key={ci} className="p-3 font-mono text-gray-700">{row[ci] || ''}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center text-gray-400">{u.noData}</div>
        )}
      </div>
    </div>
  )
}