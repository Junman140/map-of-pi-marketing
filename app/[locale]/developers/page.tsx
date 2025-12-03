import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { DevelopersContent } from "@/components/pages/developers-content"

export default function Developers() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DevelopersContent />
      <Footer />
    </main>
  )
}
