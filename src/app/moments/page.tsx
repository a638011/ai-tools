'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const scenesI18n = {
  zh: [{ id: 'travel', name: '旅行', icon: '✈️' }, { id: 'food', name: '美食', icon: '🍜' }, { id: 'selfie', name: '自拍', icon: '🤳' }, { id: 'work', name: '工作', icon: '💼' }, { id: 'mood', name: '心情', icon: '💭' }, { id: 'fitness', name: '健身', icon: '💪' }],
  en: [{ id: 'travel', name: 'Travel', icon: '✈️' }, { id: 'food', name: 'Food', icon: '🍜' }, { id: 'selfie', name: 'Selfie', icon: '🤳' }, { id: 'work', name: 'Work', icon: '💼' }, { id: 'mood', name: 'Mood', icon: '💭' }, { id: 'fitness', name: 'Fitness', icon: '💪' }],
  ja: [{ id: 'travel', name: '旅行', icon: '✈️' }, { id: 'food', name: 'グルメ', icon: '🍜' }, { id: 'selfie', name: '自撮り', icon: '🤳' }, { id: 'work', name: '仕事', icon: '💼' }, { id: 'mood', name: '気分', icon: '💭' }, { id: 'fitness', name: 'フィットネス', icon: '💪' }],
  ko: [{ id: 'travel', name: '여행', icon: '✈️' }, { id: 'food', name: '맛집', icon: '🍜' }, { id: 'selfie', name: '셀카', icon: '🤳' }, { id: 'work', name: '직장', icon: '💼' }, { id: 'mood', name: '기분', icon: '💭' }, { id: 'fitness', name: '운동', icon: '💪' }],
  es: [{ id: 'travel', name: 'Viaje', icon: '✈️' }, { id: 'food', name: 'Comida', icon: '🍜' }, { id: 'selfie', name: 'Selfie', icon: '🤳' }, { id: 'work', name: 'Trabajo', icon: '💼' }, { id: 'mood', name: 'Ánimo', icon: '💭' }, { id: 'fitness', name: 'Fitness', icon: '💪' }],
}
const tonesI18n = {
  zh: [{ id: 'literary', name: '文艺' }, { id: 'funny', name: '搞笑' }, { id: 'simple', name: '简约' }, { id: 'inspirational', name: '励志' }],
  en: [{ id: 'literary', name: 'Poetic' }, { id: 'funny', name: 'Funny' }, { id: 'simple', name: 'Minimal' }, { id: 'inspirational', name: 'Inspirational' }],
  ja: [{ id: 'literary', name: '文学的' }, { id: 'funny', name: 'おもしろ' }, { id: 'simple', name: 'シンプル' }, { id: 'inspirational', name: '感動' }],
  ko: [{ id: 'literary', name: '감성' }, { id: 'funny', name: '유머' }, { id: 'simple', name: '심플' }, { id: 'inspirational', name: '영감' }],
  es: [{ id: 'literary', name: 'Poético' }, { id: 'funny', name: 'Gracioso' }, { id: 'simple', name: 'Simple' }, { id: 'inspirational', name: 'Inspirador' }],
}
const labelsI18n = {
  zh: { scene: '场景', tone: '风格', desc: '描述一下', descPh: '例如：在巴厘岛看日落，超美的...', loading: '⏳ 生成中...', error: '网络错误', free: '免费', perDay: '次/天', limitMsg: '⚡ 今日免费次数已用完' },
  en: { scene: 'Scene', tone: 'Tone', desc: 'Describe it', descPh: 'e.g. Watching sunset in Bali, so beautiful...', loading: '⏳ Generating...', error: 'Network error', free: 'Free', perDay: '/day', limitMsg: '⚡ Daily limit reached' },
  ja: { scene: 'シーン', tone: 'トーン', desc: '説明', descPh: '例：バリ島で夕日を見て、とても綺麗...', loading: '⏳ 生成中...', error: 'エラー', free: '無料', perDay: '回/日', limitMsg: '⚡ 本日の無料回数終了' },
  ko: { scene: '장면', tone: '톤', desc: '설명', descPh: '예: 발리에서 일몰을 보고 있어요...', loading: '⏳ 생성 중...', error: '오류', free: '무료', perDay: '회/일', limitMsg: '⚡ 오늘 무료 횟수 소진' },
  es: { scene: 'Escena', tone: 'Tono', desc: 'Describe', descPh: 'ej. Viendo el atardecer en Bali...', loading: '⏳ Generando...', error: 'Error', free: 'Gratis', perDay: '/día', limitMsg: '⚡ Límite diario alcanzado' },
}

export default function MomentsPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const scenes = scenesI18n[locale] || scenesI18n.zh
  const tones = tonesI18n[locale] || tonesI18n.zh
  const l = labelsI18n[locale] || labelsI18n.zh
  const [scene, setScene] = useState('travel')
  const [tone, setTone] = useState('literary')
  const [desc, setDesc] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)

  const generate = async () => {
    if (!desc.trim()) return
    if (todayCount >= 3) { setResult(l.limitMsg); return }
    setLoading(true); setResult('')
    try {
      const res = await fetch('/api/moments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ scene, tone, desc }) })
      const data = await res.json()
      setResult(data.content || data.error || l.error)
      setTodayCount(c => c + 1)
    } catch { setResult(l.error) }
    setLoading(false)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">💬 {t.tools.moments.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.moments.desc} · {l.free} {3 - todayCount}{l.perDay}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.scene}</label>
          <div className="flex flex-wrap gap-2">
            {scenes.map(s => (<button key={s.id} onClick={() => setScene(s.id)} className={`px-4 py-2 rounded-lg text-sm transition ${scene === s.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{s.icon} {s.name}</button>))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.tone}</label>
          <div className="flex flex-wrap gap-2">
            {tones.map(tn => (<button key={tn.id} onClick={() => setTone(tn.id)} className={`px-4 py-2 rounded-lg text-sm transition ${tone === tn.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{tn.name}</button>))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.desc}</label>
          <textarea value={desc} onChange={e => setDesc(e.target.value)} rows={4} placeholder={l.descPh} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none text-gray-700" />
        </div>
        <button onClick={generate} disabled={loading || !desc.trim()} className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{loading ? l.loading : ui.generate}</button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-900">{ui.result}</h3>
            <button onClick={() => navigator.clipboard.writeText(result)} className="text-sm text-blue-500 hover:underline">{ui.copy}</button>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{result}</div>
        </div>
      )}
    </main>
  )
}
