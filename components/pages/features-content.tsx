'use client'

import { useTranslations } from 'next-intl'
import { Lock, Zap, TrendingUp, Users, BarChart3, Shield } from 'lucide-react'

export function FeaturesContent() {
  const t = useTranslations('pages.features')

  const features = [
    {
      icon: Lock,
      titleKey: 'features.secure.title',
      descriptionKey: 'features.secure.description',
    },
    {
      icon: Zap,
      titleKey: 'features.fast.title',
      descriptionKey: 'features.fast.description',
    },
    {
      icon: TrendingUp,
      titleKey: 'features.stable.title',
      descriptionKey: 'features.stable.description',
    },
    {
      icon: Users,
      titleKey: 'features.community.title',
      descriptionKey: 'features.community.description',
    },
    {
      icon: BarChart3,
      titleKey: 'features.defi.title',
      descriptionKey: 'features.defi.description',
    },
    {
      icon: Shield,
      titleKey: 'features.compliance.title',
      descriptionKey: 'features.compliance.description',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
              </div>
            )
          })}
        </div>

        {/* Detailed Features */}
        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('advancedSecurity.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('advancedSecurity.description')}
              </p>
              <ul className="space-y-3">
                {t.raw('advancedSecurity.features').map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 min-h-80 flex items-center justify-center">
              <Shield className="w-32 h-32 text-primary/30" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 min-h-80 flex items-center justify-center order-2 md:order-1">
              <Zap className="w-32 h-32 text-accent/30" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('lightningFast.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('lightningFast.description')}
              </p>
              <ul className="space-y-3">
                {t.raw('lightningFast.features').map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

