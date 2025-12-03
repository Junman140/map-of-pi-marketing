'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/navigation"

export function TeamHighlights() {
  const t = useTranslations()

  const teamMembers = [
    {
      name: t('team.abdul.name'),
      role: t('team.abdul.role'),
      image: '/assets/photos/abdul-balogun.PNG',
      bio: t('team.abdul.bio'),
    },
    {
      name: t('team.adisa.name'),
      role: t('team.adisa.role'),
      image: '/assets/photos/yusuf-adisa_edited.jpg',
      bio: t('team.adisa.bio'),
    },
    {
      name: t('team.ant.name'),
      role: t('team.ant.role'),
      image: '/assets/photos/philip-jennings.png',
      bio: t('team.ant.bio'),
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('teamHighlights.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('teamHighlights.subtitle')}
          </p>
          <Link
            href="/team"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t('teamHighlights.viewAll')} →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-muted/30 rounded-2xl p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

