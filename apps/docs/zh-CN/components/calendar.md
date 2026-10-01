# Calendar 日历

基于网格的日期选择器。支持单选或多选、感知区域设置的格式化、禁用/不可选日期以及可自定义的标题。

## 导入

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { Calendar } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/calendar-basic.vue

:::

### 禁用日期

:::preview

demo-preview=../../demos/calendar-disabled-dates.vue

:::

## API

> 值必须是 `@internationalized/date` 的实例，例如 `CalendarDate`、`CalendarDateTime` 或 `ZonedDateTime`。

### Calendar 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `DateValue \| DateValue[]` | `undefined` | 受控选中的日期。 |
| `defaultValue` | `DateValue` | `undefined` | 初始的非受控选中值。 |
| `placeholder` | `DateValue` | `undefined` | 无选中时显示的日期。 |
| `defaultPlaceholder` | `DateValue` | `undefined` | 初始占位日期。 |
| `weekStartsOn` | `0 \| 1 \| ... \| 6` | `0` | 一周的第一天（周日 = 0）。 |
| `weekdayFormat` | `'narrow' \| 'short' \| 'long'` | `'narrow'` | 星期标签格式。 |
| `fixedWeeks` | `boolean` | `false` | 始终渲染六周。 |
| `maxValue` | `DateValue` | `undefined` | 可选的最晚日期。 |
| `minValue` | `DateValue` | `undefined` | 可选的最早日期。 |
| `locale` | `string` | `'en-US'` | 标签使用的区域设置。 |
| `numberOfMonths` | `number` | `1` | 并排显示的月份数。 |
| `disabled` | `boolean` | `false` | 禁用交互。 |
| `readonly` | `boolean` | `false` | 只读选择。 |
| `multiple` | `boolean` | `false` | 允许多选。 |
| `isDateDisabled` | `(date: DateValue) => boolean` | `undefined` | 将日期标记为禁用。 |
| `isDateUnavailable` | `(date: DateValue) => boolean` | `undefined` | 将日期标记为不可选。 |
| `pagedNavigation` | `boolean` | `false` | 每次按 N 个月翻页导航。 |
| `preventDeselect` | `boolean` | `false` | 禁止取消选中当前值。 |
| `initialFocus` | `boolean` | `false` | 挂载时自动聚焦。 |

### Calendar 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `DateValue \| DateValue[] \| undefined` | 选中值变化。 |
| `update:placeholder` | `DateValue` | 可见月份变化。 |

### Calendar 插槽

| 插槽 | 属性 | 说明 |
|------|-------|-------------|
| `heading` | `{ date }` | 自定义标题内容。 |
| `cell` | `{ day }` | 自定义日期单元格内容。 |
| `prev-icon` | - | 自定义上一月图标。 |
| `next-icon` | - | 自定义下一月图标。 |

## 无障碍

- 日历使用 `role="application"`，并支持完整的键盘导航（方向键、Home/End、PageUp/PageDown）。
- 选中的日期通过 `aria-selected` 播报。
- 禁用的日期带有 `data-disabled`。
