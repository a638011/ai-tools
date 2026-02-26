'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'Open Graph预览器', desc: '预览URL在社交媒体分享时的卡片效果', ogTitle: 'OG标题', ogDesc: 'OG描述', ogImage: 'OG图片URL', ogUrl: '页面URL', ogSiteName: '站点名称', preview: '预览', facebook: 'Facebook', twitter: 'Twitter', linkedin: 'LinkedIn', clear: '清空', loadExample: '加载示例', placeholderTitle: '输入Open Graph标题', placeholderDesc: '输入Open Graph描述', placeholderImage: '输入图片URL', placeholderUrl: '输入页面URL', placeholderSite: '输入站点名称' },
  en: { title: 'Open Graph Previewer', desc: 'Preview how URLs appear when shared on social media', ogTitle: 'OG Title', ogDesc: 'OG Description', ogImage: 'OG Image URL', ogUrl: 'Page URL', ogSiteName: 'Site Name', preview: 'Preview', facebook: 'Facebook', twitter: 'Twitter', linkedin: 'LinkedIn', clear: 'Clear', loadExample: 'Load Example', placeholderTitle: 'Enter Open Graph title', placeholderDesc: 'Enter Open Graph description', placeholderImage: 'Enter image URL', placeholderUrl: 'Enter page URL', placeholderSite: 'Enter site name' },
  ja: { title: 'Open Graphプレビュー', desc: 'SNSでシェアした時のカード表示をプレビュー', ogTitle: 'OGタイトル', ogDesc: 'OG説明', ogImage: 'OG画像URL', ogUrl: 'ページURL', ogSiteName: 'サイト名', preview: 'プレビュー', facebook: 'Facebook', twitter: 'Twitter', linkedin: 'LinkedIn', clear: 'クリア', loadExample: '例を読込', placeholderTitle: 'OGタイトルを入力', placeholderDesc: 'OG説明を入力', placeholderImage: '画像URLを入力', placeholderUrl: 'ページURLを入力', placeholderSite: 'サイト名を入力' },
  ko: { title: 'Open Graph 미리보기', desc: '소셜 미디어 공유 시 카드 미리보기', ogTitle: 'OG 제목', ogDesc: 'OG 설명', ogImage: 'OG 이미지 URL', ogUrl: '페이지 URL', ogSiteName: '사이트 이름', preview: '미리보기', facebook: 'Facebook', twitter: 'Twitter', linkedin: 'LinkedIn', clear: '지우기', loadExample: '예제 로드', placeholderTitle: 'OG 제목 입력', placeholderDesc: 'OG 설명 입력', placeholderImage: '이미지 URL 입력', placeholderUrl: '페이지 URL 입력', placeholderSite: '사이트 이름 입력' },
  es: { title: 'Previsualizador Open Graph', desc: 'Vista previa de cómo se ven las URLs al compartir en redes sociales', ogTitle: 'Título OG', ogDesc: 'Descripción OG', ogImage: 'URL de imagen OG', ogUrl: 'URL de página', ogSiteName: 'Nombre del sitio', preview: 'Vista previa', facebook: 'Facebook', twitter: 'Twitter', linkedin: 'LinkedIn', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', placeholderTitle: 'Ingrese título OG', placeholderDesc: 'Ingrese descripción OG', placeholderImage: 'Ingrese URL de imagen', placeholderUrl: 'Ingrese URL de página', placeholderSite: 'Ingrese nombre del sitio' },
}

export default function OpenGraphPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [ogTitle, setOgTitle] = useState('')
  const [ogDesc, setOgDesc] = useState('')
  const [ogImage, setOgImage] = useState('')
  const [ogUrl, setOgUrl] = useState('')
  const [ogSiteName, setOgSiteName] = useState('')
  const [activeTab, setActiveTab] = useState('facebook')

  const loadExample = () => {
    setOgTitle('AI Tools - Free Online Developer Utilities')
    setOgDesc('A collection of free online tools for developers: JSON formatter, Base64 encoder, hash generator, and more.')
    setOgImage('https://placehold.co/1200x630/4f46e5/white?text=AI+Tools')
    setOgUrl('https://ai-tools.example.com')
    setOgSiteName('AI Tools')
  }

  const clear = () => { setOgTitle(''); setOgDesc(''); setOgImage(''); setOgUrl(''); setOgSiteName('') }

  const displayTitle = ogTitle || 'Page Title'
  const displayDesc = ogDesc || 'Page description will appear here...'
  const displayUrl = ogUrl || 'example.com'
  const displaySite = ogSiteName || 'example.com'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔗 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={loadExample} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={clear} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-3">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.ogTitle}</label><input value={ogTitle} onChange={e => setOgTitle(e.target.value)} placeholder={u.placeholderTitle} className="w-full border rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.ogDesc}</label><textarea value={ogDesc} onChange={e => setOgDesc(e.target.value)} placeholder={u.placeholderDesc} rows={3} className="w-full border rounded-xl p-3 text-sm resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.ogImage}</label><input value={ogImage} onChange={e => setOgImage(e.target.value)} placeholder={u.placeholderImage} className="w-full border rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.ogUrl}</label><input value={ogUrl} onChange={e => setOgUrl(e.target.value)} placeholder={u.placeholderUrl} className="w-full border rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">{u.ogSiteName}</label><input value={ogSiteName} onChange={e => setOgSiteName(e.target.value)} placeholder={u.placeholderSite} className="w-full border rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" /></div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-semibold text-gray-800 mr-2">{u.preview}</h3>
              {['facebook', 'twitter', 'linkedin'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1.5 rounded-lg text-xs transition ${activeTab === tab ? 'bg-indigo-100 text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700 bg-gray-50'}`}>{u[tab as keyof typeof u]}</button>
              ))}
            </div>

            {activeTab === 'facebook' && (
              <div className="border rounded-xl overflow-hidden bg-gray-50">
                {ogImage && <div className="w-full h-48 bg-gray-200"><img src={ogImage} alt="" className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = 'none')} /></div>}
                <div className="p-3 border-t">
                  <p className="text-xs text-gray-500 uppercase">{displaySite}</p>
                  <p className="font-semibold text-sm text-gray-900 mt-1 line-clamp-2">{displayTitle}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{displayDesc}</p>
                </div>
              </div>
            )}

            {activeTab === 'twitter' && (
              <div className="border rounded-2xl overflow-hidden bg-gray-50">
                {ogImage && <div className="w-full h-48 bg-gray-200"><img src={ogImage} alt="" className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = 'none')} /></div>}
                <div className="p-3 border-t">
                  <p className="font-semibold text-sm text-gray-900 line-clamp-1">{displayTitle}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{displayDesc}</p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">🔗 {displayUrl}</p>
                </div>
              </div>
            )}

            {activeTab === 'linkedin' && (
              <div className="border rounded-xl overflow-hidden bg-gray-50">
                {ogImage && <div className="w-full h-48 bg-gray-200"><img src={ogImage} alt="" className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = 'none')} /></div>}
                <div className="p-3 border-t bg-white">
                  <p className="font-semibold text-sm text-gray-900 line-clamp-2">{displayTitle}</p>
                  <p className="text-xs text-gray-500 mt-1">{displayUrl}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
