'use client'

import { useTranslations } from 'next-intl'
import { Globe, Store, TrendingUp } from 'lucide-react'

export function AboutContent() {
  const t = useTranslations('pages.about')

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

      {/* Main Story */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('story.intro')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('story.vision')}
            </p>
          </div>
        </div>
      </section>

      {/* Growth and Evolution */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            {t('growth.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {(Array.isArray(t.raw('growth.items')) ? t.raw('growth.items') : []).map((item: any, idx: number) => {
              const icons: Record<string, any> = {
                merchants: Globe,
                features: Store,
                accessibility: TrendingUp,
              }
              const Icon = icons[item.icon] || Globe
              return (
                <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('coreMessage.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('coreMessage.description')}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

