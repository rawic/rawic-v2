import payloadConfig from '@/payload.config'
import { Experience } from '../../components/experience'
import { getPayload } from 'payload'

const getExperiences = async () => {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'experience',
    sort: '-dateFrom',
  })

  return docs
}

export const ExperienceSection = async () => {
  const experiences = await getExperiences()

  return (
    <section itemScope itemType="https://schema.org/ItemList" className="space-y-16">
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          position={experience.position}
          company={experience.company}
          companyUrl={experience.companyUrl}
          dateFrom={experience.dateFrom}
          dateTo={experience.dateTo}
          location={experience.location}
          description={experience.description}
          tags={experience.tags}
          currentlyWorking={experience.currentlyWorking}
        />
      ))}
    </section>
  )
}
