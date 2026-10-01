import type { InjectionKey } from 'vue'
import type { badgeVariants } from '@misaki-mei/heroui-vue-styles'

export interface BadgeContext {
  slots: ReturnType<typeof badgeVariants>
}

export const BADGE_CONTEXT_KEY: InjectionKey<BadgeContext> = Symbol('BadgeContext')
