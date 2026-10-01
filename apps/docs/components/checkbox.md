# Checkbox

Checkboxes allow users to select individual boolean options.

## Import

```ts
import { Button, Checkbox, Description, Label } from '@misaki-mei/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/checkbox-basic.vue

:::

## Anatomy

```vue
<template>
  <Checkbox>
    <template #indicator="{ isSelected }">
      <span v-if="isSelected">...</span>
    </template>
    <Label />
    <Description />
  </Checkbox>
</template>
```

### Disabled

:::preview

demo-preview=../demos/checkbox-disabled.vue

:::

### Default Selected

:::preview

demo-preview=../demos/checkbox-default-selected.vue

:::

### Controlled

:::preview

demo-preview=../demos/checkbox-controlled.vue

:::

### Indeterminate

:::preview

demo-preview=../demos/checkbox-indeterminate.vue

:::

### With Label

:::preview

demo-preview=../demos/checkbox-with-label.vue

:::

### With Description

:::preview

demo-preview=../demos/checkbox-with-description.vue

:::

### Render Props

:::preview

demo-preview=../demos/checkbox-render-props.vue

:::

### Form Integration

:::preview

demo-preview=../demos/checkbox-form.vue

:::

### Invalid

:::preview

demo-preview=../demos/checkbox-invalid.vue

:::

### Custom Indicator

:::preview

demo-preview=../demos/checkbox-custom-indicator.vue

:::

### Full Rounded

:::preview

demo-preview=../demos/checkbox-full-rounded.vue

:::

### Variants

Checkbox supports two visual variants:

- `primary`: default field shadow.
- `secondary`: lower-emphasis styling for surfaces.

:::preview

demo-preview=../demos/checkbox-variants.vue

:::

### Custom Styles

:::preview

demo-preview=../demos/checkbox-custom-styles.vue

:::

## Styling

### Passing Classes

```vue
<template>
  <Checkbox
    control-class="border-2 border-purple-500"
    indicator-class="text-white"
  >
    <Label>Custom Checkbox</Label>
  </Checkbox>
</template>
```

### CSS Classes

| Class | Description |
|------|-------------|
| `.checkbox` | Base checkbox wrapper |
| `.checkbox__control` | Checkbox control box |
| `.checkbox__indicator` | Checkbox checkmark or custom indicator |
| `.checkbox__content` | Optional label/description wrapper |
| `.checkbox--primary` | Primary variant |
| `.checkbox--secondary` | Secondary variant |

### Interactive States

| State | Selector |
|------|----------|
| Selected | `[data-selected="true"]` / `[aria-checked="true"]` |
| Indeterminate | `[data-indeterminate="true"]` |
| Invalid | `[data-invalid="true"]` / `[aria-invalid="true"]` |
| Hover | `:hover` / `[data-hovered="true"]` |
| Focus visible | `:focus-visible` / `[data-focus-visible="true"]` |
| Disabled | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| Read only | `[aria-readonly="true"]` / `[data-readonly="true"]` |
| Pressed | `:active` / `[data-pressed="true"]` |

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `v-model` | `boolean` | `undefined` | Controlled selected state |
| `checked` | `boolean \| 'indeterminate'` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean \| 'indeterminate'` | `false` | Initial checked state |
| `isSelected` | `boolean` | `undefined` | React-style selected alias |
| `defaultSelected` | `boolean` | `undefined` | React-style default selected alias |
| `isIndeterminate` | `boolean` | `undefined` | Force indeterminate state |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual variant |
| `disabled` | `boolean` | `undefined` | Disable the checkbox |
| `isDisabled` | `boolean` | `undefined` | React-style disabled alias |
| `readonly` | `boolean` | `undefined` | Prevent value changes |
| `isReadOnly` | `boolean` | `undefined` | React-style read-only alias |
| `isInvalid` | `boolean` | `undefined` | Invalid state |
| `required` | `boolean` | `undefined` | Native required state |
| `isRequired` | `boolean` | `undefined` | React-style required alias |
| `name` | `string` | `undefined` | Form field name |
| `value` | `string` | `undefined` | Form field value |
| `controlClass` | `string` | `undefined` | Class merged onto `.checkbox__control` |
| `indicatorClass` | `string` | `undefined` | Class merged onto `.checkbox__indicator` |
| `contentClass` | `string` | `undefined` | Class merged onto `.checkbox__content` |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:checked` | `boolean \| 'indeterminate'` | Emitted when checked state changes |
| `update:modelValue` | `boolean` | Emitted when selected state changes |
| `change` | `boolean` | Emitted when selected state changes |

### Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | `{ checked, isSelected, isIndeterminate, isDisabled, isInvalid, isReadOnly }` | Label and description content |
| `indicator` | `{ checked, isSelected, isIndeterminate, isDisabled, isInvalid, isReadOnly }` | Optional custom indicator |
