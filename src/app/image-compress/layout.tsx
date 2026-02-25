import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '图片压缩工具 - 在线免费压缩图片 | AI Tools',
  description: '免费在线图片压缩工具，支持JPG/PNG/WebP，自定义压缩质量，本地处理不上传。',
  openGraph: {
    title: '图片压缩工具 - 在线免费压缩图片 | AI Tools',
    description: '免费在线图片压缩工具，支持JPG/PNG/WebP，自定义压缩质量，本地处理不上传。',
    url: 'https://www.cyunyun.com/image-compress',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/image-compress' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
