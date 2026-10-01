# Link 链接

用于创建具备多种样式的可访问超链接的组件。

## 导入

```vue
<script setup lang="ts">
import { Link } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/link-basic.vue

:::

### 外部链接

```vue
<template>
  <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
    External Link
  </Link>
</template>
```

## API

### Link 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `href` | `string` | - | 链接 URL |
| `target` | `string` | - | 链接目标（例如 `_blank`） |
| `rel` | `string` | - | 链接的 rel 属性 |
| `as` | `string` | `'a'` | 要渲染的 HTML 元素 |

### Link 事件

| 事件 | 类型 | 说明 |
|-------|------|-------------|
| `click` | `(event: MouseEvent) => void` | 点击链接时触发 |

### Link 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 链接内容 |
| `startContent` | 链接文本之前的内容 |
| `endContent` | 链接文本之后的内容 |

## 无障碍

- Link 使用语义化的 `<a>` HTML 元素
- 外部链接包含 `rel="noopener noreferrer"` 以保障安全
- 外部链接会向屏幕阅读器播报“在新标签页中打开”
- 禁用的链接使用 `aria-disabled` 并阻止跳转
- 具备完善的焦点指示器
