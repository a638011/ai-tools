'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Unicode编码转换', desc: '文本↔Unicode码点（U+XXXX）↔UTF-8十六进制互转', input: '输入', output: '输出结果', toCodePoints: '➡️ 转码点', fromCodePoints: '⬅️ 码点转文本', toUtf8Hex: '➡️ 转UTF-8 Hex', fromUtf8Hex: '⬅️ Hex转文本', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', textTab: '文本', codepointTab: '码点 U+', utf8Tab: 'UTF-8 Hex' },
  en: { title: 'Unicode Converter', desc: 'Convert between Text, Unicode Code Points (U+XXXX) and UTF-8 Hex', input: 'Input', output: 'Output', toCodePoints: '➡️ To Code Points', fromCodePoints: '⬅️ From Code Points', toUtf8Hex: '➡️ To UTF-8 Hex', fromUtf8Hex: '⬅️ From Hex', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', textTab: 'Text', codepointTab: 'Code Points U+', utf8Tab: 'UTF-8 Hex' },
  ja: { title: 'Unicodeコンバーター', desc: 'テキスト↔Unicodeコードポイント↔UTF-8 Hex変換', input: '入力', output: '出力', toCodePoints: '➡️ コードポイントへ', fromCodePoints: '⬅️ コードポイントから', toUtf8Hex: '➡️ UTF-8 Hexへ', fromUtf8Hex: '⬅️ Hexから', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', textTab: 'テキスト', codepointTab: 'コードポイント', utf8Tab: 'UTF-8 Hex' },
  ko: { title: 'Unicode 변환기', desc: '텍스트↔유니코드 코드포인트↔UTF-8 Hex 변환', input: '입력', output: '출력', toCodePoints: '➡️ 코드포인트로', fromCodePoints: '⬅️ 코드포인트에서', toUtf8Hex: '➡️ UTF-8 Hex로', fromUtf8Hex: '⬅️ Hex에서', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', textTab: '텍스트', codepointTab: '코드포인트', utf8Tab: 'UTF-8 Hex' },
  es: { title: 'Convertidor Unicode', desc: 'Convierte entre Texto, Puntos de Código Unicode y UTF-8 Hex', input: 'Entrada', output: 'Resultado', toCodePoints: '➡️ A Code Points', fromCodePoints: '⬅️ Desde Code Points', toUtf8Hex: '➡️ A UTF-8 Hex', fromUtf8Hex: '⬅️ Desde Hex', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', textTab: 'Texto', codepointTab: 'Code Points', utf8Tab: 'UTF-8 Hex' },
}

function textToCodePoints(text: string): string {
  return [...text].map(ch => 'U+' + ch.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0')).join(' ')
}
function codePointsToText(cp: string): string {
  return cp.replace(/U\+/gi, '').trim().split(/\s+/).map(h => String.fromCodePoint(parseInt(h, 16))).join('')
}
function textToUtf8Hex(text: string): string {
  return [...new TextEncoder().encode(text)].map(b => b.toString(16).toUpperCase().padStart(2, '0')).join(' ')
}
function utf8HexToText(hex: string): string {
  const bytes = hex.trim().split(/\s+/).map(h => parseInt(h, 16))
  return new TextDecoder().decode(new Uint8Array(bytes))
}

export default function UnicodeConverterPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔤 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={() => setOutput(textToCodePoints(input))} className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.toCodePoints}</button>
          <button onClick={() => setOutput(codePointsToText(input))} className="px-4 py-2.5 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition font-medium text-sm">{u.fromCodePoints}</button>
          <button onClick={() => setOutput(textToUtf8Hex(input))} className="px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.toUtf8Hex}</button>
          <button onClick={() => setOutput(utf8HexToText(input))} className="px-4 py-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition font-medium text-sm">{u.fromUtf8Hex}</button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Hello 你好 🌍"
              className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
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
