<template>
  <div class="demo-badge-stack">
    <template
      v-for="(variant, index) in variants"
      :key="variant"
    >
      <div class="demo-badge-section">
        <h4 class="demo-badge-heading">
          {{ variant }}
        </h4>
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
              size="sm"
              :variant="variant"
            >
              5
            </Badge>
          </BadgeAnchor>
        </div>
      </div>
      <Separator v-if="index < variants.length - 1" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor, Separator } from '@misaki-mei/heroui-vue'

const avatarUrl = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg'
const variants = ['primary', 'secondary', 'soft'] as const
const colors = ['accent', 'default', 'success', 'warning', 'danger'] as const
</script>

<style lang="less">
.demo-badge-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
}

.demo-badge-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.demo-badge-stack .demo-badge-heading {
  margin: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: capitalize;
}

.demo-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}
</style>
