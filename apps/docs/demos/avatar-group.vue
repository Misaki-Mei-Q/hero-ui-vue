<template>
  <div class="demo-avatar-stack">
    <div class="demo-avatar-group">
      <Avatar
        v-for="user in users.slice(0, 4)"
        :key="user.id"
        class="demo-avatar-ring"
      >
        <AvatarImage
          :alt="user.name"
          :src="user.image"
        />
        <AvatarFallback>{{ initials(user.name) }}</AvatarFallback>
      </Avatar>
    </div>

    <div class="demo-avatar-group">
      <Avatar
        v-for="user in users.slice(0, 3)"
        :key="user.id"
        class="demo-avatar-ring"
      >
        <AvatarImage
          :alt="user.name"
          :src="user.image"
        />
        <AvatarFallback>{{ initials(user.name) }}</AvatarFallback>
      </Avatar>
      <Avatar class="demo-avatar-ring">
        <AvatarFallback class="demo-avatar-counter">
          +{{ users.length - 3 }}
        </AvatarFallback>
      </Avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@misaki-mei/heroui-vue'

const users = [
  {
    id: 1,
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg',
    name: 'John Doe',
  },
  {
    id: 2,
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg',
    name: 'Kate Wilson',
  },
  {
    id: 3,
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg',
    name: 'Emily Chen',
  },
  {
    id: 4,
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg',
    name: 'Michael Brown',
  },
  {
    id: 5,
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg',
    name: 'Olivia Davis',
  },
]

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
</script>

<style lang="less">
.demo-avatar-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.demo-avatar-group {
  display: flex;
}

.demo-avatar-group > .avatar + .avatar {
  margin-left: -0.5rem;
}

.demo-avatar-ring {
  box-shadow: 0 0 0 2px var(--vp-c-bg);
}

.demo-avatar-counter {
  font-size: 0.75rem;
}
</style>
