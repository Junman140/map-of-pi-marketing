'use client'

import { CheckCircle2 } from "lucide-react"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"

export function Security() {
  const t = useTranslations()
  
  const securityFeatures = [
    t('security.webauthn'),
    t('security.encryption'),
    t('security.tls'),
    t('security.hsm'),
    t('security.audits'),
    t('security.detection'),
    t('security.multisig'),
    t('security.insurance'),
  ]

  return (
    <section id="security" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{t('security.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('security.subtitle')}
            </p>
            <Link href="/security" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
              {t('security.viewReport')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
