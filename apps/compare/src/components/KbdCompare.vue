<script setup lang="ts">
import { Kbd } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Single keys</h3>
      <div class="compare-grid">
        <Kbd>Esc</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Space</Kbd>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Combinations</h3>
      <div class="compare-grid" style="align-items: center">
        <p style="display: flex; gap: 0.25rem; align-items: center; margin: 0">
          <Kbd>Ctrl</Kbd>+<Kbd>C</Kbd>to copy
        </p>
        <p style="display: flex; gap: 0.25rem; align-items: center; margin: 0">
          <Kbd>Cmd</Kbd>+<Kbd>V</Kbd>to paste
        </p>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Variants</h3>
      <div class="compare-grid">
        <Kbd>default</Kbd>
        <Kbd variant="light">light</Kbd>
      </div>
    </section>
  </div>
</template>