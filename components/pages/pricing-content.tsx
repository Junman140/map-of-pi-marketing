'use client'

import { useTranslations } from 'next-intl'
import { CheckCircle2 } from 'lucide-react'

export function PricingContent() {
  const t = useTranslations('pages.pricing')

  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.raw('plans').map((plan: any, idx: number) => (
            <div
              key={idx}
              className={`bg-card border border-border rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.badge && (
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <p className="text-muted-foreground mt-2">{plan.priceNote}</p>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature: string, featureIdx: number) => (
                  <li key={featureIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fee Breakdown */}
        <div className="bg-card border border-border rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {t('feeBreakdown.title')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">
                    {t('feeBreakdown.transactionType')}
                  </th>
                  <th className="text-left py-4 px-4 text-foreground font-semibold">
                    {t('feeBreakdown.fee')}
                  </th>
                  <th className="text-left py-4 px-4 text-foreground font-semibold">
                    {t('feeBreakdown.speed')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.raw('feeBreakdown.rows').map((row: any, idx: number) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-muted/50 last:border-b-0"
                  >
                    <td className="py-4 px-4 text-foreground">{row.type}</td>
                    <td className="py-4 px-4 text-foreground">{row.fee}</td>
                    <td className="py-4 px-4 text-foreground">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('faq.title')}
          </h2>
          <div className="space-y-6">
            {t.raw('faq.items').map((item: any, idx: number) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

