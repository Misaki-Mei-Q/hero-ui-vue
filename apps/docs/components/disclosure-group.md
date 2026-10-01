# DisclosureGroup

Container that manages multiple Disclosure items with coordinated expanded states.

## Import

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

## Usage

:::preview

demo-preview=../demos/disclosure-group-basic.vue

:::

## Anatomy

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

## Controlled

Use `expandedKeys` and `expanded-change` when external controls need to move through the group.

:::preview

demo-preview=../demos/disclosure-group-controlled.vue

:::

## Related Showcases

<div class="related-showcases">
  <a class="related-showcases__item" href="/showcase/apple-iphone-disclosure.html?returnUrl=/components/disclosure-group">
    <span class="related-showcases__media">
      <video autoplay loop muted playsinline poster="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/showcases/1.jpg">
        <source src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/showcases/1.mp4">
      </video>
      <span class="related-showcases__badge">new</span>
    </span>
    <span class="related-showcases__title">Apple iPhone 17 Pro Disclosure</span>
  </a>
</div>

## Related Components

- [Disclosure](/components/disclosure)
- [Accordion](/components/accordion)

## Styling

Use `DisclosureGroup` for group state and `Disclosure` parts for each item. Demo-only layout and trigger visual styling are included in each demo source.

## API

### DisclosureGroup Props

| Prop                      | Type                         | Default     | Description                                             |
| ------------------------- | ---------------------------- | ----------- | ------------------------------------------------------- |
| `expandedKeys`            | `Iterable<string \| number>` | `undefined` | Controlled expanded item keys                           |
| `modelValue`              | `Iterable<string \| number>` | `undefined` | Alias for controlled expanded item keys                 |
| `defaultExpandedKeys`     | `Iterable<string \| number>` | `undefined` | Initial uncontrolled expanded item keys                 |
| `allowsMultipleExpanded`  | `boolean`                    | `false`     | Whether multiple items can be expanded at the same time |
| `disabled` / `isDisabled` | `boolean`                    | `false`     | Disables every disclosure in the group                  |
| `as`                      | `string`                     | `'div'`     | Root element tag                                        |

### DisclosureHeading Props

| Prop    | Type                         | Default     | Description                                  |
| ------- | ---------------------------- | ----------- | -------------------------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`         | Heading level, matching React Aria `Heading` |
| `as`    | `string`                     | `undefined` | Optional element override                    |

### Events

| Event                 | Payload                 | Description                       |
| --------------------- | ----------------------- | --------------------------------- |
| `update:expandedKeys` | `Set<string \| number>` | Emitted when expanded keys change |
| `update:modelValue`   | `Set<string \| number>` | Emitted when expanded keys change |
| `expanded-change`     | `Set<string \| number>` | Emitted when expanded keys change |
| `change`              | `Set<string \| number>` | Emitted when expanded keys change |

### useDisclosureGroupNavigation

| Option                   | Type                                    | Description                                                        |
| ------------------------ | --------------------------------------- | ------------------------------------------------------------------ |
| `expandedKeys`           | `Set<string \| number>`                 | Current expanded item keys                                         |
| `itemIds`                | `(string \| number)[]`                  | Ordered disclosure ids                                             |
| `onExpandedChange`       | `(keys: Set<string \| number>) => void` | Handler called when navigation changes expanded keys               |
| `allowsMultipleExpanded` | `boolean`                               | Whether navigation adds to the current set instead of replacing it |

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
