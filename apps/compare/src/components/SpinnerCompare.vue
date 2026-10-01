<script setup lang="ts">
import { Spinner } from '@misaki-mei/heroui-vue'

const colors = ['current', 'accent', 'success', 'warning', 'danger'] as const
const sizes = ['sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Colors</h3>
      <div class="compare-grid">
        <Spinner v-for="color in colors" :key="color" :color="color" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div class="compare-grid" style="align-items: center">
        <Spinner v-for="size in sizes" :key="size" :size="size" />
      </div>
    </section>
  </div>
</template>