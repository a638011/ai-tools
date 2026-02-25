import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '文本对比工具 - 在线文本差异对比 | AI Tools',
  description: '免费在线文本对比工具，逐行对比两段文本差异，新增和删除高亮显示。',
  openGraph: {
    title: '文本对比工具 - 在线文本差异对比 | AI Tools',
    description: '免费在线文本对比工具，逐行对比两段文本差异，新增和删除高亮显示。',
    url: 'https://www.cyunyun.com/text-diff',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/text-diff' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
