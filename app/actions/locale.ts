'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { locales, type Locale } from '@/i18n'

export async function switchLocale(newLocale: string, currentPath: string) {
  if (!newLocale || !locales.includes(newLocale as Locale)) {
    return { error: 'Invalid locale' }
  }

  const cookieStore = await cookies()
  cookieStore.set('NEXT_LOCALE', newLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    httpOnly: false,
  })

  const pathSegments = currentPath.split('/').filter(Boolean)
  if (pathSegments.length > 0 && locales.includes(pathSegments[0] as Locale)) {
    pathSegments.shift()
  }
  const pathWithoutLocale = '/' + pathSegments.join('/')
  const targetPath = pathWithoutLocale === '/' ? '/' : pathWithoutLocale

  redirect(`/${newLocale}${targetPath}`)
}

