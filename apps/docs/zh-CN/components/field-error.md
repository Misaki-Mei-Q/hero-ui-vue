# FieldError 字段错误

用于显示与表单字段相关联的错误消息的组件。

## 导入

```vue
<script setup lang="ts">
import { FieldError } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/field-error-basic.vue

:::

### 配合表单字段使用

```vue
<template>
  <div>
    <Label for="username">Username</Label>
    <Input 
      id="username" 
      v-model="username"
      :class="hasError ? 'border-red-500' : ''"
    />
    <FieldError v-if="hasError">
      Username must be at least 3 characters.
    </FieldError>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const username = ref('')
const hasError = computed(() => username.value.length > 0 && username.value.length < 3)
</script>
```

### 多条错误

```vue
<template>
  <div>
    <Input />
    <FieldError v-for="error in errors" :key="error">
      {{ error }}
    </FieldError>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const errors = ref([
  'Password must be at least 8 characters',
  'Password must contain at least one number'
])
</script>
```

### 尺寸

```vue
<template>
  <FieldError>This field is required.</FieldError>
</template>
```

## API

### FieldError 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|

### FieldError 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 错误消息内容 |

## 无障碍

- FieldError 使用 `role="alert"` 进行即时播报
- 通过 `aria-describedby` 自动关联到表单字段
- 颜色不是唯一的提示方式（同时也会使用图标）
- 对屏幕阅读器友好
