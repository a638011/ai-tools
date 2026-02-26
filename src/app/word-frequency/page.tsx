'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import Link from 'next/link'

const t_ui: Record<string, Record<string, string>> = {
  zh: { title: '词频统计', desc: '统计文本中每个词/字出现的频率', analyze: '📊 统计', input: '输入文本', result: '统计结果', word: '词/字', count: '次数', freq: '频率', clear: '清空', total: '总词数', unique: '不同词数', modeCn: '中文(按字)', modeEn: '英文(按词)', noData: '请输入文本后点击统计', loadExample: '加载示例' },
  en: { title: 'Word Frequency', desc: 'Count word/character frequency in text', analyze: '📊 Analyze', input: 'Input Text', result: 'Results', word: 'Word', count: 'Count', freq: 'Frequency', clear: 'Clear', total: 'Total Words', unique: 'Unique Words', modeCn: 'Chinese (char)', modeEn: 'English (word)', noData: 'Enter text and click analyze', loadExample: 'Load Example' },
  ja: { title: '単語頻度', desc: 'テキスト中の単語/文字の出現頻度を集計', analyze: '📊 集計', input: 'テキスト入力', result: '集計結果', word: '単語', count: '回数', freq: '頻度', clear: 'クリア', total: '総単語数', unique: '異なり語数', modeCn: '中国語(文字)', modeEn: '英語(単語)', noData: 'テキストを入力して集計をクリック', loadExample: '例を読込' },
  ko: { title: '단어 빈도', desc: '텍스트에서 단어/글자 빈도 분석', analyze: '📊 분석', input: '텍스트 입력', result: '분석 결과', word: '단어', count: '횟수', freq: '빈도', clear: '지우기', total: '총 단어 수', unique: '고유 단어 수', modeCn: '중국어(글자)', modeEn: '영어(단어)', noData: '텍스트를 입력하고 분석을 클릭하세요', loadExample: '예제 로드' },
  es: { title: 'Frecuencia de Palabras', desc: 'Cuenta la frecuencia de palabras/caracteres en texto', analyze: '📊 Analizar', input: 'Texto de entrada', result: 'Resultados', word: 'Palabra', count: 'Cantidad', freq: 'Frecuencia', clear: 'Limpiar', total: 'Total palabras', unique: 'Palabras únicas', modeCn: 'Chino (carácter)', modeEn: 'Inglés (palabra)', noData: 'Ingresa texto y haz clic en analizar', loadExample: 'Cargar Ejemplo' },
}

const exCn = '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。'
const exEn = 'To be or not to be, that is the question. Whether it is nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles.'

type FreqItem = { word: string; count: number; freq: string }

function analyzeText(text: string, mode: 'cn' | 'en'): { items: FreqItem[]; total: number; unique: number } {
  const map = new Map<string, number>()
  if (mode === 'cn') {
    for (const ch of text) {
      if (/[\s\p{P}]/u.test(ch)) continue
      const key = ch
      map.set(key, (map.get(key) || 0) + 1)
    }
  } else {
    const words = text.toLowerCase().replace(/[^\w\s\u4e00-\u9fff]/g, ' ').split(/\s+/).filter(Boolean)
    for (const w of words) map.set(w, (map.get(w) || 0) + 1)
  }
  const total = Array.from(map.values()).reduce((a, b) => a + b, 0)
  const items = Array.from(map.entries())
    .map(([word, count]) => ({ word, count, freq: (count / total * 100).toFixed(1) + '%' }))
    .sort((a, b) => b.count - a.count)
  return { items, total, unique: map.size }
}

export default function WordFrequencyPage() {
  const { locale, t } = useLocale()
  const u = t_ui[locale] || t_ui.en
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<'cn' | 'en'>('en')
  const [result, setResult] = useState<{ items: FreqItem[]; total: number; unique: number } | null>(null)

  const analyze = () => {
    if (!input.trim()) return
    setResult(analyzeText(input, mode))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4 z-20"><LangSwitcher className="bg-white/80 backdrop-blur rounded-xl p-1" /></div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 text-sm mb-4 inline-block">{t.common.back}</Link>
        <h1 className="text-3xl font-bold mb-1">📊 {u.title}</h1>
        <p className="text-gray-500 mb-6">{u.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button onClick={() => setMode('en')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'en' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.modeEn}</button>
            <button onClick={() => setMode('cn')} className={`px-4 py-2 rounded-lg text-sm transition ${mode === 'cn' ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}>{u.modeCn}</button>
          </div>
          <button onClick={analyze} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium text-sm">{u.analyze}</button>
          <button onClick={() => { setInput(mode === 'cn' ? exCn : exEn); setResult(null) }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.loadExample}</button>
          <button onClick={() => { setInput(''); setResult(null) }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm transition">{u.clear}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.input}</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text here..."
              className="w-full h-72 border rounded-xl p-4 text-sm resize-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none" />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2">{u.result}</h3>
            {!result ? (
              <p className="text-gray-400 text-sm mt-8 text-center">{u.noData}</p>
            ) : (
              <>
                <div className="flex gap-4 mb-3">
                  <span className="text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg">{u.total}: {result.total}</span>
                  <span className="text-sm bg-purple-50 text-purple-600 px-3 py-1 rounded-lg">{u.unique}: {result.unique}</span>
                </div>
                <div className="h-60 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-gray-50">
                      <tr><th className="text-left p-2 font-medium text-gray-600">#</th><th className="text-left p-2 font-medium text-gray-600">{u.word}</th><th className="text-right p-2 font-medium text-gray-600">{u.count}</th><th className="text-right p-2 font-medium text-gray-600">{u.freq}</th></tr>
                    </thead>
                    <tbody>
                      {result.items.map((item, i) => (
                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="p-2 text-gray-400">{i + 1}</td>
                          <td className="p-2 font-mono">{item.word}</td>
                          <td className="p-2 text-right">{item.count}</td>
                          <td className="p-2 text-right text-gray-500">{item.freq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
