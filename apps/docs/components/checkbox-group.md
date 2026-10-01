# CheckboxGroup

CheckboxGroup groups related checkboxes and manages their selected values.

## Import

```vue
<script setup lang="ts">
import { Checkbox, CheckboxGroup } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/checkbox-group-basic.vue

:::

### In Surface

When used inside a Surface component, use `variant="secondary"` on the checkbox group to apply the lower emphasis checkbox controls.

:::preview

demo-preview=../demos/checkbox-group-in-surface.vue

:::

### With Custom Indicator

:::preview

demo-preview=../demos/checkbox-group-custom-indicator.vue

:::

### Indeterminate

:::preview

demo-preview=../demos/checkbox-group-indeterminate.vue

:::

### Controlled

:::preview

demo-preview=../demos/checkbox-group-controlled.vue

:::

### Validation

:::preview

demo-preview=../demos/checkbox-group-validation.vue

:::

### Disabled

:::preview

demo-preview=../demos/checkbox-group-disabled.vue

:::

### Features and Add-ons Example

:::preview

demo-preview=../demos/checkbox-group-features-and-addons.vue

:::

### Custom Render Function

:::preview

demo-preview=../demos/checkbox-group-custom-render-function.vue

:::

## Anatomy

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

### CheckboxGroup Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string[]` | `undefined` | Controlled selected values. |
| `value` | `string[]` | `undefined` | Alternative controlled selected values. |
| `defaultValue` | `string[]` | `[]` | Initial uncontrolled selected values. |
| `name` | `string` | `undefined` | Name passed to child checkboxes. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Variant inherited by child checkboxes. |
| `isDisabled` | `boolean` | `false` | Disable all child checkboxes. |
| `isInvalid` | `boolean` | `false` | Mark the group and child checkboxes invalid. |
| `isRequired` | `boolean` | `false` | Mark the group and child checkboxes required. |

### Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string[]` | Emitted when selected values change. |
| `update:value` | `string[]` | Emitted for value-style controlled usage. |
| `change` | `string[]` | Emitted after any child checkbox toggles. |
