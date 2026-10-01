# Label 标签

用于为表单字段和其他 UI 元素添加标签的组件。

## 导入

```vue
<script setup lang="ts">
import { Label } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/label-basic.vue

:::

### 必填指示

```vue
<template>
  <Label for="username" :is-required="true">Username</Label>
</template>
```

### 带说明

```vue
<template>
  <div>
    <Label for="password">Password</Label>
    <Input id="password" type="password" />
    <Description>Must be at least 8 characters</Description>
  </div>
</template>
```

## API

### Label 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `for` | `string` | - | 关联表单字段的 id |
| `isRequired` | `boolean` | `false` | 是否显示必填指示 |

### Label 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 标签内容 |

## 无障碍

- Label 使用语义化的 `<label>` HTML 元素
- 通过 `for` 属性与表单字段正确关联
- 必填指示会被屏幕阅读器播报
- 点击标签会聚焦关联的字段
