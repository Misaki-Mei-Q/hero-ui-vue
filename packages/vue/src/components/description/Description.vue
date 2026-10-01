<script setup lang="ts">
import { computed } from 'vue'
import { descriptionVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface DescriptionProps {
  class?: string
}

const props = defineProps<DescriptionProps>()

const descriptionClass = computed(() => {
  const styles = descriptionVariants()
  return composeTwClasses(props.class, styles)
})
</script>

<template>
  <div :class="descriptionClass" data-slot="description">
    <slot />
  </div>
</template>
