# Textarea 多行文本

用于输入较长内容的多行文本输入框。

## 导入

```ts
import { Textarea } from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/textarea-basic.vue

:::

### 受控

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@misaki-mei/heroui-vue'

const message = ref('')
</script>

<template>
  <div class="flex flex-col gap-2">
    <label for="message">Message</label>
    <Textarea id="message" v-model="message" placeholder="Enter your message" />
    <p class="text-sm text-gray-600">Characters: {{ message.length }}</p>
  </div>
</template>
```

### 行数

使用 `rows` 属性控制高度：

```vue
<template>
  <Textarea :rows="3" placeholder="3 rows" />
  <Textarea :rows="5" placeholder="5 rows" />
  <Textarea :rows="8" placeholder="8 rows" />
</template>
```

### 禁用

```vue
<template>
  <Textarea :disabled="true" placeholder="Disabled textarea" />
</template>
```

### 缩放

控制缩放行为：

```vue
<template>
  <Textarea class="resize-none" placeholder="Cannot be resized" />
  <Textarea class="resize-y" placeholder="Resize vertically" />
  <Textarea class="resize" placeholder="Resize both ways" />
</template>
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `placeholder` | `string` | `undefined` | 占位文本 |
| `rows` | `number` | `4` | 可见文本行数 |
| `disabled` | `boolean` | `false` | 文本框是否禁用 |
| `readonly` | `boolean` | `false` | 文本框是否只读 |
| `required` | `boolean` | `false` | 文本框是否必填 |
| `modelValue` | `string` | `undefined` | v-model 的值 |

### 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 文本框值变化时触发 |
| `input` | `InputEvent` | 原生 input 事件 |
| `change` | `Event` | 原生 change 事件 |
| `focus` | `FocusEvent` | 文本框获得焦点时触发 |
| `blur` | `FocusEvent` | 文本框失去焦点时触发 |

## 无障碍

- 通过 `id` 和 `for` 属性正确关联标签
- 支持键盘导航
- 对屏幕阅读器友好
- 具有可见的焦点指示器
