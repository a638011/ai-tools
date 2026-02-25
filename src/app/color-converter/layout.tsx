import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '颜色转换器 - HEX/RGB/HSL在线转换 | AI Tools',
  description: '免费在线颜色转换器，HEX、RGB、HSL颜色值一键互转，实时预览。',
  openGraph: {
    title: '颜色转换器 - HEX/RGB/HSL在线转换 | AI Tools',
    description: '免费在线颜色转换器，HEX、RGB、HSL颜色值一键互转，实时预览。',
    url: 'https://www.cyunyun.com/color-converter',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/color-converter' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
