import { NextRequest, NextResponse } from 'next/server'
import { locales, type Locale } from '@/i18n'

export async function POST(request: NextRequest) {
  const { locale } = await request.json()
  
  if (!locale || !locales.includes(locale as Locale)) {
    return NextResponse.json(
      { error: 'Invalid locale' },
      { status: 400 }
    )
  }
  
  const response = NextResponse.json({ success: true, locale })
  
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    httpOnly: false,
  })
  
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    httpOnly: false,
  })
  
  return response
}

