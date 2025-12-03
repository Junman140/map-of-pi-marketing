'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Copy, Check } from 'lucide-react'
import { Link } from '@/navigation'

export function SupportContent() {
  const t = useTranslations('pages.support')
  const [copied, setCopied] = useState(false)
  const walletAddress = t('walletAddress')

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t('title')}
          </h1>
          <p className="text-xl text-foreground/70 text-balance">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Why We Need Support */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t('whySupport.title')}
          </h2>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>{t('whySupport.intro')}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {t.raw('whySupport.items').map((item: any, idx: number) => (
                <div key={idx} className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="pt-4">{t('whySupport.conclusion')}</p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('donation.title')}
          </h2>

          <div className="bg-background border-2 border-primary/20 rounded-lg p-8 md:p-12">
            <div className="mb-8">
              <p className="text-sm text-foreground/60 mb-2">{t('donation.label')}</p>
              <div className="bg-foreground/5 rounded-lg p-4 border border-foreground/10">
                <p className="text-xs text-foreground/50 mb-3">
                  {t('donation.walletLabel')}
                </p>
                <div className="flex items-center gap-3">
                  <code className="flex-1 text-sm md:text-base font-mono text-foreground break-all">
                    {walletAddress}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                    title={t('donation.copy')}
                  >
                    {copied ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <Copy size={20} className="text-primary" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-amber-900">
                <strong>{t('donation.warning.title')}</strong>{' '}
                {t('donation.warning.text')}
              </p>
            </div>

            <div className="space-y-3 text-sm text-foreground/70">
              <p>
                <strong>{t('donation.howTo.title')}</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                {t.raw('donation.howTo.steps').map((step: string, idx: number) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">{t('donation.thankYou.title')}</h3>
            <p className="text-foreground/70 mb-4">{t('donation.thankYou.message')}</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              {t('donation.thankYou.contactLink')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

