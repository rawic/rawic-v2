import { RawicLogo } from '@/app/(frontend)/components/rawic-logo'
import { FlipWords } from '@/app/(frontend)/components/ui/flip-words'

const words = ['intuitive', 'performant', 'visually compelling']

export const UserIntro = () => {
  return (
    <div className="space-y-2.5 mb-3">
      <RawicLogo />
      <h1 className="text-5xl font-bold leading-16 text-white" itemProp="name">
        ASDF
      </h1>

      <h2 className="text-xl leading-6 text-highlight" itemProp="jobTitle">
        Senior Frontend Engineer
      </h2>

      <div className="leading-6 text-primary max-w-[23rem]" itemProp="description">
        I build <FlipWords words={words} /> <br /> web experiences. Passionate about React, Next.js,
        and TypeScript. Always eager to learn, share knowledge, and help others grow.
      </div>
    </div>
  )
}
