'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '贷款计算器', desc: '计算等额本息/等额本金的月供和总利息', amount: '贷款金额', rate: '年利率(%)', term: '贷款期限(月)', equalPayment: '等额本息', equalPrincipal: '等额本金', calculate: '🧮 计算', monthly: '月供', totalInterest: '总利息', totalPayment: '总还款额', firstMonth: '首月月供', lastMonth: '末月月供', clear: '清空', schedule: '还款明细', month: '月', principalPart: '本金', interestPart: '利息', remaining: '剩余本金', currency: '¥' },
  en: { title: 'Loan Calculator', desc: 'Calculate monthly payment and total interest', amount: 'Loan Amount', rate: 'Annual Rate(%)', term: 'Term(months)', equalPayment: 'Equal Payment', equalPrincipal: 'Equal Principal', calculate: '🧮 Calculate', monthly: 'Monthly Payment', totalInterest: 'Total Interest', totalPayment: 'Total Payment', firstMonth: 'First Month', lastMonth: 'Last Month', clear: 'Clear', schedule: 'Amortization', month: 'Month', principalPart: 'Principal', interestPart: 'Interest', remaining: 'Remaining', currency: '$' },
  ja: { title: 'ローン計算機', desc: '元利均等/元金均等の月々返済額と総利息を計算', amount: '借入金額', rate: '年利率(%)', term: '返済期間(月)', equalPayment: '元利均等', equalPrincipal: '元金均等', calculate: '🧮 計算', monthly: '月々返済額', totalInterest: '総利息', totalPayment: '総返済額', firstMonth: '初月返済額', lastMonth: '最終月返済額', clear: 'クリア', schedule: '返済明細', month: '月', principalPart: '元金', interestPart: '利息', remaining: '残高', currency: '¥' },
  ko: { title: '대출 계산기', desc: '원리금균등/원금균등 월 상환액과 총 이자 계산', amount: '대출 금액', rate: '연이율(%)', term: '기간(개월)', equalPayment: '원리금균등', equalPrincipal: '원금균등', calculate: '🧮 계산', monthly: '월 상환액', totalInterest: '총 이자', totalPayment: '총 상환액', firstMonth: '첫 달', lastMonth: '마지막 달', clear: '지우기', schedule: '상환 내역', month: '월', principalPart: '원금', interestPart: '이자', remaining: '잔액', currency: '₩' },
  es: { title: 'Calculadora de Préstamos', desc: 'Calcula cuota mensual e interés total', amount: 'Monto', rate: 'Tasa anual(%)', term: 'Plazo(meses)', equalPayment: 'Cuota Fija', equalPrincipal: 'Capital Fijo', calculate: '🧮 Calcular', monthly: 'Cuota Mensual', totalInterest: 'Interés Total', totalPayment: 'Pago Total', firstMonth: 'Primer Mes', lastMonth: 'Último Mes', clear: 'Limpiar', schedule: 'Amortización', month: 'Mes', principalPart: 'Capital', interestPart: 'Interés', remaining: 'Saldo', currency: '€' },
}

interface ScheduleRow { month: number; payment: number; principal: number; interest: number; remaining: number }

export default function LoanCalculatorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [term, setTerm] = useState('')
  const [mode, setMode] = useState<'equal'|'principal'>('equal')
  const [result, setResult] = useState<{ monthly: number; totalInterest: number; totalPayment: number; first: number; last: number; schedule: ScheduleRow[] } | null>(null)

  const calc = () => {
    const P = parseFloat(amount), R = parseFloat(rate) / 100 / 12, N = parseInt(term)
    if (!P || !R || !N) return
    const rows: ScheduleRow[] = []
    let totalInterest = 0, rem = P
    if (mode === 'equal') {
      const mp = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1)
      for (let i = 1; i <= N; i++) {
        const intPart = rem * R, prinPart = mp - intPart
        rem -= prinPart; totalInterest += intPart
        rows.push({ month: i, payment: mp, principal: prinPart, interest: intPart, remaining: Math.max(0, rem) })
      }
      setResult({ monthly: mp, totalInterest, totalPayment: mp * N, first: mp, last: mp, schedule: rows })
    } else {
      const prinPart = P / N
      for (let i = 1; i <= N; i++) {
        const intPart = rem * R, mp = prinPart + intPart
        rem -= prinPart; totalInterest += intPart
        rows.push({ month: i, payment: mp, principal: prinPart, interest: intPart, remaining: Math.max(0, rem) })
      }
      setResult({ monthly: rows[0].payment, totalInterest, totalPayment: P + totalInterest, first: rows[0].payment, last: rows[N - 1].payment, schedule: rows })
    }
  }

  const fmt = (n: number) => n.toFixed(2)
  const clear = () => { setAmount(''); setRate(''); setTerm(''); setResult(null) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">💰 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.amount}</label><input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.rate}</label><input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.term}</label><input type="number" value={term} onChange={e => setTerm(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button onClick={() => setMode('equal')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'equal' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.equalPayment}</button>
              <button onClick={() => setMode('principal')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'principal' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.equalPrincipal}</button>
            </div>
            <button onClick={calc} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.calculate}</button>
            <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {result && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[{ l: mode === 'equal' ? u.monthly : u.firstMonth, v: fmt(result.first) }, mode === 'principal' ? { l: u.lastMonth, v: fmt(result.last) } : null, { l: u.totalInterest, v: fmt(result.totalInterest) }, { l: u.totalPayment, v: fmt(result.totalPayment) }].filter(Boolean).map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                  <div className="text-xs text-gray-500 mb-1">{item!.l}</div>
                  <div className="text-lg font-bold text-indigo-600">{u.currency}{item!.v}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 max-h-96 overflow-auto">
              <h3 className="font-semibold text-gray-800 mb-3">{u.schedule}</h3>
              <table className="w-full text-sm">
                <thead><tr className="text-gray-500 border-b">{[u.month, u.monthly, u.principalPart, u.interestPart, u.remaining].map(h => <th key={h} className="py-2 px-2 text-right font-medium">{h}</th>)}</tr></thead>
                <tbody>{result.schedule.map(r => (
                  <tr key={r.month} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-1.5 px-2 text-right">{r.month}</td>
                    <td className="py-1.5 px-2 text-right">{fmt(r.payment)}</td>
                    <td className="py-1.5 px-2 text-right">{fmt(r.principal)}</td>
                    <td className="py-1.5 px-2 text-right">{fmt(r.interest)}</td>
                    <td className="py-1.5 px-2 text-right">{fmt(r.remaining)}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
