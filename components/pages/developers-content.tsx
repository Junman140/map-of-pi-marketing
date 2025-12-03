'use client'

import { useTranslations } from 'next-intl'
import { Code, Zap, BookOpen, GitBranch } from 'lucide-react'

export function DevelopersContent() {
  const t = useTranslations('pages.developers')

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

      {/* Quick Start */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            {t('quickStart.title')}
          </h2>

          <div className="bg-background border border-border rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t('quickStart.installation.title')}
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
              <code>{t('quickStart.installation.code')}</code>
            </pre>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t('quickStart.usage.title')}
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
              <code>{t('quickStart.usage.code')}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            {t('integrationOptions.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('integrationOptions.items').map((item: any, idx: number) => {
              const icons: Record<string, any> = {
                code: Code,
                zap: Zap,
                book: BookOpen,
                git: GitBranch,
              }
              const Icon = icons[item.icon] || Code
              return (
                <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <button className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    {item.linkText} <span>→</span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            {t('useCases.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('useCases.items').map((item: any, idx: number) => (
              <div key={idx} className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {item.features.map((feature: string, featureIdx: number) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

