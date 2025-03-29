import Image from 'next/image'

export const PostCard = () => {
  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className="flex gap-6 max-w-[563px]"
    >
      <div
        className="w-32 h-32 overflow-hidden relative flex-shrink-0"
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <Image
          src="/test5.png"
          alt="Blog post thumbnail"
          fill
          className="object-cover p-3 rounded-sm"
        />
        <meta itemProp="url" content="/test5.png" />
      </div>

      <div className="flex flex-col gap-3 py-3 justify-between">
        <header>
          <h3 className="font-bold leading-5" itemProp="headling">
            Vivamus id eros justo. Mauris ipsum leo, placerat sit amet lacus nec
          </h3>
        </header>

        <p className="text-primary text-sm" itemProp="description">
          Donec placerat mi sed mi pretium, at aliquam.
        </p>

        <footer>
          <ul
            className="font-semibold leading-6 text-xs text-primary flex"
            aria-label="Post metadata"
          >
            <li>
              <time dateTime="2024-01-27" itemProp="datePublished">
                Posted on Jan 27, 2024
              </time>
            </li>
            <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
              <span itemProp="timeRequired">3 min read</span>
            </li>
            <li className="before:content-[''] before:inline-block before:mx-2 inline-flex items-center before:w-1 before:h-1 before:bg-current before:rounded-full">
              <meta itemProp="interactionType" content="https://schema.org/ViewAction" />
              <meta itemProp="userInteractionCount" content="3275" />
              3275 views
            </li>
          </ul>
        </footer>
      </div>
    </article>
  )
}
