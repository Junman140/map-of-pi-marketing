'use client'

import { useTranslations } from 'next-intl'
import { Circle } from 'lucide-react'

export function RoadmapContent() {
  const t = useTranslations('pages.roadmap')

  const quarters = [
    {
      period: 'q4_2025',
      title: t('betaLaunchTitle'),
      items: [
        t('betaLaunchDesc'),
        t('coreMintingDesc'),
        t('securityAuditDesc'),
      ],
    },
    {
      period: 'q1_2026',
      title: t('mainnetTitle'),
      items: [
        t('mainnetDesc'),
        t('merchantDesc'),
        t('mobileAppDesc'),
      ],
    },
    {
      period: 'q2_2026',
      title: t('defiTitle'),
      items: [
        t('defiProtocolDesc'),
        t('bridgeDesc'),
        t('governanceDesc'),
      ],
    },
    {
      period: 'q3_2026',
      title: t('institutionalTitle'),
      items: [
        t('institutionalDesc'),
        t('globalDesc'),
        t('advancedDesc'),
      ],
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

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {quarters.map((quarter, index) => (
              <div key={quarter.period} className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 ${
                        index === 0 ? 'bg-primary' : 'bg-primary/30'
                      } rounded-full flex items-center justify-center shrink-0`}
                    >
                      <Circle
                        className={index === 0 ? 'text-primary-foreground' : 'text-primary/50'}
                        size={24}
                      />
                    </div>
                    {index < quarters.length - 1 && (
                      <div className="w-1 h-24 bg-primary/30 mt-4"></div>
                    )}
                  </div>
                  <div className={index < quarters.length - 1 ? 'pb-12' : ''}>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {t(quarter.period)}
                    </h3>
                    <p className="text-muted-foreground mb-4">{quarter.title}</p>
                    <ul className="space-y-2">
                      {quarter.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

