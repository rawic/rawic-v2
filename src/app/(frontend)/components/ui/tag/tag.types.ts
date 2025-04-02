import { TagVariants } from './tag.variants'

export type TagProps = {
  label: string
  as?: React.HTMLElementType
} & TagVariants
