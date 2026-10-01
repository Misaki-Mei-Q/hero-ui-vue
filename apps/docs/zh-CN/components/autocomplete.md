# Autocomplete 自动补全

自动补全让用户从可搜索的列表中选择一个选项。

## 导入

```vue
<script setup lang="ts">
import { Autocomplete } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/autocomplete-basic.vue

:::

### 结构

```vue
<template>
  <Autocomplete
    v-model="selectedKey"
    label="State"
    placeholder="Select one"
    search-placeholder="Search states..."
    :items="items"
  />
</template>
```

### 带说明

:::preview

demo-preview=../../demos/autocomplete-with-description.vue

:::

### 多选

:::preview

demo-preview=../../demos/autocomplete-multiple-select.vue

:::

### 带分组

:::preview

demo-preview=../../demos/autocomplete-with-sections.vue

:::

### 带禁用选项

:::preview

demo-preview=../../demos/autocomplete-with-disabled-options.vue

:::

### 允许空列表

:::preview

demo-preview=../../demos/autocomplete-allows-empty-collection.vue

:::

### 自定义指示器

:::preview

demo-preview=../../demos/autocomplete-custom-indicator.vue

:::

### 必填

:::preview

demo-preview=../../demos/autocomplete-required.vue

:::

### 全宽

:::preview

demo-preview=../../demos/autocomplete-full-width.vue

:::

### 变体

:::preview

demo-preview=../../demos/autocomplete-variants.vue

:::

### 在 Surface 容器中

:::preview

demo-preview=../../demos/autocomplete-in-surface.vue

:::

### 自定义值

:::preview

demo-preview=../../demos/autocomplete-custom-value.vue

:::

### 受控

:::preview

demo-preview=../../demos/autocomplete-controlled.vue

:::

### 受控多选

:::preview

demo-preview=../../demos/autocomplete-controlled-multiple.vue

:::

### 受控打开状态

:::preview

demo-preview=../../demos/autocomplete-controlled-open-state.vue

:::

### 异步过滤

:::preview

demo-preview=../../demos/autocomplete-asynchronous-filtering.vue

:::

### 禁用

:::preview

demo-preview=../../demos/autocomplete-disabled.vue

:::

## API

### Autocomplete 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `modelValue` | `string \| number \| null` | `undefined` | 受控选中键值。 |
| `defaultSelectedKey` | `string \| number \| null` | `null` | 初始的非受控选中键值。 |
| `defaultSelectedKeys` | `(string \| number)[]` | `[]` | 多选模式下初始的非受控选中键值。 |
| `items` | `AutocompleteItem[]` | `[]` | 在列表框中渲染的选项。 |
| `disabledKeys` | `(string \| number)[]` | `[]` | 不可选中的选项键值。 |
| `label` | `string` | `undefined` | 字段标签。 |
| `description` | `string` | `undefined` | 显示在触发器下方的辅助文本。 |
| `errorMessage` | `string` | `undefined` | 字段无效时显示的错误文本。 |
| `placeholder` | `string` | `'Select an option'` | 选择前显示的占位文本。 |
| `searchPlaceholder` | `string` | `'Search...'` | 弹出层搜索框中显示的占位文本。 |
| `selectionMode` | `'single' \| 'multiple'` | `'single'` | 可选择单个还是多个选项。 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 触发器视觉样式。 |
| `fullWidth` | `boolean` | `false` | 拉伸至父级宽度。 |
| `clearable` | `boolean` | `true` | 选中选项后显示清除按钮。 |
| `isDisabled` | `boolean` | `false` | 禁用触发器和列表框。 |
| `isInvalid` | `boolean` | `false` | 应用无效字段状态。 |
| `isRequired` | `boolean` | `false` | 将字段标记为必填。 |
| `isOpen` | `boolean` | `undefined` | 控制弹出层的打开状态。 |

### 事件

| 事件 | 载荷 | 说明 |
|---|---|---|
| `update:modelValue` | `string \| number \| (string \| number)[] \| null` | 选中键值变化时触发。 |
| `update:isOpen` | `boolean` | 弹出层打开状态变化时触发。 |
| `open-change` | `boolean` | 弹出层打开或关闭后触发。 |
| `change` | `(value, item)` | 携带选中键值与选项对象触发。 |
| `clear` | `void` | 点击清除按钮时触发。 |

### 插槽

| 插槽 | 属性 | 说明 |
|---|---|---|
| `default` | - | 自定义选中值的渲染。 |
| `item` | `{ item, selected }` | 自定义列表框选项的渲染。 |
| `indicator` | `{ className, isOpen, isDisabled }` | 自定义触发器指示图标。 |
