'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const catsI18n = {
  zh: [{ id: 'baby', name: '宝宝起名', icon: '👶' }, { id: 'brand', name: '品牌命名', icon: '🏷️' }, { id: 'company', name: '公司起名', icon: '🏢' }, { id: 'pet', name: '宠物起名', icon: '🐾' }, { id: 'game', name: '游戏ID', icon: '🎮' }],
  en: [{ id: 'baby', name: 'Baby Names', icon: '👶' }, { id: 'brand', name: 'Brand Names', icon: '🏷️' }, { id: 'company', name: 'Company Names', icon: '🏢' }, { id: 'pet', name: 'Pet Names', icon: '🐾' }, { id: 'game', name: 'Gamertag', icon: '🎮' }],
  ja: [{ id: 'baby', name: '赤ちゃん', icon: '👶' }, { id: 'brand', name: 'ブランド', icon: '🏷️' }, { id: 'company', name: '会社名', icon: '🏢' }, { id: 'pet', name: 'ペット', icon: '🐾' }, { id: 'game', name: 'ゲームID', icon: '🎮' }],
  ko: [{ id: 'baby', name: '아기 이름', icon: '👶' }, { id: 'brand', name: '브랜드', icon: '🏷️' }, { id: 'company', name: '회사명', icon: '🏢' }, { id: 'pet', name: '반려동물', icon: '🐾' }, { id: 'game', name: '게임ID', icon: '🎮' }],
  es: [{ id: 'baby', name: 'Bebé', icon: '👶' }, { id: 'brand', name: 'Marca', icon: '🏷️' }, { id: 'company', name: 'Empresa', icon: '🏢' }, { id: 'pet', name: 'Mascota', icon: '🐾' }, { id: 'game', name: 'Gamertag', icon: '🎮' }],
}
const labelsI18n = {
  zh: { cat: '起名类型', surname: '姓氏', surnamePh: '例如：王', keywords: '期望寓意/关键词', keywordsPh: '例如：聪明,阳光,有内涵', gender: '性别偏好', genderOpts: ['不限', '男', '女'], loading: '⏳ 生成中...', error: '网络错误', free: '免费', perDay: '次/天', limitMsg: '⚡ 今日免费次数已用完（3次/天）' },
  en: { cat: 'Name Type', surname: 'Last Name', surnamePh: 'e.g. Smith', keywords: 'Desired Meaning/Keywords', keywordsPh: 'e.g. smart, sunny, elegant', gender: 'Gender Preference', genderOpts: ['Any', 'Male', 'Female'], loading: '⏳ Generating...', error: 'Network error', free: 'Free', perDay: '/day', limitMsg: '⚡ Daily limit reached (3/day)' },
  ja: { cat: 'タイプ', surname: '名字', surnamePh: '例：田中', keywords: '希望する意味', keywordsPh: '例：賢い、明るい', gender: '性別', genderOpts: ['指定なし', '男', '女'], loading: '⏳ 生成中...', error: 'エラー', free: '無料', perDay: '回/日', limitMsg: '⚡ 本日の無料回数終了' },
  ko: { cat: '유형', surname: '성', surnamePh: '예: 김', keywords: '원하는 의미/키워드', keywordsPh: '예: 똑똑한, 밝은', gender: '성별', genderOpts: ['무관', '남', '여'], loading: '⏳ 생성 중...', error: '오류', free: '무료', perDay: '회/일', limitMsg: '⚡ 오늘 무료 횟수 소진' },
  es: { cat: 'Tipo', surname: 'Apellido', surnamePh: 'ej. García', keywords: 'Significado deseado', keywordsPh: 'ej. inteligente, alegre', gender: 'Género', genderOpts: ['Cualquiera', 'Masculino', 'Femenino'], loading: '⏳ Generando...', error: 'Error de red', free: 'Gratis', perDay: '/día', limitMsg: '⚡ Límite diario alcanzado' },
}

export default function NameGenPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const cats = catsI18n[locale] || catsI18n.zh
  const l = labelsI18n[locale] || labelsI18n.zh
  const [cat, setCat] = useState('baby')
  const [surname, setSurname] = useState('')
  const [keywords, setKeywords] = useState('')
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)

  const generate = async () => {
    if (todayCount >= 3) { setResult(l.limitMsg); return }
    setLoading(true); setResult('')
    try {
      const res = await fetch('/api/name-gen', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ category: cat, surname, keywords, gender: l.genderOpts[gender] }) })
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">✨ {t.tools['name-gen'].name}</h1>
      <p className="text-gray-500 mb-8">{t.tools['name-gen'].desc} · {l.free} {3 - todayCount}{l.perDay}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.cat}</label>
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-lg text-sm transition ${cat === c.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{c.icon} {c.name}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.surname}</label><input value={surname} onChange={e => setSurname(e.target.value)} placeholder={l.surnamePh} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700" /></div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{l.gender}</label>
            <div className="flex gap-2">
              {l.genderOpts.map((g, i) => (
                <button key={g} onClick={() => setGender(i)} className={`px-4 py-2 rounded-lg text-sm transition ${gender === i ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{g}</button>
              ))}
            </div>
          </div>
        </div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">{l.keywords}</label><input value={keywords} onChange={e => setKeywords(e.target.value)} placeholder={l.keywordsPh} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700" /></div>
        <button onClick={generate} disabled={loading} className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{loading ? l.loading : ui.generate}</button>
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
