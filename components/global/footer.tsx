'use client'

import { Mail, Github, Twitter, Linkedin, Youtube, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Link } from "@/navigation"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations()
  
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/map-of-pi-logo.png" 
                alt="Map of Pi" 
                width={32} 
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-lg">Map of Pi</span>
            </div>
            <p className="text-background/70 text-sm">{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-background transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/team" className="hover:text-background transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/legal/privacy" className="hover:text-background transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-background transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/legal/disclosures" className="hover:text-background transition-colors">
                  {t('footer.disclosures')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/70">{t('footer.copyright', { year: currentYear })}</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/mapofpi" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/mapofpi" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/mapofpi" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/mapofpi" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.youtube.com/@mapofpi" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
