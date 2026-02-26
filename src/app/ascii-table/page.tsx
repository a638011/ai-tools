'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'ASCII码表', desc: '完整ASCII码表查询（0-127）', search: '搜索（十进制、十六进制、字符或描述）...', dec: '十进制', hex: '十六进制', char: '字符', desc2: '描述', control: '控制字符', printable: '可打印字符', all: '全部', showing: '显示' },
  en: { title: 'ASCII Table', desc: 'Complete ASCII table lookup (0-127)', search: 'Search (decimal, hex, char or description)...', dec: 'Dec', hex: 'Hex', char: 'Char', desc2: 'Description', control: 'Control', printable: 'Printable', all: 'All', showing: 'Showing' },
  ja: { title: 'ASCIIコード表', desc: '完全なASCIIテーブル検索（0-127）', search: '検索（10進数、16進数、文字または説明）...', dec: '10進', hex: '16進', char: '文字', desc2: '説明', control: '制御文字', printable: '印字可能', all: 'すべて', showing: '表示中' },
  ko: { title: 'ASCII 코드표', desc: '완전한 ASCII 테이블 조회 (0-127)', search: '검색 (10진수, 16진수, 문자 또는 설명)...', dec: '10진', hex: '16진', char: '문자', desc2: '설명', control: '제어 문자', printable: '인쇄 가능', all: '전체', showing: '표시' },
  es: { title: 'Tabla ASCII', desc: 'Consulta completa de tabla ASCII (0-127)', search: 'Buscar (decimal, hex, carácter o descripción)...', dec: 'Dec', hex: 'Hex', char: 'Car', desc2: 'Descripción', control: 'Control', printable: 'Imprimible', all: 'Todos', showing: 'Mostrando' },
}

const controlNames: Record<number, string> = {
  0:'NUL (Null)',1:'SOH (Start of Heading)',2:'STX (Start of Text)',3:'ETX (End of Text)',4:'EOT (End of Transmission)',5:'ENQ (Enquiry)',6:'ACK (Acknowledge)',7:'BEL (Bell)',8:'BS (Backspace)',9:'HT (Horizontal Tab)',10:'LF (Line Feed)',11:'VT (Vertical Tab)',12:'FF (Form Feed)',13:'CR (Carriage Return)',14:'SO (Shift Out)',15:'SI (Shift In)',16:'DLE (Data Link Escape)',17:'DC1 (Device Control 1)',18:'DC2 (Device Control 2)',19:'DC3 (Device Control 3)',20:'DC4 (Device Control 4)',21:'NAK (Negative Acknowledge)',22:'SYN (Synchronous Idle)',23:'ETB (End of Trans. Block)',24:'CAN (Cancel)',25:'EM (End of Medium)',26:'SUB (Substitute)',27:'ESC (Escape)',28:'FS (File Separator)',29:'GS (Group Separator)',30:'RS (Record Separator)',31:'US (Unit Separator)',32:'Space',127:'DEL (Delete)'
}

function getAsciiData() {
  const data: { dec: number; hex: string; char: string; desc: string; isControl: boolean }[] = []
  for (let i = 0; i <= 127; i++) {
    const hex = i.toString(16).toUpperCase().padStart(2, '0')
    let char = ''
    let desc = ''
    let isControl = false
    if (i <= 32 || i === 127) {
      isControl = true
      char = i <= 32 ? (i === 32 ? '␣' : `^${String.fromCharCode(64 + i)}`) : '^?'
      desc = controlNames[i] || ''
    } else {
      char = String.fromCharCode(i)
      if (i >= 48 && i <= 57) desc = `Digit ${char}`
      else if (i >= 65 && i <= 90) desc = `Uppercase ${char}`
      else if (i >= 97 && i <= 122) desc = `Lowercase ${char}`
      else desc = `Symbol ${char}`
    }
    data.push({ dec: i, hex, char, desc, isControl })
  }
  return data
}

const asciiData = getAsciiData()

export default function AsciiTablePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = asciiData.filter(item => {
    const matchFilter = filter === 'all' || (filter === 'control' && item.isControl) || (filter === 'printable' && !item.isControl)
    if (!matchFilter) return false
    if (!search) return true
    const s = search.toLowerCase()
    return String(item.dec).includes(s) || item.hex.toLowerCase().includes(s) || item.char.toLowerCase().includes(s) || item.desc.toLowerCase().includes(s)
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📟 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder={u.search} className="w-full border rounded-xl p-3 text-sm mb-4 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
        <div className="flex flex-wrap gap-2 mb-4">
          {[{ v: 'all', l: u.all }, { v: 'control', l: u.control }, { v: 'printable', l: u.printable }].map(f => (
            <button key={f.v} onClick={() => setFilter(f.v)} className={`px-4 py-2 rounded-xl text-sm transition ${filter === f.v ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}>{f.l}</button>
          ))}
          <span className="text-sm text-gray-400 flex items-center ml-2">{u.showing} {filtered.length}/128</span>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-600">{u.dec}</th>
                  <th className="text-left p-3 font-semibold text-gray-600">{u.hex}</th>
                  <th className="text-left p-3 font-semibold text-gray-600">{u.char}</th>
                  <th className="text-left p-3 font-semibold text-gray-600">{u.desc2}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(item => (
                  <tr key={item.dec} className="border-b border-gray-50 hover:bg-indigo-50/50 transition">
                    <td className="p-3 font-mono text-gray-700">{item.dec}</td>
                    <td className="p-3 font-mono text-indigo-600">0x{item.hex}</td>
                    <td className="p-3 font-mono text-lg">{item.isControl ? <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{item.char}</span> : <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">{item.char}</span>}</td>
                    <td className="p-3 text-gray-500">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}