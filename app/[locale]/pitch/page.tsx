import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { PitchContent } from "@/components/pages/pitch-content"

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <PitchContent />
      <Footer />
    </main>
  )
}

