# Calendar

A grid-based date picker. Supports single or multiple selection, locale-aware formatting, disabled/unavailable dates, and customizable headings.

## Import

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { Calendar } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/calendar-basic.vue

:::

### Disabled Dates

:::preview

demo-preview=../demos/calendar-disabled-dates.vue

:::

## API

> Values must be `@internationalized/date` instances such as `CalendarDate`, `CalendarDateTime`, or `ZonedDateTime`.

### Calendar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `DateValue \| DateValue[]` | `undefined` | Controlled selected date(s). |
| `defaultValue` | `DateValue` | `undefined` | Initial uncontrolled selection. |
| `placeholder` | `DateValue` | `undefined` | Date displayed when no selection. |
| `defaultPlaceholder` | `DateValue` | `undefined` | Initial placeholder. |
| `weekStartsOn` | `0 \| 1 \| ... \| 6` | `0` | First day of the week (Sunday = 0). |
| `weekdayFormat` | `'narrow' \| 'short' \| 'long'` | `'narrow'` | Weekday label format. |
| `fixedWeeks` | `boolean` | `false` | Always render six weeks. |
| `maxValue` | `DateValue` | `undefined` | Latest selectable date. |
| `minValue` | `DateValue` | `undefined` | Earliest selectable date. |
| `locale` | `string` | `'en-US'` | Locale used for labels. |
| `numberOfMonths` | `number` | `1` | Months displayed side by side. |
| `disabled` | `boolean` | `false` | Disable interaction. |
| `readonly` | `boolean` | `false` | Read-only selection. |
| `multiple` | `boolean` | `false` | Allow multiple selection. |
| `isDateDisabled` | `(date: DateValue) => boolean` | `undefined` | Mark dates as disabled. |
| `isDateUnavailable` | `(date: DateValue) => boolean` | `undefined` | Mark dates as unavailable. |
| `pagedNavigation` | `boolean` | `false` | Navigate by N months at a time. |
| `preventDeselect` | `boolean` | `false` | Forbid deselecting the current value. |
| `initialFocus` | `boolean` | `false` | Auto-focus on mount. |

### Calendar Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `DateValue \| DateValue[] \| undefined` | Selection change. |
| `update:placeholder` | `DateValue` | Visible month change. |

### Calendar Slots

| Slot | Props | Description |
|------|-------|-------------|
| `heading` | `{ date }` | Custom heading content. |
| `cell` | `{ day }` | Custom day cell content. |
| `prev-icon` | - | Custom previous-month icon. |
| `next-icon` | - | Custom next-month icon. |

## Accessibility

- The calendar uses `role="application"` with full keyboard navigation (Arrow keys, Home/End, PageUp/PageDown).
- Selected dates are announced via `aria-selected`.
- Disabled dates carry `data-disabled`.