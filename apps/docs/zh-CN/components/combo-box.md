# ComboBox 组合框

基于 `Popover` + `ListBox` 构建的可搜索选择器。触发器为文本输入框，因此用户除选择条目外，还可以通过查询字符串过滤选项。

## 导入

```vue
<script setup lang="ts">
import { ComboBox, ListBoxItem, ListBoxSection } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/combo-box-basic.vue

:::

### 带分组

:::preview

demo-preview=../../demos/combo-box-with-sections.vue

:::

### 必填与校验

:::preview

demo-preview=../../demos/combo-box-required.vue

:::

## API

### ComboBox 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `ListBoxKey \| ListBoxKey[]` | `undefined` | 受控值（多选模式下为数组）。 |
| `defaultSelectedKey` | `ListBoxKey` | `undefined` | 初始的非受控 key。 |
| `defaultSelectedKeys` | `ListBoxKey[]` | `[]` | 初始的非受控 key 列表（多选模式）。 |
| `selectedKey` | `ListBoxKey` | `undefined` | 受控单选 key 别名。 |
| `selectedKeys` | `ListBoxKey[]` | `undefined` | 受控 key 列表（多选模式）。 |
| `disabledKeys` | `ListBoxKey[]` | `[]` | 不可被选中的 key。 |
| `selectionMode` | `'single' \| 'multiple'` | `'single'` | 单选或多选。 |
| `items` | `ComboBoxItem[] \| ComboBoxItem[][]` | `[]` | 选项。传入二维数组以形成分组。 |
| `filter` | `(item, query) => boolean` | substring match | 自定义过滤谓词。 |
| `inputValue` | `string` | `undefined` | 受控的输入文本。 |
| `defaultInputValue` | `string` | `''` | 初始的非受控输入文本。 |
| `allowCustomValue` | `boolean` | `false` | 保留供将来使用。 |
| `fullWidth` | `boolean` | `false` | 拉伸至父级宽度。 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | 弹出层位置。 |
| `offset` | `number` | `8` | 与输入框的距离。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |
| `isInvalid` | `boolean` | `false` | 标记为无效（隐藏说明文字）。 |
| `isRequired` | `boolean` | `false` | 标记为必填。 |
| `isOpen` | `boolean` | `undefined` | 受控的打开状态。 |
| `defaultOpen` | `boolean` | `undefined` | 初始的非受控打开状态。 |
| `placeholder` | `string` | `'Select an option'` | 未选中时的占位文本。 |
| `searchPlaceholder` | `string` | `'Search...'` | 搜索输入框的占位文本。 |
| `label` | `string` | `undefined` | 渲染在输入框上方的标签。 |
| `description` | `string` | `undefined` | 渲染在下方的辅助文本。 |
| `errorMessage` | `string` | `undefined` | 渲染在下方的错误信息。 |

### ComboBox 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `ListBoxKey \| ListBoxKey[] \| null` | 选中项变化时触发。 |
| `update:selectedKey` | `ListBoxKey \| null` | 单选选中项变化时触发。 |
| `update:selectedKeys` | `ListBoxKey[]` | 多选选中项变化时触发。 |
| `update:isOpen` | `boolean` | 弹出层打开状态变化时触发。 |
| `update:inputValue` | `string` | 在输入框中输入时触发。 |
| `openChange` | `boolean` | 便捷别名。 |
| `change` | `(value, item)` | 携带新值及匹配到的条目触发。 |
| `input` | `string` | 输入时的便捷别名。 |

### ComboBox 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `default` | `{ items }` | 直接可用的 `ListBoxItem`。 |
| `search` | - | 自定义搜索输入框渲染。 |
| `empty` | - | 没有条目匹配查询时渲染。 |
| `label` | - | 自定义标签内容。 |
| `description` | - | 自定义说明内容。 |
| `error-message` | - | 自定义错误内容。 |
| `item-${key}` | `{ item }` | 针对特定选项的自定义渲染。 |

### ComboBoxItem

```ts
interface ComboBoxItem {
  key: ListBoxKey
  label: string
  description?: string
  isDisabled?: boolean
}
```

## 无障碍

- 输入框通过底层的 Popover 触发器暴露 `role="combobox"` 语义。
- 默认情况下，输入会过滤条目（`label.toLowerCase().includes(query.toLowerCase())`）。
- `Esc` 关闭弹出层并将焦点返回输入框。
- 方向键在列表框中导航；`Enter` 确认选择。
