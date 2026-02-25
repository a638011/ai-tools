import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JWT解码器 - 在线解析JWT Token | AI Tools',
  description: '免费在线JWT解码器，解析JWT Token的Header和Payload，检查过期时间。',
  openGraph: {
    title: 'JWT解码器 - 在线解析JWT Token | AI Tools',
    description: '免费在线JWT解码器，解析JWT Token的Header和Payload，检查过期时间。',
    url: 'https://www.cyunyun.com/jwt-decoder',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/jwt-decoder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
