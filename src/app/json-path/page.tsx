'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'JSONPath查询', desc: '使用JSONPath表达式查询JSON数据', input: '输入JSON', path: 'JSONPath表达式', output: '查询结果', query: '🔍 查询', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ 错误', pathHint: '例: $.store.book[0].title' },
  en: { title: 'JSONPath Query', desc: 'Query JSON data using JSONPath expressions', input: 'Input JSON', path: 'JSONPath Expression', output: 'Query Result', query: '🔍 Query', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Error', pathHint: 'e.g. $.store.book[0].title' },
  ja: { title: 'JSONPathクエリ', desc: 'JSONPath式でJSONデータを検索', input: 'JSON入力', path: 'JSONPath式', output: 'クエリ結果', query: '🔍 クエリ', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ エラー', pathHint: '例: $.store.book[0].title' },
  ko: { title: 'JSONPath 쿼리', desc: 'JSONPath 표현식으로 JSON 데이터 쿼리', input: 'JSON 입력', path: 'JSONPath 표현식', output: '쿼리 결과', query: '🔍 쿼리', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 오류', pathHint: '예: $.store.book[0].title' },
  es: { title: 'Consulta JSONPath', desc: 'Consulta datos JSON usando expresiones JSONPath', input: 'JSON de entrada', path: 'Expresión JSONPath', output: 'Resultado', query: '🔍 Consultar', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ Error', pathHint: 'ej: $.store.book[0].title' },
}

const exampleJSON = `{
  "store": {
    "book": [
      { "category": "fiction", "author": "Herman Melville", "title": "Moby Dick", "price": 8.99 },
      { "category": "fiction", "author": "J.R.R. Tolkien", "title": "The Lord of the Rings", "price": 22.99 },
      { "category": "tech", "author": "Douglas Crockford", "title": "JavaScript: The Good Parts", "price": 15.67 }
    ],
    "bicycle": { "color": "red", "price": 19.95 }
  }
}`

function queryJsonPath(obj: unknown, path: string): unknown[] {
  const results: unknown[] = []
  const tokens = parsePath(path)
  if (!tokens) return results
  resolve(obj, tokens, 0, results)
  return results
}

function parsePath(path: string): string[] | null {
  if (!path.startsWith('$')) return null
  const tokens: string[] = []
  let rest = path.slice(1)
  while (rest.length > 0) {
    if (rest.startsWith('..')) {
      tokens.push('..')
      rest = rest.slice(2)
      const m = rest.match(/^([a-zA-Z_][a-zA-Z0-9_]*)/)
      if (m) { tokens.push(m[1]); rest = rest.slice(m[1].length) }
    } else if (rest.startsWith('.')) {
      rest = rest.slice(1)
      if (rest.startsWith('*')) { tokens.push('*'); rest = rest.slice(1) }
      else { const m = rest.match(/^([a-zA-Z_][a-zA-Z0-9_]*)/); if (m) { tokens.push(m[1]); rest = rest.slice(m[1].length) } else return null }
    } else if (rest.startsWith('[')) {
      const end = rest.indexOf(']')
      if (end === -1) return null
      const inner = rest.slice(1, end).trim()
      if (inner === '*') tokens.push('[*]')
      else if (inner.startsWith("'") || inner.startsWith('"')) tokens.push(inner.replace(/['"]/g, ''))
      else if (inner.includes(':')) tokens.push('[' + inner + ']')
      else tokens.push('[' + inner + ']')
      rest = rest.slice(end + 1)
    } else break
  }
  return tokens
}

function resolve(obj: unknown, tokens: string[], idx: number, results: unknown[]) {
  if (idx >= tokens.length) { results.push(obj); return }
  const token = tokens[idx]
  if (obj === null || obj === undefined) return
  if (token === '..') {
    if (idx + 1 < tokens.length) {
      const next = tokens[idx + 1]
      const search = (o: unknown) => {
        if (o && typeof o === 'object') {
          if (!Array.isArray(o) && next in (o as Record<string, unknown>)) resolve((o as Record<string, unknown>)[next], tokens, idx + 2, results)
          for (const v of Object.values(o as Record<string, unknown>)) search(v)
        }
      }
      search(obj)
    }
    return
  }
  if (token === '*') {
    if (typeof obj === 'object' && obj !== null) for (const v of Object.values(obj as Record<string, unknown>)) resolve(v, tokens, idx + 1, results)
    return
  }
  if (token === '[*]') {
    if (Array.isArray(obj)) for (const v of obj) resolve(v, tokens, idx + 1, results)
    else if (typeof obj === 'object' && obj !== null) for (const v of Object.values(obj as Record<string, unknown>)) resolve(v, tokens, idx + 1, results)
    return
  }
  if (token.startsWith('[')) {
    const inner = token.slice(1, -1)
    if (inner.includes(':') && Array.isArray(obj)) {
      const parts = inner.split(':').map(s => s.trim())
      const start = parts[0] ? parseInt(parts[0]) : 0
      const end = parts[1] ? parseInt(parts[1]) : obj.length
      for (let i = Math.max(0, start); i < Math.min(obj.length, end); i++) resolve(obj[i], tokens, idx + 1, results)
      return
    }
    const n = parseInt(inner)
    if (!isNaN(n) && Array.isArray(obj) && n >= 0 && n < obj.length) { resolve(obj[n], tokens, idx + 1, results); return }
    if (typeof obj === 'object' && obj !== null && inner in (obj as Record<string, unknown>)) { resolve((obj as Record<string, unknown>)[inner], tokens, idx + 1, results); return }
    return
  }
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) && token in (obj as Record<string, unknown>)) {
    resolve((obj as Record<string, unknown>)[token], tokens, idx + 1, results)
  }
}

export default function JsonPathPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [path, setPath] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const doQuery = () => {
    setError('')
    try {
      const obj = JSON.parse(input)
      const results = queryJsonPath(obj, path || '$')
      setOutput(JSON.stringify(results.length === 1 ? results[0] : results, null, 2))
    } catch (e) { setError(u.error + ': ' + (e instanceof Error ? e.message : String(e))); setOutput('') }
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔎 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={doQuery} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.query}</button>
          <button onClick={() => { setInput(exampleJSON); setPath('$.store.book[0].title'); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setPath(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="mb-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-1">{u.path}</label>
          <input value={path} onChange={e => setPath(e.target.value)} placeholder={u.pathHint} className="w-full border rounded-xl p-3 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder='{"key": "value"}' className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
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
