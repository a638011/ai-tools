import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'URL编码是什么？为什么链接里有%20？ | AI Tools博客',
  description: '详解URL编码（百分号编码）的原理、为什么需要编码、常见编码字符对照表，附在线编解码工具。',
  openGraph: { title: 'URL编码是什么？为什么链接里有%20？', url: 'https://www.cyunyun.com/blog/url-encoding-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/url-encoding-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
