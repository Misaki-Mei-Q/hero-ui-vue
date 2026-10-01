# SearchField 搜索框

带清除按钮和搜索图标的搜索输入框。

## 导入

```ts
import {
  SearchField,
  SearchFieldClearButton,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldSearchIcon,
} from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/search-field-basic.vue

:::

## 结构

```vue
<SearchField>
  <Label />
  <SearchFieldGroup>
    <SearchFieldSearchIcon />
    <SearchFieldInput />
    <SearchFieldClearButton />
  </SearchFieldGroup>
  <Description />
  <FieldError />
</SearchField>
```

## 带说明

:::preview

demo-preview=../../demos/search-field-with-description.vue

:::

## 必填字段

:::preview

demo-preview=../../demos/search-field-required.vue

:::

## 校验

:::preview

demo-preview=../../demos/search-field-validation.vue

:::

## 禁用状态

:::preview

demo-preview=../../demos/search-field-disabled.vue

:::

## 受控

:::preview

demo-preview=../../demos/search-field-controlled.vue

:::

## 带校验

:::preview

demo-preview=../../demos/search-field-with-validation.vue

:::

## 自定义图标

:::preview

demo-preview=../../demos/search-field-custom-icons.vue

:::

## 全宽

:::preview

demo-preview=../../demos/search-field-full-width.vue

:::

## 变体

:::preview

demo-preview=../../demos/search-field-variants.vue

:::

## 在 Surface 容器中

将 SearchField 放入 Surface 内部时，请使用 `variant="secondary"`。

:::preview

demo-preview=../../demos/search-field-on-surface.vue

:::

## 表单示例

:::preview

demo-preview=../../demos/search-field-form-example.vue

:::

## 带键盘快捷键

:::preview

demo-preview=../../demos/search-field-with-keyboard-shortcut.vue

:::

## 相关组件

- [Input](/zh-CN/components/input)
- [TextField](/zh-CN/components/textfield)
- Select
- ComboBox

## 自定义渲染函数

:::preview

demo-preview=../../demos/search-field-custom-render-function.vue

:::

## 样式

请优先使用组件属性来控制状态与变体行为。仅用于演示的布局样式已包含在各演示源码中。

## API

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` / `value` | `string` | `undefined` | 受控值 |
| `defaultValue` | `string` | `''` | 初始的非受控值 |
| `fullWidth` | `boolean` | `false` | 使字段宽度填满其容器 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 视觉变体 |
| `disabled` / `isDisabled` | `boolean` | `false` | 禁用搜索框 |
| `required` / `isRequired` | `boolean` | `false` | 将输入框标记为必填 |
| `isInvalid` | `boolean` | `false` | 应用无效状态 |
| `name` | `string` | `undefined` | 表单字段名称 |

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 值变化时触发 |
| `change` | `string` | 值变化时触发 |
| `clear` | `void` | 点击清除按钮时触发 |
| `submit` | `string` | 按下回车键时触发 |
