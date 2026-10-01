# Drawer 抽屉

抽屉是用于展示补充内容和操作的滑出式面板。

## 导入

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

## 用法

### 默认值

:::preview

demo-preview=../../demos/drawer-basic.vue

:::

## 结构

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

### 位置

:::preview

demo-preview=../../demos/drawer-placements.vue

:::

### 遮罩变体

:::preview

demo-preview=../../demos/drawer-backdrop-variants.vue

:::

### 不可关闭

:::preview

demo-preview=../../demos/drawer-non-dismissable.vue

:::

### 可滚动内容

:::preview

demo-preview=../../demos/drawer-scrollable-content.vue

:::

### 受控状态

:::preview

demo-preview=../../demos/drawer-controlled.vue

:::

### 表单示例

:::preview

demo-preview=../../demos/drawer-with-form.vue

:::

### 导航抽屉

:::preview

demo-preview=../../demos/drawer-navigation.vue

:::

## API

### Drawer 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `modelValue` | `boolean` | `undefined` | 受控的打开状态。 |
| `isOpen` | `boolean` | `undefined` | 替代的受控打开状态。 |
| `defaultOpen` | `boolean` | `false` | 初始的非受控打开状态。 |

### DrawerBackdrop 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `variant` | `'transparent' \| 'opaque' \| 'blur'` | `'opaque'` | 遮罩层样式。 |
| `isDismissable` | `boolean` | `true` | 按下遮罩层或拖动超过关闭阈值时关闭。 |
| `isKeyboardDismissDisabled` | `boolean` | `false` | 禁用 Escape 键关闭。 |
| `modelValue` | `boolean` | `undefined` | 独立的受控打开状态。 |
| `isOpen` | `boolean` | `undefined` | 独立受控打开状态的别名。 |
| `portalContainer` | `HTMLElement \| string` | `'body'` | 自定义 teleport 目标。 |
| `unstablePortalContainer` | `HTMLElement` | `undefined` | 与 React 兼容的自定义 portal 目标别名。 |

### DrawerContent 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `placement` | `'bottom' \| 'top' \| 'left' \| 'right'` | `'bottom'` | 抽屉出现的边缘位置。 |

### DrawerHeading 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `as` | `string` | `undefined` | 覆盖渲染的标题元素。 |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | 标题层级语义。 |

## 相关组件

- [Modal](/zh-CN/components/modal)
- [Close Button](/zh-CN/components/close-button)
- [Button](/zh-CN/components/button)
