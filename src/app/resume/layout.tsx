import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI简历生成器 - 3种风格一键生成专业简历 | AI Tools',
  description: '免费AI简历生成器，3种专业风格，填写基本信息即可一键生成求职简历。',
  openGraph: {
    title: 'AI简历生成器 - 3种风格一键生成专业简历 | AI Tools',
    description: '免费AI简历生成器，3种专业风格，填写基本信息即可一键生成求职简历。',
    url: 'https://www.cyunyun.com/resume',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/resume' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
