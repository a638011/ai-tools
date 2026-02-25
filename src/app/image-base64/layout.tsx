import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '图片Base64转换 - 图片与Base64编码互转 | AI Tools',
  description: '免费在线图片Base64转换工具，支持PNG/JPG/GIF/SVG/WebP与Base64互转。',
  openGraph: {
    title: '图片Base64转换 - 图片与Base64编码互转 | AI Tools',
    description: '免费在线图片Base64转换工具，支持PNG/JPG/GIF/SVG/WebP与Base64互转。',
    url: 'https://www.cyunyun.com/image-base64',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/image-base64' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
