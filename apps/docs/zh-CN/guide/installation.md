# 安装

## 环境要求

- Vue 3.4+
- Tailwind CSS 4+

## 快速安装

安装 HeroUI Vue 及其所需样式：

::: code-group

```bash [npm]
npm install @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
npm install -D tailwindcss @tailwindcss/vite
```

```bash [pnpm]
pnpm add @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
pnpm add -D tailwindcss @tailwindcss/vite
```

```bash [yarn]
yarn add @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
yarn add -D tailwindcss @tailwindcss/vite
```

:::

如果你的应用已经配置了 Tailwind CSS 4，请保留现有配置。
对于 Vite 项目，添加 Tailwind 插件：

```ts
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss(), vue()],
})
```

## 引入样式

在你的主 CSS 文件（例如 `src/style.css`）中加入：

```css
@import "tailwindcss";
@import "@misaki-mei/heroui-vue-styles/styles.css";
```

引入顺序很重要。务必先引入 `tailwindcss`。

如果你的应用还没有加载该 CSS 文件，请在 `src/main.ts` 中引入：

```ts
import './style.css'
```

## 使用组件

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Button variant="primary">点击我</Button>
</template>
```

## 下一步

继续阅读 [快速开始](/zh-CN/guide/quick-start) 指南，了解如何使用 HeroUI 组件。
