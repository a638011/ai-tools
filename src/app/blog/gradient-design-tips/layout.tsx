import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'CSS渐变设计技巧：打造专业级渐变背景 | AI Tools博客',
  description: '实用CSS渐变设计技巧，包括配色原则、常见渐变模式、性能优化，附在线渐变生成器。',
  openGraph: { title: 'CSS渐变设计技巧', url: 'https://www.cyunyun.com/blog/gradient-design-tips', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/gradient-design-tips' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
