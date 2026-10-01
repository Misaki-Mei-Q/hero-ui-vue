<script setup lang="ts">
import { computed } from 'vue'
import { textVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface TextProps {
  as?: string
  class?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  variant?: 'default' | 'muted' | 'danger' | 'success' | 'warning'
}

const props = withDefaults(defineProps<TextProps>(), {
  as: 'span',
})

const textClass = computed(() => {
  const styles = textVariants({
    size: props.size,
    variant: props.variant,
  })

  return composeTwClasses(props.class, styles)
})
</script>

<template>
  <component :is="props.as" :class="textClass" data-slot="text">
    <slot />
  </component>
</template>
