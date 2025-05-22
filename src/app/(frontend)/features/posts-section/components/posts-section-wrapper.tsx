'use client'

import { Element } from 'react-scroll'

export const PostsSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Element name="posts">{children}</Element>
}
