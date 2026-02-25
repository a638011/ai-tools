'use client'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import { useState } from 'react'
import Link from 'next/link'

export default function WordCountPage() {
  const [text, setText] = useState('')

  const stats = {
    chars: text.length,
    charsNoSpace: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    chinese: (text.match(/[\u4e00-\u9fff]/g) || []).length,
    english: (text.match(/[a-zA-Z]+/g) || []).length,
    numbers: (text.match(/\d+/g) || []).length,
    punctuation: (text.match(/[^\w\s\u4e00-\u9fff]/g) || []).length,
    lines: text ? text.split('\n').length : 0,
    paragraphs: text.trim() ? text.trim().split(/\n\s*\n/).length : 0,
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6"><Link href="/" className="text-sm text-blue-500 hover:underline">← Back</Link><LangSwitcher /></div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📝 在线字数统计</h1>
      <p className="text-gray-500 mb-8">实时统计字数、字符数、中英文数量 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <textarea value={text} onChange={e => setText(e.target.value)}
          placeholder="在这里粘贴或输入文本..."
          rows={10}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-700" />

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{stats.chars}</div>
            <div className="text-sm text-gray-500">总字符</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{stats.charsNoSpace}</div>
            <div className="text-sm text-gray-500">不含空格</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{stats.chinese}</div>
            <div className="text-sm text-gray-500">中文字数</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{stats.english}</div>
            <div className="text-sm text-gray-500">英文单词</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{stats.lines}</div>
            <div className="text-sm text-gray-500">行数</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{stats.paragraphs}</div>
            <div className="text-sm text-gray-500">段落数</div>
          </div>
        </div>
      </div>
    </main>
  )
}
