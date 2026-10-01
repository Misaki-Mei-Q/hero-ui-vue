# Radio

Radio button for single selection from a group.

## Import

```ts
import { Radio, RadioGroup } from '@misaki-mei/heroui-vue'
import { Label } from '@misaki-mei/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/radio-basic.vue

:::

### Controlled

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Radio, RadioGroup, Label } from '@misaki-mei/heroui-vue'

const selected = ref('medium')
</script>

<template>
  <RadioGroup v-model="selected">
    <div class="flex items-center gap-3">
      <Radio id="small" value="small" />
      <Label for="small">Small</Label>
    </div>
    <div class="flex items-center gap-3">
      <Radio id="medium" value="medium" />
      <Label for="medium">Medium</Label>
    </div>
    <div class="flex items-center gap-3">
      <Radio id="large" value="large" />
      <Label for="large">Large</Label>
    </div>
  </RadioGroup>
  <p class="text-sm text-gray-600">Selected: {{ selected }}</p>
</template>
```

### Disabled

```vue
<template>
  <RadioGroup>
    <div class="flex items-center gap-3">
      <Radio id="enabled" value="enabled" />
      <Label for="enabled">Enabled</Label>
    </div>
    <div class="flex items-center gap-3">
      <Radio id="disabled" value="disabled" :disabled="true" />
      <Label for="disabled">Disabled</Label>
    </div>
  </RadioGroup>
</template>
```

### With Description

```vue
<template>
  <RadioGroup>
    <div class="flex gap-3">
      <Radio class="mt-0.5" id="starter" value="starter" />
      <div class="flex flex-col gap-1">
        <Label for="starter">Starter Plan</Label>
        <p class="text-sm text-gray-600">Perfect for individuals</p>
      </div>
    </div>
    <!-- More options... -->
  </RadioGroup>
</template>
```

## API

### Radio Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Value of the radio button |
| `disabled` | `boolean` | `false` | Whether the radio is disabled |
| `required` | `boolean` | `false` | Whether the radio is required |

### RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | v-model value (selected radio value) |
| `name` | `string` | `undefined` | Name attribute for the radio group |

### RadioGroup Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when selection changes |
| `change` | `Event` | Native change event |

## Accessibility

- Proper label association with `id` and `for` attributes
- Keyboard navigation (Arrow keys to navigate, Space to select)
- Screen reader friendly with proper ARIA attributes
- Focus visible indicator
- Disabled state properly communicated
- Radio group semantics with proper roles
