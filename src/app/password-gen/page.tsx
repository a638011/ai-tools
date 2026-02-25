'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

export default function PasswordGenPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [len, setLen] = useState(16)
  const [upper, setUpper] = useState(true)
  const [lower, setLower] = useState(true)
  const [nums, setNums] = useState(true)
  const [syms, setSyms] = useState(true)
  const [pwd, setPwd] = useState('')

  const labels = { zh: { length: '长度', uppercase: '大写字母', lowercase: '小写字母', numbers: '数字', symbols: '特殊符号', strength: '强度', weak: '弱', medium: '中', strong: '强' }, en: { length: 'Length', uppercase: 'Uppercase', lowercase: 'Lowercase', numbers: 'Numbers', symbols: 'Symbols', strength: 'Strength', weak: 'Weak', medium: 'Medium', strong: 'Strong' }, ja: { length: '長さ', uppercase: '大文字', lowercase: '小文字', numbers: '数字', symbols: '記号', strength: '強度', weak: '弱', medium: '中', strong: '強' }, ko: { length: '길이', uppercase: '대문자', lowercase: '소문자', numbers: '숫자', symbols: '특수문자', strength: '강도', weak: '약함', medium: '보통', strong: '강함' }, es: { length: 'Longitud', uppercase: 'Mayúsculas', lowercase: 'Minúsculas', numbers: 'Números', symbols: 'Símbolos', strength: 'Fuerza', weak: 'Débil', medium: 'Media', strong: 'Fuerte' } }
  const l = labels[locale] || labels.zh

  const generate = () => {
    let chars = ''
    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (nums) chars += '0123456789'
    if (syms) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    if (!chars) return
    const arr = new Uint32Array(len)
    crypto.getRandomValues(arr)
    setPwd(Array.from(arr, v => chars[v % chars.length]).join(''))
  }

  const strength = () => {
    let s = 0
    if (upper) s++; if (lower) s++; if (nums) s++; if (syms) s++
    if (len >= 16) s++
    return s <= 2 ? { text: l.weak, color: 'text-red-500' } : s <= 3 ? { text: l.medium, color: 'text-yellow-500' } : { text: l.strong, color: 'text-green-500' }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔑 {t.tools['password-gen'].name}</h1>
      <p className="text-gray-500 mb-8">{t.tools['password-gen'].desc}</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">{l.length}: {len}</label>
          <input type="range" min={4} max={64} value={len} onChange={e => setLen(+e.target.value)} className="w-full mt-1" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[{ v: upper, s: setUpper, n: l.uppercase }, { v: lower, s: setLower, n: l.lowercase }, { v: nums, s: setNums, n: l.numbers }, { v: syms, s: setSyms, n: l.symbols }].map(o => (
            <label key={o.n} className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" checked={o.v} onChange={e => o.s(e.target.checked)} className="rounded" />{o.n}
            </label>
          ))}
        </div>
        <p className="text-sm">{l.strength}: <span className={`font-medium ${strength().color}`}>{strength().text}</span></p>
        <button onClick={generate} className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition">{ui.generate}</button>
        {pwd && (
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{ui.result}</span>
              <button onClick={() => navigator.clipboard.writeText(pwd)} className="text-xs text-blue-500 hover:underline">{ui.copy}</button>
            </div>
            <p className="font-mono text-lg break-all text-gray-800">{pwd}</p>
          </div>
        )}
      </div>
    </main>
  )
}
