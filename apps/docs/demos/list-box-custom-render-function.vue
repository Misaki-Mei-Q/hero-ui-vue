<template>
  <ListBox aria-label="Users" class="demo-list-box" data-custom="true" selection-mode="single">
    <ListBoxItem v-for="user in users" :id="user.id" :key="user.id" data-custom="item" :text-value="user.name">
      <Avatar size="sm">
        <AvatarImage :alt="user.name" :src="user.avatar" />
        <AvatarFallback>{{ user.fallback }}</AvatarFallback>
      </Avatar>
      <div class="demo-list-box-user">
        <Label>{{ user.name }}</Label>
        <Description>{{ user.email }}</Description>
      </div>
      <ListBoxItemIndicator />
    </ListBoxItem>
  </ListBox>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Description, Label, ListBox, ListBoxItem, ListBoxItemIndicator } from '@misaki-mei-q/heroui-vue'

const users = [
  { id: '1', name: 'Bob', email: 'bob@heroui.com', avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg', fallback: 'B' },
  { id: '2', name: 'Fred', email: 'fred@heroui.com', avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg', fallback: 'F' },
  { id: '3', name: 'Martha', email: 'martha@heroui.com', avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg', fallback: 'M' },
]
</script>

<style lang="less">
.demo-list-box {
  width: 13.75rem;
}

.demo-list-box-user {
  display: flex;
  flex-direction: column;
}
</style>
