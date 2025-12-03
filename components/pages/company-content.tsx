'use client'

import { useTranslations } from 'next-intl'
import { Users, Target, Lightbulb, Award } from 'lucide-react'

export function CompanyContent() {
  const t = useTranslations('pages.company')

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

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {t.raw('missionVision').map((item: any, idx: number) => {
            const icons: Record<string, any> = {
              mission: Target,
              vision: Lightbulb,
            }
            const Icon = icons[item.type] || Target
            return (
              <div key={idx} className="bg-card border border-border rounded-2xl p-8">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-4">{item.title}</h2>
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t('coreValues.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.raw('coreValues.items').map((value: any, idx: number) => {
              const icons: Record<string, any> = {
                excellence: Award,
                community: Users,
                innovation: Lightbulb,
                transparency: Target,
              }
              const Icon = icons[value.icon] || Award
              return (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t('stats.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {t.raw('stats.items').map((stat: any, idx: number) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t('team.description')}
          </p>
        </div>
      </section>
    </main>
  )
}

