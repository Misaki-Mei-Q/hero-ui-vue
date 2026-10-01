# Avatar Group 头像组

将一排 `Avatar` 组件以边框重叠的方式堆叠展示。当总数超过 `max` 时，会渲染一个 “+N” 徽章来表示被隐藏的成员。

## 导入

```vue
<script setup lang="ts">
import { AvatarGroup, Avatar, AvatarFallback } from '@misaki-mei/heroui-vue'
</script>
```

## 用法

### 基础用法

:::preview

demo-preview=../../demos/avatar-group-basic.vue

:::

## API

### AvatarGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `max` | `number` | `5` | 折叠为 “+N” 徽章之前最多可见的头像数量。 |
| `total` | `number` | `undefined` | 头像总数，包含插槽之外的头像。提供后，无论传入多少 `Avatar` 子组件，“+N” 徽章都按 `total - max` 计算。 |
| `class` | `string` | `undefined` | 附加到组根元素的类名。 |

### AvatarGroup 插槽

| 插槽 | 说明 |
|------|-------------|
| `default` | 要渲染的 Avatar 子组件。 |

## 无障碍

- “+N” 徽章暴露了 `aria-label="More users"`。
