# Installation

## Requirements

- Vue 3.4+
- Tailwind CSS 4+

## Quick Install

Install HeroUI Vue and required styles:

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

If Tailwind CSS 4 is already configured in your app, keep your existing setup.
For a Vite app, add the Tailwind plugin:

```ts
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss(), vue()],
})
```

## Import Styles

Add to your main CSS file, for example `src/style.css`:

```css
@import "tailwindcss";
@import "@misaki-mei/heroui-vue-styles/styles.css";
```

Import order matters. Always import `tailwindcss` first.

If your app does not already load that CSS file, import it from `src/main.ts`:

```ts
import './style.css'
```

## Use Components

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
```

## Next Steps

Continue to the [Quick Start](/guide/quick-start) guide to learn how to use HeroUI components.
