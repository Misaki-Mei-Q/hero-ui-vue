# DateField 日期字段

基于 `@internationalized/date` 构建的分段式日期输入。支持年/月/日分段，并提供完整的键盘导航。

## 导入

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DateField } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/date-field-basic.vue

:::

### 必填

:::preview

demo-preview=../../demos/date-field-required.vue

:::

## API

### DateField 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `DateValue` | `undefined` | 受控值。 |
| `defaultValue` | `DateValue` | `undefined` | 初始的非受控值。 |
| `placeholder` | `DateValue` | `undefined` | 为空时显示的月份/年份。 |
| `defaultPlaceholder` | `DateValue` | `undefined` | 初始占位值。 |
| `locale` | `string` | `'en-US'` | 标签使用的区域设置。 |
| `granularity` | `'day' \| 'hour' \| 'minute' \| 'second'` | `'day'` | 显示的最小单位。 |
| `hideTimeZone` | `boolean` | `false` | 隐藏时区分段。 |
| `minValue` | `DateValue` | `undefined` | 可选的最早日期。 |
| `maxValue` | `DateValue` | `undefined` | 可选的最晚日期。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |
| `isInvalid` | `boolean` | `false` | 标记为无效。 |
| `isRequired` | `boolean` | `false` | 标记为必填。 |
| `readonly` | `boolean` | `false` | 只读输入。 |
| `fullWidth` | `boolean` | `false` | 拉伸至父级宽度。 |
| `label` | `string` | `undefined` | 字段上方的标签。 |
| `description` | `string` | `undefined` | 下方的辅助文本。 |
| `errorMessage` | `string` | `undefined` | 下方的错误信息。 |

### DateField 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `DateValue \| undefined` | 值变化时触发。 |
| `update:placeholder` | `DateValue` | 占位值变化时触发。 |

## 无障碍

- 每个分段都是可聚焦元素，带有 `contenteditable="true"`（字面量分段为 `false`）。
- 方向键在分段之间移动；数字键编辑当前聚焦的分段。
