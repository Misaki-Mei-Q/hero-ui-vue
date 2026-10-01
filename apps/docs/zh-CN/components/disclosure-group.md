# DisclosureGroup 折叠面板组

管理多个折叠面板项并协调其展开状态的容器。

## 导入

```ts
import {
  Disclosure,
  DisclosureBody,
  DisclosureContent,
  DisclosureGroup,
  DisclosureHeading,
  DisclosureIndicator,
  DisclosureTrigger,
  useDisclosureGroupNavigation,
} from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/disclosure-group-basic.vue

:::

## 结构

```vue
<DisclosureGroup>
  <Disclosure id="item1">
    <DisclosureHeading>
      <DisclosureTrigger>
        <DisclosureIndicator />
      </DisclosureTrigger>
    </DisclosureHeading>
    <DisclosureContent>
      <DisclosureBody />
    </DisclosureContent>
  </Disclosure>
</DisclosureGroup>
```

## 受控

当外部控制需要在组内切换时，使用 `expandedKeys` 和 `expanded-change`。

:::preview

demo-preview=../../demos/disclosure-group-controlled.vue

:::

## 相关展示案例

<div class="related-showcases">
  <a class="related-showcases__item" href="/showcase/apple-iphone-disclosure.html?returnUrl=/components/disclosure-group">
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

- [Disclosure](/zh-CN/components/disclosure)
- [Accordion](/zh-CN/components/accordion)

## 样式

分组状态请使用 `DisclosureGroup`，每个项请使用 `Disclosure` 的各个部分。仅用于演示的布局和触发器视觉样式已包含在各演示源码中。

## API

### DisclosureGroup 属性

| 属性                      | 类型                         | 默认值     | 说明                                             |
| ------------------------- | ---------------------------- | ----------- | ------------------------------------------------------- |
| `expandedKeys`            | `Iterable<string \| number>` | `undefined` | 受控的展开项键                           |
| `modelValue`              | `Iterable<string \| number>` | `undefined` | 受控展开项键的别名                 |
| `defaultExpandedKeys`     | `Iterable<string \| number>` | `undefined` | 初始的非受控展开项键                 |
| `allowsMultipleExpanded`  | `boolean`                    | `false`     | 是否允许同时展开多个项 |
| `disabled` / `isDisabled` | `boolean`                    | `false`     | 禁用组内的所有折叠面板                  |
| `as`                      | `string`                     | `'div'`     | 根元素标签                                        |

### DisclosureHeading 属性

| 属性    | 类型                         | 默认值     | 说明                                  |
| ------- | ---------------------------- | ----------- | -------------------------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`         | 标题层级，对应 React Aria 的 `Heading` |
| `as`    | `string`                     | `undefined` | 可选的元素替换                    |

### 事件

| 事件                 | 载荷                 | 说明                       |
| --------------------- | ----------------------- | --------------------------------- |
| `update:expandedKeys` | `Set<string \| number>` | 展开键改变时触发 |
| `update:modelValue`   | `Set<string \| number>` | 展开键改变时触发 |
| `expanded-change`     | `Set<string \| number>` | 展开键改变时触发 |
| `change`              | `Set<string \| number>` | 展开键改变时触发 |

### useDisclosureGroupNavigation

| 选项                   | 类型                                    | 说明                                                        |
| ------------------------ | --------------------------------------- | ------------------------------------------------------------------ |
| `expandedKeys`           | `Set<string \| number>`                 | 当前展开的项键                                         |
| `itemIds`                | `(string \| number)[]`                  | 有序的折叠面板 id                                             |
| `onExpandedChange`       | `(keys: Set<string \| number>) => void` | 导航改变展开键时调用的处理函数               |
| `allowsMultipleExpanded` | `boolean`                               | 导航时是向当前集合中追加还是整体替换它 |

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
