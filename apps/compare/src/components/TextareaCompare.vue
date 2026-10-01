<script setup lang="ts">
import { ref } from 'vue'
import { Description, Textarea } from '@misaki-mei/heroui-vue'

const value = ref('')
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Variants</h3>
      <div class="compare-grid" style="flex-direction: column; align-items: stretch">
        <Textarea aria-label="Primary" variant="primary" placeholder="Primary textarea" />
        <Textarea aria-label="Secondary" variant="secondary" placeholder="Secondary textarea" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Rows</h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem">
        <Textarea aria-label="rows-3" :rows="3" placeholder="Short feedback..." />
        <Textarea aria-label="rows-6" :rows="6" placeholder="Detailed notes..." style="resize: vertical" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Controlled with description</h3>
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        <Textarea
          aria-label="Announcement"
          placeholder="Compose an announcement..."
          :model-value="value"
          @update:model-value="(v: string | number) => (value = String(v))"
        />
        <Description>Characters: {{ value.length }} / 280</Description>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <Textarea aria-label="Disabled" is-disabled placeholder="Disabled textarea" />
    </section>
  </div>
</template>