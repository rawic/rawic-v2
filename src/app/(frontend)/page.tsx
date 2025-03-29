import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import Image from 'next/image'
import config from '@/payload.config'
import { ExperienceSection } from './features/experience-section'
import { HeroSidebar } from './features/hero-sidebar'

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

        <section className="space-y-15 mt-36">
          <article
            itemScope
            itemType="https://schema.org/BlogPosting"
            className="flex gap-6 max-w-[563px]"
          >
            <div
              className="w-32 h-32 overflow-hidden relative flex-shrink-0"
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src="/test5.png"
                alt="Blog post thumbnail"
                fill
                className="object-cover p-3 rounded-sm"
              />
              <meta itemProp="url" content="/test5.png" />
            </div>

            <div className="flex flex-col gap-3 py-3 justify-between">
              <header>
                <h3 className="font-bold leading-5" itemProp="headling">
                  Vivamus id eros justo. Mauris ipsum leo, placerat sit amet lacus nec
                </h3>
              </header>

              <p className="text-primary text-sm" itemProp="description">
                Donec placerat mi sed mi pretium, at aliquam.
              </p>

              <footer>
                <ul
                  className="font-semibold leading-6 text-xs text-primary flex"
                  aria-label="Post metadata"
                >
                  <li>
                    <time dateTime="2024-01-27" itemProp="datePublished">
                      Posted on Jan 27, 2024
                    </time>
                  </li>
                  <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
                    <span itemProp="timeRequired">3 min read</span>
                  </li>
                  <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
                    <meta itemProp="interactionType" content="https://schema.org/ViewAction" />
                    <meta itemProp="userInteractionCount" content="3275" />
                    3275 views
                  </li>
                </ul>
              </footer>
            </div>
          </article>
        </section>

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
