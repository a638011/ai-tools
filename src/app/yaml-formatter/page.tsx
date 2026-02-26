'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'YAML格式化', desc: '在线格式化/压缩YAML文档', format: '🎨 格式化', minify: '📦 压缩', input: '输入YAML', output: '输出结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ YAML格式错误', indent: '缩进', spaces2: '2空格', spaces4: '4空格' },
  en: { title: 'YAML Formatter', desc: 'Format or minify YAML documents online', format: '🎨 Format', minify: '📦 Minify', input: 'Input YAML', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Invalid YAML', indent: 'Indent', spaces2: '2 Spaces', spaces4: '4 Spaces' },
  ja: { title: 'YAMLフォーマッター', desc: 'YAMLドキュメントをオンラインで整形/圧縮', format: '🎨 整形', minify: '📦 圧縮', input: 'YAML入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ 無効なYAML', indent: 'インデント', spaces2: '2スペース', spaces4: '4スペース' },
  ko: { title: 'YAML 포맷터', desc: 'YAML 문서 온라인 포맷/압축', format: '🎨 포맷', minify: '📦 압축', input: 'YAML 입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 잘못된 YAML', indent: '들여쓰기', spaces2: '2칸', spaces4: '4칸' },
  es: { title: 'Formateador YAML', desc: 'Formatea o minifica documentos YAML en línea', format: '🎨 Formatear', minify: '📦 Minificar', input: 'YAML de entrada', output: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ YAML inválido', indent: 'Indentación', spaces2: '2 Espacios', spaces4: '4 Espacios' },
}

const exampleYAML = `server:
  host: localhost
  port: 8080
  ssl: true

database:
  driver: postgres
  host: db.example.com
  port: 5432
  name: myapp
  credentials:
    username: admin
    password: secret

logging:
  level: info
  outputs:
    - console
    - file
  file:
    path: /var/log/app.log
    max_size: 10MB`

function formatYAML(text: string, indentSize: number): string {
  const lines = text.split('\n')
  const result: string[] = []
  let currentIndent = 0
  const indentStr = ' '.repeat(indentSize)
  for (const raw of lines) {
    const trimmed = raw.trim()
    if (!trimmed) { result.push(''); continue }
    if (trimmed.startsWith('- ')) {
      result.push(indentStr.repeat(currentIndent) + trimmed)
      continue
    }
    const colonIdx = trimmed.indexOf(':')
    if (colonIdx > 0) {
      const afterColon = trimmed.slice(colonIdx + 1).trim()
      if (!afterColon) {
        const origSpaces = raw.search(/\S/)
        const origLevel = indentSize > 0 ? Math.round(origSpaces / Math.max(1, Math.min(indentSize, origSpaces || indentSize))) : 0
        currentIndent = origLevel
        result.push(indentStr.repeat(currentIndent) + trimmed)
        currentIndent++
      } else {
        result.push(indentStr.repeat(currentIndent) + trimmed)
      }
    } else {
      result.push(indentStr.repeat(currentIndent) + trimmed)
    }
  }
  return result.join('\n').trim()
}

function minifyYAML(text: string): string {
  return text.split('\n').map(l => l.trimEnd()).filter(l => l.trim() !== '').join('\n')
}

export default function YamlFormatterPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [indentType, setIndentType] = useState('2')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const doFormat = () => {
    setError('')
    try {
      if (!input.trim()) { setOutput(''); return }
      setOutput(formatYAML(input, +indentType))
    } catch { setError(u.error); setOutput('') }
  }

  const doMinify = () => {
    setError('')
    try {
      if (!input.trim()) { setOutput(''); return }
      setOutput(minifyYAML(input))
    } catch { setError(u.error); setOutput('') }
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📝 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={doFormat} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.format}</button>
          <button onClick={doMinify} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.minify}</button>
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            {[{ v: '2', l: u.spaces2 }, { v: '4', l: u.spaces4 }].map(o => (
              <button key={o.v} onClick={() => setIndentType(o.v)} className={`px-3 py-1.5 rounded-lg text-xs transition ${indentType === o.v ? 'bg-white shadow text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>{o.l}</button>
            ))}
          </div>
          <button onClick={() => { setInput(exampleYAML); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>
        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="key: value" className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
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