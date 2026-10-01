# Spinner 加载指示

用于展示进度或活动状态的加载指示组件。

## 导入

```vue
<script setup lang="ts">
import { Spinner } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/spinner-basic.vue

:::

### 尺寸

:::preview

demo-preview=../../demos/spinner-sizes.vue

:::

### 颜色

:::preview

demo-preview=../../demos/spinner-colors.vue

:::

### 带标签

```vue
<template>
  <Spinner label="Loading..." />
</template>
```

### 标签位置

```vue
<template>
  <Spinner label="Loading..." label-placement="bottom" />
  <Spinner label="Loading..." label-placement="right" />
</template>
```

### 在按钮中

```vue
<template>
  <Button :disabled="loading">
    <Spinner v-if="loading" size="sm" />
    {{ loading ? 'Loading...' : 'Submit' }}
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
</script>
```

## API

### Spinner 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 加载指示的尺寸 |
| `color` | `'current' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'accent'` | 加载指示的颜色 |
| `label` | `string` | - | 加载标签文本 |
| `labelPlacement` | `'bottom' \| 'right'` | `'bottom'` | 标签位置 |

### Spinner 插槽

| 插槽 | 说明 |
|------|-------------|
| `label` | 自定义标签内容 |

## 无障碍

- Spinner 使用 `role="status"` 以获得正确的语义
- 包含供屏幕阅读器使用的 `aria-label`
- 标签与加载指示正确关联
- 向辅助技术播报加载状态
