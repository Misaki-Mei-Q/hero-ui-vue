<template>
  <div class="demo-badge-row demo-badge-row--wide">
    <div
      v-for="placement in placements"
      :key="placement"
      class="demo-badge-placement"
    >
      <BadgeAnchor>
        <Avatar>
          <AvatarImage :src="avatarUrl" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Badge
          color="accent"
          :placement="placement"
          size="sm"
        />
      </BadgeAnchor>
      <span class="demo-badge-label">{{ placement }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor } from '@misaki-mei/heroui-vue'

const avatarUrl = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg'
const placements = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const
</script>

<style lang="less">
.demo-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

.demo-badge-row--wide {
  gap: 2rem;
}

.demo-badge-placement {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.demo-badge-label {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
}
</style>
