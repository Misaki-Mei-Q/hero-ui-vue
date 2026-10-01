import type { ComputedRef, InjectionKey } from 'vue'
import type { modalVariants } from '@misaki-mei/heroui-vue-styles'

export type ModalPlacement = 'auto' | 'top' | 'center' | 'bottom'
export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'cover' | 'full'
export type ModalScroll = 'inside' | 'outside'
export type ModalBackdropVariant = 'transparent' | 'opaque' | 'blur'

export interface ModalContext {
  close: () => void
  open: () => void
  isOpen: ComputedRef<boolean>
  isEntering: ComputedRef<boolean>
  isExiting: ComputedRef<boolean>
  placement: ComputedRef<ModalPlacement>
  setOpen: (value: boolean) => void
  setPlacement: (placement: ModalPlacement) => void
  slots: ComputedRef<ReturnType<typeof modalVariants>>
}

export const MODAL_CONTEXT_KEY: InjectionKey<ModalContext> = Symbol('ModalContext')
