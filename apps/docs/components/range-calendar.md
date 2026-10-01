# RangeCalendar

A grid-based date range picker. Supports two months side by side, disabled/unavailable dates, and visual highlighting of the selected range.

## Import

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { RangeCalendar } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/range-calendar-basic.vue

:::

## API

> Values must be `@internationalized/date` instances such as `CalendarDate`.

### RangeCalendar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `DateRange` | `undefined` | Controlled range. |
| `defaultValue` | `DateRange` | `undefined` | Initial uncontrolled range. |
| `placeholder` | `DateValue` | `undefined` | Visible month when no range. |
| `defaultPlaceholder` | `DateValue` | `undefined` | Initial placeholder. |
| `weekStartsOn` | `0 \| 1 \| ... \| 6` | `0` | First day of the week. |
| `weekdayFormat` | `'narrow' \| 'short' \| 'long'` | `'narrow'` | Weekday label format. |
| `fixedWeeks` | `boolean` | `false` | Always render six weeks. |
| `maxValue` | `DateValue` | `undefined` | Latest selectable date. |
| `minValue` | `DateValue` | `undefined` | Earliest selectable date. |
| `locale` | `string` | `'en-US'` | Locale used for labels. |
| `numberOfMonths` | `number` | `1` | Months displayed side by side. |
| `disabled` | `boolean` | `false` | Disable interaction. |
| `readonly` | `boolean` | `false` | Read-only selection. |
| `isDateDisabled` | `(date: DateValue) => boolean` | `undefined` | Mark dates as disabled. |
| `isDateUnavailable` | `(date: DateValue) => boolean` | `undefined` | Mark dates as unavailable. |
| `pagedNavigation` | `boolean` | `false` | Navigate by N months at a time. |
| `preventDeselect` | `boolean` | `false` | Forbid deselecting the current range. |
| `initialFocus` | `boolean` | `false` | Auto-focus on mount. |

### RangeCalendar Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `DateRange` | Range change. |
| `update:placeholder` | `DateValue` | Visible month change. |

### RangeCalendar Type

```ts
interface DateRange {
  start: DateValue | undefined
  end: DateValue | undefined
}
```

### RangeCalendar Slots

| Slot | Props | Description |
|------|-------|-------------|
| `heading` | `{ date }` | Custom heading content. |
| `cell` | `{ day }` | Custom day cell content. |
| `prev-icon` | - | Custom previous-month icon. |
| `next-icon` | - | Custom next-month icon. |

## Accessibility

- The grid uses `role="grid"` with keyboard navigation (Arrow keys, Home/End, PageUp/PageDown).
- Selected start and end cells are highlighted with `data-range-start` and `data-range-end`.