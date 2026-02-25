import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lorem Ipsum生成器 - 设计排版占位文本 | AI Tools',
  description: '免费在线Lorem Ipsum生成器，生成设计排版用占位文本，支持段落/句子/单词。',
  openGraph: {
    title: 'Lorem Ipsum生成器 - 设计排版占位文本 | AI Tools',
    description: '免费在线Lorem Ipsum生成器，生成设计排版用占位文本，支持段落/句子/单词。',
    url: 'https://www.cyunyun.com/lorem',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/lorem' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
