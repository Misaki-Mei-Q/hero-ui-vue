<script setup lang="ts">
import { computed } from 'vue'
import { colorSwatchPickerVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface ColorSwatchPickerProps {
  class?: string
  modelValue?: string
  defaultValue?: string
  colors?: string[]
  layout?: 'grid' | 'stack'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'circle' | 'square'
  isDisabled?: boolean
}

const props = withDefaults(defineProps<ColorSwatchPickerProps>(), {
  colors: () => [],
  layout: 'grid',
  size: 'md',
  variant: 'circle',
  isDisabled: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

const slots = computed(() =>
  colorSwatchPickerVariants({
    layout: props.layout,
    size: props.size,
    variant: props.variant,
  }),
)
const baseClass = computed(() =>
  composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()),
)
const itemClass = computed(() => (slots.value as unknown as { item: () => string }).item())
const indicatorClass = computed(() => (slots.value as unknown as { indicator: () => string }).indicator())

function selectColor(color: string) {
  if (props.isDisabled) return
  emit('update:modelValue', color)
  emit('change', color)
}
</script>

<template>
  <div
    :class="baseClass"
    :data-disabled="dataAttr(props.isDisabled || undefined)"
    :data-layout="props.layout"
    data-slot="color-swatch-picker"
    role="listbox"
    aria-label="Color picker"
  >
    <button
      v-for="color in props.colors"
      :key="color"
      type="button"
      :class="itemClass"
      :data-selected="props.modelValue === color ? 'true' : 'false'"
      :aria-selected="props.modelValue === color"
      :disabled="props.isDisabled"
      data-slot="color-swatch-picker-item"
      role="option"
      @click="selectColor(color)"
    >
      <span
        :class="indicatorClass"
        data-slot="color-swatch-picker-indicator"
        :style="{ backgroundColor: color }"
      />
    </button>
  </div>
</template>