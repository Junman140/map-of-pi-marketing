import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { AboutContent } from "@/components/pages/about-content"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutContent />
      <Footer />
    </main>
  )
}
