# Pagination

Page navigation with composable page links, previous/next buttons, and ellipsis indicators.

## Import

```ts
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextIcon,
  PaginationPrevious,
  PaginationPreviousIcon,
  PaginationSummary,
} from '@misaki-mei-q/heroui-vue'
```

## Usage

:::preview

demo-preview=../demos/pagination-basic.vue

:::

## Anatomy

```vue
<Pagination>
  <PaginationSummary>Showing 1-10 of 100 results</PaginationSummary>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious>
        <PaginationPreviousIcon />
        <span>Previous</span>
      </PaginationPrevious>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink active>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext>
        <span>Next</span>
        <PaginationNextIcon />
      </PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Sizes

:::preview

demo-preview=../demos/pagination-sizes.vue

:::

## With Ellipsis

:::preview

demo-preview=../demos/pagination-with-ellipsis.vue

:::

## Simple (Previous / Next)

:::preview

demo-preview=../demos/pagination-simple-prev-next.vue

:::

## With Summary

:::preview

demo-preview=../demos/pagination-with-summary.vue

:::

## Custom Icons

:::preview

demo-preview=../demos/pagination-custom-icons.vue

:::

## Controlled

:::preview

demo-preview=../demos/pagination-controlled.vue

:::

## Disabled

:::preview

demo-preview=../demos/pagination-disabled.vue

:::

## Related Components

- [Button](/components/button)
- [Link](/components/link)

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of pagination controls |
| `ariaLabel` | `string` | `'Pagination'` | Accessible label for the navigation |

`PaginationLink`, `PaginationPrevious`, and `PaginationNext` emit `press` with the click event.
