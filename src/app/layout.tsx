import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Tools - 免费AI工具集 | 文案生成、简历制作、起名助手',
  description: '免费在线AI工具平台：AI文案生成器、周报生成器、简历生成器、起名生成器、朋友圈文案、邮件助手。无需注册，即用即走。',
  keywords: 'AI工具,AI文案生成器,AI简历生成器,AI起名,AI周报生成器,朋友圈文案生成器,AI邮件助手,免费AI工具',
  openGraph: {
    title: 'AI Tools - 免费AI工具集',
    description: '一站式免费AI工具平台，文案生成、简历制作、智能起名、邮件助手等16大工具，无需注册即用即走。',
    url: 'https://www.ai-starlight.cc',
    siteName: 'AI Tools',
    type: 'website',
    locale: 'zh_CN',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.ai-starlight.cc' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 min-h-screen antialiased">{children}</body>
    </html>
  )
}
