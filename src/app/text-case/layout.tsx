import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '文本大小写转换 - 大写/小写/首字母大写在线转换 | AI Tools',
  description: '免费在线文本大小写转换工具，大写、小写、首字母大写、句首大写一键转换。',
  openGraph: {
    title: '文本大小写转换 - 大写/小写/首字母大写在线转换 | AI Tools',
    description: '免费在线文本大小写转换工具，大写、小写、首字母大写、句首大写一键转换。',
    url: 'https://www.cyunyun.com/text-case',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/text-case' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
