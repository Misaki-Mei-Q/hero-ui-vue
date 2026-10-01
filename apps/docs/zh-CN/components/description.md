# Description 描述

用于显示与表单字段或其他 UI 元素相关联的说明文字的组件。

## 导入

```vue
<script setup lang="ts">
import { Description } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/description-basic.vue

:::

### 配合表单字段使用

```vue
<template>
  <div>
    <Label for="email">Email</Label>
    <Input id="email" type="email" />
    <Description>
      We'll never share your email with anyone else.
    </Description>
  </div>
</template>
```

### 错误状态

```vue
<template>
  <Description>This field is required.</Description>
</template>
```

## API

### Description 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default'` | `'default'` | 描述的变体样式 |

### Description 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 描述内容 |

## 无障碍

- Description 使用正确的语义化 HTML
- 通过 `aria-describedby` 自动关联到表单字段
- 对屏幕阅读器友好
