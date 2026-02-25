'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const templatesI18n = {
  zh: [{ id: 'professional', name: '简洁专业', icon: '💼' }, { id: 'creative', name: '创意风格', icon: '🎨' }, { id: 'academic', name: '学术科研', icon: '🎓' }],
  en: [{ id: 'professional', name: 'Professional', icon: '💼' }, { id: 'creative', name: 'Creative', icon: '🎨' }, { id: 'academic', name: 'Academic', icon: '🎓' }],
  ja: [{ id: 'professional', name: 'プロフェッショナル', icon: '💼' }, { id: 'creative', name: 'クリエイティブ', icon: '🎨' }, { id: 'academic', name: '学術', icon: '🎓' }],
  ko: [{ id: 'professional', name: '전문적', icon: '💼' }, { id: 'creative', name: '크리에이티브', icon: '🎨' }, { id: 'academic', name: '학술', icon: '🎓' }],
  es: [{ id: 'professional', name: 'Profesional', icon: '💼' }, { id: 'creative', name: 'Creativo', icon: '🎨' }, { id: 'academic', name: 'Académico', icon: '🎓' }],
}
const labelsI18n = {
  zh: { style: '简历风格', name: '姓名 *', namePh: '你的姓名', job: '目标职位 *', jobPh: '例如：前端工程师', phone: '手机号', phonePh: '138xxxx8888', email: '邮箱', emailPh: 'example@email.com', edu: '教育背景', eduPh: '例如：2018-2022 北京大学 计算机科学与技术', exp: '工作/项目经历', expPh: '例如：2022-至今 某科技公司 前端开发', skills: '技能特长', skillsPh: 'JavaScript,React,Node.js,Python', intro: '自我评价', introPh: '简要描述你的优势和特点', loading: '⏳ 生成中...', error: '网络错误，请重试' },
  en: { style: 'Resume Style', name: 'Name *', namePh: 'Your name', job: 'Target Position *', jobPh: 'e.g. Frontend Developer', phone: 'Phone', phonePh: '+1 xxx-xxx-xxxx', email: 'Email', emailPh: 'example@email.com', edu: 'Education', eduPh: 'e.g. 2018-2022 MIT, Computer Science, BS', exp: 'Work Experience', expPh: 'e.g. 2022-Present, Tech Corp, Frontend Dev', skills: 'Skills', skillsPh: 'JavaScript,React,Node.js,Python', intro: 'Summary', introPh: 'Brief description of your strengths', loading: '⏳ Generating...', error: 'Network error' },
  ja: { style: '履歴書スタイル', name: '氏名 *', namePh: 'お名前', job: '希望職種 *', jobPh: '例：フロントエンドエンジニア', phone: '電話番号', phonePh: '090-xxxx-xxxx', email: 'メール', emailPh: 'example@email.com', edu: '学歴', eduPh: '例：2018-2022 東京大学 情報工学', exp: '職歴', expPh: '例：2022-現在 テック株式会社', skills: 'スキル', skillsPh: 'JavaScript,React,Node.js', intro: '自己PR', introPh: 'あなたの強みを簡潔に', loading: '⏳ 生成中...', error: 'ネットワークエラー' },
  ko: { style: '이력서 스타일', name: '이름 *', namePh: '이름', job: '희망 직무 *', jobPh: '예: 프론트엔드 개발자', phone: '전화번호', phonePh: '010-xxxx-xxxx', email: '이메일', emailPh: 'example@email.com', edu: '학력', eduPh: '예: 2018-2022 서울대학교 컴퓨터공학', exp: '경력', expPh: '예: 2022-현재 테크 회사', skills: '기술', skillsPh: 'JavaScript,React,Node.js', intro: '자기소개', introPh: '강점을 간략히 설명', loading: '⏳ 생성 중...', error: '네트워크 오류' },
  es: { style: 'Estilo de CV', name: 'Nombre *', namePh: 'Tu nombre', job: 'Puesto deseado *', jobPh: 'ej. Desarrollador Frontend', phone: 'Teléfono', phonePh: '+34 xxx xxx xxx', email: 'Email', emailPh: 'example@email.com', edu: 'Educación', eduPh: 'ej. 2018-2022 Universidad, Informática', exp: 'Experiencia', expPh: 'ej. 2022-Presente, Tech Corp', skills: 'Habilidades', skillsPh: 'JavaScript,React,Node.js', intro: 'Resumen', introPh: 'Describe brevemente tus fortalezas', loading: '⏳ Generando...', error: 'Error de red' },
}

export default function ResumePage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const templates = templatesI18n[locale] || templatesI18n.zh
  const l = labelsI18n[locale] || labelsI18n.zh
  const [template, setTemplate] = useState('professional')
  const [name, setName] = useState(''); const [targetJob, setTargetJob] = useState('')
  const [phone, setPhone] = useState(''); const [email, setEmail] = useState('')
  const [education, setEducation] = useState(''); const [experience, setExperience] = useState('')
  const [skills, setSkills] = useState(''); const [selfIntro, setSelfIntro] = useState('')
  const [result, setResult] = useState(''); const [loading, setLoading] = useState(false)

  const generate = async () => {
    if (!name.trim() || !targetJob.trim()) return
    setLoading(true); setResult('')
    try {
      const res = await fetch('/api/resume', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ template, name, targetJob, phone, email, education, experience, skills, selfIntro }) })
      const data = await res.json()
      setResult(data.content || data.error || l.error)
    } catch { setResult(l.error) }
    setLoading(false)
  }

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700"

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📄 {t.tools.resume.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.resume.desc}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.style}</label>
          <div className="flex flex-wrap gap-2">
            {templates.map(tp => (
              <button key={tp.id} onClick={() => setTemplate(tp.id)} className={`px-4 py-2 rounded-lg text-sm transition ${template === tp.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{tp.icon} {tp.name}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.name}</label><input value={name} onChange={e => setName(e.target.value)} placeholder={l.namePh} className={inputCls} /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.job}</label><input value={targetJob} onChange={e => setTargetJob(e.target.value)} placeholder={l.jobPh} className={inputCls} /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.phone}</label><input value={phone} onChange={e => setPhone(e.target.value)} placeholder={l.phonePh} className={inputCls} /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.email}</label><input value={email} onChange={e => setEmail(e.target.value)} placeholder={l.emailPh} className={inputCls} /></div>
        </div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.edu}</label><textarea value={education} onChange={e => setEducation(e.target.value)} placeholder={l.eduPh} rows={2} className={inputCls + " resize-none"} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.exp}</label><textarea value={experience} onChange={e => setExperience(e.target.value)} placeholder={l.expPh} rows={4} className={inputCls + " resize-none"} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.skills}</label><input value={skills} onChange={e => setSkills(e.target.value)} placeholder={l.skillsPh} className={inputCls} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.intro}</label><textarea value={selfIntro} onChange={e => setSelfIntro(e.target.value)} placeholder={l.introPh} rows={2} className={inputCls + " resize-none"} /></div>
        <button onClick={generate} disabled={loading || !name.trim() || !targetJob.trim()} className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{loading ? l.loading : ui.generate}</button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-900">{ui.result}</h3>
            <button onClick={() => navigator.clipboard.writeText(result)} className="text-sm text-blue-500 hover:underline">{ui.copy}</button>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-mono text-sm">{result}</div>
        </div>
      )}
    </main>
  )
}
