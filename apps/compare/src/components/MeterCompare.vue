<script setup lang="ts">
import { Meter } from '@misaki-mei/heroui-vue'

const colors = ['default', 'accent', 'success', 'warning', 'danger'] as const
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Default at 45%</h3>
      <Meter :value="45" />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Colors</h3>
      <div style="display: grid; gap: 0.75rem">
        <Meter v-for="color in colors" :key="color" :color="color" :value="70" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div style="display: grid; gap: 0.75rem">
        <Meter v-for="size in sizes" :key="size" :size="size" :value="60" />
      </div>
    </section>
  </div>
</template>