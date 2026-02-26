'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'BMI计算器', desc: '计算身体质量指数，评估健康范围', height: '身高', weight: '体重', calculate: '🧮 计算', clear: '清空', metric: '公制(cm/kg)', imperial: '英制(ft,in/lb)', result: 'BMI结果', bmi: 'BMI值', category: '分类', underweight: '偏瘦', normal: '正常', overweight: '偏胖', obese: '肥胖', cm: 'cm', kg: 'kg', ft: 'ft', in: 'in', lb: 'lb', range: '健康范围参考', rangeUnder: '<18.5 偏瘦', rangeNormal: '18.5-24.9 正常', rangeOver: '25-29.9 偏胖', rangeObese: '≥30 肥胖' },
  en: { title: 'BMI Calculator', desc: 'Calculate Body Mass Index and health range', height: 'Height', weight: 'Weight', calculate: '🧮 Calculate', clear: 'Clear', metric: 'Metric(cm/kg)', imperial: 'Imperial(ft,in/lb)', result: 'BMI Result', bmi: 'BMI', category: 'Category', underweight: 'Underweight', normal: 'Normal', overweight: 'Overweight', obese: 'Obese', cm: 'cm', kg: 'kg', ft: 'ft', in: 'in', lb: 'lb', range: 'Health Range Reference', rangeUnder: '<18.5 Underweight', rangeNormal: '18.5-24.9 Normal', rangeOver: '25-29.9 Overweight', rangeObese: '≥30 Obese' },
  ja: { title: 'BMI計算機', desc: 'ボディマス指数を計算し健康範囲を評価', height: '身長', weight: '体重', calculate: '🧮 計算', clear: 'クリア', metric: 'メートル法(cm/kg)', imperial: 'ヤードポンド法(ft,in/lb)', result: 'BMI結果', bmi: 'BMI値', category: '分類', underweight: '低体重', normal: '普通', overweight: '過体重', obese: '肥満', cm: 'cm', kg: 'kg', ft: 'ft', in: 'in', lb: 'lb', range: '健康範囲参考', rangeUnder: '<18.5 低体重', rangeNormal: '18.5-24.9 普通', rangeOver: '25-29.9 過体重', rangeObese: '≥30 肥満' },
  ko: { title: 'BMI 계산기', desc: '체질량지수 계산 및 건강 범위 평가', height: '키', weight: '체중', calculate: '🧮 계산', clear: '지우기', metric: '미터법(cm/kg)', imperial: '야드파운드(ft,in/lb)', result: 'BMI 결과', bmi: 'BMI', category: '분류', underweight: '저체중', normal: '정상', overweight: '과체중', obese: '비만', cm: 'cm', kg: 'kg', ft: 'ft', in: 'in', lb: 'lb', range: '건강 범위 참고', rangeUnder: '<18.5 저체중', rangeNormal: '18.5-24.9 정상', rangeOver: '25-29.9 과체중', rangeObese: '≥30 비만' },
  es: { title: 'Calculadora IMC', desc: 'Calcula el Índice de Masa Corporal y rango saludable', height: 'Altura', weight: 'Peso', calculate: '🧮 Calcular', clear: 'Limpiar', metric: 'Métrico(cm/kg)', imperial: 'Imperial(ft,in/lb)', result: 'Resultado IMC', bmi: 'IMC', category: 'Categoría', underweight: 'Bajo peso', normal: 'Normal', overweight: 'Sobrepeso', obese: 'Obeso', cm: 'cm', kg: 'kg', ft: 'ft', in: 'in', lb: 'lb', range: 'Referencia de Rango Saludable', rangeUnder: '<18.5 Bajo peso', rangeNormal: '18.5-24.9 Normal', rangeOver: '25-29.9 Sobrepeso', rangeObese: '≥30 Obeso' },
}

export default function BmiCalculatorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [unit, setUnit] = useState<'metric'|'imperial'>('metric')
  const [cm, setCm] = useState(''); const [kg, setKg] = useState('')
  const [ft, setFt] = useState(''); const [inch, setInch] = useState(''); const [lb, setLb] = useState('')
  const [bmi, setBmi] = useState<number|null>(null)

  const getCategory = (v: number) => {
    if (v < 18.5) return { label: u.underweight, color: 'text-blue-600', bg: 'bg-blue-50' }
    if (v < 25) return { label: u.normal, color: 'text-green-600', bg: 'bg-green-50' }
    if (v < 30) return { label: u.overweight, color: 'text-yellow-600', bg: 'bg-yellow-50' }
    return { label: u.obese, color: 'text-red-600', bg: 'bg-red-50' }
  }

  const calc = () => {
    let h: number, w: number
    if (unit === 'metric') {
      h = parseFloat(cm) / 100; w = parseFloat(kg)
    } else {
      h = (parseFloat(ft) * 12 + parseFloat(inch || '0')) * 0.0254; w = parseFloat(lb) * 0.453592
    }
    if (!h || !w || h <= 0 || w <= 0) return
    setBmi(w / (h * h))
  }

  const clear = () => { setCm(''); setKg(''); setFt(''); setInch(''); setLb(''); setBmi(null) }
  const pct = bmi ? Math.min(100, Math.max(0, (bmi / 40) * 100)) : 0

  const ranges = [
    { label: u.rangeUnder, color: 'bg-blue-400', w: '46.25%' },
    { label: u.rangeNormal, color: 'bg-green-400', w: '16%' },
    { label: u.rangeOver, color: 'bg-yellow-400', w: '12.5%' },
    { label: u.rangeObese, color: 'bg-red-400', w: '25.25%' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">⚖️ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex bg-gray-100 rounded-xl p-1 mb-4 w-fit">
            <button onClick={() => { setUnit('metric'); setBmi(null) }} className={`px-4 py-2 rounded-lg text-sm transition ${unit === 'metric' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.metric}</button>
            <button onClick={() => { setUnit('imperial'); setBmi(null) }} className={`px-4 py-2 rounded-lg text-sm transition ${unit === 'imperial' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.imperial}</button>
          </div>

          {unit === 'metric' ? (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.height} ({u.cm})</label><input type="number" value={cm} onChange={e => setCm(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" placeholder="170" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.weight} ({u.kg})</label><input type="number" value={kg} onChange={e => setKg(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" placeholder="65" /></div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.height} ({u.ft})</label><input type="number" value={ft} onChange={e => setFt(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" placeholder="5" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.height} ({u.in})</label><input type="number" value={inch} onChange={e => setInch(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" placeholder="7" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.weight} ({u.lb})</label><input type="number" value={lb} onChange={e => setLb(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" placeholder="143" /></div>
            </div>
          )}

          <div className="flex gap-2">
            <button onClick={calc} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.calculate}</button>
            <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {bmi !== null && (
          <div className={`rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 ${getCategory(bmi).bg}`}>
            <h3 className="font-semibold text-gray-800 mb-3">{u.result}</h3>
            <div className="text-center mb-4">
              <div className={`text-5xl font-bold ${getCategory(bmi).color}`}>{bmi.toFixed(1)}</div>
              <div className={`text-lg font-medium mt-1 ${getCategory(bmi).color}`}>{getCategory(bmi).label}</div>
            </div>
            <div className="relative h-4 rounded-full overflow-hidden flex mb-2">
              {ranges.map((r, i) => <div key={i} className={`${r.color} h-full`} style={{ width: r.w }} />)}
              <div className="absolute top-0 h-full w-0.5 bg-black" style={{ left: `${pct}%` }} />
            </div>
            <div className="flex justify-between text-xs text-gray-500"><span>0</span><span>18.5</span><span>25</span><span>30</span><span>40</span></div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">{u.range}</h3>
          <div className="space-y-2">
            {ranges.map((r, i) => (
              <div key={i} className="flex items-center gap-3"><div className={`w-4 h-4 rounded ${r.color}`} /><span className="text-sm text-gray-600">{r.label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
