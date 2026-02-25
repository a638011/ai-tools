import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '时间戳转换 - Unix时间戳在线转换工具 | AI Tools',
  description: '免费在线时间戳转换工具，Unix时间戳与日期时间互转，支持秒级和毫秒级。',
  openGraph: {
    title: '时间戳转换 - Unix时间戳在线转换工具 | AI Tools',
    description: '免费在线时间戳转换工具，Unix时间戳与日期时间互转，支持秒级和毫秒级。',
    url: 'https://www.cyunyun.com/timestamp',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/timestamp' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
