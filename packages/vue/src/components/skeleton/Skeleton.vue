<script setup lang="ts">
import { computed } from 'vue'
import { skeletonVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface SkeletonProps {
  as?: string
  class?: string
  animationType?: 'shimmer' | 'pulse' | 'none'
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  as: 'div',
})

const skeletonClass = computed(() =>
  composeTwClasses(props.class, skeletonVariants({ animationType: props.animationType }).base()),
)
</script>

<template>
  <component :is="props.as" :class="skeletonClass" data-slot="skeleton">
    <slot />
  </component>
</template>
