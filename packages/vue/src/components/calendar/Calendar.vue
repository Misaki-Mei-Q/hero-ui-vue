<script setup lang="ts">
import { computed } from 'vue'
import type { DateValue } from '@internationalized/date'
import { Calendar } from 'radix-vue/namespaced'
import { calendarVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface CalendarProps {
  class?: string
  modelValue?: DateValue | DateValue[] | undefined
  defaultValue?: DateValue
  defaultPlaceholder?: DateValue
  placeholder?: DateValue
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  weekdayFormat?: 'narrow' | 'short' | 'long'
  fixedWeeks?: boolean
  maxValue?: DateValue
  minValue?: DateValue
  locale?: string
  numberOfMonths?: number
  disabled?: boolean
  readonly?: boolean
  multiple?: boolean
  isDateDisabled?: (date: DateValue) => boolean
  isDateUnavailable?: (date: DateValue) => boolean
  pagedNavigation?: boolean
  preventDeselect?: boolean
  initialFocus?: boolean
}

const props = withDefaults(defineProps<CalendarProps>(), {
  weekStartsOn: 0,
  weekdayFormat: 'narrow',
  fixedWeeks: false,
  locale: 'en-US',
  numberOfMonths: 1,
  disabled: false,
  readonly: false,
  multiple: false,
  pagedNavigation: false,
  preventDeselect: false,
  initialFocus: false,
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [date: DateValue | DateValue[] | undefined]
  'update:placeholder': [date: DateValue]
}>()

const slots = computed(() => calendarVariants())
const baseClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const headerClass = computed(() => slots.value.header())
const headingClass = computed(() => slots.value.heading())
const navButtonClass = computed(() => slots.value.navButton())
const navButtonIconClass = computed(() => slots.value.navButtonIcon())
const gridClass = computed(() => slots.value.grid())
const gridHeaderClass = computed(() => slots.value.gridHeader())
const gridBodyClass = computed(() => slots.value.gridBody())
const gridRowClass = computed(() => slots.value.gridRow())
const headerCellClass = computed(() => slots.value.headerCell())
const cellClass = computed(() => slots.value.cell())

function onUpdateModelValue(value: DateValue | DateValue[] | undefined) {
  emit('update:modelValue', value)
}

function onUpdatePlaceholder(value: DateValue) {
  emit('update:placeholder', value)
}
</script>

<template>
  <Calendar.Root
    :class="baseClass"
    :model-value="props.modelValue"
    :default-value="props.defaultValue"
    :default-placeholder="props.defaultPlaceholder"
    :placeholder="props.placeholder"
    :week-starts-on="props.weekStartsOn"
    :weekday-format="props.weekdayFormat"
    :fixed-weeks="props.fixedWeeks"
    :max-value="props.maxValue"
    :min-value="props.minValue"
    :locale="props.locale"
    :number-of-months="props.numberOfMonths"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :multiple="props.multiple"
    :is-date-disabled="props.isDateDisabled"
    :is-date-unavailable="props.isDateUnavailable"
    :paged-navigation="props.pagedNavigation"
    :prevent-deselect="props.preventDeselect"
    :initial-focus="props.initialFocus"
    data-slot="calendar"
    @update:model-value="onUpdateModelValue"
    @update:placeholder="onUpdatePlaceholder"
  >
<template #default="slotScope">
      <Calendar.Header :class="headerClass" data-slot="calendar-header">
        <Calendar.Prev :class="navButtonClass" data-slot="calendar-prev">
          <slot name="prev-icon">
            <svg
              :class="navButtonIconClass"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M10 4l-3 4 3 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </slot>
        </Calendar.Prev>
        <Calendar.Heading :class="headingClass" data-slot="calendar-heading">
          <slot name="heading" :date="slotScope.date">{{ (slotScope.date as DateValue).toString() }}</slot>
        </Calendar.Heading>
        <Calendar.Next :class="navButtonClass" data-slot="calendar-next">
          <slot name="next-icon">
            <svg
              :class="navButtonIconClass"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M6 4l3 4-3 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </slot>
        </Calendar.Next>
      </Calendar.Header>

      <Calendar.Grid :class="gridClass" data-slot="calendar-grid">
        <Calendar.GridHead :class="gridHeaderClass" data-slot="calendar-grid-header">
          <Calendar.GridRow :class="gridRowClass" data-slot="calendar-grid-row">
            <Calendar.HeadCell
              v-for="(day, idx) in slotScope.weekDays"
              :key="`head-${idx}`"
              :class="headerCellClass"
              data-slot="calendar-header-cell"
            >
              {{ day }}
            </Calendar.HeadCell>
          </Calendar.GridRow>
        </Calendar.GridHead>
        <Calendar.GridBody :class="gridBodyClass" data-slot="calendar-grid-body">
          <Calendar.GridRow
            v-for="(week, wIdx) in slotScope.grid"
            :key="`row-${wIdx}`"
            :class="gridRowClass"
            data-slot="calendar-grid-row"
          >
            <Calendar.Cell
              v-for="(day, dIdx) in week"
              :key="`cell-${wIdx}-${dIdx}`"
              :class="cellClass"
              :date="day as DateValue"
              data-slot="calendar-cell"
            >
              <Calendar.CellTrigger
                :day="day as DateValue"
                :month="slotScope.date as DateValue"
                data-slot="cell-trigger"
              >
                <slot name="cell" :day="day">
                  {{ (day as DateValue).day }}
                </slot>
              </Calendar.CellTrigger>
            </Calendar.Cell>
          </Calendar.GridRow>
        </Calendar.GridBody>
      </Calendar.Grid>
    </template>
  </Calendar.Root>
</template>