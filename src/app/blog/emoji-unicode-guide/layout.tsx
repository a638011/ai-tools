import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Emoji背后的技术：Unicode编码与Emoji发展史 | AI Tools博客',
  description: '详解Emoji的Unicode编码原理、发展历史、跨平台差异，以及在开发中使用Emoji的注意事项。',
  openGraph: { title: 'Emoji背后的技术：Unicode与发展史', url: 'https://www.cyunyun.com/blog/emoji-unicode-guide', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/emoji-unicode-guide' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
