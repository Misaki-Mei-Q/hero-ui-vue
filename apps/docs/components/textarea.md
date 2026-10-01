# Textarea

Multi-line text input field for longer text entry.

## Import

```ts
import { Textarea } from '@misaki-mei-q/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/textarea-basic.vue

:::

### Controlled

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@misaki-mei-q/heroui-vue'

const message = ref('')
</script>

<template>
  <div class="flex flex-col gap-2">
    <label for="message">Message</label>
    <Textarea id="message" v-model="message" placeholder="Enter your message" />
    <p class="text-sm text-gray-600">Characters: {{ message.length }}</p>
  </div>
</template>
```

### Rows

Control the height with the `rows` prop:

```vue
<template>
  <Textarea :rows="3" placeholder="3 rows" />
  <Textarea :rows="5" placeholder="5 rows" />
  <Textarea :rows="8" placeholder="8 rows" />
</template>
```

### Disabled

```vue
<template>
  <Textarea :disabled="true" placeholder="Disabled textarea" />
</template>
```

### Resize

Control resize behavior:

```vue
<template>
  <Textarea class="resize-none" placeholder="Cannot be resized" />
  <Textarea class="resize-y" placeholder="Resize vertically" />
  <Textarea class="resize" placeholder="Resize both ways" />
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `undefined` | Placeholder text |
| `rows` | `number` | `4` | Number of visible text rows |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `readonly` | `boolean` | `false` | Whether the textarea is read-only |
| `required` | `boolean` | `false` | Whether the textarea is required |
| `modelValue` | `string` | `undefined` | v-model value |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when textarea value changes |
| `input` | `InputEvent` | Native input event |
| `change` | `Event` | Native change event |
| `focus` | `FocusEvent` | Emitted when textarea receives focus |
| `blur` | `FocusEvent` | Emitted when textarea loses focus |

## Accessibility

- Proper label association with `id` and `for` attributes
- Keyboard navigation support
- Screen reader friendly
- Focus visible indicator
