# ColorField 颜色输入框

与原生颜色选择器色块配对的十六进制颜色码输入框。

## 导入

```vue
<script setup lang="ts">
import { ColorField } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

使用 `ColorField` 可通过原生 `<input type="color">` 选择器采集 `#rrggbb` 值，并显示其十六进制颜色码。

## API

### ColorField 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `string` | `undefined` | 受控的十六进制值。 |
| `defaultValue` | `string` | `undefined` | 初始的非受控值。 |
| `placeholder` | `string` | `undefined` | 触发器占位文本。 |
| `label` | `string` | `undefined` | 字段上方的标签。 |
| `description` | `string` | `undefined` | 下方的辅助文本。 |
| `errorMessage` | `string` | `undefined` | 下方的错误信息。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |
| `isInvalid` | `boolean` | `false` | 标记为无效。 |
| `isRequired` | `boolean` | `false` | 标记为必填。 |
| `fullWidth` | `boolean` | `false` | 拉伸至父级宽度。 |

### ColorField 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `string` | 值变化时触发。 |

## 无障碍

- 原生颜色输入保留了平台的全部键盘 / 屏幕阅读器行为。
- `isInvalid` 为 true 时会设置 `aria-invalid`。
