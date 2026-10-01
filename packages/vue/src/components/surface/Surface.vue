<script setup lang="ts">
import { computed } from 'vue'
import { surfaceVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface SurfaceProps {
  as?: string
  class?: string
  variant?: 'default' | 'secondary' | 'tertiary' | 'transparent'
}

const props = withDefaults(defineProps<SurfaceProps>(), {
  as: 'div',
})

const surfaceClass = computed(() =>
  composeTwClasses(props.class, surfaceVariants({ variant: props.variant })),
)
</script>

<template>
  <component :is="props.as" :class="surfaceClass" data-slot="surface">
    <slot />
  </component>
</template>
