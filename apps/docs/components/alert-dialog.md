# AlertDialog

Alert dialogs interrupt the current flow to ask the user to confirm a consequential action.

## Import

```vue
<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseTrigger,
  AlertDialogContainer,
  AlertDialogDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogIcon,
  AlertDialogTrigger,
} from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Default

:::preview

demo-preview=../demos/alert-dialog-default.vue

:::

### With Close Button

:::preview

demo-preview=../demos/alert-dialog-with-close-button.vue

:::

### Backdrop Variants

:::preview

demo-preview=../demos/alert-dialog-backdrop-variants.vue

:::

### Sizes

:::preview

demo-preview=../demos/alert-dialog-sizes.vue

:::

## Anatomy

```vue
<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button>Open</Button>
    </AlertDialogTrigger>

    <AlertDialogBackdrop>
      <AlertDialogContainer>
        <AlertDialogDialog>
          <AlertDialogCloseTrigger />
          <AlertDialogHeader>
            <AlertDialogIcon />
            <AlertDialogHeading>Confirm action?</AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>Dialog content</AlertDialogBody>
          <AlertDialogFooter v-slot="{ close }">
            <Button variant="secondary" @click="close">Cancel</Button>
            <Button variant="danger" @click="close">Confirm</Button>
          </AlertDialogFooter>
        </AlertDialogDialog>
      </AlertDialogContainer>
    </AlertDialogBackdrop>
  </AlertDialog>
</template>
```

## API

### AlertDialog Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `undefined` | Controlled open state. |
| `isOpen` | `boolean` | `undefined` | Alternative controlled open state. |
| `defaultOpen` | `boolean` | `false` | Initial uncontrolled open state. |

### AlertDialogBackdrop Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'transparent' \| 'opaque' \| 'blur'` | `'opaque'` | Backdrop treatment. |
| `isDismissable` | `boolean` | `false` | Close when pressing the backdrop. |
| `isKeyboardDismissDisabled` | `boolean` | `true` | Disable Escape dismissal. |

### AlertDialogContainer Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `'auto' \| 'top' \| 'center' \| 'bottom'` | `'auto'` | Dialog placement. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'cover'` | `'md'` | Dialog width preset. |

### AlertDialogIcon Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `status` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'danger'` | Semantic icon color and default icon. |
