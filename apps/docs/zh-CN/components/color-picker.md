# ColorPicker 颜色选择器

组合式颜色选择控件。包含一个触发器、一个十六进制文本输入框，以及用于添加自定义选择器界面（如 ColorArea + ColorSlider）的插槽。

## 导入

```vue
<script setup lang="ts">
import { ColorPicker, ColorArea, ColorSlider } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/color-picker-basic.vue

:::

## API

### ColorPicker 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | 十六进制颜色（`#rrggbb` 或 `#rrggbbaa`）。 |
| `defaultValue` | `string` | `undefined` | 初始的非受控值。 |
| `label` | `string` | `undefined` | 渲染在色块旁边的标签。 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | 弹出层位置。 |
| `offset` | `number` | `8` | 与触发器的距离。 |
| `showHexInput` | `boolean` | `true` | 渲染十六进制文本输入框。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |
| `isInvalid` | `boolean` | `false` | 标记为无效。 |

### ColorPicker 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 值变化时触发。 |
| `change` | `string` | 便捷别名。 |
| `openChange` | `boolean` | 弹出层打开或关闭时触发。 |

### ColorPicker 插槽

| 插槽 | 说明 |
|------|-------------|
| `trigger` | 自定义触发器内容。 |
| `default` | 替换十六进制输入框。 |
| `selector` | 渲染在十六进制输入框上方的额外选择器界面。 |

## 相关组件

- `ColorField` — 十六进制输入 + 原生颜色选择器。
- `ColorArea` — 二维饱和度/亮度选择器。
- `ColorSlider` — 单通道滑块（色相/饱和度/亮度/透明度）。
- `ColorSwatch` — 单个颜色色块。
- `ColorSwatchPicker` — 从一组色块中进行选择。
