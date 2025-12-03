'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { User, ArrowRight } from 'lucide-react'

export function BlogContent() {
  const t = useTranslations('pages.blog')

  const posts = t.raw('posts') as any[]

  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('subtitle')}
          </p>
        </div>

        {/* Featured Post */}
        {posts[0] && (
          <div className="bg-card border border-border rounded-2xl p-8 mb-16 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {t('featured')}
              </span>
              <span className="text-sm text-muted-foreground">{posts[0].date}</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{posts[0].title}</h2>
            <p className="text-lg text-muted-foreground mb-6">{posts[0].excerpt}</p>
            <Link href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              {t('readMore')} <ArrowRight size={20} />
            </Link>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post: any, idx: number) => (
            <Link
              key={idx}
              href="#"
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

