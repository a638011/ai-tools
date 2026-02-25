import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '进制转换器 - 十/十六/二/八进制在线互转 | AI Tools',
  description: '免费在线进制转换器，十进制、十六进制、二进制、八进制一键互转。',
  openGraph: {
    title: '进制转换器 - 十/十六/二/八进制在线互转 | AI Tools',
    description: '免费在线进制转换器，十进制、十六进制、二进制、八进制一键互转。',
    url: 'https://www.cyunyun.com/number-base',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/number-base' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
