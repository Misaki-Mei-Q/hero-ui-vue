# ErrorMessage 错误消息

用于在非表单组件中显示错误的底层错误消息组件。

## 导入

```ts
import { ErrorMessage } from '@misaki-mei/heroui-vue'
```

## 用法

`ErrorMessage` 专为 `TagGroup`、`Calendar` 等集合类组件及类似的非表单场景设计。

:::preview

demo-preview=../../demos/error-message-basic.vue

:::

## 结构

```vue
<TagGroup>
  <Tag />
  <Description />
  <ErrorMessage />
</TagGroup>
```

## 何时使用

非表单组件请使用 `ErrorMessage`。对于表单字段，推荐使用 [Field Error](/zh-CN/components/field-error)，它与字段校验行为相关联。

## ErrorMessage 与 FieldError 对比

| 组件 | 使用场景 | 表单集成 |
|-----------|----------|------------------|
| `ErrorMessage` | 非表单组件 | 否 |
| `FieldError` | 表单字段 | 是 |

## 样式

该组件使用 `@misaki-mei/heroui-vue-styles` 中的 `.error-message` 类。

## API

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 额外的 CSS 类 |
