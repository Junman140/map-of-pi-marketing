'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"

export function HackathonWinner() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block mb-4">
              <Image
                src="/assets/elements/hackathon-2024-winner.png"
                alt="2024 Pi Commerce Hackathon Winner"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('hackathonWinner.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('hackathonWinner.description')}
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>{t('hackathonWinner.feature1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>{t('hackathonWinner.feature2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>{t('hackathonWinner.feature3')}</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/assets/elements/pi-customers-map_transparent.png"
              alt="Map of Pi Global Marketplace"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

