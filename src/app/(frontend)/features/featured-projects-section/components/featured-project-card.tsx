import Image from 'next/image'
import type { Media, Project as ProjectType } from '@/payload-types'
import { Tag } from '@/app/(frontend)/components/ui/tag'
import { TAG_LABELS } from '@/app/(frontend)/utils/mappings'
import { Star01 } from '@untitled-ui/icons-react'

export const FeaturedProjectCard = ({ title, image, tags }: ProjectType) => {
  const media = image as Media

  return (
    <div className="py-6 px-10">
      <div className="w-full relative h-[100px] overflow-hidden rounded-2xl mb-5">
        <Image src={media.url!} alt="Project thumbnail" fill className="object-cover" />
      </div>
      <div className="flex gap-2 justify-between items-center mb-4">
        <h2 className="leading-6 font-medium" itemProp="name">
          {title}
        </h2>
        <Tag as="div" label="Live demo" color="secondary" />
      </div>

      <p className="text-primary text-sm leading-6 mb-5 font-medium">
        Pellentesque ac volutpat libero, ut pulvinar dolor. Morbi vel leo at quam molestie
        tincidunt. Etiam vel orci id nibh tempus varius quis aliquet augue. Vestibulum non ligula id
        metus egestas finibus.
      </p>

      <div className="flex gap-6 mb-5 items-center">
        <span className="flex items-center gap-2 text-xs">
          <Star01 className="w-4" />0
        </span>
        <span className="text-tertiary text-xs">January 23 2022</span>
      </div>

      {tags && tags.length > 0 && (
        <ul className="flex gap-1.5 flex-wrap">
          {tags && tags.length > 0 && tags.map((tag) => <Tag key={tag} label={TAG_LABELS[tag]} />)}
        </ul>
      )}
    </div>
  )
}
