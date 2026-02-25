import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSS渐变生成器 - 在线可视化生成渐变代码 | AI Tools',
  description: '免费在线CSS渐变生成器，支持线性和径向渐变，可视化调色，一键复制代码。',
  openGraph: {
    title: 'CSS渐变生成器 - 在线可视化生成渐变代码 | AI Tools',
    description: '免费在线CSS渐变生成器，支持线性和径向渐变，可视化调色，一键复制代码。',
    url: 'https://www.cyunyun.com/gradient',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/gradient' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
