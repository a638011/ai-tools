import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hash加密算法详解：MD5、SHA-1、SHA-256有什么区别？ | AI Tools博客',
  description: '详解常见Hash算法的原理、区别、安全性对比，以及在密码存储、数据校验中的实际应用。',
  openGraph: { title: 'Hash加密算法详解：MD5 vs SHA-1 vs SHA-256', url: 'https://www.cyunyun.com/blog/hash-algorithm-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/hash-algorithm-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
