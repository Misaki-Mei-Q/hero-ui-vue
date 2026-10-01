<script setup lang="ts">
import { Badge, BadgeAnchor } from '@misaki-mei/heroui-vue'

const colors = ['default', 'accent', 'success', 'warning', 'danger'] as const
const variants = ['primary', 'secondary', 'soft'] as const
const sizes = ['sm', 'md', 'lg'] as const
const placements = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Colors (dot mode)</h3>
      <div class="compare-grid">
        <BadgeAnchor v-for="color in colors" :key="color">
          <span style="width: 2rem; height: 2rem; display: inline-block; background: var(--default); border-radius: 9999px" />
          <Badge :color="color" placement="bottom-right" size="sm" />
        </BadgeAnchor>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div class="compare-grid">
        <Badge v-for="size in sizes" :key="size" color="accent" :size="size">
          {{ size }}
        </Badge>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Variant × color matrix</h3>
      <div style="display: grid; gap: 0.5rem">
        <div v-for="variant in variants" :key="variant" style="display: flex; gap: 0.5rem; align-items: center">
          <span style="width: 5rem; font-size: 0.75rem; color: var(--muted-foreground)">{{ variant }}</span>
          <Badge v-for="color in colors" :key="color" :variant="variant" :color="color" size="sm">
            {{ color }}
          </Badge>
        </div>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Placements</h3>
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem">
        <BadgeAnchor v-for="placement in placements" :key="placement">
          <span style="width: 2.5rem; height: 2.5rem; display: inline-block; background: var(--default); border-radius: 9999px" />
          <Badge color="accent" :placement="placement" size="sm" />
        </BadgeAnchor>
      </div>
    </section>
  </div>
</template>