'use client'
import { useState, useEffect } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'User Agent 解析器', desc: '解析浏览器UA字符串，识别浏览器、操作系统等信息', currentUA: '当前浏览器 UA', customUA: '自定义 UA', parse: '🔍 解析', clear: '清空', useCurrentUA: '使用当前UA', copy: '📋 复制', copied: '✅ 已复制', browser: '浏览器', version: '版本', os: '操作系统', osVersion: '系统版本', engine: '渲染引擎', device: '设备类型', platform: '平台', mobile: '移动端', desktop: '桌面端', bot: '爬虫', unknown: '未知', paste: '粘贴UA字符串进行解析...', result: '解析结果' },
  en: { title: 'User Agent Parser', desc: 'Parse browser UA string to identify browser, OS and more', currentUA: 'Current Browser UA', customUA: 'Custom UA', parse: '🔍 Parse', clear: 'Clear', useCurrentUA: 'Use Current UA', copy: '📋 Copy', copied: '✅ Copied', browser: 'Browser', version: 'Version', os: 'OS', osVersion: 'OS Version', engine: 'Engine', device: 'Device Type', platform: 'Platform', mobile: 'Mobile', desktop: 'Desktop', bot: 'Bot', unknown: 'Unknown', paste: 'Paste a UA string to parse...', result: 'Parse Result' },
  ja: { title: 'User Agent 解析', desc: 'ブラウザUA文字列を解析してブラウザ・OS情報を識別', currentUA: '現在のブラウザUA', customUA: 'カスタムUA', parse: '🔍 解析', clear: 'クリア', useCurrentUA: '現在のUAを使用', copy: '📋 コピー', copied: '✅ コピー済', browser: 'ブラウザ', version: 'バージョン', os: 'OS', osVersion: 'OSバージョン', engine: 'エンジン', device: 'デバイス', platform: 'プラットフォーム', mobile: 'モバイル', desktop: 'デスクトップ', bot: 'ボット', unknown: '不明', paste: 'UA文字列を貼り付けて解析...', result: '解析結果' },
  ko: { title: 'User Agent 파서', desc: '브라우저 UA 문자열을 파싱하여 브라우저, OS 등 식별', currentUA: '현재 브라우저 UA', customUA: '사용자 정의 UA', parse: '🔍 파싱', clear: '지우기', useCurrentUA: '현재 UA 사용', copy: '📋 복사', copied: '✅ 복사됨', browser: '브라우저', version: '버전', os: 'OS', osVersion: 'OS 버전', engine: '엔진', device: '디바이스', platform: '플랫폼', mobile: '모바일', desktop: '데스크톱', bot: '봇', unknown: '알 수 없음', paste: 'UA 문자열을 붙여넣어 파싱...', result: '파싱 결과' },
  es: { title: 'Analizador de User Agent', desc: 'Analiza la cadena UA del navegador para identificar navegador, SO y más', currentUA: 'UA del Navegador Actual', customUA: 'UA Personalizado', parse: '🔍 Analizar', clear: 'Limpiar', useCurrentUA: 'Usar UA Actual', copy: '📋 Copiar', copied: '✅ Copiado', browser: 'Navegador', version: 'Versión', os: 'SO', osVersion: 'Versión SO', engine: 'Motor', device: 'Dispositivo', platform: 'Plataforma', mobile: 'Móvil', desktop: 'Escritorio', bot: 'Bot', unknown: 'Desconocido', paste: 'Pega una cadena UA para analizar...', result: 'Resultado' },
}

interface ParsedUA { browser: string; version: string; os: string; osVersion: string; engine: string; device: string; platform: string }

function parseUA(ua: string, u: Record<string, string>): ParsedUA {
  const result: ParsedUA = { browser: u.unknown, version: '', os: u.unknown, osVersion: '', engine: u.unknown, device: u.desktop, platform: '' }

  // Browser detection
  if (/Edg\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Microsoft Edge'; result.version = RegExp.$1 }
  else if (/OPR\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Opera'; result.version = RegExp.$1 }
  else if (/Vivaldi\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Vivaldi'; result.version = RegExp.$1 }
  else if (/YaBrowser\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Yandex'; result.version = RegExp.$1 }
  else if (/SamsungBrowser\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Samsung Internet'; result.version = RegExp.$1 }
  else if (/UCBrowser\/(\d[\d.]*)/i.test(ua)) { result.browser = 'UC Browser'; result.version = RegExp.$1 }
  else if (/Firefox\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Firefox'; result.version = RegExp.$1 }
  else if (/Chrome\/(\d[\d.]*)/i.test(ua) && !/Chromium/i.test(ua)) { result.browser = 'Chrome'; result.version = RegExp.$1 }
  else if (/Chromium\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Chromium'; result.version = RegExp.$1 }
  else if (/Safari\/(\d[\d.]*)/i.test(ua) && /Version\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Safari'; result.version = RegExp.$1 }
  else if (/MSIE\s(\d[\d.]*)/i.test(ua) || /Trident.*rv:(\d[\d.]*)/i.test(ua)) { result.browser = 'Internet Explorer'; result.version = RegExp.$1 }

  // OS detection
  if (/Windows NT 10/i.test(ua)) { result.os = 'Windows'; result.osVersion = '10/11' }
  else if (/Windows NT 6\.3/i.test(ua)) { result.os = 'Windows'; result.osVersion = '8.1' }
  else if (/Windows NT 6\.2/i.test(ua)) { result.os = 'Windows'; result.osVersion = '8' }
  else if (/Windows NT 6\.1/i.test(ua)) { result.os = 'Windows'; result.osVersion = '7' }
  else if (/Windows/i.test(ua)) { result.os = 'Windows'; result.osVersion = '' }
  else if (/Mac OS X (\d[\d_]*)/i.test(ua)) { result.os = 'macOS'; result.osVersion = RegExp.$1.replace(/_/g, '.') }
  else if (/Android (\d[\d.]*)/i.test(ua)) { result.os = 'Android'; result.osVersion = RegExp.$1 }
  else if (/iPhone OS (\d[\d_]*)/i.test(ua) || /iPad.*OS (\d[\d_]*)/i.test(ua)) { result.os = 'iOS'; result.osVersion = RegExp.$1.replace(/_/g, '.') }
  else if (/Linux/i.test(ua)) { result.os = 'Linux'; result.osVersion = '' }
  else if (/CrOS/i.test(ua)) { result.os = 'Chrome OS'; result.osVersion = '' }

  // Engine
  if (/Gecko\/\d/i.test(ua) && /Firefox/i.test(ua)) result.engine = 'Gecko'
  else if (/AppleWebKit\/(\d[\d.]*)/i.test(ua)) result.engine = 'WebKit/Blink'
  else if (/Trident/i.test(ua)) result.engine = 'Trident'

  // Device
  if (/Mobile|Android|iPhone|iPad|iPod/i.test(ua)) result.device = u.mobile
  else if (/bot|crawl|spider|slurp/i.test(ua)) result.device = u.bot
  else result.device = u.desktop

  // Platform
  if (/iPhone/i.test(ua)) result.platform = 'iPhone'
  else if (/iPad/i.test(ua)) result.platform = 'iPad'
  else if (/Android/i.test(ua) && /Mobile/i.test(ua)) result.platform = 'Android Phone'
  else if (/Android/i.test(ua)) result.platform = 'Android Tablet'
  else if (/Macintosh/i.test(ua)) result.platform = 'Mac'
  else if (/Windows/i.test(ua)) result.platform = 'PC'
  else if (/Linux/i.test(ua)) result.platform = 'Linux'

  return result
}

export default function UserAgentParserPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [currentUA, setCurrentUA] = useState('')
  const [input, setInput] = useState('')
  const [parsed, setParsed] = useState<ParsedUA | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => { setCurrentUA(navigator.userAgent) }, [])

  const doParse = (ua?: string) => {
    const target = ua || input
    if (!target.trim()) return
    setParsed(parseUA(target, u))
  }

  const useCurrent = () => { setInput(currentUA); setParsed(parseUA(currentUA, u)) }
  const copy = (text: string) => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  const fields = parsed ? [
    { label: u.browser, value: parsed.browser, icon: '🌐' },
    { label: u.version, value: parsed.version || '-', icon: '🏷️' },
    { label: u.os, value: parsed.os, icon: '💻' },
    { label: u.osVersion, value: parsed.osVersion || '-', icon: '📋' },
    { label: u.engine, value: parsed.engine, icon: '⚙️' },
    { label: u.device, value: parsed.device, icon: '📱' },
    { label: u.platform, value: parsed.platform || '-', icon: '🖥️' },
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔍 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        {currentUA && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800 text-sm">{u.currentUA}</h3>
              <button onClick={() => copy(currentUA)} className="text-xs px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>
            </div>
            <p className="text-xs text-gray-500 font-mono break-all bg-gray-50 rounded-xl p-3">{currentUA}</p>
          </div>
        )}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">{u.customUA}</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={u.paste}
            className="w-full h-24 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none mb-4" />
          <div className="flex flex-wrap gap-2">
            <button onClick={() => doParse()} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.parse}</button>
            <button onClick={useCurrent} className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition text-sm font-medium">{u.useCurrentUA}</button>
            <button onClick={() => { setInput(''); setParsed(null) }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          </div>
        </div>

        {parsed && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{u.result}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <div className="text-xs text-gray-500">{f.label}</div>
                    <div className="text-sm font-semibold text-gray-800">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
