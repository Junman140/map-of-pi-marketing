import type React from "react"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import type { Metadata } from "next"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Map of Pi - Pi Network Marketplace",
    description:
      "More than just a map—It's the future of Pi eCommerce. Connect with merchants worldwide, buy and sell using Pi cryptocurrency on the Pi Network marketplace.",
    generator: "MAP OF PI TEAM",
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
        { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
      ],
    },
    manifest: "/site.webmanifest",
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}`])
      ),
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Explicitly pass the locale to getMessages
  const messages = await getMessages({ locale })

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

