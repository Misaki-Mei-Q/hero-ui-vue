# Link

A component for creating accessible hyperlinks with various styles.

## Import

```vue
<script setup lang="ts">
import { Link } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/link-basic.vue

:::

### External Links

```vue
<template>
  <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
    External Link
  </Link>
</template>
```

## API

### Link Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | The link URL |
| `target` | `string` | - | The link target (e.g. `_blank`) |
| `rel` | `string` | - | The link rel attribute |
| `as` | `string` | `'a'` | The HTML element to render |

### Link Events

| Event | Type | Description |
|-------|------|-------------|
| `click` | `(event: MouseEvent) => void` | Fired when the link is clicked |

### Link Slots

| Slot | Description |
|------|-------------|
| `default` | The link content |
| `startContent` | Content before the link text |
| `endContent` | Content after the link text |

## Accessibility

- Link uses semantic `<a>` HTML element
- External links include `rel="noopener noreferrer"` for security
- External links announce "opens in new tab" to screen readers
- Disabled links use `aria-disabled` and prevent navigation
- Proper focus indicators
