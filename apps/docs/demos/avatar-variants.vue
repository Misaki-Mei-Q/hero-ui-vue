<template>
  <div class="demo-avatar-variants">
    <div class="demo-avatar-variant-row">
      <div class="demo-avatar-variant-label" />
      <div
        v-for="color in colors"
        :key="color"
        class="demo-avatar-variant-cell"
      >
        <span class="demo-avatar-variant-header">{{ color }}</span>
      </div>
    </div>

    <Separator />

    <div
      v-for="row in rows"
      :key="row.label"
      class="demo-avatar-variant-row"
    >
      <div class="demo-avatar-variant-label">
        {{ row.label }}
      </div>
      <div
        v-for="(color, colorIndex) in colors"
        :key="color"
        class="demo-avatar-variant-cell"
      >
        <Avatar
          :color="color"
          :variant="row.soft ? 'soft' : undefined"
        >
          <AvatarImage
            v-if="row.type === 'img'"
            :alt="`Avatar ${color}`"
            :src="images[colorIndex]"
          />
          <AvatarFallback>
            <PersonIcon v-if="row.type === 'icon'" />
            <template v-else>
              {{ color.slice(0, 1).toUpperCase() }}{{ row.type === 'img' ? '' : 'G' }}
            </template>
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Avatar, AvatarFallback, AvatarImage, Separator } from '@misaki-mei/heroui-vue'

const colors = ['accent', 'default', 'success', 'warning', 'danger'] as const
const images = [
  'https://img.heroui.chat/image/avatar?w=400&h=400&u=3',
  'https://img.heroui.chat/image/avatar?w=400&h=400&u=4',
  'https://img.heroui.chat/image/avatar?w=400&h=400&u=5',
  'https://img.heroui.chat/image/avatar?w=400&h=400&u=8',
  'https://img.heroui.chat/image/avatar?w=400&h=400&u=16',
]

const rows = [
  { label: 'letter', type: 'letter', soft: false },
  { label: 'letter soft', type: 'letter', soft: true },
  { label: 'icon', type: 'icon', soft: false },
  { label: 'icon soft', type: 'icon', soft: true },
  { label: 'img', type: 'img', soft: false },
] as const

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
.demo-avatar-variants {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 1rem;
  overflow-x: auto;
  text-align: left;
}

.demo-avatar-variant-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.demo-avatar-variant-label {
  width: 6rem;
  flex-shrink: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
}

.demo-avatar-variant-cell {
  display: flex;
  width: 5rem;
  flex-shrink: 0;
  justify-content: center;
}

.demo-avatar-variant-header {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
  text-transform: capitalize;
}

.avatar svg {
  width: 1rem;
  height: 1rem;
}
</style>
