import type { ComputedRef, InjectionKey } from 'vue'
import type { paginationVariants } from '@misaki-mei-q/heroui-vue-styles'

type PaginationSlots = ReturnType<typeof paginationVariants>

export interface PaginationContext {
  slots: ComputedRef<PaginationSlots>
}

export const PAGINATION_CONTEXT_KEY: InjectionKey<PaginationContext> = Symbol('PaginationContext')
