import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cron表达式详解：Linux定时任务完全指南 | AI Tools博客',
  description: '详解Cron表达式语法、常用示例、在线解析工具。从入门到精通Linux定时任务配置。',
  openGraph: { title: 'Cron表达式详解：Linux定时任务完全指南', url: 'https://www.cyunyun.com/blog/cron-expression-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/cron-expression-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
