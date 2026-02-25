'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function UrlEncodePage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'encode'|'decode'>('encode')

  const convert = () => {
    try {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(input))
      } else {
        setOutput(decodeURIComponent(input.trim()))
      }
    } catch {
      setOutput('❌ 转换失败，请检查输入内容')
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">🔗 URL编解码</h1>
      <p className="text-gray-500 mb-8">在线URL编码/解码 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode('encode')}
            className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'encode' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            编码 (Encode)
          </button>
          <button onClick={() => setMode('decode')}
            className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'decode' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            解码 (Decode)
          </button>
        </div>

        <textarea value={input} onChange={e => setInput(e.target.value)}
          placeholder={mode === 'encode' ? '输入要编码的URL或文本...' : '输入要解码的URL编码字符串...'}
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none font-mono text-sm" />

        <button onClick={convert} disabled={!input.trim()}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          {mode === 'encode' ? '🔒 编码' : '🔓 解码'}
        </button>

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">结果</label>
              <button onClick={() => navigator.clipboard.writeText(output)}
                className="text-xs text-blue-500 hover:underline">📋 复制</button>
            </div>
            <textarea value={output} readOnly rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 font-mono text-sm resize-none" />
          </div>
        )}
      </div>
    </main>
  )
}
