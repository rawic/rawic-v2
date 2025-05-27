import type { Project as ProjectType } from '@/payload-types'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { FeaturedProjectCard } from './components/featured-project-card'
import { FeaturedProjectsSectionWrapper } from './components/featured-projects-section-wrapper'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN as string

const fetchGitHubStars = async (owner: string, repo: string): Promise<number> => {
  const query = `
    query {
      repository(owner: "${owner}", name: "${repo}") {
        stargazerCount
      }
    }
  `

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const json = await res.json()

  return json?.data?.repository?.stargazerCount ?? 0
}

const getProjects = async (): Promise<ProjectType[] & { stars: number }[]> => {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'projects',
    sort: '-date',
    depth: 1,
  })

  const enriched = await Promise.all(
    docs.map(async (project) => {
      const owner = 'rawic'
      const repo = project.repositoryName || ''

      let stars = 0
      if (repo) {
        try {
          stars = await fetchGitHubStars(owner, repo)
        } catch (err) {
          console.warn(`Failed to fetch stars for ${repo}:`, err)
        }
      }

      return { ...project, stars }
    }),
  )

  return enriched
}

export const FeaturedProjectsSection = async () => {
  const projects = await getProjects()

  if (!projects || projects.length === 0) {
    return <p>No projects added yet.</p>
  }

  return (
    <FeaturedProjectsSectionWrapper>
      {projects.map((project, stars) => (
        <FeaturedProjectCard key={project.id} stars={stars} {...project} />
      ))}
    </FeaturedProjectsSectionWrapper>
  )
}
