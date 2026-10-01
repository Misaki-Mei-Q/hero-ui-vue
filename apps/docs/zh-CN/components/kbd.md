# Kbd 键盘按键

用于显示键盘快捷键和组合键的组件。

## 导入

```vue
<script setup lang="ts">
import { Kbd } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/kbd-basic.vue

:::

### 组合键

```vue
<template>
  <p>
    <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy
  </p>
  <p>
    <Kbd>Cmd</Kbd> + <Kbd>V</Kbd> to paste
  </p>
  <p>
    <Kbd>Shift</Kbd> + <Kbd>Alt</Kbd> + <Kbd>F</Kbd> to format
  </p>
</template>
```

### 尺寸

```vue
<template>
  <Kbd>Esc</Kbd>
  <Kbd>Enter</Kbd>
  <Kbd>Space</Kbd>
</template>
```

### 变体

```vue
<template>
  <Kbd>Ctrl</Kbd>
  <Kbd variant="light">Alt</Kbd>
</template>
```

### 常用按键

```vue
<template>
  <div>
    <Kbd>⌘</Kbd> Command
    <Kbd>⌃</Kbd> Control
    <Kbd>⌥</Kbd> Option
    <Kbd>⇧</Kbd> Shift
    <Kbd>⏎</Kbd> Return
    <Kbd>⌫</Kbd> Delete
    <Kbd>⎋</Kbd> Escape
    <Kbd>⇥</Kbd> Tab
    <Kbd>⇪</Kbd> Caps Lock
  </div>
</template>
```

## API

### Kbd 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default' \| 'light'` | `'default'` | kbd 的变体 |
| `keys` | `string[]` | - | 要显示的按键名称数组 |

### Kbd 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 按键内容 |

## 无障碍

- Kbd 使用语义化的 `<kbd>` HTML 元素
- 经过适当样式处理，可与普通文本区分
- 对屏幕阅读器友好
