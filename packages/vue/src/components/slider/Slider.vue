<script setup lang="ts">
import { computed } from 'vue'
import {
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from 'radix-vue'
import type { SliderRootProps } from 'radix-vue'
import { sliderVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

type SliderOrientation = 'horizontal' | 'vertical'

type SliderValue = number | number[]

interface SliderMark {
  value: number
  label: string
}

interface SliderProps {
  as?: string
  class?: string
  label?: string
  name?: string
  modelValue?: SliderValue
  defaultValue?: SliderValue
  minValue?: number
  maxValue?: number
  step?: number
  orientation?: SliderOrientation
  disabled?: boolean
  isDisabled?: boolean
  fillOffset?: number
  showSteps?: boolean
  showTooltip?: boolean
  marks?: SliderMark[]
  formatOptions?: Intl.NumberFormatOptions
  getValue?: (value: SliderValue) => string
  tooltipProps?: Record<string, unknown>
}

const props = withDefaults(defineProps<SliderProps>(), {
  orientation: 'horizontal',
  minValue: 0,
  maxValue: 100,
  step: 1,
  fillOffset: 0,
  showSteps: false,
  showTooltip: false,
  marks: () => [] as SliderMark[],
  disabled: undefined,
  isDisabled: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: SliderValue]
  change: [value: SliderValue]
  'change-end': [value: SliderValue]
}>()

const slots = computed(() => sliderVariants())
const finalIsDisabled = computed(
  () => props.disabled ?? props.isDisabled ?? false,
)

function toArray(v: SliderValue | undefined, fallback: number): number[] {
  if (v === undefined) return [fallback]
  return Array.isArray(v) ? v : [v]
}

const normalisedValue = computed(() =>
  toArray(props.modelValue ?? props.defaultValue, 0),
)

const numberFormatter = computed<Intl.NumberFormat | null>(() => {
  if (!props.formatOptions) return null
  try {
    return new Intl.NumberFormat(undefined, props.formatOptions)
  } catch {
    return null
  }
})

function formatNumber(value: number): string {
  if (numberFormatter.value) {
    try {
      return numberFormatter.value.format(value)
    } catch {
      /* ignore */
    }
  }
  return `${value}`
}

const valueLabel = computed(() => {
  if (props.getValue) {
    const v = props.modelValue ?? props.defaultValue ?? 0
    return props.getValue(v)
  }
  return normalisedValue.value.map(formatNumber).join(' – ')
})

const rootProps = computed<SliderRootProps>(() => ({
  name: props.name,
  modelValue: Array.isArray(props.modelValue)
    ? props.modelValue
    : props.modelValue !== undefined
      ? [props.modelValue]
      : undefined,
  defaultValue: Array.isArray(props.defaultValue)
    ? props.defaultValue
    : props.defaultValue !== undefined
      ? [props.defaultValue]
      : undefined,
  min: props.minValue,
  max: props.maxValue,
  step: props.step,
  orientation: props.orientation,
  disabled: finalIsDisabled.value,
  inverted: false,
}))

function onUpdateModelValue(payload: number[] | undefined) {
  const arr = payload ?? []
  const next: SliderValue = arr.length === 1 ? arr[0]! : arr
  emit('update:modelValue', next)
  emit('change', next)
}

function onValueCommit(payload: number[]) {
  const next: SliderValue = payload.length === 1 ? payload[0]! : payload
  emit('update:modelValue', next)
  emit('change-end', next)
}

const baseClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const outputClass = computed(() => slots.value.output())
const trackClass = computed(() => slots.value.track())
const fillClass = computed(() => slots.value.fill())
const thumbClass = computed(() => slots.value.thumb())
const marksClass = computed(() => slots.value.marks())

const hasSteps = computed(() => props.showSteps || props.marks.length > 0)
const totalSteps = computed(() => {
  const range = props.maxValue - props.minValue
  if (range <= 0 || props.step <= 0) return 0
  return Math.round(range / props.step)
})

function stepStyle(index: number): Record<string, string> {
  const total = totalSteps.value
  if (total <= 0) return {}
  const offset = props.fillOffset
  const start = offset > 0 ? offset : props.minValue
  const usable = props.maxValue - start
  if (usable <= 0) return {}
  const ratio = (index * props.step * 100) / usable
  if (props.orientation === 'vertical') {
    return { bottom: `calc(${ratio}% )` }
  }
  return { left: `calc(${ratio}% )` }
}

function stepInRange(index: number): boolean {
  const value = props.minValue + index * props.step
  const arr = normalisedValue.value
  if (arr.length === 1) {
    if (props.fillOffset > 0) {
      return value >= props.fillOffset && value <= arr[0]!
    }
    return value <= arr[0]!
  }
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return value >= min && value <= max
}
</script>

<template>
  <SliderRoot
    v-bind="rootProps"
    :class="baseClass"
    :data-disabled="dataAttr(finalIsDisabled || undefined)"
    :data-orientation="props.orientation"
    data-slot="slider"
    @update:model-value="onUpdateModelValue"
    @value-commit="onValueCommit"
  >
    <div v-if="props.label || $slots.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </div>

    <span
      v-if="props.label || $slots.label"
      :class="outputClass"
      :data-orientation="props.orientation"
      data-slot="slider-output"
    >
      <slot name="output">{{ valueLabel }}</slot>
    </span>

    <SliderTrack :class="trackClass" data-slot="slider-track">
      <SliderRange :class="fillClass" data-slot="slider-fill" />
    </SliderTrack>

    <SliderThumb
      v-for="(value, index) in normalisedValue"
      :key="`${value}-${index}`"
      :class="thumbClass"
      data-slot="slider-thumb"
    >
      <slot name="thumb" :value="value" :index="index" />
    </SliderThumb>

    <div
      v-if="hasSteps"
      :class="marksClass"
      :data-orientation="props.orientation"
      data-slot="slider-marks"
    >
      <span
        v-for="index in totalSteps + 1"
        :key="`step-${index - 1}`"
        :style="stepStyle(index - 1)"
        :data-in-range="dataAttr(stepInRange(index - 1))"
        data-slot="slider-step"
      />
    </div>

    <span
      v-if="props.marks.length > 0"
      :class="marksClass"
      :data-orientation="props.orientation"
      data-slot="slider-marks-labels"
    >
      <span
        v-for="mark in props.marks"
        :key="`mark-${mark.value}`"
        :data-value="mark.value"
        data-slot="slider-mark"
      >
        {{ mark.label }}
      </span>
    </span>
  </SliderRoot>
</template>