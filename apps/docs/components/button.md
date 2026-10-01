# Button

A clickable button component with multiple variants and states.

## Import

```ts
import { Button } from '@misaki-mei/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/button-basic.vue

:::

### Variants

:::preview

demo-preview=../demos/button-variants.vue

:::

### With Icons

:::preview

demo-preview=../demos/button-with-icons.vue

:::

### Icon Only

:::preview

demo-preview=../demos/button-icon-only.vue

:::

### Loading

:::preview

demo-preview=../demos/button-loading.vue

:::

### Loading State

:::preview

demo-preview=../demos/button-loading-state.vue

:::

### Sizes

:::preview

demo-preview=../demos/button-sizes.vue

:::

### Full Width

:::preview

demo-preview=../demos/button-full-width.vue

:::

### Disabled

:::preview

demo-preview=../demos/button-disabled.vue

:::

### Social Buttons

:::preview

demo-preview=../demos/button-social.vue

:::

## Styling

### Passing Tailwind CSS classes

```vue
<template>
  <Button class="bg-purple-500 text-white hover:bg-purple-600">
    Purple Button
  </Button>
</template>
```

### CSS Classes

| Class | Description |
|------|-------------|
| `.button` | Base button styles |
| `.button--sm` | Small size variant |
| `.button--md` | Medium size variant |
| `.button--lg` | Large size variant |
| `.button--primary` | Primary variant |
| `.button--secondary` | Secondary variant |
| `.button--tertiary` | Tertiary variant |
| `.button--outline` | Outline variant |
| `.button--ghost` | Ghost variant |
| `.button--danger` | Danger variant |
| `.button--danger-soft` | Soft danger variant |
| `.button--icon-only` | Icon-only modifier |
| `.button--full-width` | Full-width modifier |

### Interactive States

The Vue button emits the same state attributes expected by the React CSS source:

| State | Selector |
|------|----------|
| Hover | `[data-hovered="true"]` |
| Pressed | `[data-pressed="true"]` |
| Focus visible | `[data-focus-visible="true"]` |
| Disabled | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| Pending | `[data-pending="true"]` |

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'danger-soft' \| 'outline' \| 'ghost'` | `undefined` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `isDisabled` | `boolean` | `false` | React-style disabled alias |
| `isPending` | `boolean` | `false` | Emits pending state and prevents pointer interaction |
| `fullWidth` | `boolean` | `false` | Whether the button takes full width |
| `isIconOnly` | `boolean` | `false` | Whether the button is icon-only |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted when button is clicked |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Button content |
