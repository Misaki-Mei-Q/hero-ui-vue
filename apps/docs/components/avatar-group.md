# AvatarGroup

Stacks a row of `Avatar` components with overlapping borders. When the total exceeds `max`, renders a "+N" badge to indicate hidden members.

## Import

```vue
<script setup lang="ts">
import { AvatarGroup, Avatar, AvatarFallback } from '@misaki-mei/heroui-vue'
</script>
```

## Usage

### Basic

:::preview

demo-preview=../demos/avatar-group-basic.vue

:::

## API

### AvatarGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `max` | `number` | `5` | Maximum visible avatars before collapsing to a "+N" badge. |
| `total` | `number` | `undefined` | Total avatar count, including ones outside the slot. When provided, the "+N" badge counts `total - max` regardless of how many `Avatar` children are passed. |
| `class` | `string` | `undefined` | Extra class on the group root. |

### AvatarGroup Slots

| Slot | Description |
|------|-------------|
| `default` | Avatar children to render. |

## Accessibility

- The "+N" badge exposes `aria-label="More users"`.