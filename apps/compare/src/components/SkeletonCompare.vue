<script setup lang="ts">
import { Skeleton } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Default</h3>
      <Skeleton class="h-4 w-48 rounded-sm" />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Variants</h3>
      <div style="display: grid; gap: 0.5rem">
        <Skeleton variant="default" class="h-4 w-48 rounded-sm" />
        <Skeleton variant="shimmer" class="h-4 w-48 rounded-sm" />
        <Skeleton variant="pulse" class="h-4 w-48 rounded-sm" />
        <Skeleton variant="none" class="h-4 w-48 rounded-sm" />
      </div>
    </section>
  </div>
</template>