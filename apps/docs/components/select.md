# Select

A popover that lets users pick one or more values from a list. Built on top of `Popover` + `ListBox`, supports single and multiple selection, sections, and disabled options.

## Import

```vue
<script setup lang="ts">
import {
  Select,
  ListBoxItem,
  ListBoxItemIndicator,
  ListBoxSection,
} from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/select-basic.vue

:::

### With Sections

:::preview

demo-preview=../demos/select-with-sections.vue

:::

### Multiple Selection

:::preview

demo-preview=../demos/select-multiple.vue

:::

### Required with Validation

:::preview

demo-preview=../demos/select-required.vue

:::

## API

### Select Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `ListBoxKey \| ListBoxKey[]` | `undefined` | Controlled value (or array in multiple mode). |
| `defaultSelectedKey` | `ListBoxKey` | `undefined` | Initial uncontrolled key. |
| `defaultSelectedKeys` | `ListBoxKey[]` | `[]` | Initial uncontrolled keys (multiple mode). |
| `selectedKey` | `ListBoxKey` | `undefined` | Controlled single key (alias for `modelValue`). |
| `selectedKeys` | `ListBoxKey[]` | `undefined` | Controlled keys (multiple mode). |
| `disabledKeys` | `ListBoxKey[]` | `[]` | Keys that cannot be selected. |
| `selectionMode` | `'single' \| 'multiple'` | `'single'` | Pick one or many. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Popover placement. |
| `offset` | `number` | `8` | Distance from trigger. |
| `isDisabled` | `boolean` | `false` | Disable the select. |
| `isInvalid` | `boolean` | `false` | Mark as invalid (hides description). |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `isOpen` | `boolean` | `undefined` | Controlled open state. |
| `defaultOpen` | `boolean` | `undefined` | Initial uncontrolled open state. |
| `placeholder` | `string` | `'Select an option'` | Trigger text when no selection. |
| `name` | `string` | `undefined` | Form field name. |
| `label` | `string` | `undefined` | Label rendered above the trigger. |
| `description` | `string` | `undefined` | Helper text rendered below. |
| `errorMessage` | `string` | `undefined` | Error message rendered below. |
| `showIndicator` | `boolean` | `true` | Render the chevron indicator. |

### Select Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `ListBoxKey \| ListBoxKey[] \| null` | Emitted on selection change. |
| `update:selectedKey` | `ListBoxKey \| null` | Emitted when a single selection changes. |
| `update:selectedKeys` | `ListBoxKey[]` | Emitted when multiple selections change. |
| `update:isOpen` | `boolean` | Emitted when the popover opens or closes. |
| `selection-change` | `ListBoxKey \| ListBoxKey[] \| null` | Convenience event mirroring `update:modelValue`. |
| `openChange` | `boolean` | Emitted on open state change. |
| `close` | - | Emitted when the popover closes after a single-mode selection. |

### Select Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | `{ selectedKeys }` | Drop-in `ListBoxItem`s (and optional `ListBoxSection`s). |
| `label` | - | Custom label content. |
| `value` | `{ selectedKeys }` | Custom trigger label. |
| `error-message` | - | Custom error content. |
| `description` | - | Custom description content. |

## Accessibility

- The trigger exposes `role="combobox"` semantics via the underlying Popover trigger.
- The list uses `role="listbox"` and `aria-multiselectable` when in multiple mode.
- Pressing `Esc` closes the popover and returns focus to the trigger.
- `aria-required` is set when `isRequired` is true.