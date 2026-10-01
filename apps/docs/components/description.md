# Description

A component for displaying descriptive text associated with form fields or other UI elements.

## Import

```vue
<script setup lang="ts">
import { Description } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/description-basic.vue

:::

### With Form Field

```vue
<template>
  <div>
    <Label for="email">Email</Label>
    <Input id="email" type="email" />
    <Description>
      We'll never share your email with anyone else.
    </Description>
  </div>
</template>
```

### Error State

```vue
<template>
  <Description>This field is required.</Description>
</template>
```

## API

### Description Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` | `'default'` | The description variant |

### Description Slots

| Slot | Description |
|------|-------------|
| `default` | The description content |

## Accessibility

- Description uses proper semantic HTML
- Automatically linked to form fields via `aria-describedby`
- Screen reader friendly
