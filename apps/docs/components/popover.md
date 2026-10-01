# Popover

A floating container that displays rich content anchored to a trigger element. Useful for menus, forms, and contextual actions.

## Import

```vue
<script setup lang="ts">
import { Popover } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/popover-basic.vue

:::

### Placements

:::preview

demo-preview=../demos/popover-placements.vue

:::

### With Arrow

:::preview

demo-preview=../demos/popover-with-arrow.vue

:::

### Controlled

:::preview

demo-preview=../demos/popover-controlled.vue

:::

## API

### Popover Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state. |
| `defaultOpen` | `boolean` | `undefined` | Initial uncontrolled open state. |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Side the popover appears on. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment along the trigger. |
| `offset` | `number` | `9` | Distance from the trigger. |
| `arrow` | `boolean` | `false` | Render the directional arrow. |
| `arrowWidth` | `number` | `14` | Arrow width in pixels. |
| `arrowHeight` | `number` | `7` | Arrow height in pixels. |
| `modal` | `boolean` | `false` | Use a modal layer (blocks outside interaction). |
| `title` | `string` | `undefined` | Heading rendered at the top of the dialog. |
| `description` | `string` | `undefined` | Optional description rendered after the body. |

### Popover Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:open` | `boolean` | Emitted when the open state changes. |

### Popover Slots

| Slot | Description |
|------|-------------|
| `trigger` | Element that opens the popover. |
| `default` | Popover body content. |
| `title` | Custom heading content (overrides `title` prop). |
| `description` | Custom description content. |
| `close` | Custom close trigger (typically a button). |

## Accessibility

- The popover opens via click, Enter, or Space on the trigger.
- `Esc` closes the popover and returns focus to the trigger.
- Outside click and focus both dismiss the popover.
- The popover content is rendered inside a portal at `document.body`.