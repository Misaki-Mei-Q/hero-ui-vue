<template>
  <div class="demo-badge-row">
    <BadgeAnchor
      v-for="size in sizes"
      :key="size"
    >
      <Avatar :size="size">
        <AvatarImage :src="avatarUrl" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge
        color="danger"
        :size="size"
      >
        5
      </Badge>
    </BadgeAnchor>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor } from '@misaki-mei-q/heroui-vue'

const avatarUrl = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg'
const sizes = ['sm', 'md', 'lg'] as const
</script>

<style lang="less">
.demo-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}
</style>
