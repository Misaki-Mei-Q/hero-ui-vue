<script setup lang="ts">
import { computed } from 'vue'
import { progressBarVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface ProgressBarProps {
  class?: string
  color?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  disabled?: boolean
  isDisabled?: boolean
  label?: string
  maxValue?: number
  minValue?: number
  showValueLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  value?: number
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  disabled: undefined,
  isDisabled: undefined,
  maxValue: 100,
  minValue: 0,
  showValueLabel: true,
})

const slots = computed(() => progressBarVariants({ color: props.color, size: props.size }))
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const isIndeterminate = computed(() => props.value === undefined)
const percentage = computed(() => {
  if (isIndeterminate.value) return undefined
  const range = props.maxValue - props.minValue
  if (range <= 0) return 0
  return Math.min(100, Math.max(0, ((props.value! - props.minValue) / range) * 100))
})
const valueText = computed(() =>
  percentage.value === undefined ? undefined : `${Math.round(percentage.value)}%`,
)
const progressClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-valuemax="props.maxValue"
    :aria-valuemin="props.minValue"
    :aria-valuenow="isIndeterminate ? undefined : props.value"
    :aria-valuetext="valueText"
    :class="progressClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    data-slot="progress-bar"
    role="progressbar"
  >
    <span v-if="props.label || $slots.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </span>
    <span v-if="props.showValueLabel && !isIndeterminate" :class="slots.output()" data-slot="progress-bar-output">
      <slot name="output">{{ valueText }}</slot>
    </span>
    <div :class="slots.track()" data-slot="progress-bar-track">
      <div
        :class="slots.fill()"
        :style="{ width: isIndeterminate ? undefined : `${percentage}%` }"
        data-slot="progress-bar-fill"
      />
    </div>
  </div>
</template>
