'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '批量文本替换', desc: '设置多组查找/替换规则，一键批量替换', input: '输入文本', output: '替换结果', replace: '🔄 执行替换', copy: '📋 复制', copied: '✅ 已复制', clear: '清空', loadExample: '加载示例', rules: '替换规则', addRule: '➕ 添加规则', find: '查找', replaceWith: '替换为', isRegex: '正则', caseSensitive: '区分大小写', removeRule: '✕', ruleCount: '条规则', replacements: '次替换' },
  en: { title: 'Batch Text Replace', desc: 'Set multiple find/replace rules and apply them all at once', input: 'Input Text', output: 'Result', replace: '🔄 Replace All', copy: '📋 Copy', copied: '✅ Copied', clear: 'Clear', loadExample: 'Load Example', rules: 'Replace Rules', addRule: '➕ Add Rule', find: 'Find', replaceWith: 'Replace with', isRegex: 'Regex', caseSensitive: 'Case', removeRule: '✕', ruleCount: 'rules', replacements: 'replacements' },
  ja: { title: '一括テキスト置換', desc: '複数の検索/置換ルールを設定して一括置換', input: 'テキスト入力', output: '置換結果', replace: '🔄 一括置換', copy: '📋 コピー', copied: '✅ コピー済', clear: 'クリア', loadExample: '例を読込', rules: '置換ルール', addRule: '➕ ルール追加', find: '検索', replaceWith: '置換', isRegex: '正規表現', caseSensitive: '大小文字', removeRule: '✕', ruleCount: 'ルール', replacements: '件置換' },
  ko: { title: '일괄 텍스트 치환', desc: '여러 찾기/바꾸기 규칙을 설정하고 한 번에 적용', input: '텍스트 입력', output: '치환 결과', replace: '🔄 일괄 치환', copy: '📋 복사', copied: '✅ 복사됨', clear: '지우기', loadExample: '예제 로드', rules: '치환 규칙', addRule: '➕ 규칙 추가', find: '찾기', replaceWith: '바꾸기', isRegex: '정규식', caseSensitive: '대소문자', removeRule: '✕', ruleCount: '규칙', replacements: '건 치환' },
  es: { title: 'Reemplazo Masivo de Texto', desc: 'Configura múltiples reglas de buscar/reemplazar y aplícalas de una vez', input: 'Texto de entrada', output: 'Resultado', replace: '🔄 Reemplazar Todo', copy: '📋 Copiar', copied: '✅ Copiado', clear: 'Limpiar', loadExample: 'Cargar Ejemplo', rules: 'Reglas de Reemplazo', addRule: '➕ Agregar Regla', find: 'Buscar', replaceWith: 'Reemplazar con', isRegex: 'Regex', caseSensitive: 'Mayús', removeRule: '✕', ruleCount: 'reglas', replacements: 'reemplazos' },
}

interface Rule { find: string; replace: string; isRegex: boolean; caseSensitive: boolean }

export default function TextReplacePage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [rules, setRules] = useState<Rule[]>([{ find: '', replace: '', isRegex: false, caseSensitive: true }])
  const [copied, setCopied] = useState(false)
  const [stats, setStats] = useState({ rules: 0, replacements: 0 })
  const [error, setError] = useState('')

  const updateRule = (idx: number, field: keyof Rule, value: string | boolean) => {
    const next = [...rules]; next[idx] = { ...next[idx], [field]: value }; setRules(next)
  }
  const addRule = () => setRules([...rules, { find: '', replace: '', isRegex: false, caseSensitive: true }])
  const removeRule = (idx: number) => { if (rules.length > 1) setRules(rules.filter((_, i) => i !== idx)) }

  const doReplace = () => {
    setError('')
    let text = input
    let totalReplacements = 0
    let activeRules = 0
    try {
      for (const rule of rules) {
        if (!rule.find) continue
        activeRules++
        if (rule.isRegex) {
          const flags = 'g' + (rule.caseSensitive ? '' : 'i')
          const re = new RegExp(rule.find, flags)
          const matches = text.match(re)
          if (matches) totalReplacements += matches.length
          text = text.replace(re, rule.replace)
        } else {
          const escaped = rule.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const flags = 'g' + (rule.caseSensitive ? '' : 'i')
          const re = new RegExp(escaped, flags)
          const matches = text.match(re)
          if (matches) totalReplacements += matches.length
          text = text.replace(re, rule.replace)
        }
      }
      setOutput(text)
      setStats({ rules: activeRules, replacements: totalReplacements })
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e))
      setOutput('')
    }
  }

  const loadExample = () => {
    setInput('Hello World! This is a test.\nfoo bar baz foo\nThe quick brown fox jumps over the lazy dog.\nfoo@example.com')
    setRules([
      { find: 'foo', replace: 'FOO', isRegex: false, caseSensitive: true },
      { find: '\\bthe\\b', replace: 'THE', isRegex: true, caseSensitive: false },
      { find: '[a-z]+@[a-z]+\\.[a-z]+', replace: '[EMAIL]', isRegex: true, caseSensitive: false },
    ])
    setOutput('')
  }

  const clearAll = () => {
    setInput(''); setOutput(''); setError('')
    setRules([{ find: '', replace: '', isRegex: false, caseSensitive: true }])
    setStats({ rules: 0, replacements: 0 })
  }

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">🔄 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={doReplace} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.replace}</button>
          <button onClick={loadExample} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={clearAll} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
          {stats.replacements > 0 && <span className="self-center text-sm text-gray-500">{stats.rules} {u.ruleCount}, {stats.replacements} {u.replacements}</span>}
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">{u.rules}</h3>
            <button onClick={addRule} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{u.addRule}</button>
          </div>
          <div className="space-y-2">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl">
                <span className="text-xs text-gray-400 w-5 text-center">{i + 1}</span>
                <input value={rule.find} onChange={e => updateRule(i, 'find', e.target.value)} placeholder={u.find} className="flex-1 border rounded-lg p-2 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
                <span className="text-gray-400">→</span>
                <input value={rule.replace} onChange={e => updateRule(i, 'replace', e.target.value)} placeholder={u.replaceWith} className="flex-1 border rounded-lg p-2 text-sm font-mono focus:ring-2 focus:ring-indigo-300 outline-none" />
                <button onClick={() => updateRule(i, 'isRegex', !rule.isRegex)} className={`px-2 py-1 rounded-lg text-xs transition ${rule.isRegex ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`} title={u.isRegex}>.*</button>
                <button onClick={() => updateRule(i, 'caseSensitive', !rule.caseSensitive)} className={`px-2 py-1 rounded-lg text-xs transition ${rule.caseSensitive ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`} title={u.caseSensitive}>Aa</button>
                {rules.length > 1 && <button onClick={() => removeRule(i)} className="text-red-400 hover:text-red-600 text-sm px-1">{u.removeRule}</button>}
              </div>
            ))}
          </div>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4 text-sm">❌ {error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text here..." className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{u.output}</h3>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">{copied ? u.copied : u.copy}</button>}
            </div>
            <textarea value={output} readOnly className="w-full h-64 border rounded-xl p-4 text-sm font-mono resize-none bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}
