# Breadcrumbs 面包屑

展示当前页面在层级结构中位置的导航面包屑。

## 导入

```vue
<script setup lang="ts">
import { Breadcrumbs, BreadcrumbsItem } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/breadcrumbs-basic.vue

:::

### 两级

:::preview

demo-preview=../../demos/breadcrumbs-level-2.vue

:::

### 三级

:::preview

demo-preview=../../demos/breadcrumbs-level-3.vue

:::

### 自定义分隔符

:::preview

demo-preview=../../demos/breadcrumbs-custom-separator.vue

:::

### 禁用

:::preview

demo-preview=../../demos/breadcrumbs-disabled.vue

:::

## 结构

```vue
<template>
  <Breadcrumbs>
    <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
    <BreadcrumbsItem href="#">Products</BreadcrumbsItem>
    <BreadcrumbsItem>Current Page</BreadcrumbsItem>
  </Breadcrumbs>
</template>
```

## API

### Breadcrumbs 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `separator` | `'chevron' \| 'slash'` | `'chevron'` | 项之间显示的内置分隔符。自定义图标请使用 `separator` 插槽。 |
| `isDisabled` | `boolean` | `false` | 禁用所有面包屑链接。 |
| `class` | `string` | `undefined` | 附加到列表的类名。 |

### BreadcrumbsItem 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `href` | `string` | `undefined` | 链接地址。没有 `href` 的项为当前页面标签。 |
| `isCurrent` | `boolean` | `undefined` | 强制当前页面状态。 |
| `isDisabled` | `boolean` | `false` | 禁用此项。 |
| `target` | `string` | `undefined` | 锚点 target。 |
| `rel` | `string` | `undefined` | 锚点 rel。 |
