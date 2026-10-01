<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@misaki-mei/heroui-vue'

const checked = ref(false)
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div class="compare-grid">
        <Switch size="sm" :model-value="true">Small</Switch>
        <Switch size="md" :model-value="true">Medium</Switch>
        <Switch size="lg" :model-value="true">Large</Switch>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">States</h3>
      <div class="compare-grid">
        <Switch>Off</Switch>
        <Switch :model-value="true">On</Switch>
        <Switch is-disabled>Disabled off</Switch>
        <Switch is-disabled :model-value="true">Disabled on</Switch>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Controlled</h3>
      <div class="compare-grid">
        <Switch v-model="checked">Controlled ({{ checked ? 'on' : 'off' }})</Switch>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Icon inside thumb</h3>
      <div class="compare-grid">
        <Switch :model-value="true" aria-label="dark-mode">
          <template #icon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </template>
        </Switch>
      </div>
    </section>
  </div>
</template>