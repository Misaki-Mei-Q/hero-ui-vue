# RangeCalendar 区间日历

基于网格的日期区间选择器。支持并排显示两个月份、禁用/不可用日期，并对选中的区间进行可视化高亮。

## 导入

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { RangeCalendar } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/range-calendar-basic.vue

:::

## API

> 值必须是 `@internationalized/date` 的实例，例如 `CalendarDate`。

### RangeCalendar 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `DateRange` | `undefined` | 受控的区间。 |
| `defaultValue` | `DateRange` | `undefined` | 初始的非受控区间。 |
| `placeholder` | `DateValue` | `undefined` | 没有区间时显示的月份。 |
| `defaultPlaceholder` | `DateValue` | `undefined` | 初始占位月份。 |
| `weekStartsOn` | `0 \| 1 \| ... \| 6` | `0` | 一周的第一天。 |
| `weekdayFormat` | `'narrow' \| 'short' \| 'long'` | `'narrow'` | 星期标签格式。 |
| `fixedWeeks` | `boolean` | `false` | 始终渲染六周。 |
| `maxValue` | `DateValue` | `undefined` | 可选择的最晚日期。 |
| `minValue` | `DateValue` | `undefined` | 可选择的最早日期。 |
| `locale` | `string` | `'en-US'` | 标签使用的区域设置。 |
| `numberOfMonths` | `number` | `1` | 并排显示的月份数。 |
| `disabled` | `boolean` | `false` | 禁用交互。 |
| `readonly` | `boolean` | `false` | 只读选择。 |
| `isDateDisabled` | `(date: DateValue) => boolean` | `undefined` | 将日期标记为禁用。 |
| `isDateUnavailable` | `(date: DateValue) => boolean` | `undefined` | 将日期标记为不可用。 |
| `pagedNavigation` | `boolean` | `false` | 每次按 N 个月翻页导航。 |
| `preventDeselect` | `boolean` | `false` | 禁止取消选择当前区间。 |
| `initialFocus` | `boolean` | `false` | 挂载时自动聚焦。 |

### RangeCalendar 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `DateRange` | 区间变化。 |
| `update:placeholder` | `DateValue` | 显示月份变化。 |

### RangeCalendar 类型

```ts
interface DateRange {
  start: DateValue | undefined
  end: DateValue | undefined
}
```

### RangeCalendar 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `heading` | `{ date }` | 自定义标题内容。 |
| `cell` | `{ day }` | 自定义日期单元格内容。 |
| `prev-icon` | - | 自定义上一月图标。 |
| `next-icon` | - | 自定义下一月图标。 |

## 无障碍

- 网格使用 `role="grid"` 并支持键盘导航（方向键、Home/End、PageUp/PageDown）。
- 选中的起始和结束单元格通过 `data-range-start` 和 `data-range-end` 高亮显示。
