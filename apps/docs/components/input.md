# Input

Single-line text input field for user text entry.

## Import

```ts
import { Input } from '@misaki-mei-q/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/input-basic.vue

:::

### Input Types

:::preview

demo-preview=../demos/input-types.vue

:::

### Disabled & Full Width

:::preview

demo-preview=../demos/input-states.vue

:::

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `readonly` | `boolean` | `false` | Whether the input is read-only |
| `required` | `boolean` | `false` | Whether the input is required |
| `modelValue` | `string` | `undefined` | v-model value |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when input value changes |
| `input` | `InputEvent` | Native input event |
| `change` | `Event` | Native change event |
| `focus` | `FocusEvent` | Emitted when input receives focus |
| `blur` | `FocusEvent` | Emitted when input loses focus |

## Accessibility

- Proper label association with `id` and `for` attributes
- Keyboard navigation support
- Screen reader friendly
- Focus visible indicator
