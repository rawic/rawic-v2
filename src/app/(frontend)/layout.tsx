import { Inter } from 'next/font/google'

import React from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'RAWIC – Rafał Wichowski – Front-End Developer',
  description:
    'Experienced Front-End Developer & UI Designer from Warsaw specializing in web apps & UI design. Skilled in HTML5, CSS3, JS, React. Focus on detail, design & clean code. Available for new projects & challenges.',
  alternates: {
    canonical: 'https://rawic.me',
    languages: {
      'en-US': 'https://rawic.me',
      'pl-PL': 'https://rawic.me/pl',
    },
  },
  authors: [{ name: 'Rafał Wichowski' }],
  publisher: 'RAWIC',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://rawic.me',
    title: 'RAWIC – Rafał Wichowski – Front-End Developer',
    description:
      'Experienced Front-End Developer & UI Designer from Warsaw specializing in web apps & UI design. Skilled in HTML5, CSS3, JS, React. Focus on detail, design & clean code. Available for new projects & challenges.',
    siteName: 'RAWIC Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://rawic.me/og/homepage.png',
        width: 1200,
        height: 630,
        alt: 'RAWIC – Rafał Wichowski portfolio screenshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rawic',
    creator: '@rawic',
    title: 'RAWIC – Rafał Wichowski – Front-End Developer',
    description:
      'Experienced Front-End Developer & UI Designer from Warsaw specializing in web apps & UI design. Skilled in HTML5, CSS3, JS, React. Focus on detail, design & clean code. Available for new projects & challenges.',
    images: ['https://rawic.me/og/homepage.png'],
  },
  themeColor: '#0d0d0d',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' }],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${inter.className} scroll-smooth antialiased`}>
      <body>
        <main className="h-full">{children}</main>
      </body>
    </html>
  )
}
