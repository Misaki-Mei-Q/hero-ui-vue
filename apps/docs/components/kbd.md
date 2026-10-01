# Kbd

A component for displaying keyboard shortcuts and key combinations.

## Import

```vue
<script setup lang="ts">
import { Kbd } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/kbd-basic.vue

:::

### Key Combinations

```vue
<template>
  <p>
    <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy
  </p>
  <p>
    <Kbd>Cmd</Kbd> + <Kbd>V</Kbd> to paste
  </p>
  <p>
    <Kbd>Shift</Kbd> + <Kbd>Alt</Kbd> + <Kbd>F</Kbd> to format
  </p>
</template>
```

### Sizes

```vue
<template>
  <Kbd>Esc</Kbd>
  <Kbd>Enter</Kbd>
  <Kbd>Space</Kbd>
</template>
```

### Variants

```vue
<template>
  <Kbd>Ctrl</Kbd>
  <Kbd variant="light">Alt</Kbd>
</template>
```

### Common Keys

```vue
<template>
  <div>
    <Kbd>⌘</Kbd> Command
    <Kbd>⌃</Kbd> Control
    <Kbd>⌥</Kbd> Option
    <Kbd>⇧</Kbd> Shift
    <Kbd>⏎</Kbd> Return
    <Kbd>⌫</Kbd> Delete
    <Kbd>⎋</Kbd> Escape
    <Kbd>⇥</Kbd> Tab
    <Kbd>⇪</Kbd> Caps Lock
  </div>
</template>
```

## API

### Kbd Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'light'` | `'default'` | The kbd variant |
| `keys` | `string[]` | - | Array of key names to display |

### Kbd Slots

| Slot | Description |
|------|-------------|
| `default` | The key content |

## Accessibility

- Kbd uses semantic `<kbd>` HTML element
- Properly styled to distinguish from regular text
- Screen reader friendly
