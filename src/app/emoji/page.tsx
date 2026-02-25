'use client'
import { useState } from 'react'
import { useLocale, LangSwitcher } from '../components/LocaleProvider'
import { getToolUI } from '@/i18n/toolUI'
import Link from 'next/link'

const emojiData = [
  { e: '😀', n: 'grinning smile happy' }, { e: '😂', n: 'laugh tears joy funny' }, { e: '🥰', n: 'love hearts adore' }, { e: '😎', n: 'cool sunglasses' }, { e: '🤔', n: 'thinking hmm' }, { e: '😱', n: 'scream shock' }, { e: '🥳', n: 'party celebrate' }, { e: '😴', n: 'sleep zzz tired' },
  { e: '❤️', n: 'red heart love' }, { e: '🔥', n: 'fire hot lit' }, { e: '⭐', n: 'star favorite' }, { e: '✨', n: 'sparkles magic' }, { e: '💯', n: 'hundred perfect score' }, { e: '🎉', n: 'party tada celebrate' }, { e: '💪', n: 'muscle strong flex' }, { e: '🙏', n: 'pray thanks please' },
  { e: '👍', n: 'thumbs up good yes' }, { e: '👎', n: 'thumbs down bad no' }, { e: '👋', n: 'wave hello bye' }, { e: '✅', n: 'check done complete' }, { e: '❌', n: 'cross wrong no' }, { e: '⚠️', n: 'warning alert caution' }, { e: '💡', n: 'idea lightbulb tip' }, { e: '🔗', n: 'link chain url' },
  { e: '📱', n: 'phone mobile' }, { e: '💻', n: 'laptop computer code' }, { e: '🖥️', n: 'desktop monitor screen' }, { e: '⌨️', n: 'keyboard type' }, { e: '🖱️', n: 'mouse click' }, { e: '📧', n: 'email mail' }, { e: '📁', n: 'folder file directory' }, { e: '🔒', n: 'lock secure password' },
  { e: '🚀', n: 'rocket launch deploy ship' }, { e: '🎯', n: 'target goal bullseye' }, { e: '📊', n: 'chart graph stats' }, { e: '📈', n: 'chart up growth trending' }, { e: '🏆', n: 'trophy winner champion' }, { e: '🎨', n: 'art palette design color' }, { e: '🔧', n: 'wrench tool fix' }, { e: '⚙️', n: 'gear settings config' },
  { e: '☀️', n: 'sun sunny weather' }, { e: '🌙', n: 'moon night' }, { e: '🌈', n: 'rainbow colorful' }, { e: '☁️', n: 'cloud weather' }, { e: '🌊', n: 'wave ocean sea water' }, { e: '🌸', n: 'flower cherry blossom spring' }, { e: '🍕', n: 'pizza food' }, { e: '☕', n: 'coffee tea drink' },
  { e: '🐱', n: 'cat kitten' }, { e: '🐶', n: 'dog puppy' }, { e: '🦊', n: 'fox' }, { e: '🐼', n: 'panda bear' }, { e: '🦄', n: 'unicorn magic' }, { e: '🐝', n: 'bee honey' }, { e: '🦋', n: 'butterfly' }, { e: '🐙', n: 'octopus' },
  { e: '🎵', n: 'music note song' }, { e: '🎬', n: 'movie film cinema' }, { e: '📚', n: 'books read study' }, { e: '✏️', n: 'pencil write edit' }, { e: '🗓️', n: 'calendar date schedule' }, { e: '⏰', n: 'alarm clock time' }, { e: '💰', n: 'money bag rich' }, { e: '🎁', n: 'gift present' },
]

export default function EmojiSearchPage() {
  const { locale, t } = useLocale()
  const ui = getToolUI(locale)
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState('')

  const filtered = query.trim() ? emojiData.filter(e => e.n.includes(query.toLowerCase())) : emojiData

  const copy = (emoji: string) => {
    navigator.clipboard.writeText(emoji)
    setCopied(emoji)
    setTimeout(() => setCopied(''), 1000)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">😀 Emoji {locale === 'zh' ? '搜索' : locale === 'ja' ? '検索' : locale === 'ko' ? '검색' : locale === 'es' ? 'Búsqueda' : 'Search'}</h1>
      <p className="text-gray-500 mb-8">{locale === 'zh' ? '搜索并一键复制Emoji表情' : 'Search and copy emojis with one click'}</p>

      <input value={query} onChange={e => setQuery(e.target.value)}
        placeholder={locale === 'zh' ? '搜索 emoji（英文关键词）...' : 'Search emoji...'}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-700 mb-6" />

      <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
        {filtered.map(e => (
          <button key={e.e} onClick={() => copy(e.e)} title={e.n}
            className={`text-3xl p-3 rounded-xl transition hover:bg-blue-50 hover:scale-110 ${copied === e.e ? 'bg-green-100 scale-110' : 'bg-white border border-gray-100'}`}>
            {e.e}
          </button>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center text-gray-400 mt-8">{locale === 'zh' ? '没有找到匹配的Emoji' : 'No emoji found'}</p>}
      {copied && <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm shadow-lg">✅ {copied} {locale === 'zh' ? '已复制' : 'Copied'}</div>}
    </main>
  )
}
