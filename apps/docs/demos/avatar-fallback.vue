<template>
  <div class="demo-avatar-row">
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback>
        <PersonIcon />
      </AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarImage
        alt="Delayed Avatar"
        src="https://invalid-url-to-show-fallback.com/image.jpg"
      />
      <AvatarFallback :delay-ms="600">
        NA
      </AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarFallback class="demo-avatar-gradient-fallback">
        GB
      </AvatarFallback>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@misaki-mei/heroui-vue'

const PersonIcon = defineComponent({
  setup() {
    return () =>
      h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true',
        },
        [
          h('path', { d: 'M20 21a8 8 0 0 0-16 0' }),
          h('path', { d: 'M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z' }),
        ],
      )
  },
})
</script>

<style lang="less">
.demo-avatar-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.avatar svg {
  width: 1rem;
  height: 1rem;
}

.demo-avatar-gradient-fallback {
  background: linear-gradient(135deg, rgb(236 72 153), rgb(168 85 247));
  color: white;
}
</style>
