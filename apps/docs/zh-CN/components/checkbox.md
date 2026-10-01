# Checkbox 复选框

复选框让用户选择单个布尔选项。

## 导入

```ts
import { Button, Checkbox, Description, Label } from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/checkbox-basic.vue

:::

## 结构

```vue
<template>
  <Checkbox>
    <template #indicator="{ isSelected }">
      <span v-if="isSelected">...</span>
    </template>
    <Label />
    <Description />
  </Checkbox>
</template>
```

### 禁用

:::preview

demo-preview=../../demos/checkbox-disabled.vue

:::

### 默认选中

:::preview

demo-preview=../../demos/checkbox-default-selected.vue

:::

### 受控

:::preview

demo-preview=../../demos/checkbox-controlled.vue

:::

### 半选

:::preview

demo-preview=../../demos/checkbox-indeterminate.vue

:::

### 带标签

:::preview

demo-preview=../../demos/checkbox-with-label.vue

:::

### 带说明

:::preview

demo-preview=../../demos/checkbox-with-description.vue

:::

### 渲染属性

:::preview

demo-preview=../../demos/checkbox-render-props.vue

:::

### 表单集成

:::preview

demo-preview=../../demos/checkbox-form.vue

:::

### 无效状态

:::preview

demo-preview=../../demos/checkbox-invalid.vue

:::

### 自定义指示器

:::preview

demo-preview=../../demos/checkbox-custom-indicator.vue

:::

### 全圆角

:::preview

demo-preview=../../demos/checkbox-full-rounded.vue

:::

### 变体

Checkbox 支持两种视觉变体：

- `primary`：默认的字段阴影。
- `secondary`：适用于表面容器的低强调度样式。

:::preview

demo-preview=../../demos/checkbox-variants.vue

:::

### 自定义样式

:::preview

demo-preview=../../demos/checkbox-custom-styles.vue

:::

## 样式

### 传入类名

```vue
<template>
  <Checkbox
    control-class="border-2 border-purple-500"
    indicator-class="text-white"
  >
    <Label>Custom Checkbox</Label>
  </Checkbox>
</template>
```

### CSS 类

| 类名 | 说明 |
|------|-------------|
| `.checkbox` | 复选框基础包裹层 |
| `.checkbox__control` | 复选框控件框 |
| `.checkbox__indicator` | 复选框勾选标记或自定义指示器 |
| `.checkbox__content` | 可选的标签/说明包裹层 |
| `.checkbox--primary` | 主要变体 |
| `.checkbox--secondary` | 次要变体 |

### 交互状态

| 状态 | 选择器 |
|------|----------|
| 选中 | `[data-selected="true"]` / `[aria-checked="true"]` |
| 半选 | `[data-indeterminate="true"]` |
| 无效 | `[data-invalid="true"]` / `[aria-invalid="true"]` |
| 悬停 | `:hover` / `[data-hovered="true"]` |
| 焦点可见 | `:focus-visible` / `[data-focus-visible="true"]` |
| 禁用 | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| 只读 | `[aria-readonly="true"]` / `[data-readonly="true"]` |
| 按下 | `:active` / `[data-pressed="true"]` |

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `v-model` | `boolean` | `undefined` | 受控选中状态 |
| `checked` | `boolean \| 'indeterminate'` | `undefined` | 受控勾选状态 |
| `defaultChecked` | `boolean \| 'indeterminate'` | `false` | 初始勾选状态 |
| `isSelected` | `boolean` | `undefined` | React 风格的选中别名 |
| `defaultSelected` | `boolean` | `undefined` | React 风格的默认选中别名 |
| `isIndeterminate` | `boolean` | `undefined` | 强制半选状态 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 视觉变体 |
| `disabled` | `boolean` | `undefined` | 禁用复选框 |
| `isDisabled` | `boolean` | `undefined` | React 风格的禁用别名 |
| `readonly` | `boolean` | `undefined` | 阻止值变更 |
| `isReadOnly` | `boolean` | `undefined` | React 风格的只读别名 |
| `isInvalid` | `boolean` | `undefined` | 无效状态 |
| `required` | `boolean` | `undefined` | 原生必填状态 |
| `isRequired` | `boolean` | `undefined` | React 风格的必填别名 |
| `name` | `string` | `undefined` | 表单字段名称 |
| `value` | `string` | `undefined` | 表单字段值 |
| `controlClass` | `string` | `undefined` | 合并到 `.checkbox__control` 的类名 |
| `indicatorClass` | `string` | `undefined` | 合并到 `.checkbox__indicator` 的类名 |
| `contentClass` | `string` | `undefined` | 合并到 `.checkbox__content` 的类名 |

### 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:checked` | `boolean \| 'indeterminate'` | 勾选状态变化时触发 |
| `update:modelValue` | `boolean` | 选中状态变化时触发 |
| `change` | `boolean` | 选中状态变化时触发 |

### 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `default` | `{ checked, isSelected, isIndeterminate, isDisabled, isInvalid, isReadOnly }` | 标签与说明内容 |
| `indicator` | `{ checked, isSelected, isIndeterminate, isDisabled, isInvalid, isReadOnly }` | 可选的自定义指示器 |
