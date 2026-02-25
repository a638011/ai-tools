import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base64编解码 - 在线Base64编码解码工具 | AI Tools',
  description: '免费在线Base64编解码工具，支持中文文本的Base64编码和解码转换。',
  openGraph: {
    title: 'Base64编解码 - 在线Base64编码解码工具 | AI Tools',
    description: '免费在线Base64编解码工具，支持中文文本的Base64编码和解码转换。',
    url: 'https://www.cyunyun.com/base64',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/base64' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
