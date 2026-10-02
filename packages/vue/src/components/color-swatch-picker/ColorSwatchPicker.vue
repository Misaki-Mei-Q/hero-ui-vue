<script setup lang="ts">
import { computed, ref } from 'vue'
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
  label?: string
}

const props = withDefaults(defineProps<ColorSwatchPickerProps>(), {
  colors: () => [],
  layout: 'grid',
  size: 'md',
  variant: 'circle',
  isDisabled: undefined,
  label: 'Color swatch picker',
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
const swatchClass = computed(() => (slots.value as unknown as { swatch: () => string }).swatch())
const indicatorClass = computed(
  () => (slots.value as unknown as { indicator: () => string }).indicator(),
)

const internalValue = ref(props.defaultValue)
const currentValue = computed(() =>
  props.modelValue !== undefined ? props.modelValue : internalValue.value,
)

function isSelected(color: string) {
  return currentValue.value === color
}

function hexToRgb(color: string) {
  const value = color.trim().replace(/^#/, '')
  let hex = value
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => `${char}${char}`)
      .join('')
  }
  if (hex.length === 8) hex = hex.slice(0, 6)
  if (hex.length !== 6) return null
  const parsed = Number.parseInt(hex, 16)
  if (Number.isNaN(parsed)) return null
  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255,
  }
}

function isLightColor(color: string) {
  const rgb = hexToRgb(color)
  if (!rgb) return false
  const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255
  return luminance > 0.5
}

function selectColor(color: string) {
  if (props.isDisabled) return
  if (props.modelValue === undefined) internalValue.value = color
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
    :aria-label="props.label"
  >
    <button
      v-for="color in props.colors"
      :key="color"
      type="button"
      :class="itemClass"
      :style="{ '--color-swatch-current': color }"
      :data-selected="isSelected(color) ? 'true' : 'false'"
      :aria-selected="isSelected(color)"
      :aria-label="color"
      :disabled="props.isDisabled"
      data-slot="color-swatch-picker-item"
      role="option"
      @click="selectColor(color)"
    >
      <span
        :class="swatchClass"
        :style="{ backgroundColor: color }"
        data-slot="color-swatch-picker-swatch"
      />
      <span
        :class="indicatorClass"
        :data-light-color="isLightColor(color) ? 'true' : undefined"
        data-slot="color-swatch-picker-indicator"
        aria-hidden="true"
      >
        <svg
          aria-hidden="true"
          data-slot="color-swatch-picker-checkmark"
          fill="none"
          role="presentation"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 12 12"
        >
          <polyline points="2.5 6 5 8.5 9.5 3" />
        </svg>
      </span>
    </button>
  </div>
</template>
