'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { yourIp: '你的IP地址', lookup: '查询IP', ipInput: '输入IP地址', loading: '查询中...', ip: 'IP地址', country: '国家', region: '地区', city: '城市', isp: 'ISP', timezone: '时区', loc: '经纬度' },
  en: { yourIp: 'Your IP Address', lookup: 'Lookup IP', ipInput: 'Enter IP address', loading: 'Looking up...', ip: 'IP', country: 'Country', region: 'Region', city: 'City', isp: 'ISP', timezone: 'Timezone', loc: 'Location' },
  ja: { yourIp: 'あなたのIPアドレス', lookup: 'IP検索', ipInput: 'IPアドレスを入力', loading: '検索中...', ip: 'IP', country: '国', region: '地域', city: '都市', isp: 'ISP', timezone: 'タイムゾーン', loc: '座標' },
  ko: { yourIp: '내 IP 주소', lookup: 'IP 조회', ipInput: 'IP 주소 입력', loading: '조회 중...', ip: 'IP', country: '국가', region: '지역', city: '도시', isp: 'ISP', timezone: '시간대', loc: '좌표' },
  es: { yourIp: 'Tu dirección IP', lookup: 'Buscar IP', ipInput: 'Ingrese dirección IP', loading: 'Buscando...', ip: 'IP', country: 'País', region: 'Región', city: 'Ciudad', isp: 'ISP', timezone: 'Zona horaria', loc: 'Ubicación' },
}

type IpInfo = { ip: string; country: string; region: string; city: string; org: string; timezone: string; loc: string }

export default function IpLookupPage() {
  const { locale, t } = useLocale()
  const l = labelsI18n[locale] || labelsI18n.zh
  const [input, setInput] = useState('')
  const [info, setInfo] = useState<IpInfo | null>(null)
  const [loading, setLoading] = useState(false)

  const lookup = async (ip?: string) => {
    setLoading(true)
    try {
      const url = ip ? `https://ipinfo.io/${ip}/json` : 'https://ipinfo.io/json'
      const res = await fetch(url)
      const data = await res.json()
      setInfo({ ip: data.ip, country: data.country, region: data.region, city: data.city, org: data.org || '', timezone: data.timezone, loc: data.loc })
    } catch { setInfo(null) }
    setLoading(false)
  }

  const rows = info ? [
    { k: l.ip, v: info.ip }, { k: l.country, v: info.country }, { k: l.region, v: info.region },
    { k: l.city, v: info.city }, { k: l.isp, v: info.org }, { k: l.timezone, v: info.timezone }, { k: l.loc, v: info.loc },
  ] : []

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🌐 IP {locale === 'zh' ? '地址查询' : locale === 'ja' ? 'アドレス検索' : locale === 'ko' ? '주소 조회' : locale === 'es' ? 'Búsqueda' : 'Address Lookup'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '查询IP地址的地理位置、ISP、时区等信息' : 'Look up IP geolocation, ISP, timezone info'}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <button onClick={() => lookup()} className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-600 transition">
          {loading ? l.loading : `🔍 ${l.yourIp}`}
        </button>
        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder={l.ipInput}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm text-gray-700" />
          <button onClick={() => lookup(input)} disabled={!input.trim() || loading}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{l.lookup}</button>
        </div>
      </div>

      {info && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          {rows.map(r => (
            <div key={r.k} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
              <span className="text-sm text-gray-500">{r.k}</span>
              <span className="text-sm font-medium text-gray-800">{r.v}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
