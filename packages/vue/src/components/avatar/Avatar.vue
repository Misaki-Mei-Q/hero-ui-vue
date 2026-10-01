<script setup lang="ts">
import { computed, provide } from 'vue'
import { avatarVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { AVATAR_CONTEXT_KEY } from './context'

interface AvatarProps {
  class?: string
  color?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'soft'
}

const props = defineProps<AvatarProps>()

const slots = computed(() =>
  avatarVariants({
    color: props.color,
    size: props.size,
    variant: props.variant,
  }),
)

provide(AVATAR_CONTEXT_KEY, {
  slots: slots.value,
})

const avatarClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <span :class="avatarClass" data-slot="avatar">
    <slot />
  </span>
</template>
