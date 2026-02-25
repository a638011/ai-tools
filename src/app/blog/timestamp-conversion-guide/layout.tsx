import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Unix时间戳是什么？时间戳转换完全指南 | AI Tools博客',
  description: '详解Unix时间戳的概念、转换方法、各编程语言实现，附在线转换工具。',
  openGraph: { title: 'Unix时间戳转换完全指南', url: 'https://www.cyunyun.com/blog/timestamp-conversion-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/timestamp-conversion-guide' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
