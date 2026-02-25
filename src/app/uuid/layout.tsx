import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UUID生成器 - 在线批量生成UUID v4 | AI Tools',
  description: '免费在线UUID生成器，支持批量生成UUID v4，可选大写、去横线格式。',
  openGraph: {
    title: 'UUID生成器 - 在线批量生成UUID v4 | AI Tools',
    description: '免费在线UUID生成器，支持批量生成UUID v4，可选大写、去横线格式。',
    url: 'https://www.cyunyun.com/uuid',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/uuid' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
