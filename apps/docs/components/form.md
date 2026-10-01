# Form

A wrapper component that provides form context for grouping inputs, handling submission, and surfacing validation errors.

## Import

```vue
<script setup lang="ts">
import { Form } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/form-basic.vue

:::

### With Description

:::preview

demo-preview=../demos/form-with-description.vue

:::

## API

### Form Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `errors` | `Record<string, string>` | `{}` | Map of field names to their validation error messages. |
| `isSubmitting` | `boolean` | `false` | Marks the form as submitting (sets `data-submitting`). |
| `validationBehavior` | `'native' \| 'aria'` | `'native'` | Indicates how validation is announced to assistive tech. |
| `omitResetFields` | `string[]` | `[]` | Field names whose errors should NOT be cleared on reset. |

### Form Events

| Event | Payload | Description |
|-------|---------|-------------|
| `submit` | `SubmitEvent` | Emitted when the form is submitted. |
| `submit-success` | `SubmitEvent` | Emitted after a successful submission. |
| `submit-error` | `SubmitEvent` | Emitted when submission fails. |
| `reset` | `Event` | Emitted when the form is reset. |

### Form Slots

| Slot | Description |
|------|-------------|
| `default` | Form body. Typically `Label`, `Input`, `Description`, `FieldError`, and a submit button. |

### `useFormContext`

A composable that returns the form context (or `null` outside a `Form`):

```ts
import { useFormContext } from '@misaki-mei/heroui-vue'

const ctx = useFormContext()
ctx?.setFieldError('email', 'Already in use')
```

Available methods / refs:

- `isSubmitting`, `isSubmitted`, `errors` (refs)
- `setFieldError(name, message)`
- `clearFieldError(name)`
- `setErrors(errors)`
- `submit(event?)`, `reset(event?)`

## Accessibility

- The component renders a `<form>` element with `novalidate` so native HTML validation can be opted into via the `validationBehavior` prop.
- Submission sets `data-submitted="true"` and emits `submit`; the event handler is responsible for any validation or async work.
- Reset emits `reset` and clears errors (except those listed in `omitResetFields`).