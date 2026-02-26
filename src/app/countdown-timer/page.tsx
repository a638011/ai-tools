'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '在线倒计时器', desc: '设置时分秒，开始倒计时，到时提醒', hours: '时', minutes: '分', seconds: '秒', start: '▶ 开始', pause: '⏸ 暂停', resume: '▶ 继续', reset: '🔄 重置', timeUp: '⏰ 时间到！', presets: '快捷设置', min1: '1分钟', min5: '5分钟', min10: '10分钟', min15: '15分钟', min25: '25分钟', min30: '30分钟', hour1: '1小时' },
  en: { title: 'Countdown Timer', desc: 'Set hours, minutes, seconds and start countdown', hours: 'Hours', minutes: 'Min', seconds: 'Sec', start: '▶ Start', pause: '⏸ Pause', resume: '▶ Resume', reset: '🔄 Reset', timeUp: '⏰ Time\'s Up!', presets: 'Quick Set', min1: '1 min', min5: '5 min', min10: '10 min', min15: '15 min', min25: '25 min', min30: '30 min', hour1: '1 hour' },
  ja: { title: 'カウントダウンタイマー', desc: '時分秒を設定してカウントダウン開始', hours: '時', minutes: '分', seconds: '秒', start: '▶ 開始', pause: '⏸ 一時停止', resume: '▶ 再開', reset: '🔄 リセット', timeUp: '⏰ 時間です！', presets: 'クイック設定', min1: '1分', min5: '5分', min10: '10分', min15: '15分', min25: '25分', min30: '30分', hour1: '1時間' },
  ko: { title: '카운트다운 타이머', desc: '시분초를 설정하고 카운트다운 시작', hours: '시', minutes: '분', seconds: '초', start: '▶ 시작', pause: '⏸ 일시정지', resume: '▶ 재개', reset: '🔄 리셋', timeUp: '⏰ 시간 종료!', presets: '빠른 설정', min1: '1분', min5: '5분', min10: '10분', min15: '15분', min25: '25분', min30: '30분', hour1: '1시간' },
  es: { title: 'Temporizador', desc: 'Configura horas, minutos, segundos e inicia cuenta regresiva', hours: 'Horas', minutes: 'Min', seconds: 'Seg', start: '▶ Iniciar', pause: '⏸ Pausar', resume: '▶ Reanudar', reset: '🔄 Reiniciar', timeUp: '⏰ ¡Tiempo!', presets: 'Preajustes', min1: '1 min', min5: '5 min', min10: '10 min', min15: '15 min', min25: '25 min', min30: '30 min', hour1: '1 hora' },
}

export default function CountdownTimerPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [totalSec, setTotalSec] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const endTimeRef = useRef<number>(0)

  const clearTimer = useCallback(() => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null } }, [])

  useEffect(() => { return () => clearTimer() }, [clearTimer])

  const start = () => {
    const total = hours * 3600 + minutes * 60 + seconds
    if (total <= 0) return
    setTotalSec(total); setRemaining(total); setFinished(false); setRunning(true)
    endTimeRef.current = Date.now() + total * 1000
    clearTimer()
    intervalRef.current = setInterval(() => {
      const left = Math.round((endTimeRef.current - Date.now()) / 1000)
      if (left <= 0) {
        setRemaining(0); setRunning(false); setFinished(true); clearTimer()
        try { new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2LkZeWk4x+b2Rrc4GMlZqZlIx+b2Rrc4GMlZqZlIx+b2Q=').play() } catch {}
      } else { setRemaining(left) }
    }, 100)
  }

  const pause = () => { setRunning(false); clearTimer(); setRemaining(prev => prev) }
  const resume = () => {
    if (remaining <= 0) return
    setRunning(true); endTimeRef.current = Date.now() + remaining * 1000
    clearTimer()
    intervalRef.current = setInterval(() => {
      const left = Math.round((endTimeRef.current - Date.now()) / 1000)
      if (left <= 0) {
        setRemaining(0); setRunning(false); setFinished(true); clearTimer()
        try { new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2LkZeWk4x+b2Rrc4GMlZqZlIx+b2Rrc4GMlZqZlIx+b2Q=').play() } catch {}
      } else { setRemaining(left) }
    }, 100)
  }

  const reset = () => { clearTimer(); setRunning(false); setFinished(false); setRemaining(0); setTotalSec(0) }

  const setPreset = (s: number) => { reset(); setHours(Math.floor(s / 3600)); setMinutes(Math.floor((s % 3600) / 60)); setSeconds(s % 60) }

  const fmtTime = (s: number) => {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }

  const progress = totalSec > 0 ? ((totalSec - remaining) / totalSec) * 100 : 0
  const isIdle = !running && remaining === 0 && !finished

  const presets = [
    { l: u.min1, s: 60 }, { l: u.min5, s: 300 }, { l: u.min10, s: 600 },
    { l: u.min15, s: 900 }, { l: u.min25, s: 1500 }, { l: u.min30, s: 1800 }, { l: u.hour1, s: 3600 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">⏳ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 text-center">
          {isIdle ? (
            <>
              <div className="flex justify-center gap-4 mb-6">
                {[{ v: hours, set: setHours, l: u.hours, max: 99 }, { v: minutes, set: setMinutes, l: u.minutes, max: 59 }, { v: seconds, set: setSeconds, l: u.seconds, max: 59 }].map((item, i) => (
                  <div key={i}>
                    <label className="block text-xs text-gray-500 mb-1">{item.l}</label>
                    <input type="number" min={0} max={item.max} value={item.v} onChange={e => item.set(Math.min(item.max, Math.max(0, parseInt(e.target.value) || 0)))}
                      className="w-20 text-center text-3xl font-mono border rounded-xl px-2 py-3 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="text-xs text-gray-400 w-full mb-1">{u.presets}</span>
                {presets.map(p => (
                  <button key={p.s} onClick={() => setPreset(p.s)} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition">{p.l}</button>
                ))}
              </div>
              <button onClick={start} className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">{u.start}</button>
            </>
          ) : (
            <>
              <div className={`text-6xl font-mono font-bold mb-4 ${finished ? 'text-red-500 animate-pulse' : 'text-indigo-600'}`}>
                {fmtTime(remaining)}
              </div>
              {finished && <div className="text-xl font-semibold text-red-500 mb-4">{u.timeUp}</div>}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div className="bg-indigo-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex justify-center gap-3">
                {running ? (
                  <button onClick={pause} className="px-6 py-2.5 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition font-medium">{u.pause}</button>
                ) : !finished ? (
                  <button onClick={resume} className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">{u.resume}</button>
                ) : null}
                <button onClick={reset} className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 rounded-xl transition font-medium text-gray-700">{u.reset}</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
