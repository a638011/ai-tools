'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '小费/AA制计算器', desc: '快速计算小费和每人应付金额', bill: '账单金额', tipPercent: '小费比例 (%)', people: '人数', calculate: '🧮 计算', tipAmount: '小费金额', total: '总计', perPerson: '每人应付', clear: '清空' },
  en: { title: 'Tip Calculator', desc: 'Quickly calculate tips and split bills', bill: 'Bill Amount', tipPercent: 'Tip (%)', people: 'People', calculate: '🧮 Calculate', tipAmount: 'Tip Amount', total: 'Total', perPerson: 'Per Person', clear: 'Clear' },
  ja: { title: 'チップ計算機', desc: 'チップと割り勘を素早く計算', bill: '請求額', tipPercent: 'チップ率 (%)', people: '人数', calculate: '🧮 計算', tipAmount: 'チップ額', total: '合計', perPerson: '一人当たり', clear: 'クリア' },
  ko: { title: '팁 계산기', desc: '팁과 더치페이를 빠르게 계산', bill: '청구 금액', tipPercent: '팁 비율 (%)', people: '인원', calculate: '🧮 계산', tipAmount: '팁 금액', total: '합계', perPerson: '1인당', clear: '지우기' },
  es: { title: 'Calculadora de Propinas', desc: 'Calcula propinas y divide cuentas rápidamente', bill: 'Monto', tipPercent: 'Propina (%)', people: 'Personas', calculate: '🧮 Calcular', tipAmount: 'Propina', total: 'Total', perPerson: 'Por Persona', clear: 'Limpiar' },
}

export default function TipCalculatorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [bill, setBill] = useState('')
  const [tipPercent, setTipPercent] = useState('15')
  const [people, setPeople] = useState('1')
  const [result, setResult] = useState<{ tip: number; total: number; perPerson: number } | null>(null)

  const calculate = () => {
    const b = parseFloat(bill)
    const tp = parseFloat(tipPercent)
    const p = parseInt(people)
    if (isNaN(b) || isNaN(tp) || isNaN(p) || b <= 0 || p <= 0) return
    const tip = b * tp / 100
    const total = b + tip
    setResult({ tip, total, perPerson: total / p })
  }

  const presets = [10, 15, 18, 20, 25]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">💰 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 block mb-1">{u.bill}</label>
            <input type="number" value={bill} onChange={e => setBill(e.target.value)} placeholder="0.00" min="0" step="0.01"
              className="w-full border rounded-xl px-4 py-2.5 text-lg font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 block mb-1">{u.tipPercent}</label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {presets.map(p => (
                <button key={p} onClick={() => setTipPercent(String(p))}
                  className={`px-3 py-1.5 rounded-lg text-sm transition ${tipPercent === String(p) ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>{p}%</button>
              ))}
            </div>
            <input type="number" value={tipPercent} onChange={e => setTipPercent(e.target.value)} min="0" step="1"
              className="w-full border rounded-xl px-4 py-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 block mb-1">{u.people}</label>
            <div className="flex items-center gap-3">
              <button onClick={() => setPeople(String(Math.max(1, parseInt(people || '1') - 1)))} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl text-lg font-bold transition">−</button>
              <input type="number" value={people} onChange={e => setPeople(e.target.value)} min="1"
                className="w-20 text-center border rounded-xl px-2 py-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
              <button onClick={() => setPeople(String(parseInt(people || '1') + 1))} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl text-lg font-bold transition">+</button>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={calculate} className="flex-1 px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.calculate}</button>
            <button onClick={() => { setBill(''); setTipPercent('15'); setPeople('1'); setResult(null) }} className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>

          {result && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 space-y-3 mt-4">
              <div className="flex justify-between"><span className="text-gray-600">{u.tipAmount}</span><span className="font-mono font-bold">${result.tip.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">{u.total}</span><span className="font-mono font-bold">${result.total.toFixed(2)}</span></div>
              <div className="border-t border-indigo-200 pt-3 flex justify-between"><span className="text-gray-800 font-semibold">{u.perPerson}</span><span className="font-mono font-bold text-xl text-indigo-600">${result.perPerson.toFixed(2)}</span></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
