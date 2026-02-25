import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI邮件助手 - 商务/求职邮件快速生成 | AI Tools',
  description: '免费AI邮件助手，支持商务合作、求职应聘、感谢致谢等类型，快速生成专业邮件。',
  openGraph: {
    title: 'AI邮件助手 - 商务/求职邮件快速生成 | AI Tools',
    description: '免费AI邮件助手，支持商务合作、求职应聘、感谢致谢等类型，快速生成专业邮件。',
    url: 'https://www.cyunyun.com/email',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/email' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
