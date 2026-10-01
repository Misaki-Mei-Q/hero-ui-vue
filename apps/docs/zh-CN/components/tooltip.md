# Tooltip 提示框

当元素获得键盘焦点或鼠标悬停在其上时，显示与该元素相关信息的弹出层。

## 导入

```vue
<script setup lang="ts">
import { Tooltip } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/tooltip-basic.vue

:::

### 位置

:::preview

demo-preview=../../demos/tooltip-placements.vue

:::

### 带箭头

:::preview

demo-preview=../../demos/tooltip-with-arrow.vue

:::

### 自定义延迟

:::preview

demo-preview=../../demos/tooltip-custom-delay.vue

:::

### 丰富内容

:::preview

demo-preview=../../demos/tooltip-with-content.vue

:::

### 禁用

:::preview

demo-preview=../../demos/tooltip-disabled.vue

:::

## API

### Tooltip 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `content` | `string` | `undefined` | 默认插槽的后备文本内容。 |
| `open` | `boolean` | `undefined` | 受控的打开状态。 |
| `defaultOpen` | `boolean` | `undefined` | 初始打开状态。 |
| `delay` | `number` | `700` | 打开前的延迟时间（毫秒）。 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | 提示框出现的一侧。 |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | 相对触发元素的对齐方式。 |
| `offset` | `number` | `7` | 与触发元素之间的距离。 |
| `arrow` | `boolean` | `false` | 渲染方向箭头。 |
| `arrowWidth` | `number` | `10` | 箭头宽度（像素）。 |
| `arrowHeight` | `number` | `5` | 箭头高度（像素）。 |
| `disabled` | `boolean` | `false` | 完全禁用提示框。 |
| `disableClosingTrigger` | `boolean` | `false` | 点击触发元素时保持内容打开。 |
| `ignoreNonKeyboardFocus` | `boolean` | `false` | 非键盘焦点时不打开。 |

### Tooltip 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:open` | `boolean` | 打开状态变化时触发。 |

### Tooltip 插槽

| 插槽 | 说明 |
|------|-------------|
| `trigger` | 触发提示框的元素。 |
| `default` | 提示框主体内容（覆盖 `content`）。 |

## 无障碍

- 提示框打开时，触发元素会获得 `aria-describedby`。
- 提示框通过 portal 渲染，并带有 `role="tooltip"`。
- 按下 `Esc` 可关闭提示框。
- 箭头使用 `data-slot="overlay-arrow"`，并根据位置自动旋转。
