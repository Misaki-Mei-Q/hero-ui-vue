# Quick Start

This guide will help you get started with HeroUI Vue components.

## Basic Usage

Import and use components in your Vue files:

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Button variant="primary">
    Click me
  </Button>
</template>
```

## Component Variants

Most components support multiple variants for different use cases:

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="flex gap-3">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
</template>
```

## Sizes

Components typically support multiple sizes:

```vue
<template>
  <div class="flex items-center gap-3">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
</template>
```

## Dark Mode

HeroUI Vue includes built-in dark mode support. Add the `dark` class to your root element to enable dark mode:

```html
<html class="dark">
  <!-- Your app -->
</html>
```

## TypeScript Support

All components include full TypeScript definitions:

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'
import type { ButtonVariants } from '@misaki-mei/heroui-vue'

const variant: ButtonVariants['variant'] = 'primary'
</script>
```

## Next Steps

Explore the [Components](/components/) section to see all available components and their APIs.
