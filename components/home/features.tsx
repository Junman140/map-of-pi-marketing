'use client'

import { Globe, Wallet, ShieldCheck, Search } from "lucide-react"
import { useTranslations } from "next-intl"

export function Features() {
  const t = useTranslations()
  
  const features = [
    {
      icon: Globe,
      title: t('features.globalMarketplace.title'),
      description: t('features.globalMarketplace.description'),
    },
    {
      icon: Wallet,
      title: t('features.piPayments.title'),
      description: t('features.piPayments.description'),
    },
    {
      icon: ShieldCheck,
      title: t('features.verifiedMerchants.title'),
      description: t('features.verifiedMerchants.description'),
    },
    {
      icon: Search,
      title: t('features.searchDiscover.title'),
      description: t('features.searchDiscover.description'),
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">{t('features.title')}</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:border-white/40 transition-colors group text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
