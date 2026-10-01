<script setup lang="ts">
import { ProgressCircle } from '@misaki-mei/heroui-vue'

const colors = ['default', 'accent', 'success', 'warning', 'danger'] as const
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Determinate at 65%</h3>
      <ProgressCircle :value="65" />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Indeterminate</h3>
      <ProgressCircle />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Colors</h3>
      <div class="compare-grid" style="align-items: center">
        <ProgressCircle v-for="color in colors" :key="color" :color="color" :value="70" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div class="compare-grid" style="align-items: center">
        <ProgressCircle v-for="size in sizes" :key="size" :size="size" :value="60" />
      </div>
    </section>
  </div>
</template>