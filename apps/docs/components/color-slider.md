# ColorSlider

A single-channel color slider. Supports hue, saturation, lightness, and alpha channels.

## Import

```vue
<script setup lang="ts">
import { ColorSlider } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/color-slider-basic.vue

:::

## API

### ColorSlider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `number` | `undefined` | Controlled value. |
| `defaultValue` | `number` | `0` | Initial uncontrolled value. |
| `channel` | `'hue' \| 'saturation' \| 'lightness' \| 'alpha'` | `'hue'` | Channel to edit. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider orientation. |
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | channel dependent | Maximum value (`360` hue, `1` alpha, `100` otherwise). |
| `step` | `number` | channel dependent | Step (`0.01` for alpha, `1` otherwise). |
| `hue` | `number` | `0` | Hue context for non-hue channels. |
| `saturation` | `number` | `100` | Saturation context for non-hue channels. |
| `lightness` | `number` | `50` | Lightness context for non-hue channels. |
| `label` | `string` | `undefined` | Label above the track. |
| `showOutput` | `boolean` | `true` | Render the `<output>` value label. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |

### ColorSlider Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `number` | Emitted when the value changes. |
| `change` | `number` | Convenience alias.

### ColorSlider Slots

| Slot | Description |
|------|-------------|
| `output` | Custom output content. Scoped with `{ value, channel }`. |