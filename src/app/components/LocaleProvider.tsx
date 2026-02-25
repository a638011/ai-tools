'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, locales, localeNames, localeFlags } from '@/i18n/config'
import { getTranslations, Translations } from '@/i18n/translations'
import Link from 'next/link'

const LocaleContext = createContext<{ locale: Locale; t: Translations; setLocale: (l: Locale) => void }>({
  locale: 'zh',
  t: getTranslations('zh'),
  setLocale: () => {},
})

export function useLocale() { return useContext(LocaleContext) }

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh')

  useEffect(() => {
    const saved = document.cookie.match(/locale=(\w+)/)?.[1] as Locale
    if (saved && locales.includes(saved)) setLocaleState(saved)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    document.cookie = `locale=${l};path=/;max-age=31536000`
  }

  return (
    <LocaleContext.Provider value={{ locale, t: getTranslations(locale), setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function LangSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale()
  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {locales.map(l => (
        <button key={l} onClick={() => setLocale(l)}
          className={`px-2 py-1 rounded-lg text-xs transition ${l === locale ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}>
          {localeFlags[l]} <span className="hidden sm:inline">{localeNames[l]}</span>
        </button>
      ))}
    </div>
  )
}

export function ToolPageWrapper({ children }: { children: ReactNode }) {
  const { t } = useLocale()
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-blue-500 hover:underline">{t.common.back}</Link>
        <LangSwitcher />
      </div>
      {children}
    </main>
  )
}
