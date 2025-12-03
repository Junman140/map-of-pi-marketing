import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { RoadmapContent } from "@/components/pages/roadmap-content"

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <RoadmapContent />
      <Footer />
    </main>
  )
}
