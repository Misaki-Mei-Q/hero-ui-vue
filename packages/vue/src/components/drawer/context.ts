import type { ComputedRef, InjectionKey } from 'vue'
import type { drawerVariants } from '@misaki-mei-q/heroui-vue-styles'

export type DrawerPlacement = 'bottom' | 'top' | 'left' | 'right'
export type DrawerBackdropVariant = 'transparent' | 'opaque' | 'blur'

export interface DrawerContext {
  close: () => void
  open: () => void
  isDismissable: ComputedRef<boolean>
  isEntering: ComputedRef<boolean>
  isExiting: ComputedRef<boolean>
  isOpen: ComputedRef<boolean>
  placement: ComputedRef<DrawerPlacement>
  setOpen: (value: boolean) => void
  setPlacement: (placement: DrawerPlacement) => void
  slots: ComputedRef<ReturnType<typeof drawerVariants>>
}

export const DRAWER_CONTEXT_KEY: InjectionKey<DrawerContext> = Symbol('DrawerContext')
