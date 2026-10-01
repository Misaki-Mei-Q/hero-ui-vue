# ColorSwatch 颜色色块

单个颜色色块。

## 导入

```vue
<script setup lang="ts">
import { ColorSwatch } from '@misaki-mei/heroui-vue'
</script>
```

## API

### ColorSwatch 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `color` | `string` | - | 十六进制值（必填）。 |
| `shape` | `'circle' \| 'square'` | `'circle'` | 色块形状。 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 色块尺寸。 |

## 无障碍

- 色块会暴露 `aria-label="Color swatch: #rrggbb"`。
