import { getPayload } from 'payload'
import { PostCard } from './components/post-card'
import { Post as PostType } from '@/payload-types'
import payloadConfig from '@/payload.config'

const getPosts = async (): Promise<PostType[]> => {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'posts',
    sort: '-date',
  })

  return docs
}

export const PostsSection = async () => {
  const posts = await getPosts()

  if (!posts || posts.length === 0) {
    return <p>No posts added yet.</p>
  }

  return (
    <section itemScope itemType="https://schema.org/ItemList" className="space-y-15 mt-36">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  )
}
