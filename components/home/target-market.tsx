'use client'

import { ShoppingCart, Globe, Users, Store } from "lucide-react"
import { useTranslations } from "next-intl"

export function TargetMarket() {
  const t = useTranslations()
  
  const markets = [
    {
      icon: ShoppingCart,
      title: t('targetMarket.markets.buyers.title'),
      description: t('targetMarket.markets.buyers.description'),
    },
    {
      icon: Store,
      title: t('targetMarket.markets.sellers.title'),
      description: t('targetMarket.markets.sellers.description'),
    },
    {
      icon: Globe,
      title: t('targetMarket.markets.merchants.title'),
      description: t('targetMarket.markets.merchants.description'),
    },
    {
      icon: Users,
      title: t('targetMarket.markets.pioneers.title'),
      description: t('targetMarket.markets.pioneers.description'),
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('targetMarket.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('targetMarket.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon
            return (
              <div
                key={index}
                className="p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{market.title}</h3>
                <p className="text-muted-foreground">{market.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
