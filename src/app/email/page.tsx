'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState } from 'react'
import Link from 'next/link'

const types = [
  { id: 'business', name: '商务合作', icon: '🤝' },
  { id: 'job', name: '求职应聘', icon: '💼' },
  { id: 'resign', name: '离职申请', icon: '📝' },
  { id: 'thanks', name: '感谢信', icon: '🙏' },
  { id: 'complaint', name: '投诉反馈', icon: '⚠️' },
  { id: 'invite', name: '邀请函', icon: '💌' },
]

const tones = [
  { id: 'formal', name: '正式严谨' },
  { id: 'friendly', name: '友好亲切' },
  { id: 'concise', name: '简洁高效' },
]

export default function EmailPage() {
  const [type, setType] = useState('business')
  const [tone, setTone] = useState('formal')
  const [recipient, setRecipient] = useState('')
  const [subject, setSubject] = useState('')
  const [keyPoints, setKeyPoints] = useState('')
  const [senderName, setSenderName] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    if (!keyPoints.trim()) return
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, tone, recipient, subject, keyPoints, senderName }),
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📧 AI邮件助手</h1>
      <p className="text-gray-500 mb-8">快速生成专业邮件 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">邮件类型</label>
          <div className="flex flex-wrap gap-2">
            {types.map(t => (
              <button key={t.id} onClick={() => setType(t.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${type === t.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {t.icon} {t.name}
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">收件人称呼</label>
            <input type="text" value={recipient} onChange={e => setRecipient(e.target.value)}
              placeholder="例如：张经理、HR、王老师"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">你的署名</label>
            <input type="text" value={senderName} onChange={e => setSenderName(e.target.value)}
              placeholder="例如：小李、张三"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">邮件主题（可选）</label>
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)}
            placeholder="留空则自动生成"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">核心内容/要点 *</label>
          <textarea value={keyPoints} onChange={e => setKeyPoints(e.target.value)}
            placeholder="简要描述邮件要表达的内容，例如：&#10;- 想和对方公司合作推广产品&#10;- 我们是做AI工具的&#10;- 希望约个时间详谈"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" />
        </div>

        <button onClick={generate} disabled={loading || !keyPoints.trim()}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          {loading ? '⏳ 生成中...' : '🚀 生成邮件'}
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
