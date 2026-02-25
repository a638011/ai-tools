import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDF合并工具 - 免费在线合并多个PDF文件 | AI Tools',
  description: '免费在线PDF合并工具，将多个PDF文件按顺序合并为一个，浏览器本地处理不上传。',
  openGraph: {
    title: 'PDF合并工具 - 免费在线合并多个PDF文件 | AI Tools',
    description: '免费在线PDF合并工具，将多个PDF文件按顺序合并为一个，浏览器本地处理不上传。',
    url: 'https://www.cyunyun.com/pdf-merge',
    siteName: 'AI Tools', type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/pdf-merge' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
