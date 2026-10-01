<script setup lang="ts">
import { computed } from 'vue'
import { meterVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface MeterProps {
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

const props = withDefaults(defineProps<MeterProps>(), {
  disabled: undefined,
  isDisabled: undefined,
  maxValue: 100,
  minValue: 0,
  showValueLabel: true,
  value: 0,
})

const slots = computed(() => meterVariants({ color: props.color, size: props.size }))
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const percentage = computed(() => {
  const range = props.maxValue - props.minValue
  if (range <= 0) return 0
  return Math.min(100, Math.max(0, ((props.value - props.minValue) / range) * 100))
})
const valueText = computed(() => `${Math.round(percentage.value)}%`)
const meterClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-valuemax="props.maxValue"
    :aria-valuemin="props.minValue"
    :aria-valuenow="props.value"
    :aria-valuetext="valueText"
    :class="meterClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    data-slot="meter"
    role="meter"
  >
    <span v-if="props.label || $slots.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </span>
    <span v-if="props.showValueLabel" :class="slots.output()" data-slot="meter-output">
      <slot name="output">{{ valueText }}</slot>
    </span>
    <div :class="slots.track()" data-slot="meter-track">
      <div :class="slots.fill()" :style="{ width: `${percentage}%` }" data-slot="meter-fill" />
    </div>
  </div>
</template>
