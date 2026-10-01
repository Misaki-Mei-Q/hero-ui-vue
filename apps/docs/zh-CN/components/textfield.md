# TextField 文本字段

一个完整的表单字段组件，组合了输入框、标签、说明文字和错误信息。

## 导入

```vue
<script setup lang="ts">
import { TextField } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/textfield-basic.vue

:::

### 带说明

```vue
<template>
  <TextField 
    label="Username"
    description="Choose a unique username"
    placeholder="Enter username"
  />
</template>
```

### 带错误信息

```vue
<template>
  <TextField 
    label="Password"
    :error="hasError ? 'Password must be at least 8 characters' : undefined"
    v-model="password"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const password = ref('')
const hasError = computed(() => password.value.length > 0 && password.value.length < 8)
</script>
```

### 必填

```vue
<template>
  <TextField 
    label="Full Name"
    required
    placeholder="Enter your full name"
  />
</template>
```

### 禁用

```vue
<template>
  <TextField 
    label="Disabled Field"
    :disabled="true"
    value="Cannot edit this"
  />
</template>
```

### 输入类型

```vue
<template>
  <TextField label="Email" type="email" />
  <TextField label="Password" type="password" />
  <TextField label="Number" type="number" />
  <TextField label="URL" type="url" />
  <TextField label="Tel" type="tel" />
</template>
```

### 带前缀/后缀

```vue
<template>
  <TextField label="Website">
    <template #prefix>https://</template>
    <template #suffix>.com</template>
  </TextField>

  <TextField label="Price">
    <template #prefix>$</template>
  </TextField>
</template>
```

## API

### TextField 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `string` | - | 字段值 |
| `label` | `string` | - | 字段标签 |
| `description` | `string` | - | 字段说明文字 |
| `placeholder` | `string` | - | 输入框占位文本 |
| `type` | `string` | `'text'` | 输入类型 |
| `required` | `boolean` | `false` | 字段是否必填 |
| `disabled` | `boolean` | `false` | 字段是否禁用 |
| `readonly` | `boolean` | `false` | 字段是否只读 |

### TextField 事件

| 事件 | 类型 | 说明 |
|-------|------|-------------|
| `update:modelValue` | `(value: string) => void` | 值变化时触发 |
| `blur` | `(event: FocusEvent) => void` | 字段失去焦点时触发 |
| `focus` | `(event: FocusEvent) => void` | 字段获得焦点时触发 |

### TextField 插槽

| 插槽 | 说明 |
|------|-------------|
| `label` | 自定义标签内容 |
| `description` | 自定义说明内容 |
| `prefix` | 输入框前的内容 |
| `suffix` | 输入框后的内容 |

## 无障碍

- TextField 将所有表单字段元素正确关联组合
- 标签通过 `for` 属性与输入框正确关联
- 说明文字使用 `aria-describedby`
- 错误信息使用 `aria-describedby` 和 `aria-invalid`
- 必填字段通过 `aria-required` 标识
- 完整支持键盘导航
