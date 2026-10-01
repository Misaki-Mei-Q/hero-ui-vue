# Text 文本

用于以多种样式和语义显示文本内容的组件。

## 导入

```vue
<script setup lang="ts">
import { Text } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/text-basic.vue

:::

### 变体

```vue
<template>
  <div class="flex flex-col gap-2">
    <Text>Default text</Text>
    <Text variant="muted">Muted text</Text>
    <Text variant="success">Success text</Text>
    <Text variant="warning">Warning text</Text>
    <Text variant="danger">Danger text</Text>
  </div>
</template>
```

### 尺寸

```vue
<template>
  <div class="flex flex-col gap-2">
    <Text size="xs">Extra small text</Text>
    <Text size="sm">Small text</Text>
    <Text size="base">Base text</Text>
    <Text size="lg">Large text</Text>
    <Text size="xl">Extra large text</Text>
  </div>
</template>
```

## API

### Text 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default' \| 'muted' \| 'danger' \| 'success' \| 'warning'` | `'default'` | 文本颜色变体 |
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl'` | `undefined` | 文本尺寸 |
| `as` | `string` | `'span'` | 要渲染的 HTML 元素 |

### Text 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 文本内容 |

## 无障碍

- Text 使用语义化的 HTML 元素
- 合适的颜色对比度
- 对屏幕阅读器友好
