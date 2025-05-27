import Image from 'next/image'
import type { Media, Project as ProjectType } from '@/payload-types'
import { Tag } from '@/app/(frontend)/components/ui/tag'
import { TAG_LABELS } from '@/app/(frontend)/utils/mappings'
import { Star01, FaceSmile } from '@untitled-ui/icons-react'
import { getFormattedDate } from '@/app/(frontend)/utils/date'

export const FeaturedProjectCard = ({
  title,
  image,
  tags,
  projectUrl,
  publishedDate,
  stars,
}: ProjectType & { stars: number }) => {
  const media = image as Media

  return (
    <article className="px-5 relative group" itemScope itemType="https://schema.org/CreativeWork">
      <div className="group-hover:opacity-100 opacity-0 transition-opacity absolute top-[-1px] right-[19px] w-56 h-56 bg-linear-to-br from-transparent via-highlight-secondary to-transparent rounded-2xl pointer-events-none z-0 " />
      <div className="group-hover:opacity-100 opacity-0 transition-opacity absolute bottom-[-1px] left-[19px] w-56 h-56 bg-linear-to-tl from-transparent via-highlight to-transparent rounded-2xl pointer-events-none z-0" />

      <div className="group-hover:opacity-50 opacity-0 transition-opacity absolute bottom-0 left-0 w-16 h-16 bg-highlight blur-2xl rounded-full pointer-events-none z-10"></div>
      <div className="group-hover:opacity-50 opacity-0 transition-opacity absolute top-0 right-0 w-16 h-16 bg-highlight-secondary blur-2xl rounded-full pointer-events-none z-10"></div>

      <div className="border border-black py-6 px-6 rounded-2xl bg-[#070f1b] hover:bg-[#050c16] transition-colors z-10 relative">
        <div className="group-hover:opacity-40 opacity-0 transition-opacity absolute bottom-0 left-0 w-24 h-24 bg-highlight blur-2xl rounded-full pointer-events-none z-10"></div>
        <div className="group-hover:opacity-40 opacity-0 transition-opacity absolute top-0 right-0 w-24 h-24 bg-highlight-secondary blur-2xl rounded-full pointer-events-none z-10"></div>
        <div
          className="w-full relative h-[100px] overflow-hidden rounded-2xl mb-5"
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <Image src={media.url!} alt={media.alt} fill className="object-cover" />
          <meta itemProp="url" content={media.url!} />
        </div>
        <div className="flex gap-2 justify-between items-center mb-4">
          <h2 className="leading-6 font-medium" itemProp="name">
            {title}
          </h2>
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
              className="inline-block"
            >
              <Tag label="Live demo" color="secondary" hoverable />
            </a>
          )}
        </div>

        <p className="text-primary text-sm leading-6 mb-5 font-medium" itemProp="description">
          Pellentesque ac volutpat libero, ut pulvinar dolor. Morbi vel leo at quam molestie
          tincidunt. Etiam vel orci id nibh tempus varius quis aliquet augue. Vestibulum non ligula
          id metus egestas finibus.
        </p>

        <div className="flex gap-6 mb-5 items-center" aria-label="Project metadata">
          <span
            className="flex items-center gap-2 text-xs group/star"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <Star01 className="w-4 group-hover/star:hidden" aria-hidden="true" />
            <FaceSmile
              className="w-4 hidden group-hover/star:block text-amber-300"
              aria-hidden="true"
            />
            <meta itemProp="ratingValue" content={stars.toString()} />
            <meta itemProp="reviewCount" content={stars.toString()} /> {stars}
          </span>
          <time dateTime={publishedDate} className="text-tertiary text-xs" itemProp="datePublished">
            {getFormattedDate(publishedDate)}
          </time>
        </div>

        {tags && tags.length > 0 && (
          <ul className="flex gap-1.5 flex-wrap" role="list" aria-label="Technology tags">
            {tags &&
              tags.length > 0 &&
              tags.map((tag) => <Tag key={tag} label={TAG_LABELS[tag]} role="listitem" />)}
          </ul>
        )}
      </div>
    </article>
  )
}
