'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"

export function EscrowPi() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[500px] order-2 md:order-1">
            <Image
              src="/assets/elements/escrowpi-app-hands-design.png"
              alt="EscrowPi Secure Payments"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block mb-4">
              <Image
                src="/assets/elements/escrowpi-logo-design.png"
                alt="EscrowPi"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('escrowPi.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('escrowPi.subtitle')}
            </p>
            <p className="text-muted-foreground">
              {t('escrowPi.description')}
            </p>
            <a
              href="https://escrowpi-corporate-identity.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary hover:underline font-semibold"
            >
              {t('escrowPi.learnMore')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

