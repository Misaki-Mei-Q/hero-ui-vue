# TagGroup

Groups selectable or removable tags.

## Import

```ts
import { Tag, TagGroup, TagRemoveButton } from '@misaki-mei/heroui-vue'
```

## Usage

:::preview

demo-preview=../demos/tag-group-basic.vue

:::

## Anatomy

```vue
<TagGroup>
  <Tag>
    Label
    <TagRemoveButton />
  </Tag>
</TagGroup>
```

## Sizes

:::preview

demo-preview=../demos/tag-group-sizes.vue

:::

## Variants

:::preview

demo-preview=../demos/tag-group-variants.vue

:::

## Disabled

:::preview

demo-preview=../demos/tag-group-disabled.vue

:::

## Selection Modes

:::preview

demo-preview=../demos/tag-group-selection-modes.vue

:::

## Controlled

:::preview

demo-preview=../demos/tag-group-controlled.vue

:::

## With Error Message

:::preview

demo-preview=../demos/tag-group-with-error-message.vue

:::

## With Prefix

:::preview

demo-preview=../demos/tag-group-with-prefix.vue

:::

## With Remove Button

:::preview

demo-preview=../demos/tag-group-with-remove-button.vue

:::

## With List Data

:::preview

demo-preview=../demos/tag-group-with-list-data.vue

:::

## Custom Render Function

:::preview

demo-preview=../demos/tag-group-custom-render-function.vue

:::

## Related Components

- [Tag](/components/tag)

## Styling

`TagGroup` owns the label, list layout, selection state, disabled keys, and remove callbacks. Use component props for native tag behavior first. Demo-only layout styles should stay in each demo file and be shown in the source panel.

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selectionMode` | `'none' \| 'single' \| 'multiple'` | `'none'` | Enables single or multiple tag selection |
| `selectedKeys` | `Array<string \| number>` | `undefined` | Controlled selected keys |
| `defaultSelectedKeys` | `Array<string \| number>` | `[]` | Initial uncontrolled selected keys |
| `disabledKeys` | `Array<string \| number>` | `[]` | Keys that cannot be selected |
| `disabled` / `isDisabled` | `boolean` | `false` | Disables the whole group |
| `isInvalid` | `boolean` | `false` | Marks the group and child tags invalid |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size inherited by child tags |
| `variant` | `'default' \| 'surface'` | `'default'` | Visual style inherited by child tags |

| Event | Payload | Description |
|-------|---------|-------------|
| `update:selectedKeys` | `Array<string \| number>` | Emitted when selection changes |
| `selection-change` | `Array<string \| number>` | Emitted when selection changes |
| `remove` | `string \| number` | Emitted when a tag remove button removes a tag key |
