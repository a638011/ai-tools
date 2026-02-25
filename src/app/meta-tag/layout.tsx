import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meta标签生成器 - SEO友好的HTML meta标签生成 | AI Tools',
  description: '免费在线Meta标签生成器，生成SEO友好的HTML meta标签，含Open Graph和Twitter Card。',
  openGraph: {
    title: 'Meta标签生成器 - SEO友好的HTML meta标签生成 | AI Tools',
    description: '免费在线Meta标签生成器，生成SEO友好的HTML meta标签，含Open Graph和Twitter Card。',
    url: 'https://www.cyunyun.com/meta-tag',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/meta-tag' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
