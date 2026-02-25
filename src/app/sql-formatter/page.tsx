'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'OUTER JOIN', 'ON', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'OFFSET', 'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE FROM', 'CREATE TABLE', 'ALTER TABLE', 'DROP TABLE', 'UNION', 'UNION ALL', 'AS', 'IN', 'NOT', 'NULL', 'IS', 'LIKE', 'BETWEEN', 'EXISTS', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END']

function formatSQL(sql: string): string {
  let formatted = sql.trim()
  // Uppercase keywords
  keywords.forEach(kw => {
    const re = new RegExp(`\\b${kw.replace(/ /g, '\\s+')}\\b`, 'gi')
    formatted = formatted.replace(re, kw)
  })
  // Add newlines before major clauses
  const majors = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'ON', 'SET', 'VALUES', 'UNION']
  majors.forEach(kw => {
    const re = new RegExp(`\\s+(${kw.replace(/ /g, '\\s+')})\\b`, 'gi')
    formatted = formatted.replace(re, `\n${kw}`)
  })
  // Indent after SELECT, SET
  formatted = formatted.replace(/\bSELECT\b\s+/gi, 'SELECT\n  ')
  formatted = formatted.replace(/,\s*/g, ',\n  ')
  return formatted.trim()
}

function minifySQL(sql: string): string {
  return sql.replace(/\s+/g, ' ').replace(/\s*,\s*/g, ',').replace(/\s*=\s*/g, '=').trim()
}

export default function SqlFormatterPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🗃️ SQL {locale === 'zh' ? '格式化工具' : locale === 'ja' ? 'フォーマッター' : locale === 'ko' ? '포맷터' : locale === 'es' ? 'Formateador' : 'Formatter'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? 'SQL语句格式化、压缩、关键词大写' : 'Format, minify SQL and uppercase keywords'}</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Input</span>
            <button onClick={() => setInput('')} className="text-xs text-gray-400 hover:text-gray-600">{ui.clear}</button>
          </div>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={14} placeholder="SELECT * FROM users WHERE id = 1"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg font-mono text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">{ui.result}</span>
            {output && <button onClick={() => navigator.clipboard.writeText(output)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>}
          </div>
          <textarea value={output} readOnly rows={14}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 font-mono text-sm text-gray-700 resize-none" />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button onClick={() => setOutput(formatSQL(input))} disabled={!input.trim()} className="flex-1 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{ui.format}</button>
        <button onClick={() => setOutput(minifySQL(input))} disabled={!input.trim()} className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition">{ui.compress}</button>
      </div>
    </main>
  )
}
