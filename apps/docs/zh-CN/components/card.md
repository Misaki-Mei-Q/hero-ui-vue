# Card 卡片

用于组合相关内容、媒体与操作的灵活表面容器。

## 导入

```vue
<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 默认值

:::preview

demo-preview=../../demos/card-default.vue

:::

### 结构

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

### 变体

:::preview

demo-preview=../../demos/card-variants.vue

:::

### 水平布局

:::preview

demo-preview=../../demos/card-horizontal.vue

:::

### 带头像

:::preview

demo-preview=../../demos/card-with-avatar.vue

:::

### 带图片

:::preview

demo-preview=../../demos/card-with-images.vue

:::

### 表单示例

:::preview

demo-preview=../../demos/card-with-form.vue

:::

## 无障碍

卡片默认是非交互式的表面容器。当整张卡片可交互时，请添加语义化角色或使用链接/按钮包裹。

```vue
<template>
  <Card role="article" aria-labelledby="creator-card-title">
    <CardHeader>
      <CardTitle id="creator-card-title">Article Title</CardTitle>
    </CardHeader>
  </Card>
</template>
```

## 样式

### 传入类名

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

### CSS 类

| 类名 | 说明 |
|---|---|
| `.card` | 卡片基础容器 |
| `.card__header` | 头部区域 |
| `.card__title` | 标题文本 |
| `.card__description` | 描述文本 |
| `.card__content` | 主内容区域 |
| `.card__footer` | 底部操作/内容 |
| `.card--transparent` | 透明变体 |
| `.card--default` | 默认表面 |
| `.card--secondary` | 中等突出度表面 |
| `.card--tertiary` | 高突出度表面 |

## API

### Card 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'transparent' \| 'default' \| 'secondary' \| 'tertiary'` | `'default'` | 语义化突出度变体 |
| `class` | `string` | `undefined` | 附加到卡片根元素的类名 |

### CardHeader 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 附加到头部的类名 |

### CardTitle 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `as` | `string` | `'h3'` | 标题渲染的元素 |
| `class` | `string` | `undefined` | 附加到标题的类名 |

### CardDescription 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `as` | `string` | `'p'` | 描述渲染的元素 |
| `class` | `string` | `undefined` | 附加到描述的类名 |

### CardContent 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 附加到内容的类名 |

### CardFooter 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `class` | `string` | `undefined` | 附加到底部的类名 |

### 插槽

| 组件 | 插槽 | 说明 |
|---|---|---|
| `Card` | `default` | 卡片各区域与自定义内容 |
| `CardHeader` | `default` | 头部内容 |
| `CardTitle` | `default` | 标题内容 |
| `CardDescription` | `default` | 描述内容 |
| `CardContent` | `default` | 主内容 |
| `CardFooter` | `default` | 底部内容 |
