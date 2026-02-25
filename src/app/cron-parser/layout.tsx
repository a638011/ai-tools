import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cron表达式解析器 - 在线Cron定时任务解析 | AI Tools',
  description: '免费在线Cron表达式解析器，解析Cron定时任务表达式，内置常用模板。',
  openGraph: {
    title: 'Cron表达式解析器 - 在线Cron定时任务解析 | AI Tools',
    description: '免费在线Cron表达式解析器，解析Cron定时任务表达式，内置常用模板。',
    url: 'https://www.cyunyun.com/cron-parser',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/cron-parser' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
