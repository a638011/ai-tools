'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '百分比计算器', desc: 'X是Y的百分之几？X的Y%是多少？从X到Y变化了百分之几？', mode1: 'X是Y的百分之几', mode2: 'X的Y%是多少', mode3: '变化百分比', calculate: '计算', result: '结果', valueX: '数值 X', valueY: '数值 Y', percent: '百分比 Y%', fromVal: '起始值', toVal: '结束值', isWhatPercent: '是', ofWhat: '的', percentSign: '%', answer: '答案', clear: '清空' },
  en: { title: 'Percentage Calculator', desc: 'What % is X of Y? What is Y% of X? What is the % change from X to Y?', mode1: 'X is what % of Y', mode2: 'What is Y% of X', mode3: '% Change', calculate: 'Calculate', result: 'Result', valueX: 'Value X', valueY: 'Value Y', percent: 'Percent Y%', fromVal: 'From', toVal: 'To', isWhatPercent: 'is', ofWhat: 'of', percentSign: '%', answer: 'Answer', clear: 'Clear' },
  ja: { title: 'パーセント計算機', desc: 'XはYの何%？Xの Y%はいくつ？XからYへの変化率は？', mode1: 'XはYの何%', mode2: 'XのY%はいくつ', mode3: '変化率', calculate: '計算', result: '結果', valueX: '値 X', valueY: '値 Y', percent: 'パーセント Y%', fromVal: '開始値', toVal: '終了値', isWhatPercent: 'は', ofWhat: 'の', percentSign: '%', answer: '答え', clear: 'クリア' },
  ko: { title: '백분율 계산기', desc: 'X는 Y의 몇 %? X의 Y%는? X에서 Y로의 변화율은?', mode1: 'X는 Y의 몇 %', mode2: 'X의 Y%는', mode3: '변화율', calculate: '계산', result: '결과', valueX: '값 X', valueY: '값 Y', percent: '백분율 Y%', fromVal: '시작값', toVal: '끝값', isWhatPercent: '는', ofWhat: '의', percentSign: '%', answer: '답', clear: '지우기' },
  es: { title: 'Calculadora de Porcentaje', desc: '¿Qué % es X de Y? ¿Cuánto es Y% de X? ¿Cuál es el % de cambio de X a Y?', mode1: 'X es qué % de Y', mode2: 'Cuánto es Y% de X', mode3: '% de Cambio', calculate: 'Calcular', result: 'Resultado', valueX: 'Valor X', valueY: 'Valor Y', percent: 'Porcentaje Y%', fromVal: 'Desde', toVal: 'Hasta', isWhatPercent: 'es', ofWhat: 'de', percentSign: '%', answer: 'Respuesta', clear: 'Limpiar' },
}

export default function PercentageCalcPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [mode, setMode] = useState<1 | 2 | 3>(1)
  const [x, setX] = useState('')
  const [y, setY] = useState('')
  const [result, setResult] = useState('')

  const calc = () => {
    const a = parseFloat(x), b = parseFloat(y)
    if (isNaN(a) || isNaN(b)) { setResult('—'); return }
    if (mode === 1) {
      if (b === 0) { setResult('—'); return }
      setResult(`${(a / b * 100).toFixed(4)}%`)
    } else if (mode === 2) {
      setResult(`${(a * b / 100).toFixed(4)}`)
    } else {
      if (a === 0) { setResult('—'); return }
      const change = ((b - a) / Math.abs(a)) * 100
      setResult(`${change >= 0 ? '+' : ''}${change.toFixed(4)}%`)
    }
  }

  const clear = () => { setX(''); setY(''); setResult('') }

  const modes: { key: 1 | 2 | 3; label: string }[] = [
    { key: 1, label: u.mode1 },
    { key: 2, label: u.mode2 },
    { key: 3, label: u.mode3 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔢 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {modes.map(m => (
            <button key={m.key} onClick={() => { setMode(m.key); setResult('') }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition ${mode === m.key ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
              {m.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
          {mode === 1 && (
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <input type="number" value={x} onChange={e => setX(e.target.value)} placeholder="X" className="w-32 border rounded-xl px-4 py-3 text-center text-lg font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
              <span className="text-gray-500">{u.isWhatPercent}</span>
              <input type="number" value={y} onChange={e => setY(e.target.value)} placeholder="Y" className="w-32 border rounded-xl px-4 py-3 text-center text-lg font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
              <span className="text-gray-500">{u.ofWhat} ?%</span>
            </div>
          )}
          {mode === 2 && (
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <input type="number" value={x} onChange={e => setX(e.target.value)} placeholder="X" className="w-32 border rounded-xl px-4 py-3 text-center text-lg font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
              <span className="text-gray-500">{u.ofWhat}</span>
              <input type="number" value={y} onChange={e => setY(e.target.value)} placeholder="Y%" className="w-32 border rounded-xl px-4 py-3 text-center text-lg font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
              <span className="text-gray-500">{u.percentSign} = ?</span>
            </div>
          )}
          {mode === 3 && (
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <span className="text-gray-500">{u.fromVal}:</span>
              <input type="number" value={x} onChange={e => setX(e.target.value)} placeholder="X" className="w-32 border rounded-xl px-4 py-3 text-center text-lg font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
              <span className="text-gray-500">→ {u.toVal}:</span>
              <input type="number" value={y} onChange={e => setY(e.target.value)} placeholder="Y" className="w-32 border rounded-xl px-4 py-3 text-center text-lg font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
              <span className="text-gray-500">= ?%</span>
            </div>
          )}

          <div className="flex gap-2 mt-5">
            <button onClick={calc} className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.calculate}</button>
            <button onClick={clear} className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {result && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <h3 className="font-semibold text-gray-800 mb-2">{u.answer}</h3>
            <div className="text-5xl font-bold text-indigo-600">{result}</div>
          </div>
        )}
      </div>
    </div>
  )
}
