'use client'

import { useTranslations } from 'next-intl'
import { Users, Target, Lightbulb } from 'lucide-react'

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

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('mission.description1')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('mission.description2')}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('vision.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('vision.description1')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('vision.description2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            {t('coreValues.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.raw('coreValues.items').map((value: any, idx: number) => {
              const icons: Record<string, any> = {
                innovation: Lightbulb,
                transparency: Target,
                community: Users,
              }
              const Icon = icons[value.icon] || Lightbulb
              return (
                <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Provena Labs */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            {t('whyChoose.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('whyChoose.items').map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold">{item.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

