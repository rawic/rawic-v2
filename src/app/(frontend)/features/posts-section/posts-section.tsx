import { getPayload } from 'payload'
import { PostCard } from './components/post-card'
import type { Post as PostType } from '@/payload-types'
import payloadConfig from '@/payload.config'

const getPosts = async (): Promise<PostType[]> => {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'posts',
    sort: '-date',
    depth: 1,
  })

  return docs
}

export const PostsSection = async () => {
  const posts = await getPosts()

  if (!posts || posts.length === 0) {
    return <p>No posts added yet.</p>
  }

  console.log(posts)

  return (
    <section itemScope itemType="https://schema.org/ItemList" className="mt-36 group/post">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  )
}
