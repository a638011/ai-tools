import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Border Radius生成器 - CSS圆角在线可视化生成 | AI Tools',
  description: '免费在线CSS Border Radius生成器，可视化调节四角圆角，预设样式，一键复制代码。',
  openGraph: {
    title: 'Border Radius生成器 - CSS圆角在线可视化生成 | AI Tools',
    description: '免费在线CSS Border Radius生成器，可视化调节四角圆角，预设样式，一键复制代码。',
    url: 'https://www.cyunyun.com/border-radius',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/border-radius' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
