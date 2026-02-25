'use client'
import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { id: 'baby', name: '宝宝起名', icon: '👶' },
  { id: 'brand', name: '品牌命名', icon: '🏷️' },
  { id: 'company', name: '公司起名', icon: '🏢' },
  { id: 'pet', name: '宠物起名', icon: '🐾' },
  { id: 'game', name: '游戏ID', icon: '🎮' },
]

const styles = [
  { id: 'classic', name: '古典文雅' },
  { id: 'modern', name: '时尚现代' },
  { id: 'poetic', name: '诗词意境' },
  { id: 'simple', name: '简约大气' },
  { id: 'cute', name: '可爱萌趣' },
]

export default function NameGenPage() {
  const [category, setCategory] = useState('baby')
  const [style, setStyle] = useState('classic')
  const [surname, setSurname] = useState('')
  const [keywords, setKeywords] = useState('')
  const [gender, setGender] = useState('neutral')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/name-gen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, style, surname, keywords, gender }),
      })
      const data = await res.json()
      setResult(data.content || data.error || '生成失败，请重试')
    } catch {
      setResult('网络错误，请重试')
    }
    setLoading(false)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">✨ AI起名生成器</h1>
      <p className="text-gray-500 mb-8">宝宝/品牌/公司智能起名 · 免费使用</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">起名类型</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c.id} onClick={() => setCategory(c.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${category === c.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {c.icon} {c.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">风格偏好</label>
          <div className="flex flex-wrap gap-2">
            {styles.map(s => (
              <button key={s.id} onClick={() => setStyle(s.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${style === s.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {(category === 'baby') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">性别偏好</label>
            <div className="flex gap-2">
              {[{id:'male',name:'男孩'},{id:'female',name:'女孩'},{id:'neutral',name:'不限'}].map(g => (
                <button key={g.id} onClick={() => setGender(g.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition ${gender === g.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {g.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {category === 'baby' ? '姓氏' : category === 'brand' ? '行业' : category === 'company' ? '行业' : '偏好'}
            </label>
            <input type="text" value={surname} onChange={e => setSurname(e.target.value)}
              placeholder={category === 'baby' ? '例如：李' : category === 'brand' ? '例如：科技' : category === 'company' ? '例如：餐饮' : '例如：可爱'}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">期望寓意/关键词</label>
            <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)}
              placeholder="例如：聪明,阳光,有内涵"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
        </div>

        <button onClick={generate} disabled={loading}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
          {loading ? '⏳ 生成中...' : '🚀 生成名字'}
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-900">生成结果</h3>
            <button onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm text-blue-500 hover:underline">📋 复制</button>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{result}</div>
        </div>
      )}
    </main>
  )
}
