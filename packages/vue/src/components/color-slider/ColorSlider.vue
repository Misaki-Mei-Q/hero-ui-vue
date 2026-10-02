<script setup lang="ts">
import { computed, ref } from 'vue'
import { colorSliderVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

type ColorSliderChannel = 'hue' | 'saturation' | 'lightness' | 'alpha'

interface ColorSliderProps {
  class?: string
  modelValue?: number
  defaultValue?: number
  channel?: ColorSliderChannel
  hue?: number
  saturation?: number
  lightness?: number
  alpha?: number
  orientation?: 'horizontal' | 'vertical'
  min?: number
  max?: number
  step?: number
  label?: string
  showOutput?: boolean
  isDisabled?: boolean
}

const props = withDefaults(defineProps<ColorSliderProps>(), {
  channel: 'hue',
  modelValue: undefined,
  defaultValue: undefined,
  hue: 0,
  saturation: 100,
  lightness: 50,
  alpha: 1,
  orientation: 'horizontal',
  min: undefined,
  max: undefined,
  step: undefined,
  label: undefined,
  showOutput: true,
  isDisabled: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

const slots = computed(() => colorSliderVariants())
const baseClass = computed(() =>
  composeTwClasses(
    props.class,
    (slots.value as unknown as { base: () => string }).base(),
  ),
)
const trackClass = computed(() => (slots.value as unknown as { track: () => string }).track())
const thumbClass = computed(() => (slots.value as unknown as { thumb: () => string }).thumb())
const outputClass = computed(() => (slots.value as unknown as { output: () => string }).output())

const resolvedMax = computed(() => {
  if (props.max !== undefined) return props.max
  if (props.channel === 'hue') return 360
  if (props.channel === 'alpha') return 1
  return 100
})
const resolvedMin = computed(() => props.min ?? 0)
const resolvedStep = computed(() => {
  if (props.step !== undefined) return props.step
  return props.channel === 'alpha' ? 0.01 : 1
})

const internalValue = ref(props.defaultValue ?? resolvedMin.value)
const value = computed(() => props.modelValue ?? internalValue.value)

const percent = computed(() => {
  const range = resolvedMax.value - resolvedMin.value
  if (range <= 0) return 0
  return Math.max(0, Math.min(100, ((value.value - resolvedMin.value) / range) * 100))
})

const direction = computed(() =>
  props.orientation === 'vertical' ? 'to top' : 'to right',
)

const opaqueColor = computed(
  () => `hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%)`,
)

const gradient = computed(() => {
  switch (props.channel) {
    case 'hue':
      return `linear-gradient(${direction.value}, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`
    case 'saturation':
      return `linear-gradient(${direction.value}, hsl(${props.hue}, 0%, ${props.lightness}%), hsl(${props.hue}, 100%, ${props.lightness}%))`
    case 'lightness':
      return `linear-gradient(${direction.value}, hsl(${props.hue}, ${props.saturation}%, 0%), hsl(${props.hue}, ${props.saturation}%, 50%), hsl(${props.hue}, ${props.saturation}%, 100%))`
    case 'alpha':
    default:
      return `linear-gradient(${direction.value}, transparent, ${opaqueColor.value})`
  }
})

const checkerboard = 'repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%) 50% / 16px 16px'

const trackStyle = computed(() => {
  let start = 'transparent'
  let end = 'transparent'
  switch (props.channel) {
    case 'hue':
      start = 'hsl(0, 100%, 50%)'
      end = 'hsl(0, 100%, 50%)'
      break
    case 'saturation':
      start = `hsl(${props.hue}, 0%, ${props.lightness}%)`
      end = `hsl(${props.hue}, 100%, ${props.lightness}%)`
      break
    case 'lightness':
      start = `hsl(${props.hue}, ${props.saturation}%, 0%)`
      end = `hsl(${props.hue}, ${props.saturation}%, 100%)`
      break
    case 'alpha':
    default:
      start = 'transparent'
      end = opaqueColor.value
      break
  }
  return {
    background: `${gradient.value}, ${checkerboard}`,
    '--track-start-color': start,
    '--track-end-color': end,
  }
})

const thumbStyle = computed(() => ({
  backgroundColor: opaqueColor.value,
  ...(props.orientation === 'vertical'
    ? {
        left: '50%',
        bottom: `${percent.value}%`,
        transform: 'translate(-50%, 50%)',
      }
    : {
        left: `${percent.value}%`,
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }),
}))

const displayValue = computed(() => {
  if (props.channel === 'hue') return `${Math.round(value.value)}°`
  if (props.channel === 'alpha') return `${Math.round(value.value * 100)}%`
  return `${Math.round(value.value)}%`
})

const focused = ref(false)

function onChange(event: Event) {
  if (props.isDisabled) return
  const next = Number((event.target as HTMLInputElement).value)
  if (props.modelValue === undefined) internalValue.value = next
  emit('update:modelValue', next)
  emit('change', next)
}
</script>

<template>
  <div
    :class="baseClass"
    :data-disabled="dataAttr(props.isDisabled || undefined)"
    :data-orientation="props.orientation"
    data-slot="color-slider"
  >
    <label v-if="props.label" data-slot="label">{{ props.label }}</label>

    <output
      v-if="props.showOutput"
      :class="outputClass"
      data-slot="color-slider-output"
    >
      <slot name="output" :value="value" :channel="props.channel">
        {{ displayValue }}
      </slot>
    </output>

    <div
      :class="trackClass"
      data-slot="color-slider-track"
      :style="trackStyle"
    >
      <span
        :class="thumbClass"
        :data-focus-visible="dataAttr(focused)"
        :data-disabled="dataAttr(props.isDisabled || undefined)"
        data-slot="color-slider-thumb"
        :style="thumbStyle"
      />
      <input
        type="range"
        class="absolute inset-0 h-full w-full cursor-[var(--cursor-interactive)] opacity-0"
        :min="resolvedMin"
        :max="resolvedMax"
        :step="resolvedStep"
        :value="value"
        :disabled="props.isDisabled"
        :aria-label="props.label ?? `${props.channel} slider`"
        data-slot="color-slider-input"
        @input="onChange"
        @change="onChange"
        @focus="focused = true"
        @blur="focused = false"
      >
    </div>
  </div>
</template>
