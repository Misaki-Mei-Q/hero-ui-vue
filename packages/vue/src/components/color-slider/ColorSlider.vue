<script setup lang="ts">
import { computed } from 'vue'
import { colorSliderVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface ColorSliderProps {
  class?: string
  modelValue?: number
  defaultValue?: number
  channel?: 'hue' | 'saturation' | 'lightness' | 'alpha'
  saturation?: number
  lightness?: number
  alpha?: number
  isDisabled?: boolean
}

const props = withDefaults(defineProps<ColorSliderProps>(), {
  channel: 'hue',
  modelValue: undefined,
  defaultValue: 0,
  saturation: 100,
  lightness: 50,
  alpha: 1,
  isDisabled: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

const slots = computed(() => colorSliderVariants())
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()))
const trackClass = computed(() => (slots.value as unknown as { track: () => string }).track())
const thumbClass = computed(() => (slots.value as unknown as { thumb: () => string }).thumb())
const outputClass = computed(() => (slots.value as unknown as { output: () => string }).output())

const value = computed(() => props.modelValue ?? props.defaultValue)

const gradient = computed(() => {
  if (props.channel === 'hue') {
    return 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
  }
  if (props.channel === 'saturation') {
    return `linear-gradient(to right, hsl(${0}, 0%, ${props.lightness}%), hsl(${0}, 100%, ${props.lightness}%))`
  }
  if (props.channel === 'lightness') {
    return `linear-gradient(to right, #000, hsl(${0}, ${props.saturation}%, 50%), #fff)`
  }
  return `linear-gradient(to right, transparent, hsl(${0}, ${props.saturation}%, ${props.lightness}%))`
})

function onChange(event: Event) {
  if (props.isDisabled) return
  const next = Number((event.target as HTMLInputElement).value)
  emit('update:modelValue', next)
  emit('change', next)
}
</script>

<template>
  <div :class="baseClass" :data-disabled="dataAttr(props.isDisabled || undefined)" data-slot="color-slider">
    <div
      :class="trackClass"
      data-slot="color-slider-track"
      :style="{ background: gradient }"
    />
    <input
      type="range"
      min="0"
      :max="props.channel === 'hue' ? 360 : 100"
      step="1"
      :class="outputClass"
      :value="value"
      :disabled="props.isDisabled"
      data-slot="color-slider-output"
      @input="onChange"
    />
    <span
      :class="thumbClass"
      data-slot="color-slider-thumb"
      :style="{ left: `${(value / (props.channel === 'hue' ? 360 : 100)) * 100}%` }"
    />
  </div>
</template>