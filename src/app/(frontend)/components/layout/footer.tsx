export const Footer = () => {
  return (
    <footer className="text-sm text-center leading-6 text-dim" role="contentinfo">
      <p>&copy; {new Date().getFullYear()} Rafał Wichowski. All rights reserved.</p>
      <p>
        Designed in{' '}
        <span className="text-white/60 font-medium hover:text-white transition-colors">Figma</span>,
        built with{' '}
        <span className="text-white/60 font-medium hover:text-white transition-colors">
          PayloadCMS
        </span>
        ,{' '}
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
  )
}
