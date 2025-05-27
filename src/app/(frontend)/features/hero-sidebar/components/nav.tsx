'use client'

import { cn } from '@/app/(frontend)/lib/utils'
import { useEffect, useState } from 'react'
import { Link, scrollSpy } from 'react-scroll'

const navItems = ['Experience', 'Projects', 'Posts']

export const Nav = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].toLowerCase())

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (navItems.map((i) => i.toLowerCase()).includes(hash)) {
      setActiveSection(hash)
    }

    scrollSpy.update()
  }, [])

  return (
    <nav aria-label="Main site navigation">
      <ul className="flex flex-col gap-4 text-tertiary uppercase text-xs leading-6 font-semibold mt-20">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.toLowerCase()
          const isLastElement = index === navItems.length - 1

          return (
            <li key={index}>
              <Link
                to={item.toLowerCase()}
                smooth
                duration={0}
                spy
                offset={isLastElement ? -500 : 0}
                className={cn(
                  'w-full cursor-pointer flex items-center hover:text-white gap-3 transition-colors',
                  isActive ? 'text-white' : '',
                )}
                onSetActive={() => {
                  setActiveSection(item.toLowerCase())
                }}
                onClick={() => {
                  window.history.replaceState(null, '', `#${item.toLowerCase()}`)
                }}
              >
                <span
                  className={cn(
                    'block bg-tertiary transition-all h-[1px]',
                    isActive ? 'w-[12px] bg-white' : 'w-0',
                  )}
                />
                {item}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
