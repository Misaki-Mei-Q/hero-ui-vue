import type { ComputedRef, InjectionKey } from 'vue'
import type { disclosureVariants } from '@misaki-mei-q/heroui-vue-styles'

type DisclosureSlots = ReturnType<typeof disclosureVariants>

export interface DisclosureContext {
  isDisabled: ComputedRef<boolean | undefined>
  isExpanded: ComputedRef<boolean>
  slots: ComputedRef<DisclosureSlots>
  toggle: () => void
}

export const DISCLOSURE_CONTEXT_KEY: InjectionKey<DisclosureContext> = Symbol('DisclosureContext')
