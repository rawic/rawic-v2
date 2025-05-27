'use client'

import { Element } from 'react-scroll'

export const FeaturedProjectsSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Element name="projects" className="space-y-15 mb-3 mt-30 pt-6">
      {children}
    </Element>
  )
}
