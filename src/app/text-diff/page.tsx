'use client'
import { useState } from 'react'
import Link from 'next/link'

function diffTexts(a: string, b: string): { type: 'same'|'add'|'del'; text: string }[] {
  const linesA = a.split('\n')
  const linesB = b.split('\n')
  const result: { type: 'same'|'add'|'del'; text: string }[] = []
  const max = Math.max(linesA.length, linesB.length)
  for (let i = 0; i < max; i++) {
    const la = i < linesA.length ? linesA[i] : undefined
    const lb = i < linesB.length ? linesB[i] : undefined
    if (la === lb) {
      result.push({ type: 'same', text: la! })
    } else {
      if (la !== undefined) result.push({ type: 'del', text: la })
      if (lb !== undefined) result.push({ type: 'add', text: lb })
    }
  }
  return result
}

export default function TextDiffPage() {
  const [textA, setTextA] = useState('')
  const [textB, setTextB] = useState('')
  const [diff, setDiff] = useState<{ type: 'same'|'add'|'del'; text: string }[]>([])

  const compare = () => {
    setDiff(diffTexts(textA, textB))
  }

  const stats = {
    same: diff.filter(d => d.type === 'same').length,
    add: diff.filter(d => d.type === 'add').length,
    del: diff.filter(d => d.type === 'del').length,
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📋 文本对比</h1>
      <p className="text-gray-500 mb-8">对比两段文本的差异 · 免费使用</p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-700 mb-2 block">原始文本</span>
          <textarea value={textA} onChange={e => setTextA(e.target.value)}
            placeholder="粘贴原始文本..."
            rows={10}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-700 mb-2 block">修改后文本</span>
          <textarea value={textB} onChange={e => setTextB(e.target.value)}
            placeholder="粘贴修改后文本..."
            rows={10}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>
      </div>

      <button onClick={compare} disabled={!textA && !textB}
        className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition mb-4">
        🔍 对比差异
      </button>

      {diff.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex gap-4 mb-3 text-sm">
            <span className="text-gray-500">相同：{stats.same}行</span>
            <span className="text-green-600">新增：{stats.add}行</span>
            <span className="text-red-600">删除：{stats.del}行</span>
          </div>
          <div className="font-mono text-sm space-y-0.5 max-h-96 overflow-auto">
            {diff.map((d, i) => (
              <div key={i} className={`px-3 py-1 rounded ${
                d.type === 'add' ? 'bg-green-50 text-green-800 border-l-4 border-green-400' :
                d.type === 'del' ? 'bg-red-50 text-red-800 border-l-4 border-red-400' :
                'text-gray-600'
              }`}>
                <span className="select-none mr-2">{d.type === 'add' ? '+' : d.type === 'del' ? '-' : ' '}</span>
                {d.text || ' '}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
