import { Tag } from '@/app/(frontend)/components/ui/tag'
import { Link01 } from '@untitled-ui/icons-react'
import { Experience as ExperienceType } from '@/payload-types'
import { getYearFromDateString } from '@/app/(frontend)/utils/date'
import { POSITION_LABELS, TAG_LABELS } from '../../utils/mappings'

export const Experience = ({
  position,
  company,
  companyUrl,
  dateFrom,
  dateTo,
  location,
  description,
  tags,
  currentlyWorking,
}: Partial<ExperienceType>) => {
  const HeaderWrapper = companyUrl ? 'a' : 'div'
  const isCurrentlyWorking = currentlyWorking || !dateTo
  const dateFromYears = getYearFromDateString(dateFrom)
  const dateToYears = dateTo ? getYearFromDateString(dateTo) : null
  const positionLabel = position ? POSITION_LABELS[position] : null

  return (
    <article
      itemScope
      itemType="https://schema.org/OrganizationRole"
      className="flex gap-x-10 p-5 max-w-[558px] w-full group border-1 rounded-xl border-transparent hover:border-white/5 hover:bg-[rgba(48,75,71,0.05)] transition-all justify-between"
    >
      <div className="text-xs text-tertiary font-semibold leading-6">
        <time dateTime={dateFrom}>
          {dateFromYears} {dateToYears && `— ${dateToYears}`}
        </time>

        {isCurrentlyWorking && <span className="uppercase">— Present</span>}
      </div>

      <div className="flex flex-col flex-1 max-w-[372px] w-full">
        <div className="font-medium mb-3">
          <HeaderWrapper
            {...(companyUrl
              ? { href: companyUrl, target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="inline-flex gap-x-2 mb-1 group-hover:text-highlight"
          >
            <h3 itemProp="roleName">{positionLabel}</h3>
            <span
              itemProp="memberOf"
              className="before:content-[''] before:inline-block gap-2 inline-flex items-center before:w-[3px] before:h-[3px] before:bg-current before:rounded-full"
            >
              {company}
            </span>
            {companyUrl && <Link01 className="text-white w-4 ml-0.5" aria-hidden="true" />}
          </HeaderWrapper>
          <p itemProp="location" className="text-secondary">
            {location}
          </p>
        </div>

        <p itemProp="description" className="text-sm text-primary leading-6 mb-5">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <footer>
            <ul className="flex gap-x-1.5 gap-y-2.5 flex-wrap" aria-label="Skills and technologies">
              {tags.map((tag) => (
                <Tag key={tag} label={TAG_LABELS[tag]} />
              ))}
            </ul>
          </footer>
        )}
      </div>
    </article>
  )
}
