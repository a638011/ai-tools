'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: 'robots.txt生成器', desc: '通过表单快速生成robots.txt文件', generate: '🔄 生成', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', output: '生成结果', rules: '规则配置', addRule: '➕ 添加规则', removeRule: '✕', userAgent: 'User-Agent', allow: '允许路径 (Allow)', disallow: '禁止路径 (Disallow)', sitemap: 'Sitemap URL', crawlDelay: 'Crawl-delay (秒)', commonBots: '常见爬虫', allBots: '所有爬虫 (*)', pathPlaceholder: '/path/', sitemapPlaceholder: 'https://example.com/sitemap.xml', preset: '快捷预设', presetAll: '允许所有', presetNone: '禁止所有', presetStandard: '标准配置' },
  en: { title: 'robots.txt Generator', desc: 'Generate robots.txt files with a simple form', generate: '🔄 Generate', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', output: 'Output', rules: 'Rules', addRule: '➕ Add Rule', removeRule: '✕', userAgent: 'User-Agent', allow: 'Allow Path', disallow: 'Disallow Path', sitemap: 'Sitemap URL', crawlDelay: 'Crawl-delay (sec)', commonBots: 'Common Bots', allBots: 'All Bots (*)', pathPlaceholder: '/path/', sitemapPlaceholder: 'https://example.com/sitemap.xml', preset: 'Presets', presetAll: 'Allow All', presetNone: 'Block All', presetStandard: 'Standard' },
  ja: { title: 'robots.txtジェネレーター', desc: 'フォームで簡単にrobots.txtを生成', generate: '🔄 生成', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', output: '出力', rules: 'ルール設定', addRule: '➕ ルール追加', removeRule: '✕', userAgent: 'User-Agent', allow: '許可パス (Allow)', disallow: '禁止パス (Disallow)', sitemap: 'Sitemap URL', crawlDelay: 'Crawl-delay (秒)', commonBots: 'よく使うBot', allBots: '全Bot (*)', pathPlaceholder: '/path/', sitemapPlaceholder: 'https://example.com/sitemap.xml', preset: 'プリセット', presetAll: '全許可', presetNone: '全禁止', presetStandard: '標準' },
  ko: { title: 'robots.txt 생성기', desc: '폼으로 간편하게 robots.txt 파일 생성', generate: '🔄 생성', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', output: '출력', rules: '규칙 설정', addRule: '➕ 규칙 추가', removeRule: '✕', userAgent: 'User-Agent', allow: '허용 경로 (Allow)', disallow: '차단 경로 (Disallow)', sitemap: 'Sitemap URL', crawlDelay: 'Crawl-delay (초)', commonBots: '자주 쓰는 봇', allBots: '모든 봇 (*)', pathPlaceholder: '/path/', sitemapPlaceholder: 'https://example.com/sitemap.xml', preset: '프리셋', presetAll: '모두 허용', presetNone: '모두 차단', presetStandard: '표준' },
  es: { title: 'Generador robots.txt', desc: 'Genera archivos robots.txt con un formulario simple', generate: '🔄 Generar', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', output: 'Resultado', rules: 'Reglas', addRule: '➕ Agregar Regla', removeRule: '✕', userAgent: 'User-Agent', allow: 'Ruta Permitida (Allow)', disallow: 'Ruta Bloqueada (Disallow)', sitemap: 'Sitemap URL', crawlDelay: 'Crawl-delay (seg)', commonBots: 'Bots Comunes', allBots: 'Todos los Bots (*)', pathPlaceholder: '/path/', sitemapPlaceholder: 'https://example.com/sitemap.xml', preset: 'Presets', presetAll: 'Permitir Todo', presetNone: 'Bloquear Todo', presetStandard: 'Estándar' },
}

const commonBots = ['Googlebot', 'Bingbot', 'Baiduspider', 'YandexBot', 'DuckDuckBot', 'Slurp', 'facebookexternalhit', 'Twitterbot', 'LinkedInBot', 'GPTBot', 'ChatGPT-User', 'CCBot', 'Bytespider']

interface Rule { userAgent: string; allow: string[]; disallow: string[]; crawlDelay: string }

const emptyRule = (): Rule => ({ userAgent: '*', allow: [], disallow: [], crawlDelay: '' })

export default function RobotsTxtPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [rules, setRules] = useState<Rule[]>([emptyRule()])
  const [sitemap, setSitemap] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const updateRule = (idx: number, field: keyof Rule, value: string | string[]) => {
    const next = [...rules]; next[idx] = { ...next[idx], [field]: value }; setRules(next)
  }
  const addRule = () => setRules([...rules, emptyRule()])
  const removeRule = (idx: number) => { if (rules.length > 1) setRules(rules.filter((_, i) => i !== idx)) }

  const generate = () => {
    let txt = ''
    for (const r of rules) {
      txt += `User-agent: ${r.userAgent || '*'}\n`
      for (const a of r.allow) if (a.trim()) txt += `Allow: ${a.trim()}\n`
      for (const d of r.disallow) if (d.trim()) txt += `Disallow: ${d.trim()}\n`
      if (r.crawlDelay) txt += `Crawl-delay: ${r.crawlDelay}\n`
      txt += '\n'
    }
    if (sitemap.trim()) txt += `Sitemap: ${sitemap.trim()}\n`
    setOutput(txt.trim())
  }

  const applyPreset = (type: string) => {
    if (type === 'all') { setRules([{ userAgent: '*', allow: ['/'], disallow: [], crawlDelay: '' }]); setSitemap('') }
    else if (type === 'none') { setRules([{ userAgent: '*', allow: [], disallow: ['/'], crawlDelay: '' }]); setSitemap('') }
    else if (type === 'standard') {
      setRules([{ userAgent: '*', allow: ['/'], disallow: ['/admin/', '/private/', '/tmp/', '/api/'], crawlDelay: '10' }])
      setSitemap('https://example.com/sitemap.xml')
    }
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🤖 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={generate} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.generate}</button>
          <span className="text-sm text-gray-400 self-center">{u.preset}:</span>
          <button onClick={() => applyPreset('all')} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.presetAll}</button>
          <button onClick={() => applyPreset('none')} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.presetNone}</button>
          <button onClick={() => applyPreset('standard')} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.presetStandard}</button>
          <button onClick={() => { setRules([emptyRule()]); setSitemap(''); setOutput('') }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            {rules.map((rule, ri) => (
              <div key={ri} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">{u.rules} #{ri + 1}</h3>
                  {rules.length > 1 && <button onClick={() => removeRule(ri)} className="text-red-400 hover:text-red-600 text-sm">{u.removeRule}</button>}
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{u.userAgent}</label>
                    <input value={rule.userAgent} onChange={e => updateRule(ri, 'userAgent', e.target.value)} className="w-full border rounded-xl p-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
                    <div className="flex flex-wrap gap-1 mt-1">
                      {commonBots.slice(0, 6).map(b => (
                        <button key={b} onClick={() => updateRule(ri, 'userAgent', b)} className="text-xs px-2 py-0.5 bg-gray-100 hover:bg-gray-200 rounded text-gray-600 transition">{b}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{u.disallow}</label>
                    {rule.disallow.map((d, di) => (
                      <div key={di} className="flex gap-1 mb-1">
                        <input value={d} onChange={e => { const next = [...rule.disallow]; next[di] = e.target.value; updateRule(ri, 'disallow', next) }} placeholder={u.pathPlaceholder} className="flex-1 border rounded-lg p-2 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
                        <button onClick={() => updateRule(ri, 'disallow', rule.disallow.filter((_, i) => i !== di))} className="text-red-400 hover:text-red-600 px-2">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateRule(ri, 'disallow', [...rule.disallow, ''])} className="text-xs text-indigo-600 hover:text-indigo-800">+ Disallow</button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{u.allow}</label>
                    {rule.allow.map((a, ai) => (
                      <div key={ai} className="flex gap-1 mb-1">
                        <input value={a} onChange={e => { const next = [...rule.allow]; next[ai] = e.target.value; updateRule(ri, 'allow', next) }} placeholder={u.pathPlaceholder} className="flex-1 border rounded-lg p-2 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
                        <button onClick={() => updateRule(ri, 'allow', rule.allow.filter((_, i) => i !== ai))} className="text-red-400 hover:text-red-600 px-2">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateRule(ri, 'allow', [...rule.allow, ''])} className="text-xs text-indigo-600 hover:text-indigo-800">+ Allow</button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{u.crawlDelay}</label>
                    <input value={rule.crawlDelay} onChange={e => updateRule(ri, 'crawlDelay', e.target.value)} type="number" min="0" placeholder="10" className="w-32 border rounded-xl p-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
                  </div>
                </div>
              </div>
            ))}
            <button onClick={addRule} className="w-full py-3 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition text-sm">{u.addRule}</button>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-1">{u.sitemap}</label>
              <input value={sitemap} onChange={e => setSitemap(e.target.value)} placeholder={u.sitemapPlaceholder} className="w-full border rounded-xl p-2.5 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-[500px] border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}
