# Tooltip

A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it.

## Import

```vue
<script setup lang="ts">
import { Tooltip } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/tooltip-basic.vue

:::

### Placements

:::preview

demo-preview=../demos/tooltip-placements.vue

:::

### With Arrow

:::preview

demo-preview=../demos/tooltip-with-arrow.vue

:::

### Custom Delay

:::preview

demo-preview=../demos/tooltip-custom-delay.vue

:::

### Rich Content

:::preview

demo-preview=../demos/tooltip-with-content.vue

:::

### Disabled

:::preview

demo-preview=../demos/tooltip-disabled.vue

:::

## API

### Tooltip Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `undefined` | Default-slot fallback text content. |
| `open` | `boolean` | `undefined` | Controlled open state. |
| `defaultOpen` | `boolean` | `undefined` | Initial open state. |
| `delay` | `number` | `700` | Open delay in milliseconds. |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Side the tooltip appears on. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment along the trigger. |
| `offset` | `number` | `7` | Distance from the trigger. |
| `arrow` | `boolean` | `false` | Render the directional arrow. |
| `arrowWidth` | `number` | `10` | Arrow width in pixels. |
| `arrowHeight` | `number` | `5` | Arrow height in pixels. |
| `disabled` | `boolean` | `false` | Disable the tooltip entirely. |
| `disableClosingTrigger` | `boolean` | `false` | Keep content open when trigger is clicked. |
| `ignoreNonKeyboardFocus` | `boolean` | `false` | Skip open on non-keyboard focus. |

### Tooltip Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:open` | `boolean` | Emitted when the open state changes. |

### Tooltip Slots

| Slot | Description |
|------|-------------|
| `trigger` | Element that triggers the tooltip. |
| `default` | Tooltip body content (overrides `content`). |

## Accessibility

- Trigger element receives `aria-describedby` while the tooltip is open.
- Tooltip is rendered inside a portal with `role="tooltip"`.
- Pressing `Esc` closes the tooltip.
- The arrow uses `data-slot="overlay-arrow"` and rotates automatically based on placement.