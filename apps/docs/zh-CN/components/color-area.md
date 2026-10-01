# ColorArea 颜色区域

将指针位置映射为指定色相下饱和度与亮度的二维选择器。与 `ColorSlider` 搭配可实现完整的 HSV 式编辑。

## 导入

```vue
<script setup lang="ts">
import { ColorArea } from '@misaki-mei/heroui-vue'
</script>
```

## API

### ColorArea 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `hue` | `number` | `0` | 色相背景（0-360）。 |
| `saturation` | `number` | `100` | X 轴饱和度（0-100）。 |
| `lightness` | `number` | `50` | Y 轴亮度（0-100）。 |
| `xChannel` | `'saturation' \| 'lightness'` | `'saturation'` | 映射到 X 轴的通道。 |
| `yChannel` | `'saturation' \| 'lightness'` | `'lightness'` | 映射到 Y 轴的通道。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |

### ColorArea 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:saturation` | `number` | X 位置变化时触发。 |
| `update:lightness` | `number` | Y 位置变化时触发。 |
| `change` | `[saturation, lightness]` | 组合发出的变更事件。 |

## 无障碍

- 根元素具有 `role="slider"` 和 `aria-valuemin/max=100`。
