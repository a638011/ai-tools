'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState } from 'react'
import Link from 'next/link'

const scenes = [
  { id: 'travel', name: '旅行打卡', icon: '✈️' },
  { id: 'food', name: '美食分享', icon: '🍜' },
  { id: 'selfie', name: '自拍日常', icon: '🤳' },
  { id: 'work', name: '工作感悟', icon: '💼' },
  { id: 'mood', name: '心情随笔', icon: '🌙' },
  { id: 'fitness', name: '健身打卡', icon: '💪' },
]

const tones = [
  { id: 'literary', name: '文艺范' },
  { id: 'funny', name: '搞笑逗比' },
  { id: 'cool', name: '高冷简约' },
  { id: 'warm', name: '温暖治愈' },
  { id: 'sassy', name: '凡尔赛' },
]

export default function MomentsPage() {
  const [scene, setScene] = useState('travel')
  const [tone, setTone] = useState('literary')
  const [topic, setTopic] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/moments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scene, tone, topic }),
      })
      const data = await res.json()
      setResult(data.content || data.error || '生成失败，请重试')
    } catch {
      setResult('网络错误，请重试')
    }
    setLoading(false)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6"><Link href="/" className="text-sm text-blue-500 hover:underline">← Back</Link><LangSwitcher /></div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">💬 AI朋友圈文案</h1>
      <p className="text-gray-500 mb-8">一键生成高级感朋友圈文案 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">场景</label>
          <div className="flex flex-wrap gap-2">
            {scenes.map(s => (
              <button key={s.id} onClick={() => setScene(s.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${scene === s.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {s.icon} {s.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">语气风格</label>
          <div className="flex flex-wrap gap-2">
            {tones.map(t => (
              <button key={t.id} onClick={() => setTone(t.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${tone === t.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">补充描述（可选）</label>
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)}
            placeholder="例如：在三亚看日落、吃了一家超棒的火锅..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>

        <button onClick={generate} disabled={loading}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          {loading ? '⏳ 生成中...' : '🚀 生成文案'}
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-900">生成结果（多条可选）</h3>
            <button onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm text-blue-500 hover:underline">📋 复制全部</button>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{result}</div>
        </div>
      )}
    </main>
  )
}
