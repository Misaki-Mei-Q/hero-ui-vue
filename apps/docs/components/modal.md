# Modal

Modal is a dialog overlay for focused user interactions and important content.

## Import

```vue
<script setup lang="ts">
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseTrigger,
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalIcon,
  ModalTrigger,
} from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Default

:::preview

demo-preview=../demos/modal-default.vue

:::

## Anatomy

```vue
<template>
  <Modal>
    <Button>Open Modal</Button>
    <ModalBackdrop>
      <ModalContainer>
        <ModalDialog>
          <ModalCloseTrigger />
          <ModalHeader>
            <ModalIcon />
            <ModalHeading>Title</ModalHeading>
          </ModalHeader>
          <ModalBody>Dialog content</ModalBody>
          <ModalFooter />
        </ModalDialog>
      </ModalContainer>
    </ModalBackdrop>
  </Modal>
</template>
```

### Placement

:::preview

demo-preview=../demos/modal-placements.vue

:::

### Backdrop Variants

:::preview

demo-preview=../demos/modal-backdrop-variants.vue

:::

### Sizes

:::preview

demo-preview=../demos/modal-sizes.vue

:::

### Custom Backdrop

:::preview

demo-preview=../demos/modal-custom-backdrop.vue

:::

### Dismiss Behavior

:::preview

demo-preview=../demos/modal-dismiss-behavior.vue

:::

### Close Methods

:::preview

demo-preview=../demos/modal-close-methods.vue

:::

### Scroll Behavior

:::preview

demo-preview=../demos/modal-scroll-comparison.vue

:::

### Controlled State

:::preview

demo-preview=../demos/modal-controlled.vue

:::

### With Form

:::preview

demo-preview=../demos/modal-with-form.vue

:::

### Custom Trigger

:::preview

demo-preview=../demos/modal-custom-trigger.vue

:::

### Custom Animations

:::preview

demo-preview=../demos/modal-custom-animations.vue

:::

### Custom Portal

:::preview

demo-preview=../demos/modal-custom-portal.vue

:::

## API

### Modal Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `undefined` | Controlled open state. |
| `isOpen` | `boolean` | `undefined` | Alternative controlled open state. |
| `defaultOpen` | `boolean` | `false` | Initial uncontrolled open state. |

### ModalBackdrop Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'transparent' \| 'opaque' \| 'blur'` | `'opaque'` | Backdrop treatment. |
| `isDismissable` | `boolean` | `true` | Close when pressing the backdrop. |
| `isKeyboardDismissDisabled` | `boolean` | `false` | Disable Escape dismissal. |
| `modelValue` | `boolean` | `undefined` | Standalone controlled open state. |
| `isOpen` | `boolean` | `undefined` | Standalone controlled open state alias. |
| `portalContainer` | `HTMLElement \| string` | `'body'` | Custom teleport target. |
| `unstablePortalContainer` | `HTMLElement` | `undefined` | React-compatible custom portal target alias. |

### ModalContainer Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `'auto' \| 'top' \| 'center' \| 'bottom'` | `'auto'` | Dialog placement. |
| `scroll` | `'inside' \| 'outside'` | `'inside'` | Scroll behavior. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'cover' \| 'full'` | `'md'` | Dialog width or viewport preset. |

### ModalHeading Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `string` | `undefined` | Rendered heading element override. |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3` | React Aria heading level semantics. |
