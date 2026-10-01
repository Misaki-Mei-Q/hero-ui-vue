<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue'

const variants = ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'danger', 'danger-soft'] as const
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Variants</h3>
      <div class="compare-grid">
        <Button v-for="variant in variants" :key="variant" :variant="variant">
          {{ variant }}
        </Button>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Sizes</h3>
      <div class="compare-grid">
        <Button v-for="size in sizes" :key="size" :size="size">
          {{ size }}
        </Button>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">States</h3>
      <div class="compare-grid">
        <Button is-disabled>disabled</Button>
        <Button is-pending>pending</Button>
        <Button is-icon-only aria-label="icon-only">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Button>
        <Button full-width>full width</Button>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Variant × size matrix</h3>
      <div style="display: grid; gap: 0.5rem">
        <div v-for="variant in variants" :key="variant" style="display: flex; gap: 0.5rem; align-items: center">
          <span style="width: 6rem; font-size: 0.75rem; color: var(--muted-foreground)">{{ variant }}</span>
          <Button v-for="size in sizes" :key="size" :variant="variant" :size="size">
            {{ size }}
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>