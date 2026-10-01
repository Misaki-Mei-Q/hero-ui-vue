# ColorField

A hex code input paired with a native color picker swatch.

## Import

```vue
<script setup lang="ts">
import { ColorField } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

Use `ColorField` to capture a `#rrggbb` value with a native `<input type="color">` picker and a hex display.

## API

### ColorField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | Controlled hex value. |
| `defaultValue` | `string` | `undefined` | Initial uncontrolled value. |
| `placeholder` | `string` | `undefined` | Trigger placeholder text. |
| `label` | `string` | `undefined` | Label above the field. |
| `description` | `string` | `undefined` | Helper text below. |
| `errorMessage` | `string` | `undefined` | Error message below. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid. |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |

### ColorField Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when the value changes. |

## Accessibility

- The native color input keeps all platform keyboard / screen-reader behavior.
- `aria-invalid` is set when `isInvalid` is true.