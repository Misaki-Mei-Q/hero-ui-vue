<template>
  <div class="demo-list-box-controlled">
    <Surface class="demo-list-box-surface">
      <ListBox v-model:selected-keys="selected" aria-label="Users" selection-mode="multiple">
        <ListBoxItem v-for="user in users" :id="user.id" :key="user.id" :text-value="user.name">
          <Avatar size="sm">
            <AvatarImage :alt="user.name" :src="user.avatar" />
            <AvatarFallback>{{ user.fallback }}</AvatarFallback>
          </Avatar>
          <div class="demo-list-box-user">
            <Label>{{ user.name }}</Label>
            <Description>{{ user.email }}</Description>
          </div>
          <ListBoxItemIndicator>
            <template #default="{ isSelected }">
              <svg v-if="isSelected" aria-hidden="true" class="demo-list-box-check" fill="none" viewBox="0 0 16 16">
                <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            </template>
          </ListBoxItemIndicator>
        </ListBoxItem>
      </ListBox>
    </Surface>
    <p>Selected: {{ selected.length > 0 ? selected.join(', ') : 'None' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Avatar, AvatarFallback, AvatarImage, Description, Label, ListBox, ListBoxItem, ListBoxItemIndicator, Surface } from '@misaki-mei/heroui-vue'

const selected = ref<Array<string | number>>(['1'])
const users = [
  { id: '1', name: 'Bob', email: 'bob@heroui.com', avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg', fallback: 'B' },
  { id: '2', name: 'Fred', email: 'fred@heroui.com', avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg', fallback: 'F' },
  { id: '3', name: 'Martha', email: 'martha@heroui.com', avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg', fallback: 'M' },
]
</script>

<style lang="less">
.demo-list-box-controlled {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  p {
    margin: 0;
    color: var(--color-muted);
    font-size: 0.875rem;
  }
}

.demo-list-box-surface {
  width: 16rem;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-surface);
}

.demo-list-box-user {
  display: flex;
  flex-direction: column;
}

.demo-list-box-check {
  width: 1rem;
  height: 1rem;
  color: var(--color-accent);
}
</style>
