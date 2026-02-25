import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base64编码是什么？原理、用途与在线工具 | AI Tools博客',
  description: '详解Base64编码原理、为什么需要Base64、常见使用场景，附在线编解码工具。',
  openGraph: { title: 'Base64编码是什么？原理与用途', url: 'https://www.cyunyun.com/blog/base64-encoding-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/base64-encoding-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
