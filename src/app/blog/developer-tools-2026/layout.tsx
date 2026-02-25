import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2026年程序员必备的10个在线开发工具 | AI Tools博客',
  description: '精选10个免费在线开发者工具：JSON格式化、Base64编解码、正则表达式测试、时间戳转换等，无需安装，打开即用，提升开发效率。',
  openGraph: { title: '2026年程序员必备的10个在线开发工具', description: '精选10个免费在线开发者工具，无需安装，打开即用。', url: 'https://www.cyunyun.com/blog/developer-tools-2026', siteName: 'AI Tools', type: 'article' },
  alternates: { canonical: 'https://www.cyunyun.com/blog/developer-tools-2026' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
