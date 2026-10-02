# ColorSwatchPicker

A row of pre-defined color swatches the user can choose between.

## Import

```vue
<script setup lang="ts">
import { ColorSwatchPicker } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/color-swatch-picker-basic.vue

:::

## API

### ColorSwatchPicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | Controlled value. |
| `defaultValue` | `string` | `undefined` | Initial uncontrolled value. |
| `colors` | `string[]` | `[]` | Available hex colors. |
| `layout` | `'grid' \| 'stack'` | `'grid'` | Layout mode. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Swatch size. |
| `variant` | `'circle' \| 'square'` | `'circle'` | Swatch shape. |
| `label` | `string` | `'Color swatch picker'` | Accessible label for the listbox. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |

Each item renders a color swatch and a checkmark indicator that is revealed when selected. The checkmark switches to black on light colors through `data-light-color`.

### ColorSwatchPicker Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted on selection. |
| `change` | `string` | Convenience alias.