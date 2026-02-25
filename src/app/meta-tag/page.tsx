'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const labelsI18n = {
  zh: { title: '页面标题', desc: '页面描述', keywords: '关键词', author: '作者', url: '页面URL', image: 'OG图片URL', siteName: '网站名称', preview: '预览', generate: '生成代码' },
  en: { title: 'Page Title', desc: 'Description', keywords: 'Keywords', author: 'Author', url: 'Page URL', image: 'OG Image URL', siteName: 'Site Name', preview: 'Preview', generate: 'Generate' },
  ja: { title: 'ページタイトル', desc: '説明', keywords: 'キーワード', author: '著者', url: 'ページURL', image: 'OG画像URL', siteName: 'サイト名', preview: 'プレビュー', generate: '生成' },
  ko: { title: '페이지 제목', desc: '설명', keywords: '키워드', author: '작성자', url: '페이지 URL', image: 'OG 이미지 URL', siteName: '사이트 이름', preview: '미리보기', generate: '생성' },
  es: { title: 'Título', desc: 'Descripción', keywords: 'Palabras clave', author: 'Autor', url: 'URL', image: 'URL de imagen OG', siteName: 'Nombre del sitio', preview: 'Vista previa', generate: 'Generar' },
}

export default function MetaTagPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const l = labelsI18n[locale] || labelsI18n.zh
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [keywords, setKeywords] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [siteName, setSiteName] = useState('')

  const code = [
    `<meta charset="UTF-8">`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    title && `<title>${title}</title>`,
    desc && `<meta name="description" content="${desc}">`,
    keywords && `<meta name="keywords" content="${keywords}">`,
    author && `<meta name="author" content="${author}">`,
    '',
    '<!-- Open Graph / Facebook -->',
    `<meta property="og:type" content="website">`,
    title && `<meta property="og:title" content="${title}">`,
    desc && `<meta property="og:description" content="${desc}">`,
    url && `<meta property="og:url" content="${url}">`,
    image && `<meta property="og:image" content="${image}">`,
    siteName && `<meta property="og:site_name" content="${siteName}">`,
    '',
    '<!-- Twitter -->',
    `<meta name="twitter:card" content="summary_large_image">`,
    title && `<meta name="twitter:title" content="${title}">`,
    desc && `<meta name="twitter:description" content="${desc}">`,
    image && `<meta name="twitter:image" content="${image}">`,
  ].filter(Boolean).join('\n')

  const fields = [
    { label: l.title, value: title, set: setTitle, ph: 'My Awesome Website' },
    { label: l.desc, value: desc, set: setDesc, ph: 'A brief description of your page (50-160 chars)' },
    { label: l.keywords, value: keywords, set: setKeywords, ph: 'keyword1, keyword2, keyword3' },
    { label: l.author, value: author, set: setAuthor, ph: 'John Doe' },
    { label: l.url, value: url, set: setUrl, ph: 'https://example.com/page' },
    { label: l.image, value: image, set: setImage, ph: 'https://example.com/image.jpg' },
    { label: l.siteName, value: siteName, set: setSiteName, ph: 'My Website' },
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🏷️ Meta Tag {locale === 'zh' ? '生成器' : locale === 'ja' ? 'ジェネレーター' : locale === 'ko' ? '생성기' : locale === 'es' ? 'Generador' : 'Generator'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '生成SEO友好的HTML meta标签，包含Open Graph和Twitter Card' : 'Generate SEO-friendly meta tags with OG and Twitter Card'}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        {fields.map(f => (
          <div key={f.label}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
            <input value={f.value} onChange={e => f.set(e.target.value)} placeholder={f.ph}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        ))}
        {desc && <p className="text-xs text-gray-400">{desc.length}/160 {locale === 'zh' ? '字符' : 'chars'}</p>}
      </div>

      {title && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">HTML</span>
            <button onClick={() => navigator.clipboard.writeText(code)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
          </div>
          <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap bg-gray-50 rounded-lg p-3 overflow-x-auto">{code}</pre>
        </div>
      )}

      {title && (
        <div className="mt-4">
          <span className="text-sm font-medium text-gray-700 block mb-2">{locale === 'zh' ? 'Google搜索预览' : 'Google Preview'}</span>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-blue-700 text-lg hover:underline cursor-pointer">{title}</p>
            <p className="text-green-700 text-sm">{url || 'https://example.com'}</p>
            <p className="text-gray-600 text-sm">{desc || '...'}</p>
          </div>
        </div>
      )}
    </main>
  )
}
