<script setup lang="ts">
import { Chip } from '@misaki-mei/heroui-vue'

const colors = ['default', 'accent', 'success', 'warning', 'danger'] as const
const variants = ['primary', 'secondary', 'tertiary', 'soft'] as const
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Colors</h3>
      <div class="compare-grid">
        <Chip v-for="color in colors" :key="color" :color="color">
          {{ color }}
        </Chip>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div class="compare-grid">
        <Chip v-for="size in sizes" :key="size" :size="size">
          {{ size }}
        </Chip>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Variant × color matrix</h3>
      <div style="display: grid; gap: 0.5rem">
        <div v-for="variant in variants" :key="variant" style="display: flex; gap: 0.5rem; align-items: center">
          <span style="width: 5rem; font-size: 0.75rem; color: var(--muted-foreground)">{{ variant }}</span>
          <Chip v-for="color in colors" :key="color" :variant="variant" :color="color">
            {{ color }}
          </Chip>
        </div>
      </div>
    </section>
  </div>
</template>