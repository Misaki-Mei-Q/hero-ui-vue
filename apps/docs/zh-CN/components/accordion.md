# Accordion 手风琴

一组垂直堆叠的可交互标题，用于展开显示相关内容。

## 导入

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

## 用法

### 基础用法

:::preview

demo-preview=../../demos/accordion-basic.vue

:::

### Surface 容器

:::preview

demo-preview=../../demos/accordion-surface.vue

:::

### 受控

:::preview

demo-preview=../../demos/accordion-controlled.vue

:::

### 多项展开

:::preview

demo-preview=../../demos/accordion-multiple.vue

:::

### 自定义指示器

:::preview

demo-preview=../../demos/accordion-custom-indicator.vue

:::

### 无分隔线

:::preview

demo-preview=../../demos/accordion-without-separator.vue

:::

### 自定义样式

:::preview

demo-preview=../../demos/accordion-custom-styles.vue

:::

### 禁用

:::preview

demo-preview=../../demos/accordion-disabled.vue

:::

## 结构

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

### Accordion 属性

| 属性                     | 类型                     | 默认值     | 说明                                           |
| ------------------------ | ------------------------ | ---------- | ---------------------------------------------- |
| `modelValue`             | `string \| string[]`     | `undefined` | 受控展开项的值。                               |
| `defaultValue`           | `string \| string[]`     | `undefined` | 初始展开项的值。                               |
| `allowsMultipleExpanded` | `boolean`                | `false`     | 允许同时保持多个项展开。                       |
| `collapsible`            | `boolean`                | `true`      | 允许当前展开的单项收起。                       |
| `variant`                | `'default' \| 'surface'` | `'default'` | 视觉变体。                                     |
| `isDisabled`             | `boolean`                | `false`     | 禁用所有手风琴项。                             |
| `hideSeparator`          | `boolean`                | `false`     | 隐藏项之间的分隔线。                           |

### AccordionItem 属性

| 属性         | 类型      | 默认值     | 说明                             |
| ------------ | --------- | ---------- | -------------------------------- |
| `value`      | `string`  | required   | 唯一的项值。                     |
| `isDisabled` | `boolean` | `false`    | 禁用此项。                       |
| `class`      | `string`  | `undefined` | 附加到该项的类名。               |

### AccordionHeading 属性

| 属性    | 类型                         | 默认值     | 说明                                  |
| ------- | ---------------------------- | ---------- | ------------------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`        | 标题层级，对应 React Aria 的 `Heading`。 |
| `as`    | `string`                     | `undefined` | 可选的元素替换。                      |
