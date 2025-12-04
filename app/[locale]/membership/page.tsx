import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { MembershipContent } from "@/components/pages/membership-content"

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MembershipContent />
      <Footer />
    </main>
  )
}

