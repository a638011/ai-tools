import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON↔CSV转换器 - JSON数组与CSV在线互转 | AI Tools',
  description: '免费在线JSON与CSV互转工具，支持JSON数组转CSV表格、CSV转JSON。',
  openGraph: {
    title: 'JSON↔CSV转换器 - JSON数组与CSV在线互转 | AI Tools',
    description: '免费在线JSON与CSV互转工具，支持JSON数组转CSV表格、CSV转JSON。',
    url: 'https://www.cyunyun.com/json-csv',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/json-csv' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
