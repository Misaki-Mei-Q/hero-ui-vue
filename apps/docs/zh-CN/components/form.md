# Form 表单

一个包装组件，提供表单上下文，用于组合输入控件、处理提交并展示校验错误。

## 导入

```vue
<script setup lang="ts">
import { Form } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/form-basic.vue

:::

### 带说明

:::preview

demo-preview=../../demos/form-with-description.vue

:::

## API

### Form 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `errors` | `Record<string, string>` | `{}` | 字段名到其校验错误消息的映射。 |
| `isSubmitting` | `boolean` | `false` | 将表单标记为提交中（设置 `data-submitting`）。 |
| `validationBehavior` | `'native' \| 'aria'` | `'native'` | 指示校验如何向辅助技术播报。 |
| `omitResetFields` | `string[]` | `[]` | 重置时不应清除错误的字段名。 |

### Form 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `submit` | `SubmitEvent` | 表单被提交时触发。 |
| `submit-success` | `SubmitEvent` | 提交成功后触发。 |
| `submit-error` | `SubmitEvent` | 提交失败时触发。 |
| `reset` | `Event` | 表单被重置时触发。 |

### Form 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 表单主体。通常是 `Label`、`Input`、`Description`、`FieldError` 和一个提交按钮。 |

### `useFormContext`

一个返回表单上下文的组合式函数（在 `Form` 之外返回 `null`）：

```ts
import { useFormContext } from '@misaki-mei/heroui-vue'

const ctx = useFormContext()
ctx?.setFieldError('email', 'Already in use')
```

可用的方法 / ref：

- `isSubmitting`, `isSubmitted`, `errors`（ref）
- `setFieldError(name, message)`
- `clearFieldError(name)`
- `setErrors(errors)`
- `submit(event?)`, `reset(event?)`

## 无障碍

- 该组件渲染带有 `novalidate` 的 `<form>` 元素，因此可以通过 `validationBehavior` 属性选择启用原生 HTML 校验。
- 提交时会设置 `data-submitted="true"` 并触发 `submit`；任何校验或异步处理由事件处理函数负责。
- 重置会触发 `reset` 并清除错误（`omitResetFields` 中列出的字段除外）。
