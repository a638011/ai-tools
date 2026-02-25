import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '什么是UUID？UUID v4生成原理与使用场景 | AI Tools博客',
  description: '详解UUID的概念、版本区别、v4生成原理，以及在数据库主键、分布式系统中的实际应用场景。',
  openGraph: { title: '什么是UUID？生成原理与使用场景', url: 'https://www.cyunyun.com/blog/uuid-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/uuid-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
