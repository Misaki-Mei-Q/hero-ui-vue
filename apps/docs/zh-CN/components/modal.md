# Modal 模态框

模态框是用于承载聚焦式用户交互和重要内容的对话框浮层。

## 导入

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

## 用法

### 默认值

:::preview

demo-preview=../../demos/modal-default.vue

:::

## 结构

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

### 位置

:::preview

demo-preview=../../demos/modal-placements.vue

:::

### 遮罩变体

:::preview

demo-preview=../../demos/modal-backdrop-variants.vue

:::

### 尺寸

:::preview

demo-preview=../../demos/modal-sizes.vue

:::

### 自定义遮罩

:::preview

demo-preview=../../demos/modal-custom-backdrop.vue

:::

### 关闭行为

:::preview

demo-preview=../../demos/modal-dismiss-behavior.vue

:::

### 关闭方式

:::preview

demo-preview=../../demos/modal-close-methods.vue

:::

### 滚动行为

:::preview

demo-preview=../../demos/modal-scroll-comparison.vue

:::

### 受控状态

:::preview

demo-preview=../../demos/modal-controlled.vue

:::

### 表单示例

:::preview

demo-preview=../../demos/modal-with-form.vue

:::

### 自定义触发器

:::preview

demo-preview=../../demos/modal-custom-trigger.vue

:::

### 自定义动画

:::preview

demo-preview=../../demos/modal-custom-animations.vue

:::

### 自定义 Portal

:::preview

demo-preview=../../demos/modal-custom-portal.vue

:::

## API

### Modal 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `modelValue` | `boolean` | `undefined` | 受控的打开状态。 |
| `isOpen` | `boolean` | `undefined` | 备用的受控打开状态。 |
| `defaultOpen` | `boolean` | `false` | 初始非受控打开状态。 |

### ModalBackdrop 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `variant` | `'transparent' \| 'opaque' \| 'blur'` | `'opaque'` | 遮罩处理方式。 |
| `isDismissable` | `boolean` | `true` | 点击遮罩时关闭。 |
| `isKeyboardDismissDisabled` | `boolean` | `false` | 禁用 Escape 关闭。 |
| `modelValue` | `boolean` | `undefined` | 独立的受控打开状态。 |
| `isOpen` | `boolean` | `undefined` | 独立受控打开状态的别名。 |
| `portalContainer` | `HTMLElement \| string` | `'body'` | 自定义 teleport 目标。 |
| `unstablePortalContainer` | `HTMLElement` | `undefined` | 与 React 兼容的自定义 portal 目标别名。 |

### ModalContainer 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `placement` | `'auto' \| 'top' \| 'center' \| 'bottom'` | `'auto'` | 对话框位置。 |
| `scroll` | `'inside' \| 'outside'` | `'inside'` | 滚动行为。 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'cover' \| 'full'` | `'md'` | 对话框宽度或视口预设。 |

### ModalHeading 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `as` | `string` | `undefined` | 覆盖渲染的标题元素。 |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3` | React Aria 的标题级别语义。 |
