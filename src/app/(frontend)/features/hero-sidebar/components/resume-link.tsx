import { TextLineHover } from '@/app/(frontend)/components/ui/text-line-hover'
import { ArrowNarrowRight } from '@untitled-ui/icons-react'

export const ResumeLink = () => {
  return (
    <a
      href="/CV-Rafal-Wichowski-EN.pdf"
      className="text-sm font-semibold text-white inline-flex items-center gap-1 group/text self-start"
      aria-label="View full résumé"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TextLineHover>View Full Résumé</TextLineHover>
      <ArrowNarrowRight
        width="16"
        className="transition-all duration-200 group-hover/text:translate-x-1 group-hover/text:text-highlight"
        aria-hidden="true"
      />
    </a>
  )
}
