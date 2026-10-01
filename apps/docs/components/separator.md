# Separator

A component for visually separating content sections.

## Import

```vue
<script setup lang="ts">
import { Separator } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/separator-basic.vue

:::

### Vertical

```vue
<template>
  <div style="display: flex; height: 100px;">
    <span>Left</span>
    <Separator orientation="vertical" />
    <span>Right</span>
  </div>
</template>
```

### With Label

```vue
<template>
  <div>
    <p>Section 1</p>
    <Separator>
      <span>OR</span>
    </Separator>
    <p>Section 2</p>
  </div>
</template>
```

### Colors

```vue
<template>
  <Separator />
</template>
```

### Sizes

```vue
<template>
  <Separator />
</template>
```

## API

### Separator Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The separator orientation |

### Separator Slots

| Slot | Description |
|------|-------------|
| `default` | Label content in the middle of the separator |

## Accessibility

- Separator uses `role="separator"` for proper semantics
- Decorative separators use `aria-hidden="true"`
- Screen reader friendly
