import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emoji搜索 - 在线搜索复制Emoji表情 | AI Tools',
  description: '免费在线Emoji搜索工具，按关键词搜索Emoji表情，一键复制使用。',
  openGraph: {
    title: 'Emoji搜索 - 在线搜索复制Emoji表情 | AI Tools',
    description: '免费在线Emoji搜索工具，按关键词搜索Emoji表情，一键复制使用。',
    url: 'https://www.cyunyun.com/emoji',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/emoji' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
