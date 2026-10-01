<script setup lang="ts">
import { computed } from 'vue'
import { toolbarVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface ToolbarProps {
  class?: string
  isAttached?: boolean
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<ToolbarProps>(), {
  isAttached: false,
  orientation: 'horizontal',
})

const toolbarClass = computed(() =>
  composeTwClasses(
    props.class,
    toolbarVariants({
      isAttached: props.isAttached,
      orientation: props.orientation,
    }),
  ),
)
</script>

<template>
  <div
    :aria-orientation="props.orientation"
    :class="toolbarClass"
    :data-orientation="props.orientation"
    data-slot="toolbar"
    role="toolbar"
  >
    <slot />
  </div>
</template>
