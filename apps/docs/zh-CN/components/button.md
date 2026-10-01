# Button 按钮

带多种变体与状态的可点击按钮组件。

## 导入

```ts
import { Button } from '@misaki-mei/heroui-vue'
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/button-basic.vue

:::

### 变体

:::preview

demo-preview=../../demos/button-variants.vue

:::

### 带图标

:::preview

demo-preview=../../demos/button-with-icons.vue

:::

### 仅图标

:::preview

demo-preview=../../demos/button-icon-only.vue

:::

### 加载中

:::preview

demo-preview=../../demos/button-loading.vue

:::

### 加载状态

:::preview

demo-preview=../../demos/button-loading-state.vue

:::

### 尺寸

:::preview

demo-preview=../../demos/button-sizes.vue

:::

### 全宽

:::preview

demo-preview=../../demos/button-full-width.vue

:::

### 禁用

:::preview

demo-preview=../../demos/button-disabled.vue

:::

### 社交按钮

:::preview

demo-preview=../../demos/button-social.vue

:::

## 样式

### 传入 Tailwind CSS 类名

```vue
<template>
  <Button class="bg-purple-500 text-white hover:bg-purple-600">
    Purple Button
  </Button>
</template>
```

### CSS 类

| 类名 | 说明 |
|------|-------------|
| `.button` | 按钮基础样式 |
| `.button--sm` | 小尺寸变体 |
| `.button--md` | 中尺寸变体 |
| `.button--lg` | 大尺寸变体 |
| `.button--primary` | 主要变体 |
| `.button--secondary` | 次要变体 |
| `.button--tertiary` | 第三级变体 |
| `.button--outline` | 描边变体 |
| `.button--ghost` | 幽灵变体 |
| `.button--danger` | 危险变体 |
| `.button--danger-soft` | 柔和危险变体 |
| `.button--icon-only` | 仅图标修饰符 |
| `.button--full-width` | 全宽修饰符 |

### 交互状态

Vue 按钮会发出与 React CSS 源码一致的状态属性：

| 状态 | 选择器 |
|------|----------|
| 悬停 | `[data-hovered="true"]` |
| 按下 | `[data-pressed="true"]` |
| 焦点可见 | `[data-focus-visible="true"]` |
| 禁用 | `[aria-disabled="true"]` / `[data-disabled="true"]` |
| 等待中 | `[data-pending="true"]` |

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'danger-soft' \| 'outline' \| 'ghost'` | `undefined` | 视觉样式变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| `disabled` | `boolean` | `false` | 按钮是否被禁用 |
| `isDisabled` | `boolean` | `false` | React 风格的禁用别名 |
| `isPending` | `boolean` | `false` | 发出等待状态并阻止指针交互 |
| `fullWidth` | `boolean` | `false` | 按钮是否占据全宽 |
| `isIconOnly` | `boolean` | `false` | 按钮是否仅包含图标 |

### 事件

| 事件 | 载荷 | 说明 |
|------|---------|-------------|
| `onPress` | `MouseEvent \| KeyboardEvent` | React 风格的处理函数，在点击或按 `Enter`/`Space` 键时触发。当 `isDisabled` 或 `isPending` 为 `true` 时禁用。 |
| `click` | `MouseEvent` | 原生 DOM 事件，仍会触发；为与 React 文档保持一致，推荐使用 `onPress`。 |

### 渲染属性

默认插槽可用作作用域插槽来访问交互状态，与 React 的渲染属性模式相对应：

```vue
<Button is-pending>
  <template #default="{ isPending, isPressed, isHovered, isFocused, isFocusVisible, isDisabled }">
    <Spinner v-if="isPending" />
    {{ isPending ? 'Uploading...' : 'Upload' }}
  </template>
</Button>
```

| 插槽属性 | 类型 | 说明 |
|-----------|------|-------------|
| `isPending` | `boolean` | 按钮是否处于加载状态 |
| `isPressed` | `boolean` | 按钮当前是否被按下 |
| `isHovered` | `boolean` | 按钮是否处于悬停状态 |
| `isFocused` | `boolean` | 按钮是否获得焦点 |
| `isFocusVisible` | `boolean` | 按钮是否显示焦点指示器 |
| `isDisabled` | `boolean` | 按钮是否被禁用 |
