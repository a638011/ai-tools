'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'CSS Minifier', desc: '在线压缩/美化CSS代码', minify: '📦 压缩', beautify: '🎨 美化', input: '输入CSS', output: '输出结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', stats: '统计', original: '原始大小', result: '结果大小', saved: '节省' },
  en: { title: 'CSS Minifier', desc: 'Minify or beautify CSS code online', minify: '📦 Minify', beautify: '🎨 Beautify', input: 'Input CSS', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', stats: 'Stats', original: 'Original', result: 'Result', saved: 'Saved' },
  ja: { title: 'CSS Minifier', desc: 'CSSコードをオンラインで圧縮/整形', minify: '📦 圧縮', beautify: '🎨 整形', input: 'CSS入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', stats: '統計', original: '元サイズ', result: '結果', saved: '削減' },
  ko: { title: 'CSS Minifier', desc: 'CSS 코드 온라인 압축/정리', minify: '📦 압축', beautify: '🎨 정리', input: 'CSS 입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', stats: '통계', original: '원본 크기', result: '결과', saved: '절약' },
  es: { title: 'CSS Minifier', desc: 'Minifica o embellece código CSS en línea', minify: '📦 Minificar', beautify: '🎨 Embellecer', input: 'CSS de entrada', output: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', stats: 'Estadísticas', original: 'Original', result: 'Resultado', saved: 'Ahorrado' },
}

const exampleCSS = `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 16px;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.card p {
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
}`

function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/^\s+|\s+$/g, '')
}

function beautifyCSS(css: string): string {
  let result = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim()

  let indent = 0
  let output = ''
  for (let i = 0; i < result.length; i++) {
    const ch = result[i]
    if (ch === '{') {
      indent++
      output += ' {\n' + '  '.repeat(indent)
    } else if (ch === '}') {
      indent = Math.max(0, indent - 1)
      output += '\n' + '  '.repeat(indent) + '}\n' + (indent === 0 ? '\n' : '') + '  '.repeat(indent)
    } else if (ch === ';') {
      output += ';\n' + '  '.repeat(indent)
    } else {
      output += ch
    }
  }
  return output.replace(/\n\s*\n\s*\n/g, '\n\n').replace(/\s+$/gm, '').trim()
}

export default function CssMinifierPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const doMinify = () => setOutput(minifyCSS(input))
  const doBeautify = () => setOutput(beautifyCSS(input))
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  const origSize = new Blob([input]).size
  const outSize = new Blob([output]).size
  const savedPct = origSize > 0 ? Math.round((1 - outSize / origSize) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🗜️ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex gap-2 mb-4">
          <button onClick={doMinify} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.minify}</button>
          <button onClick={doBeautify} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.beautify}</button>
          <button onClick={() => { setInput(exampleCSS); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder=".class { color: red; }"
              className="w-full h-72 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-72 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>

        {output && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-6 text-sm">
            <span className="text-gray-500">{u.stats}:</span>
            <span>{u.original}: <b>{origSize}B</b></span>
            <span>{u.result}: <b>{outSize}B</b></span>
            <span className={savedPct > 0 ? 'text-green-600' : savedPct < 0 ? 'text-red-500' : ''}>{u.saved}: <b>{savedPct}%</b></span>
          </div>
        )}
      </div>
    </div>
  )
}
