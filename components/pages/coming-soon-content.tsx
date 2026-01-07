'use client'

import { Construction, Rocket } from 'lucide-react'
import { Link } from '@/navigation'
import { Button } from '@/components/ui/button'

export function ComingSoonContent() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Background decoration */ }
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
        <div className="bg-background border border-border p-6 rounded-2xl relative shadow-xl">
          <Rocket className="w-16 h-16 text-primary animate-pulse" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        Coming Soon
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
        We're crafting something amazing. This page is currently under construction but will be ready for you soon.
      </p>

      <div className="flex gap-4">
        <Link href="/">
          <Button size="lg" className="font-semibold">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
