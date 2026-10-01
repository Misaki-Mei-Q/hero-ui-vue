# Button Group 按钮组

将相关按钮组合成一个连贯的控件，共享尺寸、变体、禁用状态与分隔线。

## 导入

```vue
<script setup lang="ts">
import { Button, ButtonGroup, ButtonGroupSeparator } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/button-group-basic.vue

:::

### 结构

```vue
<template>
  <ButtonGroup>
    <Button>First</Button>
    <Button>
      <ButtonGroupSeparator />
      Second
    </Button>
    <Button>
      <ButtonGroupSeparator />
      Third
    </Button>
  </ButtonGroup>
</template>
```

`ButtonGroup` 通过 Vue 的 provide/inject 将 `size`、`variant`、`isDisabled` 和 `fullWidth` 传递给直接子按钮。需要分隔线时，在第一个按钮之后的每个按钮内部添加 `ButtonGroupSeparator`。

### 变体

:::preview

demo-preview=../../demos/button-group-variants.vue

:::

### 尺寸

:::preview

demo-preview=../../demos/button-group-sizes.vue

:::

### 排列方向

:::preview

demo-preview=../../demos/button-group-orientation.vue

:::

### 带图标

:::preview

demo-preview=../../demos/button-group-with-icons.vue

:::

### 全宽

:::preview

demo-preview=../../demos/button-group-full-width.vue

:::

### 禁用状态

:::preview

demo-preview=../../demos/button-group-disabled.vue

:::

### 无分隔线

:::preview

demo-preview=../../demos/button-group-without-separator.vue

:::

## 样式

### 传入类名

```vue
<template>
  <ButtonGroup class="gap-2">
    <Button>First</Button>
    <Button>
      <ButtonGroupSeparator />
      Second
    </Button>
    <Button>
      <ButtonGroupSeparator />
      Third
    </Button>
  </ButtonGroup>
</template>
```

### CSS 类

| 类名 | 说明 |
|---|---|
| `.button-group` | 按钮组基础容器 |
| `.button-group--horizontal` | 水平方向 |
| `.button-group--vertical` | 垂直方向 |
| `.button-group--full-width` | 全宽组与拉伸的子按钮 |
| `.button-group__separator` | 按钮之间的分隔元素 |

## 交互状态

| 选择器 | 说明 |
|---|---|
| `[data-disabled="true"]` | 组被禁用时应用 |
| `[data-orientation="horizontal"]` | 水平布局状态 |
| `[data-orientation="vertical"]` | 垂直布局状态 |
| `.button-group .button[data-pressed="true"]` | 组内被按下的子按钮不做缩放 |
| `.button-group .button[data-focus-visible="true"]` | 子元素焦点环内缩，以保持在相连边缘内 |

## API

### ButtonGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'danger-soft' \| 'outline' \| 'ghost'` | `undefined` | 应用到子按钮的变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `undefined` | 应用到子按钮的尺寸 |
| `isDisabled` | `boolean` | `false` | 子按钮是否继承禁用状态 |
| `fullWidth` | `boolean` | `false` | 组与子按钮是否拉伸以填满容器 |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 按钮布局方向 |
| `class` | `string` | `undefined` | 附加到组根元素的类名 |

### ButtonGroupSeparator 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 附加到分隔符的类名 |

### 插槽

| 组件 | 插槽 | 说明 |
|---|---|---|
| `ButtonGroup` | `default` | 按钮组内容 |
