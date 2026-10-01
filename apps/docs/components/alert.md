# Alert

Display important messages and notifications with status-aware indicators.

## Import

```ts
import { Alert, AlertContent, AlertDescription, AlertIndicator, AlertTitle } from '@misaki-mei/heroui-vue'
```

## Usage

:::preview

demo-preview=../demos/alert-basic.vue

:::

## Anatomy

```vue
<template>
  <Alert>
    <AlertIndicator />
    <AlertContent>
      <AlertTitle />
      <AlertDescription />
    </AlertContent>
  </Alert>
</template>
```

## Styling

You can pass classes to each part when a local page needs one-off styling.

```vue
<template>
  <Alert class="rounded-xl border-2 border-blue-500" status="accent">
    <AlertIndicator class="text-blue-600" />
    <AlertContent class="gap-1">
      <AlertTitle class="text-lg font-bold">Custom Alert</AlertTitle>
      <AlertDescription class="text-sm opacity-80">
        This alert has custom styling applied.
      </AlertDescription>
    </AlertContent>
  </Alert>
</template>
```

The component exposes the same BEM-style classes as the React source:

| Slot | CSS class |
|------|-----------|
| `alert-root` | `.alert` |
| `alert-indicator` | `.alert__indicator` |
| `alert-content` | `.alert__content` |
| `alert-title` | `.alert__title` |
| `alert-description` | `.alert__description` |

Status classes:

| Status | CSS class |
|--------|-----------|
| `default` | `.alert--default` |
| `accent` | `.alert--accent` |
| `success` | `.alert--success` |
| `warning` | `.alert--warning` |
| `danger` | `.alert--danger` |

## API

### Alert

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Visual status |
| `class` | `string` | `undefined` | Custom root class |

### AlertIndicator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Custom indicator class |
| default slot | `VNode` | status icon | Custom indicator content |

### AlertContent / AlertTitle / AlertDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Custom slot class |
