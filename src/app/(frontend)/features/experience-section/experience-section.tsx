export const dynamic = 'force-static'

import payloadConfig from '@/payload.config'
import { ExperienceCard } from './components/experience-card'
import { Experience as ExperienceType } from '@/payload-types'
import { getPayload } from 'payload'

const getExperiences = async (): Promise<ExperienceType[]> => {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'experience',
    sort: '-dateFrom',
  })

  return docs
}

export const ExperienceSection = async () => {
  const experiences = await getExperiences()

  if (!experiences || experiences.length === 0) {
    return <p>No experience added yet.</p>
  }

  return (
    <section itemScope itemType="https://schema.org/ItemList" className="group/experience">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </section>
  )
}
