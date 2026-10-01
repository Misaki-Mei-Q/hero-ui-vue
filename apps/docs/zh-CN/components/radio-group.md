# RadioGroup 单选组

用于从列表中选择单个选项的单选组。

## 导入

```ts
import {
  Button,
  Description,
  FieldError,
  Label,
  Radio,
  RadioGroup,
  Surface,
} from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/radio-group-basic.vue

:::

## 结构

```vue
<template>
  <RadioGroup>
    <Label />
    <Description />
    <Radio value="option">
      <template #indicator="{ isSelected }">
        <span v-if="isSelected">...</span>
      </template>
      <Label />
      <Description />
    </Radio>
    <FieldError />
  </RadioGroup>
</template>
```

### 自定义指示器

:::preview

demo-preview=../../demos/radio-group-custom-indicator.vue

:::

### 水平方向

:::preview

demo-preview=../../demos/radio-group-horizontal.vue

:::

### 受控

:::preview

demo-preview=../../demos/radio-group-controlled.vue

:::

### 非受控

:::preview

demo-preview=../../demos/radio-group-uncontrolled.vue

:::

### 校验

:::preview

demo-preview=../../demos/radio-group-validation.vue

:::

### 禁用

:::preview

demo-preview=../../demos/radio-group-disabled.vue

:::

### 变体

RadioGroup 支持两种视觉变体：

- `primary`：带字段阴影的默认样式。
- `secondary`：低强调度样式，适用于 Surface 容器和紧凑布局。

:::preview

demo-preview=../../demos/radio-group-variants.vue

:::

### 在 Surface 容器中

当分组位于 `Surface` 内部时，请使用 `variant="secondary"`。

:::preview

demo-preview=../../demos/radio-group-on-surface.vue

:::

### 配送与支付

:::preview

demo-preview=../../demos/radio-group-delivery-payment.vue

:::

## 样式

### 传入类名

```vue
<template>
  <RadioGroup default-value="premium" name="plan">
    <Radio
      class="rounded-xl border p-4 data-[selected=true]:border-accent"
      value="basic"
    >
      Basic Plan
    </Radio>
  </RadioGroup>
</template>
```

### CSS 类

| 类名 | 说明 |
|------|-------------|
| `.radio-group` | 单选组基础容器 |
| `.radio-group--primary` | 主变体分组 |
| `.radio-group--secondary` | 次变体分组 |
| `.radio` | 单个单选项 |
| `.radio__control` | 单选控件 |
| `.radio__indicator` | 单选指示器 |
| `.radio__content` | 单选内容包装器 |
| `.radio--disabled` | 禁用状态的单选项 |

### 交互状态

| 状态 | 选择器 |
|------|----------|
| 选中 | `[aria-checked="true"]` / `[data-selected="true"]` |
| 悬停 | `:hover` / `[data-hovered="true"]` |
| 焦点可见 | `:focus-visible` / `[data-focus-visible="true"]` |
| 按下 | `:active` / `[data-pressed="true"]` |
| 禁用 | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| 只读 | `[aria-readonly="true"]` / `[data-readonly="true"]` |
| 无效 | `[aria-invalid="true"]` / `[data-invalid="true"]` |
| 必填 | `[data-required="true"]` |

## API

### RadioGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `v-model` | `string` | `undefined` | 受控的选中值 |
| `value` | `string` | `undefined` | React 风格的受控选中值 |
| `defaultValue` | `string` | `undefined` | 初始选中值 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 视觉变体 |
| `name` | `string` | `undefined` | 表单字段名称 |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | 分组方向 |
| `disabled` | `boolean` | `undefined` | 禁用整个分组 |
| `isDisabled` | `boolean` | `undefined` | React 风格的禁用别名 |
| `readonly` | `boolean` | `undefined` | 防止更改选中值 |
| `isReadOnly` | `boolean` | `undefined` | React 风格的只读别名 |
| `isInvalid` | `boolean` | `undefined` | 无效状态 |
| `required` | `boolean` | `undefined` | 原生必填状态 |
| `isRequired` | `boolean` | `undefined` | React 风格的必填别名 |

### RadioGroup 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 选中项变化时触发 |
| `update:value` | `string` | React 风格的值同步事件 |
| `change` | `string` | 选中项变化时触发 |

### Radio 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `value` | `string` | Required | 单选值 |
| `disabled` | `boolean` | `undefined` | 禁用该单选项 |
| `isDisabled` | `boolean` | `undefined` | React 风格的禁用别名 |
| `isInvalid` | `boolean` | `undefined` | 无效状态覆盖 |
| `controlClass` | `string` | `undefined` | 合并到 `.radio__control` 上的类名 |
| `indicatorClass` | `string` | `undefined` | 合并到 `.radio__indicator` 上的类名 |
| `contentClass` | `string` | `undefined` | 合并到 `.radio__content` 上的类名 |

### Radio 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `default` | `{ checked, isSelected, isDisabled, isInvalid, isReadOnly }` | 单选内容 |
| `indicator` | `{ checked, isSelected, isDisabled, isInvalid, isReadOnly }` | 可选的自定义指示器 |
