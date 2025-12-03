'use client'

import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Clock, Mail, Home } from "lucide-react"
import { Link } from "@/navigation"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist, but great things are coming soon!
            </p>
          </div>

          <div className="bg-muted/30 border border-border rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-primary" size={24} />
              <h2 className="text-xl font-semibold text-foreground">
                Coming Soon
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We're working hard to bring you something amazing. Join our community to stay updated.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/zyrachains"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Join Telegram
                <Mail size={20} />
              </a>
              <Link
                href="/"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

