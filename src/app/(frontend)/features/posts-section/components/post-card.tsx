import Image from 'next/image'
import type { Media, Post as PostType } from '@/payload-types'
import { getReadingTime } from '@/app/(frontend)/utils/time-to-read'
import { extractPlainTextFromRichText } from '@/app/(frontend)/utils/rich-text'
import { getFormattedDate } from '@/app/(frontend)/utils/date'

export const PostCard = ({
  id,
  title,
  image,
  shortSummary,
  publishedDate,
  content,
  views = 0,
}: PostType) => {
  const media = image as Media
  const plainText = extractPlainTextFromRichText(content.root)
  const readingTime = getReadingTime(plainText)
  const formattedDate = getFormattedDate(publishedDate)

  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className="flex gap-6 max-w-[563px] group-hover/post:opacity-50 transition-all hover:opacity-100 group"
    >
      <div
        className="w-32 h-32 overflow-hidden relative flex-shrink-0 rounded-2xl border border-black"
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <Image
          src={media.url!}
          alt="Blog post thumbnail"
          fill
          className="object-cover p-3 rounded-sm"
        />
        <meta itemProp="url" content={media.url!} />
      </div>

      <div className="flex flex-col gap-3 py-3 justify-between">
        <header>
          <a
            href={`/posts/${id}`}
            className="inline-flex gap-x-2 mb-1 group-hover:text-highlight"
            itemProp="url"
          >
            <h3 className="font-bold leading-5" itemProp="headling">
              {title}
            </h3>
          </a>
        </header>

        <p className="text-primary text-sm leading-[18px]" itemProp="description">
          {shortSummary}
        </p>

        <footer>
          <ul
            className="font-semibold leading-[22px] text-xs text-primary flex"
            aria-label="Post metadata"
          >
            <li>
              <time dateTime={publishedDate} itemProp="datePublished">
                Posted on {formattedDate}
              </time>
            </li>
            <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
              <span itemProp="timeRequired">{readingTime} min read</span>
            </li>
            <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
              <meta itemProp="interactionType" content="https://schema.org/ViewAction" />
              <meta itemProp="userInteractionCount" content={`${views}`} />
              {views} views
            </li>
          </ul>
        </footer>
      </div>
    </article>
  )
}
