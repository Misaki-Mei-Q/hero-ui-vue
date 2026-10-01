# Table 表格

基于 `<table>` 语义构建的灵活数据表格，提供用于表头列、行和单元格的组合式基础组件。

## 导入

```vue
<script setup lang="ts">
import { Table, TableColumn, TableRow, TableCell } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/table-basic.vue

:::

### 斑马纹行

:::preview

demo-preview=../../demos/table-striped.vue

:::

## API

### Table 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary'` | `'default'` | 视觉变体。 |
| `fullWidth` | `boolean` | `true` | 拉伸表格以填满父容器。 |
| `hoverable` | `boolean` | `true` | 悬停时高亮行。 |
| `striped` | `boolean` | `false` | 交替的行背景。 |
| `density` | `'compact' \| 'normal' \| 'comfortable'` | `'normal'` | 行高。 |

### Table 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 表体行（通常是 `TableRow`）。 |
| `header` | 表头行（包含 `TableColumn` 的 `<tr>`）。 |
| `footer` | 可选的页脚内容。 |

### TableRow 属性

| 属性 | 类型 | 说明 |
|------|------|-------------|
| `isSelected` | `boolean` | 将行标记为选中（设置 `data-selected`）。 |
| `isDisabled` | `boolean` | 将行标记为禁用（设置 `data-disabled`）。 |

## 无障碍

- 底层的 `<table>` 暴露原生语义（`role="table"`）。
- `TableColumn` 渲染 `<th>`，`TableCell` 渲染 `<td>`。
