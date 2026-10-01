# TimeField

A segmented time input built on `@internationalized/date`. Mirrors the DateField API but focuses on hour/minute/second.

## Import

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date'
import { TimeField } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/time-field-basic.vue

:::

## API

### TimeField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `DateValue` | `undefined` | Controlled value. |
| `defaultValue` | `DateValue` | `undefined` | Initial uncontrolled value. |
| `placeholder` | `DateValue` | `undefined` | Visible time when empty. |
| `defaultPlaceholder` | `DateValue` | `undefined` | Initial placeholder. |
| `locale` | `string` | `'en-US'` | Locale used for labels. |
| `granularity` | `'hour' \| 'minute' \| 'second'` | `'minute'` | Smallest unit displayed. |
| `hourCycle` | `12 \| 24` | `24` | 12-hour or 24-hour clock. |
| `hideTimeZone` | `boolean` | `true` | Hide the timezone segment. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid. |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `readonly` | `boolean` | `false` | Read-only input. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |
| `label` | `string` | `undefined` | Label above the field. |
| `description` | `string` | `undefined` | Helper text below. |
| `errorMessage` | `string` | `undefined` | Error message below. |

### TimeField Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `DateValue \| undefined` | Emitted when value changes. |
| `update:placeholder` | `DateValue` | Emitted when placeholder changes. |

## Accessibility

- Same segment editing keyboard model as DateField.