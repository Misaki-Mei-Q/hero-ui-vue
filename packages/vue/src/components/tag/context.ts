import type { InjectionKey } from 'vue'
import type { tagVariants } from '@misaki-mei/heroui-vue-styles'

export interface TagContext {
  remove?: () => void
  slots: ReturnType<typeof tagVariants>
}

export const TAG_CONTEXT_KEY: InjectionKey<TagContext> = Symbol('TagContext')
