'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'JSON↔XML互转', desc: '在JSON和XML格式之间互相转换', jsonToXml: 'JSON → XML', xmlToJson: 'XML → JSON', convert: '🔄 转换', input: '输入', output: '输出', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ 格式错误' },
  en: { title: 'JSON ↔ XML', desc: 'Convert between JSON and XML formats', jsonToXml: 'JSON → XML', xmlToJson: 'XML → JSON', convert: '🔄 Convert', input: 'Input', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Invalid format' },
  ja: { title: 'JSON↔XML変換', desc: 'JSONとXML形式を相互変換', jsonToXml: 'JSON → XML', xmlToJson: 'XML → JSON', convert: '🔄 変換', input: '入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ 無効な形式' },
  ko: { title: 'JSON↔XML 변환', desc: 'JSON과 XML 형식 간 변환', jsonToXml: 'JSON → XML', xmlToJson: 'XML → JSON', convert: '🔄 변환', input: '입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 잘못된 형식' },
  es: { title: 'JSON↔XML', desc: 'Convierte entre formatos JSON y XML', jsonToXml: 'JSON → XML', xmlToJson: 'XML → JSON', convert: '🔄 Convertir', input: 'Entrada', output: 'Salida', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ Formato inválido' },
}

const exJson = `{"bookstore":{"book":[{"@category":"fiction","title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925},{"@category":"tech","title":"Learning XML","author":"Erik T. Ray","year":2003}]}}`
const exXml = `<bookstore><book category="fiction"><title>The Great Gatsby</title><author>F. Scott Fitzgerald</author><year>1925</year></book><book category="tech"><title>Learning XML</title><author>Erik T. Ray</author><year>2003</year></book></bookstore>`

function jsonToXml(obj: unknown, rootName = 'root', indent = 0): string {
  const pad = '  '.repeat(indent)
  if (obj === null || obj === undefined) return `${pad}<${rootName}/>\n`
  if (typeof obj !== 'object') return `${pad}<${rootName}>${String(obj)}</${rootName}>\n`
  if (Array.isArray(obj)) return obj.map(item => jsonToXml(item, rootName, indent)).join('')
  const entries = Object.entries(obj as Record<string, unknown>)
  const attrs = entries.filter(([k]) => k.startsWith('@')).map(([k, v]) => ` ${k.slice(1)}="${v}"`).join('')
  const children = entries.filter(([k]) => !k.startsWith('@'))
  if (children.length === 0) return `${pad}<${rootName}${attrs}/>\n`
  let xml = `${pad}<${rootName}${attrs}>\n`
  for (const [key, val] of children) xml += jsonToXml(val, key, indent + 1)
  xml += `${pad}</${rootName}>\n`
  return xml
}

function xmlNodeToJson(node: Element): unknown {
  const obj: Record<string, unknown> = {}
  for (let i = 0; i < node.attributes.length; i++) {
    const attr = node.attributes[i]
    obj[`@${attr.name}`] = attr.value
  }
  const children = Array.from(node.children)
  if (children.length === 0) {
    const text = node.textContent || ''
    if (Object.keys(obj).length === 0) return isNaN(Number(text)) ? text : Number(text)
    obj['#text'] = isNaN(Number(text)) ? text : Number(text)
    return obj
  }
  const grouped: Record<string, unknown[]> = {}
  for (const child of children) {
    const name = child.tagName
    if (!grouped[name]) grouped[name] = []
    grouped[name].push(xmlNodeToJson(child))
  }
  for (const [key, val] of Object.entries(grouped)) {
    obj[key] = val.length === 1 ? val[0] : val
  }
  return obj
}

function xmlToJsonStr(xml: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'text/xml')
  const err = doc.querySelector('parsererror')
  if (err) throw new Error(err.textContent || 'Invalid XML')
  const root = doc.documentElement
  const result = { [root.tagName]: xmlNodeToJson(root) }
  return JSON.stringify(result, null, 2)
}

export default function JsonToXmlPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [mode, setMode] = useState<'j2x' | 'x2j'>('j2x')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const convert = () => {
    setError('')
    try {
      if (mode === 'j2x') {
        const obj = JSON.parse(input)
        const keys = Object.keys(obj)
        const rootName = keys.length === 1 ? keys[0] : 'root'
        const rootVal = keys.length === 1 ? obj[keys[0]] : obj
        setOutput('<?xml version="1.0" encoding="UTF-8"?>\n' + jsonToXml(rootVal, rootName))
      } else {
        setOutput(xmlToJsonStr(input))
      }
    } catch { setError(u.error) }
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
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button onClick={() => { setMode('j2x'); setOutput(''); setError('') }} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'j2x' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.jsonToXml}</button>
            <button onClick={() => { setMode('x2j'); setOutput(''); setError('') }} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'x2j' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.xmlToJson}</button>
          </div>
          <button onClick={convert} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.convert}</button>
          <button onClick={() => { setInput(mode === 'j2x' ? exJson : exXml); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input} ({mode === 'j2x' ? 'JSON' : 'XML'})</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === 'j2x' ? '{"key": "value"}' : '<root>...</root>'}
              className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output} ({mode === 'j2x' ? 'XML' : 'JSON'})</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}
