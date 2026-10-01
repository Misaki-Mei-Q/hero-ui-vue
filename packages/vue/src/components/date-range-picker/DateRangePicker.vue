<script setup lang="ts">
import { computed } from 'vue'
import type { DateValue } from '@internationalized/date'
import { DateRangePicker as DateRangePickerNS } from 'radix-vue/namespaced'
import { dateRangePickerVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import RangeCalendar from '../range-calendar/RangeCalendar.vue'
import type { DateRange } from '../range-calendar/RangeCalendar.vue'

interface DateRangePickerProps {
  class?: string
  modelValue?: DateRange
  defaultValue?: DateRange
  defaultPlaceholder?: DateValue
  placeholder?: DateValue
  locale?: string
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  fullWidth?: boolean
  granularity?: 'day' | 'hour' | 'minute' | 'second'
  hideTimeZone?: boolean
  minValue?: DateValue
  maxValue?: DateValue
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  weekdayFormat?: 'narrow' | 'short' | 'long'
  fixedWeeks?: boolean
  numberOfMonths?: number
  labelText?: string
  isDateDisabled?: (date: DateValue) => boolean
  isDateUnavailable?: (date: DateValue) => boolean
}

const props = withDefaults(defineProps<DateRangePickerProps>(), {
  locale: 'en-US',
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  fullWidth: false,
  granularity: 'day',
  hideTimeZone: false,
  weekStartsOn: undefined,
  weekdayFormat: undefined,
  fixedWeeks: undefined,
  numberOfMonths: 2,
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: DateRange]
  'update:placeholder': [value: DateValue]
  openChange: [value: boolean]
}>()

const slots = computed(() => dateRangePickerVariants())
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()))
const triggerClass = computed(() => (slots.value as unknown as { trigger: () => string }).trigger())
const popoverClass = computed(() => (slots.value as unknown as { popover: () => string }).popover())
const indicatorClass = computed(() => (slots.value as unknown as { triggerIndicator: () => string }).triggerIndicator())
const separatorClass = computed(() => (slots.value as unknown as { rangeSeparator: () => string }).rangeSeparator())

const finalIsDisabled = computed(() => props.isDisabled ?? false)
const finalIsInvalid = computed(() => props.isInvalid ?? false)
const finalIsRequired = computed(() => props.isRequired ?? false)

const triggerLabel = computed(() => {
  if (!props.modelValue) return 'Select a range'
  const start = props.modelValue.start?.toString() ?? '...'
  const end = props.modelValue.end?.toString() ?? '...'
  return start === end ? start : `${start} – ${end}`
})

function onUpdateModelValue(value: DateRange) {
  emit('update:modelValue', value)
}

function onUpdatePlaceholder(value: DateValue) {
  emit('update:placeholder', value)
}

function onOpenChange(value: boolean) {
  emit('openChange', value)
}
</script>

<template>
  <div
    :class="baseClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid || undefined)"
    :data-required="dataAttr(finalIsRequired || undefined)"
    data-slot="date-range-picker"
  >
    <label v-if="props.labelText" data-slot="label">
      <slot name="label">{{ props.labelText }}</slot>
    </label>

    <DateRangePickerNS.Root
      :model-value="props.modelValue"
      :default-value="props.defaultValue"
      :default-placeholder="props.defaultPlaceholder"
      :placeholder="props.placeholder"
      :locale="props.locale"
      :disabled="finalIsDisabled"
      :required="finalIsRequired"
      :granularity="props.granularity"
      :hide-time-zone="props.hideTimeZone"
      :min-value="props.minValue"
      :max-value="props.maxValue"
      :is-date-disabled="props.isDateDisabled"
      :is-date-unavailable="props.isDateUnavailable"
      :week-starts-on="props.weekStartsOn"
      :weekday-format="props.weekdayFormat"
      :fixed-weeks="props.fixedWeeks"
      :number-of-months="props.numberOfMonths"
      data-slot="date-range-picker-root"
      @update:model-value="onUpdateModelValue"
      @update:placeholder="onUpdatePlaceholder"
      @update:open="onOpenChange"
    >
      <DateRangePickerNS.Trigger
        :class="triggerClass"
        data-slot="date-range-picker-trigger"
        as-child
      >
        <slot name="trigger">
          <button
            type="button"
            class="flex w-full items-center gap-2 rounded-field border bg-field px-3 py-2 text-sm shadow-field outline-none"
          >
            <span class="flex-1 text-left">{{ triggerLabel }}</span>
            <span
              v-if="indicatorClass"
              :class="indicatorClass"
              data-slot="date-range-picker-trigger-indicator"
              aria-hidden="true"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="3" width="12" height="11" rx="2" />
                <path d="M5 1v3M11 1v3M2 6.5h12" stroke-linecap="round" />
              </svg>
            </span>
          </button>
        </slot>
      </DateRangePickerNS.Trigger>

      <DateRangePickerNS.Content
        :class="popoverClass"
        data-slot="date-range-picker-popover"
      >
        <RangeCalendar
          :model-value="props.modelValue"
          :default-placeholder="props.defaultPlaceholder ?? props.placeholder"
          :placeholder="props.placeholder"
          :locale="props.locale"
          :week-starts-on="props.weekStartsOn"
          :weekday-format="props.weekdayFormat"
          :fixed-weeks="props.fixedWeeks"
          :max-value="props.maxValue"
          :min-value="props.minValue"
          :is-date-disabled="props.isDateDisabled"
          :is-date-unavailable="props.isDateUnavailable"
          :number-of-months="props.numberOfMonths ?? 2"
        />
      </DateRangePickerNS.Content>
    </DateRangePickerNS.Root>

    <span :class="separatorClass" data-slot="date-range-picker-separator" aria-hidden="true">
      <slot name="separator">
        <span aria-hidden="true">–</span>
      </slot>
    </span>
  </div>
</template>