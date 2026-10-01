<script setup lang="ts">
import { computed, provide, useSlots } from 'vue'
import { badgeVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { BADGE_CONTEXT_KEY } from './context'
import BadgeLabel from './BadgeLabel.vue'

interface BadgeProps {
  class?: string
  color?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'soft'
}

const props = defineProps<BadgeProps>()
const vueSlots = useSlots()

const slots = computed(() =>
  badgeVariants({
    color: props.color,
    placement: props.placement,
    size: props.size,
    variant: props.variant,
  }),
)

provide(BADGE_CONTEXT_KEY, {
  slots: slots.value,
})

const badgeClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <span :class="badgeClass" data-slot="badge">
    <BadgeLabel v-if="vueSlots.default">
      <slot />
    </BadgeLabel>
  </span>
</template>
