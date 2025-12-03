'use client'

import { locales, defaultLocale, type Locale } from '@/i18n'


export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const browserLang = navigator.language || (navigator as any).userLanguage || defaultLocale
  
  if (locales.includes(browserLang as Locale)) {
    return browserLang as Locale
  }

  const langCode = browserLang.split('-')[0]
  const matchedLocale = locales.find((locale) => locale.startsWith(langCode))
  if (matchedLocale) {
    return matchedLocale
  }

  return defaultLocale
}

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = localStorage.getItem('locale')
    if (stored && locales.includes(stored as Locale)) {
      return stored as Locale
    }
  } catch (error) {
    console.warn('Failed to read locale from localStorage:', error)
  }

  return null
}

export function storeLocale(locale: Locale): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    localStorage.setItem('locale', locale)
  } catch (error) {
    console.warn('Failed to store locale in localStorage:', error)
  }
}

/**
 */
export function detectUserLocale(): Locale {
  const stored = getStoredLocale()
  if (stored) {
    return stored
  }

  return detectBrowserLocale()
}

/**
 */
export async function detectLocaleFromGeolocation(): Promise<Locale | null> {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    const countryCode = data.country_code?.toLowerCase()

    const countryToLocale: Record<string, Locale> = {
      'cn': 'zh-CN',
      'tw': 'zh-CN',
      'hk': 'zh-CN',
      'in': 'hi',
      'jp': 'ja',
      'kr': 'ko',
      'vn': 'vi',
      'th': 'th',
      'id': 'id',
      'bd': 'bn',
      'ph': 'tl',
    }

    if (countryCode && countryToLocale[countryCode]) {
      return countryToLocale[countryCode]
    }
  } catch (error) {
    console.warn('Failed to detect locale from geolocation:', error)
  }

  return null
}

