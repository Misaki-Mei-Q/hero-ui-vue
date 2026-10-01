# NumberField 数字输入

带增减控件、格式化、校验和复合插槽的数字输入框。

## 导入

```ts
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrementButton,
  NumberFieldDecrementButton,
} from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/number-field-basic.vue

:::

### 带说明

:::preview

demo-preview=../../demos/number-field-with-description.vue

:::

### 必填字段

:::preview

demo-preview=../../demos/number-field-required.vue

:::

### 校验

:::preview

demo-preview=../../demos/number-field-validation.vue

:::

### 受控

:::preview

demo-preview=../../demos/number-field-controlled.vue

:::

### 带校验

:::preview

demo-preview=../../demos/number-field-with-validation.vue

:::

### 步长值

:::preview

demo-preview=../../demos/number-field-with-step.vue

:::

### 格式化选项

:::preview

demo-preview=../../demos/number-field-with-format-options.vue

:::

### 自定义图标

:::preview

demo-preview=../../demos/number-field-custom-icons.vue

:::

### 带箭头按钮

:::preview

demo-preview=../../demos/number-field-with-chevrons.vue

:::

### 禁用状态

:::preview

demo-preview=../../demos/number-field-disabled.vue

:::

### 全宽

:::preview

demo-preview=../../demos/number-field-full-width.vue

:::

### 变体

:::preview

demo-preview=../../demos/number-field-variants.vue

:::

### 在 Surface 容器中

:::preview

demo-preview=../../demos/number-field-on-surface.vue

:::

### 表单示例

:::preview

demo-preview=../../demos/number-field-form-example.vue

:::

### 自定义渲染函数

:::preview

demo-preview=../../demos/number-field-custom-render-function.vue

:::

## 样式

`NumberField` 持有值和状态属性。`NumberFieldGroup`、`NumberFieldInput` 以及增减按钮对应 React 源码中的 CSS 插槽。仅用于演示的宽度和布局类已包含在每个源码面板中。

### CSS 类

| 类名 | 说明 |
|------|-------------|
| `.number-field` | 根字段 |
| `.number-field__group` | 输入框与按钮组合 |
| `.number-field__input` | 文本输入框 |
| `.number-field__increment-button` | 递增控件 |
| `.number-field__decrement-button` | 递减控件 |

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `number` | `undefined` | 供 `v-model` 使用的受控值 |
| `defaultValue` | `number` | `undefined` | 初始非受控值 |
| `minValue` | `number` | `undefined` | 步进按钮使用的最小值 |
| `maxValue` | `number` | `undefined` | 步进按钮使用的最大值 |
| `step` | `number` | `1` | 递增/递减步长 |
| `formatOptions` | `Intl.NumberFormatOptions` | `undefined` | 显示格式化选项 |
| `isInvalid` | `boolean` | `false` | 无效状态 |
| `isDisabled` | `boolean` | `false` | 禁用状态 |
| `isRequired` | `boolean` | `false` | 必填状态 |
| `fullWidth` | `boolean` | `false` | 撑满容器宽度 |
| `variant` | `'primary' \\| 'secondary'` | `'primary'` | 视觉变体 |

### 事件

| 事件 | 载荷 | 说明 |
|------|---------|-------------|
| `update:modelValue` | `number \\| undefined` | 值变化时触发 |
| `change` | `number \\| undefined` | 值变化时触发 |
