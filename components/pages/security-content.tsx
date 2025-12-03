'use client'

import { useTranslations } from 'next-intl'
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react'

export function SecurityContent() {
  const t = useTranslations('pages.security')

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            {t('measures.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('measures.items').map((measure: any, idx: number) => {
              const icons: Record<string, any> = {
                authentication: Lock,
                encryption: Shield,
                keyManagement: Eye,
                monitoring: Shield,
              }
              const Icon = icons[measure.icon] || Shield
              return (
                <div key={idx} className="p-8 bg-background border border-border rounded-2xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {measure.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{measure.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {measure.features.map((feature: string, featureIdx: number) => (
                      <li key={featureIdx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            {t('compliance.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('compliance.items').map((item: any, idx: number) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            {t('bestPractices.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 text-green-600">
                {t('bestPractices.dos.title')}
              </h3>
              <ul className="space-y-4">
                {t.raw('bestPractices.dos.items').map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 text-red-600">
                {t('bestPractices.donts.title')}
              </h3>
              <ul className="space-y-4">
                {t.raw('bestPractices.donts.items').map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Shield size={20} className="text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
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

