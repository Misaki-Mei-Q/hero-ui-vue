# DateRangePicker

A combined input + range calendar widget. The trigger shows the formatted range; clicking opens a popover containing a `RangeCalendar`.

## Import

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DateRangePicker } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/date-range-picker-basic.vue

:::

## API

### DateRangePicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `DateRange` | `undefined` | Controlled range. |
| `defaultValue` | `DateRange` | `undefined` | Initial uncontrolled range. |
| `placeholder` | `DateValue` | `undefined` | Visible month when no range. |
| `defaultPlaceholder` | `DateValue` | `undefined` | Initial placeholder. |
| `locale` | `string` | `'en-US'` | Locale for formatting. |
| `granularity` | `'day' \| 'hour' \| 'minute' \| 'second'` | `'day'` | Smallest unit displayed. |
| `hideTimeZone` | `boolean` | `false` | Hide the timezone segment. |
| `minValue` | `DateValue` | `undefined` | Earliest selectable date. |
| `maxValue` | `DateValue` | `undefined` | Latest selectable date. |
| `isDateDisabled` | `(date: DateValue) => boolean` | `undefined` | Mark dates as disabled. |
| `isDateUnavailable` | `(date: DateValue) => boolean` | `undefined` | Mark dates as unavailable. |
| `weekStartsOn` | `0 \| 1 \| ... \| 6` | `undefined` | First day of the week. |
| `weekdayFormat` | `'narrow' \| 'short' \| 'long'` | `undefined` | Weekday label format. |
| `fixedWeeks` | `boolean` | `undefined` | Render six weeks always. |
| `numberOfMonths` | `number` | `2` | Months displayed side by side. |
| `labelText` | `string` | `undefined` | Label rendered above the trigger. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid. |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |

### DateRangePicker Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `DateRange` | Range change. |
| `update:placeholder` | `DateValue` | Visible month change. |
| `openChange` | `boolean` | Popover open state change. |

### DateRangePicker Slots

| Slot | Description |
|------|-------------|
| `trigger` | Replace the default trigger button. |
| `label` | Custom label content. |
| `separator` | Replace the default "–" separator. |

## Accessibility

- Trigger exposes `aria-haspopup="dialog"` and `aria-expanded`.
- `Esc` closes the popover and returns focus to the trigger.