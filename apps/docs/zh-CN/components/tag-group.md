# TagGroup 标签组

将可选择或可移除的标签进行分组。

## 导入

```ts
import { Tag, TagGroup, TagRemoveButton } from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/tag-group-basic.vue

:::

## 结构

```vue
<TagGroup>
  <Tag>
    Label
    <TagRemoveButton />
  </Tag>
</TagGroup>
```

## 尺寸

:::preview

demo-preview=../../demos/tag-group-sizes.vue

:::

## 变体

:::preview

demo-preview=../../demos/tag-group-variants.vue

:::

## 禁用

:::preview

demo-preview=../../demos/tag-group-disabled.vue

:::

## 选择模式

:::preview

demo-preview=../../demos/tag-group-selection-modes.vue

:::

## 受控

:::preview

demo-preview=../../demos/tag-group-controlled.vue

:::

## 带错误信息

:::preview

demo-preview=../../demos/tag-group-with-error-message.vue

:::

## 带前缀

:::preview

demo-preview=../../demos/tag-group-with-prefix.vue

:::

## 带移除按钮

:::preview

demo-preview=../../demos/tag-group-with-remove-button.vue

:::

## 使用列表数据

:::preview

demo-preview=../../demos/tag-group-with-list-data.vue

:::

## 自定义渲染函数

:::preview

demo-preview=../../demos/tag-group-custom-render-function.vue

:::

## 相关组件

- [Tag](/zh-CN/components/tag)

## 样式

`TagGroup` 负责标签文案、列表布局、选中状态、禁用键值和移除回调。优先使用组件属性来实现标签的原生行为。仅用于演示的布局样式应保留在各自的演示文件中，并在源码面板中展示。

## API

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `selectionMode` | `'none' \| 'single' \| 'multiple'` | `'none'` | 启用单选或多选标签 |
| `selectedKeys` | `Array<string \| number>` | `undefined` | 受控的选中键值 |
| `defaultSelectedKeys` | `Array<string \| number>` | `[]` | 初始非受控选中键值 |
| `disabledKeys` | `Array<string \| number>` | `[]` | 无法被选中的键值 |
| `disabled` / `isDisabled` | `boolean` | `false` | 禁用整个分组 |
| `isInvalid` | `boolean` | `false` | 将分组及子标签标记为无效 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 子标签继承的尺寸 |
| `variant` | `'default' \| 'surface'` | `'default'` | 子标签继承的视觉样式 |

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:selectedKeys` | `Array<string \| number>` | 选中项变化时触发 |
| `selection-change` | `Array<string \| number>` | 选中项变化时触发 |
| `remove` | `string \| number` | 标签的移除按钮移除某个标签键值时触发 |
