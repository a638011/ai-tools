import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '在线字数统计 - 中英文字数字符数实时统计 | AI Tools',
  description: '免费在线字数统计工具，实时统计中英文字数、字符数、单词数、行数。',
  openGraph: {
    title: '在线字数统计 - 中英文字数字符数实时统计 | AI Tools',
    description: '免费在线字数统计工具，实时统计中英文字数、字符数、单词数、行数。',
    url: 'https://www.cyunyun.com/word-count',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/word-count' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
