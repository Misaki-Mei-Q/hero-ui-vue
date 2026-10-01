# Label

A component for labeling form fields and other UI elements.

## Import

```vue
<script setup lang="ts">
import { Label } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/label-basic.vue

:::

### Required Indicator

```vue
<template>
  <Label for="username" :is-required="true">Username</Label>
</template>
```

### With Description

```vue
<template>
  <div>
    <Label for="password">Password</Label>
    <Input id="password" type="password" />
    <Description>Must be at least 8 characters</Description>
  </div>
</template>
```

## API

### Label Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `for` | `string` | - | The id of the associated form field |
| `isRequired` | `boolean` | `false` | Whether to show required indicator |

### Label Slots

| Slot | Description |
|------|-------------|
| `default` | The label content |

## Accessibility

- Label uses semantic `<label>` HTML element
- Properly associated with form fields via `for` attribute
- Required indicator is announced to screen readers
- Clicking label focuses the associated field
