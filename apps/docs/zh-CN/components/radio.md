# Radio 单选

用于在一组选项中进行单选的单选按钮。

## 导入

```ts
import { Radio, RadioGroup } from '@misaki-mei/heroui-vue'
import { Label } from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/radio-basic.vue

:::

### 受控

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Radio, RadioGroup, Label } from '@misaki-mei/heroui-vue'

const selected = ref('medium')
</script>

<template>
  <RadioGroup v-model="selected">
    <div class="flex items-center gap-3">
      <Radio id="small" value="small" />
      <Label for="small">Small</Label>
    </div>
    <div class="flex items-center gap-3">
      <Radio id="medium" value="medium" />
      <Label for="medium">Medium</Label>
    </div>
    <div class="flex items-center gap-3">
      <Radio id="large" value="large" />
      <Label for="large">Large</Label>
    </div>
  </RadioGroup>
  <p class="text-sm text-gray-600">Selected: {{ selected }}</p>
</template>
```

### 禁用

```vue
<template>
  <RadioGroup>
    <div class="flex items-center gap-3">
      <Radio id="enabled" value="enabled" />
      <Label for="enabled">Enabled</Label>
    </div>
    <div class="flex items-center gap-3">
      <Radio id="disabled" value="disabled" :disabled="true" />
      <Label for="disabled">Disabled</Label>
    </div>
  </RadioGroup>
</template>
```

### 带说明

```vue
<template>
  <RadioGroup>
    <div class="flex gap-3">
      <Radio class="mt-0.5" id="starter" value="starter" />
      <div class="flex flex-col gap-1">
        <Label for="starter">Starter Plan</Label>
        <p class="text-sm text-gray-600">Perfect for individuals</p>
      </div>
    </div>
    <!-- More options... -->
  </RadioGroup>
</template>
```

## API

### Radio 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | 单选按钮的值 |
| `disabled` | `boolean` | `false` | 单选按钮是否禁用 |
| `required` | `boolean` | `false` | 单选按钮是否必填 |

### RadioGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | v-model 的值（选中的单选值） |
| `name` | `string` | `undefined` | 单选组的 name 属性 |

### RadioGroup 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 选择变化时触发 |
| `change` | `Event` | 原生 change 事件 |

## 无障碍

- 通过 `id` 和 `for` 属性与标签正确关联
- 键盘导航（方向键切换，空格键选中）
- 具备正确的 ARIA 属性，对屏幕阅读器友好
- 焦点可见指示器
- 正确传达禁用状态
- 具备正确角色的单选组语义
