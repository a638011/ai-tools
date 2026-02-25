import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON格式化工具 - 在线JSON格式化/压缩/校验 | AI Tools',
  description: '免费在线JSON格式化工具，支持JSON格式化、压缩、校验，程序员必备。',
  openGraph: {
    title: 'JSON格式化工具 - 在线JSON格式化/压缩/校验 | AI Tools',
    description: '免费在线JSON格式化工具，支持JSON格式化、压缩、校验，程序员必备。',
    url: 'https://www.cyunyun.com/json-formatter',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/json-formatter' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
