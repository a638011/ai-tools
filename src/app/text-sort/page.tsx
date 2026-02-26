'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '文本排序去重', desc: '按行排序、去除重复行和空行', input: '输入文本', output: '输出结果', sortAsc: '↑ 升序', sortDesc: '↓ 降序', sortRandom: '🎲 随机', removeDup: '🔄 去重', removeEmpty: '🧹 去空行', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', stats: '统计', totalLines: '总行数', uniqueLines: '唯一行', emptyLines: '空行', dupLines: '重复行' },
  en: { title: 'Text Sort & Dedupe', desc: 'Sort lines, remove duplicates and empty lines', input: 'Input Text', output: 'Output', sortAsc: '↑ Ascending', sortDesc: '↓ Descending', sortRandom: '🎲 Random', removeDup: '🔄 Dedupe', removeEmpty: '🧹 Remove Empty', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', stats: 'Stats', totalLines: 'Total lines', uniqueLines: 'Unique', emptyLines: 'Empty', dupLines: 'Duplicates' },
  ja: { title: 'テキスト並替・重複削除', desc: '行の並替、重複行・空行の削除', input: 'テキスト入力', output: '出力', sortAsc: '↑ 昇順', sortDesc: '↓ 降順', sortRandom: '🎲 ランダム', removeDup: '🔄 重複削除', removeEmpty: '🧹 空行削除', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', stats: '統計', totalLines: '総行数', uniqueLines: 'ユニーク', emptyLines: '空行', dupLines: '重複' },
  ko: { title: '텍스트 정렬 중복제거', desc: '줄 정렬, 중복 및 빈 줄 제거', input: '텍스트 입력', output: '출력', sortAsc: '↑ 오름차순', sortDesc: '↓ 내림차순', sortRandom: '🎲 랜덤', removeDup: '🔄 중복제거', removeEmpty: '🧹 빈줄 제거', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', stats: '통계', totalLines: '총 줄수', uniqueLines: '고유', emptyLines: '빈줄', dupLines: '중복' },
  es: { title: 'Ordenar y Deduplicar', desc: 'Ordena líneas, elimina duplicados y líneas vacías', input: 'Texto de entrada', output: 'Resultado', sortAsc: '↑ Ascendente', sortDesc: '↓ Descendente', sortRandom: '🎲 Aleatorio', removeDup: '🔄 Deduplicar', removeEmpty: '🧹 Quitar Vacías', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', stats: 'Estadísticas', totalLines: 'Total líneas', uniqueLines: 'Únicas', emptyLines: 'Vacías', dupLines: 'Duplicadas' },
}

const exampleText = `banana
apple
cherry
apple
date

banana
elderberry

cherry
fig
apple`

export default function TextSortPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const lines = input.split('\n')
  const totalLines = lines.length
  const emptyLines = lines.filter(l => l.trim() === '').length
  const uniqueLines = new Set(lines.filter(l => l.trim() !== '')).size
  const dupLines = totalLines - emptyLines - uniqueLines

  const sortAsc = () => setOutput(input.split('\n').sort((a, b) => a.localeCompare(b)).join('\n'))
  const sortDesc = () => setOutput(input.split('\n').sort((a, b) => b.localeCompare(a)).join('\n'))
  const sortRandom = () => {
    const arr = input.split('\n')
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    setOutput(arr.join('\n'))
  }
  const removeDup = () => {
    const seen = new Set<string>()
    setOutput(input.split('\n').filter(l => { if (seen.has(l)) return false; seen.add(l); return true }).join('\n'))
  }
  const removeEmpty = () => setOutput(input.split('\n').filter(l => l.trim() !== '').join('\n'))

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📋 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={sortAsc} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.sortAsc}</button>
          <button onClick={sortDesc} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.sortDesc}</button>
          <button onClick={sortRandom} className="px-5 py-2.5 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition font-medium text-sm">{u.sortRandom}</button>
          <button onClick={removeDup} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.removeDup}</button>
          <button onClick={removeEmpty} className="px-5 py-2.5 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition font-medium text-sm">{u.removeEmpty}</button>
          <button onClick={() => { setInput(exampleText); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        {input && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="bg-indigo-50 rounded-xl p-3 text-center"><div className="text-xs text-indigo-500">{u.totalLines}</div><div className="text-xl font-bold text-indigo-700">{totalLines}</div></div>
            <div className="bg-emerald-50 rounded-xl p-3 text-center"><div className="text-xs text-emerald-500">{u.uniqueLines}</div><div className="text-xl font-bold text-emerald-700">{uniqueLines}</div></div>
            <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-xs text-gray-500">{u.emptyLines}</div><div className="text-xl font-bold text-gray-700">{emptyLines}</div></div>
            <div className="bg-amber-50 rounded-xl p-3 text-center"><div className="text-xs text-amber-500">{u.dupLines}</div><div className="text-xl font-bold text-amber-700">{dupLines > 0 ? dupLines : 0}</div></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="line 1&#10;line 2&#10;line 3" className="w-full h-72 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-72 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}