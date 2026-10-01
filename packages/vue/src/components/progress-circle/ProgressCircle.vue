<script setup lang="ts">
import { computed } from 'vue'
import { progressCircleVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface ProgressCircleProps {
  class?: string
  color?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  disabled?: boolean
  isDisabled?: boolean
  maxValue?: number
  minValue?: number
  size?: 'sm' | 'md' | 'lg'
  value?: number
}

const props = withDefaults(defineProps<ProgressCircleProps>(), {
  disabled: undefined,
  isDisabled: undefined,
  maxValue: 100,
  minValue: 0,
})

const slots = computed(() => progressCircleVariants({ color: props.color, size: props.size }))
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const isIndeterminate = computed(() => props.value === undefined)
const circumference = 2 * Math.PI * 10
const percentage = computed(() => {
  if (isIndeterminate.value) return undefined
  const range = props.maxValue - props.minValue
  if (range <= 0) return 0
  return Math.min(100, Math.max(0, ((props.value! - props.minValue) / range) * 100))
})
const dashOffset = computed(() =>
  percentage.value === undefined ? circumference * 0.25 : circumference * (1 - percentage.value / 100),
)
const circleClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-valuemax="props.maxValue"
    :aria-valuemin="props.minValue"
    :aria-valuenow="isIndeterminate ? undefined : props.value"
    :class="circleClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    data-slot="progress-circle"
    role="progressbar"
  >
    <svg :class="slots.track()" data-slot="progress-circle-track" viewBox="0 0 24 24">
      <circle
        :class="slots.trackCircle()"
        cx="12"
        cy="12"
        fill="none"
        r="10"
        stroke-width="3"
      />
      <circle
        :class="slots.fillCircle()"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        cx="12"
        cy="12"
        fill="none"
        r="10"
        stroke-linecap="round"
        stroke-width="3"
        transform="rotate(-90 12 12)"
      />
    </svg>
  </div>
</template>
