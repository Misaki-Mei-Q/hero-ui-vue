# ColorSlider

A single-channel color slider. Supports hue, saturation, lightness, and alpha channels.

## Import

```vue
<script setup lang="ts">
import { ColorSlider } from '@misaki-mei/heroui-vue'
</script>
```

## API

### ColorSlider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `number` | `undefined` | Controlled value. |
| `defaultValue` | `number` | `0` | Initial uncontrolled value. |
| `channel` | `'hue' \| 'saturation' \| 'lightness' \| 'alpha'` | `'hue'` | Channel to edit. |
| `saturation` | `number` | `100` | Saturation context for non-hue channels. |
| `lightness` | `number` | `50` | Lightness context for non-hue channels. |
| `alpha` | `number` | `1` | Alpha context for the alpha channel. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |

### ColorSlider Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `number` | Emitted when the value changes. |
| `change` | `number` | Convenience alias.