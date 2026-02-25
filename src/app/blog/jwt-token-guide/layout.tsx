import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JWT Token详解：原理、结构与安全实践 | AI Tools博客',
  description: '详解JWT的工作原理、三段式结构、签名验证机制，以及在前后端分离项目中的安全实践。',
  openGraph: { title: 'JWT Token详解：原理、结构与安全实践', url: 'https://www.cyunyun.com/blog/jwt-token-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/jwt-token-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
