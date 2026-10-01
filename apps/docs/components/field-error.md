# FieldError

A component for displaying error messages associated with form fields.

## Import

```vue
<script setup lang="ts">
import { FieldError } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/field-error-basic.vue

:::

### With Form Field

```vue
<template>
  <div>
    <Label for="username">Username</Label>
    <Input 
      id="username" 
      v-model="username"
      :class="hasError ? 'border-red-500' : ''"
    />
    <FieldError v-if="hasError">
      Username must be at least 3 characters.
    </FieldError>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const username = ref('')
const hasError = computed(() => username.value.length > 0 && username.value.length < 3)
</script>
```

### Multiple Errors

```vue
<template>
  <div>
    <Input />
    <FieldError v-for="error in errors" :key="error">
      {{ error }}
    </FieldError>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const errors = ref([
  'Password must be at least 8 characters',
  'Password must contain at least one number'
])
</script>
```

### Sizes

```vue
<template>
  <FieldError>This field is required.</FieldError>
</template>
```

## API

### FieldError Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|

### FieldError Slots

| Slot | Description |
|------|-------------|
| `default` | The error message content |

## Accessibility

- FieldError uses `role="alert"` for immediate announcement
- Automatically linked to form fields via `aria-describedby`
- Color is not the only indicator (icon is also used)
- Screen reader friendly
