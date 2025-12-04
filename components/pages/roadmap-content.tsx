'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function RoadmapContent() {
  const t = useTranslations('pages.roadmap')

  const versions = [
    {
      version: t('v140.version'),
      status: 'completed',
      image: '/assets/versions/v1_4_0.png',
      description: t('v140.description'),
      features: t.raw('v140.features'),
    },
    {
      version: t('v155.version'),
      status: 'completed',
      image: '/assets/versions/v1_5_5.png',
      description: t('v155.description'),
      features: t.raw('v155.features'),
    },
    {
      version: t('v160.version'),
      status: 'completed',
      image: '/assets/versions/v1_6_0.jpg',
      description: t('v160.description'),
      features: t.raw('v160.features'),
    },
    {
      version: t('v20.version'),
      status: 'upcoming',
      image: '/assets/versions/v1_6_0.jpg',
      description: t('v20.description'),
      features: t.raw('v20.features'),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('pageTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Versions Timeline */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {versions.map((version, index) => {
              const isEven = index % 2 === 0
              return (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border-2 border-border">
                      <Image
                        src={version.image}
                        alt={version.version}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          version.status === 'completed'
                            ? 'bg-primary'
                            : version.status === 'in-progress'
                              ? 'bg-accent'
                              : 'bg-muted-foreground'
                        }`}
                      ></div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          version.status === 'completed'
                            ? 'bg-primary/10 text-primary'
                            : version.status === 'in-progress'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {version.status === 'completed' ? 'Completed' : version.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {version.version}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {version.description}
                    </p>
                    {version.features && version.features.length > 0 && (
                      <ul className="space-y-2">
                        {version.features.map((feature: string, featureIndex: number) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

