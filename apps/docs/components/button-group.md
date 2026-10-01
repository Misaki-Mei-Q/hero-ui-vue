# ButtonGroup

Group related buttons into a connected control with shared size, variant, disabled state, and separators.

## Import

```vue
<script setup lang="ts">
import { Button, ButtonGroup, ButtonGroupSeparator } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/button-group-basic.vue

:::

### Anatomy

```vue
<template>
  <ButtonGroup>
    <Button>First</Button>
    <Button>
      <ButtonGroupSeparator />
      Second
    </Button>
    <Button>
      <ButtonGroupSeparator />
      Third
    </Button>
  </ButtonGroup>
</template>
```

`ButtonGroup` passes `size`, `variant`, `isDisabled`, and `fullWidth` to direct child buttons through Vue provide/inject. Add `ButtonGroupSeparator` inside each button after the first one when you want dividers.

### Variants

:::preview

demo-preview=../demos/button-group-variants.vue

:::

### Sizes

:::preview

demo-preview=../demos/button-group-sizes.vue

:::

### Orientation

:::preview

demo-preview=../demos/button-group-orientation.vue

:::

### With Icons

:::preview

demo-preview=../demos/button-group-with-icons.vue

:::

### Full Width

:::preview

demo-preview=../demos/button-group-full-width.vue

:::

### Disabled State

:::preview

demo-preview=../demos/button-group-disabled.vue

:::

### Without Separator

:::preview

demo-preview=../demos/button-group-without-separator.vue

:::

## Styling

### Passing Classes

```vue
<template>
  <ButtonGroup class="gap-2">
    <Button>First</Button>
    <Button>
      <ButtonGroupSeparator />
      Second
    </Button>
    <Button>
      <ButtonGroupSeparator />
      Third
    </Button>
  </ButtonGroup>
</template>
```

### CSS Classes

| Class | Description |
|---|---|
| `.button-group` | Base button group container |
| `.button-group--horizontal` | Horizontal orientation |
| `.button-group--vertical` | Vertical orientation |
| `.button-group--full-width` | Full width group and stretched child buttons |
| `.button-group__separator` | Separator element between buttons |

## Interactive States

| Selector | Description |
|---|---|
| `[data-disabled="true"]` | Applied when the group is disabled |
| `[data-orientation="horizontal"]` | Horizontal layout state |
| `[data-orientation="vertical"]` | Vertical layout state |
| `.button-group .button[data-pressed="true"]` | Pressed child buttons do not scale inside the group |
| `.button-group .button[data-focus-visible="true"]` | Child focus ring is inset to stay inside connected edges |

## API

### ButtonGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'danger-soft' \| 'outline' \| 'ghost'` | `undefined` | Variant applied to child buttons |
| `size` | `'sm' \| 'md' \| 'lg'` | `undefined` | Size applied to child buttons |
| `isDisabled` | `boolean` | `false` | Whether child buttons inherit disabled state |
| `fullWidth` | `boolean` | `false` | Whether the group and child buttons stretch to fill the container |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Button layout orientation |
| `class` | `string` | `undefined` | Additional classes for the group root |

### ButtonGroupSeparator Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional classes for the separator |

### Slots

| Component | Slot | Description |
|---|---|---|
| `ButtonGroup` | `default` | Button group content |
