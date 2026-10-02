# Toast

Transient notifications anchored to a viewport corner. Backed by Radix Vue's `Toast` primitives.

## Import

```vue
<script setup lang="ts">
import { ToastProvider, useToast } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/toast-basic.vue

:::

### Variants

:::preview

demo-preview=../demos/toast-variants.vue

:::

## API

### `ToastProvider` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `'top' \| 'top start' \| 'top end' \| 'bottom' \| 'bottom start' \| 'bottom end'` | `'bottom end'` | Viewport position. |
| `duration` | `number` | `5000` | Default duration in ms. |
| `gap` | `number` | `12` | Vertical gap between stacked toasts, in px. |
| `maxVisibleToasts` | `number` | `3` | Max visible toasts before older ones are hidden. |
| `scaleFactor` | `number` | `0.05` | Scale reduction per stacked toast. |
| `width` | `number \| string` | `460` | Region minimum width. |
| `class` | `string` | `undefined` | Extra class on the viewport. |

### `useToast()` Composable

Returns `null` outside of a `<ToastProvider>`, otherwise an object. Call it from a component nested inside the provider:

```ts
interface ToastApi {
  toasts: Ref<ToastEntry[]>
  show(entry: Omit<ToastEntry, 'id'> & { id?: string }): string
  update(id: string, patch: Partial<Omit<ToastEntry, 'id'>>): void
  close(id?: string): void
  closeAll(): void
}

interface ToastEntry {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  duration?: number
}
```

## Accessibility

- The viewport is announced as a polite live region.
- `aria-label="Close"` is set on the dismiss button.
- Only the frontmost toast is interactive; the rest collapse into a stack and expand on hover/focus.