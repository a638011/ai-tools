import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '密码生成器 - 安全随机密码在线生成 | AI Tools',
  description: '免费在线密码生成器，支持自定义长度和字符类型，生成安全随机密码。',
  openGraph: {
    title: '密码生成器 - 安全随机密码在线生成 | AI Tools',
    description: '免费在线密码生成器，支持自定义长度和字符类型，生成安全随机密码。',
    url: 'https://www.cyunyun.com/password-gen',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/password-gen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
