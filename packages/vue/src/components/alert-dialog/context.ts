import type { ComputedRef, InjectionKey } from 'vue'
import type { alertDialogVariants } from '@misaki-mei/heroui-vue-styles'

export type AlertDialogPlacement = 'auto' | 'top' | 'center' | 'bottom'
export type AlertDialogStatus = 'default' | 'accent' | 'success' | 'warning' | 'danger'
export type AlertDialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'cover'
export type AlertDialogBackdropVariant = 'transparent' | 'opaque' | 'blur'

export interface AlertDialogContext {
  close: () => void
  open: () => void
  isOpen: ComputedRef<boolean>
  placement: ComputedRef<AlertDialogPlacement>
  setPlacement: (placement: AlertDialogPlacement) => void
  slots: ComputedRef<ReturnType<typeof alertDialogVariants>>
}

export const ALERT_DIALOG_CONTEXT_KEY: InjectionKey<AlertDialogContext> = Symbol('AlertDialogContext')
