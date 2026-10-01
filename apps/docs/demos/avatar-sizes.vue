<template>
  <div class="demo-avatar-row">
    <Avatar size="sm">
      <AvatarImage
        alt="Small Avatar"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
      />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <Avatar size="md">
      <AvatarImage
        alt="Medium Avatar"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg"
      />
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarImage
        alt="Large Avatar"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
      />
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-avatar-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
</style>
