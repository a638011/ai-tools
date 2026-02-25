import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '字符串格式转换 - camelCase/snake_case在线互转 | AI Tools',
  description: '免费在线字符串格式转换，camelCase、snake_case、kebab-case、PascalCase一键互转。',
  openGraph: {
    title: '字符串格式转换 - camelCase/snake_case在线互转 | AI Tools',
    description: '免费在线字符串格式转换，camelCase、snake_case、kebab-case、PascalCase一键互转。',
    url: 'https://www.cyunyun.com/string-case',
    siteName: 'AI Tools',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cyunyun.com/string-case' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
