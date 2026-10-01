# Slider 滑块

用于在范围内选择数值的控件，支持单个或多个滑块、两种方向、刻度标记以及禁用状态。

## 导入

```vue
<script setup lang="ts">
import { Slider } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/slider-basic.vue

:::

### 受控

:::preview

demo-preview=../../demos/slider-controlled.vue

:::

### 垂直方向

:::preview

demo-preview=../../demos/slider-vertical.vue

:::

### 步进与刻度

:::preview

demo-preview=../../demos/slider-with-steps.vue

:::

### 格式化输出

:::preview

demo-preview=../../demos/slider-formatted.vue

:::

### 范围（多滑块）

:::preview

demo-preview=../../demos/slider-range.vue

:::

## API

### Slider 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `number \| number[]` | `undefined` | 受控值。范围滑块请传入数组。 |
| `defaultValue` | `number \| number[]` | `0` | 初始的非受控值。 |
| `minValue` | `number` | `0` | 允许的最小值。 |
| `maxValue` | `number` | `100` | 允许的最大值。 |
| `step` | `number` | `1` | 步进粒度。 |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 滑块方向。 |
| `disabled` | `boolean` | `undefined` | 禁用交互（React 风格别名）。 |
| `isDisabled` | `boolean` | `undefined` | 禁用交互（HeroUI 风格别名）。 |
| `label` | `string` | `undefined` | 显示在滑块上方的标签。 |
| `name` | `string` | `undefined` | 用于表单提交的 name 属性。 |
| `fillOffset` | `number` | `0` | 填充区域的起始偏移量。 |
| `showSteps` | `boolean` | `false` | 渲染可见的步进标记。 |
| `showTooltip` | `boolean` | `false` | 在滑块上显示提示框。 |
| `marks` | `{ value: number, label: string }[]` | `[]` | 沿滑块渲染的自定义标签。 |
| `formatOptions` | `Intl.NumberFormatOptions` | `undefined` | 数值输出的格式化选项。 |
| `getValue` | `(value) => string` | `undefined` | 输出值的自定义格式化函数。 |

### Slider 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `number \| number[]` | 值每次变化时触发。 |
| `change` | `number \| number[]` | 交互过程中携带新值触发。 |
| `change-end` | `number \| number[]` | 用户结束交互时触发。 |

### Slider 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `label` | - | 自定义标签内容。 |
| `output` | - | 自定义输出（数值标签）内容。 |
| `thumb` | `{ value, index }` | 替换每个滑块的内容。 |

## 无障碍

- 禁用时根元素会暴露 `aria-disabled` 和 `data-disabled`。
- 每个滑块都可获得键盘焦点，并响应 `Arrow`、`Home`、`End` 和 `Page Up/Down`。
- 输出以可见文本的形式渲染在滑块容器内。
