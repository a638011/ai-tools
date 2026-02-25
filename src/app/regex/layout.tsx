import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '正则表达式测试 - 在线Regex测试工具 | AI Tools',
  description: '免费在线正则表达式测试工具，实时匹配高亮显示，内置常用正则表达式模板。',
  openGraph: {
    title: '正则表达式测试 - 在线Regex测试工具 | AI Tools',
    description: '免费在线正则表达式测试工具，实时匹配高亮显示，内置常用正则表达式模板。',
    url: 'https://www.cyunyun.com/regex',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/regex' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
