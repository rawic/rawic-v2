import { Tag } from '@/app/(frontend)/components/ui/tag'
import { Link01 } from '@untitled-ui/icons-react'
import { Experience as ExperienceType } from '@/payload-types'
import { getYearFromDateString } from '@/app/(frontend)/utils/date'
import { POSITION_LABELS, TAG_LABELS } from '../../../utils/mappings'
import { RevealCard } from '../../../components/ui/reveal-card'
import bg from './../../../../../../public/test5.png'

export const ExperienceCard = ({
  position,
  company,
  companyUrl,
  dateFrom,
  dateTo,
  location,
  description,
  tags,
  currentlyWorking,
}: ExperienceType) => {
  const HeaderInnerSelector = companyUrl ? 'a' : 'div'
  const isCurrentlyWorking = currentlyWorking || !dateTo
  const dateFromYears = getYearFromDateString(dateFrom)
  const dateToYears = dateTo ? getYearFromDateString(dateTo) : null
  const positionLabel = position ? POSITION_LABELS[position] : null

  return (
    <RevealCard backgroundImage={bg.src}>
      <article
        itemScope
        itemType="https://schema.org/OrganizationRole"
        className="flex gap-x-10 py-6 px-5 w-full group border-1 rounded-xl border-transparent  transition-all justify-between group-hover/experience:opacity-50 hover:opacity-100 relative group"
      >
        <div className="absolute top-0 left-0 w-full h-full -z-10 group-hover:bg-[radial-gradient(circle_at_center,_rgba(48,75,71,0.35)_0%,_transparent_70%)] blur-3xl transition-all" />

        {/* <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          movementDuration={10}
          proximity={0}
          inactiveZone={0}
          variant="highlight"
        /> */}
        <div className="text-xs text-tertiary font-semibold leading-6">
          <time itemProp="startDate" dateTime={dateFrom}>
            {dateFromYears}
          </time>
          {dateToYears && (
            <>
              {' — '}
              <time itemProp="endDate" dateTime={dateTo!}>
                {dateToYears}
              </time>
            </>
          )}
          {isCurrentlyWorking && <span className="uppercase"> — Present</span>}
        </div>

        <div className="flex flex-col flex-1 max-w-[420px] w-full">
          <header className="font-medium mb-3">
            <HeaderInnerSelector
              {...(companyUrl
                ? {
                    href: companyUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    'aria-label': `View more about ${positionLabel} at ${company}`,
                  }
                : {})}
              className="inline-flex gap-x-2 mb-1 group-hover:text-highlight"
            >
              <h3 itemProp="roleName">{positionLabel}</h3>
              <span
                itemProp="memberOf"
                itemScope
                itemType="https://schema.org/Organization"
                className="before:content-[''] before:inline-block gap-2 inline-flex items-center before:w-[3px] before:h-[3px] before:bg-current before:rounded-full"
              >
                {companyUrl && <meta itemProp="url" content={companyUrl} />}
                <span itemProp="name">{company}</span>
              </span>
              {companyUrl && <Link01 className="text-white w-4 ml-0.5" aria-hidden="true" />}
            </HeaderInnerSelector>
            <p
              itemProp="location"
              itemScope
              itemType="https://schema.org/Place"
              className="text-secondary"
            >
              {location}
            </p>
          </header>

          <p itemProp="description" className="text-sm text-primary leading-6 mb-5">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <footer>
              <ul className="flex gap-1.5 flex-wrap" aria-label="Skills and technologies">
                {tags.map((tag) => (
                  <Tag key={tag} label={TAG_LABELS[tag]} />
                ))}
              </ul>
            </footer>
          )}
        </div>
      </article>
    </RevealCard>
  )
}
