import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hash哈希生成器 - SHA-256/SHA-512在线计算 | AI Tools',
  description: '免费在线Hash哈希生成器，支持SHA-1、SHA-256、SHA-384、SHA-512算法。',
  openGraph: {
    title: 'Hash哈希生成器 - SHA-256/SHA-512在线计算 | AI Tools',
    description: '免费在线Hash哈希生成器，支持SHA-1、SHA-256、SHA-384、SHA-512算法。',
    url: 'https://www.cyunyun.com/hash',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/hash' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
