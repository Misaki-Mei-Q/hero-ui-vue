# Table

A flexible data table built on `<table>` semantics with composition primitives for header columns, rows, and cells.

## Import

```vue
<script setup lang="ts">
import { Table, TableColumn, TableRow, TableCell } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/table-basic.vue

:::

### Striped Rows

:::preview

demo-preview=../demos/table-striped.vue

:::

## API

### Table Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary'` | `'default'` | Visual variant. |
| `fullWidth` | `boolean` | `true` | Stretch the table to fill the parent. |
| `hoverable` | `boolean` | `true` | Highlight rows on hover. |
| `striped` | `boolean` | `false` | Alternate row background. |
| `density` | `'compact' \| 'normal' \| 'comfortable'` | `'normal'` | Row height. |

### Table Slots

| Slot | Description |
|------|-------------|
| `default` | Body rows (typically `TableRow`). |
| `header` | Header row (a `<tr>` containing `TableColumn`s). |
| `footer` | Optional footer content. |

### TableRow Props

| Prop | Type | Description |
|------|------|-------------|
| `isSelected` | `boolean` | Marks the row as selected (sets `data-selected`). |
| `isDisabled` | `boolean` | Marks the row as disabled (sets `data-disabled`). |

## Accessibility

- The underlying `<table>` exposes native semantics (`role="table"`).
- `TableColumn` renders `<th>` and `TableCell` renders `<td>`.