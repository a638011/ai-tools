'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '番茄钟', desc: '番茄工作法计时器，专注工作提高效率', work: '工作', break: '休息', start: '▶ 开始', pause: '⏸ 暂停', reset: '🔄 重置', workMin: '工作时间(分钟)', breakMin: '休息时间(分钟)', completed: '已完成番茄数', session: '当前阶段', skip: '⏭ 跳过' },
  en: { title: 'Pomodoro Timer', desc: 'Pomodoro technique timer for focused work', work: 'Work', break: 'Break', start: '▶ Start', pause: '⏸ Pause', reset: '🔄 Reset', workMin: 'Work (min)', breakMin: 'Break (min)', completed: 'Completed', session: 'Current Session', skip: '⏭ Skip' },
  ja: { title: 'ポモドーロタイマー', desc: 'ポモドーロ・テクニックで集中力アップ', work: '作業', break: '休憩', start: '▶ 開始', pause: '⏸ 一時停止', reset: '🔄 リセット', workMin: '作業時間(分)', breakMin: '休憩時間(分)', completed: '完了数', session: '現在のセッション', skip: '⏭ スキップ' },
  ko: { title: '뽀모도로 타이머', desc: '뽀모도로 기법으로 집중력 향상', work: '작업', break: '휴식', start: '▶ 시작', pause: '⏸ 일시정지', reset: '🔄 초기화', workMin: '작업 시간(분)', breakMin: '휴식 시간(분)', completed: '완료', session: '현재 세션', skip: '⏭ 건너뛰기' },
  es: { title: 'Temporizador Pomodoro', desc: 'Técnica Pomodoro para trabajo enfocado', work: 'Trabajo', break: 'Descanso', start: '▶ Iniciar', pause: '⏸ Pausar', reset: '🔄 Reiniciar', workMin: 'Trabajo (min)', breakMin: 'Descanso (min)', completed: 'Completados', session: 'Sesión actual', skip: '⏭ Saltar' },
}

export default function PomodoroPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [workMin, setWorkMin] = useState(25)
  const [breakMin, setBreakMin] = useState(5)
  const [seconds, setSeconds] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [isWork, setIsWork] = useState(true)
  const [completed, setCompleted] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioRef = useRef<AudioContext | null>(null)

  const playBeep = useCallback(() => {
    try {
      const ctx = audioRef.current || new AudioContext()
      audioRef.current = ctx
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = 800
      gain.gain.value = 0.3
      osc.start()
      osc.stop(ctx.currentTime + 0.3)
    } catch { /* audio not available */ }
  }, [])

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => {
          if (prev <= 1) {
            playBeep()
            if (isWork) {
              setCompleted(c => c + 1)
              setIsWork(false)
              return breakMin * 60
            } else {
              setIsWork(true)
              return workMin * 60
            }
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isRunning, isWork, workMin, breakMin, playBeep])

  const toggle = () => setIsRunning(!isRunning)
  const reset = () => { setIsRunning(false); setIsWork(true); setSeconds(workMin * 60); setCompleted(0) }
  const skip = () => {
    playBeep()
    if (isWork) { setCompleted(c => c + 1); setIsWork(false); setSeconds(breakMin * 60) }
    else { setIsWork(true); setSeconds(workMin * 60) }
  }

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const totalSec = isWork ? workMin * 60 : breakMin * 60
  const progress = ((totalSec - seconds) / totalSec) * 100
  const circumference = 2 * Math.PI * 120

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-lg mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🍅 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="text-center mb-2">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${isWork ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
              {isWork ? `🔥 ${u.work}` : `☕ ${u.break}`}
            </span>
          </div>

          <div className="flex justify-center my-6">
            <svg width="280" height="280" className="transform -rotate-90">
              <circle cx="140" cy="140" r="120" fill="none" stroke="#f3f4f6" strokeWidth="12" />
              <circle cx="140" cy="140" r="120" fill="none"
                stroke={isWork ? '#ef4444' : '#22c55e'} strokeWidth="12" strokeLinecap="round"
                strokeDasharray={circumference} strokeDashoffset={circumference - (progress / 100) * circumference}
                className="transition-all duration-1000" />
            </svg>
            <div className="absolute flex flex-col items-center justify-center" style={{ width: 280, height: 280 }}>
              <span className="text-5xl font-mono font-bold text-gray-800">
                {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-6">
            <button onClick={toggle} className={`px-6 py-2.5 rounded-xl font-medium text-sm transition ${isRunning ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>
              {isRunning ? u.pause : u.start}
            </button>
            <button onClick={skip} className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.skip}</button>
            <button onClick={reset} className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.reset}</button>
          </div>

          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">{u.completed}: </span>
            <span className="text-2xl">{'🍅'.repeat(Math.min(completed, 20))}</span>
            {completed > 0 && <span className="text-lg font-bold text-red-500 ml-2">×{completed}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4 border-t pt-4">
            <div>
              <label className="text-sm font-medium text-gray-600 block mb-1">{u.workMin}</label>
              <input type="number" value={workMin} min={1} max={120}
                onChange={e => { const v = Math.max(1, +e.target.value); setWorkMin(v); if (!isRunning && isWork) setSeconds(v * 60) }}
                className="w-full border rounded-xl px-3 py-2 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 block mb-1">{u.breakMin}</label>
              <input type="number" value={breakMin} min={1} max={60}
                onChange={e => { const v = Math.max(1, +e.target.value); setBreakMin(v); if (!isRunning && !isWork) setSeconds(v * 60) }}
                className="w-full border rounded-xl px-3 py-2 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
