import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI起名生成器 - 宝宝/品牌/公司智能起名 | AI Tools',
  description: '免费AI起名生成器，支持宝宝起名、品牌命名、公司起名，智能推荐有寓意的好名字。',
  openGraph: {
    title: 'AI起名生成器 - 宝宝/品牌/公司智能起名 | AI Tools',
    description: '免费AI起名生成器，支持宝宝起名、品牌命名、公司起名，智能推荐有寓意的好名字。',
    url: 'https://www.cyunyun.com/name-gen',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/name-gen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
