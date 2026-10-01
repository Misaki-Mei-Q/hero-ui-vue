# CloseButton 关闭按钮

用于关闭对话框、模态框、横幅或可关闭内容的按钮。

## 导入

```vue
<script setup lang="ts">
import { CloseButton } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 默认值

:::preview

demo-preview=../../demos/close-button-basic.vue

:::

### 带自定义图标

:::preview

demo-preview=../../demos/close-button-with-custom-icon.vue

:::

### 交互

:::preview

demo-preview=../../demos/close-button-interactive.vue

:::

## 样式

### 传入类名

```vue
<template>
  <CloseButton class="text-red-600 hover:bg-red-100" />
</template>
```

### CSS 类

| 类名 | 说明 |
|---|---|
| `.close-button` | 基础按钮 |
| `.close-button--default` | 默认变体 |

### 交互状态

| 选择器 | 说明 |
|---|---|
| `:hover`, `[data-hovered="true"]` | 悬停状态 |
| `:active`, `[data-pressed="true"]` | 按下状态 |
| `:focus-visible`, `[data-focus-visible="true"]` | 键盘聚焦状态 |
| `:disabled`, `[aria-disabled="true"]` | 禁用状态 |

## API

### CloseButton 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default'` | `'default'` | 视觉变体 |
| `disabled` | `boolean` | `false` | 按钮是否禁用 |
| `isDisabled` | `boolean` | `false` | React 风格的禁用别名 |
| `ariaLabel` | `string` | `'Close'` | 无障碍标签 |

### 事件

| 事件 | 载荷 | 说明 |
|---|---|---|
| `click` | `MouseEvent` | 点击按钮时触发 |

### 插槽

| 插槽 | 说明 |
|---|---|
| `default` | 自定义图标内容 |
