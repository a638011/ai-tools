import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '如何查询IP地址的地理位置？IP定位原理详解 | AI Tools博客',
  description: 'IP地址定位原理、精度分析、隐私保护。教你查询任意IP的地理位置、ISP、时区等信息。',
  openGraph: { title: '如何查询IP地址的地理位置？', url: 'https://www.cyunyun.com/blog/ip-geolocation-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/ip-geolocation-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
