# AlertDialog 警示对话框

警示对话框会中断当前流程，要求用户确认一项重要的操作。

## 导入

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

## 用法

### 默认值

:::preview

demo-preview=../../demos/alert-dialog-default.vue

:::

### 带关闭按钮

:::preview

demo-preview=../../demos/alert-dialog-with-close-button.vue

:::

### 遮罩层变体

:::preview

demo-preview=../../demos/alert-dialog-backdrop-variants.vue

:::

### 尺寸

:::preview

demo-preview=../../demos/alert-dialog-sizes.vue

:::

## 结构

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

### AlertDialog 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `modelValue` | `boolean` | `undefined` | 受控的打开状态。 |
| `isOpen` | `boolean` | `undefined` | 另一种受控打开状态。 |
| `defaultOpen` | `boolean` | `false` | 初始的非受控打开状态。 |

### AlertDialogBackdrop 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `variant` | `'transparent' \| 'opaque' \| 'blur'` | `'opaque'` | 遮罩层处理方式。 |
| `isDismissable` | `boolean` | `false` | 点击遮罩层时关闭。 |
| `isKeyboardDismissDisabled` | `boolean` | `true` | 禁用 Escape 关闭。 |

### AlertDialogContainer 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `placement` | `'auto' \| 'top' \| 'center' \| 'bottom'` | `'auto'` | 对话框位置。 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'cover'` | `'md'` | 对话框宽度预设。 |

### AlertDialogIcon 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `status` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'danger'` | 语义化图标颜色与默认图标。 |
