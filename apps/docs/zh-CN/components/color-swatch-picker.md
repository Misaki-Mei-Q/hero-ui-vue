# ColorSwatchPicker 色块选择器

一行预定义的颜色色块，供用户在其间选择。

## 导入

```vue
<script setup lang="ts">
import { ColorSwatchPicker } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/color-swatch-picker-basic.vue

:::

## API

### ColorSwatchPicker 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | 受控值。 |
| `defaultValue` | `string` | `undefined` | 初始的非受控值。 |
| `colors` | `string[]` | `[]` | 可用的十六进制颜色。 |
| `layout` | `'grid' \| 'stack'` | `'grid'` | 布局模式。 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 色块尺寸。 |
| `variant` | `'circle' \| 'square'` | `'circle'` | 色块形状。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |

### ColorSwatchPicker 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 选择时触发。 |
| `change` | `string` | 便捷别名。
