import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSS单位转换器 - px/rem/em/vw在线互转 | AI Tools',
  description: '免费在线CSS单位转换器，px/rem/em/vw/vh/pt/%一键互转，前端开发必备。',
  openGraph: {
    title: 'CSS单位转换器 - px/rem/em/vw在线互转 | AI Tools',
    description: '免费在线CSS单位转换器，px/rem/em/vw/vh/pt/%一键互转，前端开发必备。',
    url: 'https://www.cyunyun.com/css-units',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/css-units' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
