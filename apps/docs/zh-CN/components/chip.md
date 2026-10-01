# Chip 标签块

用于状态、分类和紧凑元数据的小型信息标签。

## 导入

```vue
<script setup lang="ts">
import { Chip, ChipLabel } from '@misaki-mei/heroui-vue'
</script>
```

## 结构

纯文本子节点会被自动包裹进 `ChipLabel`。将图标与标签组合使用时，请显式使用 `ChipLabel`。

```vue
<template>
  <Chip>
    <ChipLabel>Label text</ChipLabel>
  </Chip>
</template>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/chip-basic.vue

:::

### 变体

:::preview

demo-preview=../../demos/chip-variants.vue

:::

### 带图标

:::preview

demo-preview=../../demos/chip-with-icon.vue

:::

### 状态

:::preview

demo-preview=../../demos/chip-statuses.vue

:::

## 样式

### 传入类名

```vue
<template>
  <Chip class="rounded-full px-4 py-2 font-bold">
    <ChipLabel class="text-lg uppercase">Custom Styled</ChipLabel>
  </Chip>
</template>
```

### CSS 类

| 类名 | 说明 |
|---|---|
| `.chip` | 基础标签块容器 |
| `.chip__label` | 标签文本插槽 |
| `.chip--accent` | 强调色 |
| `.chip--danger` | 危险色 |
| `.chip--default` | 默认色 |
| `.chip--success` | 成功色 |
| `.chip--warning` | 警告色 |
| `.chip--primary` | 填充背景变体 |
| `.chip--secondary` | 次要变体 |
| `.chip--tertiary` | 透明变体 |
| `.chip--soft` | 柔和背景变体 |
| `.chip--sm` | 小尺寸 |
| `.chip--md` | 中尺寸 |
| `.chip--lg` | 大尺寸 |

## API

### Chip 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 颜色变体 |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'soft'` | `'secondary'` | 视觉样式变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 标签块尺寸 |
| `class` | `string` | `undefined` | 追加到标签块根元素的类名 |

### ChipLabel 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 追加到标签的类名 |

### 插槽

| 组件 | 插槽 | 说明 |
|---|---|---|
| `Chip` | `default` | 文本、图标或自定义内容 |
| `ChipLabel` | `default` | 标签文本内容 |
