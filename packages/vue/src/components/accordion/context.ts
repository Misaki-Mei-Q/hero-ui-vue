import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { accordionVariants } from '@misaki-mei-q/heroui-vue-styles'

export interface AccordionContext {
  disabled: ComputedRef<boolean | undefined>
  hideSeparator: ComputedRef<boolean | undefined>
  isExpanded: (value: string) => boolean
  slots: ReturnType<typeof accordionVariants>
  toggle: (value: string) => void
}

export interface AccordionItemContext {
  disabled: ComputedRef<boolean | undefined>
  expanded: ComputedRef<boolean>
  triggerId: string
  panelId: string
  value: Ref<string>
}

export const ACCORDION_CONTEXT_KEY: InjectionKey<AccordionContext> = Symbol('AccordionContext')
export const ACCORDION_ITEM_CONTEXT_KEY: InjectionKey<AccordionItemContext> = Symbol('AccordionItemContext')
