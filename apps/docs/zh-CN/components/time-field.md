# TimeField 时间字段

基于 `@internationalized/date` 构建的分段式时间输入。API 与 DateField 保持一致，但专注于时/分/秒。

## 导入

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date'
import { TimeField } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/time-field-basic.vue

:::

## API

### TimeField 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `DateValue` | `undefined` | 受控值。 |
| `defaultValue` | `DateValue` | `undefined` | 初始非受控值。 |
| `placeholder` | `DateValue` | `undefined` | 为空时显示的时间。 |
| `defaultPlaceholder` | `DateValue` | `undefined` | 初始占位值。 |
| `locale` | `string` | `'en-US'` | 标签使用的语言环境。 |
| `granularity` | `'hour' \| 'minute' \| 'second'` | `'minute'` | 显示的最小时间单位。 |
| `hourCycle` | `12 \| 24` | `24` | 12 小时制或 24 小时制。 |
| `hideTimeZone` | `boolean` | `true` | 隐藏时区分段。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |
| `isInvalid` | `boolean` | `false` | 标记为无效。 |
| `isRequired` | `boolean` | `false` | 标记为必填。 |
| `readonly` | `boolean` | `false` | 只读输入。 |
| `fullWidth` | `boolean` | `false` | 拉伸至父容器宽度。 |
| `label` | `string` | `undefined` | 字段上方的标签。 |
| `description` | `string` | `undefined` | 下方的辅助说明文字。 |
| `errorMessage` | `string` | `undefined` | 下方的错误信息。 |

### TimeField 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `DateValue \| undefined` | 值变化时触发。 |
| `update:placeholder` | `DateValue` | 占位值变化时触发。 |

## 无障碍

- 与 DateField 相同的分段编辑键盘交互模型。
