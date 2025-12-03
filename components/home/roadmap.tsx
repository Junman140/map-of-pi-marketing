'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"

export function Roadmap() {
  const t = useTranslations()
  
  const roadmapItems = [
    {
      version: t('roadmap.v155'),
      status: "completed",
      image: "/assets/versions/v1_5_5.png",
    },
    {
      version: t('roadmap.v160'),
      status: "completed",
      image: "/assets/versions/v1_6_0.jpg",
    },
    {
      version: t('roadmap.v20'),
      status: "upcoming",
      image: "/assets/versions/v1_6_0.jpg",
    },
  ]

  return (
    <section id="roadmap" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('roadmap.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`p-6 rounded-2xl border-2 transition-all text-center ${
                  item.status === "completed"
                    ? "bg-primary/10 border-primary"
                    : item.status === "in-progress"
                      ? "bg-accent/10 border-accent"
                      : "bg-muted/30 border-border"
                }`}
              >
                {item.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.version}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center justify-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.status === "completed"
                        ? "bg-primary"
                        : item.status === "in-progress"
                          ? "bg-accent"
                          : "bg-muted-foreground"
                    }`}
                  ></div>
                  <h3 className="font-bold text-foreground text-xl">{item.version}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
