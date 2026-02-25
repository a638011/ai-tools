import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'SEO Meta标签完全指南：让搜索引擎爱上你的网站 | AI Tools博客',
  description: '详解HTML meta标签对SEO的影响，包括title、description、Open Graph、Twitter Card的最佳实践。',
  openGraph: { title: 'SEO Meta标签完全指南', url: 'https://www.cyunyun.com/blog/seo-meta-tags-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/seo-meta-tags-guide' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
