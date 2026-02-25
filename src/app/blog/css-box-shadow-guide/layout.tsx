import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSS Box Shadow完全指南：从基础到高级阴影效果 | AI Tools博客',
  description: '详解CSS box-shadow属性的语法、参数、多层阴影、常用效果，附在线可视化生成器。',
  openGraph: { title: 'CSS Box Shadow完全指南', url: 'https://www.cyunyun.com/blog/css-box-shadow-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/css-box-shadow-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
