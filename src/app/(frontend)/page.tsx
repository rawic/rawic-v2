import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { ArrowNarrowRight } from '@untitled-ui/icons-react'
import Image from 'next/image'

import config from '@/payload.config'
import { RawicLogo } from './components/rawic-logo'
import { GithubIcon } from './components/icons/github'
import { LinkedinIcon } from './components/icons/linkedin'
import { CodepenIcon } from './components/icons/codepen'
import { XIcon } from './components/icons/x'
import { ExperienceSection } from './features/experience-section'
import { FlipWords } from './components/ui/flip-words'
import { TextLineHover } from './components/ui/text-line-hover'

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
          className="text-sm font-semibold text-white inline-flex items-center gap-1 mb-20 group/text self-start"
        >
          <TextLineHover>View Full Résumé</TextLineHover>
          <ArrowNarrowRight
            width="16"
            className="transition-all duration-200 group-hover/text:translate-x-1 group-hover/text:text-highlight"
          />
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
      <div className="text-white pt-92 pb-12 max-w-[680px]">
        <ExperienceSection />

        <div className="space-y-15 mt-36">
          <div className="flex gap-6 max-w-[563px]">
            <div className="w-32 h-32 overflow-hidden relative flex-shrink-0">
              <Image src="/test5.png" alt="test" fill className="object-cover p-3 rounded-sm" />
            </div>

            <div className="flex flex-col gap-3 py-3 justify-between">
              <h3 className="font-bold leading-5">
                Vivamus id eros justo. Mauris ipsum leo, placerat sit amet lacus nec
              </h3>
              <p className="text-primary text-sm">Donec placerat mi sed mi pretium, at aliquam.</p>

              <footer>
                <ul className="font-semibold leading-6 text-xs text-primary flex">
                  <li>Posted on Jan 27, 2024</li>
                  <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
                    3 min read
                  </li>
                  <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
                    3275 views
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </div>

        <p className="flex items-center justify-center gap-2 text-2xl font-bold mt-36 mb-15">
          Stay curious, keep learning.
          <span className="block rounded-sm w-[3px] h-8 bg-highlight animate-[fadeInOut_1.8s_ease-in-out_infinite]" />
        </p>

        <footer className="text-sm text-center leading-6 text-dim">
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
          <ul className="inline-flex">
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
      </div>
    </div>
  )
}
