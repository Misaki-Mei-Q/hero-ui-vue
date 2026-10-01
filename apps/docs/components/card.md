# Card

Flexible surface container for grouping related content, media, and actions.

## Import

```vue
<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@misaki-mei-q/heroui-vue'
</script>
```

## Usage

### Default

:::preview

demo-preview=../demos/card-default.vue

:::

### Anatomy

```vue
<template>
  <Card>
    <CardHeader>
      <CardTitle />
      <CardDescription />
    </CardHeader>
    <CardContent />
    <CardFooter />
  </Card>
</template>
```

### Variants

:::preview

demo-preview=../demos/card-variants.vue

:::

### Horizontal Layout

:::preview

demo-preview=../demos/card-horizontal.vue

:::

### With Avatar

:::preview

demo-preview=../demos/card-with-avatar.vue

:::

### With Images

:::preview

demo-preview=../demos/card-with-images.vue

:::

### With Form

:::preview

demo-preview=../demos/card-with-form.vue

:::

## Accessibility

Cards are non-interactive surfaces by default. Add semantic roles or use an anchor/button wrapper when the entire card is interactive.

```vue
<template>
  <Card role="article" aria-labelledby="creator-card-title">
    <CardHeader>
      <CardTitle id="creator-card-title">Article Title</CardTitle>
    </CardHeader>
  </Card>
</template>
```

## Styling

### Passing Classes

```vue
<template>
  <Card class="border-2 border-blue-500">
    <CardHeader>
      <CardTitle>Custom Styled Card</CardTitle>
      <CardDescription>Custom colors applied</CardDescription>
    </CardHeader>
  </Card>
</template>
```

### CSS Classes

| Class | Description |
|---|---|
| `.card` | Base card container |
| `.card__header` | Header section |
| `.card__title` | Title text |
| `.card__description` | Description text |
| `.card__content` | Main content area |
| `.card__footer` | Footer actions/content |
| `.card--transparent` | Transparent variant |
| `.card--default` | Default surface |
| `.card--secondary` | Medium prominence surface |
| `.card--tertiary` | High prominence surface |

## API

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'transparent' \| 'default' \| 'secondary' \| 'tertiary'` | `'default'` | Semantic prominence variant |
| `class` | `string` | `undefined` | Additional classes for the card root |

### CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional classes for the header |

### CardTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `'h3'` | Element rendered for the title |
| `class` | `string` | `undefined` | Additional classes for the title |

### CardDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `'p'` | Element rendered for the description |
| `class` | `string` | `undefined` | Additional classes for the description |

### CardContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional classes for the content |

### CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | Additional classes for the footer |

### Slots

| Component | Slot | Description |
|---|---|---|
| `Card` | `default` | Card sections and custom content |
| `CardHeader` | `default` | Header content |
| `CardTitle` | `default` | Title content |
| `CardDescription` | `default` | Description content |
| `CardContent` | `default` | Main content |
| `CardFooter` | `default` | Footer content |
