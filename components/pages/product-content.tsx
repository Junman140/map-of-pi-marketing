'use client'

import { useTranslations } from 'next-intl'
import { CheckCircle2, Shield, Zap, Globe } from 'lucide-react'

export function ProductContent() {
  const t = useTranslations('pages.product')

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('subtitle')}
          </p>
        </div>

        {/* Product Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t('whatIs.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('whatIs.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t('whatIs.description2')}
            </p>
            <ul className="space-y-3">
              {t.raw('whatIs.features').map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">$USDP</div>
              <p className="text-xl text-muted-foreground">{t('tagline')}</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t('coreFeatures.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.raw('coreFeatures.items').map((item: any, idx: number) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                {item.icon === 'shield' && <Shield className="w-12 h-12 text-primary mb-4" />}
                {item.icon === 'zap' && <Zap className="w-12 h-12 text-primary mb-4" />}
                {item.icon === 'globe' && <Globe className="w-12 h-12 text-primary mb-4" />}
                {item.icon === 'check' && <CheckCircle2 className="w-12 h-12 text-primary mb-4" />}
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-card border border-border rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {t('technicalSpecs.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t('technicalSpecs.blockchain.label')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('technicalSpecs.blockchain.value')}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t('technicalSpecs.tokenStandard.label')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('technicalSpecs.tokenStandard.value')}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t('technicalSpecs.decimals.label')}
              </h3>
              <p className="text-muted-foreground">
                {t('technicalSpecs.decimals.value')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t('technicalSpecs.collateralization.label')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('technicalSpecs.collateralization.value')}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t('technicalSpecs.mintRedeemFee.label')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('technicalSpecs.mintRedeemFee.value')}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t('technicalSpecs.auditStatus.label')}
              </h3>
              <p className="text-muted-foreground">
                {t('technicalSpecs.auditStatus.value')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

