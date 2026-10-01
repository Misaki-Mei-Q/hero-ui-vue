# InputOTP

An input for entering one-time passcodes with individual visual slots.

## Import

```ts
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  REGEXP_ONLY_CHARS,
} from '@misaki-mei-q/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/input-otp-basic.vue

:::

### Four Digits

:::preview

demo-preview=../demos/input-otp-four-digits.vue

:::

### Disabled State

:::preview

demo-preview=../demos/input-otp-disabled.vue

:::

### With Pattern

:::preview

demo-preview=../demos/input-otp-with-pattern.vue

:::

### Controlled

:::preview

demo-preview=../demos/input-otp-controlled.vue

:::

### With Validation

:::preview

demo-preview=../demos/input-otp-with-validation.vue

:::

### On Complete

:::preview

demo-preview=../demos/input-otp-on-complete.vue

:::

### Form Example

:::preview

demo-preview=../demos/input-otp-form-example.vue

:::

### Variants

:::preview

demo-preview=../demos/input-otp-variants.vue

:::

### In Surface

:::preview

demo-preview=../demos/input-otp-on-surface.vue

:::

## Styling

Use `InputOTP` for value ownership and `InputOTPSlot` for visual digits. Demo layout CSS is included in each source panel.

### CSS Classes

| Class | Description |
|------|-------------|
| `.input-otp` | Root input group |
| `.input-otp__group` | Slot group |
| `.input-otp__slot` | Individual visual slot |
| `.input-otp__slot-value` | Rendered character |
| `.input-otp__caret` | Active caret |
| `.input-otp__separator` | Separator |

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | Controlled value for `v-model` |
| `defaultValue` | `string` | `''` | Initial uncontrolled value |
| `maxLength` | `number` | `6` | Maximum passcode length |
| `pattern` | `RegExp \\| string` | `undefined` | Per-character input filter |
| `isInvalid` | `boolean` | `false` | Invalid state |
| `isDisabled` | `boolean` | `false` | Disabled state |
| `variant` | `'primary' \\| 'secondary'` | `'primary'` | Visual variant |

### Events

| Event | Payload | Description |
|------|---------|-------------|
| `update:modelValue` | `string` | Emits when value changes |
| `change` | `string` | Emits when value changes |
| `complete` | `string` | Emits once the value reaches `maxLength` |
