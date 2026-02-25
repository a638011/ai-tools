import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '图片转PDF - 免费在线将图片合并为PDF | AI Tools',
  description: '免费在线图片转PDF工具，支持JPG/PNG，多张图片合并为一个PDF文件。',
  openGraph: {
    title: '图片转PDF - 免费在线将图片合并为PDF | AI Tools',
    description: '免费在线图片转PDF工具，支持JPG/PNG，多张图片合并为一个PDF文件。',
    url: 'https://www.cyunyun.com/image-to-pdf',
    siteName: 'AI Tools', type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/image-to-pdf' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
