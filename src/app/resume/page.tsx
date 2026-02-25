'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState } from 'react'
import Link from 'next/link'

const templates = [
  { id: 'professional', name: '简洁专业', icon: '💼' },
  { id: 'creative', name: '创意风格', icon: '🎨' },
  { id: 'academic', name: '学术科研', icon: '🎓' },
]

export default function ResumePage() {
  const [template, setTemplate] = useState('professional')
  const [name, setName] = useState('')
  const [targetJob, setTargetJob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [education, setEducation] = useState('')
  const [experience, setExperience] = useState('')
  const [skills, setSkills] = useState('')
  const [selfIntro, setSelfIntro] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    if (!name.trim() || !targetJob.trim()) return
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ template, name, targetJob, phone, email, education, experience, skills, selfIntro }),
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📄 AI简历生成器</h1>
      <p className="text-gray-500 mb-8">填写基本信息，一键生成专业简历 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">简历风格</label>
          <div className="flex flex-wrap gap-2">
            {templates.map(t => (
              <button key={t.id} onClick={() => setTemplate(t.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${template === t.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {t.icon} {t.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">姓名 *</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              placeholder="你的姓名"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">目标职位 *</label>
            <input type="text" value={targetJob} onChange={e => setTargetJob(e.target.value)}
              placeholder="例如：前端工程师"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)}
              placeholder="138xxxx8888"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">教育背景</label>
          <textarea value={education} onChange={e => setEducation(e.target.value)}
            placeholder="例如：2018-2022 北京大学 计算机科学与技术 本科"
            rows={2}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">工作/项目经历</label>
          <textarea value={experience} onChange={e => setExperience(e.target.value)}
            placeholder="例如：2022-至今 某科技公司 前端开发工程师&#10;- 负责公司核心产品的前端开发&#10;- 优化页面性能，加载速度提升50%"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">技能特长</label>
          <input type="text" value={skills} onChange={e => setSkills(e.target.value)}
            placeholder="用逗号分隔，例如：JavaScript,React,Node.js,Python"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">自我评价</label>
          <textarea value={selfIntro} onChange={e => setSelfIntro(e.target.value)}
            placeholder="简要描述你的优势和特点"
            rows={2}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" />
        </div>

        <button onClick={generate} disabled={loading || !name.trim() || !targetJob.trim()}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          {loading ? '⏳ 生成中...' : '🚀 生成简历'}
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-900">生成结果</h3>
            <button onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm text-blue-500 hover:underline">📋 复制</button>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-mono text-sm">{result}</div>
        </div>
      )}
    </main>
  )
}
