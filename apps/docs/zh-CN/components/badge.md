# Badge 徽章

相对于另一个元素展示的小型指示标记，常用于通知计数、状态圆点和标签。

## 导入

```vue
<script setup lang="ts">
import { Badge, BadgeAnchor, BadgeLabel } from '@misaki-mei/heroui-vue'
</script>
```

## 结构

`Badge` 相对于 `BadgeAnchor` 定位。普通子内容会被自动包裹进 `BadgeLabel`；未提供子内容时，徽章会渲染为圆点指示器。

```vue
<template>
  <BadgeAnchor>
    <Avatar />
    <Badge color="danger">5</Badge>
  </BadgeAnchor>
</template>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/badge-basic.vue

:::

### 颜色

:::preview

demo-preview=../../demos/badge-colors.vue

:::

### 尺寸

:::preview

demo-preview=../../demos/badge-sizes.vue

:::

### 变体

:::preview

demo-preview=../../demos/badge-variants.vue

:::

### 位置

:::preview

demo-preview=../../demos/badge-placements.vue

:::

### 带内容

:::preview

demo-preview=../../demos/badge-with-content.vue

:::

### 圆点徽章

:::preview

demo-preview=../../demos/badge-dot.vue

:::

## 样式

### 传入类名

```vue
<template>
  <BadgeAnchor>
    <Avatar />
    <Badge class="border-2 border-white" color="danger">
      <BadgeLabel class="font-bold">99+</BadgeLabel>
    </Badge>
  </BadgeAnchor>
</template>
```

### CSS 类

| 类名 | 说明 |
|---|---|
| `.badge` | 徽章基础容器 |
| `.badge__label` | 标签文本插槽 |
| `.badge-anchor` | 被锚定元素的定位包裹层 |
| `.badge--accent` | 强调色 |
| `.badge--danger` | 危险色 |
| `.badge--default` | 默认色 |
| `.badge--success` | 成功色 |
| `.badge--warning` | 警告色 |
| `.badge--primary` | 填充背景变体 |
| `.badge--secondary` | 次要背景变体 |
| `.badge--soft` | 柔和背景变体 |
| `.badge--sm` | 小尺寸 |
| `.badge--md` | 中尺寸 |
| `.badge--lg` | 大尺寸 |
| `.badge--top-right` | 右上位置 |
| `.badge--top-left` | 左上位置 |
| `.badge--bottom-right` | 右下位置 |
| `.badge--bottom-left` | 左下位置 |

## API

### Badge 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 颜色变体 |
| `variant` | `'primary' \| 'secondary' \| 'soft'` | `'primary'` | 视觉样式变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 徽章尺寸 |
| `placement` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | 相对 `BadgeAnchor` 的位置 |
| `class` | `string` | `undefined` | 附加到徽章根元素的类名 |

### BadgeAnchor 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 附加到锚定包裹层的类名 |

### BadgeLabel 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 附加到标签的类名 |

### 插槽

| 组件 | 插槽 | 说明 |
|---|---|---|
| `Badge` | `default` | 文本、数字、图标或自定义内容 |
| `BadgeAnchor` | `default` | 被锚定的元素与徽章 |
| `BadgeLabel` | `default` | 标签内容 |
