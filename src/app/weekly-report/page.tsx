'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const rolesI18n = {
  zh: [{ id: 'developer', name: '开发工程师', icon: '💻' }, { id: 'product', name: '产品经理', icon: '📋' }, { id: 'design', name: '设计师', icon: '🎨' }, { id: 'marketing', name: '市场运营', icon: '📈' }, { id: 'sales', name: '销售', icon: '🤝' }, { id: 'general', name: '通用', icon: '📝' }],
  en: [{ id: 'developer', name: 'Developer', icon: '💻' }, { id: 'product', name: 'Product Manager', icon: '📋' }, { id: 'design', name: 'Designer', icon: '🎨' }, { id: 'marketing', name: 'Marketing', icon: '📈' }, { id: 'sales', name: 'Sales', icon: '🤝' }, { id: 'general', name: 'General', icon: '📝' }],
  ja: [{ id: 'developer', name: 'エンジニア', icon: '💻' }, { id: 'product', name: 'PM', icon: '📋' }, { id: 'design', name: 'デザイナー', icon: '🎨' }, { id: 'marketing', name: 'マーケティング', icon: '📈' }, { id: 'sales', name: '営業', icon: '🤝' }, { id: 'general', name: '一般', icon: '📝' }],
  ko: [{ id: 'developer', name: '개발자', icon: '💻' }, { id: 'product', name: 'PM', icon: '📋' }, { id: 'design', name: '디자이너', icon: '🎨' }, { id: 'marketing', name: '마케팅', icon: '📈' }, { id: 'sales', name: '영업', icon: '🤝' }, { id: 'general', name: '일반', icon: '📝' }],
  es: [{ id: 'developer', name: 'Desarrollador', icon: '💻' }, { id: 'product', name: 'Product Manager', icon: '📋' }, { id: 'design', name: 'Diseñador', icon: '🎨' }, { id: 'marketing', name: 'Marketing', icon: '📈' }, { id: 'sales', name: 'Ventas', icon: '🤝' }, { id: 'general', name: 'General', icon: '📝' }],
}
const tonesI18n = {
  zh: [{ id: 'professional', name: '专业正式' }, { id: 'concise', name: '简洁高效' }, { id: 'detailed', name: '详细全面' }],
  en: [{ id: 'professional', name: 'Professional' }, { id: 'concise', name: 'Concise' }, { id: 'detailed', name: 'Detailed' }],
  ja: [{ id: 'professional', name: 'プロフェッショナル' }, { id: 'concise', name: '簡潔' }, { id: 'detailed', name: '詳細' }],
  ko: [{ id: 'professional', name: '전문적' }, { id: 'concise', name: '간결' }, { id: 'detailed', name: '상세' }],
  es: [{ id: 'professional', name: 'Profesional' }, { id: 'concise', name: 'Conciso' }, { id: 'detailed', name: 'Detallado' }],
}
const labelsI18n = {
  zh: { role: '你的角色', tone: '报告风格', tasks: '本周工作内容 *', tasksPh: '随便写，比如：\n- 完成了用户登录功能\n- 修了3个bug\n- 开了产品评审会', loading: '⏳ 生成中...', free: '免费', perDay: '次/天', limitMsg: '⚡ 今日免费次数已用完（3次/天）', error: '网络错误，请重试' },
  en: { role: 'Your Role', tone: 'Report Style', tasks: 'This Week\'s Work *', tasksPh: 'Just write, e.g.:\n- Completed login feature\n- Fixed 3 bugs\n- Attended product review', loading: '⏳ Generating...', free: 'Free', perDay: '/day', limitMsg: '⚡ Daily free limit reached (3/day)', error: 'Network error, please retry' },
  ja: { role: '役割', tone: 'レポートスタイル', tasks: '今週の作業内容 *', tasksPh: '例：\n- ログイン機能を完成\n- バグ3件修正\n- レビュー会議参加', loading: '⏳ 生成中...', free: '無料', perDay: '回/日', limitMsg: '⚡ 本日の無料回数を使い切りました', error: 'ネットワークエラー' },
  ko: { role: '역할', tone: '보고서 스타일', tasks: '이번 주 업무 *', tasksPh: '예:\n- 로그인 기능 완료\n- 버그 3개 수정\n- 제품 리뷰 회의', loading: '⏳ 생성 중...', free: '무료', perDay: '회/일', limitMsg: '⚡ 오늘 무료 횟수를 모두 사용했습니다', error: '네트워크 오류' },
  es: { role: 'Tu Rol', tone: 'Estilo', tasks: 'Trabajo de esta semana *', tasksPh: 'Escribe, ej.:\n- Completé función de login\n- Corregí 3 bugs\n- Reunión de revisión', loading: '⏳ Generando...', free: 'Gratis', perDay: '/día', limitMsg: '⚡ Límite diario alcanzado (3/día)', error: 'Error de red' },
}

export default function WeeklyReportPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const roles = rolesI18n[locale] || rolesI18n.zh
  const tones = tonesI18n[locale] || tonesI18n.zh
  const l = labelsI18n[locale] || labelsI18n.zh

  const [role, setRole] = useState('developer')
  const [tone, setTone] = useState('professional')
  const [tasks, setTasks] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)

  const generate = async () => {
    if (!tasks.trim()) return
    if (todayCount >= 3) { setResult(l.limitMsg); return }
    setLoading(true); setResult('')
    try {
      const res = await fetch('/api/weekly-report', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tasks, role, tone }) })
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 {t.tools['weekly-report'].name}</h1>
      <p className="text-gray-500 mb-8">{t.tools['weekly-report'].desc} · {l.free} {3 - todayCount}{l.perDay}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.role}</label>
          <div className="flex flex-wrap gap-2">
            {roles.map(r => (
              <button key={r.id} onClick={() => setRole(r.id)} className={`px-4 py-2 rounded-lg text-sm transition ${role === r.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{r.icon} {r.name}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.tone}</label>
          <div className="flex flex-wrap gap-2">
            {tones.map(tn => (
              <button key={tn.id} onClick={() => setTone(tn.id)} className={`px-4 py-2 rounded-lg text-sm transition ${tone === tn.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{tn.name}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.tasks}</label>
          <textarea value={tasks} onChange={e => setTasks(e.target.value)} rows={6} placeholder={l.tasksPh}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-700" />
        </div>
        <button onClick={generate} disabled={loading || !tasks.trim()} className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{loading ? l.loading : ui.generate}</button>
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
