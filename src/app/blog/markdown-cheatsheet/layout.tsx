import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markdown语法速查表：5分钟掌握Markdown写作 | AI Tools博客',
  description: '最全Markdown语法速查表，涵盖标题、列表、链接、图片、代码块、表格等常用语法，附在线预览工具。',
  openGraph: { title: 'Markdown语法速查表：5分钟掌握Markdown写作', url: 'https://www.cyunyun.com/blog/markdown-cheatsheet', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/markdown-cheatsheet' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
