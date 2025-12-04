'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Check } from 'lucide-react'

export function MembershipContent() {
  const t = useTranslations('pages.membership')

  const membershipTiers = t.raw('tiers')

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Membership Chart Image */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="/assets/elements/map-of-pi-membership-chart-design.png"
              alt="Map of Pi Membership Chart"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Membership Tiers Details */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('tiersTitle')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipTiers.map((tier: any, index: number) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  tier.popular
                    ? 'bg-primary/10 border-primary scale-105'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                {tier.popular && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                      {t('popular')}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {tier.price === '-' ? t('free') : `${tier.price} π`}
                  </div>
                  {tier.priceNote && (
                    <p className="text-sm text-muted-foreground">{tier.priceNote}</p>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t('mappiAllowance')}</div>
                    <div className="text-lg font-semibold text-foreground">
                      {tier.mappiAllowance === '-' ? t('notApplicable') : tier.mappiAllowance}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t('duration')}</div>
                    <div className="text-lg font-semibold text-foreground">
                      {tier.duration === '-' ? t('notApplicable') : tier.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t('onlineShopping')}</div>
                    <div className="text-lg font-semibold text-foreground">
                      {tier.onlineShopping ? t('yes') : t('no')}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t('mapMarkerPriority')}</div>
                    <div className="text-lg font-semibold text-foreground">
                      {tier.mapMarkerPriority}
                    </div>
                  </div>
                </div>

                {tier.features && tier.features.length > 0 && (
                  <div className="pt-6 border-t border-border">
                    <ul className="space-y-2">
                      {tier.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

