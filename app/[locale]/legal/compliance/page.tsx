import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { LegalContent } from "@/components/pages/legal-content"

export default function CompliancePage() {
  return (
    <>
      <Header />
      <LegalContent type="compliance" />
      <Footer />
    </>
  )
}
