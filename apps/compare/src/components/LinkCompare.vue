<script setup lang="ts">
import { Link } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Default</h3>
      <Link href="https://heroui.com" target="_blank">External link</Link>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Inline</h3>
      <p>
        Read our <Link href="https://heroui.com/docs">docs</Link> for more.
      </p>
    </section>
  </div>
</template>