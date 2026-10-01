<script setup lang="ts">
import { ProgressBar } from '@misaki-mei/heroui-vue'

const colors = ['default', 'accent', 'success', 'warning', 'danger'] as const
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Determinate at 50%</h3>
      <ProgressBar :value="50" />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Indeterminate</h3>
      <ProgressBar />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Colors</h3>
      <div style="display: grid; gap: 0.75rem">
        <ProgressBar v-for="color in colors" :key="color" :color="color" :value="70" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div style="display: grid; gap: 0.75rem">
        <ProgressBar v-for="size in sizes" :key="size" :size="size" :value="60" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <ProgressBar :value="40" is-disabled />
    </section>
  </div>
</template>