# ColorPicker

A combined color selection widget. Includes a trigger, a hex text input, and slots for adding custom selector UI (such as ColorArea + ColorSlider).

## Import

```vue
<script setup lang="ts">
import { ColorPicker, ColorArea, ColorSlider } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/color-picker-basic.vue

:::

## API

### ColorPicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | Hex color (`#rrggbb` or `#rrggbbaa`). |
| `defaultValue` | `string` | `undefined` | Initial uncontrolled value. |
| `open` | `boolean` | `undefined` | Controlled popover open state. |
| `defaultOpen` | `boolean` | `false` | Initial uncontrolled open state. |
| `label` | `string` | `undefined` | Label rendered next to the swatch. |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Popover placement. |
| `offset` | `number` | `8` | Distance from the trigger. |
| `showHexInput` | `boolean` | `true` | Render the hex text input. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid. |

### ColorPicker Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when the value changes. |
| `change` | `string` | Convenience alias. |
| `update:open` | `boolean` | Emitted when the popover opens or closes. |
| `openChange` | `boolean` | Convenience alias for `update:open`. |

### ColorPicker Slots

| Slot | Description |
|------|-------------|
| `trigger` | Custom trigger content. |
| `default` | Replaces the hex input. |
| `selector` | Extra selector UI rendered above the hex input. |

## Related

- `ColorField` — a hex input + native color picker.
- `ColorArea` — 2D saturation/lightness selector.
- `ColorSlider` — single-channel slider (hue/saturation/lightness/alpha).
- `ColorSwatch` — a single color chip.
- `ColorSwatchPicker` — pick from a list of swatches.