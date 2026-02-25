import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSS颜色格式详解：HEX、RGB、HSL怎么选？ | AI Tools博客',
  description: '详解CSS颜色格式HEX、RGB、HSL的区别、转换方法和使用场景，附在线颜色转换工具。',
  openGraph: { title: 'CSS颜色格式详解：HEX vs RGB vs HSL', url: 'https://www.cyunyun.com/blog/css-color-formats', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/css-color-formats' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
