# Autocomplete

Autocomplete lets users choose one option from a searchable list.

## Import

```vue
<script setup lang="ts">
import { Autocomplete } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/autocomplete-basic.vue

:::

### Anatomy

```vue
<template>
  <Autocomplete
    v-model="selectedKey"
    label="State"
    placeholder="Select one"
    search-placeholder="Search states..."
    :items="items"
  />
</template>
```

### With Description

:::preview

demo-preview=../demos/autocomplete-with-description.vue

:::

### Multiple Select

:::preview

demo-preview=../demos/autocomplete-multiple-select.vue

:::

### With Sections

:::preview

demo-preview=../demos/autocomplete-with-sections.vue

:::

### With Disabled Options

:::preview

demo-preview=../demos/autocomplete-with-disabled-options.vue

:::

### Allows Empty Collection

:::preview

demo-preview=../demos/autocomplete-allows-empty-collection.vue

:::

### Custom Indicator

:::preview

demo-preview=../demos/autocomplete-custom-indicator.vue

:::

### Required

:::preview

demo-preview=../demos/autocomplete-required.vue

:::

### Full Width

:::preview

demo-preview=../demos/autocomplete-full-width.vue

:::

### Variants

:::preview

demo-preview=../demos/autocomplete-variants.vue

:::

### In Surface

:::preview

demo-preview=../demos/autocomplete-in-surface.vue

:::

### Custom Value

:::preview

demo-preview=../demos/autocomplete-custom-value.vue

:::

### Controlled

:::preview

demo-preview=../demos/autocomplete-controlled.vue

:::

### Controlled Multiple

:::preview

demo-preview=../demos/autocomplete-controlled-multiple.vue

:::

### Controlled Open State

:::preview

demo-preview=../demos/autocomplete-controlled-open-state.vue

:::

### Asynchronous Filtering

:::preview

demo-preview=../demos/autocomplete-asynchronous-filtering.vue

:::

### Disabled

:::preview

demo-preview=../demos/autocomplete-disabled.vue

:::

## API

### Autocomplete Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string \| number \| null` | `undefined` | Controlled selected key. |
| `defaultSelectedKey` | `string \| number \| null` | `null` | Initial uncontrolled selected key. |
| `defaultSelectedKeys` | `(string \| number)[]` | `[]` | Initial uncontrolled selected keys for multiple mode. |
| `items` | `AutocompleteItem[]` | `[]` | Options rendered in the listbox. |
| `disabledKeys` | `(string \| number)[]` | `[]` | Option keys that cannot be selected. |
| `label` | `string` | `undefined` | Field label. |
| `description` | `string` | `undefined` | Helper text shown below the trigger. |
| `errorMessage` | `string` | `undefined` | Error text shown when the field is invalid. |
| `placeholder` | `string` | `'Select an option'` | Placeholder shown before selection. |
| `searchPlaceholder` | `string` | `'Search...'` | Placeholder shown in the popover search field. |
| `selectionMode` | `'single' \| 'multiple'` | `'single'` | Whether one or multiple options can be selected. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Trigger visual style. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |
| `clearable` | `boolean` | `true` | Show clear button when an option is selected. |
| `isDisabled` | `boolean` | `false` | Disable the trigger and listbox. |
| `isInvalid` | `boolean` | `false` | Apply invalid field state. |
| `isRequired` | `boolean` | `false` | Mark the field as required. |
| `isOpen` | `boolean` | `undefined` | Control the popover open state. |

### Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string \| number \| (string \| number)[] \| null` | Emitted when selected keys change. |
| `update:isOpen` | `boolean` | Emitted when the popover open state changes. |
| `open-change` | `boolean` | Emitted after the popover opens or closes. |
| `change` | `(value, item)` | Emitted with selected key(s) and item object(s). |
| `clear` | `void` | Emitted when the clear button is pressed. |

### Slots

| Slot | Props | Description |
|---|---|---|
| `default` | - | Custom selected value rendering. |
| `item` | `{ item, selected }` | Custom listbox item rendering. |
| `indicator` | `{ className, isOpen, isDisabled }` | Custom trigger indicator. |
