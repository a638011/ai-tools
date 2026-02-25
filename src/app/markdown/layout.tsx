import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markdown在线预览 - 左右分栏实时预览 | AI Tools',
  description: '免费在线Markdown预览工具，左右分栏实时预览，支持常用Markdown语法。',
  openGraph: {
    title: 'Markdown在线预览 - 左右分栏实时预览 | AI Tools',
    description: '免费在线Markdown预览工具，左右分栏实时预览，支持常用Markdown语法。',
    url: 'https://www.cyunyun.com/markdown',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/markdown' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
