import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { LegalContent } from "@/components/pages/legal-content"

export default function DisclosuresPage() {
  return (
    <>
      <Header />
      <LegalContent type="disclosures" />
      <Footer />
    </>
  )
}
