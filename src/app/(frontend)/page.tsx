import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import { ExperienceSection } from './features/experience-section'
import { HeroSidebar } from './features/hero-sidebar'
import { PostsSection } from './features/posts-section'
import { Footer } from './components/layout/footer'
import { InspirationalMessage } from './components/ui/inspirational-message'
import { FeaturedProjectsSection } from './features/featured-projects-section'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-10 flex items-start gap-x-12 justify-between relative">
      <HeroSidebar />

      <section className="text-white pt-[340px] pb-5 max-w-[606px]">
        <ExperienceSection />

        <FeaturedProjectsSection />

        <PostsSection />

        <InspirationalMessage />

        <Footer />
      </section>
    </div>
  )
}
