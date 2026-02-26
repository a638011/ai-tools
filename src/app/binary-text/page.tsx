'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '二进制↔文本转换', desc: '文本与二进制互相转换', textToBin: '文本 → 二进制', binToText: '二进制 → 文本', input: '输入', output: '输出结果', convert: '🔄 转换', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ 格式错误', separator: '分隔符', space: '空格', none: '无', comma: '逗号' },
  en: { title: 'Binary ↔ Text', desc: 'Convert between text and binary', textToBin: 'Text → Binary', binToText: 'Binary → Text', input: 'Input', output: 'Output', convert: '🔄 Convert', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Invalid format', separator: 'Separator', space: 'Space', none: 'None', comma: 'Comma' },
  ja: { title: 'バイナリ↔テキスト', desc: 'テキストとバイナリの相互変換', textToBin: 'テキスト → バイナリ', binToText: 'バイナリ → テキスト', input: '入力', output: '出力', convert: '🔄 変換', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ 無効な形式', separator: '区切り', space: 'スペース', none: 'なし', comma: 'カンマ' },
  ko: { title: '바이너리↔텍스트', desc: '텍스트와 바이너리 상호 변환', textToBin: '텍스트 → 바이너리', binToText: '바이너리 → 텍스트', input: '입력', output: '출력', convert: '🔄 변환', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 잘못된 형식', separator: '구분자', space: '공백', none: '없음', comma: '쉼표' },
  es: { title: 'Binario ↔ Texto', desc: 'Convierte entre texto y binario', textToBin: 'Texto → Binario', binToText: 'Binario → Texto', input: 'Entrada', output: 'Resultado', convert: '🔄 Convertir', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ Formato inválido', separator: 'Separador', space: 'Espacio', none: 'Ninguno', comma: 'Coma' },
}

function textToBinary(text: string, sep: string): string {
  return Array.from(text).map(ch => ch.charCodeAt(0).toString(2).padStart(8, '0')).join(sep)
}

function binaryToText(bin: string): string {
  const cleaned = bin.replace(/[^01]/g, ' ').trim()
  const chunks = cleaned.split(/\s+/)
  let result = ''
  for (const chunk of chunks) {
    if (chunk.length === 0) continue
    // split into 8-bit groups
    for (let i = 0; i < chunk.length; i += 8) {
      const byte = chunk.slice(i, i + 8)
      if (byte.length === 8) {
        const code = parseInt(byte, 2)
        if (code > 0) result += String.fromCharCode(code)
      }
    }
  }
  return result
}

export default function BinaryTextPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'toBin' | 'toText'>('toBin')
  const [sep, setSep] = useState(' ')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const convert = () => {
    setError('')
    try {
      if (!input.trim()) { setOutput(''); return }
      if (mode === 'toBin') {
        setOutput(textToBinary(input, sep))
      } else {
        const result = binaryToText(input)
        if (!result) { setError(u.error); setOutput(''); return }
        setOutput(result)
      }
    } catch { setError(u.error); setOutput('') }
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">💻 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            <button onClick={() => setMode('toBin')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'toBin' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>{u.textToBin}</button>
            <button onClick={() => setMode('toText')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'toText' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>{u.binToText}</button>
          </div>
          <button onClick={convert} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.convert}</button>
          {mode === 'toBin' && (
            <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              {[{ v: ' ', l: u.space }, { v: '', l: u.none }, { v: ',', l: u.comma }].map(o => (
                <button key={o.l} onClick={() => setSep(o.v)} className={`px-3 py-1.5 rounded-lg text-xs transition ${sep === o.v ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>{o.l}</button>
              ))}
            </div>
          )}
          <button onClick={() => { setInput(mode === 'toBin' ? 'Hello World!' : '01001000 01100101 01101100 01101100 01101111'); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === 'toBin' ? 'Hello World' : '01001000 01100101 01101100 01101100 01101111'} className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}