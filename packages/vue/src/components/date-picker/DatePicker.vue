<script setup lang="ts">
import { computed } from 'vue'
import type { DateValue } from '@internationalized/date'
import { DatePicker as DatePickerNS } from 'radix-vue/namespaced'
import { datePickerVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import Calendar from '../calendar/Calendar.vue'

interface DatePickerProps {
  class?: string
  modelValue?: DateValue
  defaultValue?: DateValue
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

const props = withDefaults(defineProps<DatePickerProps>(), {
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
  numberOfMonths: undefined,
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: DateValue | undefined]
  'update:placeholder': [value: DateValue]
  openChange: [value: boolean]
}>()

const slots = computed(() => datePickerVariants())
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()))
const triggerClass = computed(() => (slots.value as unknown as { trigger: () => string }).trigger())
const popoverClass = computed(() => (slots.value as unknown as { popover: () => string }).popover())
const indicatorClass = computed(() => (slots.value as unknown as { triggerIndicator: () => string }).triggerIndicator())

const finalIsDisabled = computed(() => props.isDisabled ?? false)
const finalIsInvalid = computed(() => props.isInvalid ?? false)
const finalIsRequired = computed(() => props.isRequired ?? false)

function onUpdateModelValue(value: DateValue | undefined) {
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
    data-slot="date-picker"
  >
    <label v-if="props.labelText" data-slot="label">
      <slot name="label">{{ props.labelText }}</slot>
    </label>

    <DatePickerNS.Root
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
      data-slot="date-picker-root"
      @update:model-value="onUpdateModelValue"
      @update:placeholder="onUpdatePlaceholder"
      @update:open="onOpenChange"
    >
      <DatePickerNS.Trigger
        :class="triggerClass"
        data-slot="date-picker-trigger"
        as-child
      >
        <slot name="trigger">
          <button
            type="button"
            class="flex w-full items-center gap-2 rounded-field border bg-field px-3 py-2 text-sm shadow-field outline-none"
          >
            <span class="flex-1 text-left">
              {{ props.modelValue?.toString() ?? 'Select a date' }}
            </span>
            <span
              v-if="indicatorClass"
              :class="indicatorClass"
              data-slot="date-picker-trigger-indicator"
              aria-hidden="true"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="3" width="12" height="11" rx="2" />
                <path d="M5 1v3M11 1v3M2 6.5h12" stroke-linecap="round" />
              </svg>
            </span>
          </button>
        </slot>
      </DatePickerNS.Trigger>

      <DatePickerNS.Content
        :class="popoverClass"
        data-slot="date-picker-popover"
      >
        <Calendar
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
          :number-of-months="props.numberOfMonths ?? 1"
        />
      </DatePickerNS.Content>
    </DatePickerNS.Root>
  </div>
</template>