# ComboBox

A searchable select built on top of `Popover` + `ListBox`. The trigger is a text input, so users can filter options by query string in addition to selecting items.

## Import

```vue
<script setup lang="ts">
import { ComboBox, ListBoxItem, ListBoxSection } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/combo-box-basic.vue

:::

### With Sections

:::preview

demo-preview=../demos/combo-box-with-sections.vue

:::

### Required with Validation

:::preview

demo-preview=../demos/combo-box-required.vue

:::

## API

### ComboBox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `ListBoxKey \| ListBoxKey[]` | `undefined` | Controlled value (or array in multiple mode). |
| `defaultSelectedKey` | `ListBoxKey` | `undefined` | Initial uncontrolled key. |
| `defaultSelectedKeys` | `ListBoxKey[]` | `[]` | Initial uncontrolled keys (multiple mode). |
| `selectedKey` | `ListBoxKey` | `undefined` | Controlled single key alias. |
| `selectedKeys` | `ListBoxKey[]` | `undefined` | Controlled keys (multiple mode). |
| `disabledKeys` | `ListBoxKey[]` | `[]` | Keys that cannot be selected. |
| `selectionMode` | `'single' \| 'multiple'` | `'single'` | Pick one or many. |
| `items` | `ComboBoxItem[] \| ComboBoxItem[][]` | `[]` | Options. Pass an array of arrays for sections. |
| `filter` | `(item, query) => boolean` | substring match | Custom filter predicate. |
| `inputValue` | `string` | `undefined` | Controlled input text. |
| `defaultInputValue` | `string` | `''` | Initial uncontrolled input text. |
| `allowCustomValue` | `boolean` | `false` | Reserved for future use. |
| `fullWidth` | `boolean` | `false` | Stretch to parent width. |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Popover placement. |
| `offset` | `number` | `8` | Distance from the input. |
| `isDisabled` | `boolean` | `false` | Disable interaction. |
| `isInvalid` | `boolean` | `false` | Mark as invalid (hides description). |
| `isRequired` | `boolean` | `false` | Mark as required. |
| `isOpen` | `boolean` | `undefined` | Controlled open state. |
| `defaultOpen` | `boolean` | `undefined` | Initial uncontrolled open state. |
| `placeholder` | `string` | `'Select an option'` | Placeholder when no selection. |
| `searchPlaceholder` | `string` | `'Search...'` | Placeholder for the search input. |
| `label` | `string` | `undefined` | Label rendered above the input. |
| `description` | `string` | `undefined` | Helper text rendered below. |
| `errorMessage` | `string` | `undefined` | Error message rendered below. |

### ComboBox Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `ListBoxKey \| ListBoxKey[] \| null` | Emitted on selection change. |
| `update:selectedKey` | `ListBoxKey \| null` | Emitted when a single selection changes. |
| `update:selectedKeys` | `ListBoxKey[]` | Emitted when multiple selections change. |
| `update:isOpen` | `boolean` | Emitted on popover open state change. |
| `update:inputValue` | `string` | Emitted on input typing. |
| `openChange` | `boolean` | Convenience alias. |
| `change` | `(value, item)` | Emitted with the new value plus the matched item(s). |
| `input` | `string` | Convenience alias for typing. |

### ComboBox Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | `{ items }` | Drop-in `ListBoxItem`s. |
| `search` | - | Custom search input rendering. |
| `empty` | - | Rendered when no items match the query. |
| `label` | - | Custom label content. |
| `description` | - | Custom description content. |
| `error-message` | - | Custom error content. |
| `item-${key}` | `{ item }` | Custom rendering for a specific option. |

### ComboBoxItem

```ts
interface ComboBoxItem {
  key: ListBoxKey
  label: string
  description?: string
  isDisabled?: boolean
}
```

## Accessibility

- The input exposes `role="combobox"` semantics via the underlying Popover trigger.
- Typing filters items by default (`label.toLowerCase().includes(query.toLowerCase())`).
- `Esc` closes the popover and returns focus to the input.
- Arrow keys navigate the listbox; `Enter` activates.