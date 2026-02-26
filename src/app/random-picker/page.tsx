'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '随机抽签工具', desc: '输入选项列表，随机抽取一个或多个', inputLabel: '选项列表（每行一个）', count: '抽取数量', draw: '🎲 抽签', drawOne: '🎯 抽一个', clear: '清空', reset: '重新抽签', result: '抽签结果', noDup: '不重复抽取', allowDup: '允许重复', placeholder: '选项1\n选项2\n选项3\n...', noOptions: '请输入至少一个选项', tooMany: '抽取数量不能超过选项数（不重复模式）', history: '历史记录', round: '第{n}轮', clearHistory: '清除历史', loadExample: '加载示例' },
  en: { title: 'Random Picker', desc: 'Enter options and randomly pick one or more', inputLabel: 'Options (one per line)', count: 'Pick Count', draw: '🎲 Draw', drawOne: '🎯 Pick One', clear: 'Clear', reset: 'Redraw', result: 'Result', noDup: 'No Duplicates', allowDup: 'Allow Duplicates', placeholder: 'Option 1\nOption 2\nOption 3\n...', noOptions: 'Please enter at least one option', tooMany: 'Count exceeds options (no-dup mode)', history: 'History', round: 'Round {n}', clearHistory: 'Clear History', loadExample: 'Load Example' },
  ja: { title: 'ランダム抽選ツール', desc: '選択肢を入力してランダムに抽選', inputLabel: '選択肢（1行に1つ）', count: '抽選数', draw: '🎲 抽選', drawOne: '🎯 1つ選ぶ', clear: 'クリア', reset: '再抽選', result: '結果', noDup: '重複なし', allowDup: '重複あり', placeholder: '選択肢1\n選択肢2\n選択肢3\n...', noOptions: '選択肢を入力してください', tooMany: '抽選数が選択肢数を超えています', history: '履歴', round: '第{n}回', clearHistory: '履歴クリア', loadExample: '例を読込' },
  ko: { title: '랜덤 추첨 도구', desc: '옵션을 입력하고 랜덤으로 추첨', inputLabel: '옵션 (줄당 하나)', count: '추첨 수', draw: '🎲 추첨', drawOne: '🎯 하나 뽑기', clear: '지우기', reset: '다시 추첨', result: '결과', noDup: '중복 없음', allowDup: '중복 허용', placeholder: '옵션 1\n옵션 2\n옵션 3\n...', noOptions: '옵션을 입력하세요', tooMany: '추첨 수가 옵션 수를 초과합니다', history: '기록', round: '{n}회차', clearHistory: '기록 삭제', loadExample: '예제 로드' },
  es: { title: 'Selector Aleatorio', desc: 'Ingresa opciones y selecciona al azar', inputLabel: 'Opciones (una por línea)', count: 'Cantidad', draw: '🎲 Sortear', drawOne: '🎯 Elegir Uno', clear: 'Limpiar', reset: 'Repetir', result: 'Resultado', noDup: 'Sin Duplicados', allowDup: 'Con Duplicados', placeholder: 'Opción 1\nOpción 2\nOpción 3\n...', noOptions: 'Ingresa al menos una opción', tooMany: 'Cantidad excede opciones (sin duplicados)', history: 'Historial', round: 'Ronda {n}', clearHistory: 'Borrar Historial', loadExample: 'Cargar Ejemplo' },
}

const exampleOptions = `Alice\nBob\nCharlie\nDiana\nEve\nFrank\nGrace\nHenry`

export default function RandomPickerPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [count, setCount] = useState(1)
  const [noDup, setNoDup] = useState(true)
  const [results, setResults] = useState<string[]>([])
  const [history, setHistory] = useState<string[][]>([])
  const [error, setError] = useState('')
  const [animating, setAnimating] = useState(false)

  const getOptions = () => input.split('\n').map(s => s.trim()).filter(Boolean)

  const draw = (n: number) => {
    setError('')
    const opts = getOptions()
    if (opts.length === 0) { setError(u.noOptions); return }
    if (noDup && n > opts.length) { setError(u.tooMany); return }

    setAnimating(true)
    setTimeout(() => {
      const picked: string[] = []
      if (noDup) {
        const pool = [...opts]
        for (let i = 0; i < n; i++) {
          const idx = Math.floor(Math.random() * pool.length)
          picked.push(pool.splice(idx, 1)[0])
        }
      } else {
        for (let i = 0; i < n; i++) {
          picked.push(opts[Math.floor(Math.random() * opts.length)])
        }
      }
      setResults(picked)
      setHistory(prev => [picked, ...prev])
      setAnimating(false)
    }, 500)
  }

  const clear = () => { setInput(''); setResults([]); setError('') }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🎲 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">{u.inputLabel}</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={u.placeholder}
            className="w-full h-40 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none mb-4" />

          <div className="flex flex-wrap gap-3 items-center mb-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">{u.count}</label>
              <input type="number" min={1} value={count} onChange={e => setCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 border rounded-xl px-3 py-2 text-sm text-center focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
            </div>
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button onClick={() => setNoDup(true)} className={`px-3 py-1.5 rounded-lg text-xs transition ${noDup ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.noDup}</button>
              <button onClick={() => setNoDup(false)} className={`px-3 py-1.5 rounded-lg text-xs transition ${!noDup ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.allowDup}</button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={() => draw(count)} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.draw}</button>
            <button onClick={() => draw(1)} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium text-sm">{u.drawOne}</button>
            <button onClick={() => { setInput(exampleOptions); setResults([]); setError('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
            <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">{error}</div>}

        {(results.length > 0 || animating) && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 text-center">
            <h3 className="font-semibold text-gray-800 mb-4">{u.result}</h3>
            {animating ? (
              <div className="text-4xl animate-bounce">🎲</div>
            ) : (
              <div className="flex flex-wrap justify-center gap-3">
                {results.map((r, i) => (
                  <div key={i} className="px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-lg font-semibold border border-indigo-200">{r}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {history.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">{u.history}</h3>
              <button onClick={() => setHistory([])} className="text-xs text-gray-400 hover:text-gray-600 transition">{u.clearHistory}</button>
            </div>
            <div className="space-y-2 max-h-48 overflow-auto">
              {history.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400 text-xs w-16 shrink-0">{u.round.replace('{n}', String(history.length - i))}</span>
                  <div className="flex flex-wrap gap-1">{h.map((v, j) => <span key={j} className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">{v}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
