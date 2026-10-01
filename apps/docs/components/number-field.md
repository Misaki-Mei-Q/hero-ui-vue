# NumberField

A number input with increment and decrement controls, formatting, validation, and compound slots.

## Import

```ts
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrementButton,
  NumberFieldDecrementButton,
} from '@misaki-mei-q/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/number-field-basic.vue

:::

### With Description

:::preview

demo-preview=../demos/number-field-with-description.vue

:::

### Required Field

:::preview

demo-preview=../demos/number-field-required.vue

:::

### Validation

:::preview

demo-preview=../demos/number-field-validation.vue

:::

### Controlled

:::preview

demo-preview=../demos/number-field-controlled.vue

:::

### With Validation

:::preview

demo-preview=../demos/number-field-with-validation.vue

:::

### Step Values

:::preview

demo-preview=../demos/number-field-with-step.vue

:::

### Format Options

:::preview

demo-preview=../demos/number-field-with-format-options.vue

:::

### Custom Icons

:::preview

demo-preview=../demos/number-field-custom-icons.vue

:::

### With Chevrons

:::preview

demo-preview=../demos/number-field-with-chevrons.vue

:::

### Disabled State

:::preview

demo-preview=../demos/number-field-disabled.vue

:::

### Full Width

:::preview

demo-preview=../demos/number-field-full-width.vue

:::

### Variants

:::preview

demo-preview=../demos/number-field-variants.vue

:::

### In Surface

:::preview

demo-preview=../demos/number-field-on-surface.vue

:::

### Form Example

:::preview

demo-preview=../demos/number-field-form-example.vue

:::

### Custom Render Function

:::preview

demo-preview=../demos/number-field-custom-render-function.vue

:::

## Styling

`NumberField` owns the value and state attributes. `NumberFieldGroup`, `NumberFieldInput`, and the increment/decrement buttons map to the React source CSS slots. Demo-only widths and layout classes are included in each source panel.

### CSS Classes

| Class | Description |
|------|-------------|
| `.number-field` | Root field |
| `.number-field__group` | Input and button group |
| `.number-field__input` | Text input |
| `.number-field__increment-button` | Increment control |
| `.number-field__decrement-button` | Decrement control |

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `number` | `undefined` | Controlled value for `v-model` |
| `defaultValue` | `number` | `undefined` | Initial uncontrolled value |
| `minValue` | `number` | `undefined` | Minimum value used by step buttons |
| `maxValue` | `number` | `undefined` | Maximum value used by step buttons |
| `step` | `number` | `1` | Increment/decrement step |
| `formatOptions` | `Intl.NumberFormatOptions` | `undefined` | Display formatting options |
| `isInvalid` | `boolean` | `false` | Invalid state |
| `isDisabled` | `boolean` | `false` | Disabled state |
| `isRequired` | `boolean` | `false` | Required state |
| `fullWidth` | `boolean` | `false` | Fill container width |
| `variant` | `'primary' \\| 'secondary'` | `'primary'` | Visual variant |

### Events

| Event | Payload | Description |
|------|---------|-------------|
| `update:modelValue` | `number \\| undefined` | Emits when value changes |
| `change` | `number \\| undefined` | Emits when value changes |
