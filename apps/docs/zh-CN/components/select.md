# Select 选择器

一个弹出层，让用户从列表中选择一个或多个值。基于 `Popover` + `ListBox` 构建，支持单选与多选、分组以及禁用选项。

## 导入

```vue
<script setup lang="ts">
import {
  Select,
  ListBoxItem,
  ListBoxItemIndicator,
  ListBoxSection,
} from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/select-basic.vue

:::

### 带分组

:::preview

demo-preview=../../demos/select-with-sections.vue

:::

### 多选

:::preview

demo-preview=../../demos/select-multiple.vue

:::

### 必填与校验

:::preview

demo-preview=../../demos/select-required.vue

:::

## API

### Select 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `ListBoxKey \| ListBoxKey[]` | `undefined` | 受控值（多选模式下为数组）。 |
| `defaultSelectedKey` | `ListBoxKey` | `undefined` | 初始的非受控键值。 |
| `defaultSelectedKeys` | `ListBoxKey[]` | `[]` | 初始的非受控键值（多选模式）。 |
| `selectedKey` | `ListBoxKey` | `undefined` | 受控的单个键值（`modelValue` 的别名）。 |
| `selectedKeys` | `ListBoxKey[]` | `undefined` | 受控键值（多选模式）。 |
| `disabledKeys` | `ListBoxKey[]` | `[]` | 不可选中的键值。 |
| `selectionMode` | `'single' \| 'multiple'` | `'single'` | 选择单个还是多个。 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 视觉样式。 |
| `fullWidth` | `boolean` | `false` | 拉伸至父级宽度。 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | 弹出层位置。 |
| `offset` | `number` | `8` | 与触发器的距离。 |
| `isDisabled` | `boolean` | `false` | 禁用选择器。 |
| `isInvalid` | `boolean` | `false` | 标记为无效（隐藏说明文字）。 |
| `isRequired` | `boolean` | `false` | 标记为必填。 |
| `isOpen` | `boolean` | `undefined` | 受控的打开状态。 |
| `defaultOpen` | `boolean` | `undefined` | 初始的非受控打开状态。 |
| `placeholder` | `string` | `'Select an option'` | 未选择时触发器显示的文本。 |
| `name` | `string` | `undefined` | 表单字段名称。 |
| `label` | `string` | `undefined` | 显示在触发器上方的标签。 |
| `description` | `string` | `undefined` | 显示在下方的辅助文本。 |
| `errorMessage` | `string` | `undefined` | 显示在下方的错误信息。 |
| `showIndicator` | `boolean` | `true` | 渲染箭头指示器。 |

### Select 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `ListBoxKey \| ListBoxKey[] \| null` | 选中项变化时触发。 |
| `update:selectedKey` | `ListBoxKey \| null` | 单选变化时触发。 |
| `update:selectedKeys` | `ListBoxKey[]` | 多选变化时触发。 |
| `update:isOpen` | `boolean` | 弹出层打开或关闭时触发。 |
| `selection-change` | `ListBoxKey \| ListBoxKey[] \| null` | 与 `update:modelValue` 对应的便捷事件。 |
| `openChange` | `boolean` | 打开状态变化时触发。 |
| `close` | - | 单选模式下选择后弹出层关闭时触发。 |

### Select 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `default` | `{ selectedKeys }` | 直接放入的 `ListBoxItem`（以及可选的 `ListBoxSection`）。 |
| `label` | - | 自定义标签内容。 |
| `value` | `{ selectedKeys }` | 自定义触发器标签。 |
| `error-message` | - | 自定义错误内容。 |
| `description` | - | 自定义说明内容。 |

## 无障碍

- 触发器通过底层的 Popover 触发器暴露 `role="combobox"` 语义。
- 列表使用 `role="listbox"`，多选模式下还会设置 `aria-multiselectable`。
- 按下 `Esc` 会关闭弹出层并将焦点返回触发器。
- `isRequired` 为 true 时会设置 `aria-required`。
