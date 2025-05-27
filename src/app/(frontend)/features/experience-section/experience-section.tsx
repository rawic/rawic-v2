export const dynamic = 'force-static'

import payloadConfig from '@/payload.config'
import { ExperienceCard } from './components/experience-card'
import type { Experience as ExperienceType } from '@/payload-types'
import { getPayload } from 'payload'
import { ExperienceSectionWrapper } from './components/experience-section-wrapper'
import { ResumeLink } from '../hero-sidebar/components/resume-link'

const getExperiences = async (): Promise<ExperienceType[]> => {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'experience',
    sort: 'sortOrder',
  })

  return docs
}

export const ExperienceSection = async () => {
  const experiences = await getExperiences()

  if (!experiences || experiences.length === 0) {
    return <p>No experience added yet.</p>
  }

  return (
    <ExperienceSectionWrapper>
      <section itemScope itemType="https://schema.org/ItemList" className="group/experience">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </section>

      <div className="mt-8 px-5">
        <ResumeLink />
      </div>
    </ExperienceSectionWrapper>
  )
}
