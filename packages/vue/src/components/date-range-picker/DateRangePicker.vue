<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
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
  open?: boolean
  defaultOpen?: boolean
  modal?: boolean
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
  open: undefined,
  defaultOpen: false,
  modal: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: DateRange]
  'update:placeholder': [value: DateValue]
  'update:open': [value: boolean]
  openChange: [value: boolean]
}>()

const slots = computed(() => dateRangePickerVariants({ fullWidth: props.fullWidth }))
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()))
const triggerClass = computed(() => (slots.value as unknown as { trigger: () => string }).trigger())
const popoverClass = computed(() => (slots.value as unknown as { popover: () => string }).popover())
const indicatorClass = computed(() => (slots.value as unknown as { triggerIndicator: () => string }).triggerIndicator())
const separatorClass = computed(() => (slots.value as unknown as { rangeSeparator: () => string }).rangeSeparator())

const finalIsDisabled = computed(() => props.isDisabled ?? false)
const finalIsInvalid = computed(() => props.isInvalid ?? false)
const finalIsRequired = computed(() => props.isRequired ?? false)

const internalValue = shallowRef<DateRange>(props.modelValue ?? props.defaultValue ?? { start: undefined, end: undefined })

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) internalValue.value = value
  },
)

const resolvedValue = computed(() => props.modelValue ?? internalValue.value)

const openState = shallowRef(props.defaultOpen)

watch(
  () => props.open,
  (value) => {
    if (value !== undefined) openState.value = value
  },
)

const isOpen = computed(() => props.open ?? openState.value)

const dateFormatter = computed(() =>
  new Intl.DateTimeFormat(props.locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...(props.granularity !== 'day'
      ? {
          hour: '2-digit',
          minute: '2-digit',
          ...(props.granularity === 'second' ? { second: '2-digit' } : {}),
        }
      : {}),
  }),
)

function toLocalDate(date: DateValue) {
  return new Date(
    date.year,
    date.month - 1,
    date.day,
    'hour' in date ? date.hour : 0,
    'minute' in date ? date.minute : 0,
    'second' in date ? date.second : 0,
  )
}

const startLabel = computed(() => {
  const start = resolvedValue.value.start
  return start ? dateFormatter.value.format(toLocalDate(start)) : '--'
})

const endLabel = computed(() => {
  const end = resolvedValue.value.end
  return end ? dateFormatter.value.format(toLocalDate(end)) : '--'
})

const hasValue = computed(() => Boolean(resolvedValue.value.start || resolvedValue.value.end))

function onOpenChange(value: boolean) {
  openState.value = value
  emit('update:open', value)
  emit('openChange', value)
}

function onUpdateModelValue(value: DateRange) {
  if (props.modelValue === undefined) internalValue.value = value
  emit('update:modelValue', value)
  if (value.start && value.end) onOpenChange(false)
}

function onUpdatePlaceholder(value: DateValue) {
  emit('update:placeholder', value)
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
      :open="isOpen"
      :modal="props.modal"
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
            <span class="flex-1 text-left">{{ hasValue ? startLabel : 'Select a range' }}</span>
            <span
              v-if="hasValue"
              :class="separatorClass"
              data-slot="date-range-picker-separator"
              aria-hidden="true"
            >
              <slot name="separator">
                <span aria-hidden="true">–</span>
              </slot>
            </span>
            <span v-if="hasValue" class="flex-1 text-left">{{ endLabel }}</span>
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
          :default-value="props.defaultValue"
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
          @update:model-value="onUpdateModelValue"
          @update:placeholder="onUpdatePlaceholder"
        />
      </DateRangePickerNS.Content>
    </DateRangePickerNS.Root>
  </div>
</template>