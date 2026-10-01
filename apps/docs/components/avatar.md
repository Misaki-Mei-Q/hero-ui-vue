# Avatar

Display user or entity profile images with a fallback when the image is missing or still loading.

## Import

```vue
<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/avatar-basic.vue

:::

### Anatomy

```vue
<template>
  <Avatar>
    <AvatarImage src="..." alt="..." />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</template>
```

### Sizes

:::preview

demo-preview=../demos/avatar-sizes.vue

:::

### Colors

:::preview

demo-preview=../demos/avatar-colors.vue

:::

### Variants

:::preview

demo-preview=../demos/avatar-variants.vue

:::

### Fallback Content

:::preview

demo-preview=../demos/avatar-fallback.vue

:::

### Avatar Group

:::preview

demo-preview=../demos/avatar-group.vue

:::

### Custom Styles

:::preview

demo-preview=../demos/avatar-custom-styles.vue

:::

## Styling

### Passing Classes

```vue
<template>
  <Avatar class="size-20">
    <AvatarImage src="..." alt="..." />
    <AvatarFallback>XL</AvatarFallback>
  </Avatar>
</template>
```

### CSS Classes

| Class | Description |
|---|---|
| `.avatar` | Base avatar container |
| `.avatar__image` | Image element |
| `.avatar__fallback` | Fallback content container |
| `.avatar--sm` | Small size |
| `.avatar--md` | Medium size |
| `.avatar--lg` | Large size |
| `.avatar--soft` | Soft visual variant |
| `.avatar__fallback--default` | Default fallback color |
| `.avatar__fallback--accent` | Accent fallback color |
| `.avatar__fallback--success` | Success fallback color |
| `.avatar__fallback--warning` | Warning fallback color |
| `.avatar__fallback--danger` | Danger fallback color |

## API

### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar size |
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Fallback color theme |
| `variant` | `'default' \| 'soft'` | `'default'` | Visual style variant |
| `class` | `string` | `undefined` | Additional classes for the avatar root |

### AvatarImage Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | `undefined` | Image source URL |
| `srcset` | `string` | `undefined` | Responsive image `srcset` |
| `sizes` | `string` | `undefined` | Responsive image `sizes` |
| `alt` | `string` | `undefined` | Alternative text |
| `crossorigin` | `'anonymous' \| 'use-credentials'` | `undefined` | CORS setting |
| `loading` | `'eager' \| 'lazy'` | `undefined` | Native image loading strategy |
| `class` | `string` | `undefined` | Additional classes for the image |

### AvatarImage Events

| Event | Payload | Description |
|---|---|---|
| `load` | `Event` | Emitted when the image loads |
| `error` | `Event` | Emitted when the image fails and fallback should show |

### AvatarFallback Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayMs` | `number` | `undefined` | Delay before rendering fallback content |
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | Parent color | Override fallback color |
| `class` | `string` | `undefined` | Additional classes for the fallback |

### Slots

| Component | Slot | Description |
|---|---|---|
| `Avatar` | `default` | Image and fallback content |
| `AvatarFallback` | `default` | Text, icon, or custom fallback content |
