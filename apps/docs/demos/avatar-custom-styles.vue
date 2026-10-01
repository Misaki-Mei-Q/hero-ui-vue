<template>
  <div class="demo-avatar-row">
    <Avatar class="demo-avatar-xl">
      <AvatarImage
        alt="Extra Large"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
      />
      <AvatarFallback>XL</AvatarFallback>
    </Avatar>

    <Avatar class="demo-avatar-square">
      <AvatarImage
        alt="Square Avatar"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg"
      />
      <AvatarFallback class="demo-avatar-square">
        SQ
      </AvatarFallback>
    </Avatar>

    <Avatar class="demo-avatar-gradient-border">
      <div class="demo-avatar-gradient-inner">
        <AvatarImage
          alt="Gradient Border"
          class="demo-avatar-rounded-image"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
        />
        <AvatarFallback>GB</AvatarFallback>
      </div>
    </Avatar>

    <div class="demo-avatar-status-wrap">
      <Avatar>
        <AvatarImage
          alt="Online User"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
        />
        <AvatarFallback>ON</AvatarFallback>
      </Avatar>
      <span class="demo-avatar-status" />
    </div>
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

.demo-avatar-xl {
  width: 4rem;
  height: 4rem;
}

.demo-avatar-square {
  border-radius: 0.5rem;
}

.demo-avatar-gradient-border {
  padding: 0.125rem;
  background: linear-gradient(45deg, rgb(236 72 153), rgb(234 179 8));
}

.demo-avatar-gradient-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 999px;
  background: var(--vp-c-bg);
}

.demo-avatar-rounded-image {
  border-radius: 999px;
}

.demo-avatar-status-wrap {
  position: relative;
}

.demo-avatar-status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background: rgb(34 197 94);
  box-shadow: 0 0 0 2px var(--vp-c-bg);
}
</style>
