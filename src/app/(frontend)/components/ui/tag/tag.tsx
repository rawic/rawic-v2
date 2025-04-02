import { TagProps } from './tag.types'
import { tag } from './tag.variants'

export const Tag = ({ label, color, as: Tag = 'li' }: TagProps) => {
  return (
    <Tag className={tag({ color })}>
      <span itemProp="skills">{label}</span>
    </Tag>
  )
}
