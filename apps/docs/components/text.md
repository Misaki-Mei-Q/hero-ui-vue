# Text

A component for displaying text content with various styles and semantic meanings.

## Import

```vue
<script setup lang="ts">
import { Text } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/text-basic.vue

:::

### Variants

```vue
<template>
  <div class="flex flex-col gap-2">
    <Text>Default text</Text>
    <Text variant="muted">Muted text</Text>
    <Text variant="success">Success text</Text>
    <Text variant="warning">Warning text</Text>
    <Text variant="danger">Danger text</Text>
  </div>
</template>
```

### Sizes

```vue
<template>
  <div class="flex flex-col gap-2">
    <Text size="xs">Extra small text</Text>
    <Text size="sm">Small text</Text>
    <Text size="base">Base text</Text>
    <Text size="lg">Large text</Text>
    <Text size="xl">Extra large text</Text>
  </div>
</template>
```

## API

### Text Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'muted' \| 'danger' \| 'success' \| 'warning'` | `'default'` | The text color variant |
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl'` | `undefined` | The text size |
| `as` | `string` | `'span'` | The HTML element to render |

### Text Slots

| Slot | Description |
|------|-------------|
| `default` | The text content |

## Accessibility

- Text uses semantic HTML elements
- Proper color contrast ratios
- Screen reader friendly
