import { locales, Locale } from '@/i18n/config'
import HomePage from '../components/HomePage'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'zh'
  return <HomePage locale={validLocale} />
}
