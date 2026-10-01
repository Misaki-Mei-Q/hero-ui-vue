# SearchField

Search input field with clear button and search icon.

## Import

```ts
import {
  SearchField,
  SearchFieldClearButton,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldSearchIcon,
} from '@misaki-mei-q/heroui-vue'
```

## Usage

:::preview

demo-preview=../demos/search-field-basic.vue

:::

## Anatomy

```vue
<SearchField>
  <Label />
  <SearchFieldGroup>
    <SearchFieldSearchIcon />
    <SearchFieldInput />
    <SearchFieldClearButton />
  </SearchFieldGroup>
  <Description />
  <FieldError />
</SearchField>
```

## With Description

:::preview

demo-preview=../demos/search-field-with-description.vue

:::

## Required Field

:::preview

demo-preview=../demos/search-field-required.vue

:::

## Validation

:::preview

demo-preview=../demos/search-field-validation.vue

:::

## Disabled State

:::preview

demo-preview=../demos/search-field-disabled.vue

:::

## Controlled

:::preview

demo-preview=../demos/search-field-controlled.vue

:::

## With Validation

:::preview

demo-preview=../demos/search-field-with-validation.vue

:::

## Custom Icons

:::preview

demo-preview=../demos/search-field-custom-icons.vue

:::

## Full Width

:::preview

demo-preview=../demos/search-field-full-width.vue

:::

## Variants

:::preview

demo-preview=../demos/search-field-variants.vue

:::

## In Surface

Use `variant="secondary"` when placing SearchField inside a Surface.

:::preview

demo-preview=../demos/search-field-on-surface.vue

:::

## Form Example

:::preview

demo-preview=../demos/search-field-form-example.vue

:::

## With Keyboard Shortcut

:::preview

demo-preview=../demos/search-field-with-keyboard-shortcut.vue

:::

## Related Components

- [Input](/components/input)
- [TextField](/components/textfield)
- Select
- ComboBox

## Custom Render Function

:::preview

demo-preview=../demos/search-field-custom-render-function.vue

:::

## Styling

Use component props for state and variant behavior first. Demo-only layout styles are included in each demo source.

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` / `value` | `string` | `undefined` | Controlled value |
| `defaultValue` | `string` | `''` | Initial uncontrolled value |
| `fullWidth` | `boolean` | `false` | Makes the field width fill its container |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual variant |
| `disabled` / `isDisabled` | `boolean` | `false` | Disables the search field |
| `required` / `isRequired` | `boolean` | `false` | Marks the input required |
| `isInvalid` | `boolean` | `false` | Applies invalid state |
| `name` | `string` | `undefined` | Form field name |

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when the value changes |
| `change` | `string` | Emitted when the value changes |
| `clear` | `void` | Emitted when clear button is pressed |
| `submit` | `string` | Emitted when Enter is pressed |
