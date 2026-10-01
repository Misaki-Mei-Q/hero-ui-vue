# RadioGroup

Radio group for selecting a single option from a list.

## Import

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

## Usage

### Basic

:::preview

demo-preview=../demos/radio-group-basic.vue

:::

## Anatomy

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

### Custom Indicator

:::preview

demo-preview=../demos/radio-group-custom-indicator.vue

:::

### Horizontal Orientation

:::preview

demo-preview=../demos/radio-group-horizontal.vue

:::

### Controlled

:::preview

demo-preview=../demos/radio-group-controlled.vue

:::

### Uncontrolled

:::preview

demo-preview=../demos/radio-group-uncontrolled.vue

:::

### Validation

:::preview

demo-preview=../demos/radio-group-validation.vue

:::

### Disabled

:::preview

demo-preview=../demos/radio-group-disabled.vue

:::

### Variants

RadioGroup supports two visual variants:

- `primary`: default styling with field shadow.
- `secondary`: lower-emphasis styling for surfaces and dense layouts.

:::preview

demo-preview=../demos/radio-group-variants.vue

:::

### In Surface

Use `variant="secondary"` when the group sits inside a `Surface`.

:::preview

demo-preview=../demos/radio-group-on-surface.vue

:::

### Delivery & Payment

:::preview

demo-preview=../demos/radio-group-delivery-payment.vue

:::

## Styling

### Passing Classes

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

### CSS Classes

| Class | Description |
|------|-------------|
| `.radio-group` | Base radio group container |
| `.radio-group--primary` | Primary group variant |
| `.radio-group--secondary` | Secondary group variant |
| `.radio` | Individual radio item |
| `.radio__control` | Radio control |
| `.radio__indicator` | Radio indicator |
| `.radio__content` | Radio content wrapper |
| `.radio--disabled` | Disabled radio state |

### Interactive States

| State | Selector |
|------|----------|
| Selected | `[aria-checked="true"]` / `[data-selected="true"]` |
| Hover | `:hover` / `[data-hovered="true"]` |
| Focus visible | `:focus-visible` / `[data-focus-visible="true"]` |
| Pressed | `:active` / `[data-pressed="true"]` |
| Disabled | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| Read only | `[aria-readonly="true"]` / `[data-readonly="true"]` |
| Invalid | `[aria-invalid="true"]` / `[data-invalid="true"]` |
| Required | `[data-required="true"]` |

## API

### RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `v-model` | `string` | `undefined` | Controlled selected value |
| `value` | `string` | `undefined` | React-style controlled selected value |
| `defaultValue` | `string` | `undefined` | Initial selected value |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual variant |
| `name` | `string` | `undefined` | Form field name |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Group orientation |
| `disabled` | `boolean` | `undefined` | Disable the group |
| `isDisabled` | `boolean` | `undefined` | React-style disabled alias |
| `readonly` | `boolean` | `undefined` | Prevent changing the selected value |
| `isReadOnly` | `boolean` | `undefined` | React-style read-only alias |
| `isInvalid` | `boolean` | `undefined` | Invalid state |
| `required` | `boolean` | `undefined` | Native required state |
| `isRequired` | `boolean` | `undefined` | React-style required alias |

### RadioGroup Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when selection changes |
| `update:value` | `string` | React-style value sync event |
| `change` | `string` | Emitted when selection changes |

### Radio Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | Required | Radio value |
| `disabled` | `boolean` | `undefined` | Disable the radio item |
| `isDisabled` | `boolean` | `undefined` | React-style disabled alias |
| `isInvalid` | `boolean` | `undefined` | Invalid state override |
| `controlClass` | `string` | `undefined` | Class merged onto `.radio__control` |
| `indicatorClass` | `string` | `undefined` | Class merged onto `.radio__indicator` |
| `contentClass` | `string` | `undefined` | Class merged onto `.radio__content` |

### Radio Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | `{ checked, isSelected, isDisabled, isInvalid, isReadOnly }` | Radio content |
| `indicator` | `{ checked, isSelected, isDisabled, isInvalid, isReadOnly }` | Optional custom indicator |
