import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQL格式化工具 - 在线SQL格式化/压缩 | AI Tools',
  description: '免费在线SQL格式化工具，SQL语句格式化、压缩、关键词自动大写。',
  openGraph: {
    title: 'SQL格式化工具 - 在线SQL格式化/压缩 | AI Tools',
    description: '免费在线SQL格式化工具，SQL语句格式化、压缩、关键词自动大写。',
    url: 'https://www.cyunyun.com/sql-formatter',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/sql-formatter' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
