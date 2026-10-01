# @misaki-mei-q/heroui-vue-styles

Styles and CSS entrypoints for `@misaki-mei-q/heroui-vue`.

Most users should not use this package by itself. Install it together with the Vue component package:

```bash
npm install @misaki-mei-q/heroui-vue @misaki-mei-q/heroui-vue-styles
npm install -D tailwindcss @tailwindcss/vite
```

```bash
pnpm add @misaki-mei-q/heroui-vue @misaki-mei-q/heroui-vue-styles
pnpm add -D tailwindcss @tailwindcss/vite
```

```bash
yarn add @misaki-mei-q/heroui-vue @misaki-mei-q/heroui-vue-styles
yarn add -D tailwindcss @tailwindcss/vite
```

## Usage

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

Add to your main CSS file, for example `src/style.css`:

```css
@import "tailwindcss";
@import "@misaki-mei-q/heroui-vue-styles/styles.css";
```

Import order matters. Always import `tailwindcss` first.

Advanced users can also import variant helpers directly:

```ts
import { buttonVariants } from '@misaki-mei-q/heroui-vue-styles'
```

## Links

- Documentation: https://misaki-mei-q.github.io/hero-ui-vue
- Repository: https://github.com/Misaki-Mei-Q/hero-ui-vue
- Issues: https://github.com/Misaki-Mei-Q/hero-ui-vue/issues

## License

Apache-2.0
