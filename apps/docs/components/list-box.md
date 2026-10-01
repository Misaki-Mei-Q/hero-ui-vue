# ListBox

A listbox displays a list of options and allows a user to select one or more of them.

## Import

```ts
import { ListBox, ListBoxItem, ListBoxItemIndicator, ListBoxSection } from '@misaki-mei/heroui-vue'
```

## Usage

:::preview

demo-preview=../demos/list-box-default.vue

:::

## Anatomy

```vue
<ListBox>
  <ListBoxItem>
    <Label />
    <Description />
    <ListBoxItemIndicator />
  </ListBoxItem>
  <ListBoxSection>
    <Header />
    <ListBoxItem>
      <Label />
    </ListBoxItem>
  </ListBoxSection>
</ListBox>
```

## With Sections

:::preview

demo-preview=../demos/list-box-with-sections.vue

:::

## Multi Select

:::preview

demo-preview=../demos/list-box-multi-select.vue

:::

## With Disabled Items

:::preview

demo-preview=../demos/list-box-with-disabled-items.vue

:::

## Custom Check Icon

:::preview

demo-preview=../demos/list-box-custom-check-icon.vue

:::

## Controlled

:::preview

demo-preview=../demos/list-box-controlled.vue

:::

## Custom Render Function

:::preview

demo-preview=../demos/list-box-custom-render-function.vue

:::

## Virtualization

The Vue version currently shows the same large-list interaction shape with a scrollable list. A true virtualization adapter still needs to be added before claiming parity with React Aria `Virtualizer`.

:::preview

demo-preview=../demos/list-box-virtualization.vue

:::

## Related Components

- [Autocomplete](/components/autocomplete)
- ComboBox
- Select

## Styling

Use component props for selection, disabled state, and variants first. Demo-only layout classes are kept in the demo source so the preview code remains complete.

## API

### ListBox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `undefined` | Accessibility label for the listbox |
| `selectionMode` | `'none' \| 'single' \| 'multiple'` | `'single'` | Selection behavior |
| `selectedKeys` | `Array<string \| number>` | `undefined` | Controlled selected keys |
| `defaultSelectedKeys` | `Array<string \| number>` | `[]` | Initial selected keys |
| `disabledKeys` | `Array<string \| number>` | `[]` | Disabled item keys |
| `disabled` / `isDisabled` | `boolean` | `false` | Disables the whole listbox |
| `variant` | `'default' \| 'danger'` | `'default'` | Visual variant inherited by items |

### ListBoxItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` / `value` | `string \| number` | `undefined` | Unique item key |
| `textValue` | `string` | `undefined` | Text value used for accessible naming |
| `disabled` / `isDisabled` | `boolean` | `false` | Disables the item |
| `variant` | `'default' \| 'danger'` | inherited | Item variant |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:selectedKeys` | `Array<string \| number>` | Emitted when selection changes |
| `selection-change` | `Array<string \| number>` | Emitted when selection changes |
| `action` | `string \| number` | Emitted when an enabled item is activated |
