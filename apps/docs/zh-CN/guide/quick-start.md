# 快速开始

本指南将帮助你快速上手 HeroUI Vue 组件。

## 基本用法

在 Vue 文件中导入并使用组件：

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Button variant="primary">
    点击我
  </Button>
</template>
```

## 组件变体

大多数组件支持多种变体，以适配不同场景：

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="flex gap-3">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
</template>
```

## 尺寸

组件通常支持多种尺寸：

```vue
<template>
  <div class="flex items-center gap-3">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
</template>
```

## 暗色模式

HeroUI Vue 内置暗色模式支持。在根元素上添加 `dark` 类即可启用暗色模式：

```html
<html class="dark">
  <!-- 你的应用 -->
</html>
```

## TypeScript 支持

所有组件都附带完整的 TypeScript 类型定义：

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
import type { ButtonVariants } from '@misaki-mei/heroui-vue'

const variant: ButtonVariants['variant'] = 'primary'
</script>
```

## 下一步

浏览 [组件](/zh-CN/components/) 章节，查看所有可用组件及其 API。
