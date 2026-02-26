'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '日期计算器', desc: '计算日期差或从日期加减天数', modeDiff: '日期差', modeAdd: '加减天数', startDate: '开始日期', endDate: '结束日期', baseDate: '基准日期', days: '天数', add: '加', subtract: '减', calculate: '🧮 计算', clear: '清空', resultDiff: '相差天数', resultDate: '计算结果', day: '天', week: '周', year: '年', month: '月', today: '今天' },
  en: { title: 'Date Calculator', desc: 'Calculate days between dates or add/subtract days', modeDiff: 'Date Diff', modeAdd: 'Add/Sub Days', startDate: 'Start Date', endDate: 'End Date', baseDate: 'Base Date', days: 'Days', add: 'Add', subtract: 'Subtract', calculate: '🧮 Calculate', clear: 'Clear', resultDiff: 'Days Between', resultDate: 'Result Date', day: 'days', week: 'weeks', year: 'years', month: 'months', today: 'Today' },
  ja: { title: '日付計算機', desc: '日付の差分計算または日数の加減算', modeDiff: '日付差', modeAdd: '日数加減', startDate: '開始日', endDate: '終了日', baseDate: '基準日', days: '日数', add: '加算', subtract: '減算', calculate: '🧮 計算', clear: 'クリア', resultDiff: '日数差', resultDate: '計算結果', day: '日', week: '週', year: '年', month: 'ヶ月', today: '今日' },
  ko: { title: '날짜 계산기', desc: '날짜 차이 계산 또는 날짜 가감', modeDiff: '날짜 차이', modeAdd: '날짜 가감', startDate: '시작일', endDate: '종료일', baseDate: '기준일', days: '일수', add: '더하기', subtract: '빼기', calculate: '🧮 계산', clear: '지우기', resultDiff: '일수 차이', resultDate: '계산 결과', day: '일', week: '주', year: '년', month: '개월', today: '오늘' },
  es: { title: 'Calculadora de Fechas', desc: 'Calcula diferencia entre fechas o suma/resta días', modeDiff: 'Diferencia', modeAdd: 'Sumar/Restar', startDate: 'Fecha Inicio', endDate: 'Fecha Fin', baseDate: 'Fecha Base', days: 'Días', add: 'Sumar', subtract: 'Restar', calculate: '🧮 Calcular', clear: 'Limpiar', resultDiff: 'Días de Diferencia', resultDate: 'Fecha Resultado', day: 'días', week: 'semanas', year: 'años', month: 'meses', today: 'Hoy' },
}

export default function DateCalculatorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [mode, setMode] = useState<'diff'|'add'>('diff')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [baseDate, setBaseDate] = useState('')
  const [daysInput, setDaysInput] = useState('')
  const [addMode, setAddMode] = useState<'add'|'sub'>('add')
  const [result, setResult] = useState<{ days?: number; weeks?: number; months?: number; years?: number; date?: string } | null>(null)

  const todayStr = () => new Date().toISOString().split('T')[0]

  const calcDiff = () => {
    if (!startDate || !endDate) return
    const s = new Date(startDate), e = new Date(endDate)
    const diffMs = e.getTime() - s.getTime()
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))
    const absDays = Math.abs(diffDays)
    setResult({ days: diffDays, weeks: Math.floor(absDays / 7), months: Math.floor(absDays / 30.44), years: Math.floor(absDays / 365.25) })
  }

  const calcAdd = () => {
    if (!baseDate || !daysInput) return
    const d = new Date(baseDate)
    const n = parseInt(daysInput)
    if (isNaN(n)) return
    d.setDate(d.getDate() + (addMode === 'add' ? n : -n))
    setResult({ date: d.toISOString().split('T')[0], days: n })
  }

  const clear = () => { setStartDate(''); setEndDate(''); setBaseDate(''); setDaysInput(''); setResult(null) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📅 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex bg-gray-100 rounded-xl p-1 mb-4 w-fit">
            <button onClick={() => { setMode('diff'); setResult(null) }} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'diff' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.modeDiff}</button>
            <button onClick={() => { setMode('add'); setResult(null) }} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'add' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.modeAdd}</button>
          </div>

          {mode === 'diff' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{u.startDate}</label>
                <div className="flex gap-2">
                  <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="flex-1 border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                  <button onClick={() => setStartDate(todayStr())} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs transition">{u.today}</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{u.endDate}</label>
                <div className="flex gap-2">
                  <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="flex-1 border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                  <button onClick={() => setEndDate(todayStr())} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs transition">{u.today}</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{u.baseDate}</label>
                <div className="flex gap-2">
                  <input type="date" value={baseDate} onChange={e => setBaseDate(e.target.value)} className="flex-1 border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                  <button onClick={() => setBaseDate(todayStr())} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs transition">{u.today}</button>
                </div>
              </div>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{u.days}</label>
                  <input type="number" value={daysInput} onChange={e => setDaysInput(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" placeholder="30" />
                </div>
                <div className="flex bg-gray-100 rounded-xl p-1">
                  <button onClick={() => setAddMode('add')} className={`px-3 py-2 rounded-lg text-sm transition ${addMode === 'add' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>+ {u.add}</button>
                  <button onClick={() => setAddMode('sub')} className={`px-3 py-2 rounded-lg text-sm transition ${addMode === 'sub' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>− {u.subtract}</button>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button onClick={mode === 'diff' ? calcDiff : calcAdd} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.calculate}</button>
            <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {result && mode === 'diff' && result.days !== undefined && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{u.resultDiff}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{ v: Math.abs(result.days), l: u.day }, { v: result.weeks!, l: u.week }, { v: result.months!, l: u.month }, { v: result.years!, l: u.year }].map((item, i) => (
                <div key={i} className="text-center p-4 bg-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600">{item.v}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.l}</div>
                </div>
              ))}
            </div>
            {result.days < 0 && <p className="text-sm text-gray-400 mt-3 text-center">({u.startDate} &gt; {u.endDate})</p>}
          </div>
        )}

        {result && mode === 'add' && result.date && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <h3 className="font-semibold text-gray-800 mb-3">{u.resultDate}</h3>
            <div className="text-4xl font-bold text-indigo-600">{result.date}</div>
          </div>
        )}
      </div>
    </div>
  )
}
