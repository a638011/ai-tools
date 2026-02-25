import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'URL编解码 - 在线URL编码解码工具 | AI Tools',
  description: '免费在线URL编解码工具，一键URL编码和解码，支持中文和特殊字符。',
  openGraph: {
    title: 'URL编解码 - 在线URL编码解码工具 | AI Tools',
    description: '免费在线URL编解码工具，一键URL编码和解码，支持中文和特殊字符。',
    url: 'https://www.cyunyun.com/url-encode',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/url-encode' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
