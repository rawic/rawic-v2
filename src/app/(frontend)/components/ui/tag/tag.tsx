import { ElementType } from 'react'
import { TagProps } from './tag.types'
import { tag } from './tag.variants'

export const Tag = ({
  label,
  color,
  as: Tag = 'li',
}: TagProps & React.ComponentPropsWithoutRef<ElementType>) => {
  const isListItem = Tag === 'li'

  return (
    <Tag className={tag({ color })} role={isListItem ? 'listitem' : undefined}>
      <span itemProp="skills">{label}</span>
    </Tag>
  )
}
