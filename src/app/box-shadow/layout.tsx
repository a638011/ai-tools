import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Box Shadow生成器 - CSS阴影在线可视化生成 | AI Tools',
  description: '免费在线CSS Box Shadow生成器，可视化调节阴影参数，实时预览，一键复制。',
  openGraph: {
    title: 'Box Shadow生成器 - CSS阴影在线可视化生成 | AI Tools',
    description: '免费在线CSS Box Shadow生成器，可视化调节阴影参数，实时预览，一键复制。',
    url: 'https://www.cyunyun.com/box-shadow',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/box-shadow' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
