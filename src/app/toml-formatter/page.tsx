'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'TOML格式化', desc: '在线格式化TOML文本', format: '🎨 格式化', input: '输入TOML', output: '输出结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ TOML格式错误' },
  en: { title: 'TOML Formatter', desc: 'Format TOML text online', format: '🎨 Format', input: 'Input TOML', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Invalid TOML' },
  ja: { title: 'TOMLフォーマッター', desc: 'TOMLテキストをオンラインで整形', format: '🎨 整形', input: 'TOML入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ 無効なTOML' },
  ko: { title: 'TOML 포맷터', desc: 'TOML 텍스트 온라인 포맷', format: '🎨 포맷', input: 'TOML 입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 잘못된 TOML' },
  es: { title: 'Formateador TOML', desc: 'Formatea texto TOML en línea', format: '🎨 Formatear', input: 'TOML de entrada', output: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ TOML inválido' },
}

const exampleTOML = `[package]
name = "my-app"
version = "0.1.0"
authors = ["Alice <alice@example.com>", "Bob <bob@example.com>"]

[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1", features = ["full"] }

[database]
server = "192.168.1.1"
ports = [8001, 8001, 8002]
enabled = true
connection_max = 5000

[servers.alpha]
ip = "10.0.0.1"
dc = "eqdc10"

[servers.beta]
ip = "10.0.0.2"
dc = "eqdc10"`

function formatTOML(input: string): string {
  const lines = input.split('\n')
  const result: string[] = []
  let lastWasSection = false
  let lastWasEmpty = false

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()
    if (trimmed === '') { lastWasEmpty = true; continue }

    const isSection = /^\[.+\]$/.test(trimmed)
    const isComment = trimmed.startsWith('#')

    if (isSection && result.length > 0 && !lastWasEmpty && !lastWasSection) {
      result.push('')
    }

    if (isSection) {
      result.push(trimmed)
      lastWasSection = true
    } else if (isComment) {
      result.push(trimmed)
      lastWasSection = false
    } else {
      // key = value line: normalize spacing around =
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trimEnd()
        const val = trimmed.slice(eqIdx + 1).trimStart()
        result.push(`${key} = ${val}`)
      } else {
        result.push(trimmed)
      }
      lastWasSection = false
    }
    lastWasEmpty = false
  }
  return result.join('\n')
}

function validateTOML(input: string): string | null {
  const lines = input.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()
    if (trimmed === '' || trimmed.startsWith('#')) continue
    if (/^\[.+\]$/.test(trimmed)) continue
    if (/^\[\[.+\]\]$/.test(trimmed)) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx <= 0) return `Line ${i + 1}: "${trimmed}"`
  }
  return null
}

export default function TomlFormatterPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const doFormat = () => {
    setError('')
    const err = validateTOML(input)
    if (err) { setError(`${u.error}: ${err}`); setOutput(''); return }
    setOutput(formatTOML(input))
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📋 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={doFormat} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.format}</button>
          <button onClick={() => { setInput(exampleTOML); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder='[section]\nkey = "value"'
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
