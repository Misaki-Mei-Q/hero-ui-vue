# CloseButton

Button for closing dialogs, modals, banners, or dismissible content.

## Import

```vue
<script setup lang="ts">
import { CloseButton } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Default

:::preview

demo-preview=../demos/close-button-basic.vue

:::

### With Custom Icon

:::preview

demo-preview=../demos/close-button-with-custom-icon.vue

:::

### Interactive

:::preview

demo-preview=../demos/close-button-interactive.vue

:::

## Styling

### Passing Classes

```vue
<template>
  <CloseButton class="text-red-600 hover:bg-red-100" />
</template>
```

### CSS Classes

| Class | Description |
|---|---|
| `.close-button` | Base button |
| `.close-button--default` | Default variant |

### Interactive States

| Selector | Description |
|---|---|
| `:hover`, `[data-hovered="true"]` | Hover state |
| `:active`, `[data-pressed="true"]` | Pressed state |
| `:focus-visible`, `[data-focus-visible="true"]` | Keyboard focus state |
| `:disabled`, `[aria-disabled="true"]` | Disabled state |

## API

### CloseButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` | `'default'` | Visual variant |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `isDisabled` | `boolean` | `false` | React-style disabled alias |
| `ariaLabel` | `string` | `'Close'` | Accessible label |

### Events

| Event | Payload | Description |
|---|---|---|
| `click` | `MouseEvent` | Fired when the button is clicked |

### Slots

| Slot | Description |
|---|---|
| `default` | Custom icon content |
