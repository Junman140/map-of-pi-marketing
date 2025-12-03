'use client'

import { useTranslations } from 'next-intl'
import { CheckCircle2, Shield, Zap, Globe, TrendingUp, Users, Lock, Coins, AlertTriangle, Target, Building2, DollarSign } from 'lucide-react'

export function PitchContent() {
  const t = useTranslations('pages.pitch')

  return (
    <main className="min-h-screen bg-background">
      {/* Slide 1: Cover */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-primary mb-6">$USDP</h1>
          <p className="text-3xl md:text-4xl font-semibold text-foreground mb-4">{t('cover.tagline')}</p>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">{t('cover.subtitle')}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('cover.description')}</p>
        </div>
      </section>

      {/* Slide 2: The Problem */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('problem.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t('problem.challenges.title')}</h3>
              <ul className="space-y-4">
                {t.raw('problem.challenges.items').map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t('problem.opportunity.title')}</h3>
              <p className="text-lg text-muted-foreground">{t('problem.opportunity.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Introducing $USDP */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('introducing.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{t('introducing.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw('introducing.valueProps').map((prop: { title: string; description: string }, idx: number) => (
              <div key={idx} className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">{prop.title}</h3>
                <p className="text-muted-foreground text-sm">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4: Why $USDP Stands Out */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('competitiveAdvantages.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('competitiveAdvantages.subtitle')}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] md:min-w-0 bg-background border border-border rounded-lg">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('competitiveAdvantages.table.feature')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary">{t('competitiveAdvantages.table.usdp')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">{t('competitiveAdvantages.table.competitors')}</th>
                </tr>
              </thead>
              <tbody>
                {t.raw('competitiveAdvantages.table.rows').map((row: { feature: string; usdp: string; competitors: string }, idx: number) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-primary font-semibold">{row.usdp}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.competitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-8 text-lg font-semibold text-foreground">{t('competitiveAdvantages.conclusion')}</p>
        </div>
      </section>

      {/* Slide 5: Key Features */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('keyFeatures.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('keyFeatures.sections').map((section: { title: string; subtitle: string; items: string[] }, idx: number) => {
              const icons = [Shield, Zap, Globe, CheckCircle2]
              const Icon = icons[idx] || Shield
              return (
                <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Slide 6: Technical Specifications */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('technicalSpecs.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('technicalSpecs.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw('technicalSpecs.items').map((spec: { label: string; value: string }, idx: number) => (
              <div key={idx} className="p-6 bg-background border border-border rounded-2xl">
                <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                <div className="text-xl font-semibold text-foreground">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 7: Market Opportunity */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('marketOpportunity.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('marketOpportunity.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw('marketOpportunity.sections').map((section: { title: string; items: string[] }, idx: number) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 8: Use Cases */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('useCases.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('useCases.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('useCases.categories').map((category: { title: string; items: string[] }, idx: number) => (
              <div key={idx} className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 9: Business Model */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('businessModel.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('businessModel.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {t.raw('businessModel.sections').map((section: { title: string; items: string[] }, idx: number) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <p className="text-lg text-foreground">{t('businessModel.profitability')}</p>
          </div>
        </div>
      </section>

      {/* Slide 10: Token Economics */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('tokenEconomics.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('tokenEconomics.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t('tokenEconomics.supplyMechanism.title')}</h3>
              <ul className="space-y-4">
                {t.raw('tokenEconomics.supplyMechanism.items').map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Coins className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t('tokenEconomics.functions.title')}</h3>
              <ol className="space-y-4 list-decimal list-inside">
                {t.raw('tokenEconomics.functions.items').map((item: string, idx: number) => (
                  <li key={idx} className="text-muted-foreground">{item}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bg-background border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('tokenEconomics.pegMaintenance.title')}</h3>
            <ul className="space-y-3">
              {t.raw('tokenEconomics.pegMaintenance.items').map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Slide 11: Go-to-Market Strategy */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('goToMarket.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw('goToMarket.phases').map((phase: { title: string; period: string; items: string[] }, idx: number) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">{phase.period}</div>
                  <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 12: Team & Partnerships */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('teamPartnerships.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('teamPartnerships.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t('teamPartnerships.partners.title')}</h3>
              <ul className="space-y-4">
                {t.raw('teamPartnerships.partners.items').map((partner: { name: string; description: string }, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">{partner.name}</div>
                      <div className="text-sm text-muted-foreground">{partner.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('teamPartnerships.whyMatters.title')}</h3>
              <p className="text-muted-foreground">{t('teamPartnerships.whyMatters.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 13: Risk Mitigation */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('riskMitigation.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('riskMitigation.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('riskMitigation.risks').map((risk: { title: string; items: string[] }, idx: number) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">{risk.title}</h3>
                <ul className="space-y-3">
                  {risk.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 14: Financial Projections */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('financialProjections.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('financialProjections.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw('financialProjections.years').map((year: { period: string; items: string[] }, idx: number) => (
              <div key={idx} className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">{year.period}</h3>
                <ul className="space-y-3">
                  {year.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 15: The Ask */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('theAsk.title')}</h2>
            <div className="space-y-4 mb-12">
              <div className="text-3xl font-bold text-primary">{t('theAsk.amount')}</div>
              <div className="text-xl text-muted-foreground">{t('theAsk.equity')}</div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('theAsk.valuation')}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t('theAsk.useOfFunds.title')}</h3>
              <ul className="space-y-4">
                {t.raw('theAsk.useOfFunds.items').map((item: { category: string; percentage: string; amount: string; details: string[] }, idx: number) => (
                  <li key={idx} className="p-6 bg-card border border-border rounded-xl">
                    <div className="font-semibold text-foreground mb-2">{item.category}: {item.percentage} ({item.amount})</div>
                    <ul className="space-y-2 mt-3">
                      {item.details.map((detail: string, detailIdx: number) => (
                        <li key={detailIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t('theAsk.terms.title')}</h3>
              {t.raw('theAsk.terms.sections').map((section: { title: string; items: string[] }, idx: number) => (
                <div key={idx} className="mb-6 p-6 bg-card border border-border rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="font-semibold text-foreground mb-3">{t('theAsk.milestones.title')}</h4>
                <ul className="space-y-2">
                  {t.raw('theAsk.milestones.items').map((item: string, idx: number) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 16: Closing */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('closing.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">{t('closing.intro')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {t.raw('closing.points').map((point: { title: string; description: string }, idx: number) => (
              <div key={idx} className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('closing.conclusion')}</p>
            <div className="text-5xl font-bold text-primary">$USDP</div>
            <p className="text-2xl font-semibold text-foreground">{t('closing.tagline')}</p>
            <p className="text-sm text-muted-foreground mt-8">{t('closing.footer')}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

