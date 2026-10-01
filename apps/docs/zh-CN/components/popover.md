# Popover 弹出框

一个浮动容器，用于显示锚定在触发元素上的富内容。适用于菜单、表单和上下文操作。

## 导入

```vue
<script setup lang="ts">
import { Popover } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/popover-basic.vue

:::

### 位置

:::preview

demo-preview=../../demos/popover-placements.vue

:::

### 带箭头

:::preview

demo-preview=../../demos/popover-with-arrow.vue

:::

### 受控

:::preview

demo-preview=../../demos/popover-controlled.vue

:::

## API

### Popover 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | 受控的打开状态。 |
| `defaultOpen` | `boolean` | `undefined` | 初始非受控打开状态。 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | 弹出框出现的一侧。 |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | 沿触发元素的对齐方式。 |
| `offset` | `number` | `9` | 与触发元素的距离。 |
| `arrow` | `boolean` | `false` | 渲染方向箭头。 |
| `arrowWidth` | `number` | `14` | 箭头宽度（像素）。 |
| `arrowHeight` | `number` | `7` | 箭头高度（像素）。 |
| `modal` | `boolean` | `false` | 使用模态层（阻止外部交互）。 |
| `title` | `string` | `undefined` | 渲染在对话框顶部的标题。 |
| `description` | `string` | `undefined` | 渲染在主体之后的可选说明。 |

### Popover 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:open` | `boolean` | 打开状态变化时触发。 |

### Popover 插槽

| 插槽 | 说明 |
|------|-------------|
| `trigger` | 用于打开弹出框的元素。 |
| `default` | 弹出框主体内容。 |
| `title` | 自定义标题内容（覆盖 `title` 属性）。 |
| `description` | 自定义说明内容。 |
| `close` | 自定义关闭触发器（通常是一个按钮）。 |

## 无障碍

- 弹出框可通过点击触发元素，或在触发元素上按 Enter 或 Space 打开。
- `Esc` 关闭弹出框并将焦点返回触发元素。
- 点击外部区域和外部聚焦都会关闭弹出框。
- 弹出框内容渲染在 `document.body` 上的 portal 中。
