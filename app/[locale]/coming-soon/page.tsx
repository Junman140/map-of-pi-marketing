import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { ComingSoonContent } from "@/components/pages/coming-soon-content"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <ComingSoonContent />
      <Footer />
    </main>
  )
}
