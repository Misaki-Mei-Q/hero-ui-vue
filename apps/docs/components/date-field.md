# DateField

A segmented date input built on `@internationalized/date`. Supports year/month/day segments with full keyboard navigation.

## Import

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DateField } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/date-field-basic.vue

:::

### Required

:::preview

demo-preview=../demos/date-field-required.vue

:::

## API

### DateField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `DateValue` | `undefined` | Controlled value. |
| `defaultValue` | `DateValue` | `undefined` | Initial uncontrolled value. |
| `placeholder` | `DateValue` | `undefined` | Visible month/year when empty. |
| `defaultPlaceholder` | `DateValue` | `undefined` | Initial placeholder. |
| `locale` | `string` | `'en-US'` | Locale used for labels. |
| `granularity` | `'day' \| 'hour' \| 'minute' \| 'second'` | `'day'` | Smallest unit displayed. |
| `hideTimeZone` | `boolean` | `false` | Hide the timezone segment. |
| `minValue` | `DateValue` | `undefined` | Earliest selectable date. |
| `maxValue` | `DateValue` | `undefined` | Latest selectable date. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid. |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `readonly` | `boolean` | `false` | Read-only input. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |
| `label` | `string` | `undefined` | Label above the field. |
| `description` | `string` | `undefined` | Helper text below. |
| `errorMessage` | `string` | `undefined` | Error message below. |

### DateField Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `DateValue \| undefined` | Emitted when value changes. |
| `update:placeholder` | `DateValue` | Emitted when placeholder changes. |

## Accessibility

- Each segment is a focusable element with `contenteditable="true"` (or `false` for literals).
- Arrow keys move between segments; digit keys edit the focused segment.