import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI周报生成器 - 5分钟搞定专业周报 | AI Tools',
  description: '免费AI周报生成器，输入工作内容自动生成专业周报，支持开发、产品、设计等多种角色。',
  openGraph: {
    title: 'AI周报生成器 - 5分钟搞定专业周报 | AI Tools',
    description: '免费AI周报生成器，输入工作内容自动生成专业周报，支持开发、产品、设计等多种角色。',
    url: 'https://www.cyunyun.com/weekly-report',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/weekly-report' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
