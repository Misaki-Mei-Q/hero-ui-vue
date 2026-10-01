# Switch 开关

用于布尔状态的开关切换组件。

## 导入

```ts
import { Description, Label, Switch, SwitchGroup } from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/switch-basic.vue

:::

## 结构

```vue
<template>
  <Switch>
    <span data-slot="switch-control">
      <span data-slot="switch-thumb">
        <span data-slot="switch-icon" />
      </span>
    </span>
    <div data-slot="switch-content">
      <Label />
      <Description />
    </div>
  </Switch>
</template>
```

### 禁用

:::preview

demo-preview=../../demos/switch-disabled.vue

:::

### 默认选中

:::preview

demo-preview=../../demos/switch-default-selected.vue

:::

### 受控

:::preview

demo-preview=../../demos/switch-controlled.vue

:::

### 无标签

:::preview

demo-preview=../../demos/switch-without-label.vue

:::

### 尺寸

:::preview

demo-preview=../../demos/switch-sizes.vue

:::

### 标签位置

:::preview

demo-preview=../../demos/switch-label-position.vue

:::

### 带图标

:::preview

demo-preview=../../demos/switch-with-icons.vue

:::

### 带说明

:::preview

demo-preview=../../demos/switch-with-description.vue

:::

### 分组

:::preview

demo-preview=../../demos/switch-group.vue

:::

### 水平分组

:::preview

demo-preview=../../demos/switch-group-horizontal.vue

:::

### 自定义样式

:::preview

demo-preview=../../demos/switch-custom-styles.vue

:::

## 样式

### CSS 类

| 类名 | 说明 |
|------|-------------|
| `.switch` | 开关基础包装器 |
| `.switch__control` | 轨道元素 |
| `.switch__thumb` | 滑块元素 |
| `.switch__icon` | 可选的滑块图标 |
| `.switch__content` | 标签/说明包装器 |
| `.switch--sm` | 小尺寸 |
| `.switch--md` | 中尺寸 |
| `.switch--lg` | 大尺寸 |
| `.switch-group` | 分组包装器 |
| `.switch-group__items` | 分组项布局包装器 |
| `.switch-group--horizontal` | 水平分组方向 |
| `.switch-group--vertical` | 垂直分组方向 |

### 交互状态

| 状态 | 选择器 |
|------|----------|
| 选中 | `[aria-checked="true"]` / `[data-selected="true"]` |
| 悬停 | `[data-hovered="true"]` |
| 按下 | `[data-pressed="true"]` |
| 焦点可见 | `[data-focus-visible="true"]` |
| 禁用 | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| 无效 | `[data-invalid="true"]` |
| 必填 | `[data-required="true"]` |

## API

### Switch 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `v-model` | `boolean` | `undefined` | 受控的选中状态 |
| `checked` | `boolean` | `undefined` | 受控选中状态的别名 |
| `isSelected` | `boolean` | `undefined` | React 风格的受控选中别名 |
| `defaultChecked` | `boolean` | `false` | 初始选中状态 |
| `defaultSelected` | `boolean` | `undefined` | React 风格的初始选中别名 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 开关尺寸 |
| `disabled` | `boolean` | `undefined` | 禁用开关 |
| `isDisabled` | `boolean` | `undefined` | React 风格的禁用别名 |
| `isInvalid` | `boolean` | `undefined` | 无效状态 |
| `required` | `boolean` | `undefined` | 原生必填状态 |
| `isRequired` | `boolean` | `undefined` | React 风格的必填别名 |
| `name` | `string` | `undefined` | 表单名称 |
| `value` | `string` | `undefined` | 表单值 |

### Switch 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | 选中状态变化时触发 |
| `update:checked` | `boolean` | 选中状态变化时触发 |
| `change` | `boolean` | 选中状态变化时触发 |

### Switch 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `default` | `{ checked, isSelected }` | 标签与说明内容 |
| `icon` | `{ checked, isSelected }` | 可选的滑块图标 |

### SwitchGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `undefined` | 分组方向 |
