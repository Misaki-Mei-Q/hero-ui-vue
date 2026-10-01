<script setup lang="ts">
import { computed } from 'vue'
import { typographyVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface TypographyProps {
  as?: string
  class?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  variant?: 'default' | 'muted' | 'danger' | 'success' | 'warning'
}

const props = withDefaults(defineProps<TypographyProps>(), {
  as: 'span',
})

const typographyClass = computed(() => {
  const styles = typographyVariants({
    size: props.size,
    variant: props.variant,
  })

  return composeTwClasses(props.class, styles)
})
</script>

<template>
  <component :is="props.as" :class="typographyClass" data-slot="text">
    <slot />
  </component>
</template>