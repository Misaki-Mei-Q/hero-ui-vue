import type { InjectionKey } from 'vue'
import type { ComputedRef } from 'vue'
import type { tabsVariants } from '@misaki-mei/heroui-vue-styles'

export interface TabsContext {
  selectedValue: ComputedRef<string | undefined>
  orientation: 'horizontal' | 'vertical'
  slots: ReturnType<typeof tabsVariants>
}

export const TABS_CONTEXT_KEY: InjectionKey<TabsContext> = Symbol('TabsContext')
