import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '如何压缩图片不损失画质？图片压缩完全指南 | AI Tools博客',
  description: '图片压缩原理、最佳实践、各格式对比。教你在保持画质的前提下大幅减小图片体积，提升网页加载速度。',
  openGraph: { title: '如何压缩图片不损失画质？', url: 'https://www.cyunyun.com/blog/image-compress-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/image-compress-guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
