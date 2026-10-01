<template>
  <div class="demo-avatar-row">
    <Avatar>
      <AvatarImage
        alt="John Doe"
        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        alt="Blue"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
      />
      <AvatarFallback>B</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>JR</AvatarFallback>
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
