<script setup lang="ts">
import { computed } from 'vue'
import type { DateValue } from '@internationalized/date'
import { RangeCalendar } from 'radix-vue/namespaced'
import { rangeCalendarVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

export interface DateRange {
  start: DateValue | undefined
  end: DateValue | undefined
}

interface CalendarMonth {
  value: DateValue
  cells: DateValue[]
  rows: DateValue[][]
}

interface RangeCalendarProps {
  class?: string
  modelValue?: DateRange
  defaultValue?: DateRange
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
  isDateDisabled?: (date: DateValue) => boolean
  isDateUnavailable?: (date: DateValue) => boolean
  pagedNavigation?: boolean
  preventDeselect?: boolean
  initialFocus?: boolean
}

const props = withDefaults(defineProps<RangeCalendarProps>(), {
  weekStartsOn: 0,
  weekdayFormat: 'narrow',
  fixedWeeks: false,
  locale: 'en-US',
  numberOfMonths: 1,
  disabled: false,
  readonly: false,
  pagedNavigation: false,
  preventDeselect: false,
  initialFocus: false,
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [range: DateRange]
  'update:placeholder': [date: DateValue]
}>()

const variants = computed(() => rangeCalendarVariants())
const baseClass = computed(() =>
  composeTwClasses(
    props.class,
    props.numberOfMonths > 1
      ? `${(variants.value as unknown as { base: () => string }).base()} range-calendar--multi`
      : (variants.value as unknown as { base: () => string }).base(),
  ),
)
const headerClass = computed(() => (variants.value as unknown as { header: () => string }).header())
const headingClass = computed(() => (variants.value as unknown as { heading: () => string }).heading())
const navButtonClass = computed(() => (variants.value as unknown as { navButton: () => string }).navButton())
const navButtonIconClass = computed(() => (variants.value as unknown as { navButtonIcon: () => string }).navButtonIcon())
const gridClass = computed(() => (variants.value as unknown as { grid: () => string }).grid())
const gridHeaderClass = computed(() => (variants.value as unknown as { gridHeader: () => string }).gridHeader())
const gridBodyClass = computed(() => (variants.value as unknown as { gridBody: () => string }).gridBody())
const gridRowClass = computed(() => (variants.value as unknown as { gridRow: () => string }).gridRow())
const headerCellClass = computed(() => (variants.value as unknown as { headerCell: () => string }).headerCell())
const cellClass = computed(() => (variants.value as unknown as { cell: () => string }).cell())
const cellButtonClass = computed(() => (variants.value as unknown as { cellButton: () => string }).cellButton())

function isOutsideMonth(day: DateValue, month: DateValue) {
  return day.year !== month.year || day.month !== month.month
}

function cellAttrs(day: DateValue, month: DateValue) {
  return {
    'data-outside-month': isOutsideMonth(day, month) ? 'true' : undefined,
  }
}

const formatter = computed(
  () => new Intl.DateTimeFormat(props.locale, { month: 'long', year: 'numeric' }),
)

function monthLabel(date: DateValue) {
  return formatter.value.format(new Date(date.year, date.month - 1, 1))
}

function onUpdateModelValue(range: DateRange) {
  emit('update:modelValue', range)
}

function onUpdatePlaceholder(date: DateValue) {
  emit('update:placeholder', date)
}
</script>

<template>
  <RangeCalendar.Root
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
    :is-date-disabled="props.isDateDisabled"
    :is-date-unavailable="props.isDateUnavailable"
    :paged-navigation="props.pagedNavigation"
    :prevent-deselect="props.preventDeselect"
    :initial-focus="props.initialFocus"
    data-slot="range-calendar"
    @update:model-value="onUpdateModelValue"
    @update:placeholder="onUpdatePlaceholder"
  >
    <template #default="slotScope">
      <div class="range-calendar__months" data-slot="range-calendar-months">
        <div
          v-for="(month, mIdx) in (slotScope.grid as unknown as CalendarMonth[])"
          :key="`month-${mIdx}`"
          class="range-calendar__month"
          data-slot="range-calendar-month"
        >
          <RangeCalendar.Header :class="headerClass" data-slot="range-calendar-header">
            <RangeCalendar.Prev
              v-if="mIdx === 0"
              :class="navButtonClass"
              data-slot="range-calendar-prev"
            >
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
            </RangeCalendar.Prev>
            <RangeCalendar.Heading :class="headingClass" data-slot="range-calendar-heading">
              <slot
                name="heading"
                :date="slotScope.date"
                :month="month.value"
                :heading-value="monthLabel(month.value)"
              >
                {{ monthLabel(month.value) }}
              </slot>
            </RangeCalendar.Heading>
            <RangeCalendar.Next
              v-if="mIdx === (slotScope.grid as unknown as CalendarMonth[]).length - 1"
              :class="navButtonClass"
              data-slot="range-calendar-next"
            >
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
            </RangeCalendar.Next>
          </RangeCalendar.Header>

          <RangeCalendar.Grid as="div" :class="gridClass" data-slot="range-calendar-grid">
            <RangeCalendar.GridHead as="div" :class="gridHeaderClass" data-slot="range-calendar-grid-header">
              <RangeCalendar.GridRow
                as="div"
                role="row"
                :class="gridRowClass"
                data-slot="range-calendar-grid-row"
              >
                <RangeCalendar.HeadCell
                  v-for="(day, idx) in slotScope.weekDays"
                  :key="`head-${idx}`"
                  as="div"
                  :class="headerCellClass"
                  data-slot="range-calendar-header-cell"
                >
                  {{ day }}
                </RangeCalendar.HeadCell>
              </RangeCalendar.GridRow>
            </RangeCalendar.GridHead>
            <RangeCalendar.GridBody as="div" :class="gridBodyClass" data-slot="range-calendar-grid-body">
              <RangeCalendar.GridRow
                v-for="(week, wIdx) in month.rows"
                :key="`row-${wIdx}`"
                as="div"
                role="row"
                :class="gridRowClass"
                data-slot="range-calendar-grid-row"
              >
                <RangeCalendar.Cell
                  v-for="(day, dIdx) in week"
                  :key="`cell-${wIdx}-${dIdx}`"
                  as="div"
                  class="range-calendar__cell-wrapper"
                  :date="day"
                  data-slot="range-calendar-cell"
                >
                  <RangeCalendar.CellTrigger
                    :day="day"
                    :month="month.value"
                    :class="cellClass"
                    v-bind="cellAttrs(day, month.value)"
                    data-slot="cell-trigger"
                  >
                    <span :class="cellButtonClass">
                      <slot name="cell" :day="day">
                        {{ day.day }}
                      </slot>
                    </span>
                  </RangeCalendar.CellTrigger>
                </RangeCalendar.Cell>
              </RangeCalendar.GridRow>
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
        </div>
      </div>
    </template>
  </RangeCalendar.Root>
</template>
