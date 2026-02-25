'use client'
import { useLocale, LangSwitcher } from './LocaleProvider'
import Link from 'next/link'

const toolSlugs = {
  ai: ['copywriter', 'weekly-report', 'resume', 'name-gen', 'moments', 'email'],
  dev: ['json-formatter', 'base64', 'timestamp', 'regex', 'url-encode', 'color-converter', 'hash', 'image-base64', 'qrcode', 'css-units', 'uuid', 'number-base', 'html-entity', 'string-case', 'sql-formatter', 'cron-parser', 'jwt-decoder', 'json-csv', 'meta-tag'],
  text: ['word-count', 'markdown', 'text-diff', 'password-gen', 'lorem', 'text-case', 'emoji', 'ip-lookup', 'image-compress'],
  design: ['gradient', 'box-shadow'],
}
const toolIcons: Record<string, string> = {
  copywriter: '✍️', 'weekly-report': '📊', resume: '📄', 'name-gen': '✨',
  moments: '💬', email: '📧', 'json-formatter': '🔧', base64: '🔐',
  timestamp: '⏰', regex: '🔍', 'url-encode': '🔗', 'color-converter': '🎨',
  'word-count': '📝', markdown: '📄', 'text-diff': '📋', 'password-gen': '🔑',
  'image-base64': '🖼️', hash: '🔒', qrcode: '📱',
  lorem: '📜', 'css-units': '📐',
  uuid: '🆔', 'number-base': '🔢', 'html-entity': '🏷️', 'string-case': '🔤', 'sql-formatter': '🗃️', 'cron-parser': '⏲️',
  'ip-lookup': '🌐', emoji: '😀', 'image-compress': '🗜️', 'text-case': '🔠',
  'jwt-decoder': '🔐', 'json-csv': '📊', gradient: '🎨', 'box-shadow': '🔲', 'meta-tag': '🏷️',
}
const hotTools = ['copywriter', 'weekly-report', 'json-formatter']
const catConfig = [
  { key: 'ai' as const, icon: '✍️', gradient: 'from-violet-500 to-purple-600' },
  { key: 'dev' as const, icon: '🛠️', gradient: 'from-blue-500 to-cyan-500' },
  { key: 'text' as const, icon: '📝', gradient: 'from-emerald-500 to-teal-500' },
  { key: 'design' as const, icon: '🎨', gradient: 'from-pink-500 to-rose-500' },
]

export default function HomePage() {
  const { t } = useLocale()
  const totalTools = Object.keys(t.tools).length

  return (
    <div className="min-h-screen">
      {/* Lang Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LangSwitcher className="bg-white/10 backdrop-blur-sm rounded-xl p-1" />
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {t.hero.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">{t.hero.title}</h1>
          <p className="text-lg sm:text-xl text-white/80 mb-2">{t.hero.subtitle}</p>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto mb-10">{t.hero.desc}</p>
          <div className="flex justify-center gap-4">
            <a href="#tools" className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition shadow-lg shadow-indigo-500/20">{t.hero.cta}</a>
            <Link href="/blog" className="px-8 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition backdrop-blur-sm border border-white/20">{t.hero.blog}</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="glass rounded-2xl shadow-xl border border-white/20 p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ v: `${totalTools}+`, l: t.stats.tools }, { v: '0', l: t.stats.cost }, { v: '0', l: t.stats.register }, { v: '24/7', l: t.stats.available }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold gradient-text">{s.v}</div>
              <div className="text-sm text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <main id="tools" className="max-w-5xl mx-auto px-4 py-16">
        {catConfig.map(cat => {
          const catT = t.categories[cat.key]
          const slugs = toolSlugs[cat.key]
          return (
            <div key={cat.key} className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-xl shadow-lg`}>{cat.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{catT.name}</h2>
                  <p className="text-sm text-gray-400">{catT.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {slugs.map(slug => {
                  const tool = t.tools[slug]
                  return (
                    <Link key={slug} href={`/${slug}`}
                      className="group block p-5 bg-white rounded-2xl border border-gray-100 card-hover">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{toolIcons[slug]}</span>
                        {hotTools.includes(slug) && (
                          <span className="text-[10px] bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-0.5 rounded-full font-medium">{t.common.hot}</span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{tool.desc}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </main>

      {/* CTA */}
      <div className="gradient-bg py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">{t.cta.title}</h2>
          <p className="text-white/70 mb-8">{t.cta.desc}</p>
          <a href="#tools" className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition">{t.cta.btn}</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">🚀 AI Tools</h3>
              <p className="text-sm leading-relaxed">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">{t.footer.popular}</h4>
              <div className="space-y-2 text-sm">
                {['copywriter', 'weekly-report', 'name-gen', 'json-formatter'].map(s => (
                  <Link key={s} href={`/${s}`} className="block hover:text-white transition">{t.tools[s].name}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">{t.footer.resources}</h4>
              <div className="space-y-2 text-sm">
                <Link href="/blog" className="block hover:text-white transition">{t.footer.blog}</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">{t.footer.rights}</div>
        </div>
      </footer>
    </div>
  )
}
