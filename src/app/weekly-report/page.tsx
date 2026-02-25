'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState } from 'react'
import Link from 'next/link'

export default function WeeklyReportPage() {
  const [tasks, setTasks] = useState('')
  const [role, setRole] = useState('developer')
  const [tone, setTone] = useState('professional')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)

  const roles = [
    { id: 'developer', name: '开发工程师', icon: '💻' },
    { id: 'product', name: '产品经理', icon: '📋' },
    { id: 'design', name: '设计师', icon: '🎨' },
    { id: 'marketing', name: '市场运营', icon: '📈' },
    { id: 'sales', name: '销售', icon: '🤝' },
    { id: 'general', name: '通用', icon: '📝' },
  ]

  const tones = [
    { id: 'professional', name: '专业正式' },
    { id: 'concise', name: '简洁高效' },
    { id: 'detailed', name: '详细全面' },
  ]

  const generate = async () => {
    if (!tasks.trim()) return
    if (todayCount >= 3) {
      setResult('⚡ 今日免费次数已用完（3次/天）\n\n升级Pro版享受无限次生成 →')
      return
    }
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/weekly-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tasks, role, tone }),
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 AI周报生成器</h1>
      <p className="text-gray-500 mb-8">输入本周工作内容，秒出专业周报 · 免费{3 - todayCount}次/天</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">你的角色</label>
          <div className="flex flex-wrap gap-2">
            {roles.map(r => (
              <button key={r.id} onClick={() => setRole(r.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${role === r.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {r.icon} {r.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">报告风格</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">本周工作内容 *</label>
          <textarea value={tasks} onChange={e => setTasks(e.target.value)} rows={6}
            placeholder="随便写，比如：&#10;- 完成了用户登录功能&#10;- 修了3个bug&#10;- 开了产品评审会&#10;- 写了技术方案文档"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" />
        </div>

        <button onClick={generate} disabled={loading || !tasks.trim()}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          {loading ? '⏳ 生成中...' : '🚀 生成周报'}
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
