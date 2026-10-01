# Disclosure 折叠面板

折叠面板是一个可折叠的区域，包含标题、触发器和带动画的内容。

## 导入

```ts
import {
  Disclosure,
  DisclosureBody,
  DisclosureContent,
  DisclosureHeading,
  DisclosureIndicator,
  DisclosureTrigger,
} from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/disclosure-basic.vue

:::

## 结构

```vue
<Disclosure>
  <DisclosureHeading>
    <DisclosureTrigger>
      <DisclosureIndicator />
    </DisclosureTrigger>
  </DisclosureHeading>
  <DisclosureContent>
    <DisclosureBody />
  </DisclosureContent>
</Disclosure>
```

## 相关展示案例

<div class="related-showcases">
  <a class="related-showcases__item" href="/showcase/apple-iphone-disclosure.html?returnUrl=/components/disclosure">
    <span class="related-showcases__media">
      <video autoplay loop muted playsinline poster="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/showcases/1.jpg">
        <source src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/showcases/1.mp4">
      </video>
      <span class="related-showcases__badge">新</span>
    </span>
    <span class="related-showcases__title">Apple iPhone 17 Pro 折叠面板</span>
  </a>
</div>

## 相关组件

- [Accordion](/zh-CN/components/accordion)
- [DisclosureGroup](/zh-CN/components/disclosure-group)

## 自定义渲染函数

Vue 使用 `as` 和透传属性实现相同的自定义能力。

:::preview

demo-preview=../../demos/disclosure-custom-render-function.vue

:::

## 样式

组件行为请使用 `DisclosureTrigger`、`DisclosureIndicator` 和 `DisclosureContent`。仅用于演示的布局和触发器视觉样式已包含在各演示源码中。

## API

### Disclosure 属性

| 属性                      | 类型      | 默认值     | 说明                         |
| ------------------------- | --------- | ----------- | ----------------------------------- |
| `expanded` / `isExpanded` | `boolean` | `undefined` | 受控的展开状态           |
| `defaultExpanded`         | `boolean` | `false`     | 初始的非受控展开状态 |
| `disabled` / `isDisabled` | `boolean` | `false`     | 禁用触发器交互        |
| `as`                      | `string`  | `'div'`     | 根元素标签                    |

### DisclosureHeading 属性

| 属性    | 类型                         | 默认值     | 说明                                  |
| ------- | ---------------------------- | ----------- | -------------------------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`         | 标题层级，对应 React Aria 的 `Heading` |
| `as`    | `string`                     | `undefined` | 可选的元素替换                    |

### 事件

| 事件               | 载荷   | 说明                         |
| ------------------- | --------- | ----------------------------------- |
| `update:expanded`   | `boolean` | 展开状态改变时触发 |
| `update:isExpanded` | `boolean` | 展开状态改变时触发 |
| `expanded-change`   | `boolean` | 展开状态改变时触发 |

<style lang="less">
.related-showcases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 250px));
  gap: 1rem;
  margin: 1rem 0 2rem;
  padding: 0.5rem 0;
}

.related-showcases__item {
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
}

.related-showcases__media {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 18px 42px color-mix(in oklab, var(--color-foreground) 15%, transparent);
  transition:
    filter 250ms var(--ease-out-quad),
    transform 250ms var(--ease-out-quad);
}

.related-showcases__item:hover .related-showcases__media {
  filter: drop-shadow(0 16px 18px rgb(0 0 0 / 15%));
  transform: scale(1.02);
}

.related-showcases__media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-showcases__badge {
  position: absolute;
  top: 0.375rem;
  right: 0.5rem;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 999px;
  background: rgb(0 0 0 / 30%);
  color: rgb(255 255 255 / 80%);
  padding: 0.125rem 0.375rem;
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: capitalize;
  backdrop-filter: blur(12px);
}

.related-showcases__title {
  margin-top: 0.75rem;
  color: color-mix(in oklab, var(--color-foreground) 50%, transparent);
  font-size: 0.875rem;
  transition: color 250ms var(--ease-out-quad);
}

.related-showcases__item:hover .related-showcases__title {
  color: color-mix(in oklab, var(--color-foreground) 80%, transparent);
}
</style>
