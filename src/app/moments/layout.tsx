import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI朋友圈文案生成器 - 高级感文案告别词穷 | AI Tools',
  description: '免费AI朋友圈文案生成器，旅行、美食、自拍等场景，一键生成高级感文案。',
  openGraph: {
    title: 'AI朋友圈文案生成器 - 高级感文案告别词穷 | AI Tools',
    description: '免费AI朋友圈文案生成器，旅行、美食、自拍等场景，一键生成高级感文案。',
    url: 'https://www.cyunyun.com/moments',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/moments' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
