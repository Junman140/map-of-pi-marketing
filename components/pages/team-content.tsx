'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"

export function TeamContent() {
  const t = useTranslations('pages.team')
  const teamT = useTranslations('team')

  const teamMembers = [
    {
      name: teamT('philip.name'),
      role: teamT('philip.role'),
      image: '/assets/photos/philip-jennings.png',
      bio: teamT('philip.bio'),
    },
    {
      name: teamT('abdul.name'),
      role: teamT('abdul.role'),
      image: '/assets/photos/abdul-balogun.PNG',
      bio: teamT('abdul.bio'),
    },
    {
      name: teamT('adisa.name'),
      role: teamT('adisa.role'),
      image: '/assets/photos/yusuf-adisa_edited.jpg',
      bio: teamT('adisa.bio'),
    },
    {
      name: teamT('ant.name'),
      role: teamT('ant.role'),
      image: '/assets/photos/joseph-ciccone.png',
      bio: teamT('ant.bio'),
    },
    {
      name: teamT('danny.name'),
      role: teamT('danny.role'),
      image: '/assets/photos/danny-lee.PNG',
      bio: teamT('danny.bio'),
    },
    {
      name: teamT('darin.name'),
      role: teamT('darin.role'),
      image: '/assets/photos/darin-hajou.png',
      bio: teamT('darin.bio'),
    },
    {
      name: teamT('francis.name'),
      role: teamT('francis.role'),
      image: '/assets/photos/francis-mwaura.png',
      bio: teamT('francis.bio'),
    },
    {
      name: teamT('fasakin.name'),
      role: teamT('fasakin.role'),
      image: '/assets/photos/fasakin-henry.png',
      bio: teamT('fasakin.bio'),
    },
    {
      name: teamT('oluwabukola.name'),
      role: teamT('oluwabukola.role'),
      image: '/assets/photos/oluwabukola-adesina.png',
      bio: teamT('oluwabukola.bio'),
    },
    {
      name: teamT('andri.name'),
      role: teamT('andri.role'),
      image: '/assets/photos/andri-nael.png',
      bio: teamT('andri.bio'),
    },
    {
      name: teamT('franck.name'),
      role: teamT('franck.role'),
      image: '/assets/photos/franck-baraka.png',
      bio: teamT('franck.bio'),
    },
    {
      name: teamT('godswill.name'),
      role: teamT('godswill.role'),
      image: '/assets/photos/godswill-sam.webp',
      bio: teamT('godswill.bio'),
    },
    {
      name: teamT('mohamed.name'),
      role: teamT('mohamed.role'),
      image: '/assets/photos/MohamedElsoshani.jpg',
      bio: teamT('mohamed.bio'),
    },
    {
      name: teamT('rajasekhar.name'),
      role: teamT('rajasekhar.role'),
      image: '/assets/photos/rajasekhar-reddy_edited_2.png',
      bio: teamT('rajasekhar.bio'),
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section> */}

      {/* Our Beginning */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('ourBeginning.title')}
              </h2>
              <h3 className="text-xl md:text-2xl text-primary font-semibold">
                {t('ourBeginning.subtitle')}
              </h3>
              <p className="text-lg text-muted-foreground">
                {t('ourBeginning.description')}
              </p>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="/assets/main-assets/store-background_2.png"
                alt="Map of Pi Global Marketplace"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Drive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] order-2 md:order-1">
              <Image
                src="/assets/main-assets/map-background_opacity.jpg"
                alt="Map of Pi Global Marketplace"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('ourDrive.title')}
              </h2>
              <h3 className="text-xl md:text-2xl text-primary font-semibold">
                {t('ourDrive.subtitle')}
              </h3>
              <p className="text-lg text-muted-foreground">
                {t('ourDrive.description')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('ourDrive.description2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('ourVision.title')}
              </h2>
              <h3 className="text-xl md:text-2xl text-primary font-semibold">
                {t('ourVision.subtitle')}
              </h3>
              <p className="text-lg text-muted-foreground">
                {t('ourVision.description')}
              </p>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="/assets/elements/pi-customers-map.png"
                alt="Pi Network Customers Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Organization */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('ourOrganization.title')}
            </h2>
            <h3 className="text-xl md:text-2xl text-primary font-semibold mb-8">
              {t('ourOrganization.subtitle')}
            </h3>
          </div>

          {/* Role Descriptions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">{t('ourOrganization.projectManager.title')}</h4>
              <p className="text-muted-foreground">{t('ourOrganization.projectManager.description')}</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">{t('ourOrganization.ambassador.title')}</h4>
              <p className="text-muted-foreground">{t('ourOrganization.ambassador.description')}</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">{t('ourOrganization.marketing.title')}</h4>
              <p className="text-muted-foreground">{t('ourOrganization.marketing.description')}</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">{t('ourOrganization.uxSolutions.title')}</h4>
              <p className="text-muted-foreground">{t('ourOrganization.uxSolutions.description')}</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">{t('ourOrganization.development.title')}</h4>
              <p className="text-muted-foreground">{t('ourOrganization.development.description')}</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">{t('ourOrganization.qualityAnalyst.title')}</h4>
              <p className="text-muted-foreground">{t('ourOrganization.qualityAnalyst.description')}</p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-muted/30 rounded-2xl p-6 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary mb-4 font-semibold">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Image */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[600px]">
            <Image
              src="/assets/elements/map-of-pi-membership-chart_edited.png"
              alt="Map of Pi Global Marketplace"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
