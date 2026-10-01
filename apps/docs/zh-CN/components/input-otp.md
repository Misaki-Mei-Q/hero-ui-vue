# InputOTP 验证码输入

用于输入一次性验证码的输入框，带有独立的可视槽位。

## 导入

```ts
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  REGEXP_ONLY_CHARS,
} from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/input-otp-basic.vue

:::

### 四位验证码

:::preview

demo-preview=../../demos/input-otp-four-digits.vue

:::

### 禁用状态

:::preview

demo-preview=../../demos/input-otp-disabled.vue

:::

### 带格式规则

:::preview

demo-preview=../../demos/input-otp-with-pattern.vue

:::

### 受控

:::preview

demo-preview=../../demos/input-otp-controlled.vue

:::

### 带校验

:::preview

demo-preview=../../demos/input-otp-with-validation.vue

:::

### 输入完成时

:::preview

demo-preview=../../demos/input-otp-on-complete.vue

:::

### 表单示例

:::preview

demo-preview=../../demos/input-otp-form-example.vue

:::

### 变体

:::preview

demo-preview=../../demos/input-otp-variants.vue

:::

### 在 Surface 容器中

:::preview

demo-preview=../../demos/input-otp-on-surface.vue

:::

## 样式

使用 `InputOTP` 持有值状态，使用 `InputOTPSlot` 渲染可视数字。演示布局 CSS 已包含在每个源码面板中。

### CSS 类

| 类名 | 说明 |
|------|-------------|
| `.input-otp` | 根输入组 |
| `.input-otp__group` | 槽位组 |
| `.input-otp__slot` | 单个可视槽位 |
| `.input-otp__slot-value` | 渲染的字符 |
| `.input-otp__caret` | 活动光标 |
| `.input-otp__separator` | 分隔符 |

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | 供 `v-model` 使用的受控值 |
| `defaultValue` | `string` | `''` | 初始非受控值 |
| `maxLength` | `number` | `6` | 验证码最大长度 |
| `pattern` | `RegExp \\| string` | `undefined` | 逐字符输入过滤器 |
| `isInvalid` | `boolean` | `false` | 无效状态 |
| `isDisabled` | `boolean` | `false` | 禁用状态 |
| `variant` | `'primary' \\| 'secondary'` | `'primary'` | 视觉变体 |

### 事件

| 事件 | 载荷 | 说明 |
|------|---------|-------------|
| `update:modelValue` | `string` | 值变化时触发 |
| `change` | `string` | 值变化时触发 |
| `complete` | `string` | 值达到 `maxLength` 时触发一次 |
