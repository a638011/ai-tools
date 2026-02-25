'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState } from 'react'
import Link from 'next/link'

const platforms = [
  { id: 'xiaohongshu', name: '小红书', icon: '📕' },
  { id: 'taobao', name: '淘宝/天猫', icon: '🛒' },
  { id: 'douyin', name: '抖音', icon: '🎵' },
  { id: 'weibo', name: '微博', icon: '💬' },
  { id: 'gongzhonghao', name: '公众号', icon: '📱' },
]

const styles = [
  { id: 'selling', name: '种草带货' },
  { id: 'story', name: '故事分享' },
  { id: 'tutorial', name: '教程干货' },
  { id: 'review', name: '测评对比' },
  { id: 'emotional', name: '情感共鸣' },
]

export default function CopywriterPage() {
  const [platform, setPlatform] = useState('xiaohongshu')
  const [style, setStyle] = useState('selling')
  const [product, setProduct] = useState('')
  const [keywords, setKeywords] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)

  const generate = async () => {
    if (!product.trim()) return
    if (todayCount >= 3) {
      setResult('⚡ 今日免费次数已用完（3次/天）\n\n升级Pro版享受无限次生成 →')
      return
    }
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/copywriter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform, style, product, keywords }),
      })
      const data = await res.json()
      setResult(data.content || data.error || '生成失败，请重试')
      setTodayCount(c => c + 1)
    } catch {
      setResult('网络错误，请重试')
    }
    setLoading(false)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6"><Link href="/" className="text-sm text-blue-500 hover:underline">← Back</Link><LangSwitcher /></div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">✍️ AI文案生成器</h1>
      <p className="text-gray-500 mb-8">一键生成各平台爆款文案 · 免费{3 - todayCount}次/天</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">选择平台</label>
          <div className="flex flex-wrap gap-2">
            {platforms.map(p => (
              <button key={p.id} onClick={() => setPlatform(p.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${platform === p.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {p.icon} {p.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">文案风格</label>
          <div className="flex flex-wrap gap-2">
            {styles.map(s => (
              <button key={s.id} onClick={() => setStyle(s.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${style === s.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {s.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">产品/主题 *</label>
          <input type="text" value={product} onChange={e => setProduct(e.target.value)}
            placeholder="例如：防晒霜、咖啡机、旅行攻略..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">关键词（可选）</label>
          <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)}
            placeholder="用逗号分隔，例如：平价,学生党,夏天必备"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>

        <button onClick={generate} disabled={loading || !product.trim()}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          {loading ? '⏳ 生成中...' : '🚀 生成文案'}
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-900">生成结果</h3>
            <button onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm text-blue-500 hover:underline">📋 复制</button>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{result}</div>
        </div>
      )}
    </main>
  )
}
