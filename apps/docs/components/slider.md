# Slider

A control for selecting a numeric value within a range, supporting single or multiple thumbs, both orientations, marks, and disabled state.

## Import

```vue
<script setup lang="ts">
import { Slider } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/slider-basic.vue

:::

### Controlled

:::preview

demo-preview=../demos/slider-controlled.vue

:::

### Vertical Orientation

:::preview

demo-preview=../demos/slider-vertical.vue

:::

### With Steps and Marks

:::preview

demo-preview=../demos/slider-with-steps.vue

:::

### Formatted Output

:::preview

demo-preview=../demos/slider-formatted.vue

:::

### Range (Multiple Thumbs)

:::preview

demo-preview=../demos/slider-range.vue

:::

## API

### Slider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `number \| number[]` | `undefined` | Controlled value. Pass an array for range sliders. |
| `defaultValue` | `number \| number[]` | `0` | Initial uncontrolled value. |
| `minValue` | `number` | `0` | Minimum allowed value. |
| `maxValue` | `number` | `100` | Maximum allowed value. |
| `step` | `number` | `1` | Step granularity. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider orientation. |
| `disabled` | `boolean` | `undefined` | Disable interaction (React-style alias). |
| `isDisabled` | `boolean` | `undefined` | Disable interaction (HeroUI-style alias). |
| `label` | `string` | `undefined` | Label rendered above the slider. |
| `name` | `string` | `undefined` | Name attribute for form submission. |
| `fillOffset` | `number` | `0` | Start offset for the fill region. |
| `showSteps` | `boolean` | `false` | Render visible step indicators. |
| `showTooltip` | `boolean` | `false` | Reserve tooltip on thumbs. |
| `marks` | `{ value: number, label: string }[]` | `[]` | Custom labels rendered alongside the slider. |
| `formatOptions` | `Intl.NumberFormatOptions` | `undefined` | Format options for the numeric output. |
| `getValue` | `(value) => string` | `undefined` | Custom formatter for the output value. |

### Slider Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `number \| number[]` | Emitted whenever the value changes. |
| `change` | `number \| number[]` | Emitted with the new value during interaction. |
| `change-end` | `number \| number[]` | Emitted when the user finishes interacting. |

### Slider Slots

| Slot | Props | Description |
|------|-------|-------------|
| `label` | - | Custom label content. |
| `output` | - | Custom output (value label) content. |
| `thumb` | `{ value, index }` | Replace each thumb's content. |

## Accessibility

- The root element exposes `aria-disabled` and `data-disabled` when disabled.
- Each thumb is keyboard-focusable and responds to `Arrow`, `Home`, `End`, and `Page Up/Down`.
- Output is rendered as visible text inside the slider container.