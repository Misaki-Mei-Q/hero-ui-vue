# TextField

A complete form field component that combines input, label, description, and error message.

## Import

```vue
<script setup lang="ts">
import { TextField } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/textfield-basic.vue

:::

### With Description

```vue
<template>
  <TextField 
    label="Username"
    description="Choose a unique username"
    placeholder="Enter username"
  />
</template>
```

### With Error

```vue
<template>
  <TextField 
    label="Password"
    :error="hasError ? 'Password must be at least 8 characters' : undefined"
    v-model="password"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const password = ref('')
const hasError = computed(() => password.value.length > 0 && password.value.length < 8)
</script>
```

### Required

```vue
<template>
  <TextField 
    label="Full Name"
    required
    placeholder="Enter your full name"
  />
</template>
```

### Disabled

```vue
<template>
  <TextField 
    label="Disabled Field"
    :disabled="true"
    value="Cannot edit this"
  />
</template>
```

### Input Types

```vue
<template>
  <TextField label="Email" type="email" />
  <TextField label="Password" type="password" />
  <TextField label="Number" type="number" />
  <TextField label="URL" type="url" />
  <TextField label="Tel" type="tel" />
</template>
```

### With Prefix/Suffix

```vue
<template>
  <TextField label="Website">
    <template #prefix>https://</template>
    <template #suffix>.com</template>
  </TextField>

  <TextField label="Price">
    <template #prefix>$</template>
  </TextField>
</template>
```

## API

### TextField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | - | The field value |
| `label` | `string` | - | The field label |
| `description` | `string` | - | The field description |
| `placeholder` | `string` | - | The input placeholder |
| `type` | `string` | `'text'` | The input type |
| `required` | `boolean` | `false` | Whether the field is required |
| `disabled` | `boolean` | `false` | Whether the field is disabled |
| `readonly` | `boolean` | `false` | Whether the field is read-only |

### TextField Events

| Event | Type | Description |
|-------|------|-------------|
| `update:modelValue` | `(value: string) => void` | Fired when value changes |
| `blur` | `(event: FocusEvent) => void` | Fired when field loses focus |
| `focus` | `(event: FocusEvent) => void` | Fired when field receives focus |

### TextField Slots

| Slot | Description |
|------|-------------|
| `label` | Custom label content |
| `description` | Custom description content |
| `prefix` | Content before the input |
| `suffix` | Content after the input |

## Accessibility

- TextField combines all form field elements with proper associations
- Label is properly linked to input via `for` attribute
- Description uses `aria-describedby`
- Error messages use `aria-describedby` and `aria-invalid`
- Required fields are indicated with `aria-required`
- Full keyboard navigation support
