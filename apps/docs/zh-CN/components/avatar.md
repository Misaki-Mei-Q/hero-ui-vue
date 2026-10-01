# Avatar 头像

展示用户或实体的头像图片，并在图片缺失或仍在加载时显示回退内容。

## 导入

```vue
<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/avatar-basic.vue

:::

### 结构

```vue
<template>
  <Avatar>
    <AvatarImage src="..." alt="..." />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</template>
```

### 尺寸

:::preview

demo-preview=../../demos/avatar-sizes.vue

:::

### 颜色

:::preview

demo-preview=../../demos/avatar-colors.vue

:::

### 变体

:::preview

demo-preview=../../demos/avatar-variants.vue

:::

### 回退内容

:::preview

demo-preview=../../demos/avatar-fallback.vue

:::

### 头像组

:::preview

demo-preview=../../demos/avatar-group.vue

:::

### 自定义样式

:::preview

demo-preview=../../demos/avatar-custom-styles.vue

:::

## 样式

### 传入类名

```vue
<template>
  <Avatar class="size-20">
    <AvatarImage src="..." alt="..." />
    <AvatarFallback>XL</AvatarFallback>
  </Avatar>
</template>
```

### CSS 类

| 类名 | 说明 |
|---|---|
| `.avatar` | 头像基础容器 |
| `.avatar__image` | 图片元素 |
| `.avatar__fallback` | 回退内容容器 |
| `.avatar--sm` | 小尺寸 |
| `.avatar--md` | 中尺寸 |
| `.avatar--lg` | 大尺寸 |
| `.avatar--soft` | 柔和视觉变体 |
| `.avatar__fallback--default` | 默认回退颜色 |
| `.avatar__fallback--accent` | 强调回退颜色 |
| `.avatar__fallback--success` | 成功回退颜色 |
| `.avatar__fallback--warning` | 警告回退颜色 |
| `.avatar__fallback--danger` | 危险回退颜色 |

## API

### Avatar 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 头像尺寸 |
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 回退颜色主题 |
| `variant` | `'default' \| 'soft'` | `'default'` | 视觉样式变体 |
| `class` | `string` | `undefined` | 附加到头像根元素的类名 |

### AvatarImage 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `src` | `string` | `undefined` | 图片源地址 |
| `srcset` | `string` | `undefined` | 响应式图片 `srcset` |
| `sizes` | `string` | `undefined` | 响应式图片 `sizes` |
| `alt` | `string` | `undefined` | 替代文本 |
| `crossorigin` | `'anonymous' \| 'use-credentials'` | `undefined` | CORS 设置 |
| `loading` | `'eager' \| 'lazy'` | `undefined` | 原生图片加载策略 |
| `class` | `string` | `undefined` | 附加到图片的类名 |

### AvatarImage 事件

| 事件 | 载荷 | 说明 |
|---|---|---|
| `load` | `Event` | 图片加载完成时触发 |
| `error` | `Event` | 图片加载失败、需要显示回退内容时触发 |

### AvatarFallback 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `delayMs` | `number` | `undefined` | 渲染回退内容前的延迟时间 |
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | Parent color | 覆盖回退颜色 |
| `class` | `string` | `undefined` | 附加到回退内容的类名 |

### 插槽

| 组件 | 插槽 | 说明 |
|---|---|---|
| `Avatar` | `default` | 图片与回退内容 |
| `AvatarFallback` | `default` | 文本、图标或自定义回退内容 |
