import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'zh-CN', 'hi', 'ja', 'ko', 'vi', 'mr', 'th', 'id', 'bn', 'tl'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '中文',
  hi: 'हिन्दी',
  ja: '日本語',
  ko: '한국어',
  vi: 'Tiếng Việt',
  mr: 'मराठी',
  th: 'ไทย',
  id: 'Bahasa Indonesia',
  bn: 'বাংলা',
  tl: 'Tagalog',
}

export default getRequestConfig(async ({ locale }) => {
  // Validate locale and fallback to default if invalid
  // The locale comes from the middleware based on the URL path
  const validLocale = (locale && locales.includes(locale as Locale))
    ? (locale as string)
    : defaultLocale

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
    onError(error) {
      if (error.code === 'MISSING_MESSAGE') {
        // Missing translations are expected and should be ignored
        console.warn(error.message)
      } else {
        // Other errors indicate a bug in the app and should be reported
        console.error(error)
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join('.')
      return path
    }
  }
})

