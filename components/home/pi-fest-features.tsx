'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"

export function PiFestFeatures() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('piFest.title')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t('piFest.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/elements/2m-user-badge.png"
                alt="2M Users"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">2M+</h3>
            <p className="text-white/80">{t('piFest.users')}</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/elements/sellers-badge.png"
                alt="140K Sellers"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">140K+</h3>
            <p className="text-white/80">{t('piFest.sellers')}</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/elements/reviews-badge.png"
                alt="100K Reviews"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">100K+</h3>
            <p className="text-white/80">{t('piFest.reviews')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

