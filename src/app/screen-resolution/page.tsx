'use client'
import { useState, useEffect } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '屏幕信息检测', desc: '检测当前屏幕分辨率、视口大小、设备像素比等信息', screenRes: '屏幕分辨率', viewport: '视口大小', devicePixelRatio: '设备像素比', colorDepth: '颜色深度', touchSupport: '触摸支持', orientation: '屏幕方向', yes: '支持', no: '不支持', portrait: '竖屏', landscape: '横屏', bit: '位', availSize: '可用区域', outerSize: '窗口外部大小', refresh: '🔄 刷新', copied: '✅ 已复制', copyAll: '📋 复制全部', screenType: '屏幕类型', maxTouchPoints: '最大触控点', connection: '网络类型', language: '浏览器语言', platform: '平台', cookieEnabled: 'Cookie', online: '在线状态', onlineYes: '在线', onlineNo: '离线' },
  en: { title: 'Screen Info', desc: 'Detect screen resolution, viewport size, device pixel ratio and more', screenRes: 'Screen Resolution', viewport: 'Viewport Size', devicePixelRatio: 'Device Pixel Ratio', colorDepth: 'Color Depth', touchSupport: 'Touch Support', orientation: 'Orientation', yes: 'Supported', no: 'Not Supported', portrait: 'Portrait', landscape: 'Landscape', bit: 'bit', availSize: 'Available Area', outerSize: 'Outer Window Size', refresh: '🔄 Refresh', copied: '✅ Copied', copyAll: '📋 Copy All', screenType: 'Screen Type', maxTouchPoints: 'Max Touch Points', connection: 'Connection', language: 'Language', platform: 'Platform', cookieEnabled: 'Cookie', online: 'Online Status', onlineYes: 'Online', onlineNo: 'Offline' },
  ja: { title: '画面情報検出', desc: '画面解像度、ビューポート、デバイスピクセル比などを検出', screenRes: '画面解像度', viewport: 'ビューポート', devicePixelRatio: 'デバイスピクセル比', colorDepth: '色深度', touchSupport: 'タッチ対応', orientation: '画面方向', yes: '対応', no: '非対応', portrait: '縦向き', landscape: '横向き', bit: 'ビット', availSize: '利用可能領域', outerSize: 'ウィンドウ外部サイズ', refresh: '🔄 更新', copied: '✅ コピー済', copyAll: '📋 全てコピー', screenType: '画面タイプ', maxTouchPoints: '最大タッチポイント', connection: '接続タイプ', language: '言語', platform: 'プラットフォーム', cookieEnabled: 'Cookie', online: 'オンライン状態', onlineYes: 'オンライン', onlineNo: 'オフライン' },
  ko: { title: '화면 정보 감지', desc: '화면 해상도, 뷰포트 크기, 디바이스 픽셀 비율 등 감지', screenRes: '화면 해상도', viewport: '뷰포트 크기', devicePixelRatio: '디바이스 픽셀 비율', colorDepth: '색 깊이', touchSupport: '터치 지원', orientation: '화면 방향', yes: '지원', no: '미지원', portrait: '세로', landscape: '가로', bit: '비트', availSize: '사용 가능 영역', outerSize: '외부 창 크기', refresh: '🔄 새로고침', copied: '✅ 복사됨', copyAll: '📋 전체 복사', screenType: '화면 유형', maxTouchPoints: '최대 터치 포인트', connection: '연결 유형', language: '언어', platform: '플랫폼', cookieEnabled: 'Cookie', online: '온라인 상태', onlineYes: '온라인', onlineNo: '오프라인' },
  es: { title: 'Info de Pantalla', desc: 'Detecta resolución, viewport, ratio de píxeles y más', screenRes: 'Resolución', viewport: 'Viewport', devicePixelRatio: 'Ratio de Píxeles', colorDepth: 'Profundidad de Color', touchSupport: 'Soporte Táctil', orientation: 'Orientación', yes: 'Soportado', no: 'No Soportado', portrait: 'Vertical', landscape: 'Horizontal', bit: 'bits', availSize: 'Área Disponible', outerSize: 'Ventana Externa', refresh: '🔄 Actualizar', copied: '✅ Copiado', copyAll: '📋 Copiar Todo', screenType: 'Tipo de Pantalla', maxTouchPoints: 'Puntos Táctiles Máx', connection: 'Conexión', language: 'Idioma', platform: 'Plataforma', cookieEnabled: 'Cookie', online: 'Estado', onlineYes: 'En línea', onlineNo: 'Desconectado' },
}

interface ScreenInfo { screenW: number; screenH: number; viewW: number; viewH: number; dpr: number; colorDepth: number; touch: boolean; maxTouch: number; orientation: string; availW: number; availH: number; outerW: number; outerH: number; language: string; platform: string; cookieEnabled: boolean; online: boolean; connection: string }

export default function ScreenResolutionPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [info, setInfo] = useState<ScreenInfo | null>(null)
  const [copied, setCopied] = useState(false)

  const detect = () => {
    const nav = navigator as unknown as Record<string, unknown>
    const conn = (nav.connection || nav.mozConnection || nav.webkitConnection) as Record<string, string> | undefined
    setInfo({
      screenW: screen.width, screenH: screen.height,
      viewW: window.innerWidth, viewH: window.innerHeight,
      dpr: window.devicePixelRatio,
      colorDepth: screen.colorDepth,
      touch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      maxTouch: navigator.maxTouchPoints,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
      availW: screen.availWidth, availH: screen.availHeight,
      outerW: window.outerWidth, outerH: window.outerHeight,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      online: navigator.onLine,
      connection: conn?.effectiveType || 'N/A',
    })
  }

  useEffect(() => { detect(); const h = () => detect(); window.addEventListener('resize', h); return () => window.removeEventListener('resize', h) }, [])

  const copyAll = () => {
    if (!info) return
    const text = Object.entries(info).map(([k, v]) => `${k}: ${v}`).join('\n')
    navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500)
  }

  const items = info ? [
    { label: u.screenRes, value: `${info.screenW} × ${info.screenH}`, icon: '🖥️' },
    { label: u.viewport, value: `${info.viewW} × ${info.viewH}`, icon: '📐' },
    { label: u.availSize, value: `${info.availW} × ${info.availH}`, icon: '📏' },
    { label: u.outerSize, value: `${info.outerW} × ${info.outerH}`, icon: '🪟' },
    { label: u.devicePixelRatio, value: `${info.dpr}x`, icon: '🔍' },
    { label: u.colorDepth, value: `${info.colorDepth} ${u.bit}`, icon: '🎨' },
    { label: u.touchSupport, value: info.touch ? u.yes : u.no, icon: '👆' },
    { label: u.maxTouchPoints, value: `${info.maxTouch}`, icon: '✋' },
    { label: u.orientation, value: info.orientation === 'landscape' ? u.landscape : u.portrait, icon: '🔄' },
    { label: u.connection, value: info.connection, icon: '📶' },
    { label: u.language, value: info.language, icon: '🌐' },
    { label: u.platform, value: info.platform, icon: '💻' },
    { label: u.cookieEnabled, value: info.cookieEnabled ? u.yes : u.no, icon: '🍪' },
    { label: u.online, value: info.online ? u.onlineYes : u.onlineNo, icon: '📡' },
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🖥️ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex gap-2 mb-6">
          <button onClick={detect} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.refresh}</button>
          <button onClick={copyAll} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{copied ? u.copied : u.copyAll}</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <div className="text-xs text-gray-500">{item.label}</div>
                <div className="text-lg font-semibold text-gray-800">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
