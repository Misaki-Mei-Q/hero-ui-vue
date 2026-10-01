import type { InjectionKey } from 'vue'
import type { inputGroupVariants } from '@misaki-mei-q/heroui-vue-styles'

export interface InputGroupContextValue {
  slots: ReturnType<typeof inputGroupVariants>
}

export const INPUT_GROUP_CONTEXT_KEY: InjectionKey<InputGroupContextValue> =
  Symbol('HeroUIInputGroupContext')

