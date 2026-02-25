import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTML实体编解码 - HTML特殊字符在线转换 | AI Tools',
  description: '免费在线HTML实体编解码工具，HTML特殊字符编码解码，防止XSS注入。',
  openGraph: {
    title: 'HTML实体编解码 - HTML特殊字符在线转换 | AI Tools',
    description: '免费在线HTML实体编解码工具，HTML特殊字符编码解码，防止XSS注入。',
    url: 'https://www.cyunyun.com/html-entity',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/html-entity' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
