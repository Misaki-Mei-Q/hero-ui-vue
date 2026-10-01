import type { InjectionKey } from 'vue'
import type { cardVariants } from '@misaki-mei-q/heroui-vue-styles'

export interface CardContext {
  slots: ReturnType<typeof cardVariants>
}

export const CARD_CONTEXT_KEY: InjectionKey<CardContext> = Symbol('CardContext')
