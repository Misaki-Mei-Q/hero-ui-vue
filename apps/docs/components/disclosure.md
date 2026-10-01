# Disclosure

A disclosure is a collapsible section with a heading, a trigger, and animated content.

## Import

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

## Usage

:::preview

demo-preview=../demos/disclosure-basic.vue

:::

## Anatomy

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

## Related Showcases

<div class="related-showcases">
  <a class="related-showcases__item" href="/showcase/apple-iphone-disclosure.html?returnUrl=/components/disclosure">
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

- [Accordion](/components/accordion)
- [DisclosureGroup](/components/disclosure-group)

## Custom Render Function

Vue uses `as` and fallthrough attributes for the same customization surface.

:::preview

demo-preview=../demos/disclosure-custom-render-function.vue

:::

## Styling

Use `DisclosureTrigger`, `DisclosureIndicator`, and `DisclosureContent` for component behavior. Demo-only layout and trigger visual styling are included in each demo source.

## API

### Disclosure Props

| Prop                      | Type      | Default     | Description                         |
| ------------------------- | --------- | ----------- | ----------------------------------- |
| `expanded` / `isExpanded` | `boolean` | `undefined` | Controlled expanded state           |
| `defaultExpanded`         | `boolean` | `false`     | Initial uncontrolled expanded state |
| `disabled` / `isDisabled` | `boolean` | `false`     | Disables trigger interaction        |
| `as`                      | `string`  | `'div'`     | Root element tag                    |

### DisclosureHeading Props

| Prop    | Type                         | Default     | Description                                  |
| ------- | ---------------------------- | ----------- | -------------------------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`         | Heading level, matching React Aria `Heading` |
| `as`    | `string`                     | `undefined` | Optional element override                    |

### Events

| Event               | Payload   | Description                         |
| ------------------- | --------- | ----------------------------------- |
| `update:expanded`   | `boolean` | Emitted when expanded state changes |
| `update:isExpanded` | `boolean` | Emitted when expanded state changes |
| `expanded-change`   | `boolean` | Emitted when expanded state changes |

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
