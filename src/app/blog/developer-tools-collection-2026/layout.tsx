import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2026年程序员必备在线工具合集：40+免费开发者工具 | AI Tools博客',
  description: '精选40+免费在线开发者工具，涵盖JSON格式化、Base64编解码、正则测试、PDF处理等，程序员日常必备。',
  openGraph: { title: '2026年程序员必备在线工具合集', url: 'https://www.cyunyun.com/blog/developer-tools-collection-2026', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/developer-tools-collection-2026' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
