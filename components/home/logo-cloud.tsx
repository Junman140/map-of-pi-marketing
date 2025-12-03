"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const companies = [
  "ZyraChain",
  "zyra",
  "Zyrapay",
  "zyrawallet",
  "zyradex",
  "Orbit",
  "Dappify",
]

export function LogoCloud() {
  const t = useTranslations()
  // Duplicate the array to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="py-16 md:py-20 bg-background border-y border-border overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          {t('logoCloud.title')}
        </h3>
        <p className="text-muted-foreground text-sm">
          {t('logoCloud.subtitle')}
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center mx-8 px-6 py-4 grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/provena-labs.jpg"
                  alt={company}
                  width={40}
                  height={40}
                  className="rounded-lg object-cover"
                />
                <span className="text-foreground font-medium text-sm whitespace-nowrap">
                  {company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

