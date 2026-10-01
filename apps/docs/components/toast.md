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
| `class` | `string` | `undefined` | Extra class on the viewport. |

### `useToast()` Composable

Returns `null` outside of a `<ToastProvider>`, otherwise an object:

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
- Each toast uses `role="status"`.