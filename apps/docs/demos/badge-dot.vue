<template>
  <div class="demo-badge-row">
    <BadgeAnchor
      v-for="color in colors"
      :key="color"
    >
      <Avatar>
        <AvatarImage :src="avatarUrl" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge
        :color="color"
        placement="bottom-right"
        size="sm"
      />
    </BadgeAnchor>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor } from '@misaki-mei/heroui-vue'

const avatarUrl = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg'
const colors = ['accent', 'success', 'warning', 'danger'] as const
</script>

<style lang="less">
.demo-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}
</style>
