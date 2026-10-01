<script setup lang="ts">
import { Comment, computed, useSlots } from 'vue'
import { avatarVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface AvatarGroupProps {
  class?: string
  max?: number
  total?: number
}

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  max: 5,
  total: undefined,
})

const slots = computed(() => avatarVariants())
const groupClass = computed(() => composeTwClasses(props.class, slots.value.group()))
const moreClass = computed(() => composeTwClasses('avatar', slots.value.more()))

const childSlots = useSlots()

const childCount = computed(() => {
  if (!childSlots.default) return 0
  const vnodes = childSlots.default()
  return Array.isArray(vnodes) ? vnodes.filter((v) => v.type !== Comment).length : 0
})

const extraCount = computed(() => {
  if (props.total !== undefined) {
    return Math.max(props.total - props.max, 0)
  }
  return Math.max(childCount.value - props.max, 0)
})
</script>

<template>
  <div :class="groupClass" data-slot="avatar-group">
    <slot />
    <div
      v-if="extraCount > 0"
      :class="moreClass"
      data-slot="avatar-group-more"
      aria-label="More users"
    >
      +{{ extraCount }}
    </div>
  </div>
</template>