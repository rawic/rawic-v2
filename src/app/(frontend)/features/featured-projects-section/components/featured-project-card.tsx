import Image from 'next/image'
import type { Media, Project as ProjectType } from '@/payload-types'
import { Tag } from '@/app/(frontend)/components/ui/tag'
import { TAG_LABELS } from '@/app/(frontend)/utils/mappings'
import { Star01 } from '@untitled-ui/icons-react'
import { getFormattedDate } from '@/app/(frontend)/utils/date'

export const FeaturedProjectCard = ({
  title,
  image,
  tags,
  projectUrl,
  publishedDate,
}: ProjectType) => {
  const media = image as Media

  return (
    <article className="px-5" itemScope itemType="https://schema.org/CreativeWork">
      <div className="border border-black py-6 px-6 rounded-2xl hover:bg-primary-active transition-colors duration-300">
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
              <Tag label="Live demo" color="secondary" />
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
            className="flex items-center gap-2 text-xs"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <Star01 className="w-4" aria-hidden="true" />
            <meta itemProp="ratingValue" content="0" />
            <meta itemProp="reviewCount" content="0" />0
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
