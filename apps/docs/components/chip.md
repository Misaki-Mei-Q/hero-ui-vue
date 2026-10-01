# Chip

Small informational label for statuses, categories, and compact metadata.

## Import

```vue
<script setup lang="ts">
import { Chip, ChipLabel } from '@misaki-mei-q/heroui-vue'
</script>
```

## Anatomy

Plain text children are automatically wrapped in `ChipLabel`. When composing icons with labels, use `ChipLabel` explicitly.

```vue
<template>
  <Chip>
    <ChipLabel>Label text</ChipLabel>
  </Chip>
</template>
```

## Usage

### Basic

:::preview

demo-preview=../demos/chip-basic.vue

:::

### Variants

:::preview

demo-preview=../demos/chip-variants.vue

:::

### With Icons

:::preview

demo-preview=../demos/chip-with-icon.vue

:::

### Statuses

:::preview

demo-preview=../demos/chip-statuses.vue

:::

## Styling

### Passing Classes

```vue
<template>
  <Chip class="rounded-full px-4 py-2 font-bold">
    <ChipLabel class="text-lg uppercase">Custom Styled</ChipLabel>
  </Chip>
</template>
```

### CSS Classes

| Class | Description |
|---|---|
| `.chip` | Base chip container |
| `.chip__label` | Label text slot |
| `.chip--accent` | Accent color |
| `.chip--danger` | Danger color |
| `.chip--default` | Default color |
| `.chip--success` | Success color |
| `.chip--warning` | Warning color |
| `.chip--primary` | Filled background variant |
| `.chip--secondary` | Secondary variant |
| `.chip--tertiary` | Transparent variant |
| `.chip--soft` | Soft background variant |
| `.chip--sm` | Small size |
| `.chip--md` | Medium size |
| `.chip--lg` | Large size |

## API

### Chip Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color variant |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'soft'` | `'secondary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Chip size |
| `class` | `string` | `undefined` | Additional classes for the chip root |

### ChipLabel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional classes for the label |

### Slots

| Component | Slot | Description |
|---|---|---|
| `Chip` | `default` | Text, icons, or custom content |
| `ChipLabel` | `default` | Label text content |
