import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDF文件处理完全指南：合并、压缩、转换一站搞定 | AI Tools博客',
  description: '详解PDF文件处理的常见需求和解决方案，包括合并、压缩、图片转PDF等，附免费在线工具。',
  openGraph: { title: 'PDF文件处理完全指南', url: 'https://www.cyunyun.com/blog/pdf-tools-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/pdf-tools-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
