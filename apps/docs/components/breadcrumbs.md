# Breadcrumbs

Navigation breadcrumbs showing the current page location within a hierarchy.

## Import

```vue
<script setup lang="ts">
import { Breadcrumbs, BreadcrumbsItem } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/breadcrumbs-basic.vue

:::

### Level 2

:::preview

demo-preview=../demos/breadcrumbs-level-2.vue

:::

### Level 3

:::preview

demo-preview=../demos/breadcrumbs-level-3.vue

:::

### Custom Separator

:::preview

demo-preview=../demos/breadcrumbs-custom-separator.vue

:::

### Disabled

:::preview

demo-preview=../demos/breadcrumbs-disabled.vue

:::

## Anatomy

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

### Breadcrumbs Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `separator` | `'chevron' \| 'slash'` | `'chevron'` | Built-in separator shown between items. Use the `separator` slot for custom icons. |
| `isDisabled` | `boolean` | `false` | Disable every breadcrumb link. |
| `class` | `string` | `undefined` | Additional classes for the list. |

### BreadcrumbsItem Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | `undefined` | Link destination. Items without `href` are current page labels. |
| `isCurrent` | `boolean` | `undefined` | Force current page state. |
| `isDisabled` | `boolean` | `false` | Disable this item. |
| `target` | `string` | `undefined` | Anchor target. |
| `rel` | `string` | `undefined` | Anchor relationship. |
