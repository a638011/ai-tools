'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'JavaScript压缩', desc: '在线压缩/美化JavaScript代码', minify: '📦 压缩', beautify: '🎨 美化', input: '输入JavaScript', output: '输出结果', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', stats: '统计', original: '原始大小', result: '结果大小', saved: '节省' },
  en: { title: 'JS Minifier', desc: 'Minify or beautify JavaScript code online', minify: '📦 Minify', beautify: '🎨 Beautify', input: 'Input JavaScript', output: 'Output', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', stats: 'Stats', original: 'Original', result: 'Result', saved: 'Saved' },
  ja: { title: 'JS Minifier', desc: 'JavaScriptコードをオンラインで圧縮/整形', minify: '📦 圧縮', beautify: '🎨 整形', input: 'JavaScript入力', output: '出力', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', stats: '統計', original: '元サイズ', result: '結果', saved: '削減' },
  ko: { title: 'JS Minifier', desc: 'JavaScript 코드 온라인 압축/정리', minify: '📦 압축', beautify: '🎨 정리', input: 'JavaScript 입력', output: '출력', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', stats: '통계', original: '원본', result: '결과', saved: '절약' },
  es: { title: 'JS Minifier', desc: 'Minifica o embellece código JavaScript en línea', minify: '📦 Minificar', beautify: '🎨 Embellecer', input: 'JavaScript de entrada', output: 'Resultado', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', stats: 'Estadísticas', original: 'Original', result: 'Resultado', saved: 'Ahorrado' },
}

const exampleJS = `// Utility functions for data processing
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }
  const cloned = {};
  Object.keys(obj).forEach(function (key) {
    cloned[key] = deepClone(obj[key]);
  });
  return cloned;
}

function formatNumber(num, decimals) {
  decimals = decimals || 2;
  return Number(num).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}`

function minifyJS(code: string): string {
  return code
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\n\s*\n/g, '\n')
    .replace(/\s*([();,=+\-*/<>!&|?:])\s*/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/;\s*}/g, '}')
    .trim()
}

function beautifyJS(code: string): string {
  // Simple beautifier
  let result = code
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim()

  let output = ''
  let indent = 0
  let inString = false
  let stringChar = ''

  for (let i = 0; i < result.length; i++) {
    const ch = result[i]
    const next = result[i + 1] || ''

    if (inString) {
      output += ch
      if (ch === stringChar && result[i - 1] !== '\\') inString = false
      continue
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true
      stringChar = ch
      output += ch
      continue
    }

    if (ch === '{') {
      indent++
      output += ' {\n' + '  '.repeat(indent)
    } else if (ch === '}') {
      indent = Math.max(0, indent - 1)
      output = output.replace(/\s+$/, '')
      output += '\n' + '  '.repeat(indent) + '}'
      if (next && next !== ';' && next !== ',' && next !== ')' && next !== '}') {
        output += '\n' + '  '.repeat(indent)
      }
    } else if (ch === ';') {
      output += ';\n' + '  '.repeat(indent)
    } else if (ch === ',' && indent > 0) {
      output += ',\n' + '  '.repeat(indent)
    } else {
      output += ch
    }
  }
  return output.replace(/\n\s*\n\s*\n/g, '\n\n').replace(/\s+$/gm, '').trim()
}

export default function JsMinifierPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const doMinify = () => setOutput(minifyJS(input))
  const doBeautify = () => setOutput(beautifyJS(input))
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  const origSize = new Blob([input]).size
  const outSize = new Blob([output]).size
  const savedPct = origSize > 0 ? Math.round((1 - outSize / origSize) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">⚡ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex gap-2 mb-4">
          <button onClick={doMinify} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.minify}</button>
          <button onClick={doBeautify} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.beautify}</button>
          <button onClick={() => { setInput(exampleJS); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="function hello() { ... }"
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
