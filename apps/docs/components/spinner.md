# Spinner

A loading indicator component for showing progress or activity.

## Import

```vue
<script setup lang="ts">
import { Spinner } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/spinner-basic.vue

:::

### Sizes

:::preview

demo-preview=../demos/spinner-sizes.vue

:::

### Colors

:::preview

demo-preview=../demos/spinner-colors.vue

:::

### With Label

```vue
<template>
  <Spinner label="Loading..." />
</template>
```

### Label Placement

```vue
<template>
  <Spinner label="Loading..." label-placement="bottom" />
  <Spinner label="Loading..." label-placement="right" />
</template>
```

### In Button

```vue
<template>
  <Button :disabled="loading">
    <Spinner v-if="loading" size="sm" />
    {{ loading ? 'Loading...' : 'Submit' }}
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
</script>
```

## API

### Spinner Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | The spinner size |
| `color` | `'current' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'accent'` | The spinner color |
| `label` | `string` | - | The loading label text |
| `labelPlacement` | `'bottom' \| 'right'` | `'bottom'` | The label placement |

### Spinner Slots

| Slot | Description |
|------|-------------|
| `label` | Custom label content |

## Accessibility

- Spinner uses `role="status"` for proper semantics
- Includes `aria-label` for screen readers
- Label is properly associated with the spinner
- Announces loading state to assistive technologies
