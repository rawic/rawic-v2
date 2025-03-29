import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import Image from 'next/image'
import config from '@/payload.config'
import { ExperienceSection } from './features/experience-section'
import { HeroSidebar } from './features/hero-sidebar'
import { PostsSection } from './features/posts-section'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-10 flex items-start gap-x-12 justify-between relative">
      <HeroSidebar />

      <section className="text-white pt-92 pb-12 max-w-[680px]">
        <ExperienceSection />

        <PostsSection />

        <p
          className="flex items-center justify-center gap-2 text-2xl font-bold mt-36 mb-15"
          aria-label="Inspirational message"
        >
          Stay curious, keep learning.
          <span
            className="block rounded-sm w-[3px] h-8 bg-highlight animate-[fadeInOut_1.8s_ease-in-out_infinite]"
            aria-hidden="true"
          />
        </p>

        <footer className="text-sm text-center leading-6 text-dim" role="contentinfo">
          <p>&copy; {new Date().getFullYear()} Rafał Wichowski. All rights reserved.</p>
          <p>
            Designed in{' '}
            <span className="text-white/60 font-medium hover:text-white transition-colors">
              Figma
            </span>
            , built with{' '}
            <span className="text-white/60 font-medium hover:text-white transition-colors">
              Next.js
            </span>
            ,{' '}
            <span className="text-white/60 font-medium hover:text-white transition-colors">
              Tailwind
            </span>{' '}
            &{' '}
            <span className="text-white/60 font-medium hover:text-white transition-colors">
              TypeScript
            </span>
            .
          </p>

          <ul className="inline-flex" aria-label="Technology stack">
            <li>
              Typeface:{' '}
              <span className="text-white/60 font-medium hover:text-white transition-colors">
                Inter
              </span>
            </li>
            <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
              Icons:{' '}
              <span className="ml-1 text-white/60 font-medium hover:text-white transition-colors">
                Untitled UI
              </span>
            </li>
            <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
              Deployed by:{' '}
              <span className="ml-1 text-white/60 font-medium hover:text-white transition-colors">
                Vercel
              </span>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  )
}
