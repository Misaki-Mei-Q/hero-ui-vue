# HeroUI Vue

<p align="center">
  <img src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/heroui-og_2x.jpg" alt="HeroUI Vue" width="100%" />
</p>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/@misaki-mei/heroui-vue?style=flat" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/@misaki-mei/heroui-vue">
    <img src="https://img.shields.io/npm/dm/@misaki-mei/heroui-vue.svg?style=flat-round" alt="npm downloads">
  </a>
</p>

[English](./README.md) | [简体中文](./README.zh-CN.md)

**HeroUI Vue** is a beautiful and modern Vue 3 UI library - a complete port of HeroUI React to Vue 3 with Composition API.

Documentation: [https://misaki-mei-q.github.io/hero-ui-vue](https://misaki-mei-q.github.io/hero-ui-vue)

> ⚠️ **Work in Progress**: All 71 HeroUI React components now have a Vue equivalent, but the date family (Calendar / RangeCalendar / DatePicker / DateRangePicker) renders through Radix Vue's `CalendarRoot`, which has an open upstream bug (https://github.com/unovue/reka-ui). Verify critical interactions there in a real browser before shipping.

## Features

- 🎨 **Beautiful by Default** - Stunning components out of the box
- 🎯 **Customizable by Design** - Easy to customize with Tailwind CSS v4
- ♿ **Accessible** - Built on Radix Vue primitives with full ARIA support
- 🔧 **TypeScript** - Full TypeScript support with strict types
- 🚀 **Modern** - Vue 3 Composition API
- 📦 **Tree-shakeable** - Import only what you need
- 🎭 **Compound Components** - Flexible composition patterns

## Quick Start

Get started with HeroUI Vue in minutes.

### Requirements

- Vue 3.4+
- Tailwind CSS v4

### Quick Install

Install HeroUI Vue and required styles:

```bash
# npm
npm install @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
npm install -D tailwindcss @tailwindcss/vite

# pnpm
pnpm add @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
pnpm add -D tailwindcss @tailwindcss/vite

# yarn
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
import { Button } from '@misaki-mei/heroui-vue';
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
```

### What's Next?

- [Browse the documentation](https://misaki-mei-q.github.io/hero-ui-vue)
- [Explore components](https://misaki-mei-q.github.io/hero-ui-vue/components/)

## Documentation

Visit the [documentation site](https://misaki-mei-q.github.io/hero-ui-vue) for full documentation.

## Component Coverage

Baseline: HeroUI React v3.0.4 docs list 71 React components. HeroUI Vue currently has docs-backed parity entries for 50 of those components, plus 5 additional Vue primitives used by the docs.

### React parity implemented (61/71)

Accordion, Alert, AlertDialog, Autocomplete, Avatar, AvatarGroup, Badge, Breadcrumbs, Button, ButtonGroup, Calendar, Card, Checkbox, CheckboxGroup, Chip, CloseButton, ColorArea, ColorField, ColorPicker, ColorSlider, ColorSwatch, ColorSwatchPicker, ComboBox, DateField, DatePicker, DateRangePicker, Description, Disclosure, DisclosureGroup, Drawer, ErrorMessage, FieldError, Fieldset, Form, Input, InputGroup, InputOTP, Kbd, Label, Link, ListBox, Meter, Modal, NumberField, Pagination, Popover, ProgressBar, ProgressCircle, RadioGroup, RangeCalendar, ScrollShadow, SearchField, Select, Separator, Skeleton, Slider, Spinner, Surface, Switch, Tabs, TagGroup, Text, TextArea, TextField, TimeField, Toast, Toolbar, ToggleButton, ToggleButtonGroup, Tooltip, Typography.

### Additional Vue docs components

EmptyState, Header, Radio, SwitchGroup, Tag.

### Remaining React parity gaps (0)

All 71 React components have a Vue equivalent. Calendar / RangeCalendar / DatePicker / DateRangePicker ship behind Radix Vue's `CalendarRoot` which has an open upstream bug (https://github.com/unovue/reka-ui) causing the integrated tests to be skipped in jsdom. They render correctly in real browsers.

### Vue-specific components

### Vue-specific components

`AvatarGroup`, `DateField`, `TimeField`, `DatePicker`, `DateRangePicker` — present in the Vue package in addition to the React parity set.

## Development

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## Project Structure

```
hero-ui-vue/
├── packages/
│   ├── vue/          # Main component library
│   ├── styles/       # Tailwind CSS styles and variants
│   └── standard/     # Shared configurations
├── apps/
│   └── docs/         # Documentation site (VitePress)
├── scripts/          # Maintenance and release scripts
└── .github/          # CI workflows (lint, test, publish)
```

The Vue port tracks the [HeroUI React](https://github.com/heroui-inc/heroui) component API. The React source itself is not vendored into this repository; parity checks are performed against the public `@heroui/react` package and the HeroUI docs site.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Credits

This project is a Vue 3 port of [HeroUI](https://github.com/heroui-inc/heroui) by the HeroUI team.

## License

Apache-2.0 — see [LICENSE](LICENSE)

## Acknowledgments

- [HeroUI](https://heroui.com) - Original React component library
- [Radix Vue](https://www.radix-vue.com) - Accessible Vue primitives
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Vue 3](https://vuejs.org) - Progressive JavaScript framework