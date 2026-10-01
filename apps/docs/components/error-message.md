# ErrorMessage

A low-level error message component for displaying errors in non-form components.

## Import

```ts
import { ErrorMessage } from '@misaki-mei-q/heroui-vue'
```

## Usage

`ErrorMessage` is designed for collection-style components such as `TagGroup`, `Calendar`, and similar non-form contexts.

:::preview

demo-preview=../demos/error-message-basic.vue

:::

## Anatomy

```vue
<TagGroup>
  <Tag />
  <Description />
  <ErrorMessage />
</TagGroup>
```

## When To Use

Use `ErrorMessage` for non-form components. For form fields, prefer [Field Error](/components/field-error), which is tied to field validation behavior.

## ErrorMessage vs FieldError

| Component | Use Case | Form Integration |
|-----------|----------|------------------|
| `ErrorMessage` | Non-form components | No |
| `FieldError` | Form fields | Yes |

## Styling

The component uses the `.error-message` class from `@misaki-mei-q/heroui-vue-styles`.

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional CSS classes |
