"use client"

import { useState } from "react"
import { Link } from "@/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/global/language-switcher"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/map-of-pi-logo.png" 
            alt="Map of Pi" 
            width={32} 
            height={32}
            className="rounded-lg"
          />
          <span className="font-bold text-xl text-foreground">Map of Pi</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            {t('nav.home')}
          </Link>
          <Link href="/team" className="text-foreground hover:text-primary transition-colors">
            {t('nav.team')}
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
          <a href="https://mapofpi.zapier.app/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            {t('nav.chatWithMAC')}
          </a>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <a href="https://mapofpi.pinet.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
            {t('nav.tryMapOfPi')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col p-4">
              {/* Main Navigation */}
              <Link href="/" className="text-foreground hover:text-primary px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link href="/team" className="text-foreground hover:text-primary px-4 py-2 block" onClick={() => setIsOpen(false)}>
                {t('nav.team')}
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary px-4 py-2 block" onClick={() => setIsOpen(false)}>
                {t('nav.contact')}
              </Link>
              <a href="https://mapofpi.pinet.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary px-4 py-2 block" onClick={() => setIsOpen(false)}>
                {t('nav.chatWithMAC')}
              </a>

              {/* Legal */}
              <div className="mt-2 pt-2 border-t border-border">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">{t('header.legal')}</p>
                <Link href="/legal/privacy" className="text-foreground hover:text-primary px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  {t('header.privacy')}
                </Link>
                <Link href="/legal/terms" className="text-foreground hover:text-primary px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  {t('header.terms')}
                </Link>
                <Link href="/legal/compliance" className="text-foreground hover:text-primary px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  {t('header.compliance')}
                </Link>
                <Link href="/legal/disclosures" className="text-foreground hover:text-primary px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  {t('header.disclosures')}
                </Link>
              </div>

              {/* CTA */}
              <div className="px-4 py-4 mt-4">
                <a href="https://mapofpi.pinet.com/" target="_blank" rel="noopener noreferrer" className="w-full block px-6 py-2 bg-primary text-primary-foreground rounded-lg text-center">
                  {t('nav.tryMapOfPi')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
