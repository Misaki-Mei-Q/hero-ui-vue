# CheckboxGroup 复选框组

CheckboxGroup 将相关的复选框分组，并管理它们的选中值。

## 导入

```vue
<script setup lang="ts">
import { Checkbox, CheckboxGroup } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/checkbox-group-basic.vue

:::

### 在 Surface 容器中

在 Surface 组件内部使用时，在复选框组上设置 `variant="secondary"`，以应用低强调度的复选框控件。

:::preview

demo-preview=../../demos/checkbox-group-in-surface.vue

:::

### 带自定义指示器

:::preview

demo-preview=../../demos/checkbox-group-custom-indicator.vue

:::

### 半选

:::preview

demo-preview=../../demos/checkbox-group-indeterminate.vue

:::

### 受控

:::preview

demo-preview=../../demos/checkbox-group-controlled.vue

:::

### 校验

:::preview

demo-preview=../../demos/checkbox-group-validation.vue

:::

### 禁用

:::preview

demo-preview=../../demos/checkbox-group-disabled.vue

:::

### 功能与附加组件示例

:::preview

demo-preview=../../demos/checkbox-group-features-and-addons.vue

:::

### 自定义渲染函数

:::preview

demo-preview=../../demos/checkbox-group-custom-render-function.vue

:::

## 结构

```vue
<template>
  <CheckboxGroup v-model="values" name="interests">
    <Label>Select your interests</Label>
    <Description>Choose all that apply</Description>
    <Checkbox value="coding">
      <Label>Coding</Label>
    </Checkbox>
  </CheckboxGroup>
</template>
```

## API

### CheckboxGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `modelValue` | `string[]` | `undefined` | 受控的选中值。 |
| `value` | `string[]` | `undefined` | 备选的受控选中值。 |
| `defaultValue` | `string[]` | `[]` | 初始的非受控选中值。 |
| `name` | `string` | `undefined` | 传递给子复选框的名称。 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 子复选框继承的变体。 |
| `isDisabled` | `boolean` | `false` | 禁用所有子复选框。 |
| `isInvalid` | `boolean` | `false` | 将该组及子复选框标记为无效。 |
| `isRequired` | `boolean` | `false` | 将该组及子复选框标记为必填。 |

### 事件

| 事件 | 载荷 | 说明 |
|---|---|---|
| `update:modelValue` | `string[]` | 选中值变化时触发。 |
| `update:value` | `string[]` | 用于 value 风格受控用法时触发。 |
| `change` | `string[]` | 任意子复选框切换后触发。 |
