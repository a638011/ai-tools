import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI文案生成器 - 小红书/抖音/淘宝爆款文案一键生成 | AI Tools',
  description: '免费AI文案生成器，支持小红书、抖音、淘宝等平台，一键生成爆款种草文案、故事分享、教程干货。',
  openGraph: {
    title: 'AI文案生成器 - 小红书/抖音/淘宝爆款文案一键生成 | AI Tools',
    description: '免费AI文案生成器，支持小红书、抖音、淘宝等平台，一键生成爆款种草文案、故事分享、教程干货。',
    url: 'https://www.cyunyun.com/copywriter',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/copywriter' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
