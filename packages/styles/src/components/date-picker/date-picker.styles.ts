import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const datePickerVariants = tv({
  slots: {
    base: 'date-picker',
    popover: 'date-picker__popover',
    trigger: 'date-picker__trigger',
    triggerIndicator: 'date-picker__trigger-indicator',
  },
  variants: {
    fullWidth: {
      false: '',
      true: 'date-picker--full-width',
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
})

export type DatePickerVariants = VariantProps<typeof datePickerVariants>
