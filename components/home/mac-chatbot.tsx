'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"
import { MessageCircle } from "lucide-react"

export function MACChatbot() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-primary" size={32} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {t('macChatbot.title')}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {t('macChatbot.description')}
            </p>
            <p className="text-muted-foreground">
              {t('macChatbot.details')}
            </p>
            <a
              href="https://mapofpi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {t('macChatbot.chatNow')}
            </a>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/assets/elements/mac-bot.png"
              alt="M.A.C. Chatbot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

