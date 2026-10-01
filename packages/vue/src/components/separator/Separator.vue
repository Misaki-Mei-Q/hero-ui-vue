<script setup lang="ts">
import { computed } from 'vue'
import { separatorVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface SeparatorProps {
  class?: string
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'secondary' | 'tertiary'
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
})

const separatorClass = computed(() => {
  const styles = separatorVariants({
    orientation: props.orientation,
    variant: props.variant,
  })

  return composeTwClasses(props.class, styles)
})
</script>

<template>
  <div
    :aria-orientation="props.orientation"
    :class="separatorClass"
    :data-orientation="props.orientation"
    data-slot="separator"
    role="separator"
  >
    <slot />
  </div>
</template>
