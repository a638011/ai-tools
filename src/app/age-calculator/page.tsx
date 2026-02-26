'use client'
import { useState, useEffect } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '年龄计算器', desc: '精确计算年龄，显示下次生日倒计时', birthDate: '出生日期', calculate: '🧮 计算', clear: '清空', age: '您的年龄', years: '年', months: '月', days: '日', nextBirthday: '下次生日倒计时', totalDays: '已度过天数', totalWeeks: '已度过周数', totalMonths: '已度过月数', born: '出生于', dayOfWeek: '星期', zodiac: '星座', chineseZodiac: '生肖', sun: '日', mon: '一', tue: '二', wed: '三', thu: '四', fri: '五', sat: '六' },
  en: { title: 'Age Calculator', desc: 'Calculate exact age and birthday countdown', birthDate: 'Birth Date', calculate: '🧮 Calculate', clear: 'Clear', age: 'Your Age', years: 'years', months: 'months', days: 'days', nextBirthday: 'Next Birthday In', totalDays: 'Total Days', totalWeeks: 'Total Weeks', totalMonths: 'Total Months', born: 'Born on', dayOfWeek: 'Day', zodiac: 'Zodiac', chineseZodiac: 'Chinese Zodiac', sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' },
  ja: { title: '年齢計算機', desc: '正確な年齢計算と誕生日カウントダウン', birthDate: '生年月日', calculate: '🧮 計算', clear: 'クリア', age: 'あなたの年齢', years: '歳', months: 'ヶ月', days: '日', nextBirthday: '次の誕生日まで', totalDays: '経過日数', totalWeeks: '経過週数', totalMonths: '経過月数', born: '誕生日', dayOfWeek: '曜日', zodiac: '星座', chineseZodiac: '干支', sun: '日', mon: '月', tue: '火', wed: '水', thu: '木', fri: '金', sat: '土' },
  ko: { title: '나이 계산기', desc: '정확한 나이 계산 및 생일 카운트다운', birthDate: '생년월일', calculate: '🧮 계산', clear: '지우기', age: '나이', years: '년', months: '개월', days: '일', nextBirthday: '다음 생일까지', totalDays: '총 일수', totalWeeks: '총 주수', totalMonths: '총 개월수', born: '출생일', dayOfWeek: '요일', zodiac: '별자리', chineseZodiac: '띠', sun: '일', mon: '월', tue: '화', wed: '수', thu: '목', fri: '금', sat: '토' },
  es: { title: 'Calculadora de Edad', desc: 'Calcula edad exacta y cuenta regresiva de cumpleaños', birthDate: 'Fecha de Nacimiento', calculate: '🧮 Calcular', clear: 'Limpiar', age: 'Tu Edad', years: 'años', months: 'meses', days: 'días', nextBirthday: 'Próximo Cumpleaños En', totalDays: 'Días Totales', totalWeeks: 'Semanas Totales', totalMonths: 'Meses Totales', born: 'Nacido el', dayOfWeek: 'Día', zodiac: 'Zodiaco', chineseZodiac: 'Zodiaco Chino', sun: 'Dom', mon: 'Lun', tue: 'Mar', wed: 'Mié', thu: 'Jue', fri: 'Vie', sat: 'Sáb' },
}

const zodiacSigns = ['♑ Capricorn','♒ Aquarius','♓ Pisces','♈ Aries','♉ Taurus','♊ Gemini','♋ Cancer','♌ Leo','♍ Virgo','♎ Libra','♏ Scorpio','♐ Sagittarius']
const zodiacDates = [20,19,21,20,21,21,23,23,23,23,22,22]
const chineseZodiacs = ['🐀 鼠','🐂 牛','🐅 虎','🐇 兔','🐉 龙','🐍 蛇','🐎 马','🐑 羊','🐒 猴','🐓 鸡','🐕 狗','🐖 猪']

function getZodiac(m: number, d: number) { return zodiacSigns[d < zodiacDates[m] ? (m + 11) % 12 : m] }
function getChineseZodiac(y: number) { return chineseZodiacs[(y - 4) % 12] }

export default function AgeCalculatorPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [birthDate, setBirthDate] = useState('')
  const [result, setResult] = useState<{ years: number; months: number; days: number; totalDays: number; nextBdDays: number; dayOfWeek: number; zodiac: string; cZodiac: string } | null>(null)
  const [now, setNow] = useState(new Date())

  useEffect(() => { const iv = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(iv) }, [])

  const calc = () => {
    if (!birthDate) return
    const bd = new Date(birthDate), today = new Date()
    if (bd > today) return
    let years = today.getFullYear() - bd.getFullYear()
    let months = today.getMonth() - bd.getMonth()
    let days = today.getDate() - bd.getDate()
    if (days < 0) { months--; const prev = new Date(today.getFullYear(), today.getMonth(), 0); days += prev.getDate() }
    if (months < 0) { years--; months += 12 }
    const totalDays = Math.floor((today.getTime() - bd.getTime()) / (1000 * 60 * 60 * 24))
    let nextBd = new Date(today.getFullYear(), bd.getMonth(), bd.getDate())
    if (nextBd <= today) nextBd = new Date(today.getFullYear() + 1, bd.getMonth(), bd.getDate())
    const nextBdDays = Math.ceil((nextBd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    setResult({ years, months, days, totalDays, nextBdDays, dayOfWeek: bd.getDay(), zodiac: getZodiac(bd.getMonth(), bd.getDate()), cZodiac: getChineseZodiac(bd.getFullYear()) })
  }

  const dayNames = [u.sun, u.mon, u.tue, u.wed, u.thu, u.fri, u.sat]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🎂 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">{u.birthDate}</label>
          <div className="flex gap-2">
            <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} className="flex-1 border rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
            <button onClick={calc} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.calculate}</button>
            <button onClick={() => { setBirthDate(''); setResult(null) }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {result && (
          <>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-4">{u.age}</h3>
              <div className="flex justify-center gap-6">
                {[{ v: result.years, l: u.years }, { v: result.months, l: u.months }, { v: result.days, l: u.days }].map((item, i) => (
                  <div key={i}><div className="text-4xl font-bold text-indigo-600">{item.v}</div><div className="text-sm text-gray-500">{item.l}</div></div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-emerald-600">{result.nextBdDays}</div>
                <div className="text-xs text-gray-500 mt-1">{u.nextBirthday}</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-blue-600">{result.totalDays.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">{u.totalDays}</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-purple-600">{Math.floor(result.totalDays / 7).toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">{u.totalWeeks}</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-orange-600">{result.years * 12 + result.months}</div>
                <div className="text-xs text-gray-500 mt-1">{u.totalMonths}</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div><div className="text-sm text-gray-500 mb-1">{u.dayOfWeek}</div><div className="text-lg font-semibold">{dayNames[result.dayOfWeek]}</div></div>
                <div><div className="text-sm text-gray-500 mb-1">{u.zodiac}</div><div className="text-lg font-semibold">{result.zodiac}</div></div>
                <div><div className="text-sm text-gray-500 mb-1">{u.chineseZodiac}</div><div className="text-lg font-semibold">{result.cZodiac}</div></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
