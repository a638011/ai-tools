import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '在线颜色转换器完全指南：HEX、RGB、HSL 一键互转 | AI Tools博客',
  description: '详细介绍在线颜色转换器的使用方法，包括HEX、RGB、HSL、CMYK格式互转，取色工具，调色板生成，适合前端开发和UI设计。',
  openGraph: {
    title: '在线颜色转换器完全指南',
    description: 'HEX、RGB、HSL 一键互转，设计师和前端开发者必备工具。',
    url: 'https://www.cyunyun.com/blog/color-converter-guide',
    siteName: 'AI Tools',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.cyunyun.com/blog/color-converter-guide',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}