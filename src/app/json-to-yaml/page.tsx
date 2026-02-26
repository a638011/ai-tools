'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'JSON↔YAML转换', desc: '在线JSON与YAML互相转换', toYaml: 'JSON → YAML', toJson: 'YAML → JSON', inputJson: '输入JSON', inputYaml: '输入YAML', output: '输出结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ 格式错误' },
  en: { title: 'JSON ↔ YAML', desc: 'Convert between JSON and YAML online', toYaml: 'JSON → YAML', toJson: 'YAML → JSON', inputJson: 'Input JSON', inputYaml: 'Input YAML', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Invalid format' },
  ja: { title: 'JSON↔YAML変換', desc: 'JSONとYAMLをオンラインで相互変換', toYaml: 'JSON → YAML', toJson: 'YAML → JSON', inputJson: 'JSON入力', inputYaml: 'YAML入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ 無効な形式' },
  ko: { title: 'JSON↔YAML 변환', desc: 'JSON과 YAML 온라인 상호 변환', toYaml: 'JSON → YAML', toJson: 'YAML → JSON', inputJson: 'JSON 입력', inputYaml: 'YAML 입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 잘못된 형식' },
  es: { title: 'JSON ↔ YAML', desc: 'Convierte entre JSON y YAML en línea', toYaml: 'JSON → YAML', toJson: 'YAML → JSON', inputJson: 'Entrada JSON', inputYaml: 'Entrada YAML', output: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ Formato inválido' },
}

const exampleJSON = `{
  "server": {
    "host": "localhost",
    "port": 8080,
    "ssl": true
  },
  "database": {
    "driver": "postgres",
    "name": "myapp"
  },
  "tags": ["web", "api", "v2"]
}`

function jsonToYaml(obj: unknown, indent: number = 0): string {
  const pad = '  '.repeat(indent)
  if (obj === null) return 'null'
  if (typeof obj === 'string') return obj.includes(':') || obj.includes('#') || obj.includes("'") || obj === '' ? `"${obj}"` : obj
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj)
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]'
    return obj.map(item => {
      if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
        const entries = Object.entries(item)
        const first = entries[0]
        const rest = entries.slice(1)
        let s = `${pad}- ${first[0]}: ${jsonToYaml(first[1], indent + 2)}`
        for (const [k, v] of rest) {
          s += `\n${pad}  ${k}: ${jsonToYaml(v, indent + 2)}`
        }
        return s
      }
      return `${pad}- ${jsonToYaml(item, indent + 1)}`
    }).join('\n')
  }
  if (typeof obj === 'object') {
    const entries = Object.entries(obj as Record<string, unknown>)
    if (entries.length === 0) return '{}'
    return entries.map(([k, v]) => {
      if (typeof v === 'object' && v !== null) {
        return `${pad}${k}:\n${jsonToYaml(v, indent + 1)}`
      }
      return `${pad}${k}: ${jsonToYaml(v, indent + 1)}`
    }).join('\n')
  }
  return String(obj)
}

function yamlToJson(yaml: string): unknown {
  const lines = yaml.split('\n')
  return parseYamlLines(lines, 0, 0).value
}

function parseYamlLines(lines: string[], start: number, baseIndent: number): { value: unknown; nextIndex: number } {
  if (start >= lines.length) return { value: null, nextIndex: start }
  const firstLine = lines[start]
  const trimmed = firstLine.trim()
  if (trimmed.startsWith('- ')) {
    const arr: unknown[] = []
    let i = start
    while (i < lines.length) {
      const line = lines[i]
      if (line.trim() === '' || line.trim().startsWith('#')) { i++; continue }
      const lineIndent = line.search(/\S/)
      if (lineIndent < baseIndent) break
      if (lineIndent === baseIndent && line.trim().startsWith('- ')) {
        const val = line.trim().slice(2).trim()
        if (val.includes(': ')) {
          const obj: Record<string, unknown> = {}
          const ci = val.indexOf(': ')
          obj[val.slice(0, ci)] = parseScalar(val.slice(ci + 2))
          i++
          while (i < lines.length) {
            const nl = lines[i]
            if (nl.trim() === '') { i++; continue }
            const ni = nl.search(/\S/)
            if (ni <= baseIndent) break
            if (ni > baseIndent && !nl.trim().startsWith('- ')) {
              const nci = nl.trim().indexOf(': ')
              if (nci > 0) { obj[nl.trim().slice(0, nci)] = parseScalar(nl.trim().slice(nci + 2)); i++; continue }
            }
            break
          }
          arr.push(obj)
        } else {
          arr.push(parseScalar(val))
          i++
        }
      } else { break }
    }
    return { value: arr, nextIndex: i }
  }
  const obj: Record<string, unknown> = {}
  let i = start
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '' || line.trim().startsWith('#')) { i++; continue }
    const lineIndent = line.search(/\S/)
    if (lineIndent < baseIndent) break
    const t = line.trim()
    const ci = t.indexOf(':')
    if (ci > 0) {
      const key = t.slice(0, ci).trim()
      const afterColon = t.slice(ci + 1).trim()
      if (!afterColon) {
        i++
        if (i < lines.length) {
          const nextLine = lines[i]
          if (nextLine.trim()) {
            const nextIndent = nextLine.search(/\S/)
            const res = parseYamlLines(lines, i, nextIndent)
            obj[key] = res.value
            i = res.nextIndex
          } else { obj[key] = null; i++ }
        } else { obj[key] = null }
      } else {
        obj[key] = parseScalar(afterColon)
        i++
      }
    } else { i++ }
  }
  return { value: obj, nextIndex: i }
}

function parseScalar(s: string): unknown {
  if (s === 'null' || s === '~') return null
  if (s === 'true') return true
  if (s === 'false') return false
  if (s.startsWith('"') && s.endsWith('"')) return s.slice(1, -1)
  if (s.startsWith("'") && s.endsWith("'")) return s.slice(1, -1)
  if (s.startsWith('[') && s.endsWith(']')) {
    try { return JSON.parse(s) } catch { return s }
  }
  const n = Number(s)
  if (!isNaN(n) && s !== '') return n
  return s
}

export default function JsonToYamlPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'toYaml' | 'toJson'>('toYaml')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const convert = () => {
    setError('')
    try {
      if (!input.trim()) { setOutput(''); return }
      if (mode === 'toYaml') {
        const obj = JSON.parse(input)
        setOutput(jsonToYaml(obj))
      } else {
        const obj = yamlToJson(input)
        setOutput(JSON.stringify(obj, null, 2))
      }
    } catch { setError(u.error); setOutput('') }
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
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            <button onClick={() => setMode('toYaml')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'toYaml' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>{u.toYaml}</button>
            <button onClick={() => setMode('toJson')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'toJson' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>{u.toJson}</button>
          </div>
          <button onClick={convert} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">🔄 Convert</button>
          <button onClick={() => { setInput(exampleJSON); setMode('toYaml'); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>
        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{mode === 'toYaml' ? u.inputJson : u.inputYaml}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === 'toYaml' ? '{"key": "value"}' : 'key: value'} className="w-full h-80 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
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