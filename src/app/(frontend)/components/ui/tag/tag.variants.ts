import { VariantProps, tv } from 'tailwind-variants'

export const tag = tv({
  base: '',
  variants: {
    color: {
      default:
        'bg-highlight-bg inline-flex text-highlight font-semibold text-xs leading-6 px-3 py-0.5 rounded-full',
      secondary:
        'bg-highlight-secondary-bg inline-flex text-highlight-secondary font-semibold text-xs leading-6 px-3 py-0.5 rounded-full',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

export type TagVariants = VariantProps<typeof tag>
