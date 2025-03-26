import { TagProps } from './tag.types'

export const Tag = ({ label, as: Tag = 'li' }: TagProps) => {
  return (
    <Tag className="bg-highlight-bg inline-flex text-highlight font-semibold text-xs leading-6 px-3 py-0.5 rounded-full">
      <span itemProp="skills">{label}</span>
    </Tag>
  )
}
