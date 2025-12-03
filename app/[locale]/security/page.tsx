import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { SecurityContent } from "@/components/pages/security-content"

export default function Security() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SecurityContent />
      <Footer />
    </main>
  )
}
