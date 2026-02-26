'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '摩尔斯电码转换', desc: '文本与摩尔斯电码互相转换', textToMorse: '文本 → 摩尔斯', morseToText: '摩尔斯 → 文本', input: '输入', output: '输出结果', convert: '🔄 转换', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ 格式错误', play: '🔊 播放', refTable: '对照表', char: '字符', morse: '电码' },
  en: { title: 'Morse Code', desc: 'Convert between text and Morse code', textToMorse: 'Text → Morse', morseToText: 'Morse → Text', input: 'Input', output: 'Output', convert: '🔄 Convert', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Invalid format', play: '🔊 Play', refTable: 'Reference Table', char: 'Char', morse: 'Morse' },
  ja: { title: 'モールス信号', desc: 'テキストとモールス信号の相互変換', textToMorse: 'テキスト → モールス', morseToText: 'モールス → テキスト', input: '入力', output: '出力', convert: '🔄 変換', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ 無効な形式', play: '🔊 再生', refTable: '対照表', char: '文字', morse: '信号' },
  ko: { title: '모스 부호', desc: '텍스트와 모스 부호 상호 변환', textToMorse: '텍스트 → 모스', morseToText: '모스 → 텍스트', input: '입력', output: '출력', convert: '🔄 변환', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 잘못된 형식', play: '🔊 재생', refTable: '대조표', char: '문자', morse: '부호' },
  es: { title: 'Código Morse', desc: 'Convierte entre texto y código Morse', textToMorse: 'Texto → Morse', morseToText: 'Morse → Texto', input: 'Entrada', output: 'Resultado', convert: '🔄 Convertir', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ Formato inválido', play: '🔊 Reproducir', refTable: 'Tabla de Referencia', char: 'Car', morse: 'Morse' },
}

const MORSE_MAP: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
  '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
  '$': '...-..-', '@': '.--.-.',
}

const REVERSE_MORSE: Record<string, string> = Object.fromEntries(Object.entries(MORSE_MAP).map(([k, v]) => [v, k]))

function textToMorse(text: string): string {
  return text.toUpperCase().split('').map(ch => {
    if (ch === ' ') return '/'
    return MORSE_MAP[ch] || ''
  }).filter(Boolean).join(' ')
}

function morseToText(morse: string): string {
  return morse.split(/\s*\/\s*/).map(word =>
    word.trim().split(/\s+/).map(code => REVERSE_MORSE[code] || '').join('')
  ).join(' ')
}

const refEntries = Object.entries(MORSE_MAP)

export default function MorseCodePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'toMorse' | 'toText'>('toMorse')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const [showTable, setShowTable] = useState(false)

  const convert = () => {
    setError('')
    try {
      if (!input.trim()) { setOutput(''); return }
      if (mode === 'toMorse') {
        setOutput(textToMorse(input))
      } else {
        const result = morseToText(input)
        if (!result.trim()) { setError(u.error); setOutput(''); return }
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
        <h1 className="text-3xl font-bold mb-1">📡 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            <button onClick={() => setMode('toMorse')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'toMorse' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>{u.textToMorse}</button>
            <button onClick={() => setMode('toText')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'toText' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>{u.morseToText}</button>
          </div>
          <button onClick={convert} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.convert}</button>
          <button onClick={() => setShowTable(!showTable)} className="px-4 py-2 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-xl text-sm transition">{u.refTable}</button>
          <button onClick={() => { setInput(mode === 'toMorse' ? 'Hello World' : '.... . .-.. .-.. --- / .-- --- .-. .-.. -..'); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === 'toMorse' ? 'Hello World' : '.... . .-.. .-.. --- / .-- --- .-. .-.. -..'} className="w-full h-48 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-48 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>

        {showTable && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">{u.refTable}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {refEntries.map(([ch, morse]) => (
                <div key={ch} className="bg-gray-50 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-indigo-700">{ch}</div>
                  <div className="text-xs font-mono text-gray-500 tracking-wider">{morse}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}