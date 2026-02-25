'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const typesI18n = {
  zh: [{ id: 'business', name: '商务合作', icon: '🤝' }, { id: 'job', name: '求职应聘', icon: '💼' }, { id: 'followup', name: '跟进催促', icon: '⏰' }, { id: 'thanks', name: '感谢致谢', icon: '🙏' }, { id: 'apology', name: '道歉说明', icon: '😔' }, { id: 'invitation', name: '邀请函', icon: '📨' }],
  en: [{ id: 'business', name: 'Business', icon: '🤝' }, { id: 'job', name: 'Job Application', icon: '💼' }, { id: 'followup', name: 'Follow-up', icon: '⏰' }, { id: 'thanks', name: 'Thank You', icon: '🙏' }, { id: 'apology', name: 'Apology', icon: '😔' }, { id: 'invitation', name: 'Invitation', icon: '📨' }],
  ja: [{ id: 'business', name: 'ビジネス', icon: '🤝' }, { id: 'job', name: '就職活動', icon: '💼' }, { id: 'followup', name: 'フォローアップ', icon: '⏰' }, { id: 'thanks', name: 'お礼', icon: '🙏' }, { id: 'apology', name: 'お詫び', icon: '😔' }, { id: 'invitation', name: '招待', icon: '📨' }],
  ko: [{ id: 'business', name: '비즈니스', icon: '🤝' }, { id: 'job', name: '취업', icon: '💼' }, { id: 'followup', name: '팔로업', icon: '⏰' }, { id: 'thanks', name: '감사', icon: '🙏' }, { id: 'apology', name: '사과', icon: '😔' }, { id: 'invitation', name: '초대', icon: '📨' }],
  es: [{ id: 'business', name: 'Negocios', icon: '🤝' }, { id: 'job', name: 'Empleo', icon: '💼' }, { id: 'followup', name: 'Seguimiento', icon: '⏰' }, { id: 'thanks', name: 'Agradecimiento', icon: '🙏' }, { id: 'apology', name: 'Disculpa', icon: '😔' }, { id: 'invitation', name: 'Invitación', icon: '📨' }],
}
const labelsI18n = {
  zh: { type: '邮件类型', recipient: '收件人称呼', recipientPh: '例如：张总、HR、李老师', subject: '邮件主题/目的', subjectPh: '例如：申请贵公司前端工程师职位', points: '要点（可选）', pointsPh: '想要表达的关键信息，每行一个', loading: '⏳ 生成中...', error: '网络错误', free: '免费', perDay: '次/天', limitMsg: '⚡ 今日免费次数已用完' },
  en: { type: 'Email Type', recipient: 'Recipient', recipientPh: 'e.g. Mr. Smith, HR Team, Prof. Lee', subject: 'Subject/Purpose', subjectPh: 'e.g. Application for Frontend Developer position', points: 'Key Points (optional)', pointsPh: 'Key messages, one per line', loading: '⏳ Generating...', error: 'Network error', free: 'Free', perDay: '/day', limitMsg: '⚡ Daily limit reached' },
  ja: { type: 'メールタイプ', recipient: '宛先', recipientPh: '例：田中部長、人事部', subject: '件名/目的', subjectPh: '例：フロントエンドエンジニア応募', points: 'ポイント（任意）', pointsPh: '伝えたい要点を1行ずつ', loading: '⏳ 生成中...', error: 'エラー', free: '無料', perDay: '回/日', limitMsg: '⚡ 本日の無料回数終了' },
  ko: { type: '이메일 유형', recipient: '수신자', recipientPh: '예: 김 부장님, 인사팀', subject: '제목/목적', subjectPh: '예: 프론트엔드 개발자 지원', points: '핵심 포인트 (선택)', pointsPh: '전달할 핵심 메시지', loading: '⏳ 생성 중...', error: '오류', free: '무료', perDay: '회/일', limitMsg: '⚡ 오늘 무료 횟수 소진' },
  es: { type: 'Tipo de Email', recipient: 'Destinatario', recipientPh: 'ej. Sr. García, RRHH', subject: 'Asunto/Propósito', subjectPh: 'ej. Solicitud para puesto de desarrollador', points: 'Puntos clave (opcional)', pointsPh: 'Mensajes clave, uno por línea', loading: '⏳ Generando...', error: 'Error', free: 'Gratis', perDay: '/día', limitMsg: '⚡ Límite diario alcanzado' },
}

export default function EmailPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const types = typesI18n[locale] || typesI18n.zh
  const l = labelsI18n[locale] || labelsI18n.zh
  const [type, setType] = useState('business')
  const [recipient, setRecipient] = useState('')
  const [subject, setSubject] = useState('')
  const [points, setPoints] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)

  const generate = async () => {
    if (!subject.trim()) return
    if (todayCount >= 3) { setResult(l.limitMsg); return }
    setLoading(true); setResult('')
    try {
      const res = await fetch('/api/email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, recipient, subject, points }) })
      const data = await res.json()
      setResult(data.content || data.error || l.error)
      setTodayCount(c => c + 1)
    } catch { setResult(l.error) }
    setLoading(false)
  }

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📧 {t.tools.email.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.email.desc} · {l.free} {3 - todayCount}{l.perDay}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.type}</label>
          <div className="flex flex-wrap gap-2">
            {types.map(tp => (<button key={tp.id} onClick={() => setType(tp.id)} className={`px-4 py-2 rounded-lg text-sm transition ${type === tp.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{tp.icon} {tp.name}</button>))}
          </div>
        </div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.recipient}</label><input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder={l.recipientPh} className={inputCls} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.subject}</label><input value={subject} onChange={e => setSubject(e.target.value)} placeholder={l.subjectPh} className={inputCls} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.points}</label><textarea value={points} onChange={e => setPoints(e.target.value)} rows={3} placeholder={l.pointsPh} className={inputCls + " resize-none"} /></div>
        <button onClick={generate} disabled={loading || !subject.trim()} className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{loading ? l.loading : ui.generate}</button>
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
