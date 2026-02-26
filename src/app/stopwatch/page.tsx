'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '在线秒表', desc: '精确到毫秒的在线秒表，支持记录圈数', start: '▶ 开始', pause: '⏸ 暂停', resume: '▶ 继续', reset: '🔄 重置', lap: '🏁 记圈', lapNum: '圈', lapTime: '圈用时', totalTime: '总用时', best: '最快', worst: '最慢', noLaps: '点击记圈按钮记录圈数' },
  en: { title: 'Stopwatch', desc: 'Online stopwatch with millisecond precision and lap recording', start: '▶ Start', pause: '⏸ Pause', resume: '▶ Resume', reset: '🔄 Reset', lap: '🏁 Lap', lapNum: 'Lap', lapTime: 'Lap Time', totalTime: 'Total', best: 'Best', worst: 'Worst', noLaps: 'Press Lap to record laps' },
  ja: { title: 'オンラインストップウォッチ', desc: 'ミリ秒精度のストップウォッチ、ラップ記録対応', start: '▶ 開始', pause: '⏸ 一時停止', resume: '▶ 再開', reset: '🔄 リセット', lap: '🏁 ラップ', lapNum: 'ラップ', lapTime: 'ラップタイム', totalTime: '合計', best: '最速', worst: '最遅', noLaps: 'ラップボタンで記録' },
  ko: { title: '온라인 스톱워치', desc: '밀리초 정밀도의 스톱워치, 랩 기록 지원', start: '▶ 시작', pause: '⏸ 일시정지', resume: '▶ 재개', reset: '🔄 리셋', lap: '🏁 랩', lapNum: '랩', lapTime: '랩 시간', totalTime: '총 시간', best: '최고', worst: '최저', noLaps: '랩 버튼으로 기록하세요' },
  es: { title: 'Cronómetro', desc: 'Cronómetro en línea con precisión de milisegundos y registro de vueltas', start: '▶ Iniciar', pause: '⏸ Pausar', resume: '▶ Reanudar', reset: '🔄 Reiniciar', lap: '🏁 Vuelta', lapNum: 'Vuelta', lapTime: 'Tiempo Vuelta', totalTime: 'Total', best: 'Mejor', worst: 'Peor', noLaps: 'Presiona Vuelta para registrar' },
}

export default function StopwatchPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState<number[]>([])
  const startTimeRef = useRef(0)
  const accumulatedRef = useRef(0)
  const rafRef = useRef<number>(0)

  const tick = useCallback(() => {
    setElapsed(accumulatedRef.current + (Date.now() - startTimeRef.current))
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => { return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) } }, [])

  const start = () => {
    startTimeRef.current = Date.now()
    setRunning(true)
    rafRef.current = requestAnimationFrame(tick)
  }

  const pause = () => {
    accumulatedRef.current += Date.now() - startTimeRef.current
    setRunning(false)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setElapsed(accumulatedRef.current)
  }

  const resume = () => {
    startTimeRef.current = Date.now()
    setRunning(true)
    rafRef.current = requestAnimationFrame(tick)
  }

  const reset = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setRunning(false); setElapsed(0); setLaps([])
    accumulatedRef.current = 0; startTimeRef.current = 0
  }

  const lap = () => { setLaps(prev => [elapsed, ...prev]) }

  const fmt = (ms: number) => {
    const m = Math.floor(ms / 60000)
    const s = Math.floor((ms % 60000) / 1000)
    const mil = Math.floor((ms % 1000) / 10)
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(mil).padStart(2, '0')}`
  }

  const lapTimes = laps.map((total, i) => {
    const prev = i < laps.length - 1 ? laps[i + 1] : 0
    return { num: laps.length - i, lapTime: total - prev, total }
  })

  const bestLap = lapTimes.length > 1 ? Math.min(...lapTimes.map(l => l.lapTime)) : -1
  const worstLap = lapTimes.length > 1 ? Math.max(...lapTimes.map(l => l.lapTime)) : -1

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">⏱️ {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6 text-center">
          <div className="text-7xl font-mono font-bold text-indigo-600 mb-8 tabular-nums">{fmt(elapsed)}</div>
          <div className="flex justify-center gap-3">
            {!running && elapsed === 0 && (
              <button onClick={start} className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-lg">{u.start}</button>
            )}
            {running && (
              <>
                <button onClick={pause} className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition font-medium">{u.pause}</button>
                <button onClick={lap} className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium">{u.lap}</button>
              </>
            )}
            {!running && elapsed > 0 && (
              <>
                <button onClick={resume} className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">{u.resume}</button>
                <button onClick={reset} className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl transition font-medium text-gray-700">{u.reset}</button>
              </>
            )}
          </div>
        </div>

        {laps.length > 0 ? (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 max-h-80 overflow-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-gray-500 border-b">
                <th className="py-2 px-2 text-left font-medium">{u.lapNum}</th>
                <th className="py-2 px-2 text-right font-medium">{u.lapTime}</th>
                <th className="py-2 px-2 text-right font-medium">{u.totalTime}</th>
              </tr></thead>
              <tbody>{lapTimes.map(l => {
                const isBest = lapTimes.length > 1 && l.lapTime === bestLap
                const isWorst = lapTimes.length > 1 && l.lapTime === worstLap
                return (
                  <tr key={l.num} className={`border-b border-gray-50 ${isBest ? 'text-green-600' : isWorst ? 'text-red-500' : ''}`}>
                    <td className="py-2 px-2">
                      {u.lapNum} {l.num}
                      {isBest && <span className="ml-2 text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">{u.best}</span>}
                      {isWorst && <span className="ml-2 text-xs bg-red-100 text-red-500 px-1.5 py-0.5 rounded">{u.worst}</span>}
                    </td>
                    <td className="py-2 px-2 text-right font-mono">{fmt(l.lapTime)}</td>
                    <td className="py-2 px-2 text-right font-mono">{fmt(l.total)}</td>
                  </tr>
                )
              })}</tbody>
            </table>
          </div>
        ) : (elapsed > 0 || running) && (
          <div className="text-center text-gray-400 text-sm py-4">{u.noLaps}</div>
        )}
      </div>
    </div>
  )
}
