'use client'

import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactContent() {
  const t = useTranslations('pages.contact')

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.raw('contactInfo').map((info: any, idx: number) => {
            const icons: Record<string, any> = {
              email: Mail,
              phone: Phone,
              office: MapPin,
            }
            const Icon = icons[info.type] || Mail
            return (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 text-center">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {info.label}
                </h3>
                <p className="text-muted-foreground">{info.value}</p>
                {info.note && (
                  <p className="text-sm text-muted-foreground mt-2">{info.note}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
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

