# Separator 分隔符

用于在视觉上分隔内容区域的组件。

## 导入

```vue
<script setup lang="ts">
import { Separator } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/separator-basic.vue

:::

### 垂直

```vue
<template>
  <div style="display: flex; height: 100px;">
    <span>Left</span>
    <Separator orientation="vertical" />
    <span>Right</span>
  </div>
</template>
```

### 带标签

```vue
<template>
  <div>
    <p>Section 1</p>
    <Separator>
      <span>OR</span>
    </Separator>
    <p>Section 2</p>
  </div>
</template>
```

### 颜色

```vue
<template>
  <Separator />
</template>
```

### 尺寸

```vue
<template>
  <Separator />
</template>
```

## API

### Separator 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 分隔符方向 |

### Separator 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 分隔符中间的标签内容 |

## 无障碍

- Separator 使用 `role="separator"` 以获得正确的语义
- 装饰性分隔符使用 `aria-hidden="true"`
- 对屏幕阅读器友好
