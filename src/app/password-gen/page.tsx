'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function PasswordGenPage() {
  const [length, setLength] = useState(16)
  const [upper, setUpper] = useState(true)
  const [lower, setLower] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [passwords, setPasswords] = useState<string[]>([])

  const generate = () => {
    let chars = ''
    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (numbers) chars += '0123456789'
    if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz'
    const results: string[] = []
    for (let i = 0; i < 5; i++) {
      let pw = ''
      const arr = new Uint32Array(length)
      crypto.getRandomValues(arr)
      for (let j = 0; j < length; j++) {
        pw += chars[arr[j] % chars.length]
      }
      results.push(pw)
    }
    setPasswords(results)
  }

  const getStrength = () => {
    let pool = 0
    if (upper) pool += 26
    if (lower) pool += 26
    if (numbers) pool += 10
    if (symbols) pool += 26
    const bits = Math.floor(length * Math.log2(pool || 26))
    if (bits < 40) return { label: '弱', color: 'text-red-500', bg: 'bg-red-100' }
    if (bits < 60) return { label: '中等', color: 'text-yellow-500', bg: 'bg-yellow-100' }
    if (bits < 80) return { label: '强', color: 'text-green-500', bg: 'bg-green-100' }
    return { label: '极强', color: 'text-green-700', bg: 'bg-green-200' }
  }

  const strength = getStrength()

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔑 密码生成器</h1>
      <p className="text-gray-500 mb-8">生成安全随机密码 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700">密码长度：{length}</label>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${strength.bg} ${strength.color}`}>
              强度：{strength.label}
            </span>
          </div>
          <input type="range" min={4} max={64} value={length} onChange={e => setLength(Number(e.target.value))}
            className="w-full" />
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { label: '大写字母 A-Z', checked: upper, set: setUpper },
            { label: '小写字母 a-z', checked: lower, set: setLower },
            { label: '数字 0-9', checked: numbers, set: setNumbers },
            { label: '特殊符号 !@#$', checked: symbols, set: setSymbols },
          ].map(opt => (
            <label key={opt.label} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={opt.checked} onChange={e => opt.set(e.target.checked)}
                className="rounded border-gray-300" />
              {opt.label}
            </label>
          ))}
        </div>

        <button onClick={generate}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
          🎲 生成密码
        </button>
      </div>

      {passwords.length > 0 && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-medium text-gray-900 mb-3">生成结果（点击复制）</h3>
          <div className="space-y-2">
            {passwords.map((pw, i) => (
              <div key={i} onClick={() => navigator.clipboard.writeText(pw)}
                className="p-3 bg-gray-50 rounded-lg font-mono text-sm cursor-pointer hover:bg-blue-50 transition flex justify-between items-center">
                <span className="break-all">{pw}</span>
                <span className="text-xs text-gray-400 ml-2 shrink-0">📋</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
