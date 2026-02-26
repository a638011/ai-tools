'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'HTML格式化', desc: '在线格式化/压缩HTML文档', format: '🎨 格式化', minify: '📦 压缩', input: '输入HTML', output: '输出结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', indent: '缩进', spaces2: '2空格', spaces4: '4空格', tab: 'Tab' },
  en: { title: 'HTML Formatter', desc: 'Format or minify HTML documents online', format: '🎨 Format', minify: '📦 Minify', input: 'Input HTML', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', indent: 'Indent', spaces2: '2 Spaces', spaces4: '4 Spaces', tab: 'Tab' },
  ja: { title: 'HTMLフォーマッター', desc: 'HTMLドキュメントをオンラインで整形/圧縮', format: '🎨 整形', minify: '📦 圧縮', input: 'HTML入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', indent: 'インデント', spaces2: '2スペース', spaces4: '4スペース', tab: 'Tab' },
  ko: { title: 'HTML 포맷터', desc: 'HTML 문서 온라인 포맷/압축', format: '🎨 포맷', minify: '📦 압축', input: 'HTML 입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', indent: '들여쓰기', spaces2: '2칸', spaces4: '4칸', tab: 'Tab' },
  es: { title: 'Formateador HTML', desc: 'Formatea o minifica documentos HTML en línea', format: '🎨 Formatear', minify: '📦 Minificar', input: 'HTML de entrada', output: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', indent: 'Indentación', spaces2: '2 Espacios', spaces4: '4 Espacios', tab: 'Tab' },
}

const exampleHTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Example Page</title><style>body{margin:0;padding:20px;font-family:sans-serif}</style></head><body><header><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li></ul></nav></header><main><h1>Hello World</h1><p>This is an <strong>example</strong> HTML page.</p><div class="container"><img src="image.jpg" alt="Example"><br><input type="text" placeholder="Enter text"></div></main><footer><p>&copy; 2024</p></footer></body></html>`

const voidElements = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'])

function formatHTML(html: string, indentStr: string): string {
  let result = ''
  let indent = 0
  const raw = html.replace(/>\s+</g, '><').trim()
  let i = 0
  while (i < raw.length) {
    if (raw[i] === '<') {
      const end = raw.indexOf('>', i)
      if (end === -1) { result += raw.slice(i); break }
      const tag = raw.slice(i, end + 1)
      const isClose = tag.startsWith('</')
      const isSelfClose = tag.endsWith('/>') || tag.startsWith('<!')
      const tagNameMatch = tag.match(isClose ? /^<\/\s*([a-zA-Z][a-zA-Z0-9-]*)/ : /^<\s*([a-zA-Z][a-zA-Z0-9-]*)/)
      const tagName = tagNameMatch ? tagNameMatch[1].toLowerCase() : ''
      const isVoid = voidElements.has(tagName)

      if (isClose) {
        indent = Math.max(0, indent - 1)
        result += indentStr.repeat(indent) + tag + '\n'
      } else if (isSelfClose || isVoid) {
        result += indentStr.repeat(indent) + tag + '\n'
      } else {
        result += indentStr.repeat(indent) + tag + '\n'
        indent++
      }
      i = end + 1
    } else {
      const next = raw.indexOf('<', i)
      const text = (next === -1 ? raw.slice(i) : raw.slice(i, next)).trim()
      if (text) result += indentStr.repeat(indent) + text + '\n'
      i = next === -1 ? raw.length : next
    }
  }
  return result.trim()
}

function minifyHTML(html: string): string {
  return html.replace(/\n/g, '').replace(/\s{2,}/g, ' ').replace(/>\s+</g, '><').trim()
}

export default function HtmlFormatterPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [indentType, setIndentType] = useState('2')
  const [copied, setCopied] = useState(false)

  const getIndent = () => indentType === 'tab' ? '\t' : ' '.repeat(+indentType)
  const doFormat = () => setOutput(formatHTML(input, getIndent()))
  const doMinify = () => setOutput(minifyHTML(input))
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🌐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={doFormat} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.format}</button>
          <button onClick={doMinify} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.minify}</button>
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            {[{ v: '2', l: u.spaces2 }, { v: '4', l: u.spaces4 }, { v: 'tab', l: u.tab }].map(o => (
              <button key={o.v} onClick={() => setIndentType(o.v)} className={`px-3 py-1.5 rounded-lg text-xs transition ${indentType === o.v ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>{o.l}</button>
            ))}
          </div>
          <button onClick={() => { setInput(exampleHTML); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="<html>...</html>" className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}
