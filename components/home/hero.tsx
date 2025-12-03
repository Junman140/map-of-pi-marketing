'use client'

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden bg-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-white/90 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://mapofpi.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                {t('hero.tryMapOfPi')}
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/assets/main-assets/partial-world-map_edited_edited_no-shopspng.png"
                alt="Map of Pi Global Marketplace"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 pt-16 md:pt-24 border-t border-white/20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/elements/2m-user-badge.png"
                alt="2M+ Users"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2M+</div>
            <div className="text-sm md:text-base text-white/80">{t('hero.users')}</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/elements/sellers-badge.png"
                alt="140K+ Sellers"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">140K+</div>
            <div className="text-sm md:text-base text-white/80">{t('hero.sellers')}</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/elements/reviews-badge.png"
                alt="100K+ Reviews"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100K+</div>
            <div className="text-sm md:text-base text-white/80">{t('hero.reviews')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
