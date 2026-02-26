'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Punycode编解码', desc: '国际化域名(IDN)与Punycode互转', encode: '🔄 编码 → Punycode', decode: '🔄 解码 → Unicode', input: '输入', output: '输出', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', error: '❌ 错误', swap: '🔃 交换', unicodeLabel: 'Unicode域名', punycodeLabel: 'Punycode域名', examples: '常见示例' },
  en: { title: 'Punycode Converter', desc: 'Convert between internationalized domain names (IDN) and Punycode', encode: '🔄 Encode → Punycode', decode: '🔄 Decode → Unicode', input: 'Input', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', error: '❌ Error', swap: '🔃 Swap', unicodeLabel: 'Unicode Domain', punycodeLabel: 'Punycode Domain', examples: 'Common Examples' },
  ja: { title: 'Punycode変換', desc: '国際化ドメイン名(IDN)とPunycodeの相互変換', encode: '🔄 エンコード → Punycode', decode: '🔄 デコード → Unicode', input: '入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', error: '❌ エラー', swap: '🔃 入替', unicodeLabel: 'Unicodeドメイン', punycodeLabel: 'Punycodeドメイン', examples: 'よく使う例' },
  ko: { title: 'Punycode 변환기', desc: '국제화 도메인(IDN)과 Punycode 상호 변환', encode: '🔄 인코딩 → Punycode', decode: '🔄 디코딩 → Unicode', input: '입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', error: '❌ 오류', swap: '🔃 교환', unicodeLabel: 'Unicode 도메인', punycodeLabel: 'Punycode 도메인', examples: '자주 쓰는 예' },
  es: { title: 'Convertidor Punycode', desc: 'Convierte entre nombres de dominio internacionalizados (IDN) y Punycode', encode: '🔄 Codificar → Punycode', decode: '🔄 Decodificar → Unicode', input: 'Entrada', output: 'Salida', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', error: '❌ Error', swap: '🔃 Intercambiar', unicodeLabel: 'Dominio Unicode', punycodeLabel: 'Dominio Punycode', examples: 'Ejemplos Comunes' },
}

const examplePairs = [
  { unicode: '中文.com', punycode: 'xn--fiq228c.com' },
  { unicode: '日本語.jp', punycode: 'xn--wgv71a309e.jp' },
  { unicode: '한국어.kr', punycode: 'xn--bj0bj3i97fq8o.kr' },
  { unicode: 'münchen.de', punycode: 'xn--mnchen-3ya.de' },
  { unicode: 'café.fr', punycode: 'xn--caf-dma.fr' },
  { unicode: 'россия.рф', punycode: 'xn--h1alffa9f.xn--p1acf' },
]

// Punycode encoder/decoder implementation
const BASE = 36, TMIN = 1, TMAX = 26, SKEW = 38, DAMP = 700, INITIAL_BIAS = 72, INITIAL_N = 128

function adapt(delta: number, numPoints: number, first: boolean): number {
  delta = first ? Math.floor(delta / DAMP) : Math.floor(delta / 2)
  delta += Math.floor(delta / numPoints)
  let k = 0
  while (delta > ((BASE - TMIN) * TMAX) / 2) { delta = Math.floor(delta / (BASE - TMIN)); k += BASE }
  return k + Math.floor(((BASE - TMIN + 1) * delta) / (delta + SKEW))
}

function digitToChar(d: number): string {
  return String.fromCharCode(d < 26 ? d + 97 : d - 26 + 48)
}

function charToDigit(c: number): number {
  if (c >= 48 && c <= 57) return c - 48 + 26
  if (c >= 65 && c <= 90) return c - 65
  if (c >= 97 && c <= 122) return c - 97
  return BASE
}

function punycodeEncode(input: string): string {
  const output: string[] = []
  const codePoints = Array.from(input).map(c => c.codePointAt(0)!)
  const basicChars = codePoints.filter(cp => cp < 128)
  for (const cp of basicChars) output.push(String.fromCodePoint(cp))
  let handled = basicChars.length
  if (basicChars.length > 0) output.push('-')
  let n = INITIAL_N, delta = 0, bias = INITIAL_BIAS
  while (handled < codePoints.length) {
    let m = Infinity
    for (const cp of codePoints) if (cp >= n && cp < m) m = cp
    delta += (m - n) * (handled + 1)
    n = m
    for (const cp of codePoints) {
      if (cp < n) delta++
      if (cp === n) {
        let q = delta
        for (let k = BASE; ; k += BASE) {
          const t = k <= bias ? TMIN : k >= bias + TMAX ? TMAX : k - bias
          if (q < t) break
          output.push(digitToChar(t + ((q - t) % (BASE - t))))
          q = Math.floor((q - t) / (BASE - t))
        }
        output.push(digitToChar(q))
        bias = adapt(delta, handled + 1, handled === basicChars.length)
        delta = 0
        handled++
      }
    }
    delta++; n++
  }
  return output.join('')
}

function punycodeDecode(input: string): string {
  const output: number[] = []
  let basicEnd = input.lastIndexOf('-')
  if (basicEnd < 0) basicEnd = 0
  for (let i = 0; i < basicEnd; i++) output.push(input.charCodeAt(i))
  let i = basicEnd > 0 ? basicEnd + 1 : 0
  let n = INITIAL_N, bias = INITIAL_BIAS, idx = 0
  while (i < input.length) {
    let oldIdx = idx, w = 1
    for (let k = BASE; ; k += BASE) {
      if (i >= input.length) throw new Error('Invalid punycode')
      const digit = charToDigit(input.charCodeAt(i++))
      if (digit >= BASE) throw new Error('Invalid punycode')
      idx += digit * w
      const t = k <= bias ? TMIN : k >= bias + TMAX ? TMAX : k - bias
      if (digit < t) break
      w *= BASE - t
    }
    bias = adapt(idx - oldIdx, output.length + 1, oldIdx === 0)
    n += Math.floor(idx / (output.length + 1))
    idx = idx % (output.length + 1)
    output.splice(idx, 0, n)
    idx++
  }
  return String.fromCodePoint(...output)
}

function domainToASCII(domain: string): string {
  return domain.split('.').map(label => {
    if (/^[\x00-\x7F]*$/.test(label)) return label
    return 'xn--' + punycodeEncode(label)
  }).join('.')
}

function domainToUnicode(domain: string): string {
  return domain.split('.').map(label => {
    if (label.startsWith('xn--')) {
      try { return punycodeDecode(label.slice(4)) } catch { return label }
    }
    return label
  }).join('.')
}

export default function PunycodePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const doEncode = () => {
    setError('')
    try { setOutput(domainToASCII(input)) } catch (e) { setError(u.error + ': ' + (e instanceof Error ? e.message : String(e))); setOutput('') }
  }

  const doDecode = () => {
    setError('')
    try { setOutput(domainToUnicode(input)) } catch (e) { setError(u.error + ': ' + (e instanceof Error ? e.message : String(e))); setOutput('') }
  }

  const swap = () => { setInput(output); setOutput(''); setError('') }
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🌍 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={doEncode} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.encode}</button>
          <button onClick={doDecode} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.decode}</button>
          <button onClick={swap} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.swap}</button>
          <button onClick={() => { setInput('中文.com'); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="中文.com / xn--fiq228c.com" className="w-full h-32 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-32 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">{u.examples}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {examplePairs.map((pair, i) => (
              <button key={i} onClick={() => { setInput(pair.unicode); setOutput(''); setError('') }} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-indigo-50 transition text-left group">
                <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600">{pair.unicode}</span>
                <span className="text-xs text-gray-400 font-mono">{pair.punycode}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
