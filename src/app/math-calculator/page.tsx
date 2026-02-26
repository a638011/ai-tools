'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '科学计算器', desc: '支持基本运算、三角函数、对数、幂运算', clear: 'AC', del: '⌫', eq: '=', error: '错误', deg: '角度', rad: '弧度' },
  en: { title: 'Scientific Calculator', desc: 'Basic operations, trigonometry, logarithms, powers', clear: 'AC', del: '⌫', eq: '=', error: 'Error', deg: 'DEG', rad: 'RAD' },
  ja: { title: '関数電卓', desc: '基本演算、三角関数、対数、べき乗', clear: 'AC', del: '⌫', eq: '=', error: 'エラー', deg: '度', rad: 'ラジアン' },
  ko: { title: '공학 계산기', desc: '기본 연산, 삼각함수, 로그, 거듭제곱', clear: 'AC', del: '⌫', eq: '=', error: '오류', deg: 'DEG', rad: 'RAD' },
  es: { title: 'Calculadora Científica', desc: 'Operaciones básicas, trigonometría, logaritmos, potencias', clear: 'AC', del: '⌫', eq: '=', error: 'Error', deg: 'DEG', rad: 'RAD' },
}

export default function MathCalculatorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')
  const [isResult, setIsResult] = useState(false)
  const [isDeg, setIsDeg] = useState(true)

  const append = (val: string) => {
    if (isResult) { setDisplay(val); setExpression(val); setIsResult(false); return }
    if (display === '0' && val !== '.') { setDisplay(val); setExpression(expression ? expression + val : val) }
    else { setDisplay(display + val); setExpression(expression + val) }
  }

  const appendOp = (op: string) => {
    setIsResult(false)
    setExpression(expression + op)
    setDisplay('0')
  }

  const appendFunc = (fn: string) => {
    setIsResult(false)
    setExpression(expression + fn + '(')
    setDisplay('0')
  }

  const clear = () => { setDisplay('0'); setExpression(''); setIsResult(false) }
  const del = () => {
    if (isResult) { clear(); return }
    const newDisp = display.slice(0, -1) || '0'
    setDisplay(newDisp)
    setExpression(expression.slice(0, -1))
  }

  const calculate = () => {
    try {
      let expr = expression
        .replace(/×/g, '*').replace(/÷/g, '/')
        .replace(/π/g, String(Math.PI))
        .replace(/e(?![x])/g, String(Math.E))
      const toRad = isDeg ? `(Math.PI/180)*` : ''
      expr = expr.replace(/sin\(/g, `Math.sin(${toRad}`)
      expr = expr.replace(/cos\(/g, `Math.cos(${toRad}`)
      expr = expr.replace(/tan\(/g, `Math.tan(${toRad}`)
      expr = expr.replace(/log\(/g, 'Math.log10(')
      expr = expr.replace(/ln\(/g, 'Math.log(')
      expr = expr.replace(/sqrt\(/g, 'Math.sqrt(')
      expr = expr.replace(/\^/g, '**')
      const result = new Function(`return (${expr})`)()
      const display = Number.isFinite(result) ? String(parseFloat(result.toPrecision(12))) : u.error
      setDisplay(display)
      setExpression(display)
      setIsResult(true)
    } catch { setDisplay(u.error); setIsResult(true) }
  }

  const btnClass = (extra = '') => `flex items-center justify-center rounded-xl text-lg font-medium transition active:scale-95 h-14 ${extra}`

  const buttons = [
    [{ l: u.clear, a: clear, c: 'bg-red-100 text-red-600 hover:bg-red-200 col-span-1' },
     { l: '(', a: () => append('('), c: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
     { l: ')', a: () => append(')'), c: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
     { l: u.del, a: del, c: 'bg-orange-100 text-orange-600 hover:bg-orange-200' },
     { l: '÷', a: () => appendOp('÷'), c: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' }],
    [{ l: 'sin', a: () => appendFunc('sin'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: '7', a: () => append('7'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '8', a: () => append('8'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '9', a: () => append('9'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '×', a: () => appendOp('×'), c: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' }],
    [{ l: 'cos', a: () => appendFunc('cos'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: '4', a: () => append('4'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '5', a: () => append('5'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '6', a: () => append('6'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '−', a: () => appendOp('-'), c: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' }],
    [{ l: 'tan', a: () => appendFunc('tan'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: '1', a: () => append('1'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '2', a: () => append('2'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '3', a: () => append('3'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '+', a: () => appendOp('+'), c: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' }],
    [{ l: 'log', a: () => appendFunc('log'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: 'ln', a: () => appendFunc('ln'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: '0', a: () => append('0'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: '.', a: () => append('.'), c: 'bg-white text-gray-800 hover:bg-gray-50 border' },
     { l: u.eq, a: calculate, c: 'bg-indigo-600 text-white hover:bg-indigo-700' }],
    [{ l: '√', a: () => appendFunc('sqrt'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: 'xʸ', a: () => appendOp('^'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: 'π', a: () => append('π'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: 'e', a: () => append('e'), c: 'bg-purple-50 text-purple-600 hover:bg-purple-100 text-sm' },
     { l: '%', a: () => appendOp('/100*'), c: 'bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm' }],
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-md mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔢 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-end mb-2">
            <button onClick={() => setIsDeg(!isDeg)} className="text-xs px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition">{isDeg ? u.deg : u.rad}</button>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="text-right text-xs text-gray-400 font-mono h-5 overflow-hidden">{expression || ' '}</div>
            <div className="text-right text-3xl font-mono font-bold text-gray-800 overflow-x-auto">{display}</div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {buttons.flat().map((btn, i) => (
              <button key={i} onClick={btn.a} className={btnClass(btn.c)}>{btn.l}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
