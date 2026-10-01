<script setup lang="ts">
import { Separator } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Horizontal</h3>
      <Separator />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Vertical</h3>
      <div style="height: 4rem; display: flex; align-items: center">
        <span>Above</span>
        <Separator orientation="vertical" />
        <span>Below</span>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Inside paragraph</h3>
      <p>
        First
        <Separator orientation="vertical" />
        Middle
        <Separator orientation="vertical" />
        Last
      </p>
    </section>
  </div>
</template>