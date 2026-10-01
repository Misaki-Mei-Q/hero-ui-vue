import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const typographyVariants = tv({
  base: 'text',
  defaultVariants: {
    size: 'base',
    variant: 'default',
  },
  variants: {
    size: {
      base: 'text--base',
      lg: 'text--lg',
      sm: 'text--sm',
      xl: 'text--xl',
      xs: 'text--xs',
    },
    variant: {
      danger: 'text--danger',
      default: 'text--default',
      muted: 'text--muted',
      success: 'text--success',
      warning: 'text--warning',
    },
  },
})

export type TypographyVariants = VariantProps<typeof typographyVariants>