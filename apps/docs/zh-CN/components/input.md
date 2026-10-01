# Input 输入框

用于用户文本输入的单行文本输入框。

## 导入

```ts
import { Input } from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/input-basic.vue

:::

### 输入类型

:::preview

demo-preview=../../demos/input-types.vue

:::

### 禁用与全宽

:::preview

demo-preview=../../demos/input-states.vue

:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | HTML input 类型 |
| `placeholder` | `string` | `undefined` | 占位提示文本 |
| `disabled` | `boolean` | `false` | 输入框是否被禁用 |
| `readonly` | `boolean` | `false` | 输入框是否只读 |
| `required` | `boolean` | `false` | 输入框是否必填 |
| `modelValue` | `string` | `undefined` | v-model 的值 |

### 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 输入值改变时触发 |
| `input` | `InputEvent` | 原生 input 事件 |
| `change` | `Event` | 原生 change 事件 |
| `focus` | `FocusEvent` | 输入框获得焦点时触发 |
| `blur` | `FocusEvent` | 输入框失去焦点时触发 |

## 无障碍

- 通过 `id` 和 `for` 属性正确关联标签
- 支持键盘导航
- 对屏幕阅读器友好
- 具有清晰的焦点可见指示
