# Progress Bar 进度条

线性进度指示器。

## 导入

```ts
import { ProgressBar } from '@misaki-mei/heroui-vue'
```

## 用法

:::preview

demo-preview=../../demos/progress-bar-basic.vue

:::

## API

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `value` | `number \| undefined` | `undefined` | 当前值；省略则为不确定状态 |
| `color` | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'accent'` | 填充颜色 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 轨道尺寸 |
