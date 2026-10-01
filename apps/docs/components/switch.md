# Switch

A toggle switch component for boolean states.

## Import

```ts
import { Description, Label, Switch, SwitchGroup } from '@misaki-mei-q/heroui-vue'
```

## Usage

### Basic

:::preview

demo-preview=../demos/switch-basic.vue

:::

## Anatomy

```vue
<template>
  <Switch>
    <span data-slot="switch-control">
      <span data-slot="switch-thumb">
        <span data-slot="switch-icon" />
      </span>
    </span>
    <div data-slot="switch-content">
      <Label />
      <Description />
    </div>
  </Switch>
</template>
```

### Disabled

:::preview

demo-preview=../demos/switch-disabled.vue

:::

### Default Selected

:::preview

demo-preview=../demos/switch-default-selected.vue

:::

### Controlled

:::preview

demo-preview=../demos/switch-controlled.vue

:::

### Without Label

:::preview

demo-preview=../demos/switch-without-label.vue

:::

### Sizes

:::preview

demo-preview=../demos/switch-sizes.vue

:::

### Label Position

:::preview

demo-preview=../demos/switch-label-position.vue

:::

### With Icons

:::preview

demo-preview=../demos/switch-with-icons.vue

:::

### With Description

:::preview

demo-preview=../demos/switch-with-description.vue

:::

### Group

:::preview

demo-preview=../demos/switch-group.vue

:::

### Group Horizontal

:::preview

demo-preview=../demos/switch-group-horizontal.vue

:::

### Custom Styles

:::preview

demo-preview=../demos/switch-custom-styles.vue

:::

## Styling

### CSS Classes

| Class | Description |
|------|-------------|
| `.switch` | Base switch wrapper |
| `.switch__control` | Track element |
| `.switch__thumb` | Thumb element |
| `.switch__icon` | Optional thumb icon |
| `.switch__content` | Label/description wrapper |
| `.switch--sm` | Small size |
| `.switch--md` | Medium size |
| `.switch--lg` | Large size |
| `.switch-group` | Group wrapper |
| `.switch-group__items` | Group item layout wrapper |
| `.switch-group--horizontal` | Horizontal group orientation |
| `.switch-group--vertical` | Vertical group orientation |

### Interactive States

| State | Selector |
|------|----------|
| Selected | `[aria-checked="true"]` / `[data-selected="true"]` |
| Hover | `[data-hovered="true"]` |
| Pressed | `[data-pressed="true"]` |
| Focus visible | `[data-focus-visible="true"]` |
| Disabled | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| Invalid | `[data-invalid="true"]` |
| Required | `[data-required="true"]` |

## API

### Switch Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `v-model` | `boolean` | `undefined` | Controlled selected state |
| `checked` | `boolean` | `undefined` | Controlled selected state alias |
| `isSelected` | `boolean` | `undefined` | React-style controlled selected alias |
| `defaultChecked` | `boolean` | `false` | Initial selected state |
| `defaultSelected` | `boolean` | `undefined` | React-style initial selected alias |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Switch size |
| `disabled` | `boolean` | `undefined` | Disable the switch |
| `isDisabled` | `boolean` | `undefined` | React-style disabled alias |
| `isInvalid` | `boolean` | `undefined` | Invalid state |
| `required` | `boolean` | `undefined` | Native required state |
| `isRequired` | `boolean` | `undefined` | React-style required alias |
| `name` | `string` | `undefined` | Form name |
| `value` | `string` | `undefined` | Form value |

### Switch Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Emitted when selected state changes |
| `update:checked` | `boolean` | Emitted when selected state changes |
| `change` | `boolean` | Emitted when selected state changes |

### Switch Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | `{ checked, isSelected }` | Label and description content |
| `icon` | `{ checked, isSelected }` | Optional thumb icon |

### SwitchGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `undefined` | Group orientation |
