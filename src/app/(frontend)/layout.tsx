import { Inter } from 'next/font/google'

import React from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body>
        <main className="h-full">{children}</main>
      </body>
    </html>
  )
}
