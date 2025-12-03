'use client'

import { ShoppingCart, MapPin, Globe, Wrench } from "lucide-react"
import { useTranslations } from "next-intl"

export function UseCases() {
  const t = useTranslations()
  
  const useCases = [
    {
      icon: MapPin,
      title: t('useCases.poolTable.title'),
      description: t('useCases.poolTable.description'),
    },
    {
      icon: ShoppingCart,
      title: t('useCases.localCommerce.title'),
      description: t('useCases.localCommerce.description'),
    },
    {
      icon: Globe,
      title: t('useCases.globalMarketplace.title'),
      description: t('useCases.globalMarketplace.description'),
    },
    {
      icon: Wrench,
      title: t('useCases.services.title'),
      description: t('useCases.services.description'),
    },
  ]

  return (
    <section id="use-cases" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">{t('useCases.title')}</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:border-white/40 transition-all hover:shadow-lg text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-foreground mb-2">{useCase.title}</h3>
                    <p className="text-primary-foreground/80">{useCase.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
