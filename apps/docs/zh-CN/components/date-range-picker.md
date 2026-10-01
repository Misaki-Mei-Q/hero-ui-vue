# DateRangePicker 日期范围选择器

组合式输入 + 范围日历控件。触发器显示格式化后的日期范围；点击后打开包含 `RangeCalendar` 的弹出层。

## 导入

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DateRangePicker } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/date-range-picker-basic.vue

:::

## API

### DateRangePicker 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `DateRange` | `undefined` | 受控的范围。 |
| `defaultValue` | `DateRange` | `undefined` | 初始的非受控范围。 |
| `placeholder` | `DateValue` | `undefined` | 未选择范围时显示的月份。 |
| `defaultPlaceholder` | `DateValue` | `undefined` | 初始占位值。 |
| `locale` | `string` | `'en-US'` | 格式化使用的区域设置。 |
| `granularity` | `'day' \| 'hour' \| 'minute' \| 'second'` | `'day'` | 显示的最小单位。 |
| `hideTimeZone` | `boolean` | `false` | 隐藏时区分段。 |
| `minValue` | `DateValue` | `undefined` | 可选的最早日期。 |
| `maxValue` | `DateValue` | `undefined` | 可选的最晚日期。 |
| `isDateDisabled` | `(date: DateValue) => boolean` | `undefined` | 将日期标记为禁用。 |
| `isDateUnavailable` | `(date: DateValue) => boolean` | `undefined` | 将日期标记为不可选。 |
| `weekStartsOn` | `0 \| 1 \| ... \| 6` | `undefined` | 一周的第一天。 |
| `weekdayFormat` | `'narrow' \| 'short' \| 'long'` | `undefined` | 星期标签格式。 |
| `fixedWeeks` | `boolean` | `undefined` | 始终渲染六周。 |
| `numberOfMonths` | `number` | `2` | 并排显示的月份数。 |
| `labelText` | `string` | `undefined` | 渲染在触发器上方的标签。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |
| `isInvalid` | `boolean` | `false` | 标记为无效。 |
| `isRequired` | `boolean` | `false` | 标记为必填。 |
| `fullWidth` | `boolean` | `false` | 拉伸至父级宽度。 |

### DateRangePicker 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `DateRange` | 范围变化。 |
| `update:placeholder` | `DateValue` | 显示月份变化。 |
| `openChange` | `boolean` | 弹出层打开状态变化。 |

### DateRangePicker 插槽

| 插槽 | 说明 |
|------|-------------|
| `trigger` | 替换默认触发按钮。 |
| `label` | 自定义标签内容。 |
| `separator` | 替换默认的 "–" 分隔符。 |

## 无障碍

- 触发器暴露 `aria-haspopup="dialog"` 和 `aria-expanded`。
- `Esc` 关闭弹出层并将焦点返回触发器。
