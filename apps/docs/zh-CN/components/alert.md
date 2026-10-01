# Alert 提示

展示重要消息与通知，并带有感知状态的指示图标。

## 导入

```ts
import { Alert, AlertContent, AlertDescription, AlertIndicator, AlertTitle } from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/alert-basic.vue

:::

## 结构

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

## 样式

当局部页面需要一次性样式时，可以向各部分传入类名。

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

该组件与 React 源码暴露相同的 BEM 风格类名：

| 插槽 | CSS 类 |
|------|-----------|
| `alert-root` | `.alert` |
| `alert-indicator` | `.alert__indicator` |
| `alert-content` | `.alert__content` |
| `alert-title` | `.alert__title` |
| `alert-description` | `.alert__description` |

状态类：

| 状态 | CSS 类 |
|--------|-----------|
| `default` | `.alert--default` |
| `accent` | `.alert--accent` |
| `success` | `.alert--success` |
| `warning` | `.alert--warning` |
| `danger` | `.alert--danger` |

## API

### Alert

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `status` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 视觉状态 |
| `class` | `string` | `undefined` | 自定义根元素类名 |

### AlertIndicator

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 自定义指示图标类名 |
| default slot | `VNode` | status icon | 自定义指示图标内容 |

### AlertContent / AlertTitle / AlertDescription

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 自定义插槽类名 |
