import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '如何生成安全的密码？2026密码安全指南 | AI Tools博客',
  description: '密码安全完全指南：为什么你的密码不安全？如何生成强密码？密码管理最佳实践。附免费在线密码生成器。',
  openGraph: { title: '如何生成安全的密码？2026密码安全指南', description: '密码安全完全指南，附免费在线密码生成器。', url: 'https://www.cyunyun.com/blog/password-security-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/password-security-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
