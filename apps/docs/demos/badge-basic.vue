<template>
  <div class="demo-badge-row">
    <BadgeAnchor>
      <Avatar>
        <AvatarImage :src="greenAvatar" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge color="danger" size="sm">5</Badge>
    </BadgeAnchor>

    <BadgeAnchor>
      <Avatar>
        <AvatarImage :src="orangeAvatar" alt="AB" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Badge color="accent" size="sm">New</Badge>
    </BadgeAnchor>

    <BadgeAnchor>
      <Avatar>
        <AvatarImage :src="blueAvatar" alt="CD" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Badge color="success" placement="bottom-right" size="sm" />
    </BadgeAnchor>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor } from '@misaki-mei-q/heroui-vue'

const greenAvatar = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg'
const orangeAvatar = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg'
const blueAvatar = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg'
</script>

<style lang="less">
.demo-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}
</style>
