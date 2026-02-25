import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '正则表达式入门教程：从零开始学Regex | AI Tools博客',
  description: '正则表达式基础语法、常用模式、实战示例。手把手教你掌握正则表达式，附在线测试工具。',
  openGraph: { title: '正则表达式入门教程：从零开始学Regex', url: 'https://www.cyunyun.com/blog/regex-tutorial', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/regex-tutorial' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
