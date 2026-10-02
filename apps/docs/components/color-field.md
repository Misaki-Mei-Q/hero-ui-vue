# ColorField

A hex color text input paired with a live color swatch preview.

## Import

```vue
<script setup lang="ts">
import { ColorField } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/color-field-basic.vue

:::

Use `ColorField` to capture a `#rgb`, `#rgba`, `#rrggbb` or `#rrggbbaa` value. The swatch prefix reflects the current value, and updates are only emitted once the typed value is a valid hex color.

## API

### ColorField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | Controlled hex value. |
| `defaultValue` | `string` | `undefined` | Initial uncontrolled value. |
| `placeholder` | `string` | `undefined` | Input placeholder text. |
| `label` | `string` | `undefined` | Label above the field. |
| `description` | `string` | `undefined` | Helper text below. |
| `errorMessage` | `string` | `undefined` | Error message below (replaces the description). |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid. |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |

### ColorField Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when a valid hex value is entered. |

### ColorField Slots

| Slot | Description |
|------|-------------|
| `label` | Custom label content. |
| `prefix` | Replaces the color swatch prefix. |
| `description` | Custom description content. |
| `error-message` | Custom error message content. |

## Accessibility

- The label is linked to the input through `for`/`id`.
- `aria-invalid` is set when `isInvalid` is true.
