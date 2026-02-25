import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSS中px、rem、em、vw有什么区别？前端单位完全指南 | AI Tools博客',
  description: '详解CSS中px、rem、em、vw、vh等单位的区别和使用场景，附在线转换工具，前端开发必读。',
  openGraph: { title: 'CSS单位完全指南：px vs rem vs em vs vw', url: 'https://www.cyunyun.com/blog/css-units-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/css-units-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
