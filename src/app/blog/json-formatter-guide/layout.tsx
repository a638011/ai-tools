import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '在线JSON格式化工具使用指南：格式化、压缩、校验 | AI Tools博客',
  description: '详细介绍JSON格式化工具的使用方法，包括JSON格式化、压缩、校验、常见错误排查，程序员必备技能。',
  openGraph: { title: '在线JSON格式化工具使用指南', description: 'JSON格式化、压缩、校验完全指南。', url: 'https://www.cyunyun.com/blog/json-formatter-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/json-formatter-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
