'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const platformsI18n = {
  zh: [{ id: 'xiaohongshu', name: '小红书', icon: '📕' }, { id: 'taobao', name: '淘宝/天猫', icon: '🛒' }, { id: 'douyin', name: '抖音', icon: '🎵' }, { id: 'weibo', name: '微博', icon: '💬' }, { id: 'gongzhonghao', name: '公众号', icon: '📱' }],
  en: [{ id: 'instagram', name: 'Instagram', icon: '📸' }, { id: 'twitter', name: 'Twitter/X', icon: '🐦' }, { id: 'tiktok', name: 'TikTok', icon: '🎵' }, { id: 'facebook', name: 'Facebook', icon: '👤' }, { id: 'linkedin', name: 'LinkedIn', icon: '💼' }],
  ja: [{ id: 'twitter', name: 'Twitter/X', icon: '🐦' }, { id: 'instagram', name: 'Instagram', icon: '📸' }, { id: 'line', name: 'LINE', icon: '💬' }, { id: 'tiktok', name: 'TikTok', icon: '🎵' }, { id: 'note', name: 'note', icon: '📝' }],
  ko: [{ id: 'naver', name: 'Naver Blog', icon: '📗' }, { id: 'instagram', name: 'Instagram', icon: '📸' }, { id: 'kakao', name: 'KakaoStory', icon: '💬' }, { id: 'tiktok', name: 'TikTok', icon: '🎵' }, { id: 'youtube', name: 'YouTube', icon: '▶️' }],
  es: [{ id: 'instagram', name: 'Instagram', icon: '📸' }, { id: 'twitter', name: 'Twitter/X', icon: '🐦' }, { id: 'tiktok', name: 'TikTok', icon: '🎵' }, { id: 'facebook', name: 'Facebook', icon: '👤' }, { id: 'linkedin', name: 'LinkedIn', icon: '💼' }],
}

const stylesI18n = {
  zh: [{ id: 'selling', name: '种草带货' }, { id: 'story', name: '故事分享' }, { id: 'tutorial', name: '教程干货' }, { id: 'review', name: '测评对比' }, { id: 'emotional', name: '情感共鸣' }],
  en: [{ id: 'selling', name: 'Product Review' }, { id: 'story', name: 'Storytelling' }, { id: 'tutorial', name: 'Tutorial' }, { id: 'review', name: 'Comparison' }, { id: 'emotional', name: 'Emotional' }],
  ja: [{ id: 'selling', name: '商品紹介' }, { id: 'story', name: 'ストーリー' }, { id: 'tutorial', name: 'チュートリアル' }, { id: 'review', name: 'レビュー比較' }, { id: 'emotional', name: '感情共感' }],
  ko: [{ id: 'selling', name: '제품 리뷰' }, { id: 'story', name: '스토리텔링' }, { id: 'tutorial', name: '튜토리얼' }, { id: 'review', name: '비교 리뷰' }, { id: 'emotional', name: '감성' }],
  es: [{ id: 'selling', name: 'Reseña' }, { id: 'story', name: 'Historia' }, { id: 'tutorial', name: 'Tutorial' }, { id: 'review', name: 'Comparación' }, { id: 'emotional', name: 'Emocional' }],
}

const labelsI18n = {
  zh: { platform: '选择平台', style: '文案风格', product: '产品/主题 *', productPh: '例如：防晒霜、咖啡机、旅行攻略...', keywords: '关键词（可选）', keywordsPh: '用逗号分隔，例如：平价,学生党,夏天必备', loading: '⏳ 生成中...', free: '免费', perDay: '次/天', limitMsg: '⚡ 今日免费次数已用完（3次/天）\n\n升级Pro版享受无限次生成 →', error: '网络错误，请重试' },
  en: { platform: 'Platform', style: 'Writing Style', product: 'Product/Topic *', productPh: 'e.g. sunscreen, coffee maker, travel guide...', keywords: 'Keywords (optional)', keywordsPh: 'Comma separated, e.g. affordable, must-have, summer', loading: '⏳ Generating...', free: 'Free', perDay: '/day', limitMsg: '⚡ Daily free limit reached (3/day)\n\nUpgrade to Pro for unlimited →', error: 'Network error, please retry' },
  ja: { platform: 'プラットフォーム', style: 'ライティングスタイル', product: '商品/テーマ *', productPh: '例：日焼け止め、コーヒーメーカー...', keywords: 'キーワード（任意）', keywordsPh: 'カンマ区切り', loading: '⏳ 生成中...', free: '無料', perDay: '回/日', limitMsg: '⚡ 本日の無料回数を使い切りました（3回/日）', error: 'ネットワークエラー' },
  ko: { platform: '플랫폼', style: '글쓰기 스타일', product: '제품/주제 *', productPh: '예: 선크림, 커피머신, 여행 가이드...', keywords: '키워드 (선택)', keywordsPh: '쉼표로 구분', loading: '⏳ 생성 중...', free: '무료', perDay: '회/일', limitMsg: '⚡ 오늘 무료 횟수를 모두 사용했습니다 (3회/일)', error: '네트워크 오류' },
  es: { platform: 'Plataforma', style: 'Estilo', product: 'Producto/Tema *', productPh: 'ej. protector solar, cafetera, guía de viaje...', keywords: 'Palabras clave (opcional)', keywordsPh: 'Separadas por comas', loading: '⏳ Generando...', free: 'Gratis', perDay: '/día', limitMsg: '⚡ Límite diario alcanzado (3/día)\n\nActualiza a Pro →', error: 'Error de red' },
}

export default function CopywriterPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const platforms = platformsI18n[locale] || platformsI18n.zh
  const styles = stylesI18n[locale] || stylesI18n.zh
  const l = labelsI18n[locale] || labelsI18n.zh

  const [platform, setPlatform] = useState(platforms[0].id)
  const [style, setStyle] = useState('selling')
  const [product, setProduct] = useState('')
  const [keywords, setKeywords] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [todayCount, setTodayCount] = useState(0)

  const generate = async () => {
    if (!product.trim()) return
    if (todayCount >= 3) { setResult(l.limitMsg); return }
    setLoading(true); setResult('')
    try {
      const res = await fetch('/api/copywriter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ platform, style, product, keywords }) })
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">✍️ {t.tools.copywriter.name}</h1>
      <p className="text-gray-500 mb-8">{t.tools.copywriter.desc} · {l.free} {3 - todayCount}{l.perDay}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.platform}</label>
          <div className="flex flex-wrap gap-2">
            {platforms.map(p => (
              <button key={p.id} onClick={() => setPlatform(p.id)} className={`px-4 py-2 rounded-lg text-sm transition ${platform === p.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{p.icon} {p.name}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.style}</label>
          <div className="flex flex-wrap gap-2">
            {styles.map(s => (
              <button key={s.id} onClick={() => setStyle(s.id)} className={`px-4 py-2 rounded-lg text-sm transition ${style === s.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{s.name}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.product}</label>
          <input value={product} onChange={e => setProduct(e.target.value)} placeholder={l.productPh} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{l.keywords}</label>
          <input value={keywords} onChange={e => setKeywords(e.target.value)} placeholder={l.keywordsPh} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700" />
        </div>
        <button onClick={generate} disabled={loading || !product.trim()} className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{loading ? l.loading : ui.generate}</button>
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
