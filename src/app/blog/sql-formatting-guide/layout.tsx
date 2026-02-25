import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQL格式化最佳实践：写出可读性强的SQL语句 | AI Tools博客',
  description: 'SQL代码规范、格式化技巧、命名约定。教你写出团队都能看懂的SQL，附在线格式化工具。',
  openGraph: { title: 'SQL格式化最佳实践', url: 'https://www.cyunyun.com/blog/sql-formatting-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/sql-formatting-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
