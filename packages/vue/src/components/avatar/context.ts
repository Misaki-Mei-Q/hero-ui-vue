import type { InjectionKey } from 'vue'
import type { avatarVariants } from '@misaki-mei/heroui-vue-styles'

export interface AvatarContext {
  slots: ReturnType<typeof avatarVariants>
}

export const AVATAR_CONTEXT_KEY: InjectionKey<AvatarContext> = Symbol('AvatarContext')
