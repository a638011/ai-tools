import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markdown转HTML - 在线Markdown转HTML代码 | AI Tools',
  description: '免费在线Markdown转HTML工具，实时转换Markdown为HTML代码，支持渲染预览。',
  openGraph: {
    title: 'Markdown转HTML - 在线Markdown转HTML代码 | AI Tools',
    description: '免费在线Markdown转HTML工具，实时转换Markdown为HTML代码，支持渲染预览。',
    url: 'https://www.cyunyun.com/md-to-html',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/md-to-html' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
