# Badge

Display a small indicator relative to another element, commonly used for notification counts, status dots, and labels.

## Import

```vue
<script setup lang="ts">
import { Badge, BadgeAnchor, BadgeLabel } from '@misaki-mei-q/heroui-vue'
</script>
```

## Anatomy

`Badge` is positioned relative to `BadgeAnchor`. Plain children are automatically wrapped in `BadgeLabel`; when no children are provided, the badge renders as a dot indicator.

```vue
<template>
  <BadgeAnchor>
    <Avatar />
    <Badge color="danger">5</Badge>
  </BadgeAnchor>
</template>
```

## Usage

### Basic

:::preview

demo-preview=../demos/badge-basic.vue

:::

### Colors

:::preview

demo-preview=../demos/badge-colors.vue

:::

### Sizes

:::preview

demo-preview=../demos/badge-sizes.vue

:::

### Variants

:::preview

demo-preview=../demos/badge-variants.vue

:::

### Placements

:::preview

demo-preview=../demos/badge-placements.vue

:::

### With Content

:::preview

demo-preview=../demos/badge-with-content.vue

:::

### Dot Badge

:::preview

demo-preview=../demos/badge-dot.vue

:::

## Styling

### Passing Classes

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

### CSS Classes

| Class | Description |
|---|---|
| `.badge` | Base badge container |
| `.badge__label` | Label text slot |
| `.badge-anchor` | Positioning wrapper for the anchored element |
| `.badge--accent` | Accent color |
| `.badge--danger` | Danger color |
| `.badge--default` | Default color |
| `.badge--success` | Success color |
| `.badge--warning` | Warning color |
| `.badge--primary` | Filled background variant |
| `.badge--secondary` | Secondary background variant |
| `.badge--soft` | Soft background variant |
| `.badge--sm` | Small size |
| `.badge--md` | Medium size |
| `.badge--lg` | Large size |
| `.badge--top-right` | Top-right placement |
| `.badge--top-left` | Top-left placement |
| `.badge--bottom-right` | Bottom-right placement |
| `.badge--bottom-left` | Bottom-left placement |

## API

### Badge Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color variant |
| `variant` | `'primary' \| 'secondary' \| 'soft'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `placement` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Position relative to `BadgeAnchor` |
| `class` | `string` | `undefined` | Additional classes for the badge root |

### BadgeAnchor Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional classes for the anchor wrapper |

### BadgeLabel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional classes for the label |

### Slots

| Component | Slot | Description |
|---|---|---|
| `Badge` | `default` | Text, number, icon, or custom content |
| `BadgeAnchor` | `default` | Anchored element and badge |
| `BadgeLabel` | `default` | Label content |
