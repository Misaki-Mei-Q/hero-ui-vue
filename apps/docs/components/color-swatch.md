# ColorSwatch

A single color chip.

## Import

```vue
<script setup lang="ts">
import { ColorSwatch } from '@misaki-mei/heroui-vue'
</script>
```

## API

### ColorSwatch Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | - | Hex value (required). |
| `shape` | `'circle' \| 'square'` | `'circle'` | Swatch shape. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Swatch size. |

## Accessibility

- The swatch exposes `aria-label="Color swatch: #rrggbb"`.