import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI文案生成器 - 一键生成小红书/淘宝/抖音爆款文案 | AI Tools',
  description: '免费AI文案生成器，支持小红书、淘宝、抖音、微博、公众号5大平台，5种文案风格，一键生成爆款文案。无需注册，即用即走。',
  keywords: 'AI文案生成器,小红书文案,淘宝文案,抖音文案,爆款文案生成,免费文案工具',
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
