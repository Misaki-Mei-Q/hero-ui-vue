<template>
  <div class="demo-chip-variants">
    <template
      v-for="(size, sizeIndex) in sizes"
      :key="size"
    >
      <div class="demo-chip-section">
        <h4 class="demo-chip-heading">
          {{ size }}
        </h4>
        <div class="demo-chip-variant-row">
          <div class="demo-chip-variant-label" />
          <div
            v-for="color in colors"
            :key="color"
            class="demo-chip-variant-cell"
          >
            <span class="demo-chip-variant-header">{{ color }}</span>
          </div>
        </div>
        <div class="demo-chip-variant-grid">
          <div
            v-for="variant in variants"
            :key="variant"
            class="demo-chip-variant-row"
          >
            <div class="demo-chip-variant-label">
              {{ variant }}
            </div>
            <div
              v-for="color in colors"
              :key="color"
              class="demo-chip-variant-cell"
            >
              <Chip
                :color="color"
                :size="size"
                :variant="variant"
              >
                <CircleDashedIcon />
                <ChipLabel>Label</ChipLabel>
                <CircleDashedIcon />
              </Chip>
            </div>
          </div>
        </div>
      </div>
      <Separator v-if="sizeIndex < sizes.length - 1" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Chip, ChipLabel, Separator } from '@misaki-mei/heroui-vue'

const sizes = ['lg', 'md', 'sm'] as const
const variants = ['primary', 'secondary', 'tertiary', 'soft'] as const
const colors = ['accent', 'default', 'success', 'warning', 'danger'] as const

const CircleDashedIcon = defineComponent({
  setup() {
    return () =>
      h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true',
        },
        [
          h('path', { d: 'M10.1 2.2a10 10 0 0 1 3.8 0' }),
          h('path', { d: 'M17.6 4.2a10 10 0 0 1 2.2 2.2' }),
          h('path', { d: 'M21.8 10.1a10 10 0 0 1 0 3.8' }),
          h('path', { d: 'M19.8 17.6a10 10 0 0 1-2.2 2.2' }),
          h('path', { d: 'M13.9 21.8a10 10 0 0 1-3.8 0' }),
          h('path', { d: 'M6.4 19.8a10 10 0 0 1-2.2-2.2' }),
          h('path', { d: 'M2.2 13.9a10 10 0 0 1 0-3.8' }),
          h('path', { d: 'M4.2 6.4a10 10 0 0 1 2.2-2.2' }),
        ],
      )
  },
})
</script>

<style lang="less">
.demo-chip-variants {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 2rem;
  overflow-x: auto;
  text-align: left;
}

.demo-chip-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-chip-variants .demo-chip-heading {
  margin: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: capitalize;
}

.demo-chip-variant-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.demo-chip-variant-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.demo-chip-variant-label {
  width: 6rem;
  flex-shrink: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  text-transform: capitalize;
}

.demo-chip-variant-cell {
  display: flex;
  width: 8.125rem;
  flex-shrink: 0;
  justify-content: center;
}

.demo-chip-variant-header {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
  text-transform: capitalize;
}

.chip svg {
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
}
</style>
