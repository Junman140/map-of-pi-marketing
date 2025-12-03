'use client'

import { Link } from "@/navigation"
import { useTranslations } from "next-intl"

export function CTA() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('cta.title')}</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://mapofpi.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">
            {t('cta.launchApp')}
          </a>
          <Link href="/contact" className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center">
            {t('cta.contactSales')}
          </Link>
        </div>
      </div>
    </section>
  )
}
