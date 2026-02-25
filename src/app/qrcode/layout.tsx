import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '二维码生成器 - 在线QR Code生成工具 | AI Tools',
  description: '免费在线二维码生成器，输入网址或文本即可生成QR Code，支持自定义尺寸。',
  openGraph: {
    title: '二维码生成器 - 在线QR Code生成工具 | AI Tools',
    description: '免费在线二维码生成器，输入网址或文本即可生成QR Code，支持自定义尺寸。',
    url: 'https://www.cyunyun.com/qrcode',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/qrcode' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
