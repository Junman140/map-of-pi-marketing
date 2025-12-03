'use client'

import { useTranslations } from 'next-intl'
import { Clock, Rocket, Mail } from 'lucide-react'
import { Link } from '@/navigation'

export function ComingSoonContent() {
  const t = useTranslations('pages.comingSoon')

  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="text-primary" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-muted/30 border border-border rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="text-primary" size={24} />
            <h2 className="text-xl font-semibold text-foreground">
              {t('whatsNext.title')}
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">
            {t('whatsNext.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/zyrachains"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {t('whatsNext.telegramButton')}
              <Mail size={20} />
            </a>
            <Link
              href="/"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              {t('whatsNext.homeButton')}
            </Link>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>{t('footer')}</p>
        </div>
      </div>
    </div>
  )
}

