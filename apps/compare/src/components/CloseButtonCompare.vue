<script setup lang="ts">
import { CloseButton } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Default</h3>
      <div class="compare-grid">
        <CloseButton aria-label="Close" />
        <CloseButton aria-label="Disabled" is-disabled />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Custom icon</h3>
      <div class="compare-grid">
        <CloseButton aria-label="Custom">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9 9 15" />
            <path d="M9 9l6 6" />
          </svg>
        </CloseButton>
      </div>
    </section>
  </div>
</template>