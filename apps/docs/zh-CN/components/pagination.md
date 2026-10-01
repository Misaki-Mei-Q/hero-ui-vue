# Pagination 分页

带可组合的页码链接、上一页/下一页按钮和省略号指示器的页面导航。

## 导入

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
} from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/pagination-basic.vue

:::

## 结构

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

## 尺寸

:::preview

demo-preview=../../demos/pagination-sizes.vue

:::

## 带省略号

:::preview

demo-preview=../../demos/pagination-with-ellipsis.vue

:::

## 简洁模式（上一页 / 下一页）

:::preview

demo-preview=../../demos/pagination-simple-prev-next.vue

:::

## 带汇总信息

:::preview

demo-preview=../../demos/pagination-with-summary.vue

:::

## 自定义图标

:::preview

demo-preview=../../demos/pagination-custom-icons.vue

:::

## 受控

:::preview

demo-preview=../../demos/pagination-controlled.vue

:::

## 禁用

:::preview

demo-preview=../../demos/pagination-disabled.vue

:::

## 相关组件

- [Button](/zh-CN/components/button)
- [Link](/zh-CN/components/link)

## API

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 分页控件的尺寸 |
| `ariaLabel` | `string` | `'Pagination'` | 导航的无障碍标签 |

`PaginationLink`、`PaginationPrevious` 和 `PaginationNext` 会随点击事件触发 `press`。
