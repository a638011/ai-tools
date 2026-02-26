'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '单位换算器', desc: '支持长度、重量、温度、面积、体积等常见单位互转', length: '长度', weight: '重量', temperature: '温度', area: '面积', volume: '体积', from: '从', to: '到', value: '数值', result: '结果', swap: '⇄ 交换', clear: '清空' },
  en: { title: 'Unit Converter', desc: 'Convert between length, weight, temperature, area, volume units', length: 'Length', weight: 'Weight', temperature: 'Temperature', area: 'Area', volume: 'Volume', from: 'From', to: 'To', value: 'Value', result: 'Result', swap: '⇄ Swap', clear: 'Clear' },
  ja: { title: '単位変換器', desc: '長さ・重さ・温度・面積・体積の単位変換', length: '長さ', weight: '重さ', temperature: '温度', area: '面積', volume: '体積', from: '変換元', to: '変換先', value: '数値', result: '結果', swap: '⇄ 入替', clear: 'クリア' },
  ko: { title: '단위 변환기', desc: '길이, 무게, 온도, 면적, 부피 단위 변환', length: '길이', weight: '무게', temperature: '온도', area: '면적', volume: '부피', from: '변환 전', to: '변환 후', value: '값', result: '결과', swap: '⇄ 교환', clear: '지우기' },
  es: { title: 'Conversor de Unidades', desc: 'Convierte entre unidades de longitud, peso, temperatura, área, volumen', length: 'Longitud', weight: 'Peso', temperature: 'Temperatura', area: 'Área', volume: 'Volumen', from: 'De', to: 'A', value: 'Valor', result: 'Resultado', swap: '⇄ Intercambiar', clear: 'Limpiar' },
}

type UnitDef = { name: string; toBase: (v: number) => number; fromBase: (v: number) => number }
type Category = { key: string; units: UnitDef[] }

const categories: Category[] = [
  { key: 'length', units: [
    { name: 'mm', toBase: v => v / 1000, fromBase: v => v * 1000 },
    { name: 'cm', toBase: v => v / 100, fromBase: v => v * 100 },
    { name: 'm', toBase: v => v, fromBase: v => v },
    { name: 'km', toBase: v => v * 1000, fromBase: v => v / 1000 },
    { name: 'inch', toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
    { name: 'foot', toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
    { name: 'yard', toBase: v => v * 0.9144, fromBase: v => v / 0.9144 },
    { name: 'mile', toBase: v => v * 1609.344, fromBase: v => v / 1609.344 },
  ]},
  { key: 'weight', units: [
    { name: 'mg', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
    { name: 'g', toBase: v => v / 1000, fromBase: v => v * 1000 },
    { name: 'kg', toBase: v => v, fromBase: v => v },
    { name: 'ton', toBase: v => v * 1000, fromBase: v => v / 1000 },
    { name: 'oz', toBase: v => v * 0.0283495, fromBase: v => v / 0.0283495 },
    { name: 'lb', toBase: v => v * 0.453592, fromBase: v => v / 0.453592 },
  ]},
  { key: 'temperature', units: [
    { name: '°C', toBase: v => v, fromBase: v => v },
    { name: '°F', toBase: v => (v - 32) * 5 / 9, fromBase: v => v * 9 / 5 + 32 },
    { name: 'K', toBase: v => v - 273.15, fromBase: v => v + 273.15 },
  ]},
  { key: 'area', units: [
    { name: 'mm²', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
    { name: 'cm²', toBase: v => v / 1e4, fromBase: v => v * 1e4 },
    { name: 'm²', toBase: v => v, fromBase: v => v },
    { name: 'km²', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
    { name: 'ha', toBase: v => v * 1e4, fromBase: v => v / 1e4 },
    { name: 'acre', toBase: v => v * 4046.86, fromBase: v => v / 4046.86 },
    { name: 'ft²', toBase: v => v * 0.092903, fromBase: v => v / 0.092903 },
  ]},
  { key: 'volume', units: [
    { name: 'mL', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
    { name: 'L', toBase: v => v / 1000, fromBase: v => v * 1000 },
    { name: 'm³', toBase: v => v, fromBase: v => v },
    { name: 'gal(US)', toBase: v => v * 0.003785, fromBase: v => v / 0.003785 },
    { name: 'qt', toBase: v => v * 0.000946, fromBase: v => v / 0.000946 },
    { name: 'pt', toBase: v => v * 0.000473, fromBase: v => v / 0.000473 },
    { name: 'cup', toBase: v => v * 0.000237, fromBase: v => v / 0.000237 },
    { name: 'fl oz', toBase: v => v * 2.957e-5, fromBase: v => v / 2.957e-5 },
  ]},
]

export default function UnitConverterPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [catIdx, setCatIdx] = useState(0)
  const [fromIdx, setFromIdx] = useState(0)
  const [toIdx, setToIdx] = useState(1)
  const [value, setValue] = useState('')

  const cat = categories[catIdx]
  const catLabels: Record<string, string> = { length: u.length, weight: u.weight, temperature: u.temperature, area: u.area, volume: u.volume }

  const convert = (): string => {
    const v = parseFloat(value)
    if (isNaN(v)) return ''
    const base = cat.units[fromIdx].toBase(v)
    const result = cat.units[toIdx].fromBase(base)
    return result.toPrecision(10).replace(/\.?0+$/, '')
  }

  const swap = () => { setFromIdx(toIdx); setToIdx(fromIdx) }
  const changeCat = (i: number) => { setCatIdx(i); setFromIdx(0); setToIdx(1); setValue('') }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📐 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c, i) => (
            <button key={c.key} onClick={() => changeCat(i)}
              className={`px-4 py-2 rounded-xl text-sm transition font-medium ${catIdx === i ? 'bg-indigo-600 text-white shadow' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
              {catLabels[c.key]}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{u.from}</label>
              <select value={fromIdx} onChange={e => setFromIdx(+e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none mb-2">
                {cat.units.map((unit, i) => <option key={i} value={i}>{unit.name}</option>)}
              </select>
              <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="0"
                className="w-full border rounded-xl px-4 py-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
            </div>

            <button onClick={swap} className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition self-center">{u.swap}</button>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{u.to}</label>
              <select value={toIdx} onChange={e => setToIdx(+e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none mb-2">
                {cat.units.map((unit, i) => <option key={i} value={i}>{unit.name}</option>)}
              </select>
              <div className="w-full border rounded-xl px-4 py-2.5 text-sm font-mono bg-gray-50 min-h-[42px]">
                {convert() || <span className="text-gray-300">0</span>}
              </div>
            </div>
          </div>
        </div>

        {value && convert() && (
          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <span className="text-2xl font-bold text-indigo-600">{value} {cat.units[fromIdx].name} = {convert()} {cat.units[toIdx].name}</span>
          </div>
        )}
      </div>
    </div>
  )
}
