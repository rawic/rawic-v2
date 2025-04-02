import type { Project as ProjectType } from '@/payload-types'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { FeaturedProjectCard } from './components/featured-project-card'

const getProjects = async (): Promise<ProjectType[]> => {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'projects',
    sort: '-date',
    depth: 1,
  })

  return docs
}

export const FeaturedProjectsSection = async () => {
  const projects = await getProjects()

  if (!projects || projects.length === 0) {
    return <p>No projects added yet.</p>
  }

  return (
    <div className="space-y-15 mb-3 mt-36">
      {projects.map((project) => (
        <FeaturedProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}
