'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '文本反转', desc: '支持整体反转、按行反转、按单词反转', input: '输入文本', output: '输出结果', reverseAll: '🔄 整体反转', reverseLines: '📝 按行反转', reverseWords: '📖 按单词反转', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', descAll: '将整个文本的字符顺序反转', descLines: '保持行顺序，反转每行内的字符', descWords: '保持行顺序，反转每行内的单词顺序' },
  en: { title: 'Text Reverse', desc: 'Reverse text entirely, by line, or by word', input: 'Input Text', output: 'Output', reverseAll: '🔄 Reverse All', reverseLines: '📝 Reverse Lines', reverseWords: '📖 Reverse Words', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', descAll: 'Reverse all characters in the entire text', descLines: 'Reverse characters within each line', descWords: 'Reverse word order within each line' },
  ja: { title: 'テキスト反転', desc: '全体反転、行ごと反転、単語ごと反転', input: 'テキスト入力', output: '出力', reverseAll: '🔄 全体反転', reverseLines: '📝 行ごと反転', reverseWords: '📖 単語ごと反転', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', descAll: 'テキスト全体の文字順を反転', descLines: '各行内の文字を反転', descWords: '各行内の単語順を反転' },
  ko: { title: '텍스트 반전', desc: '전체 반전, 줄별 반전, 단어별 반전', input: '텍스트 입력', output: '출력', reverseAll: '🔄 전체 반전', reverseLines: '📝 줄별 반전', reverseWords: '📖 단어별 반전', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', descAll: '전체 텍스트의 문자 순서를 반전', descLines: '각 줄 내의 문자를 반전', descWords: '각 줄 내의 단어 순서를 반전' },
  es: { title: 'Invertir Texto', desc: 'Invierte texto completo, por línea o por palabra', input: 'Texto de entrada', output: 'Resultado', reverseAll: '🔄 Invertir Todo', reverseLines: '📝 Invertir Líneas', reverseWords: '📖 Invertir Palabras', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', descAll: 'Invierte todos los caracteres del texto', descLines: 'Invierte caracteres dentro de cada línea', descWords: 'Invierte el orden de palabras en cada línea' },
}

const exampleText = `Hello World
The quick brown fox
jumps over the lazy dog
1234567890`

export default function TextReversePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('')
  const [copied, setCopied] = useState(false)

  const reverseAll = () => {
    setMode('all')
    setOutput(input.split('').reverse().join(''))
  }
  const reverseLines = () => {
    setMode('lines')
    setOutput(input.split('\n').map(line => line.split('').reverse().join('')).join('\n'))
  }
  const reverseWords = () => {
    setMode('words')
    setOutput(input.split('\n').map(line => line.split(/\s+/).reverse().join(' ')).join('\n'))
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔄 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={reverseAll} className={`px-5 py-2.5 rounded-xl transition font-medium text-sm ${mode === 'all' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>{u.reverseAll}</button>
          <button onClick={reverseLines} className={`px-5 py-2.5 rounded-xl transition font-medium text-sm ${mode === 'lines' ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'}`}>{u.reverseLines}</button>
          <button onClick={reverseWords} className={`px-5 py-2.5 rounded-xl transition font-medium text-sm ${mode === 'words' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'}`}>{u.reverseWords}</button>
          <button onClick={() => { setInput(exampleText); setOutput(''); setMode('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setMode('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-indigo-50 rounded-xl p-3 text-center text-xs text-indigo-600">{u.descAll}</div>
          <div className="bg-emerald-50 rounded-xl p-3 text-center text-xs text-emerald-600">{u.descLines}</div>
          <div className="bg-amber-50 rounded-xl p-3 text-center text-xs text-amber-600">{u.descWords}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Hello World" className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
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