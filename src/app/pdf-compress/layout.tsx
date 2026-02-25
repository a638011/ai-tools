import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDF压缩工具 - 免费在线压缩PDF文件 | AI Tools',
  description: '免费在线PDF压缩工具，减小PDF文件体积，浏览器本地处理不上传服务器。',
  openGraph: {
    title: 'PDF压缩工具 - 免费在线压缩PDF文件 | AI Tools',
    description: '免费在线PDF压缩工具，减小PDF文件体积，浏览器本地处理不上传服务器。',
    url: 'https://www.cyunyun.com/pdf-compress',
    siteName: 'AI Tools', type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/pdf-compress' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
