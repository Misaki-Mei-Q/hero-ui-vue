<template>
  <div class="demo-badge-row">
    <BadgeAnchor>
      <Avatar>
        <AvatarImage :src="avatarUrl" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge color="danger" size="sm">5</Badge>
    </BadgeAnchor>

    <BadgeAnchor>
      <Avatar>
        <AvatarImage :src="avatarUrl" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge color="danger" size="sm">New</Badge>
    </BadgeAnchor>

    <BadgeAnchor>
      <Avatar>
        <AvatarImage :src="avatarUrl" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge color="danger" size="sm">99+</Badge>
    </BadgeAnchor>

    <BadgeAnchor>
      <Avatar>
        <AvatarImage :src="avatarUrl" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge color="accent" size="sm">
        <BellIcon />
      </Badge>
    </BadgeAnchor>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor } from '@misaki-mei/heroui-vue'

const avatarUrl = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg'

const BellIcon = defineComponent({
  setup() {
    return () =>
      h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true',
        },
        [
          h('path', { d: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9' }),
          h('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' }),
        ],
      )
  },
})
</script>

<style lang="less">
.demo-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

.badge svg {
  width: 0.625rem;
  height: 0.625rem;
}
</style>
