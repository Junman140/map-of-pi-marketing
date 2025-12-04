'use client'

import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/navigation"

export function Roadmap() {
  const t = useTranslations()
  
  const roadmapItems = [
    {
      version: t('roadmap.v140'),
      status: "completed",
    },
    {
      version: t('roadmap.v155'),
      status: "completed",
    },
    {
      version: t('roadmap.v160'),
      status: "completed",
    },
    {
      version: t('roadmap.v20'),
      status: "upcoming",
    },
  ]

  return (
    <section id="roadmap" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('roadmap.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('roadmap.subtitle')}
          </p>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t('roadmap.viewFullRoadmap')}
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.status === "completed"
                        ? "bg-primary"
                        : item.status === "in-progress"
                          ? "bg-accent"
                          : "bg-muted-foreground"
                    }`}
                  ></div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      item.status === "completed"
                        ? "bg-primary/20 text-primary"
                        : item.status === "in-progress"
                          ? "bg-accent/20 text-accent"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status === "completed" ? "Completed" : item.status === "in-progress" ? "In Progress" : "Coming Soon"}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-xl">{item.version}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
