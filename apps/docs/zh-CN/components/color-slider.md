# ColorSlider 颜色滑块

单通道颜色滑块。支持色相、饱和度、亮度和透明度通道。

## 导入

```vue
<script setup lang="ts">
import { ColorSlider } from '@misaki-mei/heroui-vue'
</script>
```

## API

### ColorSlider 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `modelValue` | `number` | `undefined` | 受控值。 |
| `defaultValue` | `number` | `0` | 初始的非受控值。 |
| `channel` | `'hue' \| 'saturation' \| 'lightness' \| 'alpha'` | `'hue'` | 要编辑的通道。 |
| `saturation` | `number` | `100` | 非色相通道的饱和度上下文。 |
| `lightness` | `number` | `50` | 非色相通道的亮度上下文。 |
| `alpha` | `number` | `1` | 透明度通道的透明度上下文。 |
| `isDisabled` | `boolean` | `false` | 禁用交互。 |

### ColorSlider 事件

| 事件 | 载荷 | 说明 |
|-------|---------|-------------|
| `update:modelValue` | `number` | 值变化时触发。 |
| `change` | `number` | 便捷别名。
