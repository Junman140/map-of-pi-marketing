import { defaultLocale, type Locale } from '@/i18n'

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  if (locale === defaultLocale) {
    return `/${cleanPath}`
  }
  
  return `/${locale}/${cleanPath}`
}

export function getLocalizedHome(locale: Locale): string {
  if (locale === defaultLocale) {
    return '/'
  }
  return `/${locale}`
}




