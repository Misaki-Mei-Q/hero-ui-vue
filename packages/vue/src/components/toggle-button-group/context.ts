import type { InjectionKey } from 'vue'
import type { toggleButtonGroupVariants } from '@misaki-mei/heroui-vue-styles'

export interface ToggleButtonGroupContextValue {
  isDisabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  slots: ReturnType<typeof toggleButtonGroupVariants>
}

export const TOGGLE_BUTTON_GROUP_CONTEXT_KEY: InjectionKey<ToggleButtonGroupContextValue> = Symbol(
  'HeroUIToggleButtonGroupContext',
)

