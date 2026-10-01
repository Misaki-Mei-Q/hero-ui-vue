# Dropdown

A menu that opens from a trigger button. Supports sections, separators, danger variants, keyboard shortcuts, and four placements.

## Import

```vue
<script setup lang="ts">
import {
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
} from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/dropdown-basic.vue

:::

### With Separator

:::preview

demo-preview=../demos/dropdown-with-separator.vue

:::

### Placements

:::preview

demo-preview=../demos/dropdown-placements.vue

:::

## API

### Dropdown Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state. |
| `defaultOpen` | `boolean` | `undefined` | Initial uncontrolled open state. |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Side the menu appears on. |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Alignment along the trigger. |
| `offset` | `number` | `8` | Distance from the trigger. |
| `modal` | `boolean` | `false` | Block interaction with outside elements. |

### Dropdown Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:open` | `boolean` | Emitted when the open state changes. |
| `openChange` | `boolean` | Convenience alias. |

### Dropdown Slots

| Slot | Description |
|------|-------------|
| `trigger` | Trigger element (typically a `Button`). |
| `default` | Menu body composed of `DropdownItem`/`DropdownSection`/`DropdownSeparator`/`DropdownLabel`. |

### DropdownItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'danger'` | `'default'` | Item styling. |
| `disabled` | `boolean` | `false` | Prevent selection. |
| `shortcut` | `string` | `undefined` | Render a keyboard hint on the right. |

### DropdownItem Events

| Event | Payload | Description |
|-------|---------|-------------|
| `select` | - | Emitted when the item is activated. |

### DropdownSection Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Optional section heading rendered via `DropdownLabel`. |

## Accessibility

- Trigger exposes `aria-haspopup="menu"` and `aria-expanded` automatically.
- Menu uses `role="menu"`; items use `role="menuitem"`.
- Sections use `role="group"` with an accessible label.
- Pressing `Esc` closes the menu and returns focus to the trigger.
- Arrow keys navigate between items.