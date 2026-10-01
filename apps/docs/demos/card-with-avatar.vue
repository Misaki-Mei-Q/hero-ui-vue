<template>
  <div class="demo-card-row">
    <Card
      v-for="community in communities"
      :key="community.title"
      class="demo-card-small"
    >
      <img
        :alt="community.title"
        class="demo-card-community-image"
        loading="lazy"
        :src="community.image"
      />
      <CardHeader>
        <CardTitle>{{ community.title }}</CardTitle>
        <CardDescription>{{ community.members }} members</CardDescription>
      </CardHeader>
      <CardFooter class="demo-card-footer-inline">
        <Avatar class="demo-card-author-avatar">
          <AvatarImage
            :alt="`${community.author} avatar`"
            :src="community.avatar"
          />
          <AvatarFallback>{{ community.author.slice(0, 1) }}</AvatarFallback>
        </Avatar>
        <span class="demo-card-meta-muted">By {{ community.author }}</span>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@misaki-mei/heroui-vue'

const communities = [
  {
    title: 'Indie Hackers',
    members: 148,
    author: 'Martha',
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg',
    avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg',
  },
  {
    title: 'AI Builders',
    members: 362,
    author: 'John',
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg',
    avatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg',
  },
]
</script>

<style lang="less">
.demo-card-row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
  text-align: left;
}

.demo-card-small {
  width: 12.5rem;
  gap: 0.5rem;
}

.demo-card-community-image {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  object-fit: cover;
}

.demo-card-footer-inline {
  align-items: center;
  gap: 0.5rem;
}

.demo-card-author-avatar {
  width: 1.25rem;
  height: 1.25rem;
}

.demo-card-meta-muted {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
}
</style>
