# Drawer

Drawer is a slide-out panel for supplementary content and actions.

## Import

```vue
<script setup lang="ts">
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDialog,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerHeading,
  DrawerTrigger,
} from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Default

:::preview

demo-preview=../demos/drawer-basic.vue

:::

## Anatomy

```vue
<template>
  <Drawer>
    <Button>Open Drawer</Button>
    <DrawerBackdrop>
      <DrawerContent>
        <DrawerDialog>
          <DrawerHandle />
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerHeading>Title</DrawerHeading>
          </DrawerHeader>
          <DrawerBody>Drawer content</DrawerBody>
          <DrawerFooter />
        </DrawerDialog>
      </DrawerContent>
    </DrawerBackdrop>
  </Drawer>
</template>
```

### Placement

:::preview

demo-preview=../demos/drawer-placements.vue

:::

### Backdrop Variants

:::preview

demo-preview=../demos/drawer-backdrop-variants.vue

:::

### Non-Dismissable

:::preview

demo-preview=../demos/drawer-non-dismissable.vue

:::

### Scrollable Content

:::preview

demo-preview=../demos/drawer-scrollable-content.vue

:::

### Controlled State

:::preview

demo-preview=../demos/drawer-controlled.vue

:::

### With Form

:::preview

demo-preview=../demos/drawer-with-form.vue

:::

### Navigation Drawer

:::preview

demo-preview=../demos/drawer-navigation.vue

:::

## API

### Drawer Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `undefined` | Controlled open state. |
| `isOpen` | `boolean` | `undefined` | Alternative controlled open state. |
| `defaultOpen` | `boolean` | `false` | Initial uncontrolled open state. |

### DrawerBackdrop Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'transparent' \| 'opaque' \| 'blur'` | `'opaque'` | Backdrop treatment. |
| `isDismissable` | `boolean` | `true` | Close when pressing the backdrop or dragging past the dismiss threshold. |
| `isKeyboardDismissDisabled` | `boolean` | `false` | Disable Escape dismissal. |
| `modelValue` | `boolean` | `undefined` | Standalone controlled open state. |
| `isOpen` | `boolean` | `undefined` | Standalone controlled open state alias. |
| `portalContainer` | `HTMLElement \| string` | `'body'` | Custom teleport target. |
| `unstablePortalContainer` | `HTMLElement` | `undefined` | React-compatible custom portal target alias. |

### DrawerContent Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `'bottom' \| 'top' \| 'left' \| 'right'` | `'bottom'` | Drawer edge placement. |

### DrawerHeading Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `string` | `undefined` | Rendered heading element override. |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | Heading level semantics. |

## Related Components

- [Modal](/components/modal)
- [Close Button](/components/close-button)
- [Button](/components/button)
