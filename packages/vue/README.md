# @misaki-mei/heroui-vue

Beautiful and modern Vue 3 UI components inspired by HeroUI, built with Tailwind CSS 4.

Documentation: https://misaki-mei-q.github.io/hero-ui-vue

> Work in progress: this package is still under active development and is not ready for production use.

## Quick Start

Get started with HeroUI Vue in minutes.

### Requirements

- Vue 3.4+
- Tailwind CSS v4

### Quick Install

Install HeroUI Vue and required styles:

```bash
npm install @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
npm install -D tailwindcss @tailwindcss/vite
```

```bash
pnpm add @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
pnpm add -D tailwindcss @tailwindcss/vite
```

```bash
yarn add @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
yarn add -D tailwindcss @tailwindcss/vite
```

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

### Import Styles

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

### Use Components

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
```

### What's Next?

- Documentation: https://misaki-mei-q.github.io/hero-ui-vue
- Components: https://misaki-mei-q.github.io/hero-ui-vue/components/

## Packages

- `@misaki-mei/heroui-vue`: Vue 3 component library.
- `@misaki-mei/heroui-vue-styles`: shared styles, Tailwind variants, and CSS entrypoints.

## Links

- Documentation: https://misaki-mei-q.github.io/hero-ui-vue
- Repository: https://github.com/Misaki-Mei-Q/hero-ui-vue
- Issues: https://github.com/Misaki-Mei-Q/hero-ui-vue/issues

## License

Apache-2.0
