import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { ArrowNarrowRight } from '@untitled-ui/icons-react'

import config from '@/payload.config'
import { RawicLogo } from './components/rawic-logo'
import { GithubIcon } from './components/icons/github'
import { LinkedinIcon } from './components/icons/linkedin'
import { CodepenIcon } from './components/icons/codepen'
import { XIcon } from './components/icons/x'
import { ExperienceSection } from './features/experience-section'
import { FlipWords } from './components/ui/flip-words'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const words = ['intuitive', 'performant', 'visually compelling']

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-10 flex items-start gap-x-12 justify-between relative">
      <div className="flex flex-col sticky top-0 pt-32 pb-12 h-dvh">
        <div className="space-y-2.5 mb-3">
          <RawicLogo />
          <h1 className="text-5xl font-bold leading-16 text-white">Rafał Wichowski</h1>
          <h2 className="text-xl leading-6 text-highlight">Senior Frontend Engineer</h2>
          <div className="leading-6 text-primary max-w-[23rem]">
            I build <FlipWords words={words} /> <br /> web experiences. Passionate about React,
            Next.js, and TypeScript. Always eager to learn, share knowledge, and help others grow.
          </div>
        </div>

        <a
          href="#"
          className="text-sm font-semibold text-white inline-flex items-center gap-1 mb-20"
        >
          View Full Résumé <ArrowNarrowRight width="16" />
        </a>

        <ul className="flex flex-col gap-4 text-tertiary uppercase text-xs leading-6 font-semibold">
          <li className="flex text-white before:content-['—'] before:mr-3 pointer-events-none">
            <a href="#" className="w-full">
              Experience
            </a>
          </li>
          <li className="flex hover:text-white transition-colors">
            <a href="#" className="w-full">
              Projects
            </a>
          </li>
          <li className="flex hover:text-white transition-colors">
            <a href="#" className="w-full">
              Blog
            </a>
          </li>
        </ul>

        {/* {!user && <h1 className="text-white">Welcome to your new project.</h1>}
      {user && <h1 className="text-white">Welcome back, {user.email}</h1>} */}

        <ul className="flex gap-4 text-dim mt-auto">
          <li className="hover:text-white transition-colors">
            <a href="#">
              <GithubIcon />
            </a>
          </li>
          <li className="hover:text-white transition-colors">
            <a href="#">
              <LinkedinIcon />
            </a>
          </li>
          <li className="hover:text-white transition-colors">
            <a href="#">
              <CodepenIcon />
            </a>
          </li>
          <li className="hover:text-white transition-colors">
            <a href="#">
              <XIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-white pt-92 pb-12">
        <ExperienceSection />
      </div>
    </div>
  )
}
