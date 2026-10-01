import type { InjectionKey } from 'vue'
import type { fieldsetVariants } from '@misaki-mei/heroui-vue-styles'

export interface FieldsetContextValue {
  slots: ReturnType<typeof fieldsetVariants>
}

export const FIELDSET_CONTEXT_KEY: InjectionKey<FieldsetContextValue> = Symbol('HeroUIFieldsetContext')

