import { Header } from "@/components/global/header"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { HackathonWinner } from "@/components/home/hackathon-winner"
import { PiFestFeatures } from "@/components/home/pi-fest-features"
import { EscrowPi } from "@/components/home/escrowpi"
import { TeamHighlights } from "@/components/home/team-highlights"
import { MACChatbot } from "@/components/home/mac-chatbot"
import { UseCases } from "@/components/home/use-cases"
import { TargetMarket } from "@/components/home/target-market"
import { CTA } from "@/components/home/cta"
import { Footer } from "@/components/global/footer"
import { locales } from '@/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params
  
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HackathonWinner />
      <Features />
      <PiFestFeatures />
      <EscrowPi />
      <UseCases />
      <TargetMarket />
      <TeamHighlights />
      <MACChatbot />
      <CTA />
      <Footer />
    </main>
  )
}

