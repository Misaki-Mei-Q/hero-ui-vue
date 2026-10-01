<script setup lang="ts">
import { computed } from 'vue'
import { colorSwatchVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface ColorSwatchProps {
  class?: string
  color: string
  shape?: 'circle' | 'square'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<ColorSwatchProps>(), {
  shape: 'circle',
  size: 'md',
})

const slots = computed(() =>
  colorSwatchVariants({ shape: props.shape, size: props.size }),
)
const swatchClass = computed(() =>
  composeTwClasses(props.class, (slots.value as unknown as string)),
)
</script>

<template>
  <span
    :class="swatchClass"
    :style="{ backgroundColor: props.color }"
    :aria-label="`Color swatch: ${props.color}`"
    data-slot="color-swatch"
    :data-shape="props.shape"
    :data-size="props.size"
  />
</template>