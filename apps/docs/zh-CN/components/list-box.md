# ListBox 列表框

列表框展示一组选项，并允许用户选择其中的一项或多项。

## 导入

```ts
import { ListBox, ListBoxItem, ListBoxItemIndicator, ListBoxSection } from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/list-box-default.vue

:::

## 结构

```vue
<ListBox>
  <ListBoxItem>
    <Label />
    <Description />
    <ListBoxItemIndicator />
  </ListBoxItem>
  <ListBoxSection>
    <Header />
    <ListBoxItem>
      <Label />
    </ListBoxItem>
  </ListBoxSection>
</ListBox>
```

## 带分组

:::preview

demo-preview=../../demos/list-box-with-sections.vue

:::

## 多选

:::preview

demo-preview=../../demos/list-box-multi-select.vue

:::

## 带禁用项

:::preview

demo-preview=../../demos/list-box-with-disabled-items.vue

:::

## 自定义勾选图标

:::preview

demo-preview=../../demos/list-box-custom-check-icon.vue

:::

## 受控

:::preview

demo-preview=../../demos/list-box-controlled.vue

:::

## 自定义渲染函数

:::preview

demo-preview=../../demos/list-box-custom-render-function.vue

:::

## 虚拟滚动

Vue 版本目前通过可滚动列表呈现与大列表相同的交互形态。在宣称与 React Aria `Virtualizer` 达到同等能力之前，仍需接入真正的虚拟滚动适配器。

:::preview

demo-preview=../../demos/list-box-virtualization.vue

:::

## 相关组件

- [Autocomplete](/zh-CN/components/autocomplete)
- ComboBox
- Select

## 样式

优先使用组件属性来控制选择、禁用状态和变体。仅用于演示的布局类保留在演示源码中，以确保预览代码完整。

## API

### ListBox 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `undefined` | 列表框的无障碍标签 |
| `selectionMode` | `'none' \| 'single' \| 'multiple'` | `'single'` | 选择行为 |
| `selectedKeys` | `Array<string \| number>` | `undefined` | 受控的选中 key |
| `defaultSelectedKeys` | `Array<string \| number>` | `[]` | 初始选中 key |
| `disabledKeys` | `Array<string \| number>` | `[]` | 禁用项的 key |
| `disabled` / `isDisabled` | `boolean` | `false` | 禁用整个列表框 |
| `variant` | `'default' \| 'danger'` | `'default'` | 由列表项继承的视觉变体 |

### ListBoxItem 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `id` / `value` | `string \| number` | `undefined` | 列表项的唯一 key |
| `textValue` | `string` | `undefined` | 用于无障碍命名的文本值 |
| `disabled` / `isDisabled` | `boolean` | `false` | 禁用该列表项 |
| `variant` | `'default' \| 'danger'` | inherited | 列表项变体 |

### 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:selectedKeys` | `Array<string \| number>` | 选择变化时触发 |
| `selection-change` | `Array<string \| number>` | 选择变化时触发 |
| `action` | `string \| number` | 可用列表项被激活时触发 |
