'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/navigation'
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return
    
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`
    
    let currentPath = pathname || '/'
    
    if (!currentPath.startsWith('/')) {
      currentPath = '/' + currentPath
    }

    let newPath: string
    if (newLocale === defaultLocale) {
      newPath = currentPath === '/' ? '/' : currentPath
    } else {
      newPath = currentPath === '/' ? `/${newLocale}` : `/${newLocale}${currentPath}`
    }
    
    window.location.href = newPath
  }

  if (!mounted) {
    return (
      <div className="w-[140px] h-9 flex items-center gap-2 px-3 py-2 border border-input rounded-md">
        <Globe className="h-4 w-4 mr-2" />
        <span className="text-sm">{localeNames[locale]}</span>
      </div>
    )
  }

  return (
    <Select value={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[140px]">
        <Globe className="h-4 w-4 mr-2" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {localeNames[loc]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

