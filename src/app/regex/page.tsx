'use client'
import { useState } from 'react'
import Link from 'next/link'

const presets = [
  { name: '邮箱', pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', flags: 'g' },
  { name: '手机号', pattern: '1[3-9]\\d{9}', flags: 'g' },
  { name: 'URL', pattern: 'https?://[\\w\\-._~:/?#\\[\\]@!$&\'()*+,;=%]+', flags: 'g' },
  { name: 'IP地址', pattern: '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}', flags: 'g' },
  { name: '中文', pattern: '[\\u4e00-\\u9fff]+', flags: 'g' },
  { name: '身份证', pattern: '\\d{17}[\\dXx]', flags: 'g' },
]

export default function RegexPage() {
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState('g')
  const [testStr, setTestStr] = useState('')
  const [results, setResults] = useState<{ matches: string[]; count: number; error: string }>({ matches: [], count: 0, error: '' })

  const test = () => {
    try {
      const re = new RegExp(pattern, flags)
      const matches = testStr.match(re) || []
      setResults({ matches, count: matches.length, error: '' })
    } catch (e: unknown) {
      setResults({ matches: [], count: 0, error: e instanceof Error ? e.message : '无效的正则表达式' })
    }
  }

  const applyPreset = (p: typeof presets[0]) => {
    setPattern(p.pattern)
    setFlags(p.flags)
  }

  const getHighlighted = () => {
    if (!pattern || results.error) return testStr
    try {
      const re = new RegExp(pattern, flags.includes('g') ? flags : flags + 'g')
      return testStr.replace(re, match => `<mark class="bg-yellow-200 px-0.5 rounded">${match}</mark>`)
    } catch { return testStr }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔍 正则表达式测试</h1>
      <p className="text-gray-500 mb-8">在线测试正则表达式，实时匹配高亮 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">常用正则</label>
          <div className="flex flex-wrap gap-2">
            {presets.map(p => (
              <button key={p.name} onClick={() => applyPreset(p)}
                className="px-3 py-1 rounded-lg text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">正则表达式</label>
            <input type="text" value={pattern} onChange={e => setPattern(e.target.value)}
              placeholder="输入正则表达式..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
          <div className="w-24">
            <label className="block text-sm font-medium text-gray-700 mb-2">标志</label>
            <input type="text" value={flags} onChange={e => setFlags(e.target.value)}
              placeholder="g"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">测试文本</label>
          <textarea value={testStr} onChange={e => setTestStr(e.target.value)}
            placeholder="输入要测试的文本..."
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" />
        </div>

        <button onClick={test} disabled={!pattern || !testStr}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          🔍 测试匹配
        </button>

        {results.error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">{results.error}</div>}

        {results.count > 0 && (
          <div className="space-y-3">
            <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">
              ✅ 找到 {results.count} 个匹配
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: getHighlighted() }} />
            <div className="space-y-1">
              {results.matches.map((m, i) => (
                <div key={i} className="p-2 bg-yellow-50 rounded text-sm font-mono">
                  匹配{i + 1}：{m}
                </div>
              ))}
            </div>
          </div>
        )}

        {!results.error && results.count === 0 && pattern && testStr && (
          <div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg text-sm">⚠️ 没有找到匹配</div>
        )}
      </div>
    </main>
  )
}
