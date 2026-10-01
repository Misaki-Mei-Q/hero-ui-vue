# Toast 吐司

锚定在视口角落的临时通知。基于 Radix Vue 的 `Toast` 基础组件实现。

## 导入

```vue
<script setup lang="ts">
import { ToastProvider, useToast } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/toast-basic.vue

:::

### 变体

:::preview

demo-preview=../../demos/toast-variants.vue

:::

## API

### `ToastProvider` 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `placement` | `'top' \| 'top start' \| 'top end' \| 'bottom' \| 'bottom start' \| 'bottom end'` | `'bottom end'` | 视口位置。 |
| `duration` | `number` | `5000` | 默认持续时间（毫秒）。 |
| `class` | `string` | `undefined` | 附加到视口的额外类名。 |

### `useToast()` 组合式函数

在 `<ToastProvider>` 之外调用时返回 `null`，否则返回一个对象：

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

## 无障碍

- 视口会被声明为 polite 实时区域。
- 关闭按钮上设置了 `aria-label="Close"`。
- 每条吐司使用 `role="status"`。
