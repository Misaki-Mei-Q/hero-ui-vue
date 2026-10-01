# Dropdown 下拉菜单

从触发按钮打开的菜单。支持分组、分隔线、危险变体、键盘快捷键和四种位置。

## 导入

```vue
<script setup lang="ts">
import {
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
} from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/dropdown-basic.vue

:::

### 带分隔线

:::preview

demo-preview=../../demos/dropdown-with-separator.vue

:::

### 位置

:::preview

demo-preview=../../demos/dropdown-placements.vue

:::

## API

### Dropdown 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | 受控的打开状态。 |
| `defaultOpen` | `boolean` | `undefined` | 初始的非受控打开状态。 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | 菜单出现的一侧。 |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | 沿触发器方向的对齐方式。 |
| `offset` | `number` | `8` | 与触发器的距离。 |
| `modal` | `boolean` | `false` | 阻止与外部元素的交互。 |

### Dropdown 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:open` | `boolean` | 打开状态改变时触发。 |
| `openChange` | `boolean` | 便捷别名。 |

### Dropdown 插槽

| 插槽 | 说明 |
|------|-------------|
| `trigger` | 触发元素（通常是一个 `Button`）。 |
| `default` | 菜单主体，由 `DropdownItem`/`DropdownSection`/`DropdownSeparator`/`DropdownLabel` 组成。 |

### DropdownItem 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default' \| 'danger'` | `'default'` | 菜单项样式。 |
| `disabled` | `boolean` | `false` | 禁止选中。 |
| `shortcut` | `string` | `undefined` | 在右侧渲染键盘快捷键提示。 |

### DropdownItem 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `select` | - | 菜单项被激活时触发。 |

### DropdownSection 属性

| 属性 | 类型 | 说明 |
|------|------|-------------|
| `title` | `string` | 可选的分组标题，通过 `DropdownLabel` 渲染。 |

## 无障碍

- 触发器会自动暴露 `aria-haspopup="menu"` 和 `aria-expanded`。
- 菜单使用 `role="menu"`；菜单项使用 `role="menuitem"`。
- 分组使用带无障碍名称的 `role="group"`。
- 按下 `Esc` 会关闭菜单并将焦点返回触发器。
- 方向键可在菜单项之间导航。
