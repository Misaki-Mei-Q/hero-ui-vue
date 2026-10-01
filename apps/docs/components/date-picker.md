# DatePicker

A combined input + calendar widget. The trigger renders a button that opens a popover containing a `Calendar`.

## Import

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DatePicker } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/date-picker-basic.vue

:::

## API

### DatePicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `DateValue` | `undefined` | Controlled value. |
| `defaultValue` | `DateValue` | `undefined` | Initial uncontrolled value. |
| `placeholder` | `DateValue` | `undefined` | Visible month when no selection. |
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
| `numberOfMonths` | `number` | `1` | Months displayed side by side. |
| `labelText` | `string` | `undefined` | Label rendered above the trigger. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid. |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |

### DatePicker Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `DateValue \| undefined` | Selection change. |
| `update:placeholder` | `DateValue` | Visible month change. |
| `openChange` | `boolean` | Popover open state change. |

### DatePicker Slots

| Slot | Description |
|------|-------------|
| `trigger` | Replace the default calendar-icon trigger button. |
| `label` | Custom label content. |

## Accessibility

- Trigger exposes `aria-haspopup="dialog"` and `aria-expanded`.
- `Esc` closes the popover and returns focus to the trigger.