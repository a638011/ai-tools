import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IP地址查询 - 在线IP地理位置/ISP查询 | AI Tools',
  description: '免费在线IP地址查询工具，查询IP地理位置、ISP、时区等详细信息。',
  openGraph: {
    title: 'IP地址查询 - 在线IP地理位置/ISP查询 | AI Tools',
    description: '免费在线IP地址查询工具，查询IP地理位置、ISP、时区等详细信息。',
    url: 'https://www.cyunyun.com/ip-lookup',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/ip-lookup' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
