# Accordion

A vertically stacked set of interactive headings that reveal related content.

## Import

```vue
<script setup lang="ts">
import {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/accordion-basic.vue

:::

### Surface

:::preview

demo-preview=../demos/accordion-surface.vue

:::

### Controlled

:::preview

demo-preview=../demos/accordion-controlled.vue

:::

### Multiple

:::preview

demo-preview=../demos/accordion-multiple.vue

:::

### Custom Indicator

:::preview

demo-preview=../demos/accordion-custom-indicator.vue

:::

### Without Separator

:::preview

demo-preview=../demos/accordion-without-separator.vue

:::

### Custom Styles

:::preview

demo-preview=../demos/accordion-custom-styles.vue

:::

### Disabled

:::preview

demo-preview=../demos/accordion-disabled.vue

:::

## Anatomy

```vue
<template>
  <Accordion>
    <AccordionItem value="item-1">
      <AccordionHeading>
        <AccordionTrigger>
          Title
          <AccordionIndicator />
        </AccordionTrigger>
      </AccordionHeading>
      <AccordionPanel>
        <AccordionBody>Content</AccordionBody>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
</template>
```

## API

### Accordion Props

| Prop                     | Type                     | Default     | Description                                    |
| ------------------------ | ------------------------ | ----------- | ---------------------------------------------- |
| `modelValue`             | `string \| string[]`     | `undefined` | Controlled expanded item value.                |
| `defaultValue`           | `string \| string[]`     | `undefined` | Initial expanded item value.                   |
| `allowsMultipleExpanded` | `boolean`                | `false`     | Allow multiple items to stay open.             |
| `collapsible`            | `boolean`                | `true`      | Allow the currently open single item to close. |
| `variant`                | `'default' \| 'surface'` | `'default'` | Visual variant.                                |
| `isDisabled`             | `boolean`                | `false`     | Disable every accordion item.                  |
| `hideSeparator`          | `boolean`                | `false`     | Hide item separators.                          |

### AccordionItem Props

| Prop         | Type      | Default     | Description                      |
| ------------ | --------- | ----------- | -------------------------------- |
| `value`      | `string`  | required    | Unique item value.               |
| `isDisabled` | `boolean` | `false`     | Disable this item.               |
| `class`      | `string`  | `undefined` | Additional classes for the item. |

### AccordionHeading Props

| Prop    | Type                         | Default     | Description                                   |
| ------- | ---------------------------- | ----------- | --------------------------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`         | Heading level, matching React Aria `Heading`. |
| `as`    | `string`                     | `undefined` | Optional element override.                    |
