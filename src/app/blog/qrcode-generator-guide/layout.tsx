import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '二维码生成器使用指南：如何免费生成QR Code | AI Tools博客',
  description: '免费在线二维码生成器使用教程，支持网址、文本、WiFi信息等内容生成QR Code，自定义尺寸，一键下载。',
  openGraph: { title: '二维码生成器使用指南', url: 'https://www.cyunyun.com/blog/qrcode-generator-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/qrcode-generator-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
