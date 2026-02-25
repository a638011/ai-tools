'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function JsonFormatterPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const format = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
    } catch (e: unknown) {
      setError(`JSON格式错误：${e instanceof Error ? e.message : '未知错误'}`)
      setOutput('')
    }
  }

  const compress = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError('')
    } catch (e: unknown) {
      setError(`JSON格式错误：${e instanceof Error ? e.message : '未知错误'}`)
      setOutput('')
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔧 JSON格式化工具</h1>
      <p className="text-gray-500 mb-8">JSON格式化、压缩、校验 · 免费使用</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">输入JSON</span>
            <button onClick={() => setInput('')} className="text-xs text-gray-400 hover:text-gray-600">清空</button>
          </div>
          <textarea value={input} onChange={e => setInput(e.target.value)}
            placeholder='粘贴JSON，例如：{"name":"test","value":123}'
            rows={15}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none font-mono text-sm text-gray-700" />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">输出结果</span>
            {output && <button onClick={() => navigator.clipboard.writeText(output)} className="text-xs text-blue-500 hover:underline">📋 复制</button>}
          </div>
          <textarea value={output} readOnly
            placeholder="格式化结果将显示在这里"
            rows={15}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 font-mono text-sm text-gray-700 resize-none" />
        </div>
      </div>

      {error && <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}

      <div className="flex gap-3 mt-4">
        <button onClick={format} disabled={!input.trim()}
          className="flex-1 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          🎨 格式化
        </button>
        <button onClick={compress} disabled={!input.trim()}
          className="flex-1 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          📦 压缩
        </button>
      </div>
    </main>
  )
}
