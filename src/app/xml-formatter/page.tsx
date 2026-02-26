'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'XML格式化', desc: '在线格式化/压缩XML文档', format: '🎨 格式化', minify: '📦 压缩', input: '输入XML', output: '输出结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ XML格式错误', indent: '缩进', spaces2: '2空格', spaces4: '4空格', tab: 'Tab' },
  en: { title: 'XML Formatter', desc: 'Format or minify XML documents online', format: '🎨 Format', minify: '📦 Minify', input: 'Input XML', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Invalid XML', indent: 'Indent', spaces2: '2 Spaces', spaces4: '4 Spaces', tab: 'Tab' },
  ja: { title: 'XMLフォーマッター', desc: 'XMLドキュメントをオンラインで整形/圧縮', format: '🎨 整形', minify: '📦 圧縮', input: 'XML入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ 無効なXML', indent: 'インデント', spaces2: '2スペース', spaces4: '4スペース', tab: 'Tab' },
  ko: { title: 'XML 포맷터', desc: 'XML 문서 온라인 포맷/압축', format: '🎨 포맷', minify: '📦 압축', input: 'XML 입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 잘못된 XML', indent: '들여쓰기', spaces2: '2칸', spaces4: '4칸', tab: 'Tab' },
  es: { title: 'Formateador XML', desc: 'Formatea o minifica documentos XML en línea', format: '🎨 Formatear', minify: '📦 Minificar', input: 'XML de entrada', output: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ XML inválido', indent: 'Indentación', spaces2: '2 Espacios', spaces4: '4 Espacios', tab: 'Tab' },
}

const exampleXML = `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="fiction">
    <title lang="en">The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book category="tech">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
    <chapters>
      <chapter id="1">Introduction</chapter>
      <chapter id="2">Basic Syntax</chapter>
      <chapter id="3">Advanced Topics</chapter>
    </chapters>
  </book>
</bookstore>`

function formatXML(xml: string, indentStr: string): string {
  let formatted = ''
  let indent = 0
  const lines = xml.replace(/>\s*</g, '>\n<').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (trimmed.startsWith('</')) {
      indent = Math.max(0, indent - 1)
      formatted += indentStr.repeat(indent) + trimmed + '\n'
    } else if (trimmed.startsWith('<?')) {
      formatted += trimmed + '\n'
    } else if (trimmed.endsWith('/>')) {
      formatted += indentStr.repeat(indent) + trimmed + '\n'
    } else if (trimmed.includes('</') && trimmed.startsWith('<')) {
      formatted += indentStr.repeat(indent) + trimmed + '\n'
    } else if (trimmed.startsWith('<') && !trimmed.startsWith('</')) {
      formatted += indentStr.repeat(indent) + trimmed + '\n'
      indent++
    } else {
      formatted += indentStr.repeat(indent) + trimmed + '\n'
    }
  }
  return formatted.trim()
}

function minifyXML(xml: string): string {
  return xml.replace(/>\s+</g, '><').replace(/\s+/g, ' ').replace(/>\s+/g, '>').replace(/\s+</g, '<').replace(/^\s+|\s+$/g, '')
}

export default function XmlFormatterPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [indentType, setIndentType] = useState('2')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const getIndent = () => indentType === 'tab' ? '\t' : ' '.repeat(+indentType)

  const doFormat = () => {
    setError('')
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(input, 'text/xml')
      const err = doc.querySelector('parsererror')
      if (err) { setError(err.textContent || u.error); setOutput(''); return }
      setOutput(formatXML(input, getIndent()))
    } catch { setError(u.error); setOutput('') }
  }

  const doMinify = () => {
    setError('')
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(input, 'text/xml')
      const err = doc.querySelector('parsererror')
      if (err) { setError(err.textContent || u.error); setOutput(''); return }
      setOutput(minifyXML(input))
    } catch { setError(u.error); setOutput('') }
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📄 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={doFormat} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.format}</button>
          <button onClick={doMinify} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.minify}</button>
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            {[{ v: '2', l: u.spaces2 }, { v: '4', l: u.spaces4 }, { v: 'tab', l: u.tab }].map(o => (
              <button key={o.v} onClick={() => setIndentType(o.v)} className={`px-3 py-1.5 rounded-lg text-xs transition ${indentType === o.v ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>{o.l}</button>
            ))}
          </div>
          <button onClick={() => { setInput(exampleXML); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder='<?xml version="1.0"?><root>...</root>'
              className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
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
