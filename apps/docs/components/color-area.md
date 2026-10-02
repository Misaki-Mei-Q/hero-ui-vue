# ColorArea

A 2D selector that maps pointer position to saturation and lightness for a given hue. Combine with `ColorSlider` for full HSV-style editing.

## Import

```vue
<script setup lang="ts">
import { ColorArea } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/color-area-basic.vue

:::

Drag inside the area, or focus it and use the arrow keys, to change saturation and lightness.

## API

### ColorArea Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hue` | `number` | `0` | Hue background (0-360). |
| `saturation` | `number` | `100` | X-axis saturation (0-100). |
| `lightness` | `number` | `50` | Y-axis lightness (0-100). |
| `xChannel` | `'saturation' \| 'lightness'` | `'saturation'` | Channel mapped to X. |
| `yChannel` | `'saturation' \| 'lightness'` | `'lightness'` | Channel mapped to Y. |
| `step` | `number` | `1` | Keyboard step (shift multiplies by 10). |
| `label` | `string` | `'Color area'` | Accessible label for the slider. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |

### ColorArea Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:saturation` | `number` | Emitted when the saturation changes. |
| `update:lightness` | `number` | Emitted when the lightness changes. |
| `change` | `[saturation, lightness]` | Combined emitted change event. |

## Accessibility

- The root element has `role="slider"`, `aria-valuemin/max=100`, `aria-valuetext`, and is keyboard adjustable with the arrow keys.