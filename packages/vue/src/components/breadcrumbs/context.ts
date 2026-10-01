import type { ComputedRef, InjectionKey, Slot } from 'vue'
import type { breadcrumbsVariants } from '@misaki-mei/heroui-vue-styles'

export interface BreadcrumbsContext {
  isDisabled: ComputedRef<boolean | undefined>
  separator: ComputedRef<'chevron' | 'slash'>
  separatorSlot?: Slot
  slots: ReturnType<typeof breadcrumbsVariants>
}

export const BREADCRUMBS_CONTEXT_KEY: InjectionKey<BreadcrumbsContext> = Symbol('BreadcrumbsContext')
