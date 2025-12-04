'use client'

import { useTranslations } from 'next-intl'
import { CheckCircle2, AlertCircle } from 'lucide-react'

type LegalPageType = 'privacy' | 'terms' | 'compliance' | 'disclosures'

interface LegalContentProps {
  type: LegalPageType
}

export function LegalContent({ type }: LegalContentProps) {
  const t = useTranslations(`pages.legal.${type}`)

  if (type === 'privacy' || type === 'terms') {
    return (
      <main className="min-h-screen bg-background">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4">{t('title')}</h1>
          <p className="text-muted-foreground mb-2">{t('lastUpdated')}</p>
          <p className="text-muted-foreground mb-12">{t('emailAddress')}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {t.raw('sections').map((section: any, idx: number) => {
              // Check if this is a subsection (title matches pattern like "2.1", "3.2", "4.1" - two numbers separated by dot)
              // vs main section like "2.", "3.", "4." - single number followed by dot and space
              const isSubsection = /^\d+\.\d+\s/.test(section.title) || /^\d+\.\d+$/.test(section.title)
              const HeadingTag = isSubsection ? 'h3' : 'h2'
              const headingClass = isSubsection 
                ? 'text-xl font-semibold text-foreground mb-3 mt-6' 
                : 'text-2xl font-bold text-foreground mb-4'
              
              return (
                <section key={idx} className="space-y-4">
                  <HeadingTag className={headingClass}>
                    {section.title}
                  </HeadingTag>
                  {section.content && typeof section.content === 'string' && (
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {section.items.map((item: string, itemIdx: number) => (
                        <li key={itemIdx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        </section>
      </main>
    )
  }

  if (type === 'compliance') {
    return (
      <main className="min-h-screen bg-background">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4">{t('title')}</h1>
          <p className="text-muted-foreground mb-12">{t('subtitle')}</p>

          <div className="space-y-12">
            {t.raw('sections').map((section: any, idx: number) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-muted-foreground mb-6">{section.description}</p>
                )}
                {section.items && (
                  <div className="space-y-4">
                    {section.items.map((item: any, itemIdx: number) => (
                      <div key={itemIdx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {section.content && (
                  <div className="bg-card border border-border rounded-xl p-6">
                    {typeof section.content === 'string' ? (
                      <p className="text-muted-foreground">{section.content}</p>
                    ) : (
                      <>
                        {section.content.title && (
                          <h3 className="font-semibold text-foreground mb-4">
                            {section.content.title}
                          </h3>
                        )}
                        {section.content.items && (
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {section.content.items.map((item: string, itemIdx: number) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                )}
                {section.grid && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.grid.map((item: any, itemIdx: number) => (
                      <div key={itemIdx} className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.links && (
                  <div className="space-y-3">
                    {section.links.map((link: any, linkIdx: number) => (
                      <a
                        key={linkIdx}
                        href={link.url || '#'}
                        className="block text-primary hover:underline"
                      >
                        → {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>
      </main>
    )
  }

  if (type === 'disclosures') {
    return (
      <main className="min-h-screen bg-background">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4">{t('title')}</h1>
          <p className="text-muted-foreground mb-12">{t('subtitle')}</p>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-12 flex gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                {t('warning.title')}
              </h3>
              <p className="text-muted-foreground">{t('warning.text')}</p>
            </div>
          </div>

          <div className="space-y-12">
            {(t.raw('sections') || []).map((section: any, idx: number) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                {section.items ? (
                  <div className="space-y-4">
                    {section.items.map((item: any, itemIdx: number) => (
                      <div key={itemIdx} className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                ) : section.content ? (
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground">{section.content}</p>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return null
}

